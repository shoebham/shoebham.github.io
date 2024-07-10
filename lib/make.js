#! /usr/bin/env node
const { existsSync, mkdirSync, readFileSync, writeFileSync } = require("fs");
const { basename, extname, dirname, join } = require("path");
const { program } = require("commander");
const { JSDOM } = require("jsdom");

const { minify } = require("html-minifier-terser");

const { parse, render } = require("./dist/imml.umd");

const output = join(process.cwd(), "dist", "<imml file>", "index.html");
const style = join(__dirname, "style.css");

program
  .arguments("<file>")
  .description(
    "generates minimalist, blazing fast no-js static sites from a single plain text file",
    {
      file: "imml file to parse",
    }
  )
  .option(
    "-o, --output <directory>",
    "directory to export the generated html file to",
    output
  )
  .option(
    "-s, --style <file>",
    "stylesheet file to use instead of the default one",
    style
  )
  .action(async (file, options, command) => {
    if (!existsSync(file)) {
      throw `file '${file}' does not exists`;
    }
    var contents = readFileSync(file, { encoding: "utf8", flag: "r" });
    const date = new Date();
    const year = date.getFullYear();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const formattedDate = `${day} ${month} ${year}`;
    contents = contents.replace("$date", formattedDate);
    const data = parse(contents);

    console.log("hello");
    const jsdom = new JSDOM(
      [
        `<!doctype html>`,
        `<html>`,
        `<head>
        <script data-website-id="0aad51ca-c7c4-481b-a80c-77f36e629d59" src="https://cloud.umami.is/script.js"></script>`,
        `<meta charset="UTF-8">`,
        `<meta http-equiv="X-UA-Compatible" content="IE=edge">`,
        `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
        `</head>`,
        `<body>`,
        `</body>`,
        `</html>`,
      ].join("")
    );

    if (!existsSync(options.style)) {
      throw `Stylesheet '${file}' does not exists`;
    }
    const style = readFileSync(options.style, { encoding: "utf8", flag: "r" });
    jsdom.window.document.head.insertAdjacentHTML(
      "beforeend",
      `<style>${style}</style>`
    );

    const output = options.output.replace(
      "<imml file>",
      basename(file, extname(file))
    );

    render(data, jsdom.window.document);
    addUmamiTracking(jsdom.window.document);
    let serialized = jsdom.serialize();

    serialized = await minify(serialized, {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      html5: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeTagWhitespace: true,
      sortAttributes: true,
      sortClassName: true,
      trimCustomFragments: true,
      useShortDoctype: true,
    });

    mkdirSync(dirname(output), { recursive: true });
    writeFileSync(output, serialized);
  });

program.parse();

function addUmamiTracking(document) {
  let pages = document.getElementsByClassName("page");
  Array.from(pages).forEach((page) => {
    let id = page.id;
    if (id) {
      page.setAttribute("data-umami-event", id);
    }
  });

  // Add script to handle Umami tracking
  let script = document.createElement("script");
  script.textContent = `
    function waitForUmami(callback) {
      if (window.umami) {
        callback();
      } else {
        setTimeout(() => waitForUmami(callback), 100);
      }
    }

    waitForUmami(() => {
      console.log('Umami is loaded and ready');
      
      // Track initial page view
      let hash = window.location.hash.substring(1) || 'home';
      umami.trackEvent(hash);

      // Add click listeners to page elements
      document.querySelectorAll('.page[data-umami-event]').forEach(page => {
        page.addEventListener('click', () => {
          let eventName = page.getAttribute('data-umami-event');
          console.log('Tracking event:', eventName);
          umami.trackEvent(eventName);
        });
      });

      // Handle hash changes for SPA navigation
      window.addEventListener('hashchange', () => {
        let newHash = window.location.hash.substring(1) || 'home';
        console.log('Hash changed, tracking:', newHash);
        umami.trackEvent(newHash);
      });
    });
  `;
  document.body.appendChild(script);
}
