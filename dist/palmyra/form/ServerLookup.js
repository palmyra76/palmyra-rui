import { jsx as c, jsxs as K, Fragment as N } from "react/jsx-runtime";
import { forwardRef as V, useRef as B, useState as R, useMemo as H, useEffect as Z } from "react";
import { Search as J, DeleteOutlined as Q } from "@mui/icons-material";
import { FormControl as $, Select as _, ListSubheader as ee, TextField as te, InputAdornment as re, MenuItem as ne } from "@mui/material";
import { c as F, g as P } from "../../chunks/_commonjsHelpers.js";
import { getValueByKey as T, setValueByKey as W } from "./FormUtil.js";
import { delay as oe } from "../utils/index.js";
import { hasDot as q } from "../utils/StringUtil.js";
var X = { exports: {} };
(function(b, k) {
  (function(g, o) {
    b.exports = o();
  })(F, () => {
    return g = { 705: (i) => {
      i.exports = function(t, r) {
        const n = [];
        return r.length === 0 ? n.push({ text: t, highlight: !1 }) : r[0][0] > 0 && n.push({ text: t.slice(0, r[0][0]), highlight: !1 }), r.forEach((p, s) => {
          const u = p[0], h = p[1];
          n.push({ text: t.slice(u, h), highlight: !0 }), s === r.length - 1 ? h < t.length && n.push({ text: t.slice(h, t.length), highlight: !1 }) : h < r[s + 1][0] && n.push({ text: t.slice(h, r[s + 1][0]), highlight: !1 });
        }), n;
      };
    } }, o = {}, function i(t) {
      var r = o[t];
      if (r !== void 0)
        return r.exports;
      var n = o[t] = { exports: {} };
      return g[t](n, n.exports, i), n.exports;
    }(705);
    var g, o;
  });
})(X);
var se = X.exports;
const ie = /* @__PURE__ */ P(se);
var Y = { exports: {} };
(function(b, k) {
  (function(g, o) {
    b.exports = o();
  })(F, () => {
    return g = { 772: (i, t, r) => {
      const n = r(826).remove, p = /[.*+?^${}()|[\]\\]/g, s = /[a-z0-9_]/i, u = /\s+/;
      i.exports = function(h, O, m) {
        var y, x;
        x = { insideWords: !1, findAllOccurrences: !1, requireMatchAll: !1 }, y = (y = m) || {}, Object.keys(y).forEach((a) => {
          x[a] = !!y[a];
        }), m = x;
        const U = Array.from(h).map((a) => n(a));
        let A = U.join("");
        return (O = n(O)).trim().split(u).filter((a) => a.length > 0).reduce((a, E) => {
          const f = E.length, C = !m.insideWords && s.test(E[0]) ? "\\b" : "", j = new RegExp(C + E.replace(p, "\\$&"), "i");
          let v, l;
          if (v = j.exec(A), m.requireMatchAll && v === null)
            return A = "", [];
          for (; v; ) {
            l = v.index;
            const w = f - U.slice(l, l + f).join("").length, I = l - U.slice(0, l).join("").length, S = [l + I, l + f + I + w];
            if (S[0] !== S[1] && a.push(S), A = A.slice(0, l) + new Array(f + 1).join(" ") + A.slice(l + f), !m.findAllOccurrences)
              break;
            v = j.exec(A);
          }
          return a;
        }, []).sort((a, E) => a[0] - E[0]);
      };
    }, 826: (i) => {
      var t = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", Ấ: "A", Ắ: "A", Ẳ: "A", Ẵ: "A", Ặ: "A", Æ: "AE", Ầ: "A", Ằ: "A", Ȃ: "A", Ç: "C", Ḉ: "C", È: "E", É: "E", Ê: "E", Ë: "E", Ế: "E", Ḗ: "E", Ề: "E", Ḕ: "E", Ḝ: "E", Ȇ: "E", Ì: "I", Í: "I", Î: "I", Ï: "I", Ḯ: "I", Ȋ: "I", Ð: "D", Ñ: "N", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", Ố: "O", Ṍ: "O", Ṓ: "O", Ȏ: "O", Ù: "U", Ú: "U", Û: "U", Ü: "U", Ý: "Y", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", ấ: "a", ắ: "a", ẳ: "a", ẵ: "a", ặ: "a", æ: "ae", ầ: "a", ằ: "a", ȃ: "a", ç: "c", ḉ: "c", è: "e", é: "e", ê: "e", ë: "e", ế: "e", ḗ: "e", ề: "e", ḕ: "e", ḝ: "e", ȇ: "e", ì: "i", í: "i", î: "i", ï: "i", ḯ: "i", ȋ: "i", ð: "d", ñ: "n", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", ố: "o", ṍ: "o", ṓ: "o", ȏ: "o", ù: "u", ú: "u", û: "u", ü: "u", ý: "y", ÿ: "y", Ā: "A", ā: "a", Ă: "A", ă: "a", Ą: "A", ą: "a", Ć: "C", ć: "c", Ĉ: "C", ĉ: "c", Ċ: "C", ċ: "c", Č: "C", č: "c", C̆: "C", c̆: "c", Ď: "D", ď: "d", Đ: "D", đ: "d", Ē: "E", ē: "e", Ĕ: "E", ĕ: "e", Ė: "E", ė: "e", Ę: "E", ę: "e", Ě: "E", ě: "e", Ĝ: "G", Ǵ: "G", ĝ: "g", ǵ: "g", Ğ: "G", ğ: "g", Ġ: "G", ġ: "g", Ģ: "G", ģ: "g", Ĥ: "H", ĥ: "h", Ħ: "H", ħ: "h", Ḫ: "H", ḫ: "h", Ĩ: "I", ĩ: "i", Ī: "I", ī: "i", Ĭ: "I", ĭ: "i", Į: "I", į: "i", İ: "I", ı: "i", Ĳ: "IJ", ĳ: "ij", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", Ḱ: "K", ḱ: "k", K̆: "K", k̆: "k", Ĺ: "L", ĺ: "l", Ļ: "L", ļ: "l", Ľ: "L", ľ: "l", Ŀ: "L", ŀ: "l", Ł: "l", ł: "l", Ḿ: "M", ḿ: "m", M̆: "M", m̆: "m", Ń: "N", ń: "n", Ņ: "N", ņ: "n", Ň: "N", ň: "n", ŉ: "n", N̆: "N", n̆: "n", Ō: "O", ō: "o", Ŏ: "O", ŏ: "o", Ő: "O", ő: "o", Œ: "OE", œ: "oe", P̆: "P", p̆: "p", Ŕ: "R", ŕ: "r", Ŗ: "R", ŗ: "r", Ř: "R", ř: "r", R̆: "R", r̆: "r", Ȓ: "R", ȓ: "r", Ś: "S", ś: "s", Ŝ: "S", ŝ: "s", Ş: "S", Ș: "S", ș: "s", ş: "s", Š: "S", š: "s", Ţ: "T", ţ: "t", ț: "t", Ț: "T", Ť: "T", ť: "t", Ŧ: "T", ŧ: "t", T̆: "T", t̆: "t", Ũ: "U", ũ: "u", Ū: "U", ū: "u", Ŭ: "U", ŭ: "u", Ů: "U", ů: "u", Ű: "U", ű: "u", Ų: "U", ų: "u", Ȗ: "U", ȗ: "u", V̆: "V", v̆: "v", Ŵ: "W", ŵ: "w", Ẃ: "W", ẃ: "w", X̆: "X", x̆: "x", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Y̆: "Y", y̆: "y", Ź: "Z", ź: "z", Ż: "Z", ż: "z", Ž: "Z", ž: "z", ſ: "s", ƒ: "f", Ơ: "O", ơ: "o", Ư: "U", ư: "u", Ǎ: "A", ǎ: "a", Ǐ: "I", ǐ: "i", Ǒ: "O", ǒ: "o", Ǔ: "U", ǔ: "u", Ǖ: "U", ǖ: "u", Ǘ: "U", ǘ: "u", Ǚ: "U", ǚ: "u", Ǜ: "U", ǜ: "u", Ứ: "U", ứ: "u", Ṹ: "U", ṹ: "u", Ǻ: "A", ǻ: "a", Ǽ: "AE", ǽ: "ae", Ǿ: "O", ǿ: "o", Þ: "TH", þ: "th", Ṕ: "P", ṕ: "p", Ṥ: "S", ṥ: "s", X́: "X", x́: "x", Ѓ: "Г", ѓ: "г", Ќ: "К", ќ: "к", A̋: "A", a̋: "a", E̋: "E", e̋: "e", I̋: "I", i̋: "i", Ǹ: "N", ǹ: "n", Ồ: "O", ồ: "o", Ṑ: "O", ṑ: "o", Ừ: "U", ừ: "u", Ẁ: "W", ẁ: "w", Ỳ: "Y", ỳ: "y", Ȁ: "A", ȁ: "a", Ȅ: "E", ȅ: "e", Ȉ: "I", ȉ: "i", Ȍ: "O", ȍ: "o", Ȑ: "R", ȑ: "r", Ȕ: "U", ȕ: "u", B̌: "B", b̌: "b", Č̣: "C", č̣: "c", Ê̌: "E", ê̌: "e", F̌: "F", f̌: "f", Ǧ: "G", ǧ: "g", Ȟ: "H", ȟ: "h", J̌: "J", ǰ: "j", Ǩ: "K", ǩ: "k", M̌: "M", m̌: "m", P̌: "P", p̌: "p", Q̌: "Q", q̌: "q", Ř̩: "R", ř̩: "r", Ṧ: "S", ṧ: "s", V̌: "V", v̌: "v", W̌: "W", w̌: "w", X̌: "X", x̌: "x", Y̌: "Y", y̌: "y", A̧: "A", a̧: "a", B̧: "B", b̧: "b", Ḑ: "D", ḑ: "d", Ȩ: "E", ȩ: "e", Ɛ̧: "E", ɛ̧: "e", Ḩ: "H", ḩ: "h", I̧: "I", i̧: "i", Ɨ̧: "I", ɨ̧: "i", M̧: "M", m̧: "m", O̧: "O", o̧: "o", Q̧: "Q", q̧: "q", U̧: "U", u̧: "u", X̧: "X", x̧: "x", Z̧: "Z", z̧: "z" }, r = Object.keys(t).join("|"), n = new RegExp(r, "g"), p = new RegExp(r, ""), s = function(u) {
        return u.replace(n, function(h) {
          return t[h];
        });
      };
      i.exports = s, i.exports.has = function(u) {
        return !!u.match(p);
      }, i.exports.remove = s;
    } }, o = {}, function i(t) {
      var r = o[t];
      if (r !== void 0)
        return r.exports;
      var n = o[t] = { exports: {} };
      return g[t](n, n.exports, i), n.exports;
    }(772);
    var g, o;
  });
})(Y);
var ue = Y.exports;
const ae = /* @__PURE__ */ P(ue), me = V(function(k, g) {
  const { fieldDef: o, store: i, value: t, displayValue: r } = k, n = o.lookupOptions || {}, p = n.idAttribute || "id", s = n.titleAttribute || "name", u = B(null), h = s, [O, m] = R([]), [y] = R(r), [x, U] = R("");
  var A = t || "";
  const [a, E] = R(A), f = q(p) ? (e) => T(p, e) : (e) => e[p], C = q(s) ? (e) => T(s, e) : (e) => e[s];
  H(() => {
    var e = j();
    e && (m([e]), u.current = e);
  }, [y]);
  function j() {
    if (u.current)
      return u.current;
    if (r) {
      var e = {};
      return W(p, e, t), W(s, e, r), e;
    }
  }
  Z(() => {
    oe(v);
  }, [x]);
  function v() {
    var e = {};
    if (x.length > 0)
      e.filter = {}, e.filter[h] = x;
    else if (O.length > 1)
      return;
    i.query(e).then((d) => I(d.result)).catch(() => I([]));
  }
  function l(e, d) {
    return e.find((M) => {
      if (f(M) === d)
        return M;
    });
  }
  function w(e) {
    E(e), u.current = l(O, e);
  }
  function I(e) {
    const d = u.current;
    e && d && !l(e, f(d)) && e.unshift(d), m(e);
  }
  const S = () => O.length > 1, z = (e, d) => {
    const M = ae(e, d, { insideWords: !0 }), G = ie(e, M);
    return /* @__PURE__ */ c("div", { children: G.map((D, L) => /* @__PURE__ */ c(
      "span",
      {
        style: {
          fontWeight: D.highlight ? 700 : 400
        },
        children: D.text
      },
      L
    )) });
  };
  return /* @__PURE__ */ c($, { fullWidth: !0, children: /* @__PURE__ */ K(
    _,
    {
      MenuProps: { autoFocus: !1 },
      value: a,
      onOpen: (e) => {
        v();
      },
      onChange: (e) => {
        w(e.target.value);
      },
      children: [
        S() ? /* @__PURE__ */ K(ee, { children: [
          /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c(
            te,
            {
              size: "small",
              value: x,
              autoFocus: !0,
              placeholder: "Type to search...",
              fullWidth: !0,
              InputProps: {
                startAdornment: /* @__PURE__ */ c(re, { position: "start", children: /* @__PURE__ */ c(J, {}) })
              },
              onChange: (e) => U(e.target.value),
              onKeyDown: (e) => {
                e.key !== "Escape" && e.stopPropagation();
              }
            }
          ) }),
          o.required ? /* @__PURE__ */ c(N, {}) : /* @__PURE__ */ c("div", { children: /* @__PURE__ */ c("span", { children: /* @__PURE__ */ c(Q, {}) }) })
        ] }) : /* @__PURE__ */ c("div", {}),
        O.map((e, d) => /* @__PURE__ */ c(ne, { value: f(e), children: z(C(e), x) }, f(e)))
      ]
    }
  ) });
});
export {
  me as default
};
