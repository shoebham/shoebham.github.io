var e = Object.defineProperty,
  t = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  r = (t, u, n) =>
    u in t
      ? e(t, u, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[u] = n),
  i =
    ("undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self && self,
    { exports: {} }),
  s = (i.exports = (function () {
    function e(e, t) {
      for (var u = 0; u < t.length; u++) {
        var n = t[u];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    function t(t, u, n) {
      return u && e(t.prototype, u), n && e(t, n), t;
    }
    function u(e, t) {
      if (e) {
        if ("string" == typeof e) return n(e, t);
        var u = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === u && e.constructor && (u = e.constructor.name),
          "Map" === u || "Set" === u
            ? Array.from(e)
            : "Arguments" === u ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
            ? n(e, t)
            : void 0
        );
      }
    }
    function n(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
      return n;
    }
    function r(e, t) {
      var n =
        ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (n) return (n = n.call(e)).next.bind(n);
      if (
        Array.isArray(e) ||
        (n = u(e)) ||
        (t && e && "number" == typeof e.length)
      ) {
        n && (e = n);
        var r = 0;
        return function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var i = { exports: {} };
    function s() {
      return {
        baseUrl: null,
        breaks: !1,
        gfm: !0,
        headerIds: !0,
        headerPrefix: "",
        highlight: null,
        langPrefix: "language-",
        mangle: !0,
        pedantic: !1,
        renderer: null,
        sanitize: !1,
        sanitizer: null,
        silent: !1,
        smartLists: !1,
        smartypants: !1,
        tokenizer: null,
        walkTokens: null,
        xhtml: !1,
      };
    }
    function l(e) {
      i.exports.defaults = e;
    }
    i.exports = { defaults: s(), getDefaults: s, changeDefaults: l };
    var a = /[&<>"']/,
      o = /[&<>"']/g,
      D = /[<>"']|&(?!#?\w+;)/,
      c = /[<>"']|&(?!#?\w+;)/g,
      p = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      h = function (e) {
        return p[e];
      };
    function g(e, t) {
      if (t) {
        if (a.test(e)) return e.replace(o, h);
      } else if (D.test(e)) return e.replace(c, h);
      return e;
    }
    var f = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
    function d(e) {
      return e.replace(f, function (e, t) {
        return "colon" === (t = t.toLowerCase())
          ? ":"
          : "#" === t.charAt(0)
          ? "x" === t.charAt(1)
            ? String.fromCharCode(parseInt(t.substring(2), 16))
            : String.fromCharCode(+t.substring(1))
          : "";
      });
    }
    var F = /(^|[^\[])\^/g;
    function A(e, t) {
      (e = e.source || e), (t = t || "");
      var u = {
        replace: function (t, n) {
          return (
            (n = (n = n.source || n).replace(F, "$1")), (e = e.replace(t, n)), u
          );
        },
        getRegex: function () {
          return new RegExp(e, t);
        },
      };
      return u;
    }
    var C = /[^\w:]/g,
      E = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    function k(e, t, u) {
      if (e) {
        var n;
        try {
          n = decodeURIComponent(d(u)).replace(C, "").toLowerCase();
        } catch (r) {
          return null;
        }
        if (
          0 === n.indexOf("javascript:") ||
          0 === n.indexOf("vbscript:") ||
          0 === n.indexOf("data:")
        )
          return null;
      }
      t && !E.test(u) && (u = v(t, u));
      try {
        u = encodeURI(u).replace(/%25/g, "%");
      } catch (r) {
        return null;
      }
      return u;
    }
    var m = {},
      b = /^[^:]+:\/*[^/]*$/,
      x = /^([^:]+:)[\s\S]*$/,
      B = /^([^:]+:\/*[^/]*)[\s\S]*$/;
    function v(e, t) {
      m[" " + e] ||
        (b.test(e) ? (m[" " + e] = e + "/") : (m[" " + e] = _(e, "/", !0)));
      var u = -1 === (e = m[" " + e]).indexOf(":");
      return "//" === t.substring(0, 2)
        ? u
          ? t
          : e.replace(x, "$1") + t
        : "/" === t.charAt(0)
        ? u
          ? t
          : e.replace(B, "$1") + t
        : e + t;
    }
    function w(e) {
      for (var t, u, n = 1; n < arguments.length; n++)
        for (u in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u]);
      return e;
    }
    function y(e, t) {
      var u = e
          .replace(/\|/g, function (e, t, u) {
            for (var n = !1, r = t; --r >= 0 && "\\" === u[r]; ) n = !n;
            return n ? "|" : " |";
          })
          .split(/ \|/),
        n = 0;
      if (u.length > t) u.splice(t);
      else for (; u.length < t; ) u.push("");
      for (; n < u.length; n++) u[n] = u[n].trim().replace(/\\\|/g, "|");
      return u;
    }
    function _(e, t, u) {
      var n = e.length;
      if (0 === n) return "";
      for (var r = 0; r < n; ) {
        var i = e.charAt(n - r - 1);
        if (i !== t || u) {
          if (i === t || !u) break;
          r++;
        } else r++;
      }
      return e.substr(0, n - r);
    }
    function $(e, t) {
      if (-1 === e.indexOf(t[1])) return -1;
      for (var u = e.length, n = 0, r = 0; r < u; r++)
        if ("\\" === e[r]) r++;
        else if (e[r] === t[0]) n++;
        else if (e[r] === t[1] && --n < 0) return r;
      return -1;
    }
    function z(e) {
      e &&
        e.sanitize &&
        !e.silent &&
        console.warn(
          "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
        );
    }
    function S(e, t) {
      if (t < 1) return "";
      for (var u = ""; t > 1; ) 1 & t && (u += e), (t >>= 1), (e += e);
      return u + e;
    }
    var T = {
        escape: g,
        unescape: d,
        edit: A,
        cleanUrl: k,
        resolveUrl: v,
        noopTest: { exec: function () {} },
        merge: w,
        splitCells: y,
        rtrim: _,
        findClosingBracket: $,
        checkSanitizeDeprecation: z,
        repeatString: S,
      },
      I = i.exports.defaults,
      R = T.rtrim,
      O = T.splitCells,
      j = T.escape,
      q = T.findClosingBracket;
    function Z(e, t, u) {
      var n = t.href,
        r = t.title ? j(t.title) : null,
        i = e[1].replace(/\\([\[\]])/g, "$1");
      return "!" !== e[0].charAt(0)
        ? { type: "link", raw: u, href: n, title: r, text: i }
        : { type: "image", raw: u, href: n, title: r, text: j(i) };
    }
    function P(e, t) {
      var u = e.match(/^(\s+)(?:```)/);
      if (null === u) return t;
      var n = u[1];
      return t
        .split("\n")
        .map(function (e) {
          var t = e.match(/^\s+/);
          return null === t
            ? e
            : t[0].length >= n.length
            ? e.slice(n.length)
            : e;
        })
        .join("\n");
    }
    var L = (function () {
        function e(e) {
          this.options = e || I;
        }
        var t = e.prototype;
        return (
          (t.space = function (e) {
            var t = this.rules.block.newline.exec(e);
            if (t)
              return t[0].length > 1
                ? { type: "space", raw: t[0] }
                : { raw: "\n" };
          }),
          (t.code = function (e) {
            var t = this.rules.block.code.exec(e);
            if (t) {
              var u = t[0].replace(/^ {1,4}/gm, "");
              return {
                type: "code",
                raw: t[0],
                codeBlockStyle: "indented",
                text: this.options.pedantic ? u : R(u, "\n"),
              };
            }
          }),
          (t.fences = function (e) {
            var t = this.rules.block.fences.exec(e);
            if (t) {
              var u = t[0],
                n = P(u, t[3] || "");
              return {
                type: "code",
                raw: u,
                lang: t[2] ? t[2].trim() : t[2],
                text: n,
              };
            }
          }),
          (t.heading = function (e) {
            var t = this.rules.block.heading.exec(e);
            if (t) {
              var u = t[2].trim();
              if (/#$/.test(u)) {
                var n = R(u, "#");
                this.options.pedantic
                  ? (u = n.trim())
                  : (n && !/ $/.test(n)) || (u = n.trim());
              }
              return {
                type: "heading",
                raw: t[0],
                depth: t[1].length,
                text: u,
              };
            }
          }),
          (t.nptable = function (e) {
            var t = this.rules.block.nptable.exec(e);
            if (t) {
              var u = {
                type: "table",
                header: O(t[1].replace(/^ *| *\| *$/g, "")),
                align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : [],
                raw: t[0],
              };
              if (u.header.length === u.align.length) {
                var n,
                  r = u.align.length;
                for (n = 0; n < r; n++)
                  /^ *-+: *$/.test(u.align[n])
                    ? (u.align[n] = "right")
                    : /^ *:-+: *$/.test(u.align[n])
                    ? (u.align[n] = "center")
                    : /^ *:-+ *$/.test(u.align[n])
                    ? (u.align[n] = "left")
                    : (u.align[n] = null);
                for (r = u.cells.length, n = 0; n < r; n++)
                  u.cells[n] = O(u.cells[n], u.header.length);
                return u;
              }
            }
          }),
          (t.hr = function (e) {
            var t = this.rules.block.hr.exec(e);
            if (t) return { type: "hr", raw: t[0] };
          }),
          (t.blockquote = function (e) {
            var t = this.rules.block.blockquote.exec(e);
            if (t) {
              var u = t[0].replace(/^ *> ?/gm, "");
              return { type: "blockquote", raw: t[0], text: u };
            }
          }),
          (t.list = function (e) {
            var t = this.rules.block.list.exec(e);
            if (t) {
              var u,
                n,
                r,
                i,
                s,
                l,
                a,
                o,
                D,
                c = t[0],
                p = t[2],
                h = p.length > 1,
                g = {
                  type: "list",
                  raw: c,
                  ordered: h,
                  start: h ? +p.slice(0, -1) : "",
                  loose: !1,
                  items: [],
                },
                f = t[0].match(this.rules.block.item),
                d = !1,
                F = f.length;
              r = this.rules.block.listItemStart.exec(f[0]);
              for (var A = 0; A < F; A++) {
                if (
                  ((c = u = f[A]),
                  this.options.pedantic ||
                    ((D = u.match(
                      new RegExp("\\n\\s*\\n {0," + (r[0].length - 1) + "}\\S")
                    )) &&
                      ((s =
                        u.length - D.index + f.slice(A + 1).join("\n").length),
                      (g.raw = g.raw.substring(0, g.raw.length - s)),
                      (c = u = u.substring(0, D.index)),
                      (F = A + 1))),
                  A !== F - 1)
                ) {
                  if (
                    ((i = this.rules.block.listItemStart.exec(f[A + 1])),
                    this.options.pedantic
                      ? i[1].length > r[1].length
                      : i[1].length >= r[0].length || i[1].length > 3)
                  ) {
                    f.splice(
                      A,
                      2,
                      f[A] +
                        (!this.options.pedantic &&
                        i[1].length < r[0].length &&
                        !f[A].match(/\n$/)
                          ? ""
                          : "\n") +
                        f[A + 1]
                    ),
                      A--,
                      F--;
                    continue;
                  }
                  (!this.options.pedantic || this.options.smartLists
                    ? i[2][i[2].length - 1] !== p[p.length - 1]
                    : h === (1 === i[2].length)) &&
                    ((s = f.slice(A + 1).join("\n").length),
                    (g.raw = g.raw.substring(0, g.raw.length - s)),
                    (A = F - 1)),
                    (r = i);
                }
                (n = u.length),
                  ~(u = u.replace(/^ *([*+-]|\d+[.)]) ?/, "")).indexOf("\n ") &&
                    ((n -= u.length),
                    (u = this.options.pedantic
                      ? u.replace(/^ {1,4}/gm, "")
                      : u.replace(new RegExp("^ {1," + n + "}", "gm"), ""))),
                  (u = R(u, "\n")),
                  A !== F - 1 && (c += "\n"),
                  (l = d || /\n\n(?!\s*$)/.test(c)),
                  A !== F - 1 && ((d = "\n\n" === c.slice(-2)), l || (l = d)),
                  l && (g.loose = !0),
                  this.options.gfm &&
                    ((o = void 0),
                    (a = /^\[[ xX]\] /.test(u)) &&
                      ((o = " " !== u[1]),
                      (u = u.replace(/^\[[ xX]\] +/, "")))),
                  g.items.push({
                    type: "list_item",
                    raw: c,
                    task: a,
                    checked: o,
                    loose: l,
                    text: u,
                  });
              }
              return g;
            }
          }),
          (t.html = function (e) {
            var t = this.rules.block.html.exec(e);
            if (t)
              return {
                type: this.options.sanitize ? "paragraph" : "html",
                raw: t[0],
                pre:
                  !this.options.sanitizer &&
                  ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
                text: this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(t[0])
                    : j(t[0])
                  : t[0],
              };
          }),
          (t.def = function (e) {
            var t = this.rules.block.def.exec(e);
            if (t)
              return (
                t[3] && (t[3] = t[3].substring(1, t[3].length - 1)),
                {
                  type: "def",
                  tag: t[1].toLowerCase().replace(/\s+/g, " "),
                  raw: t[0],
                  href: t[2],
                  title: t[3],
                }
              );
          }),
          (t.table = function (e) {
            var t = this.rules.block.table.exec(e);
            if (t) {
              var u = {
                type: "table",
                header: O(t[1].replace(/^ *| *\| *$/g, "")),
                align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : [],
              };
              if (u.header.length === u.align.length) {
                u.raw = t[0];
                var n,
                  r = u.align.length;
                for (n = 0; n < r; n++)
                  /^ *-+: *$/.test(u.align[n])
                    ? (u.align[n] = "right")
                    : /^ *:-+: *$/.test(u.align[n])
                    ? (u.align[n] = "center")
                    : /^ *:-+ *$/.test(u.align[n])
                    ? (u.align[n] = "left")
                    : (u.align[n] = null);
                for (r = u.cells.length, n = 0; n < r; n++)
                  u.cells[n] = O(
                    u.cells[n].replace(/^ *\| *| *\| *$/g, ""),
                    u.header.length
                  );
                return u;
              }
            }
          }),
          (t.lheading = function (e) {
            var t = this.rules.block.lheading.exec(e);
            if (t)
              return {
                type: "heading",
                raw: t[0],
                depth: "=" === t[2].charAt(0) ? 1 : 2,
                text: t[1],
              };
          }),
          (t.paragraph = function (e) {
            var t = this.rules.block.paragraph.exec(e);
            if (t)
              return {
                type: "paragraph",
                raw: t[0],
                text:
                  "\n" === t[1].charAt(t[1].length - 1)
                    ? t[1].slice(0, -1)
                    : t[1],
              };
          }),
          (t.text = function (e) {
            var t = this.rules.block.text.exec(e);
            if (t) return { type: "text", raw: t[0], text: t[0] };
          }),
          (t.escape = function (e) {
            var t = this.rules.inline.escape.exec(e);
            if (t) return { type: "escape", raw: t[0], text: j(t[1]) };
          }),
          (t.tag = function (e, t, u) {
            var n = this.rules.inline.tag.exec(e);
            if (n)
              return (
                !t && /^<a /i.test(n[0])
                  ? (t = !0)
                  : t && /^<\/a>/i.test(n[0]) && (t = !1),
                !u && /^<(pre|code|kbd|script)(\s|>)/i.test(n[0])
                  ? (u = !0)
                  : u &&
                    /^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0]) &&
                    (u = !1),
                {
                  type: this.options.sanitize ? "text" : "html",
                  raw: n[0],
                  inLink: t,
                  inRawBlock: u,
                  text: this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(n[0])
                      : j(n[0])
                    : n[0],
                }
              );
          }),
          (t.link = function (e) {
            var t = this.rules.inline.link.exec(e);
            if (t) {
              var u = t[2].trim();
              if (!this.options.pedantic && /^</.test(u)) {
                if (!/>$/.test(u)) return;
                var n = R(u.slice(0, -1), "\\");
                if ((u.length - n.length) % 2 == 0) return;
              } else {
                var r = q(t[2], "()");
                if (r > -1) {
                  var i = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + r;
                  (t[2] = t[2].substring(0, r)),
                    (t[0] = t[0].substring(0, i).trim()),
                    (t[3] = "");
                }
              }
              var s = t[2],
                l = "";
              if (this.options.pedantic) {
                var a = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
                a && ((s = a[1]), (l = a[3]));
              } else l = t[3] ? t[3].slice(1, -1) : "";
              return (
                (s = s.trim()),
                /^</.test(s) &&
                  (s =
                    this.options.pedantic && !/>$/.test(u)
                      ? s.slice(1)
                      : s.slice(1, -1)),
                Z(
                  t,
                  {
                    href: s ? s.replace(this.rules.inline._escapes, "$1") : s,
                    title: l ? l.replace(this.rules.inline._escapes, "$1") : l,
                  },
                  t[0]
                )
              );
            }
          }),
          (t.reflink = function (e, t) {
            var u;
            if (
              (u = this.rules.inline.reflink.exec(e)) ||
              (u = this.rules.inline.nolink.exec(e))
            ) {
              var n = (u[2] || u[1]).replace(/\s+/g, " ");
              if (!(n = t[n.toLowerCase()]) || !n.href) {
                var r = u[0].charAt(0);
                return { type: "text", raw: r, text: r };
              }
              return Z(u, n, u[0]);
            }
          }),
          (t.emStrong = function (e, t, u) {
            void 0 === u && (u = "");
            var n = this.rules.inline.emStrong.lDelim.exec(e);
            if (
              n &&
              (!n[3] ||
                !u.match(
                  /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/
                ))
            ) {
              var r = n[1] || n[2] || "";
              if (
                !r ||
                (r && ("" === u || this.rules.inline.punctuation.exec(u)))
              ) {
                var i,
                  s,
                  l = n[0].length - 1,
                  a = l,
                  o = 0,
                  D =
                    "*" === n[0][0]
                      ? this.rules.inline.emStrong.rDelimAst
                      : this.rules.inline.emStrong.rDelimUnd;
                for (
                  D.lastIndex = 0, t = t.slice(-1 * e.length + l);
                  null != (n = D.exec(t));

                )
                  if ((i = n[1] || n[2] || n[3] || n[4] || n[5] || n[6]))
                    if (((s = i.length), n[3] || n[4])) a += s;
                    else if (!((n[5] || n[6]) && l % 3) || (l + s) % 3) {
                      if (!((a -= s) > 0))
                        return (
                          (s = Math.min(s, s + a + o)),
                          Math.min(l, s) % 2
                            ? {
                                type: "em",
                                raw: e.slice(0, l + n.index + s + 1),
                                text: e.slice(1, l + n.index + s),
                              }
                            : {
                                type: "strong",
                                raw: e.slice(0, l + n.index + s + 1),
                                text: e.slice(2, l + n.index + s - 1),
                              }
                        );
                    } else o += s;
              }
            }
          }),
          (t.codespan = function (e) {
            var t = this.rules.inline.code.exec(e);
            if (t) {
              var u = t[2].replace(/\n/g, " "),
                n = /[^ ]/.test(u),
                r = /^ /.test(u) && / $/.test(u);
              return (
                n && r && (u = u.substring(1, u.length - 1)),
                (u = j(u, !0)),
                { type: "codespan", raw: t[0], text: u }
              );
            }
          }),
          (t.br = function (e) {
            var t = this.rules.inline.br.exec(e);
            if (t) return { type: "br", raw: t[0] };
          }),
          (t.del = function (e) {
            var t = this.rules.inline.del.exec(e);
            if (t) return { type: "del", raw: t[0], text: t[2] };
          }),
          (t.autolink = function (e, t) {
            var u,
              n,
              r = this.rules.inline.autolink.exec(e);
            if (r)
              return (
                (n =
                  "@" === r[2]
                    ? "mailto:" + (u = j(this.options.mangle ? t(r[1]) : r[1]))
                    : (u = j(r[1]))),
                {
                  type: "link",
                  raw: r[0],
                  text: u,
                  href: n,
                  tokens: [{ type: "text", raw: u, text: u }],
                }
              );
          }),
          (t.url = function (e, t) {
            var u;
            if ((u = this.rules.inline.url.exec(e))) {
              var n, r;
              if ("@" === u[2])
                r = "mailto:" + (n = j(this.options.mangle ? t(u[0]) : u[0]));
              else {
                var i;
                do {
                  (i = u[0]),
                    (u[0] = this.rules.inline._backpedal.exec(u[0])[0]);
                } while (i !== u[0]);
                (n = j(u[0])), (r = "www." === u[1] ? "http://" + n : n);
              }
              return {
                type: "link",
                raw: u[0],
                text: n,
                href: r,
                tokens: [{ type: "text", raw: n, text: n }],
              };
            }
          }),
          (t.inlineText = function (e, t, u) {
            var n,
              r = this.rules.inline.text.exec(e);
            if (r)
              return (
                (n = t
                  ? this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(r[0])
                      : j(r[0])
                    : r[0]
                  : j(this.options.smartypants ? u(r[0]) : r[0])),
                { type: "text", raw: r[0], text: n }
              );
          }),
          e
        );
      })(),
      U = T.noopTest,
      W = T.edit,
      N = T.merge,
      M = {
        newline: /^(?: *(?:\n|$))+/,
        code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
        fences:
          /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
        hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
        html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
        def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
        nptable: U,
        table: U,
        lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
        _paragraph:
          /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
        text: /^[^\n]+/,
        _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
        _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
      };
    (M.def = W(M.def)
      .replace("label", M._label)
      .replace("title", M._title)
      .getRegex()),
      (M.bullet = /(?:[*+-]|\d{1,9}[.)])/),
      (M.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/),
      (M.item = W(M.item, "gm").replace(/bull/g, M.bullet).getRegex()),
      (M.listItemStart = W(/^( *)(bull) */)
        .replace("bull", M.bullet)
        .getRegex()),
      (M.list = W(M.list)
        .replace(/bull/g, M.bullet)
        .replace(
          "hr",
          "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
        )
        .replace("def", "\\n+(?=" + M.def.source + ")")
        .getRegex()),
      (M._tag =
        "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
      (M._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
      (M.html = W(M.html, "i")
        .replace("comment", M._comment)
        .replace("tag", M._tag)
        .replace(
          "attribute",
          / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
        )
        .getRegex()),
      (M.paragraph = W(M._paragraph)
        .replace("hr", M.hr)
        .replace("heading", " {0,3}#{1,6} ")
        .replace("|lheading", "")
        .replace("blockquote", " {0,3}>")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
        .replace("tag", M._tag)
        .getRegex()),
      (M.blockquote = W(M.blockquote)
        .replace("paragraph", M.paragraph)
        .getRegex()),
      (M.normal = N({}, M)),
      (M.gfm = N({}, M.normal, {
        nptable:
          "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
        table:
          "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
      })),
      (M.gfm.nptable = W(M.gfm.nptable)
        .replace("hr", M.hr)
        .replace("heading", " {0,3}#{1,6} ")
        .replace("blockquote", " {0,3}>")
        .replace("code", " {4}[^\\n]")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
        .replace("tag", M._tag)
        .getRegex()),
      (M.gfm.table = W(M.gfm.table)
        .replace("hr", M.hr)
        .replace("heading", " {0,3}#{1,6} ")
        .replace("blockquote", " {0,3}>")
        .replace("code", " {4}[^\\n]")
        .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
        .replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)")
        .replace("tag", M._tag)
        .getRegex()),
      (M.pedantic = N({}, M.normal, {
        html: W(
          "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
        )
          .replace("comment", M._comment)
          .replace(
            /tag/g,
            "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
          )
          .getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: U,
        paragraph: W(M.normal._paragraph)
          .replace("hr", M.hr)
          .replace("heading", " *#{1,6} *[^\n]")
          .replace("lheading", M.lheading)
          .replace("blockquote", " {0,3}>")
          .replace("|fences", "")
          .replace("|list", "")
          .replace("|html", "")
          .getRegex(),
      }));
    var V = {
      escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
      autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
      url: U,
      tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
      link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
      reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
      nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
      reflinkSearch: "reflink|nolink(?!\\()",
      emStrong: {
        lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
        rDelimAst:
          /\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
        rDelimUnd:
          /\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
      },
      code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
      br: /^( {2,}|\\)\n(?!\s*$)/,
      del: U,
      text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
      punctuation: /^([\spunctuation])/,
      _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",
    };
    (V.punctuation = W(V.punctuation)
      .replace(/punctuation/g, V._punctuation)
      .getRegex()),
      (V.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
      (V.escapedEmSt = /\\\*|\\_/g),
      (V._comment = W(M._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex()),
      (V.emStrong.lDelim = W(V.emStrong.lDelim)
        .replace(/punct/g, V._punctuation)
        .getRegex()),
      (V.emStrong.rDelimAst = W(V.emStrong.rDelimAst, "g")
        .replace(/punct/g, V._punctuation)
        .getRegex()),
      (V.emStrong.rDelimUnd = W(V.emStrong.rDelimUnd, "g")
        .replace(/punct/g, V._punctuation)
        .getRegex()),
      (V._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
      (V._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
      (V._email =
        /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
      (V.autolink = W(V.autolink)
        .replace("scheme", V._scheme)
        .replace("email", V._email)
        .getRegex()),
      (V._attribute =
        /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
      (V.tag = W(V.tag)
        .replace("comment", V._comment)
        .replace("attribute", V._attribute)
        .getRegex()),
      (V._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
      (V._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
      (V._title =
        /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
      (V.link = W(V.link)
        .replace("label", V._label)
        .replace("href", V._href)
        .replace("title", V._title)
        .getRegex()),
      (V.reflink = W(V.reflink).replace("label", V._label).getRegex()),
      (V.reflinkSearch = W(V.reflinkSearch, "g")
        .replace("reflink", V.reflink)
        .replace("nolink", V.nolink)
        .getRegex()),
      (V.normal = N({}, V)),
      (V.pedantic = N({}, V.normal, {
        strong: {
          start: /^__|\*\*/,
          middle:
            /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
          endAst: /\*\*(?!\*)/g,
          endUnd: /__(?!_)/g,
        },
        em: {
          start: /^_|\*/,
          middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
          endAst: /\*(?!\*)/g,
          endUnd: /_(?!_)/g,
        },
        link: W(/^!?\[(label)\]\((.*?)\)/)
          .replace("label", V._label)
          .getRegex(),
        reflink: W(/^!?\[(label)\]\s*\[([^\]]*)\]/)
          .replace("label", V._label)
          .getRegex(),
      })),
      (V.gfm = N({}, V.normal, {
        escape: W(V.escape).replace("])", "~|])").getRegex(),
        _extended_email:
          /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal:
          /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
      })),
      (V.gfm.url = W(V.gfm.url, "i")
        .replace("email", V.gfm._extended_email)
        .getRegex()),
      (V.breaks = N({}, V.gfm, {
        br: W(V.br).replace("{2,}", "*").getRegex(),
        text: W(V.gfm.text)
          .replace("\\b_", "\\b_| {2,}\\n")
          .replace(/\{2,\}/g, "*")
          .getRegex(),
      }));
    var X = { block: M, inline: V },
      G = L,
      H = i.exports.defaults,
      J = X.block,
      K = X.inline,
      Q = T.repeatString;
    function Y(e) {
      return e
        .replace(/---/g, "—")
        .replace(/--/g, "–")
        .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
        .replace(/'/g, "’")
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
        .replace(/"/g, "”")
        .replace(/\.{3}/g, "…");
    }
    function ee(e) {
      var t,
        u,
        n = "",
        r = e.length;
      for (t = 0; t < r; t++)
        (u = e.charCodeAt(t)),
          Math.random() > 0.5 && (u = "x" + u.toString(16)),
          (n += "&#" + u + ";");
      return n;
    }
    var te = (function () {
        function e(e) {
          (this.tokens = []),
            (this.tokens.links = Object.create(null)),
            (this.options = e || H),
            (this.options.tokenizer = this.options.tokenizer || new G()),
            (this.tokenizer = this.options.tokenizer),
            (this.tokenizer.options = this.options);
          var t = { block: J.normal, inline: K.normal };
          this.options.pedantic
            ? ((t.block = J.pedantic), (t.inline = K.pedantic))
            : this.options.gfm &&
              ((t.block = J.gfm),
              this.options.breaks ? (t.inline = K.breaks) : (t.inline = K.gfm)),
            (this.tokenizer.rules = t);
        }
        (e.lex = function (t, u) {
          return new e(u).lex(t);
        }),
          (e.lexInline = function (t, u) {
            return new e(u).inlineTokens(t);
          });
        var u = e.prototype;
        return (
          (u.lex = function (e) {
            return (
              (e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ")),
              this.blockTokens(e, this.tokens, !0),
              this.inline(this.tokens),
              this.tokens
            );
          }),
          (u.blockTokens = function (e, t, u) {
            var n, r, i, s;
            for (
              void 0 === t && (t = []),
                void 0 === u && (u = !0),
                this.options.pedantic && (e = e.replace(/^ +$/gm, ""));
              e;

            )
              if ((n = this.tokenizer.space(e)))
                (e = e.substring(n.raw.length)), n.type && t.push(n);
              else if ((n = this.tokenizer.code(e)))
                (e = e.substring(n.raw.length)),
                  (s = t[t.length - 1]) && "paragraph" === s.type
                    ? ((s.raw += "\n" + n.raw), (s.text += "\n" + n.text))
                    : t.push(n);
              else if ((n = this.tokenizer.fences(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.heading(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.nptable(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.hr(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.blockquote(e)))
                (e = e.substring(n.raw.length)),
                  (n.tokens = this.blockTokens(n.text, [], u)),
                  t.push(n);
              else if ((n = this.tokenizer.list(e))) {
                for (
                  e = e.substring(n.raw.length), i = n.items.length, r = 0;
                  r < i;
                  r++
                )
                  n.items[r].tokens = this.blockTokens(n.items[r].text, [], !1);
                t.push(n);
              } else if ((n = this.tokenizer.html(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if (u && (n = this.tokenizer.def(e)))
                (e = e.substring(n.raw.length)),
                  this.tokens.links[n.tag] ||
                    (this.tokens.links[n.tag] = {
                      href: n.href,
                      title: n.title,
                    });
              else if ((n = this.tokenizer.table(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.lheading(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if (u && (n = this.tokenizer.paragraph(e)))
                (e = e.substring(n.raw.length)), t.push(n);
              else if ((n = this.tokenizer.text(e)))
                (e = e.substring(n.raw.length)),
                  (s = t[t.length - 1]) && "text" === s.type
                    ? ((s.raw += "\n" + n.raw), (s.text += "\n" + n.text))
                    : t.push(n);
              else if (e) {
                var l = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(l);
                  break;
                }
                throw new Error(l);
              }
            return t;
          }),
          (u.inline = function (e) {
            var t,
              u,
              n,
              r,
              i,
              s,
              l = e.length;
            for (t = 0; t < l; t++)
              switch ((s = e[t]).type) {
                case "paragraph":
                case "text":
                case "heading":
                  (s.tokens = []), this.inlineTokens(s.text, s.tokens);
                  break;
                case "table":
                  for (
                    s.tokens = { header: [], cells: [] },
                      r = s.header.length,
                      u = 0;
                    u < r;
                    u++
                  )
                    (s.tokens.header[u] = []),
                      this.inlineTokens(s.header[u], s.tokens.header[u]);
                  for (r = s.cells.length, u = 0; u < r; u++)
                    for (
                      i = s.cells[u], s.tokens.cells[u] = [], n = 0;
                      n < i.length;
                      n++
                    )
                      (s.tokens.cells[u][n] = []),
                        this.inlineTokens(i[n], s.tokens.cells[u][n]);
                  break;
                case "blockquote":
                  this.inline(s.tokens);
                  break;
                case "list":
                  for (r = s.items.length, u = 0; u < r; u++)
                    this.inline(s.items[u].tokens);
              }
            return e;
          }),
          (u.inlineTokens = function (e, t, u, n) {
            var r, i;
            void 0 === t && (t = []),
              void 0 === u && (u = !1),
              void 0 === n && (n = !1);
            var s,
              l,
              a,
              o = e;
            if (this.tokens.links) {
              var D = Object.keys(this.tokens.links);
              if (D.length > 0)
                for (
                  ;
                  null !=
                  (s = this.tokenizer.rules.inline.reflinkSearch.exec(o));

                )
                  D.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) &&
                    (o =
                      o.slice(0, s.index) +
                      "[" +
                      Q("a", s[0].length - 2) +
                      "]" +
                      o.slice(
                        this.tokenizer.rules.inline.reflinkSearch.lastIndex
                      ));
            }
            for (
              ;
              null != (s = this.tokenizer.rules.inline.blockSkip.exec(o));

            )
              o =
                o.slice(0, s.index) +
                "[" +
                Q("a", s[0].length - 2) +
                "]" +
                o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            for (
              ;
              null != (s = this.tokenizer.rules.inline.escapedEmSt.exec(o));

            )
              o =
                o.slice(0, s.index) +
                "++" +
                o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
            for (; e; )
              if ((l || (a = ""), (l = !1), (r = this.tokenizer.escape(e))))
                (e = e.substring(r.raw.length)), t.push(r);
              else if ((r = this.tokenizer.tag(e, u, n))) {
                (e = e.substring(r.raw.length)),
                  (u = r.inLink),
                  (n = r.inRawBlock);
                var c = t[t.length - 1];
                c && "text" === r.type && "text" === c.type
                  ? ((c.raw += r.raw), (c.text += r.text))
                  : t.push(r);
              } else if ((r = this.tokenizer.link(e)))
                (e = e.substring(r.raw.length)),
                  "link" === r.type &&
                    (r.tokens = this.inlineTokens(r.text, [], !0, n)),
                  t.push(r);
              else if ((r = this.tokenizer.reflink(e, this.tokens.links))) {
                e = e.substring(r.raw.length);
                var p = t[t.length - 1];
                "link" === r.type
                  ? ((r.tokens = this.inlineTokens(r.text, [], !0, n)),
                    t.push(r))
                  : p && "text" === r.type && "text" === p.type
                  ? ((p.raw += r.raw), (p.text += r.text))
                  : t.push(r);
              } else if ((r = this.tokenizer.emStrong(e, o, a)))
                (e = e.substring(r.raw.length)),
                  (r.tokens = this.inlineTokens(r.text, [], u, n)),
                  t.push(r);
              else if ((r = this.tokenizer.codespan(e)))
                (e = e.substring(r.raw.length)), t.push(r);
              else if ((r = this.tokenizer.br(e)))
                (e = e.substring(r.raw.length)), t.push(r);
              else if ((r = this.tokenizer.del(e)))
                (e = e.substring(r.raw.length)),
                  (r.tokens = this.inlineTokens(r.text, [], u, n)),
                  t.push(r);
              else if ((r = this.tokenizer.autolink(e, ee)))
                (e = e.substring(r.raw.length)), t.push(r);
              else if (u || !(r = this.tokenizer.url(e, ee))) {
                if ((r = this.tokenizer.inlineText(e, n, Y)))
                  (e = e.substring(r.raw.length)),
                    "_" !== r.raw.slice(-1) && (a = r.raw.slice(-1)),
                    (l = !0),
                    (i = t[t.length - 1]) && "text" === i.type
                      ? ((i.raw += r.raw), (i.text += r.text))
                      : t.push(r);
                else if (e) {
                  var h = "Infinite loop on byte: " + e.charCodeAt(0);
                  if (this.options.silent) {
                    console.error(h);
                    break;
                  }
                  throw new Error(h);
                }
              } else (e = e.substring(r.raw.length)), t.push(r);
            return t;
          }),
          t(e, null, [
            {
              key: "rules",
              get: function () {
                return { block: J, inline: K };
              },
            },
          ]),
          e
        );
      })(),
      ue = i.exports.defaults,
      ne = T.cleanUrl,
      re = T.escape,
      ie = (function () {
        function e(e) {
          this.options = e || ue;
        }
        var t = e.prototype;
        return (
          (t.code = function (e, t, u) {
            var n = (t || "").match(/\S*/)[0];
            if (this.options.highlight) {
              var r = this.options.highlight(e, n);
              null != r && r !== e && ((u = !0), (e = r));
            }
            return (
              (e = e.replace(/\n$/, "") + "\n"),
              n
                ? '<pre><code class="' +
                  this.options.langPrefix +
                  re(n, !0) +
                  '">' +
                  (u ? e : re(e, !0)) +
                  "</code></pre>\n"
                : "<pre><code>" + (u ? e : re(e, !0)) + "</code></pre>\n"
            );
          }),
          (t.blockquote = function (e) {
            return "<blockquote>\n" + e + "</blockquote>\n";
          }),
          (t.html = function (e) {
            return e;
          }),
          (t.heading = function (e, t, u, n) {
            return this.options.headerIds
              ? "<h" +
                  t +
                  ' id="' +
                  this.options.headerPrefix +
                  n.slug(u) +
                  '">' +
                  e +
                  "</h" +
                  t +
                  ">\n"
              : "<h" + t + ">" + e + "</h" + t + ">\n";
          }),
          (t.hr = function () {
            return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
          }),
          (t.list = function (e, t, u) {
            var n = t ? "ol" : "ul";
            return (
              "<" +
              n +
              (t && 1 !== u ? ' start="' + u + '"' : "") +
              ">\n" +
              e +
              "</" +
              n +
              ">\n"
            );
          }),
          (t.listitem = function (e) {
            return "<li>" + e + "</li>\n";
          }),
          (t.checkbox = function (e) {
            return (
              "<input " +
              (e ? 'checked="" ' : "") +
              'disabled="" type="checkbox"' +
              (this.options.xhtml ? " /" : "") +
              "> "
            );
          }),
          (t.paragraph = function (e) {
            return "<p>" + e + "</p>\n";
          }),
          (t.table = function (e, t) {
            return (
              t && (t = "<tbody>" + t + "</tbody>"),
              "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
            );
          }),
          (t.tablerow = function (e) {
            return "<tr>\n" + e + "</tr>\n";
          }),
          (t.tablecell = function (e, t) {
            var u = t.header ? "th" : "td";
            return (
              (t.align
                ? "<" + u + ' align="' + t.align + '">'
                : "<" + u + ">") +
              e +
              "</" +
              u +
              ">\n"
            );
          }),
          (t.strong = function (e) {
            return "<strong>" + e + "</strong>";
          }),
          (t.em = function (e) {
            return "<em>" + e + "</em>";
          }),
          (t.codespan = function (e) {
            return "<code>" + e + "</code>";
          }),
          (t.br = function () {
            return this.options.xhtml ? "<br/>" : "<br>";
          }),
          (t.del = function (e) {
            return "<del>" + e + "</del>";
          }),
          (t.link = function (e, t, u) {
            if (
              null === (e = ne(this.options.sanitize, this.options.baseUrl, e))
            )
              return u;
            var n = '<a href="' + re(e) + '"';
            return t && (n += ' title="' + t + '"'), (n += ">" + u + "</a>");
          }),
          (t.image = function (e, t, u) {
            if (
              null === (e = ne(this.options.sanitize, this.options.baseUrl, e))
            )
              return u;
            var n = '<img src="' + e + '" alt="' + u + '"';
            return (
              t && (n += ' title="' + t + '"'),
              (n += this.options.xhtml ? "/>" : ">")
            );
          }),
          (t.text = function (e) {
            return e;
          }),
          e
        );
      })(),
      se = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.strong = function (e) {
            return e;
          }),
          (t.em = function (e) {
            return e;
          }),
          (t.codespan = function (e) {
            return e;
          }),
          (t.del = function (e) {
            return e;
          }),
          (t.html = function (e) {
            return e;
          }),
          (t.text = function (e) {
            return e;
          }),
          (t.link = function (e, t, u) {
            return "" + u;
          }),
          (t.image = function (e, t, u) {
            return "" + u;
          }),
          (t.br = function () {
            return "";
          }),
          e
        );
      })(),
      le = (function () {
        function e() {
          this.seen = {};
        }
        var t = e.prototype;
        return (
          (t.serialize = function (e) {
            return e
              .toLowerCase()
              .trim()
              .replace(/<[!\/a-z].*?>/gi, "")
              .replace(
                /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                ""
              )
              .replace(/\s/g, "-");
          }),
          (t.getNextSafeSlug = function (e, t) {
            var u = e,
              n = 0;
            if (this.seen.hasOwnProperty(u)) {
              n = this.seen[e];
              do {
                u = e + "-" + ++n;
              } while (this.seen.hasOwnProperty(u));
            }
            return t || ((this.seen[e] = n), (this.seen[u] = 0)), u;
          }),
          (t.slug = function (e, t) {
            void 0 === t && (t = {});
            var u = this.serialize(e);
            return this.getNextSafeSlug(u, t.dryrun);
          }),
          e
        );
      })(),
      ae = ie,
      oe = se,
      De = le,
      ce = i.exports.defaults,
      pe = T.unescape,
      he = te,
      ge = (function () {
        function e(e) {
          (this.options = e || ce),
            (this.options.renderer = this.options.renderer || new ae()),
            (this.renderer = this.options.renderer),
            (this.renderer.options = this.options),
            (this.textRenderer = new oe()),
            (this.slugger = new De());
        }
        (e.parse = function (t, u) {
          return new e(u).parse(t);
        }),
          (e.parseInline = function (t, u) {
            return new e(u).parseInline(t);
          });
        var t = e.prototype;
        return (
          (t.parse = function (e, t) {
            void 0 === t && (t = !0);
            var u,
              n,
              r,
              i,
              s,
              l,
              a,
              o,
              D,
              c,
              p,
              h,
              g,
              f,
              d,
              F,
              A,
              C,
              E = "",
              k = e.length;
            for (u = 0; u < k; u++)
              switch ((c = e[u]).type) {
                case "space":
                  continue;
                case "hr":
                  E += this.renderer.hr();
                  continue;
                case "heading":
                  E += this.renderer.heading(
                    this.parseInline(c.tokens),
                    c.depth,
                    pe(this.parseInline(c.tokens, this.textRenderer)),
                    this.slugger
                  );
                  continue;
                case "code":
                  E += this.renderer.code(c.text, c.lang, c.escaped);
                  continue;
                case "table":
                  for (o = "", a = "", i = c.header.length, n = 0; n < i; n++)
                    a += this.renderer.tablecell(
                      this.parseInline(c.tokens.header[n]),
                      { header: !0, align: c.align[n] }
                    );
                  for (
                    o += this.renderer.tablerow(a),
                      D = "",
                      i = c.cells.length,
                      n = 0;
                    n < i;
                    n++
                  ) {
                    for (
                      a = "", s = (l = c.tokens.cells[n]).length, r = 0;
                      r < s;
                      r++
                    )
                      a += this.renderer.tablecell(this.parseInline(l[r]), {
                        header: !1,
                        align: c.align[r],
                      });
                    D += this.renderer.tablerow(a);
                  }
                  E += this.renderer.table(o, D);
                  continue;
                case "blockquote":
                  (D = this.parse(c.tokens)),
                    (E += this.renderer.blockquote(D));
                  continue;
                case "list":
                  for (
                    p = c.ordered,
                      h = c.start,
                      g = c.loose,
                      i = c.items.length,
                      D = "",
                      n = 0;
                    n < i;
                    n++
                  )
                    (F = (d = c.items[n]).checked),
                      (A = d.task),
                      (f = ""),
                      d.task &&
                        ((C = this.renderer.checkbox(F)),
                        g
                          ? d.tokens.length > 0 && "text" === d.tokens[0].type
                            ? ((d.tokens[0].text = C + " " + d.tokens[0].text),
                              d.tokens[0].tokens &&
                                d.tokens[0].tokens.length > 0 &&
                                "text" === d.tokens[0].tokens[0].type &&
                                (d.tokens[0].tokens[0].text =
                                  C + " " + d.tokens[0].tokens[0].text))
                            : d.tokens.unshift({ type: "text", text: C })
                          : (f += C)),
                      (f += this.parse(d.tokens, g)),
                      (D += this.renderer.listitem(f, A, F));
                  E += this.renderer.list(D, p, h);
                  continue;
                case "html":
                  E += this.renderer.html(c.text);
                  continue;
                case "paragraph":
                  E += this.renderer.paragraph(this.parseInline(c.tokens));
                  continue;
                case "text":
                  for (
                    D = c.tokens ? this.parseInline(c.tokens) : c.text;
                    u + 1 < k && "text" === e[u + 1].type;

                  )
                    D +=
                      "\n" +
                      ((c = e[++u]).tokens
                        ? this.parseInline(c.tokens)
                        : c.text);
                  E += t ? this.renderer.paragraph(D) : D;
                  continue;
                default:
                  var m = 'Token with "' + c.type + '" type was not found.';
                  if (this.options.silent) return void console.error(m);
                  throw new Error(m);
              }
            return E;
          }),
          (t.parseInline = function (e, t) {
            t = t || this.renderer;
            var u,
              n,
              r = "",
              i = e.length;
            for (u = 0; u < i; u++)
              switch ((n = e[u]).type) {
                case "escape":
                  r += t.text(n.text);
                  break;
                case "html":
                  r += t.html(n.text);
                  break;
                case "link":
                  r += t.link(n.href, n.title, this.parseInline(n.tokens, t));
                  break;
                case "image":
                  r += t.image(n.href, n.title, n.text);
                  break;
                case "strong":
                  r += t.strong(this.parseInline(n.tokens, t));
                  break;
                case "em":
                  r += t.em(this.parseInline(n.tokens, t));
                  break;
                case "codespan":
                  r += t.codespan(n.text);
                  break;
                case "br":
                  r += t.br();
                  break;
                case "del":
                  r += t.del(this.parseInline(n.tokens, t));
                  break;
                case "text":
                  r += t.text(n.text);
                  break;
                default:
                  var s = 'Token with "' + n.type + '" type was not found.';
                  if (this.options.silent) return void console.error(s);
                  throw new Error(s);
              }
            return r;
          }),
          e
        );
      })(),
      fe = L,
      de = ie,
      Fe = se,
      Ae = le,
      Ce = T.merge,
      Ee = T.checkSanitizeDeprecation,
      ke = T.escape,
      me = i.exports.getDefaults,
      be = i.exports.changeDefaults,
      xe = i.exports.defaults;
    function Be(e, t, u) {
      if (null == e)
        throw new Error("marked(): input parameter is undefined or null");
      if ("string" != typeof e)
        throw new Error(
          "marked(): input parameter is of type " +
            Object.prototype.toString.call(e) +
            ", string expected"
        );
      if (
        ("function" == typeof t && ((u = t), (t = null)),
        (t = Ce({}, Be.defaults, t || {})),
        Ee(t),
        u)
      ) {
        var n,
          r = t.highlight;
        try {
          n = he.lex(e, t);
        } catch (a) {
          return u(a);
        }
        var i = function (e) {
          var i;
          if (!e)
            try {
              t.walkTokens && Be.walkTokens(n, t.walkTokens),
                (i = ge.parse(n, t));
            } catch (a) {
              e = a;
            }
          return (t.highlight = r), e ? u(e) : u(null, i);
        };
        if (!r || r.length < 3) return i();
        if ((delete t.highlight, !n.length)) return i();
        var s = 0;
        return (
          Be.walkTokens(n, function (e) {
            "code" === e.type &&
              (s++,
              setTimeout(function () {
                r(e.text, e.lang, function (t, u) {
                  if (t) return i(t);
                  null != u && u !== e.text && ((e.text = u), (e.escaped = !0)),
                    0 == --s && i();
                });
              }, 0));
          }),
          void (0 === s && i())
        );
      }
      try {
        var l = he.lex(e, t);
        return t.walkTokens && Be.walkTokens(l, t.walkTokens), ge.parse(l, t);
      } catch (a) {
        if (
          ((a.message +=
            "\nPlease report this to https://github.com/markedjs/marked."),
          t.silent)
        )
          return (
            "<p>An error occurred:</p><pre>" + ke(a.message + "", !0) + "</pre>"
          );
        throw a;
      }
    }
    return (
      (Be.options = Be.setOptions =
        function (e) {
          return Ce(Be.defaults, e), be(Be.defaults), Be;
        }),
      (Be.getDefaults = me),
      (Be.defaults = xe),
      (Be.use = function (e) {
        var t = Ce({}, e);
        if (
          (e.renderer &&
            (function () {
              var u = Be.defaults.renderer || new de(),
                n = function (t) {
                  var n = u[t];
                  u[t] = function () {
                    for (
                      var r = arguments.length, i = new Array(r), s = 0;
                      s < r;
                      s++
                    )
                      i[s] = arguments[s];
                    var l = e.renderer[t].apply(u, i);
                    return !1 === l && (l = n.apply(u, i)), l;
                  };
                };
              for (var r in e.renderer) n(r);
              t.renderer = u;
            })(),
          e.tokenizer &&
            (function () {
              var u = Be.defaults.tokenizer || new fe(),
                n = function (t) {
                  var n = u[t];
                  u[t] = function () {
                    for (
                      var r = arguments.length, i = new Array(r), s = 0;
                      s < r;
                      s++
                    )
                      i[s] = arguments[s];
                    var l = e.tokenizer[t].apply(u, i);
                    return !1 === l && (l = n.apply(u, i)), l;
                  };
                };
              for (var r in e.tokenizer) n(r);
              t.tokenizer = u;
            })(),
          e.walkTokens)
        ) {
          var u = Be.defaults.walkTokens;
          t.walkTokens = function (t) {
            e.walkTokens(t), u && u(t);
          };
        }
        Be.setOptions(t);
      }),
      (Be.walkTokens = function (e, t) {
        for (var u, n = r(e); !(u = n()).done; ) {
          var i = u.value;
          switch ((t(i), i.type)) {
            case "table":
              for (var s, l = r(i.tokens.header); !(s = l()).done; ) {
                var a = s.value;
                Be.walkTokens(a, t);
              }
              for (var o, D = r(i.tokens.cells); !(o = D()).done; )
                for (var c, p = r(o.value); !(c = p()).done; ) {
                  var h = c.value;
                  Be.walkTokens(h, t);
                }
              break;
            case "list":
              Be.walkTokens(i.items, t);
              break;
            default:
              i.tokens && Be.walkTokens(i.tokens, t);
          }
        }
      }),
      (Be.parseInline = function (e, t) {
        if (null == e)
          throw new Error(
            "marked.parseInline(): input parameter is undefined or null"
          );
        if ("string" != typeof e)
          throw new Error(
            "marked.parseInline(): input parameter is of type " +
              Object.prototype.toString.call(e) +
              ", string expected"
          );
        (t = Ce({}, Be.defaults, t || {})), Ee(t);
        try {
          var u = he.lexInline(e, t);
          return (
            t.walkTokens && Be.walkTokens(u, t.walkTokens), ge.parseInline(u, t)
          );
        } catch (n) {
          if (
            ((n.message +=
              "\nPlease report this to https://github.com/markedjs/marked."),
            t.silent)
          )
            return (
              "<p>An error occurred:</p><pre>" +
              ke(n.message + "", !0) +
              "</pre>"
            );
          throw n;
        }
      }),
      (Be.Parser = ge),
      (Be.parser = ge.parse),
      (Be.Renderer = de),
      (Be.TextRenderer = Fe),
      (Be.Lexer = he),
      (Be.lexer = he.lex),
      (Be.Tokenizer = fe),
      (Be.Slugger = Ae),
      (Be.parse = Be),
      Be
    );
  })());
const l = (e) => {
    const t = e.split("\n");
    let u = [];
    for (let n = 0; n < t.length; n++) {
      const e = t[n],
        r = { value: e.trim(), rawValue: e, indentation: e.search(/\S|$/) };
      if (r.value.startsWith("//")) continue;
      const i = u.length ? u[u.length - 1] : { value: "", indentation: 0 };
      r.value || !u.length
        ? u.push(r)
        : ((i.value = i.value + "{{NEWLINE}}"), (u[u.length - 1] = i));
    }
    return u;
  },
  a = (e, t = 0, u = 0) => {
    const n = [];
    let r = 2;
    for (let s = 0; s < e.length; s++) {
      const l = e[s],
        o = s < e.length - 1 ? e[s + 1] : { value: "", indentation: -1 },
        D = " ".repeat(u) + l.value;
      if (l.indentation === t)
        if (o.indentation > t) {
          const c = l.value;
          if (
            ((i = c).startsWith("[") && i.endsWith("]")) ||
            i.startsWith("$")
          ) {
            const t = a(e.slice(s + 1), o.indentation);
            n.push({ [c]: t });
          } else {
            (r = o.indentation - t), n.push(D);
            const i = a(e.slice(s + 1), o.indentation, u + r);
            n.push(...i);
          }
        } else {
          if (o.indentation < t) return n.push(D), n;
          n.push(D);
        }
      else if (l.indentation < t) return n;
    }
    var i;
    return n;
  },
  o = (e, t = "") => e.replace(new RegExp("{{NEWLINE}}", "g"), t),
  D = (e) => {
    const t = typeof e;
    return null != e && ("object" === t || "function" === t);
  },
  c = (e) => (D(e) ? Object.keys(e)[0] : e).startsWith("$"),
  p = (e) => {
    let t, u;
    if (D(e)) {
      t = Object.keys(e)[0].split(":")[0].slice(1);
      const n = (e, t) => {
        if (Array.isArray(t)) for (const u of t) return n(e, u);
        return D(t)
          ? ((e += Object.keys(t)[0] + "\n"), n(e, Object.values(t)[0]))
          : (e += o(t) + "\n");
      };
      u = Object.values(e)[0].reduce(n, "");
    } else {
      const n = e.split(":");
      (t = n[0].slice(1)), (u = o(n.slice(1, n.length).join(":")).trim());
    }
    return [t, u.trim()];
  },
  h = (e, t = null, u = null) => {
    u = u || { pages: {}, options: {} };
    for (const r of e)
      if (c(r)) {
        const [e, n] = p(r);
        (t ? u.pages[t] : u).options[e] = n;
      } else if (D(r)) {
        const e = Object.keys(r)[0];
        let n = e.replace(/[\[\]']+/g, ""),
          i = n;
        if (n.startsWith(".")) continue;
        const s = n.match(/\(([^)]*)\)[^(]*$/);
        s && s.length && ((i = s[1]), (n = n.replace(`(${i})`, "")));
        let l = 1;
        for (; n in u.pages; ) n += l;
        l++;
        const a = (t ? u.pages[t].path : "") + "/" + n,
          o = 0 === Object.keys(u.pages).length,
          D = e.startsWith("[[") && e.endsWith("]]");
        if (
          ((u.pages[n] = {
            elements: [],
            options: {},
            home: o,
            path: a,
            label: i,
          }),
          t && !D)
        ) {
          const e = { type: "portal", value: i, to: n };
          u.pages[t].elements.push(e);
        }
        h(Object.values(r)[0], n, u);
      } else if (Array.isArray(r)) h(r, t, u);
      else if (("string" == typeof (n = r) || n instanceof String) && t) {
        const e = o(r, "\n"),
          n = u.pages[t].elements;
        if (n.length && "text" === n[n.length - 1].type)
          u.pages[t].elements[n.length - 1].value += "\n" + e;
        else {
          const n = { type: "text", value: e };
          u.pages[t].elements.push(n);
        }
      }
    var n;
    return u;
  },
  g = (e) => {
    const t = l(e),
      u = a(t);
    return h(u);
  },
  f = (e, i, s = {}) => {
    var l = s,
      { attributes: a } = l,
      o = ((e, r) => {
        var i = {};
        for (var s in e) u.call(e, s) && r.indexOf(s) < 0 && (i[s] = e[s]);
        if (null != e && t)
          for (var s of t(e)) r.indexOf(s) < 0 && n.call(e, s) && (i[s] = e[s]);
        return i;
      })(l, ["attributes"]);
    const D = Object.assign(
      e.createElement(i),
      ((e, i) => {
        for (var s in i || (i = {})) u.call(i, s) && r(e, s, i[s]);
        if (t) for (var s of t(i)) n.call(i, s) && r(e, s, i[s]);
        return e;
      })({}, o)
    );
    return a && Object.entries(a).forEach(([e, t]) => D.setAttribute(e, t)), D;
  },
  d = new s.Renderer();
d.link = (e, t, u) =>
  e.startsWith("#")
    ? `<a class="portal inline" href="${e}">${u}</a>`
    : `<a class="external" target="_blank" href="${e}">${u}</a>`;
const F = (e, t, u) => {
  let n = t.querySelector("#imml .pages");
  const r = Object.entries(e.pages).find(([e, t]) => t.home)[0];
  if (!n) {
    const e = f(t, "div", { id: ["imml"] });
    (n = f(t, "div", { classList: ["pages"] })),
      e.appendChild(n),
      (u || t.body).appendChild(e);
  }
  const i = (t, u) => {
    if (t in e.options) {
      const n = e.options[t];
      u(...(n.includes(",") ? n.split(",").map((e) => e.trim()) : [n]));
    }
  };
  Object.entries(e.pages).forEach(([u, i]) => {
    const { elements: l, path: a, options: o } = i,
      D = f(t, "div", { classList: ["page"], id: u });
    n.appendChild(D);
    const c = f(t, "div", { classList: ["breadcrumbs"] }),
      p = a.split("/").slice(1);
    p.forEach((u, n) => {
      const i = n === p.length - 1,
        s = f(t, i ? "span" : "a", { textContent: e.pages[u].label });
      c.appendChild(s),
        i ||
          ((s.href = `#${u === r ? "" : u}`),
          c.appendChild(t.createTextNode(" / ")));
    }),
      D.appendChild(c),
      l.forEach((e) => {
        switch (e.type) {
          case "portal":
            const u = f(t, "a", {
              classList: ["portal"],
              textContent: e.value,
              href: `#${e.to}`,
            });
            D.appendChild(u);
            break;
          case "text":
            const n = s(((e) => e.replace("\\$", "$"))(e.value), {
              renderer: d,
              breaks: !0,
              headerIds: !1,
            });
            D.insertAdjacentHTML("beforeend", n);
        }
      });
  });
  const l = n.querySelector(`#${r}`);
  n.removeChild(l), n.appendChild(l);
  const a = f(t, "style", {
    textContent:
      "#imml a.portal:not(.inline) {\n  display: block;\n}\n\n#imml .pages > .page:target ~ .page:last-child,\n#imml .pages > .page {\n  display: none;\n}\n\n/* :last-child works, but for some reason .page:last-child will not */\n#imml .pages > :last-child,\n#imml .pages > .page:target {\n  display: block;\n}\n\n#imml .pages > :last-child .breadcrumbs {\n  visibility: hidden;\n}\n",
  });
  t.head.appendChild(a),
    i("theme", (e) => {
      t.documentElement.setAttribute("data-theme", e);
    }),
    i("text-color", (e, u) => {
      t.documentElement.style.setProperty("--imml-text-light", e),
        t.documentElement.style.setProperty("--imml-text-dark", u || e);
    }),
    i("background-color", (e, u) => {
      t.documentElement.style.setProperty("--imml-background-light", e),
        t.documentElement.style.setProperty("--imml-background-dark", u || e);
    }),
    i("accent-color", (e, u) => {
      t.documentElement.style.setProperty("--imml-accent-light", e),
        t.documentElement.style.setProperty("--imml-accent-dark", u || e);
    }),
    i("style", (e) => {
      let u = e.replace("<style>", "").replace("</style>", ""),
        n = t.head.querySelector("style.imml");
      n ||
        ((n = f(t, "style", { classList: ["imml"] })), t.head.appendChild(n)),
        (n.textContent = u);
    }),
    i("title", (e) => {
      t.title = e;
    }),
    i("description", (e) => {
      let u = t.querySelector('meta[name="description"]');
      u ||
        ((u = f(t, "meta", {
          attributes: { name: "description", content: e },
        })),
        t.head.appendChild(u)),
        u.setAttribute("content", e);
    });
};
export {
  g as parse,
  l as preprocess,
  h as process,
  F as render,
  a as transform,
};
