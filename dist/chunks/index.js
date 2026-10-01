import { g as En } from "./_commonjsHelpers.js";
var pt = { exports: {} }, _t = { exports: {} }, At = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = f;
  function f(s) {
    if (s == null)
      throw new TypeError("Expected a string but received a ".concat(s));
    if (s.constructor.name !== "String")
      throw new TypeError("Expected a string but received a ".concat(s.constructor.name));
  }
  t.exports = e.default, t.exports.default = e.default;
})(At, At.exports);
var E = At.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(E);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, f.default)(a), a = Date.parse(a), isNaN(a) ? null : new Date(a);
  }
  t.exports = e.default, t.exports.default = e.default;
})(_t, _t.exports);
var la = _t.exports, gt = { exports: {} }, ye = {}, ht = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = f;
  function f(s) {
    return s == null;
  }
  t.exports = e.default, t.exports.default = e.default;
})(ht, ht.exports);
var Ma = ht.exports, T = {};
Object.defineProperty(T, "__esModule", {
  value: !0
});
T.farsiLocales = T.englishLocales = T.dotDecimal = T.decimal = T.commaDecimal = T.bengaliLocales = T.arabicLocales = T.alphanumeric = T.alpha = void 0;
var V = T.alpha = {
  "en-US": /^[A-Z]+$/i,
  "az-AZ": /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
  "bg-BG": /^[А-Я]+$/i,
  "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  "da-DK": /^[A-ZÆØÅ]+$/i,
  "de-DE": /^[A-ZÄÖÜß]+$/i,
  "el-GR": /^[Α-ώ]+$/i,
  "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  "fa-IR": /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
  "fi-FI": /^[A-ZÅÄÖ]+$/i,
  "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
  "ja-JP": /^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
  "nb-NO": /^[A-ZÆØÅ]+$/i,
  "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
  "nn-NO": /^[A-ZÆØÅ]+$/i,
  "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  "pt-PT": /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
  "ru-RU": /^[А-ЯЁ]+$/i,
  "kk-KZ": /^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
  "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
  "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
  "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
  "sv-SE": /^[A-ZÅÄÖ]+$/i,
  "th-TH": /^[ก-๐\s]+$/i,
  "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
  "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
  "vi-VN": /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
  "ko-KR": /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
  "ku-IQ": /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
  he: /^[א-ת]+$/,
  fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,
  bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
  eo: /^[ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
  "hi-IN": /^[\u0900-\u0961]+[\u0972-\u097F]*$/i,
  "si-LK": /^[\u0D80-\u0DFF]+$/,
  "ta-IN": /^[\u0B80-\u0BFF]+$/i,
  "te-IN": /^[\u0C00-\u0C7F]+$/i,
  "kn-IN": /^[\u0C80-\u0CFF]+$/i,
  "ml-IN": /^[\u0D00-\u0D7F]+$/i,
  "gu-IN": /^[\u0A80-\u0AFF]+$/i,
  "pa-IN": /^[\u0A00-\u0A7F]+$/i,
  "or-IN": /^[\u0B00-\u0B7F]+$/i
}, Y = T.alphanumeric = {
  "en-US": /^[0-9A-Z]+$/i,
  "az-AZ": /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
  "bg-BG": /^[0-9А-Я]+$/i,
  "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  "da-DK": /^[0-9A-ZÆØÅ]+$/i,
  "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
  "el-GR": /^[0-9Α-ω]+$/i,
  "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  "fi-FI": /^[0-9A-ZÅÄÖ]+$/i,
  "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
  "ja-JP": /^[0-9０-９ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
  "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
  "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
  "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
  "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  "pt-PT": /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
  "ru-RU": /^[0-9А-ЯЁ]+$/i,
  "kk-KZ": /^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]+$/i,
  "sl-SI": /^[0-9A-ZČĆĐŠŽ]+$/i,
  "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
  "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
  "th-TH": /^[ก-๙\s]+$/i,
  "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
  "ko-KR": /^[0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
  "ku-IQ": /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  "vi-VN": /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
  he: /^[0-9א-ת]+$/,
  fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,
  bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
  eo: /^[0-9ABCĈD-GĜHĤIJĴK-PRSŜTUŬVZ]+$/i,
  "hi-IN": /^[\u0900-\u0963]+[\u0966-\u097F]*$/i,
  "si-LK": /^[0-9\u0D80-\u0DFF]+$/,
  "ta-IN": /^[0-9\u0B80-\u0BFF.]+$/i,
  "te-IN": /^[0-9\u0C00-\u0C7F.]+$/i,
  "kn-IN": /^[0-9\u0C80-\u0CFF.]+$/i,
  "ml-IN": /^[0-9\u0D00-\u0D7F.]+$/i,
  "gu-IN": /^[0-9\u0A80-\u0AFF.]+$/i,
  "pa-IN": /^[0-9\u0A00-\u0A7F.]+$/i,
  "or-IN": /^[0-9\u0B00-\u0B7F.]+$/i
}, j = T.decimal = {
  "en-US": ".",
  ar: "٫"
}, va = T.englishLocales = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
for (var Je, it = 0; it < va.length; it++)
  Je = "en-".concat(va[it]), V[Je] = V["en-US"], Y[Je] = Y["en-US"], j[Je] = j["en-US"];
var pa = T.arabicLocales = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"];
for (var Xe, lt = 0; lt < pa.length; lt++)
  Xe = "ar-".concat(pa[lt]), V[Xe] = V.ar, Y[Xe] = Y.ar, j[Xe] = j.ar;
var _a = T.farsiLocales = ["IR", "AF"];
for (var st, ft = 0; ft < _a.length; ft++)
  st = "fa-".concat(_a[ft]), Y[st] = Y.fa, j[st] = j.ar;
var Aa = T.bengaliLocales = ["BD", "IN"];
for (var et, ot = 0; ot < Aa.length; ot++)
  et = "bn-".concat(Aa[ot]), V[et] = V.bn, Y[et] = Y.bn, j[et] = j["en-US"];
var ga = T.dotDecimal = ["ar-EG", "ar-LB", "ar-LY"], ha = T.commaDecimal = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "eo", "es-ES", "fr-CA", "fr-FR", "gu-IN", "hi-IN", "hu-HU", "id-ID", "it-IT", "kk-KZ", "kn-IN", "ku-IQ", "ml-IN", "nb-NO", "nl-NL", "nn-NO", "or-IN", "pa-IN", "pl-PL", "pt-PT", "ru-RU", "si-LK", "sl-SI", "sr-RS", "sr-RS@latin", "sv-SE", "ta-IN", "te-IN", "tr-TR", "uk-UA", "vi-VN"];
for (var dt = 0; dt < ga.length; dt++)
  j[ga[dt]] = j["en-US"];
for (var ct = 0; ct < ha.length; ct++)
  j[ha[ct]] = ",";
V["fr-CA"] = V["fr-FR"];
Y["fr-CA"] = Y["fr-FR"];
V["pt-BR"] = V["pt-PT"];
Y["pt-BR"] = Y["pt-PT"];
j["pt-BR"] = j["pt-PT"];
V["pl-Pl"] = V["pl-PL"];
Y["pl-Pl"] = Y["pl-PL"];
j["pl-Pl"] = j["pl-PL"];
V["fa-AF"] = V.fa;
Object.defineProperty(ye, "__esModule", {
  value: !0
});
ye.default = Cn;
ye.locales = void 0;
var Dn = Ia(E), tt = Ia(Ma), ba = T;
function Ia(t) {
  return t && t.__esModule ? t : { default: t };
}
function Cn(t, e) {
  (0, Dn.default)(t), e = e || {};
  var f = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(e.locale ? ba.decimal[e.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
  if (t === "" || t === "." || t === "," || t === "-" || t === "+")
    return !1;
  var s = parseFloat(t.replace(",", "."));
  return f.test(t) && (!e.hasOwnProperty("min") || (0, tt.default)(e.min) || s >= e.min) && (!e.hasOwnProperty("max") || (0, tt.default)(e.max) || s <= e.max) && (!e.hasOwnProperty("lt") || (0, tt.default)(e.lt) || s < e.lt) && (!e.hasOwnProperty("gt") || (0, tt.default)(e.gt) || s > e.gt);
}
ye.locales = Object.keys(ba.decimal);
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(ye);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, f.default)(a) ? parseFloat(a) : NaN;
  }
  t.exports = e.default, t.exports.default = e.default;
})(gt, gt.exports);
var Ra = gt.exports, St = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(E);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    return (0, f.default)(a), parseInt(a, r || 10);
  }
  t.exports = e.default, t.exports.default = e.default;
})(St, St.exports);
var xn = St.exports, mt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(E);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    return (0, f.default)(a), r ? a === "1" || /^true$/i.test(a) : a !== "0" && !/^false$/i.test(a) && a !== "";
  }
  t.exports = e.default, t.exports.default = e.default;
})(mt, mt.exports);
var Ln = mt.exports, $t = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(E);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    return (0, f.default)(a), a === r;
  }
  t.exports = e.default, t.exports.default = e.default;
})($t, $t.exports);
var Pn = $t.exports, yt = { exports: {} }, Mt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = s;
  function f(i) {
    "@babel/helpers - typeof";
    return f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
      return typeof a;
    } : function(a) {
      return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
    }, f(i);
  }
  function s(i) {
    return f(i) === "object" && i !== null ? typeof i.toString == "function" ? i = i.toString() : i = "[object Object]" : (i === null || typeof i > "u" || isNaN(i) && !i.length) && (i = ""), String(i);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Mt, Mt.exports);
var Ea = Mt.exports, bt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = s;
  function f(i) {
    "@babel/helpers - typeof";
    return f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
      return typeof a;
    } : function(a) {
      return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
    }, f(i);
  }
  function s() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
    (f(i) !== "object" || i === null) && (i = {});
    for (var r in a)
      typeof i[r] > "u" && (i[r] = a[r]);
    return i;
  }
  t.exports = e.default, t.exports.default = e.default;
})(bt, bt.exports);
var G = bt.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var f = a(E), s = a(Ea), i = a(G);
  function a(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var r = {
    ignoreCase: !1,
    minOccurrences: 1
  };
  function n(u, l, v) {
    return (0, f.default)(u), v = (0, i.default)(v, r), v.ignoreCase ? u.toLowerCase().split((0, s.default)(l).toLowerCase()).length > v.minOccurrences : u.split((0, s.default)(l)).length > v.minOccurrences;
  }
  t.exports = e.default, t.exports.default = e.default;
})(yt, yt.exports);
var On = yt.exports, It = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(E);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r, n) {
    return (0, f.default)(a), Object.prototype.toString.call(r) !== "[object RegExp]" && (r = new RegExp(r, n)), !!a.match(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(It, It.exports);
var Nn = It.exports, Rt = { exports: {} }, Et = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = s;
  function f(i) {
    return Object.prototype.toString.call(i) === "[object RegExp]";
  }
  function s(i, a) {
    for (var r = 0; r < a.length; r++) {
      var n = a[r];
      if (i === n || f(n) && n.test(i))
        return !0;
    }
    return !1;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Et, Et.exports);
var Da = Et.exports, Dt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function i(r) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
      return typeof n;
    } : function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    }, i(r);
  }
  function a(r, n) {
    (0, f.default)(r);
    var u, l;
    i(n) === "object" ? (u = n.min || 0, l = n.max) : (u = arguments[1], l = arguments[2]);
    var v = encodeURI(r).split(/%..|./).length - 1;
    return v >= u && (typeof l > "u" || v <= l);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Dt, Dt.exports);
var Ca = Dt.exports, Ct = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var f = i(E), s = i(G);
  function i(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var a = {
    require_tld: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1,
    allow_numeric_tld: !1,
    allow_wildcard: !1,
    ignore_max_length: !1
  };
  function r(n, u) {
    (0, f.default)(n), u = (0, s.default)(u, a), u.allow_trailing_dot && n[n.length - 1] === "." && (n = n.substring(0, n.length - 1)), u.allow_wildcard === !0 && n.indexOf("*.") === 0 && (n = n.substring(2));
    var l = n.split("."), v = l[l.length - 1];
    return u.require_tld && (l.length < 2 || !u.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(v) || /\s/.test(v)) || !u.allow_numeric_tld && /^\d+$/.test(v) ? !1 : l.every(function(o) {
      return !(o.length > 63 && !u.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(o) || /[\uff01-\uff5e]/.test(o) || /^-|-$/.test(o) || !u.allow_underscores && /_/.test(o));
    });
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ct, Ct.exports);
var sa = Ct.exports, xt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = v;
  var f = s(E);
  function s(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function i(o) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(_) {
      return typeof _;
    } : function(_) {
      return _ && typeof Symbol == "function" && _.constructor === Symbol && _ !== Symbol.prototype ? "symbol" : typeof _;
    }, i(o);
  }
  var a = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", r = "(".concat(a, "[.]){3}").concat(a), n = new RegExp("^".concat(r, "$")), u = "(?:[0-9a-fA-F]{1,4})", l = new RegExp("^(" + "(?:".concat(u, ":){7}(?:").concat(u, "|:)|") + "(?:".concat(u, ":){6}(?:").concat(r, "|:").concat(u, "|:)|") + "(?:".concat(u, ":){5}(?::").concat(r, "|(:").concat(u, "){1,2}|:)|") + "(?:".concat(u, ":){4}(?:(:").concat(u, "){0,1}:").concat(r, "|(:").concat(u, "){1,3}|:)|") + "(?:".concat(u, ":){3}(?:(:").concat(u, "){0,2}:").concat(r, "|(:").concat(u, "){1,4}|:)|") + "(?:".concat(u, ":){2}(?:(:").concat(u, "){0,3}:").concat(r, "|(:").concat(u, "){1,5}|:)|") + "(?:".concat(u, ":){1}(?:(:").concat(u, "){0,4}:").concat(r, "|(:").concat(u, "){1,6}|:)|") + "(?::((?::".concat(u, "){0,5}:").concat(r, "|(?::").concat(u, "){1,7}|:))") + ")(%[0-9a-zA-Z.]{1,})?$");
  function v(o) {
    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, f.default)(o);
    var m = (i(_) === "object" ? _.version : arguments[1]) || "";
    return m ? m.toString() === "4" ? n.test(o) : m.toString() === "6" ? l.test(o) : !1 : v(o, {
      version: 4
    }) || v(o, {
      version: 6
    });
  }
  t.exports = e.default, t.exports.default = e.default;
})(xt, xt.exports);
var at = xt.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = S;
  var f = u(E), s = u(Da), i = u(Ca), a = u(sa), r = u(at), n = u(G);
  function u(M) {
    return M && M.__esModule ? M : { default: M };
  }
  var l = {
    allow_display_name: !1,
    allow_underscores: !1,
    require_display_name: !1,
    allow_utf8_local_part: !0,
    require_tld: !0,
    blacklisted_chars: "",
    ignore_max_length: !1,
    host_blacklist: [],
    host_whitelist: []
  }, v = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i, o = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i, _ = /^[a-z\d]+$/, m = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i, $ = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i, p = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i, A = 254;
  function h(M) {
    var b = M.replace(/^"(.+)"$/, "$1");
    if (!b.trim())
      return !1;
    var C = /[\.";<>]/.test(b);
    if (C) {
      if (b === M)
        return !1;
      var x = b.split('"').length === b.split('\\"').length;
      if (!x)
        return !1;
    }
    return !0;
  }
  function S(M, b) {
    if ((0, f.default)(M), b = (0, n.default)(b, l), b.require_display_name || b.allow_display_name) {
      var C = M.match(v);
      if (C) {
        var x = C[1];
        if (M = M.replace(x, "").replace(/(^<|>$)/g, ""), x.endsWith(" ") && (x = x.slice(0, -1)), !h(x))
          return !1;
      } else if (b.require_display_name)
        return !1;
    }
    if (!b.ignore_max_length && M.length > A)
      return !1;
    var L = M.split("@"), P = L.pop(), Z = P.toLowerCase();
    if (b.host_blacklist.length > 0 && (0, s.default)(Z, b.host_blacklist) || b.host_whitelist.length > 0 && !(0, s.default)(Z, b.host_whitelist))
      return !1;
    var N = L.join("@");
    if (b.domain_specific_validation && (Z === "gmail.com" || Z === "googlemail.com")) {
      N = N.toLowerCase();
      var w = N.split("+")[0];
      if (!(0, i.default)(w.replace(/\./g, ""), {
        min: 6,
        max: 30
      }))
        return !1;
      for (var K = w.split("."), z = 0; z < K.length; z++)
        if (!_.test(K[z]))
          return !1;
    }
    if (b.ignore_max_length === !1 && (!(0, i.default)(N, {
      max: 64
    }) || !(0, i.default)(P, {
      max: 254
    })))
      return !1;
    if (!(0, a.default)(P, {
      require_tld: b.require_tld,
      ignore_max_length: b.ignore_max_length,
      allow_underscores: b.allow_underscores
    })) {
      if (!b.allow_ip_domain)
        return !1;
      if (!(0, r.default)(P)) {
        if (!P.startsWith("[") || !P.endsWith("]"))
          return !1;
        var Q = P.slice(1, -1);
        if (Q.length === 0 || !(0, r.default)(Q))
          return !1;
      }
    }
    if (b.blacklisted_chars && N.search(new RegExp("[".concat(b.blacklisted_chars, "]+"), "g")) !== -1)
      return !1;
    if (N[0] === '"' && N[N.length - 1] === '"')
      return N = N.slice(1, N.length - 1), b.allow_utf8_local_part ? p.test(N) : m.test(N);
    for (var W = b.allow_utf8_local_part ? $ : o, X = N.split("."), ae = 0; ae < X.length; ae++)
      if (!W.test(X[ae]))
        return !1;
    return !0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Rt, Rt.exports);
var xa = Rt.exports, Lt = { exports: {} }, Pt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var f = function(i, a) {
    return i.indexOf(a) !== -1;
  };
  e.default = f, t.exports = e.default, t.exports.default = e.default;
})(Pt, Pt.exports);
var La = Pt.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = h;
  var f = u(E), s = u(Da), i = u(La), a = u(sa), r = u(at), n = u(G);
  function u(S) {
    return S && S.__esModule ? S : { default: S };
  }
  function l(S, M) {
    return $(S) || m(S, M) || o(S, M) || v();
  }
  function v() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function o(S, M) {
    if (S) {
      if (typeof S == "string")
        return _(S, M);
      var b = {}.toString.call(S).slice(8, -1);
      return b === "Object" && S.constructor && (b = S.constructor.name), b === "Map" || b === "Set" ? Array.from(S) : b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b) ? _(S, M) : void 0;
    }
  }
  function _(S, M) {
    (M == null || M > S.length) && (M = S.length);
    for (var b = 0, C = Array(M); b < M; b++)
      C[b] = S[b];
    return C;
  }
  function m(S, M) {
    var b = S == null ? null : typeof Symbol < "u" && S[Symbol.iterator] || S["@@iterator"];
    if (b != null) {
      var C, x, L, P, Z = [], N = !0, w = !1;
      try {
        if (L = (b = b.call(S)).next, M === 0) {
          if (Object(b) !== b)
            return;
          N = !1;
        } else
          for (; !(N = (C = L.call(b)).done) && (Z.push(C.value), Z.length !== M); N = !0)
            ;
      } catch (K) {
        w = !0, x = K;
      } finally {
        try {
          if (!N && b.return != null && (P = b.return(), Object(P) !== P))
            return;
        } finally {
          if (w)
            throw x;
        }
      }
      return Z;
    }
  }
  function $(S) {
    if (Array.isArray(S))
      return S;
  }
  var p = {
    protocols: ["http", "https", "ftp"],
    require_tld: !0,
    require_protocol: !1,
    require_host: !0,
    require_port: !1,
    require_valid_protocol: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1,
    allow_protocol_relative_urls: !1,
    allow_fragments: !0,
    allow_query_components: !0,
    validate_length: !0,
    max_allowed_length: 2084
  }, A = /^\[([^\]]+)\](?::([0-9]+))?$/;
  function h(S, M) {
    if ((0, f.default)(S), !S || /[\s<>]/.test(S) || S.indexOf("mailto:") === 0 || (M = (0, n.default)(M, p), M.validate_length && S.length > M.max_allowed_length) || !M.allow_fragments && (0, i.default)(S, "#") || !M.allow_query_components && ((0, i.default)(S, "?") || (0, i.default)(S, "&")))
      return !1;
    var b, C, x, L, P, Z, N, w;
    N = S.split("#"), S = N.shift(), N = S.split("?"), S = N.shift();
    var K = S.match(/^([a-z][a-z0-9+\-.]*):/i), z = !1, Q = function(Pe) {
      return z = !0, b = Pe.toLowerCase(), M.require_valid_protocol && M.protocols.indexOf(b) === -1 ? !1 : S.substring(K[0].length);
    };
    if (K) {
      var W = K[1], X = S.substring(K[0].length), ae = X.slice(0, 2) === "//";
      if (ae) {
        if (S = Q(W), S === !1)
          return !1;
      } else {
        var ce = X.indexOf("/"), se = ce === -1 ? X : X.substring(0, ce), ve = se.indexOf("@");
        if (ve !== -1) {
          var fe = se.substring(0, ve), Re = /^[a-zA-Z0-9\-_.%:]*$/, Ee = Re.test(fe), De = /%[0-9a-fA-F]{2}/.test(fe);
          if (Ee && !De) {
            if (M.require_protocol)
              return !1;
          } else if (S = Q(W), S === !1)
            return !1;
        } else {
          var pe = /^[0-9]/.test(X);
          if (pe) {
            if (M.require_protocol)
              return !1;
          } else if (S = Q(W), S === !1)
            return !1;
        }
      }
    } else if (M.require_protocol)
      return !1;
    if (S.slice(0, 2) === "//") {
      if (!z && !M.allow_protocol_relative_urls)
        return !1;
      S = S.slice(2);
    }
    if (S === "")
      return !1;
    if (N = S.split("/"), S = N.shift(), S === "" && !M.require_host)
      return !0;
    if (N = S.split("@"), N.length > 1) {
      if (M.disallow_auth || N[0] === "" || (C = N.shift(), C.indexOf(":") >= 0 && C.split(":").length > 2))
        return !1;
      var Ce = C.split(":"), _e = l(Ce, 2), xe = _e[0], Le = _e[1];
      if (xe === "" && Le === "")
        return !1;
    }
    L = N.join("@"), Z = null, w = null;
    var ne = L.match(A);
    if (ne ? (x = "", w = ne[1], Z = ne[2] || null) : (N = L.split(":"), x = N.shift(), N.length && (Z = N.join(":"))), Z !== null && Z.length > 0) {
      if (P = parseInt(Z, 10), !/^[0-9]+$/.test(Z) || P <= 0 || P > 65535)
        return !1;
    } else if (M.require_port)
      return !1;
    return M.host_whitelist ? (0, s.default)(x, M.host_whitelist) : x === "" && !M.require_host ? !0 : !(!(0, r.default)(x) && !(0, a.default)(x, M) && (!w || !(0, r.default)(w, 6)) || (x = x || w, M.host_blacklist && (0, s.default)(x, M.host_blacklist)));
  }
  t.exports = e.default, t.exports.default = e.default;
})(Lt, Lt.exports);
var Bn = Lt.exports, Ot = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = v;
  var f = s(E);
  function s(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var i = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/, a = /^([0-9a-fA-F]){12}$/, r = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/, n = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/, u = /^([0-9a-fA-F]){16}$/, l = /^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;
  function v(o, _) {
    return (0, f.default)(o), _ != null && _.eui && (_.eui = String(_.eui)), _ != null && _.no_colons || _ != null && _.no_separators ? _.eui === "48" ? a.test(o) : _.eui === "64" ? u.test(o) : a.test(o) || u.test(o) : (_ == null ? void 0 : _.eui) === "48" ? i.test(o) || r.test(o) : (_ == null ? void 0 : _.eui) === "64" ? n.test(o) || l.test(o) : v(o, {
      eui: "48"
    }) || v(o, {
      eui: "64"
    });
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ot, Ot.exports);
var Zn = Ot.exports, Nt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var f = i(E), s = i(at);
  function i(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var a = /^\d{1,3}$/, r = 32, n = 128;
  function u(l) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    (0, f.default)(l);
    var o = l.split("/");
    if (o.length !== 2 || !a.test(o[1]) || o[1].length > 1 && o[1].startsWith("0"))
      return !1;
    var _ = (0, s.default)(o[0], v);
    if (!_)
      return !1;
    var m = null;
    switch (String(v)) {
      case "4":
        m = r;
        break;
      case "6":
        m = n;
        break;
      default:
        m = (0, s.default)(o[0], "6") ? n : r;
    }
    return o[1] <= m && o[1] >= 0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Nt, Nt.exports);
var Fn = Nt.exports, Bt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = $;
  var f = s(G);
  function s(p) {
    return p && p.__esModule ? p : { default: p };
  }
  function i(p, A) {
    return n(p) || r(p, A) || l(p, A) || a();
  }
  function a() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function r(p, A) {
    var h = p == null ? null : typeof Symbol < "u" && p[Symbol.iterator] || p["@@iterator"];
    if (h != null) {
      var S, M, b, C, x = [], L = !0, P = !1;
      try {
        if (b = (h = h.call(p)).next, A === 0) {
          if (Object(h) !== h)
            return;
          L = !1;
        } else
          for (; !(L = (S = b.call(h)).done) && (x.push(S.value), x.length !== A); L = !0)
            ;
      } catch (Z) {
        P = !0, M = Z;
      } finally {
        try {
          if (!L && h.return != null && (C = h.return(), Object(C) !== C))
            return;
        } finally {
          if (P)
            throw M;
        }
      }
      return x;
    }
  }
  function n(p) {
    if (Array.isArray(p))
      return p;
  }
  function u(p, A) {
    var h = typeof Symbol < "u" && p[Symbol.iterator] || p["@@iterator"];
    if (!h) {
      if (Array.isArray(p) || (h = l(p)) || A && p && typeof p.length == "number") {
        h && (p = h);
        var S = 0, M = function() {
        };
        return { s: M, n: function() {
          return S >= p.length ? { done: !0 } : { done: !1, value: p[S++] };
        }, e: function(P) {
          throw P;
        }, f: M };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var b, C = !0, x = !1;
    return { s: function() {
      h = h.call(p);
    }, n: function() {
      var P = h.next();
      return C = P.done, P;
    }, e: function(P) {
      x = !0, b = P;
    }, f: function() {
      try {
        C || h.return == null || h.return();
      } finally {
        if (x)
          throw b;
      }
    } };
  }
  function l(p, A) {
    if (p) {
      if (typeof p == "string")
        return v(p, A);
      var h = {}.toString.call(p).slice(8, -1);
      return h === "Object" && p.constructor && (h = p.constructor.name), h === "Map" || h === "Set" ? Array.from(p) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? v(p, A) : void 0;
    }
  }
  function v(p, A) {
    (A == null || A > p.length) && (A = p.length);
    for (var h = 0, S = Array(A); h < A; h++)
      S[h] = p[h];
    return S;
  }
  var o = {
    format: "YYYY/MM/DD",
    delimiters: ["/", "-"],
    strictMode: !1
  };
  function _(p) {
    return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(p);
  }
  function m(p, A) {
    for (var h = [], S = Math.max(p.length, A.length), M = 0; M < S; M++)
      h.push([p[M], A[M]]);
    return h;
  }
  function $(p, A) {
    if (typeof A == "string" ? A = (0, f.default)({
      format: A
    }, o) : A = (0, f.default)(A, o), typeof p == "string" && _(A.format)) {
      if (A.strictMode && p.length !== A.format.length)
        return !1;
      var h = A.delimiters.find(function(W) {
        return A.format.indexOf(W) !== -1;
      }), S = A.strictMode ? h : A.delimiters.find(function(W) {
        return p.indexOf(W) !== -1;
      }), M = m(p.split(S), A.format.toLowerCase().split(h)), b = {}, C = u(M), x;
      try {
        for (C.s(); !(x = C.n()).done; ) {
          var L = i(x.value, 2), P = L[0], Z = L[1];
          if (!P || !Z || P.length !== Z.length)
            return !1;
          b[Z.charAt(0)] = P;
        }
      } catch (W) {
        C.e(W);
      } finally {
        C.f();
      }
      var N = b.y;
      if (N.startsWith("-"))
        return !1;
      if (b.y.length === 2) {
        var w = parseInt(b.y, 10);
        if (isNaN(w))
          return !1;
        var K = (/* @__PURE__ */ new Date()).getFullYear() % 100;
        w < K ? N = "20".concat(b.y) : N = "19".concat(b.y);
      }
      var z = b.m;
      b.m.length === 1 && (z = "0".concat(b.m));
      var Q = b.d;
      return b.d.length === 1 && (Q = "0".concat(b.d)), new Date("".concat(N, "-").concat(z, "-").concat(Q, "T00:00:00.000Z")).getUTCDate() === +b.d;
    }
    return A.strictMode ? !1 : Object.prototype.toString.call(p) === "[object Date]" && isFinite(p);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Bt, Bt.exports);
var Pa = Bt.exports, Zt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var f = s(G);
  function s(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var i = {
    hourFormat: "hour24",
    mode: "default"
  }, a = {
    hour24: {
      default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
      withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
      withOptionalSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?$/
    },
    hour12: {
      default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
      withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/,
      withOptionalSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9])(?::([0-5][0-9]))? (A|P)M$/
    }
  };
  function r(n, u) {
    return u = (0, f.default)(u, i), typeof n != "string" ? !1 : a[u.hourFormat][u.mode].test(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Zt, Zt.exports);
var Tn = Zt.exports, Ft = { exports: {} }, Tt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var f = function(i, a) {
    return i.some(function(r) {
      return a === r;
    });
  };
  e.default = f, t.exports = e.default, t.exports.default = e.default;
})(Tt, Tt.exports);
var Fe = Tt.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var f = i(E), s = i(Fe);
  function i(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var a = {
    loose: !1
  }, r = ["true", "false", "1", "0"], n = [].concat(r, ["yes", "no"]);
  function u(l) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a;
    return (0, f.default)(l), v.loose ? (0, s.default)(n, l.toLowerCase()) : (0, s.default)(r, l);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ft, Ft.exports);
var Un = Ft.exports, Ut = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = S;
  var f = s(E);
  function s(M) {
    return M && M.__esModule ? M : { default: M };
  }
  var i = "([A-Za-z]{3}(-[A-Za-z]{3}){0,2})", a = "(([a-zA-Z]{2,3}(-".concat(i, ")?)|([a-zA-Z]{5,8}))"), r = "([A-Za-z]{4})", n = "([A-Za-z]{2}|\\d{3})", u = "([A-Za-z0-9]{5,8}|(\\d[A-Z-a-z0-9]{3}))", l = "(\\d|[A-W]|[Y-Z]|[a-w]|[y-z])", v = "(".concat(l, "(-[A-Za-z0-9]{2,8})+)"), o = "(x(-[A-Za-z0-9]{1,8})+)", _ = "((en-GB-oed)|(i-ami)|(i-bnn)|(i-default)|(i-enochian)|(i-hak)|(i-klingon)|(i-lux)|(i-mingo)|(i-navajo)|(i-pwn)|(i-tao)|(i-tay)|(i-tsu)|(sgn-BE-FR)|(sgn-BE-NL)|(sgn-CH-DE))", m = "((art-lojban)|(cel-gaulish)|(no-bok)|(no-nyn)|(zh-guoyu)|(zh-hakka)|(zh-min)|(zh-min-nan)|(zh-xiang))", $ = "(".concat(_, "|").concat(m, ")"), p = "(-|_)", A = "".concat(a, "(").concat(p).concat(r, ")?(").concat(p).concat(n, ")?(").concat(p).concat(u, ")*(").concat(p).concat(v, ")*(").concat(p).concat(o, ")?"), h = new RegExp("(^".concat(o, "$)|(^").concat($, "$)|(^").concat(A, "$)"));
  function S(M) {
    return (0, f.default)(M), h.test(M);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ut, Ut.exports);
var Hn = Ut.exports, Ht = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^(?!(1[3-9])|(20)|(3[3-9])|(4[0-9])|(5[0-9])|(60)|(7[3-9])|(8[1-9])|(9[0-2])|(9[3-9]))[0-9]{9}$/;
  function a(r) {
    if ((0, f.default)(r), !i.test(r))
      return !1;
    for (var n = 0, u = 0; u < r.length; u++)
      u % 3 === 0 ? n += r[u] * 3 : u % 3 === 1 ? n += r[u] * 7 : n += r[u] * 1;
    return n % 10 === 0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ht, Ht.exports);
var wn = Ht.exports, Te = {};
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.default = Kn;
Te.locales = void 0;
var kn = Gn(E), wt = T;
function Gn(t) {
  return t && t.__esModule ? t : { default: t };
}
function Kn(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US", f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  (0, kn.default)(t);
  var s = t, i = f.ignore;
  if (i)
    if (i instanceof RegExp)
      s = s.replace(i, "");
    else if (typeof i == "string")
      s = s.replace(new RegExp("[".concat(i.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
    else
      throw new Error("ignore should be instance of a String or RegExp");
  if (e in wt.alpha)
    return wt.alpha[e].test(s);
  throw new Error("Invalid locale '".concat(e, "'"));
}
Te.locales = Object.keys(wt.alpha);
var Ue = {};
Object.defineProperty(Ue, "__esModule", {
  value: !0
});
Ue.default = qn;
Ue.locales = void 0;
var Wn = jn(E), kt = T;
function jn(t) {
  return t && t.__esModule ? t : { default: t };
}
function qn(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US", f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  (0, Wn.default)(t);
  var s = t, i = f.ignore;
  if (i)
    if (i instanceof RegExp)
      s = s.replace(i, "");
    else if (typeof i == "string")
      s = s.replace(new RegExp("[".concat(i.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
    else
      throw new Error("ignore should be instance of a String or RegExp");
  if (e in kt.alphanumeric)
    return kt.alphanumeric[e].test(s);
  throw new Error("Invalid locale '".concat(e, "'"));
}
Ue.locales = Object.keys(kt.alphanumeric);
var Gt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var f = i(E), s = T;
  function i(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var a = /^[0-9]+$/;
  function r(n, u) {
    return (0, f.default)(n), u && u.no_symbols ? a.test(n) : new RegExp("^[+-]?([0-9]*[".concat((u || {}).locale ? s.decimal[u.locale] : ".", "])?[0-9]+$")).test(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Gt, Gt.exports);
var Vn = Gt.exports, He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.default = Qn;
He.locales = void 0;
var Yn = zn(E);
function zn(t) {
  return t && t.__esModule ? t : { default: t };
}
var Kt = {
  AM: /^[A-Z]{2}\d{7}$/,
  // ARMENIA
  AR: /^[A-Z]{3}\d{6}$/,
  // ARGENTINA
  AT: /^[A-Z]\d{7}$/,
  // AUSTRIA
  AU: /^[A-Z]\d{7}$/,
  // AUSTRALIA
  AZ: /^[A-Z]{1}\d{8}$/,
  // AZERBAIJAN
  BE: /^[A-Z]{2}\d{6}$/,
  // BELGIUM
  BG: /^\d{9}$/,
  // BULGARIA
  BR: /^[A-Z]{2}\d{6}$/,
  // BRAZIL
  BY: /^[A-Z]{2}\d{7}$/,
  // BELARUS
  CA: /^[A-Z]{2}\d{6}$|^[A-Z]\d{6}[A-Z]{2}$/,
  // CANADA
  CH: /^[A-Z]\d{7}$/,
  // SWITZERLAND
  CN: /^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/,
  // CHINA [G=Ordinary, E=Electronic] followed by 8-digits, or E followed by any UPPERCASE letter (except I and O) followed by 7 digits
  CY: /^[A-Z](\d{6}|\d{8})$/,
  // CYPRUS
  CZ: /^\d{8}$/,
  // CZECH REPUBLIC
  DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
  // GERMANY
  DK: /^\d{9}$/,
  // DENMARK
  DZ: /^\d{9}$/,
  // ALGERIA
  EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
  // ESTONIA (K followed by 7-digits), e-passports have 2 UPPERCASE followed by 7 digits
  ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
  // SPAIN
  FI: /^[A-Z]{2}\d{7}$/,
  // FINLAND
  FR: /^\d{2}[A-Z]{2}\d{5}$/,
  // FRANCE
  GB: /^\d{9}$/,
  // UNITED KINGDOM
  GR: /^[A-Z]{2}\d{7}$/,
  // GREECE
  HR: /^\d{9}$/,
  // CROATIA
  HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
  // HUNGARY
  IE: /^[A-Z0-9]{2}\d{7}$/,
  // IRELAND
  IN: /^[A-Z]{1}-?\d{7}$/,
  // INDIA
  ID: /^[A-C]\d{7}$/,
  // INDONESIA
  IR: /^[A-Z]\d{8}$/,
  // IRAN
  IS: /^(A)\d{7}$/,
  // ICELAND
  IT: /^[A-Z0-9]{2}\d{7}$/,
  // ITALY
  JM: /^[Aa]\d{7}$/,
  // JAMAICA
  JP: /^[A-Z]{2}\d{7}$/,
  // JAPAN
  KR: /^[MS]\d{8}$/,
  // SOUTH KOREA, REPUBLIC OF KOREA, [S=PS Passports, M=PM Passports]
  KZ: /^[a-zA-Z]\d{7}$/,
  // KAZAKHSTAN
  LI: /^[a-zA-Z]\d{5}$/,
  // LIECHTENSTEIN
  LT: /^[A-Z0-9]{8}$/,
  // LITHUANIA
  LU: /^[A-Z0-9]{8}$/,
  // LUXEMBURG
  LV: /^[A-Z0-9]{2}\d{7}$/,
  // LATVIA
  LY: /^[A-Z0-9]{8}$/,
  // LIBYA
  MT: /^\d{7}$/,
  // MALTA
  MZ: /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,
  // MOZAMBIQUE
  MY: /^[AHK]\d{8}$/,
  // MALAYSIA
  MX: /^[A-Z]\d{8}$/,
  // MEXICO
  NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
  // NETHERLANDS
  NZ: /^([Ll]([Aa]|[Dd]|[Ff]|[Hh])|[Ee]([Aa]|[Pp])|[Nn])\d{6}$/,
  // NEW ZEALAND
  PH: /^([A-Z](\d{6}|\d{7}[A-Z]))|([A-Z]{2}(\d{6}|\d{7}))$/,
  // PHILIPPINES
  PK: /^[A-Z]{2}\d{7}$/,
  // PAKISTAN
  PL: /^[A-Z]{2}\d{7}$/,
  // POLAND
  PT: /^[A-Z]\d{6}$/,
  // PORTUGAL
  RO: /^\d{8,9}$/,
  // ROMANIA
  RU: /^\d{9}$/,
  // RUSSIAN FEDERATION
  SE: /^\d{8}$/,
  // SWEDEN
  SL: /^(P)[A-Z]\d{7}$/,
  // SLOVENIA
  SK: /^[0-9A-Z]\d{7}$/,
  // SLOVAKIA
  TH: /^[A-Z]{1,2}\d{6,7}$/,
  // THAILAND
  TR: /^[A-Z]\d{8}$/,
  // TURKEY
  UA: /^[A-Z]{2}\d{6}$/,
  // UKRAINE
  US: /^\d{9}$|^[A-Z]\d{8}$/,
  // UNITED STATES
  ZA: /^[TAMD]\d{8}$/
  // SOUTH AFRICA
};
He.locales = Object.keys(Kt);
function Qn(t, e) {
  (0, Yn.default)(t);
  var f = t.replace(/\s/g, "").toUpperCase();
  return e.toUpperCase() in Kt && Kt[e].test(f);
}
var Wt = { exports: {} }, jt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var f = i(E), s = i(Ma);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, r = /^[-+]?[0-9]+$/;
  function n(u, l) {
    (0, f.default)(u), l = l || {};
    var v = l.allow_leading_zeroes === !1 ? a : r, o = !l.hasOwnProperty("min") || (0, s.default)(l.min) || u >= l.min, _ = !l.hasOwnProperty("max") || (0, s.default)(l.max) || u <= l.max, m = !l.hasOwnProperty("lt") || (0, s.default)(l.lt) || u < l.lt, $ = !l.hasOwnProperty("gt") || (0, s.default)(l.gt) || u > l.gt;
    return v.test(u) && o && _ && m && $;
  }
  t.exports = e.default, t.exports.default = e.default;
})(jt, jt.exports);
var fa = jt.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(fa);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, f.default)(a, {
      allow_leading_zeroes: !1,
      min: 0,
      max: 65535
    });
  }
  t.exports = e.default, t.exports.default = e.default;
})(Wt, Wt.exports);
var Jn = Wt.exports, qt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(E);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, f.default)(a), a === a.toLowerCase();
  }
  t.exports = e.default, t.exports.default = e.default;
})(qt, qt.exports);
var Xn = qt.exports, Vt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(E);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, f.default)(a), a === a.toUpperCase();
  }
  t.exports = e.default, t.exports.default = e.default;
})(Vt, Vt.exports);
var eu = Vt.exports, Yt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var f = s(E);
  function s(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var i = /^[0-9]{15}$/, a = /^\d{2}-\d{6}-\d{6}-\d{1}$/;
  function r(n, u) {
    (0, f.default)(n), u = u || {};
    var l = i;
    if (u.allow_hyphens && (l = a), !l.test(n))
      return !1;
    n = n.replace(/-/g, "");
    for (var v = 0, o = 2, _ = 14, m = 0; m < _; m++) {
      var $ = n.substring(_ - m - 1, _ - m), p = parseInt($, 10) * o;
      p >= 10 ? v += p % 10 + 1 : v += p, o === 1 ? o += 1 : o -= 1;
    }
    var A = (10 - v % 10) % 10;
    return A === parseInt(n.substring(14, 15), 10);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Yt, Yt.exports);
var tu = Yt.exports, zt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[\x00-\x7F]+$/;
  function a(r) {
    return (0, f.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(zt, zt.exports);
var ru = zt.exports, Me = {};
Object.defineProperty(Me, "__esModule", {
  value: !0
});
Me.default = iu;
Me.fullWidth = void 0;
var au = nu(E);
function nu(t) {
  return t && t.__esModule ? t : { default: t };
}
var uu = Me.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
function iu(t) {
  return (0, au.default)(t), uu.test(t);
}
var be = {};
Object.defineProperty(be, "__esModule", {
  value: !0
});
be.default = ou;
be.halfWidth = void 0;
var lu = su(E);
function su(t) {
  return t && t.__esModule ? t : { default: t };
}
var fu = be.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
function ou(t) {
  return (0, lu.default)(t), fu.test(t);
}
var Qt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var f = a(E), s = Me, i = be;
  function a(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function r(n) {
    return (0, f.default)(n), s.fullWidth.test(n) && i.halfWidth.test(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Qt, Qt.exports);
var du = Qt.exports, Jt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /[^\x00-\x7F]/;
  function a(r) {
    return (0, f.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Jt, Jt.exports);
var cu = Jt.exports, Xt = { exports: {} }, er = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = f;
  function f(s, i) {
    var a = s.join("");
    return new RegExp(a, i);
  }
  t.exports = e.default, t.exports.default = e.default;
})(er, er.exports);
var vu = er.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var f = i(E), s = i(vu);
  function i(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var a = (0, s.default)(["^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)", "(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))", "?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$"], "i");
  function r(n) {
    return (0, f.default)(n), a.test(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Xt, Xt.exports);
var pu = Xt.exports, tr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
  function a(r) {
    return (0, f.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(tr, tr.exports);
var _u = tr.exports, rr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = v;
  var f = r(G), s = r(E), i = r(Fe), a = T;
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function n(o) {
    var _ = new RegExp("^[-+]?([0-9]+)?(\\".concat(a.decimal[o.locale], "[0-9]{").concat(o.decimal_digits, "})").concat(o.force_decimal ? "" : "?", "$"));
    return _;
  }
  var u = {
    force_decimal: !1,
    decimal_digits: "1,",
    locale: "en-US"
  }, l = ["", "-", "+"];
  function v(o, _) {
    if ((0, s.default)(o), _ = (0, f.default)(_, u), _.locale in a.decimal)
      return !(0, i.default)(l, o.replace(/ /g, "")) && n(_).test(o);
    throw new Error("Invalid locale '".concat(_.locale, "'"));
  }
  t.exports = e.default, t.exports.default = e.default;
})(rr, rr.exports);
var Au = rr.exports, ar = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^(0x|0h)?[0-9A-F]+$/i;
  function a(r) {
    return (0, f.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(ar, ar.exports);
var Oa = ar.exports, nr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^(0o)?[0-7]+$/i;
  function a(r) {
    return (0, f.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(nr, nr.exports);
var gu = nr.exports, ur = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = i(E), s = i(Ra);
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r, n) {
    return (0, f.default)(r), (0, s.default)(r) % parseInt(n, 10) === 0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(ur, ur.exports);
var hu = ur.exports, ir = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var f = i(E), s = i(G);
  function i(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var a = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i, r = /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i, n = {
    require_hashtag: !1
  };
  function u(l, v) {
    (0, f.default)(l), v = (0, s.default)(v, n);
    var o = v.require_hashtag ? r : a;
    return o.test(l);
  }
  t.exports = e.default, t.exports.default = e.default;
})(ir, ir.exports);
var Su = ir.exports, lr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = v;
  var f = s(E);
  function s(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function i(o) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(_) {
      return typeof _;
    } : function(_) {
      return _ && typeof Symbol == "function" && _.constructor === Symbol && _ !== Symbol.prototype ? "symbol" : typeof _;
    }, i(o);
  }
  var a = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/, r = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d\d?|1(\.0)?|0(\.0)?)\)$/, n = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)$/, u = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d\d?|1(\.0)?|0(\.0)?)\)$/, l = /^rgba?/;
  function v(o, _) {
    (0, f.default)(o);
    var m = !1, $ = !0;
    if (i(_) !== "object" ? arguments.length >= 2 && ($ = arguments[1]) : (m = _.allowSpaces !== void 0 ? _.allowSpaces : m, $ = _.includePercentValues !== void 0 ? _.includePercentValues : $), m) {
      if (!l.test(o))
        return !1;
      o = o.replace(/\s/g, "");
    }
    return $ ? a.test(o) || r.test(o) || n.test(o) || u.test(o) : a.test(o) || r.test(o);
  }
  t.exports = e.default, t.exports.default = e.default;
})(lr, lr.exports);
var mu = lr.exports, sr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var f = s(E);
  function s(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var i = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i, a = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;
  function r(n) {
    (0, f.default)(n);
    var u = n.replace(/\s+/g, " ").replace(/\s?(hsla?\(|\)|,)\s?/ig, "$1");
    return u.indexOf(",") !== -1 ? i.test(u) : a.test(u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(sr, sr.exports);
var $u = sr.exports, fr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
  function a(r) {
    return (0, f.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(fr, fr.exports);
var yu = fr.exports, we = {};
Object.defineProperty(we, "__esModule", {
  value: !0
});
we.default = Eu;
we.locales = void 0;
var Mu = Na(E), Sa = Na(Fe);
function Na(t) {
  return t && t.__esModule ? t : { default: t };
}
var rt = {
  AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
  AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
  AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
  AT: /^(AT[0-9]{2})\d{16}$/,
  AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  BA: /^(BA[0-9]{2})\d{16}$/,
  BE: /^(BE[0-9]{2})\d{12}$/,
  BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
  BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
  BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
  BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
  CR: /^(CR[0-9]{2})\d{18}$/,
  CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
  CZ: /^(CZ[0-9]{2})\d{20}$/,
  DE: /^(DE[0-9]{2})\d{18}$/,
  DK: /^(DK[0-9]{2})\d{14}$/,
  DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
  DZ: /^(DZ\d{24})$/,
  EE: /^(EE[0-9]{2})\d{16}$/,
  EG: /^(EG[0-9]{2})\d{25}$/,
  ES: /^(ES[0-9]{2})\d{20}$/,
  FI: /^(FI[0-9]{2})\d{14}$/,
  FO: /^(FO[0-9]{2})\d{14}$/,
  FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
  GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
  GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
  GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
  GL: /^(GL[0-9]{2})\d{14}$/,
  GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
  GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
  HR: /^(HR[0-9]{2})\d{17}$/,
  HU: /^(HU[0-9]{2})\d{24}$/,
  IE: /^(IE[0-9]{2})[A-Z]{4}\d{14}$/,
  IL: /^(IL[0-9]{2})\d{19}$/,
  IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
  IR: /^(IR[0-9]{2})\d{22}$/,
  IS: /^(IS[0-9]{2})\d{22}$/,
  IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
  JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
  KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
  KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
  LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
  LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
  LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
  LT: /^(LT[0-9]{2})\d{16}$/,
  LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
  LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
  MA: /^(MA[0-9]{26})$/,
  MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
  MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
  ME: /^(ME[0-9]{2})\d{18}$/,
  MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
  MR: /^(MR[0-9]{2})\d{23}$/,
  MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
  MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
  MZ: /^(MZ[0-9]{2})\d{21}$/,
  NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
  NO: /^(NO[0-9]{2})\d{11}$/,
  PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
  PL: /^(PL[0-9]{2})\d{24}$/,
  PS: /^(PS[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
  PT: /^(PT[0-9]{2})\d{21}$/,
  QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
  RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
  RS: /^(RS[0-9]{2})\d{18}$/,
  SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
  SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
  SE: /^(SE[0-9]{2})\d{20}$/,
  SI: /^(SI[0-9]{2})\d{15}$/,
  SK: /^(SK[0-9]{2})\d{20}$/,
  SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
  SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  TL: /^(TL[0-9]{2})\d{19}$/,
  TN: /^(TN[0-9]{2})\d{20}$/,
  TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
  UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
  VA: /^(VA[0-9]{2})\d{18}$/,
  VG: /^(VG[0-9]{2})[A-Z]{4}\d{16}$/,
  XK: /^(XK[0-9]{2})\d{16}$/
};
function bu(t) {
  var e = t.filter(function(f) {
    return !(f in rt);
  });
  return e.length === 0;
}
function Iu(t, e) {
  var f = t.replace(/[\s\-]+/gi, "").toUpperCase(), s = f.slice(0, 2).toUpperCase(), i = s in rt;
  if (e.whitelist) {
    if (!bu(e.whitelist))
      return !1;
    var a = (0, Sa.default)(e.whitelist, s);
    if (!a)
      return !1;
  }
  if (e.blacklist) {
    var r = (0, Sa.default)(e.blacklist, s);
    if (r)
      return !1;
  }
  return i && rt[s].test(f);
}
function Ru(t) {
  var e = t.replace(/[^A-Z0-9]+/gi, "").toUpperCase(), f = e.slice(4) + e.slice(0, 4), s = f.replace(/[A-Z]/g, function(a) {
    return a.charCodeAt(0) - 55;
  }), i = s.match(/\d{1,7}/g).reduce(function(a, r) {
    return Number(a + r) % 97;
  }, "");
  return i === 1;
}
function Eu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return (0, Mu.default)(t), Iu(t, e) && Ru(t);
}
we.locales = Object.keys(rt);
var or = { exports: {} }, Ie = {};
Object.defineProperty(Ie, "__esModule", {
  value: !0
});
Ie.CountryCodes = void 0;
Ie.default = Lu;
var Du = Cu(E);
function Cu(t) {
  return t && t.__esModule ? t : { default: t };
}
var Ba = /* @__PURE__ */ new Set(["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]), xu = /^[a-zA-Z]{2}$/;
function Lu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  (0, Du.default)(t);
  var f = e.userAssignedCodes, s = (f || []).reduce(function(i, a) {
    return xu.test(a) && i.push(a.toUpperCase()), i;
  }, []);
  return s.includes(t.toUpperCase()) ? !0 : Ba.has(t.toUpperCase());
}
Ie.CountryCodes = Ba;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var f = i(E), s = Ie;
  function i(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var a = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;
  function r(n) {
    (0, f.default)(n);
    var u = n.slice(4, 6).toUpperCase();
    return !s.CountryCodes.has(u) && u !== "XK" ? !1 : a.test(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(or, or.exports);
var Pu = or.exports, dr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[a-f0-9]{32}$/;
  function a(r) {
    return (0, f.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(dr, dr.exports);
var Ou = dr.exports, cr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = {
    md5: 32,
    md4: 32,
    sha1: 40,
    sha256: 64,
    sha384: 96,
    sha512: 128,
    ripemd128: 32,
    ripemd160: 40,
    tiger128: 32,
    tiger160: 40,
    tiger192: 48,
    crc32: 8,
    crc32b: 8
  };
  function a(r, n) {
    (0, f.default)(r);
    var u = new RegExp("^[a-fA-F0-9]{".concat(i[n], "}$"));
    return u.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(cr, cr.exports);
var Nu = cr.exports, vr = { exports: {} }, pr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = l;
  var f = i(E), s = i(G);
  function i(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var a = /^[A-Za-z0-9+/]+={0,2}$/, r = /^[A-Za-z0-9+/]+$/, n = /^[A-Za-z0-9_-]+={0,2}$/, u = /^[A-Za-z0-9_-]+$/;
  function l(v, o) {
    var _;
    if ((0, f.default)(v), o = (0, s.default)(o, {
      urlSafe: !1,
      padding: !((_ = o) !== null && _ !== void 0 && _.urlSafe)
    }), v === "")
      return !0;
    if (o.padding && v.length % 4 !== 0)
      return !1;
    var m;
    return o.urlSafe ? m = o.padding ? n : u : m = o.padding ? a : r, (!o.padding || v.length % 4 === 0) && m.test(v);
  }
  t.exports = e.default, t.exports.default = e.default;
})(pr, pr.exports);
var Za = pr.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = i(E), s = i(Za);
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r) {
    (0, f.default)(r);
    var n = r.split("."), u = n.length;
    return u !== 3 ? !1 : n.reduce(function(l, v) {
      return l && (0, s.default)(v, {
        urlSafe: !0
      });
    }, !0);
  }
  t.exports = e.default, t.exports.default = e.default;
})(vr, vr.exports);
var Bu = vr.exports, _r = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var f = a(E), s = a(Fe), i = a(G);
  function a(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function r(l) {
    "@babel/helpers - typeof";
    return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
      return typeof v;
    } : function(v) {
      return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
    }, r(l);
  }
  var n = {
    allow_primitives: !1,
    allow_any_value: !1
  };
  function u(l, v) {
    (0, f.default)(l);
    try {
      v = (0, i.default)(v, n);
      var o = JSON.parse(l);
      if (v.allow_any_value)
        return !0;
      var _ = [];
      return v.allow_primitives && (_ = [null, !1, !0]), (0, s.default)(_, o) || !!o && r(o) === "object";
    } catch {
    }
    return !1;
  }
  t.exports = e.default, t.exports.default = e.default;
})(_r, _r.exports);
var Zu = _r.exports, Ar = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var f = i(E), s = i(G);
  function i(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var a = {
    ignore_whitespace: !1
  };
  function r(n, u) {
    return (0, f.default)(n), u = (0, s.default)(u, a), (u.ignore_whitespace ? n.trim().length : n.length) === 0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ar, Ar.exports);
var Fu = Ar.exports, gr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function i(r) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
      return typeof n;
    } : function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    }, i(r);
  }
  function a(r, n) {
    (0, f.default)(r);
    var u, l;
    i(n) === "object" ? (u = n.min || 0, l = n.max) : (u = arguments[1] || 0, l = arguments[2]);
    var v = r.match(/[^\uFE0F\uFE0E][\uFE0F\uFE0E]/g) || [], o = r.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [], _ = r.length - v.length - o.length, m = _ >= u && (typeof l > "u" || _ <= l);
    return m && Array.isArray(n == null ? void 0 : n.discreteLengths) ? n.discreteLengths.some(function($) {
      return $ === _;
    }) : m;
  }
  t.exports = e.default, t.exports.default = e.default;
})(gr, gr.exports);
var Tu = gr.exports, hr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(E);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, f.default)(a), /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/i.test(a);
  }
  t.exports = e.default, t.exports.default = e.default;
})(hr, hr.exports);
var Uu = hr.exports, Sr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = {
    1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    6: /^[0-9A-F]{8}-[0-9A-F]{4}-6[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    7: /^[0-9A-F]{8}-[0-9A-F]{4}-7[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    8: /^[0-9A-F]{8}-[0-9A-F]{4}-8[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    nil: /^00000000-0000-0000-0000-000000000000$/i,
    max: /^ffffffff-ffff-ffff-ffff-ffffffffffff$/i,
    loose: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    // From https://github.com/uuidjs/uuid/blob/main/src/regex.js
    all: /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i
  };
  function a(r, n) {
    return (0, f.default)(r), n == null && (n = "all"), n in i ? i[n].test(r) : !1;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Sr, Sr.exports);
var Hu = Sr.exports, mr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = i(E), s = i(Oa);
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r) {
    return (0, f.default)(r), (0, s.default)(r) && r.length === 24;
  }
  t.exports = e.default, t.exports.default = e.default;
})(mr, mr.exports);
var wu = mr.exports, $r = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(la);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function i(r) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
      return typeof n;
    } : function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    }, i(r);
  }
  function a(r, n) {
    var u = (i(n) === "object" ? n.comparisonDate : n) || Date().toString(), l = (0, f.default)(u), v = (0, f.default)(r);
    return !!(v && l && v > l);
  }
  t.exports = e.default, t.exports.default = e.default;
})($r, $r.exports);
var ku = $r.exports, yr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(la);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function i(r) {
    "@babel/helpers - typeof";
    return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
      return typeof n;
    } : function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    }, i(r);
  }
  function a(r, n) {
    var u = (i(n) === "object" ? n.comparisonDate : n) || Date().toString(), l = (0, f.default)(u), v = (0, f.default)(r);
    return !!(v && l && v < l);
  }
  t.exports = e.default, t.exports.default = e.default;
})(yr, yr.exports);
var Gu = yr.exports, Mr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var f = i(E), s = i(Ea);
  function i(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function a(n) {
    "@babel/helpers - typeof";
    return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
      return typeof u;
    } : function(u) {
      return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
    }, a(n);
  }
  function r(n, u) {
    (0, f.default)(n);
    var l;
    if (Object.prototype.toString.call(u) === "[object Array]") {
      var v = [];
      for (l in u)
        ({}).hasOwnProperty.call(u, l) && (v[l] = (0, s.default)(u[l]));
      return v.indexOf(n) >= 0;
    } else {
      if (a(u) === "object")
        return u.hasOwnProperty(n);
      if (u && typeof u.indexOf == "function")
        return u.indexOf(n) >= 0;
    }
    return !1;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Mr, Mr.exports);
var Ku = Mr.exports, br = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(E);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    (0, f.default)(a);
    for (var r = a.replace(/[- ]+/g, ""), n = 0, u, l, v, o = r.length - 1; o >= 0; o--)
      u = r.substring(o, o + 1), l = parseInt(u, 10), v ? (l *= 2, l >= 10 ? n += l % 10 + 1 : n += l) : n += l, v = !v;
    return !!(n % 10 === 0 && r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(br, br.exports);
var Fa = br.exports, Ir = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var f = i(E), s = i(Fa);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = {
    amex: /^3[47][0-9]{13}$/,
    dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9][0-9])[0-9]{12,15}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    mastercard: /^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
    // /^[25][1-7][0-9]{14}$/;
    unionpay: /^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/,
    visa: /^(?:4[0-9]{12})(?:[0-9]{3,6})?$/
  }, r = function() {
    var u = [];
    for (var l in a)
      a.hasOwnProperty(l) && u.push(a[l]);
    return u;
  }();
  function n(u) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, f.default)(u);
    var v = l.provider, o = u.replace(/[- ]+/g, "");
    if (v && v.toLowerCase() in a) {
      if (!a[v.toLowerCase()].test(o))
        return !1;
    } else {
      if (v && !(v.toLowerCase() in a))
        throw new Error("".concat(v, " is not a valid credit card provider."));
      if (!r.some(function(_) {
        return _.test(o);
      }))
        return !1;
    }
    return (0, s.default)(u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ir, Ir.exports);
var Wu = Ir.exports, Rr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var f = a(E), s = a(Fe), i = a(fa);
  function a(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var r = {
    PL: function(l) {
      (0, f.default)(l);
      var v = {
        1: 1,
        2: 3,
        3: 7,
        4: 9,
        5: 1,
        6: 3,
        7: 7,
        8: 9,
        9: 1,
        10: 3,
        11: 0
      };
      if (l != null && l.length === 11 && (0, i.default)(l, {
        allow_leading_zeroes: !0
      })) {
        var o = l.split("").slice(0, -1), _ = o.reduce(function(p, A, h) {
          return p + Number(A) * v[h + 1];
        }, 0), m = _ % 10, $ = Number(l.charAt(l.length - 1));
        if (m === 0 && $ === 0 || $ === 10 - m)
          return !0;
      }
      return !1;
    },
    ES: function(l) {
      (0, f.default)(l);
      var v = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/, o = {
        X: 0,
        Y: 1,
        Z: 2
      }, _ = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"], m = l.trim().toUpperCase();
      if (!v.test(m))
        return !1;
      var $ = m.slice(0, -1).replace(/[X,Y,Z]/g, function(p) {
        return o[p];
      });
      return m.endsWith(_[$ % 23]);
    },
    FI: function(l) {
      if ((0, f.default)(l), l.length !== 11 || !l.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/))
        return !1;
      var v = "0123456789ABCDEFHJKLMNPRSTUVWXY", o = parseInt(l.slice(0, 6), 10) * 1e3 + parseInt(l.slice(7, 10), 10), _ = o % 31, m = v[_];
      return m === l.slice(10, 11);
    },
    IN: function(l) {
      var v = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/, o = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]], _ = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]], m = l.trim();
      if (!v.test(m))
        return !1;
      var $ = 0, p = m.replace(/\s/g, "").split("").map(Number).reverse();
      return p.forEach(function(A, h) {
        $ = o[$][_[h % 8][A]];
      }), $ === 0;
    },
    IR: function(l) {
      if (!l.match(/^\d{10}$/) || (l = "0000".concat(l).slice(l.length - 6), parseInt(l.slice(3, 9), 10) === 0))
        return !1;
      for (var v = parseInt(l.slice(9, 10), 10), o = 0, _ = 0; _ < 9; _++)
        o += parseInt(l.slice(_, _ + 1), 10) * (10 - _);
      return o %= 11, o < 2 && v === o || o >= 2 && v === 11 - o;
    },
    IT: function(l) {
      return l.length !== 9 || l === "CA00000AA" ? !1 : l.search(/C[A-Z]\d{5}[A-Z]{2}/i) > -1;
    },
    NO: function(l) {
      var v = l.trim();
      if (isNaN(Number(v)) || v.length !== 11 || v === "00000000000")
        return !1;
      var o = v.split("").map(Number), _ = (11 - (3 * o[0] + 7 * o[1] + 6 * o[2] + 1 * o[3] + 8 * o[4] + 9 * o[5] + 4 * o[6] + 5 * o[7] + 2 * o[8]) % 11) % 11, m = (11 - (5 * o[0] + 4 * o[1] + 3 * o[2] + 2 * o[3] + 7 * o[4] + 6 * o[5] + 5 * o[6] + 4 * o[7] + 3 * o[8] + 2 * _) % 11) % 11;
      return !(_ !== o[9] || m !== o[10]);
    },
    TH: function(l) {
      if (!l.match(/^[1-8]\d{12}$/))
        return !1;
      for (var v = 0, o = 0; o < 12; o++)
        v += parseInt(l[o], 10) * (13 - o);
      return l[12] === ((11 - v % 11) % 10).toString();
    },
    LK: function(l) {
      var v = /^[1-9]\d{8}[vx]$/i, o = /^[1-9]\d{11}$/i;
      return l.length === 10 && v.test(l) ? !0 : !!(l.length === 12 && o.test(l));
    },
    "he-IL": function(l) {
      var v = /^\d{9}$/, o = l.trim();
      if (!v.test(o))
        return !1;
      for (var _ = o, m = 0, $, p = 0; p < _.length; p++)
        $ = Number(_[p]) * (p % 2 + 1), m += $ > 9 ? $ - 9 : $;
      return m % 10 === 0;
    },
    "ar-LY": function(l) {
      var v = /^(1|2)\d{11}$/, o = l.trim();
      return v.test(o);
    },
    "ar-TN": function(l) {
      var v = /^\d{8}$/, o = l.trim();
      return v.test(o);
    },
    "zh-CN": function(l) {
      var v = [
        "11",
        // 北京
        "12",
        // 天津
        "13",
        // 河北
        "14",
        // 山西
        "15",
        // 内蒙古
        "21",
        // 辽宁
        "22",
        // 吉林
        "23",
        // 黑龙江
        "31",
        // 上海
        "32",
        // 江苏
        "33",
        // 浙江
        "34",
        // 安徽
        "35",
        // 福建
        "36",
        // 江西
        "37",
        // 山东
        "41",
        // 河南
        "42",
        // 湖北
        "43",
        // 湖南
        "44",
        // 广东
        "45",
        // 广西
        "46",
        // 海南
        "50",
        // 重庆
        "51",
        // 四川
        "52",
        // 贵州
        "53",
        // 云南
        "54",
        // 西藏
        "61",
        // 陕西
        "62",
        // 甘肃
        "63",
        // 青海
        "64",
        // 宁夏
        "65",
        // 新疆
        "71",
        // 台湾
        "81",
        // 香港
        "82",
        // 澳门
        "91"
        // 国外
      ], o = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"], _ = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"], m = function(C) {
        return (0, s.default)(v, C);
      }, $ = function(C) {
        var x = parseInt(C.substring(0, 4), 10), L = parseInt(C.substring(4, 6), 10), P = parseInt(C.substring(6), 10), Z = new Date(x, L - 1, P);
        return Z > /* @__PURE__ */ new Date() ? !1 : Z.getFullYear() === x && Z.getMonth() === L - 1 && Z.getDate() === P;
      }, p = function(C) {
        for (var x = C.substring(0, 17), L = 0, P = 0; P < 17; P++)
          L += parseInt(x.charAt(P), 10) * parseInt(o[P], 10);
        var Z = L % 11;
        return _[Z];
      }, A = function(C) {
        return p(C) === C.charAt(17).toUpperCase();
      }, h = function(C) {
        var x = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(C);
        if (!x)
          return !1;
        var L = C.substring(0, 2);
        if (x = m(L), !x)
          return !1;
        var P = "19".concat(C.substring(6, 12));
        return x = $(P), !!x;
      }, S = function(C) {
        var x = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(C);
        if (!x)
          return !1;
        var L = C.substring(0, 2);
        if (x = m(L), !x)
          return !1;
        var P = C.substring(6, 14);
        return x = $(P), x ? A(C) : !1;
      }, M = function(C) {
        var x = /^\d{15}|(\d{17}(\d|x|X))$/.test(C);
        return x ? C.length === 15 ? h(C) : S(C) : !1;
      };
      return M(l);
    },
    "zh-HK": function(l) {
      l = l.trim();
      var v = /^[A-Z]{1,2}[0-9]{6}((\([0-9A]\))|(\[[0-9A]\])|([0-9A]))$/, o = /^[0-9]$/;
      if (l = l.toUpperCase(), !v.test(l))
        return !1;
      l = l.replace(/\[|\]|\(|\)/g, ""), l.length === 8 && (l = "3".concat(l));
      for (var _ = 0, m = 0; m <= 7; m++) {
        var $ = void 0;
        o.test(l[m]) ? $ = l[m] : $ = (l[m].charCodeAt(0) - 55) % 11, _ += $ * (9 - m);
      }
      _ %= 11;
      var p;
      return _ === 0 ? p = "0" : _ === 1 ? p = "A" : p = String(11 - _), p === l[l.length - 1];
    },
    "zh-TW": function(l) {
      var v = {
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        G: 16,
        H: 17,
        I: 34,
        J: 18,
        K: 19,
        L: 20,
        M: 21,
        N: 22,
        O: 35,
        P: 23,
        Q: 24,
        R: 25,
        S: 26,
        T: 27,
        U: 28,
        V: 29,
        W: 32,
        X: 30,
        Y: 31,
        Z: 33
      }, o = l.trim().toUpperCase();
      return /^[A-Z][0-9]{9}$/.test(o) ? Array.from(o).reduce(function(_, m, $) {
        if ($ === 0) {
          var p = v[m];
          return p % 10 * 9 + Math.floor(p / 10);
        }
        return $ === 9 ? (10 - _ % 10 - Number(m)) % 10 === 0 : _ + Number(m) * (9 - $);
      }, 0) : !1;
    },
    PK: function(l) {
      var v = /^[1-7][0-9]{4}-[0-9]{7}-[1-9]$/, o = l.trim();
      return v.test(o);
    }
  };
  function n(u, l) {
    if ((0, f.default)(u), l in r)
      return r[l](u);
    if (l === "any") {
      for (var v in r)
        if (r.hasOwnProperty(v)) {
          var o = r[v];
          if (o(u))
            return !0;
        }
      return !1;
    }
    throw new Error("Invalid locale '".concat(l, "'"));
  }
  t.exports = e.default, t.exports.default = e.default;
})(Rr, Rr.exports);
var ju = Rr.exports, Er = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = l;
  var f = s(E);
  function s(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var i = 8, a = 14, r = /^(\d{8}|\d{13}|\d{14})$/;
  function n(v, o) {
    return v === i || v === a ? o % 2 === 0 ? 3 : 1 : o % 2 === 0 ? 1 : 3;
  }
  function u(v) {
    var o = v.slice(0, -1).split("").map(function(m, $) {
      return Number(m) * n(v.length, $);
    }).reduce(function(m, $) {
      return m + $;
    }, 0), _ = 10 - o % 10;
    return _ < 10 ? _ : 0;
  }
  function l(v) {
    (0, f.default)(v);
    var o = Number(v.slice(-1));
    return r.test(v) && o === u(v);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Er, Er.exports);
var qu = Er.exports, Dr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;
  function a(r) {
    if ((0, f.default)(r), !i.test(r))
      return !1;
    for (var n = !0, u = 0, l = r.length - 2; l >= 0; l--)
      if (r[l] >= "A" && r[l] <= "Z")
        for (var v = r[l].charCodeAt(0) - 55, o = v % 10, _ = Math.trunc(v / 10), m = 0, $ = [o, _]; m < $.length; m++) {
          var p = $[m];
          n ? p >= 5 ? u += 1 + (p - 5) * 2 : u += p * 2 : u += p, n = !n;
        }
      else {
        var A = r[l].charCodeAt(0) - "0".charCodeAt(0);
        n ? A >= 5 ? u += 1 + (A - 5) * 2 : u += A * 2 : u += A, n = !n;
      }
    var h = Math.trunc((u + 9) / 10) * 10 - u;
    return +r[r.length - 1] === h;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Dr, Dr.exports);
var Vu = Dr.exports, Cr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var f = s(E);
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var i = /^(?:[0-9]{9}X|[0-9]{10})$/, a = /^(?:[0-9]{13})$/, r = [1, 3];
  function n(u, l) {
    (0, f.default)(u);
    var v = String((l == null ? void 0 : l.version) || l);
    if (!(l != null && l.version || l))
      return n(u, {
        version: 10
      }) || n(u, {
        version: 13
      });
    var o = u.replace(/[\s-]+/g, ""), _ = 0;
    if (v === "10") {
      if (!i.test(o))
        return !1;
      for (var m = 0; m < v - 1; m++)
        _ += (m + 1) * o.charAt(m);
      if (o.charAt(9) === "X" ? _ += 10 * 10 : _ += 10 * o.charAt(9), _ % 11 === 0)
        return !0;
    } else if (v === "13") {
      if (!a.test(o))
        return !1;
      for (var $ = 0; $ < 12; $++)
        _ += r[$ % 2] * o.charAt($);
      if (o.charAt(12) - (10 - _ % 10) % 10 === 0)
        return !0;
    }
    return !1;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Cr, Cr.exports);
var Yu = Cr.exports, xr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = "^\\d{4}-?\\d{3}[\\dX]$";
  function a(r) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, f.default)(r);
    var u = i;
    if (u = n.require_hyphen ? u.replace("?", "") : u, u = n.case_sensitive ? new RegExp(u) : new RegExp(u, "i"), !u.test(r))
      return !1;
    for (var l = r.replace("-", "").toUpperCase(), v = 0, o = 0; o < l.length; o++) {
      var _ = l[o];
      v += (_ === "X" ? 10 : +_) * (8 - o);
    }
    return v % 11 === 0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(xr, xr.exports);
var zu = xr.exports, Lr = { exports: {} }, de = {};
Object.defineProperty(de, "__esModule", {
  value: !0
});
de.iso7064Check = Qu;
de.luhnCheck = Ju;
de.reverseMultiplyAndSum = Xu;
de.verhoeffCheck = ei;
function Qu(t) {
  for (var e = 10, f = 0; f < t.length - 1; f++)
    e = (parseInt(t[f], 10) + e) % 10 === 0 ? 10 * 2 % 11 : (parseInt(t[f], 10) + e) % 10 * 2 % 11;
  return e = e === 1 ? 0 : 11 - e, e === parseInt(t[10], 10);
}
function Ju(t) {
  for (var e = 0, f = !1, s = t.length - 1; s >= 0; s--) {
    if (f) {
      var i = parseInt(t[s], 10) * 2;
      i > 9 ? e += i.toString().split("").map(function(a) {
        return parseInt(a, 10);
      }).reduce(function(a, r) {
        return a + r;
      }, 0) : e += i;
    } else
      e += parseInt(t[s], 10);
    f = !f;
  }
  return e % 10 === 0;
}
function Xu(t, e) {
  for (var f = 0, s = 0; s < t.length; s++)
    f += t[s] * (e - s);
  return f;
}
function ei(t) {
  for (var e = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]], f = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]], s = t.split("").reverse().join(""), i = 0, a = 0; a < s.length; a++)
    i = e[i][f[a % 8][parseInt(s[a], 10)]];
  return i === 0;
}
(function(t, e) {
  function f(d) {
    "@babel/helpers - typeof";
    return f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
      return typeof c;
    } : function(c) {
      return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
    }, f(d);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = ut;
  var s = n(E), i = r(de), a = n(Pa);
  function r(d, c) {
    if (typeof WeakMap == "function")
      var g = /* @__PURE__ */ new WeakMap(), I = /* @__PURE__ */ new WeakMap();
    return (r = function(D, O) {
      if (!O && D && D.__esModule)
        return D;
      var B, F, H = { __proto__: null, default: D };
      if (D === null || f(D) != "object" && typeof D != "function")
        return H;
      if (B = O ? I : g) {
        if (B.has(D))
          return B.get(D);
        B.set(D, H);
      }
      for (var re in D)
        re !== "default" && {}.hasOwnProperty.call(D, re) && ((F = (B = Object.defineProperty) && Object.getOwnPropertyDescriptor(D, re)) && (F.get || F.set) ? B(H, re, F) : H[re] = D[re]);
      return H;
    })(d, c);
  }
  function n(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function u(d) {
    return _(d) || o(d) || v(d) || l();
  }
  function l() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function v(d, c) {
    if (d) {
      if (typeof d == "string")
        return m(d, c);
      var g = {}.toString.call(d).slice(8, -1);
      return g === "Object" && d.constructor && (g = d.constructor.name), g === "Map" || g === "Set" ? Array.from(d) : g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? m(d, c) : void 0;
    }
  }
  function o(d) {
    if (typeof Symbol < "u" && d[Symbol.iterator] != null || d["@@iterator"] != null)
      return Array.from(d);
  }
  function _(d) {
    if (Array.isArray(d))
      return m(d);
  }
  function m(d, c) {
    (c == null || c > d.length) && (c = d.length);
    for (var g = 0, I = Array(c); g < c; g++)
      I[g] = d[g];
    return I;
  }
  function $(d) {
    var c = d.slice(0, 2), g = parseInt(d.slice(2, 4), 10);
    g > 40 ? (g -= 40, c = "20".concat(c)) : g > 20 ? (g -= 20, c = "18".concat(c)) : c = "19".concat(c), g < 10 && (g = "0".concat(g));
    var I = "".concat(c, "/").concat(g, "/").concat(d.slice(4, 6));
    if (!(0, a.default)(I, "YYYY/MM/DD"))
      return !1;
    for (var y = d.split("").map(function(F) {
      return parseInt(F, 10);
    }), D = [2, 4, 8, 5, 10, 9, 7, 3, 6], O = 0, B = 0; B < D.length; B++)
      O += y[B] * D[B];
    return O = O % 11 === 10 ? 0 : O % 11, O === y[9];
  }
  function p(d) {
    var c = d.split(""), g = c.filter(function(y, D) {
      return D % 2;
    }).map(function(y) {
      return Number(y) * 2;
    }).join("").split(""), I = c.filter(function(y, D) {
      return !(D % 2);
    }).concat(g).map(function(y) {
      return Number(y);
    }).reduce(function(y, D) {
      return y + D;
    });
    return I % 10 === 0;
  }
  function A(d) {
    d = d.replace(/\W/, "");
    var c = parseInt(d.slice(0, 2), 10);
    if (d.length === 10)
      c < 54 ? c = "20".concat(c) : c = "19".concat(c);
    else {
      if (d.slice(6) === "000")
        return !1;
      if (c < 54)
        c = "19".concat(c);
      else
        return !1;
    }
    c.length === 3 && (c = [c.slice(0, 2), "0", c.slice(2)].join(""));
    var g = parseInt(d.slice(2, 4), 10);
    if (g > 50 && (g -= 50), g > 20) {
      if (parseInt(c, 10) < 2004)
        return !1;
      g -= 20;
    }
    g < 10 && (g = "0".concat(g));
    var I = "".concat(c, "/").concat(g, "/").concat(d.slice(4, 6));
    if (!(0, a.default)(I, "YYYY/MM/DD"))
      return !1;
    if (d.length === 10 && parseInt(d, 10) % 11 !== 0) {
      var y = parseInt(d.slice(0, 9), 10) % 11;
      if (parseInt(c, 10) < 1986 && y === 10) {
        if (parseInt(d.slice(9), 10) !== 0)
          return !1;
      } else
        return !1;
    }
    return !0;
  }
  function h(d) {
    return i.luhnCheck(d);
  }
  function S(d) {
    for (var c = d.split("").map(function(F) {
      return parseInt(F, 10);
    }), g = [], I = 0; I < c.length - 1; I++) {
      g.push("");
      for (var y = 0; y < c.length - 1; y++)
        c[I] === c[y] && (g[I] += y);
    }
    if (g = g.filter(function(F) {
      return F.length > 1;
    }), g.length !== 2 && g.length !== 3)
      return !1;
    if (g[0].length === 3) {
      for (var D = g[0].split("").map(function(F) {
        return parseInt(F, 10);
      }), O = 0, B = 0; B < D.length - 1; B++)
        D[B] + 1 === D[B + 1] && (O += 1);
      if (O === 2)
        return !1;
    }
    return i.iso7064Check(d);
  }
  function M(d) {
    d = d.replace(/\W/, "");
    var c = parseInt(d.slice(4, 6), 10), g = d.slice(6, 7);
    switch (g) {
      case "0":
      case "1":
      case "2":
      case "3":
        c = "19".concat(c);
        break;
      case "4":
      case "9":
        c < 37 ? c = "20".concat(c) : c = "19".concat(c);
        break;
      default:
        if (c < 37)
          c = "20".concat(c);
        else if (c > 58)
          c = "18".concat(c);
        else
          return !1;
        break;
    }
    c.length === 3 && (c = [c.slice(0, 2), "0", c.slice(2)].join(""));
    var I = "".concat(c, "/").concat(d.slice(2, 4), "/").concat(d.slice(0, 2));
    if (!(0, a.default)(I, "YYYY/MM/DD"))
      return !1;
    for (var y = d.split("").map(function(F) {
      return parseInt(F, 10);
    }), D = 0, O = 4, B = 0; B < 9; B++)
      D += y[B] * O, O -= 1, O === 1 && (O = 7);
    return D %= 11, D === 1 ? !1 : D === 0 ? y[9] === 0 : y[9] === 11 - D;
  }
  function b(d) {
    for (var c = d.slice(0, 8).split("").map(function(D) {
      return parseInt(D, 10);
    }), g = 0, I = 1; I < c.length; I += 2)
      g += c[I];
    for (var y = 0; y < c.length; y += 2)
      c[y] < 2 ? g += 1 - c[y] : (g += 2 * (c[y] - 2) + 5, c[y] > 4 && (g += 2));
    return String.fromCharCode(g % 26 + 65) === d.charAt(8);
  }
  function C(d) {
    for (var c = d.split("").map(function(y) {
      return parseInt(y, 10);
    }), g = 0, I = 0; I < 8; I++)
      g += c[I] * Math.pow(2, 8 - I);
    return g % 11 % 10 === c[8];
  }
  function x(d) {
    var c = i.reverseMultiplyAndSum(d.split("").slice(0, 7).map(function(g) {
      return parseInt(g, 10);
    }), 8);
    return d.length === 9 && d[8] !== "W" && (c += (d[8].charCodeAt(0) - 64) * 9), c %= 23, c === 0 ? d[7].toUpperCase() === "W" : d[7].toUpperCase() === String.fromCharCode(64 + c);
  }
  var L = {
    andover: ["10", "12"],
    atlanta: ["60", "67"],
    austin: ["50", "53"],
    brookhaven: ["01", "02", "03", "04", "05", "06", "11", "13", "14", "16", "21", "22", "23", "25", "34", "51", "52", "54", "55", "56", "57", "58", "59", "65"],
    cincinnati: ["30", "32", "35", "36", "37", "38", "61"],
    fresno: ["15", "24"],
    internet: ["20", "26", "27", "45", "46", "47"],
    kansas: ["40", "44"],
    memphis: ["94", "95"],
    ogden: ["80", "90"],
    philadelphia: ["33", "39", "41", "42", "43", "46", "48", "62", "63", "64", "66", "68", "71", "72", "73", "74", "75", "76", "77", "81", "82", "83", "84", "85", "86", "87", "88", "91", "92", "93", "98", "99"],
    sba: ["31"]
  };
  function P() {
    var d = [];
    for (var c in L)
      L.hasOwnProperty(c) && d.push.apply(d, u(L[c]));
    return d;
  }
  function Z(d) {
    return P().indexOf(d.slice(0, 2)) !== -1;
  }
  function N(d) {
    for (var c = 0, g = d.split(""), I = parseInt(g.pop(), 10), y = 0; y < g.length; y++)
      c += g[9 - y] * (2 + y % 6);
    var D = 11 - c % 11;
    return D === 11 ? D = 0 : D === 10 && (D = 9), I === D;
  }
  function w(d) {
    var c = d.toUpperCase().split("");
    if (isNaN(parseInt(c[0], 10)) && c.length > 1) {
      var g = 0;
      switch (c[0]) {
        case "Y":
          g = 1;
          break;
        case "Z":
          g = 2;
          break;
      }
      c.splice(0, 1, g);
    } else
      for (; c.length < 9; )
        c.unshift(0);
    var I = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    c = c.join("");
    var y = parseInt(c.slice(0, 8), 10) % 23;
    return c[8] === I[y];
  }
  function K(d) {
    var c = d.slice(1, 3), g = d.slice(0, 1);
    switch (g) {
      case "1":
      case "2":
        c = "18".concat(c);
        break;
      case "3":
      case "4":
        c = "19".concat(c);
        break;
      default:
        c = "20".concat(c);
        break;
    }
    var I = "".concat(c, "/").concat(d.slice(3, 5), "/").concat(d.slice(5, 7));
    if (!(0, a.default)(I, "YYYY/MM/DD"))
      return !1;
    for (var y = d.split("").map(function(H) {
      return parseInt(H, 10);
    }), D = 0, O = 1, B = 0; B < 10; B++)
      D += y[B] * O, O += 1, O === 10 && (O = 1);
    if (D % 11 === 10) {
      D = 0, O = 3;
      for (var F = 0; F < 10; F++)
        D += y[F] * O, O += 1, O === 10 && (O = 1);
      if (D % 11 === 10)
        return y[10] === 0;
    }
    return D % 11 === y[10];
  }
  function z(d) {
    var c = d.slice(4, 6), g = d.slice(6, 7);
    switch (g) {
      case "+":
        c = "18".concat(c);
        break;
      case "-":
        c = "19".concat(c);
        break;
      default:
        c = "20".concat(c);
        break;
    }
    var I = "".concat(c, "/").concat(d.slice(2, 4), "/").concat(d.slice(0, 2));
    if (!(0, a.default)(I, "YYYY/MM/DD"))
      return !1;
    var y = parseInt(d.slice(0, 6) + d.slice(7, 10), 10) % 31;
    if (y < 10)
      return y === parseInt(d.slice(10), 10);
    y -= 10;
    var D = ["A", "B", "C", "D", "E", "F", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y"];
    return D[y] === d.slice(10);
  }
  function Q(d) {
    if (d.slice(2, 4) !== "00" || d.slice(4, 6) !== "00") {
      var c = "".concat(d.slice(0, 2), "/").concat(d.slice(2, 4), "/").concat(d.slice(4, 6));
      if (!(0, a.default)(c, "YY/MM/DD"))
        return !1;
    }
    var g = 97 - parseInt(d.slice(0, 9), 10) % 97, I = parseInt(d.slice(9, 11), 10);
    return !(g !== I && (g = 97 - parseInt("2".concat(d.slice(0, 9)), 10) % 97, g !== I));
  }
  function W(d) {
    d = d.replace(/\s/g, "");
    var c = parseInt(d.slice(0, 10), 10) % 511, g = parseInt(d.slice(10, 13), 10);
    return c === g;
  }
  function X(d) {
    var c = "".concat(d.slice(0, 4), "/").concat(d.slice(4, 6), "/").concat(d.slice(6, 8));
    return !(0, a.default)(c, "YYYY/MM/DD") || !i.luhnCheck(d.slice(0, 12)) ? !1 : i.verhoeffCheck("".concat(d.slice(0, 11)).concat(d[12]));
  }
  function ae(d) {
    return i.iso7064Check(d);
  }
  function ce(d) {
    for (var c = d.split("").map(function(y) {
      return parseInt(y, 10);
    }), g = 8, I = 1; I < 9; I++)
      g += c[I] * (I + 1);
    return g % 11 === c[9];
  }
  function se(d) {
    for (var c = !1, g = !1, I = 0; I < 3; I++)
      if (!c && /[AEIOU]/.test(d[I]))
        c = !0;
      else if (!g && c && d[I] === "X")
        g = !0;
      else if (I > 0 && (c && !g && !/[AEIOU]/.test(d[I]) || g && !/X/.test(d[I])))
        return !1;
    return !0;
  }
  function ve(d) {
    var c = d.toUpperCase().split("");
    if (!se(c.slice(0, 3)) || !se(c.slice(3, 6)))
      return !1;
    for (var g = [6, 7, 9, 10, 12, 13, 14], I = {
      L: "0",
      M: "1",
      N: "2",
      P: "3",
      Q: "4",
      R: "5",
      S: "6",
      T: "7",
      U: "8",
      V: "9"
    }, y = 0, D = g; y < D.length; y++) {
      var O = D[y];
      c[O] in I && c.splice(O, 1, I[c[O]]);
    }
    var B = {
      A: "01",
      B: "02",
      C: "03",
      D: "04",
      E: "05",
      H: "06",
      L: "07",
      M: "08",
      P: "09",
      R: "10",
      S: "11",
      T: "12"
    }, F = B[c[8]], H = parseInt(c[9] + c[10], 10);
    H > 40 && (H -= 40), H < 10 && (H = "0".concat(H));
    var re = "".concat(c[6]).concat(c[7], "/").concat(F, "/").concat(H);
    if (!(0, a.default)(re, "YY/MM/DD"))
      return !1;
    for (var Oe = 0, ge = 1; ge < c.length - 1; ge += 2) {
      var Ne = parseInt(c[ge], 10);
      isNaN(Ne) && (Ne = c[ge].charCodeAt(0) - 65), Oe += Ne;
    }
    for (var Be = {
      // Maps of characters at odd places
      A: 1,
      B: 0,
      C: 5,
      D: 7,
      E: 9,
      F: 13,
      G: 15,
      H: 17,
      I: 19,
      J: 21,
      K: 2,
      L: 4,
      M: 18,
      N: 20,
      O: 11,
      P: 3,
      Q: 6,
      R: 8,
      S: 12,
      T: 14,
      U: 16,
      V: 10,
      W: 22,
      X: 25,
      Y: 24,
      Z: 23,
      0: 1,
      1: 0
    }, oe = 0; oe < c.length - 1; oe += 2) {
      var he = 0;
      if (c[oe] in Be)
        he = Be[c[oe]];
      else {
        var ze = parseInt(c[oe], 10);
        he = 2 * ze + 1, ze > 4 && (he += 2);
      }
      Oe += he;
    }
    return String.fromCharCode(65 + Oe % 26) === c[15];
  }
  function fe(d) {
    d = d.replace(/\W/, "");
    var c = d.slice(0, 2);
    if (c !== "32") {
      var g = d.slice(2, 4);
      if (g !== "00") {
        var I = d.slice(4, 6);
        switch (d[6]) {
          case "0":
            I = "18".concat(I);
            break;
          case "1":
            I = "19".concat(I);
            break;
          default:
            I = "20".concat(I);
            break;
        }
        var y = "".concat(I, "/").concat(d.slice(2, 4), "/").concat(c);
        if (!(0, a.default)(y, "YYYY/MM/DD"))
          return !1;
      }
      for (var D = 1101, O = [1, 6, 3, 7, 9, 10, 5, 8, 4, 2], B = 0; B < d.length - 1; B++)
        D -= parseInt(d[B], 10) * O[B];
      return parseInt(d[10], 10) === D % 11;
    }
    return !0;
  }
  function Re(d) {
    if (d.length !== 9) {
      for (var c = d.toUpperCase().split(""); c.length < 8; )
        c.unshift(0);
      switch (d[7]) {
        case "A":
        case "P":
          if (parseInt(c[6], 10) === 0)
            return !1;
          break;
        default: {
          var g = parseInt(c.join("").slice(0, 5), 10);
          if (g > 32e3)
            return !1;
          var I = parseInt(c.join("").slice(5, 7), 10);
          if (g === I)
            return !1;
        }
      }
    }
    return !0;
  }
  function Ee(d) {
    return i.reverseMultiplyAndSum(d.split("").slice(0, 8).map(function(c) {
      return parseInt(c, 10);
    }), 9) % 11 === parseInt(d[8], 10);
  }
  function De(d) {
    if (d.length === 10) {
      for (var c = [6, 5, 7, 2, 3, 4, 5, 6, 7], g = 0, I = 0; I < c.length; I++)
        g += parseInt(d[I], 10) * c[I];
      return g %= 11, g === 10 ? !1 : g === parseInt(d[9], 10);
    }
    var y = d.slice(0, 2), D = parseInt(d.slice(2, 4), 10);
    D > 80 ? (y = "18".concat(y), D -= 80) : D > 60 ? (y = "22".concat(y), D -= 60) : D > 40 ? (y = "21".concat(y), D -= 40) : D > 20 ? (y = "20".concat(y), D -= 20) : y = "19".concat(y), D < 10 && (D = "0".concat(D));
    var O = "".concat(y, "/").concat(D, "/").concat(d.slice(4, 6));
    if (!(0, a.default)(O, "YYYY/MM/DD"))
      return !1;
    for (var B = 0, F = 1, H = 0; H < d.length - 1; H++)
      B += parseInt(d[H], 10) * F % 10, F += 2, F > 10 ? F = 1 : F === 5 && (F += 2);
    return B = 10 - B % 10, B === parseInt(d[10], 10);
  }
  function pe(d) {
    return d.charCodeAt(0) - 48;
  }
  function Ce(d) {
    var c = d.substring(0, 12).toUpperCase(), g = d.substring(12);
    if (/^(.)\1+$/.test(d.toUpperCase()))
      return !1;
    for (var I = 0, y = 5, D = 0; D < 12; D++)
      I += pe(c.charAt(D)) * y, y = y === 2 ? 9 : y - 1;
    var O = I % 11, B = O < 2 ? 0 : 11 - O;
    if (B !== parseInt(g.charAt(0), 10))
      return !1;
    I = 0, y = 6;
    for (var F = 0; F < 12; F++)
      I += pe(c.charAt(F)) * y, y = y === 2 ? 9 : y - 1;
    I += B * 2, O = I % 11;
    var H = O < 2 ? 0 : 11 - O;
    return H === parseInt(g.charAt(1), 10);
  }
  function _e(d) {
    if (d = d.replace(/[.\-/]/g, ""), d.length === 11) {
      var c, g;
      if (c = 0, // Reject known invalid CPFs
      d === "11111111111" || d === "22222222222" || d === "33333333333" || d === "44444444444" || d === "55555555555" || d === "66666666666" || d === "77777777777" || d === "88888888888" || d === "99999999999" || d === "00000000000")
        return !1;
      for (var I = 1; I <= 9; I++)
        c += parseInt(d.substring(I - 1, I), 10) * (11 - I);
      if (g = c * 10 % 11, g === 10 && (g = 0), g !== parseInt(d.substring(9, 10), 10))
        return !1;
      c = 0;
      for (var y = 1; y <= 10; y++)
        c += parseInt(d.substring(y - 1, y), 10) * (12 - y);
      return g = c * 10 % 11, g === 10 && (g = 0), g === parseInt(d.substring(10, 11), 10);
    }
    return Ce(d);
  }
  function xe(d) {
    var c = 11 - i.reverseMultiplyAndSum(d.split("").slice(0, 8).map(function(g) {
      return parseInt(g, 10);
    }), 9) % 11;
    return c > 9 ? parseInt(d[8], 10) === 0 : c === parseInt(d[8], 10);
  }
  function Le(d) {
    if (d.slice(0, 4) !== "9000") {
      var c = d.slice(1, 3);
      switch (d[0]) {
        case "1":
        case "2":
          c = "19".concat(c);
          break;
        case "3":
        case "4":
          c = "18".concat(c);
          break;
        case "5":
        case "6":
          c = "20".concat(c);
          break;
      }
      var g = "".concat(c, "/").concat(d.slice(3, 5), "/").concat(d.slice(5, 7));
      if (g.length === 8) {
        if (!(0, a.default)(g, "YY/MM/DD"))
          return !1;
      } else if (!(0, a.default)(g, "YYYY/MM/DD"))
        return !1;
      for (var I = d.split("").map(function(B) {
        return parseInt(B, 10);
      }), y = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], D = 0, O = 0; O < y.length; O++)
        D += I[O] * y[O];
      return D % 11 === 10 ? I[12] === 1 : I[12] === D % 11;
    }
    return !0;
  }
  function ne(d) {
    if (d.length === 9) {
      if (d = d.replace(/\W/, ""), d.slice(6) === "000")
        return !1;
      var c = parseInt(d.slice(0, 2), 10);
      if (c > 53)
        return !1;
      c < 10 ? c = "190".concat(c) : c = "19".concat(c);
      var g = parseInt(d.slice(2, 4), 10);
      g > 50 && (g -= 50), g < 10 && (g = "0".concat(g));
      var I = "".concat(c, "/").concat(g, "/").concat(d.slice(4, 6));
      if (!(0, a.default)(I, "YYYY/MM/DD"))
        return !1;
    }
    return !0;
  }
  function Ve(d) {
    var c = 11 - i.reverseMultiplyAndSum(d.split("").slice(0, 7).map(function(g) {
      return parseInt(g, 10);
    }), 8) % 11;
    return c === 10 ? parseInt(d[7], 10) === 0 : c === parseInt(d[7], 10);
  }
  function Pe(d) {
    var c = d.slice(0);
    d.length > 11 && (c = c.slice(2));
    var g = "", I = c.slice(2, 4), y = parseInt(c.slice(4, 6), 10);
    if (d.length > 11)
      g = d.slice(0, 4);
    else if (g = d.slice(0, 2), d.length === 11 && y < 60) {
      var D = (/* @__PURE__ */ new Date()).getFullYear().toString(), O = parseInt(D.slice(0, 2), 10);
      if (D = parseInt(D, 10), d[6] === "-")
        parseInt("".concat(O).concat(g), 10) > D ? g = "".concat(O - 1).concat(g) : g = "".concat(O).concat(g);
      else if (g = "".concat(O - 1).concat(g), D - parseInt(g, 10) < 100)
        return !1;
    }
    y > 60 && (y -= 60), y < 10 && (y = "0".concat(y));
    var B = "".concat(g, "/").concat(I, "/").concat(y);
    if (B.length === 8) {
      if (!(0, a.default)(B, "YY/MM/DD"))
        return !1;
    } else if (!(0, a.default)(B, "YYYY/MM/DD"))
      return !1;
    return i.luhnCheck(d.replace(/\W/, ""));
  }
  function nt(d) {
    for (var c = d.split("").map(function(D) {
      return parseInt(D, 10);
    }), g = [-1, 5, 7, 9, 4, 6, 10, 5, 7], I = 0, y = 0; y < g.length; y++)
      I += c[y] * g[y];
    return I % 11 === 10 ? c[9] === 0 : c[9] === I % 11;
  }
  var ee = {
    "bg-BG": /^\d{10}$/,
    "cs-CZ": /^\d{6}\/{0,1}\d{3,4}$/,
    "de-AT": /^\d{9}$/,
    "de-DE": /^[1-9]\d{10}$/,
    "dk-DK": /^\d{6}-{0,1}\d{4}$/,
    "el-CY": /^[09]\d{7}[A-Z]$/,
    "el-GR": /^([0-4]|[7-9])\d{8}$/,
    "en-CA": /^\d{9}$/,
    "en-GB": /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
    "en-IE": /^\d{7}[A-W][A-IW]{0,1}$/i,
    "en-US": /^\d{2}[- ]{0,1}\d{7}$/,
    "es-AR": /(20|23|24|27|30|33|34)[0-9]{8}[0-9]/,
    "es-ES": /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
    "et-EE": /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
    "fi-FI": /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
    "fr-BE": /^\d{11}$/,
    "fr-FR": /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
    // Conforms both to official spec and provided example
    "fr-LU": /^\d{13}$/,
    "hr-HR": /^\d{11}$/,
    "hu-HU": /^8\d{9}$/,
    "it-IT": /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
    "lv-LV": /^\d{6}-{0,1}\d{5}$/,
    // Conforms both to DG TAXUD spec and original research
    "mt-MT": /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
    "nl-NL": /^\d{9}$/,
    "pl-PL": /^\d{10,11}$/,
    "pt-BR": /(?:^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(?:^\d{11}$)|(?:^[A-Z0-9]{12}\d{2}$)/i,
    "pt-PT": /^\d{9}$/,
    "ro-RO": /^\d{13}$/,
    "sk-SK": /^\d{6}\/{0,1}\d{3,4}$/,
    "sl-SI": /^[1-9]\d{7}$/,
    "sv-SE": /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/,
    "uk-UA": /^\d{10}$/
  };
  ee["lb-LU"] = ee["fr-LU"], ee["lt-LT"] = ee["et-EE"], ee["nl-BE"] = ee["fr-BE"], ee["fr-CA"] = ee["en-CA"];
  var te = {
    "bg-BG": $,
    "cs-CZ": A,
    "de-AT": h,
    "de-DE": S,
    "dk-DK": M,
    "el-CY": b,
    "el-GR": C,
    "en-CA": p,
    "en-IE": x,
    "en-US": Z,
    "es-AR": N,
    "es-ES": w,
    "et-EE": K,
    "fi-FI": z,
    "fr-BE": Q,
    "fr-FR": W,
    "fr-LU": X,
    "hr-HR": ae,
    "hu-HU": ce,
    "it-IT": ve,
    "lv-LV": fe,
    "mt-MT": Re,
    "nl-NL": Ee,
    "pl-PL": De,
    "pt-BR": _e,
    "pt-PT": xe,
    "ro-RO": Le,
    "sk-SK": ne,
    "sl-SI": Ve,
    "sv-SE": Pe,
    "uk-UA": nt
  };
  te["lb-LU"] = te["fr-LU"], te["lt-LT"] = te["et-EE"], te["nl-BE"] = te["fr-BE"], te["fr-CA"] = te["en-CA"];
  var Ye = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g, Ae = {
    "de-AT": Ye,
    "de-DE": /[\/\\]/g,
    "fr-BE": Ye
  };
  Ae["nl-BE"] = Ae["fr-BE"];
  function ut(d) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
    (0, s.default)(d);
    var g = d.slice(0);
    if (c in ee)
      return c in Ae && (g = g.replace(Ae[c], "")), ee[c].test(g) ? c in te ? te[c](g) : !0 : !1;
    throw new Error("Invalid locale '".concat(c, "'"));
  }
  t.exports = e.default, t.exports.default = e.default;
})(Lr, Lr.exports);
var ti = Lr.exports, ke = {};
Object.defineProperty(ke, "__esModule", {
  value: !0
});
ke.default = ni;
ke.locales = void 0;
var ri = ai(E);
function ai(t) {
  return t && t.__esModule ? t : { default: t };
}
var U = {
  "am-AM": /^(\+?374|0)(33|4[134]|55|77|88|9[13-689])\d{6}$/,
  "ar-AE": /^((\+?971)|0)?5[024568]\d{7}$/,
  "ar-BH": /^(\+?973)?(3|6)\d{7}$/,
  "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
  "ar-LB": /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
  "ar-EG": /^((\+?20)|0)?1[0125]\d{8}$/,
  "ar-IQ": /^(\+?964|0)?7[0-9]\d{8}$/,
  "ar-JO": /^(\+?962|0)?7[789]\d{7}$/,
  "ar-KW": /^(\+?965)([569]\d{7}|41\d{6})$/,
  "ar-LY": /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
  "ar-MA": /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
  "ar-OM": /^((\+|00)968)?([79][1-9])\d{6}$/,
  "ar-PS": /^(\+?970|0)5[6|9](\d{7})$/,
  "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
  "ar-SD": /^((\+?249)|0)?(9[012369]|1[012])\d{7}$/,
  "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
  "ar-TN": /^(\+?216)?[2459]\d{7}$/,
  "az-AZ": /^(\+994|0)(10|5[015]|7[07]|99)\d{7}$/,
  "ar-QA": /^(\+?974|0)?([3567]\d{7})$/,
  "bs-BA": /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
  "be-BY": /^(\+?375)?(24|25|29|33|44)\d{7}$/,
  "bg-BG": /^(\+?359|0)?8[789]\d{7}$/,
  "bn-BD": /^(\+?880|0)1[13456789][0-9]{8}$/,
  "ca-AD": /^(\+376)?[346]\d{5}$/,
  "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  "da-DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
  "de-DE": /^((\+49|0)1)(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,
  "de-AT": /^(\+43|0)\d{1,4}\d{3,12}$/,
  "de-CH": /^(\+41|0)([1-9])\d{1,9}$/,
  "de-LU": /^(\+352)?((6\d1)\d{6})$/,
  "dv-MV": /^(\+?960)?(7[2-9]|9[1-9])\d{5}$/,
  "el-GR": /^(\+?30|0)?6(8[5-9]|9(?![26])[0-9])\d{7}$/,
  "el-CY": /^(\+?357?)?(9(9|7|6|5|4)\d{6})$/,
  "en-AI": /^(\+?1|0)264(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/,
  "en-AU": /^(\+?61|0)4\d{8}$/,
  "en-AG": /^(?:\+1|1)268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
  "en-BM": /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}$))/,
  "en-BS": /^(\+?1[-\s]?|0)?\(?242\)?[-\s]?\d{3}[-\s]?\d{4}$/,
  "en-GB": /^(\+?44|0)7[1-9]\d{8}$/,
  "en-GG": /^(\+?44|0)1481\d{6}$/,
  "en-GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|53|28|55|59)\d{7}$/,
  "en-GY": /^(\+592|0)6\d{6}$/,
  "en-HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
  "en-MO": /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
  "en-IE": /^(\+?353|0)8[356789]\d{7}$/,
  "en-IN": /^(\+?91|0)?[6789]\d{9}$/,
  "en-JM": /^(\+?876)?\d{7}$/,
  "en-KE": /^(\+?254|0)(7|1)\d{8}$/,
  "fr-CF": /^(\+?236| ?)(70|75|77|72|21|22)\d{6}$/,
  "en-SS": /^(\+?211|0)(9[1257])\d{7}$/,
  "en-KI": /^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,
  "en-KN": /^(?:\+1|1)869(?:46\d|48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,
  "en-LS": /^(\+?266)(22|28|57|58|59|27|52)\d{6}$/,
  "en-MT": /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
  "en-MU": /^(\+?230|0)?\d{8}$/,
  "en-MW": /^(\+?265|0)(((77|88|31|99|98|21)\d{7})|(((111)|1)\d{6})|(32000\d{4}))$/,
  "en-NA": /^(\+?264|0)(6|8)\d{7}$/,
  "en-NG": /^(\+?234|0)?[789]\d{9}$/,
  "en-NZ": /^(\+?64|0)[28]\d{7,9}$/,
  "en-PG": /^(\+?675|0)?(7\d|8[18])\d{6}$/,
  "en-PK": /^((00|\+)?92|0)3[0-6]\d{8}$/,
  "en-PH": /^(09|\+639)\d{9}$/,
  "en-RW": /^(\+?250|0)?[7]\d{8}$/,
  "en-SG": /^(\+65)?[3689]\d{7}$/,
  "en-SL": /^(\+?232|0)\d{8}$/,
  "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
  "en-UG": /^(\+?256|0)?[7]\d{8}$/,
  "en-US": /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
  "en-ZA": /^(\+?27|0)\d{9}$/,
  "en-ZM": /^(\+?26)?0[79][567]\d{7}$/,
  "en-ZW": /^(\+263)[0-9]{9}$/,
  "en-BW": /^(\+?267)?(7[1-8]{1})\d{6}$/,
  "es-AR": /^\+?549(11|[2368]\d)\d{8}$/,
  "es-BO": /^(\+?591)?(6|7)\d{7}$/,
  "es-CO": /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
  "es-CL": /^(\+?56|0)[2-9]\d{1}\d{7}$/,
  "es-CR": /^(\+506)?[2-8]\d{7}$/,
  "es-CU": /^(\+53|0053)?5\d{7}$/,
  "es-DO": /^(\+?1)?8[024]9\d{7}$/,
  "es-HN": /^(\+?504)?[9|8|3|2]\d{7}$/,
  "es-EC": /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
  "es-ES": /^(\+?34)?[6|7]\d{8}$/,
  "es-GT": /^(\+?502)?[2|6|7]\d{7}$/,
  "es-PE": /^(\+?51)?9\d{8}$/,
  "es-MX": /^(\+?52)?(1|01)?\d{10,11}$/,
  "es-NI": /^(\+?505)\d{7,8}$/,
  "es-PA": /^(\+?507)\d{7,8}$/,
  "es-PY": /^(\+?595|0)9[9876]\d{7}$/,
  "es-SV": /^(\+?503)?[67]\d{7}$/,
  "es-UY": /^(\+598|0)9[1-9][\d]{6}$/,
  "es-VE": /^(\+?58)?(2|4)\d{9}$/,
  "et-EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
  "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  "fi-FI": /^(\+?358|0)\s?(4[0-6]|50)\s?(\d\s?){4,8}$/,
  "fj-FJ": /^(\+?679)?\s?\d{3}\s?\d{4}$/,
  "fo-FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  "fr-BF": /^(\+226|0)[67]\d{7}$/,
  "fr-BJ": /^(\+229)\d{8}$/,
  "fr-CD": /^(\+?243|0)?(8|9)\d{8}$/,
  "fr-CM": /^(\+?237)6[0-9]{8}$/,
  "fr-DJ": /^(?:\+253)?77[6-8]\d{5}$/,
  "fr-FR": /^(\+?33|0)[67]\d{8}$/,
  "fr-GF": /^(\+?594|0|00594)[67]\d{8}$/,
  "fr-GP": /^(\+?590|0|00590)[67]\d{8}$/,
  "fr-MQ": /^(\+?596|0|00596)[67]\d{8}$/,
  "fr-PF": /^(\+?689)?8[789]\d{6}$/,
  "fr-RE": /^(\+?262|0|00262)[67]\d{8}$/,
  "fr-WF": /^(\+681)?\d{6}$/,
  "he-IL": /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
  "hu-HU": /^(\+?36|06)(20|30|31|50|70)\d{7}$/,
  "id-ID": /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
  "ir-IR": /^(\+98|0)?9\d{9}$/,
  "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  "it-SM": /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
  "ja-JP": /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
  "ka-GE": /^(\+?995)?(79\d{7}|5\d{8})$/,
  "kk-KZ": /^(\+?7|8)?7\d{9}$/,
  "kl-GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  "ky-KG": /^(\+996\s?)?(22[0-9]|50[0-9]|55[0-9]|70[0-9]|75[0-9]|77[0-9]|880|990|995|996|997|998)\s?\d{3}\s?\d{3}$/,
  "lt-LT": /^(\+370|8)\d{8}$/,
  "lv-LV": /^(\+?371)2\d{7}$/,
  "mg-MG": /^((\+?261|0)(2|3)\d)?\d{7}$/,
  "mn-MN": /^(\+|00|011)?976(77|81|88|91|94|95|96|99)\d{6}$/,
  "my-MM": /^(\+?959|09|9)(2[5-7]|3[1-2]|4[0-5]|6[6-9]|7[5-9]|9[6-9])[0-9]{7}$/,
  "ms-MY": /^(\+?60|0)1(([0145](-|\s)?\d{7,8})|([236-9](-|\s)?\d{7}))$/,
  "mz-MZ": /^(\+?258)?8[234567]\d{7}$/,
  "nb-NO": /^(\+?47)?[49]\d{7}$/,
  "ne-NP": /^(\+?977)?9[78]\d{8}$/,
  "nl-BE": /^(\+?32|0)4\d{8}$/,
  "nl-NL": /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
  "nl-AW": /^(\+)?297(56|59|64|73|74|99)\d{5}$/,
  "nn-NO": /^(\+?47)?[49]\d{7}$/,
  "pl-PL": /^(\+?48)? ?([5-8]\d|45) ?\d{3} ?\d{2} ?\d{2}$/,
  "pt-BR": /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[1-9]{1}\d{3}\-?\d{4}))$/,
  "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
  "pt-AO": /^(\+?244)?9\d{8}$/,
  "ro-MD": /^(\+?373|0)((6(0|1|2|6|7|8|9))|(7(6|7|8|9)))\d{6}$/,
  "ro-RO": /^(\+?40|0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,
  "ru-RU": /^(\+?7|8)?9\d{9}$/,
  "si-LK": /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
  "sl-SI": /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
  "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  "so-SO": /^(\+?252|0)((6[0-9])\d{7}|(7[1-9])\d{7})$/,
  "sq-AL": /^(\+355|0)6[2-9]\d{7}$/,
  "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
  "sv-SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
  "tg-TJ": /^(\+?992)?[5][5]\d{7}$/,
  "th-TH": /^(\+66|66|0)\d{9}$/,
  "tr-TR": /^(\+?90|0)?5\d{9}$/,
  "tk-TM": /^(\+993|993|8)\d{8}$/,
  "uk-UA": /^(\+?38)?0(50|6[36-8]|7[357]|9[1-9])\d{7}$/,
  "uz-UZ": /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
  "vi-VN": /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
  "zh-CN": /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
  "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
  "dz-BT": /^(\+?975|0)?(17|16|77|02)\d{6}$/,
  "ar-YE": /^(((\+|00)9677|0?7)[0137]\d{7}|((\+|00)967|0)[1-7]\d{6})$/,
  "ar-EH": /^(\+?212|0)[\s\-]?(5288|5289)[\s\-]?\d{5}$/,
  "fa-AF": /^(\+93|0)?(2{1}[0-8]{1}|[3-5]{1}[0-4]{1})(\d{7})$/,
  "mk-MK": /^(\+?389|0)?((?:2[2-9]\d{6}|(?:3[1-4]|4[2-8])\d{6}|500\d{5}|5[2-9]\d{6}|7[0-9][2-9]\d{5}|8[1-9]\d{6}|800\d{5}|8009\d{4}))$/
};
U["en-CA"] = U["en-US"];
U["fr-CA"] = U["en-CA"];
U["fr-BE"] = U["nl-BE"];
U["zh-HK"] = U["en-HK"];
U["zh-MO"] = U["en-MO"];
U["ga-IE"] = U["en-IE"];
U["fr-CH"] = U["de-CH"];
U["it-CH"] = U["fr-CH"];
function ni(t, e, f) {
  if ((0, ri.default)(t), f && f.strictMode && !t.startsWith("+"))
    return !1;
  if (Array.isArray(e))
    return e.some(function(a) {
      if (U.hasOwnProperty(a)) {
        var r = U[a];
        if (r.test(t))
          return !0;
      }
      return !1;
    });
  if (e in U)
    return U[e].test(t);
  if (!e || e === "any") {
    for (var s in U)
      if (U.hasOwnProperty(s)) {
        var i = U[s];
        if (i.test(t))
          return !0;
      }
    return !1;
  }
  throw new Error("Invalid locale '".concat(e, "'"));
}
ke.locales = Object.keys(U);
var Pr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^(0x)[0-9a-f]{40}$/i;
  function a(r) {
    return (0, f.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Pr, Pr.exports);
var ui = Pr.exports, Or = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var f = i(G), s = i(E);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u) {
    var l = "\\d{".concat(u.digits_after_decimal[0], "}");
    u.digits_after_decimal.forEach(function(S, M) {
      M !== 0 && (l = "".concat(l, "|\\d{").concat(S, "}"));
    });
    var v = "(".concat(u.symbol.replace(/\W/, function(S) {
      return "\\".concat(S);
    }), ")").concat(u.require_symbol ? "" : "?"), o = "-?", _ = "[1-9]\\d*", m = "[1-9]\\d{0,2}(\\".concat(u.thousands_separator, "\\d{3})*"), $ = ["0", _, m], p = "(".concat($.join("|"), ")?"), A = "(\\".concat(u.decimal_separator, "(").concat(l, "))").concat(u.require_decimal ? "" : "?"), h = p + (u.allow_decimal || u.require_decimal ? A : "");
    return u.allow_negatives && !u.parens_for_negatives && (u.negative_sign_after_digits ? h += o : u.negative_sign_before_digits && (h = o + h)), u.allow_negative_sign_placeholder ? h = "( (?!\\-))?".concat(h) : u.allow_space_after_symbol ? h = " ?".concat(h) : u.allow_space_after_digits && (h += "( (?!$))?"), u.symbol_after_digits ? h += v : h = v + h, u.allow_negatives && (u.parens_for_negatives ? h = "(\\(".concat(h, "\\)|").concat(h, ")") : u.negative_sign_before_digits || u.negative_sign_after_digits || (h = o + h)), new RegExp("^(?!-? )(?=.*\\d)".concat(h, "$"));
  }
  var r = {
    symbol: "$",
    require_symbol: !1,
    allow_space_after_symbol: !1,
    symbol_after_digits: !1,
    allow_negatives: !0,
    parens_for_negatives: !1,
    negative_sign_before_digits: !1,
    negative_sign_after_digits: !1,
    allow_negative_sign_placeholder: !1,
    thousands_separator: ",",
    decimal_separator: ".",
    allow_decimal: !0,
    require_decimal: !1,
    digits_after_decimal: [2],
    allow_space_after_digits: !1
  };
  function n(u, l) {
    return (0, s.default)(u), l = (0, f.default)(l, r), a(l).test(u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Or, Or.exports);
var ii = Or.exports, Nr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var f = s(E);
  function s(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var i = /^(bc1|tb1|bc1p|tb1p)[ac-hj-np-z02-9]{39,58}$/, a = /^(1|2|3|m)[A-HJ-NP-Za-km-z1-9]{25,39}$/;
  function r(n) {
    return (0, f.default)(n), i.test(n) || a.test(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Nr, Nr.exports);
var li = Nr.exports, Ge = {};
Object.defineProperty(Ge, "__esModule", {
  value: !0
});
Ge.isFreightContainerID = void 0;
Ge.isISO6346 = Ta;
var si = fi(E);
function fi(t) {
  return t && t.__esModule ? t : { default: t };
}
var oi = /^[A-Z]{3}(U[0-9]{7})|([J,Z][0-9]{6,7})$/, di = /^[0-9]$/;
function Ta(t) {
  if ((0, si.default)(t), t = t.toUpperCase(), !oi.test(t))
    return !1;
  if (t.length === 11) {
    for (var e = 0, f = 0; f < t.length - 1; f++)
      if (di.test(t[f]))
        e += t[f] * Math.pow(2, f);
      else {
        var s = void 0, i = t.charCodeAt(f) - 55;
        i < 11 ? s = i : i >= 11 && i <= 20 ? s = 12 + i % 11 : i >= 21 && i <= 30 ? s = 23 + i % 21 : s = 34 + i % 31, e += s * Math.pow(2, f);
      }
    var a = e % 11;
    return a === 10 && (a = 0), Number(t[t.length - 1]) === a;
  }
  return !0;
}
Ge.isFreightContainerID = Ta;
var Br = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /* @__PURE__ */ new Set(["aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "az", "ba", "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "io", "is", "it", "iu", "ja", "jv", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo", "za", "zh", "zu"]);
  function a(r) {
    return (0, f.default)(r), i.has(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Br, Br.exports);
var ci = Br.exports, Zr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var f = s(E);
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var i = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/, a = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/, r = function(l) {
    var v = l.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
    if (v) {
      var o = Number(v[1]), _ = Number(v[2]);
      return o % 4 === 0 && o % 100 !== 0 || o % 400 === 0 ? _ <= 366 : _ <= 365;
    }
    var m = l.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number), $ = m[1], p = m[2], A = m[3], h = p && "0".concat(p).slice(-2), S = A && "0".concat(A).slice(-2), M = new Date("".concat($, "-").concat(h || "01", "-").concat(S || "01"));
    return p && A ? M.getUTCFullYear() === $ && M.getUTCMonth() + 1 === p && M.getUTCDate() === A : !0;
  };
  function n(u) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, f.default)(u);
    var v = l.strictSeparator ? a.test(u) : i.test(u);
    return v && l.strict ? r(u) : v;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Zr, Zr.exports);
var vi = Zr.exports, Fr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = h;
  var f = s(E);
  function s(S) {
    return S && S.__esModule ? S : { default: S };
  }
  var i = /[0-9]{4}/, a = /(0[1-9]|1[0-2])/, r = /([12]\d|0[1-9]|3[01])/, n = /([01][0-9]|2[0-3])/, u = /[0-5][0-9]/, l = /([0-5][0-9]|60)/, v = /(\.[0-9]+)?/, o = new RegExp("[-+]".concat(n.source, ":").concat(u.source)), _ = new RegExp("([zZ]|".concat(o.source, ")")), m = new RegExp("".concat(n.source, ":").concat(u.source, ":").concat(l.source).concat(v.source)), $ = new RegExp("".concat(i.source, "-").concat(a.source, "-").concat(r.source)), p = new RegExp("".concat(m.source).concat(_.source)), A = new RegExp("^".concat($.source, "[ tT]").concat(p.source, "$"));
  function h(S) {
    return (0, f.default)(S), A.test(S);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Fr, Fr.exports);
var pi = Fr.exports, Ke = {};
Object.defineProperty(Ke, "__esModule", {
  value: !0
});
Ke.ScriptCodes = void 0;
Ke.default = gi;
var _i = Ai(E);
function Ai(t) {
  return t && t.__esModule ? t : { default: t };
}
var Ua = /* @__PURE__ */ new Set(["Adlm", "Afak", "Aghb", "Ahom", "Arab", "Aran", "Armi", "Armn", "Avst", "Bali", "Bamu", "Bass", "Batk", "Beng", "Bhks", "Blis", "Bopo", "Brah", "Brai", "Bugi", "Buhd", "Cakm", "Cans", "Cari", "Cham", "Cher", "Chis", "Chrs", "Cirt", "Copt", "Cpmn", "Cprt", "Cyrl", "Cyrs", "Deva", "Diak", "Dogr", "Dsrt", "Dupl", "Egyd", "Egyh", "Egyp", "Elba", "Elym", "Ethi", "Gara", "Geok", "Geor", "Glag", "Gong", "Gonm", "Goth", "Gran", "Grek", "Gujr", "Gukh", "Guru", "Hanb", "Hang", "Hani", "Hano", "Hans", "Hant", "Hatr", "Hebr", "Hira", "Hluw", "Hmng", "Hmnp", "Hrkt", "Hung", "Inds", "Ital", "Jamo", "Java", "Jpan", "Jurc", "Kali", "Kana", "Kawi", "Khar", "Khmr", "Khoj", "Kitl", "Kits", "Knda", "Kore", "Kpel", "Krai", "Kthi", "Lana", "Laoo", "Latf", "Latg", "Latn", "Leke", "Lepc", "Limb", "Lina", "Linb", "Lisu", "Loma", "Lyci", "Lydi", "Mahj", "Maka", "Mand", "Mani", "Marc", "Maya", "Medf", "Mend", "Merc", "Mero", "Mlym", "Modi", "Mong", "Moon", "Mroo", "Mtei", "Mult", "Mymr", "Nagm", "Nand", "Narb", "Nbat", "Newa", "Nkdb", "Nkgb", "Nkoo", "Nshu", "Ogam", "Olck", "Onao", "Orkh", "Orya", "Osge", "Osma", "Ougr", "Palm", "Pauc", "Pcun", "Pelm", "Perm", "Phag", "Phli", "Phlp", "Phlv", "Phnx", "Plrd", "Piqd", "Prti", "Psin", "Qaaa", "Qaab", "Qaac", "Qaad", "Qaae", "Qaaf", "Qaag", "Qaah", "Qaai", "Qaaj", "Qaak", "Qaal", "Qaam", "Qaan", "Qaao", "Qaap", "Qaaq", "Qaar", "Qaas", "Qaat", "Qaau", "Qaav", "Qaaw", "Qaax", "Qaay", "Qaaz", "Qaba", "Qabb", "Qabc", "Qabd", "Qabe", "Qabf", "Qabg", "Qabh", "Qabi", "Qabj", "Qabk", "Qabl", "Qabm", "Qabn", "Qabo", "Qabp", "Qabq", "Qabr", "Qabs", "Qabt", "Qabu", "Qabv", "Qabw", "Qabx", "Ranj", "Rjng", "Rohg", "Roro", "Runr", "Samr", "Sara", "Sarb", "Saur", "Sgnw", "Shaw", "Shrd", "Shui", "Sidd", "Sidt", "Sind", "Sinh", "Sogd", "Sogo", "Sora", "Soyo", "Sund", "Sunu", "Sylo", "Syrc", "Syre", "Syrj", "Syrn", "Tagb", "Takr", "Tale", "Talu", "Taml", "Tang", "Tavt", "Tayo", "Telu", "Teng", "Tfng", "Tglg", "Thaa", "Thai", "Tibt", "Tirh", "Tnsa", "Todr", "Tols", "Toto", "Tutg", "Ugar", "Vaii", "Visp", "Vith", "Wara", "Wcho", "Wole", "Xpeo", "Xsux", "Yezi", "Yiii", "Zanb", "Zinh", "Zmth", "Zsye", "Zsym", "Zxxx", "Zyyy", "Zzzz"]);
function gi(t) {
  return (0, _i.default)(t), Ua.has(t);
}
Ke.ScriptCodes = Ua;
var Tr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var f = s(E);
  function s(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var i = /* @__PURE__ */ new Set(["AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "BRN", "BGR", "BFA", "BDI", "KHM", "CMR", "CAN", "CPV", "CYM", "CAF", "TCD", "CHL", "CHN", "CXR", "CCK", "COL", "COM", "COG", "COD", "COK", "CRI", "CIV", "HRV", "CUB", "CUW", "CYP", "CZE", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "PRK", "KOR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MKD", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "REU", "ROU", "RUS", "RWA", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWZ", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "USA", "UMI", "URY", "UZB", "VUT", "VEN", "VNM", "VGB", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE"]), a = /^[a-zA-Z]{3}$/;
  function r(n) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, f.default)(n);
    var l = u.userAssignedCodes, v = (l || []).reduce(function(o, _) {
      return a.test(_) && o.push(_.toUpperCase()), o;
    }, []);
    return v.includes(n.toUpperCase()) ? !0 : i.has(n.toUpperCase());
  }
  t.exports = e.default, t.exports.default = e.default;
})(Tr, Tr.exports);
var hi = Tr.exports, Ur = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /* @__PURE__ */ new Set(["004", "008", "010", "012", "016", "020", "024", "028", "031", "032", "036", "040", "044", "048", "050", "051", "052", "056", "060", "064", "068", "070", "072", "074", "076", "084", "086", "090", "092", "096", "100", "104", "108", "112", "116", "120", "124", "132", "136", "140", "144", "148", "152", "156", "158", "162", "166", "170", "174", "175", "178", "180", "184", "188", "191", "192", "196", "203", "204", "208", "212", "214", "218", "222", "226", "231", "232", "233", "234", "238", "239", "242", "246", "248", "250", "254", "258", "260", "262", "266", "268", "270", "275", "276", "288", "292", "296", "300", "304", "308", "312", "316", "320", "324", "328", "332", "334", "336", "340", "344", "348", "352", "356", "360", "364", "368", "372", "376", "380", "384", "388", "392", "398", "400", "404", "408", "410", "414", "417", "418", "422", "426", "428", "430", "434", "438", "440", "442", "446", "450", "454", "458", "462", "466", "470", "474", "478", "480", "484", "492", "496", "498", "499", "500", "504", "508", "512", "516", "520", "524", "528", "531", "533", "534", "535", "540", "548", "554", "558", "562", "566", "570", "574", "578", "580", "581", "583", "584", "585", "586", "591", "598", "600", "604", "608", "612", "616", "620", "624", "626", "630", "634", "638", "642", "643", "646", "652", "654", "659", "660", "662", "663", "666", "670", "674", "678", "682", "686", "688", "690", "694", "702", "703", "704", "705", "706", "710", "716", "724", "728", "729", "732", "740", "744", "748", "752", "756", "760", "762", "764", "768", "772", "776", "780", "784", "788", "792", "795", "796", "798", "800", "804", "807", "818", "826", "831", "832", "833", "834", "840", "850", "854", "858", "860", "862", "876", "882", "887", "894"]);
  function a(r) {
    return (0, f.default)(r), i.has(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ur, Ur.exports);
var Si = Ur.exports, We = {};
Object.defineProperty(We, "__esModule", {
  value: !0
});
We.CurrencyCodes = void 0;
We.default = yi;
var mi = $i(E);
function $i(t) {
  return t && t.__esModule ? t : { default: t };
}
var Ha = /* @__PURE__ */ new Set(["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UYW", "UZS", "VED", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XSU", "XTS", "XUA", "XXX", "YER", "ZAR", "ZMW", "ZWL"]);
function yi(t) {
  return (0, mi.default)(t), Ha.has(t.toUpperCase());
}
We.CurrencyCodes = Ha;
var Hr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var f = i(E), s = i(G);
  function i(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var a = /^[A-Z2-7]+=*$/, r = /^[A-HJKMNP-TV-Z0-9]+$/, n = {
    crockford: !1
  };
  function u(l, v) {
    return (0, f.default)(l), v = (0, s.default)(v, n), v.crockford ? r.test(l) : l.length % 8 === 0 && a.test(l);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Hr, Hr.exports);
var Mi = Hr.exports, wr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[A-HJ-NP-Za-km-z1-9]*$/;
  function a(r) {
    return (0, f.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(wr, wr.exports);
var bi = wr.exports, kr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var f = s(E);
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var i = /^[a-z]+\/[a-z0-9\-\+\._]+$/i, a = /^[a-z\-]+=[a-z0-9\-]+$/i, r = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;
  function n(u) {
    (0, f.default)(u);
    var l = u.split(",");
    if (l.length < 2)
      return !1;
    var v = l.shift().trim().split(";"), o = v.shift();
    if (o.slice(0, 5) !== "data:")
      return !1;
    var _ = o.slice(5);
    if (_ !== "" && !i.test(_))
      return !1;
    for (var m = 0; m < v.length; m++)
      if (!(m === v.length - 1 && v[m].toLowerCase() === "base64") && !a.test(v[m]))
        return !1;
    for (var $ = 0; $ < l.length; $++)
      if (!r.test(l[$]))
        return !1;
    return !0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(kr, kr.exports);
var Ii = kr.exports, Gr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;
  function a(r) {
    return (0, f.default)(r), r.indexOf("magnet:?") !== 0 ? !1 : i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Gr, Gr.exports);
var Ri = Gr.exports, Kr = { exports: {} }, Wr = { exports: {} }, jr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(E);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    if ((0, f.default)(a), r) {
      var n = new RegExp("[".concat(r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+$"), "g");
      return a.replace(n, "");
    }
    for (var u = a.length - 1; /\s/.test(a.charAt(u)); )
      u -= 1;
    return a.slice(0, u + 1);
  }
  t.exports = e.default, t.exports.default = e.default;
})(jr, jr.exports);
var wa = jr.exports, qr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(E);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    (0, f.default)(a);
    var n = r ? new RegExp("^[".concat(r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+"), "g") : /^\s+/g;
    return a.replace(n, "");
  }
  t.exports = e.default, t.exports.default = e.default;
})(qr, qr.exports);
var ka = qr.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = i(wa), s = i(ka);
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r, n) {
    return (0, f.default)((0, s.default)(r, n), n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Wr, Wr.exports);
var Ga = Wr.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = $;
  var f = a(Ga), s = a(xa), i = a(E);
  function a(p) {
    return p && p.__esModule ? p : { default: p };
  }
  function r(p, A) {
    return l(p) || u(p, A) || o(p, A) || n();
  }
  function n() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function u(p, A) {
    var h = p == null ? null : typeof Symbol < "u" && p[Symbol.iterator] || p["@@iterator"];
    if (h != null) {
      var S, M, b, C, x = [], L = !0, P = !1;
      try {
        if (b = (h = h.call(p)).next, A === 0) {
          if (Object(h) !== h)
            return;
          L = !1;
        } else
          for (; !(L = (S = b.call(h)).done) && (x.push(S.value), x.length !== A); L = !0)
            ;
      } catch (Z) {
        P = !0, M = Z;
      } finally {
        try {
          if (!L && h.return != null && (C = h.return(), Object(C) !== C))
            return;
        } finally {
          if (P)
            throw M;
        }
      }
      return x;
    }
  }
  function l(p) {
    if (Array.isArray(p))
      return p;
  }
  function v(p, A) {
    var h = typeof Symbol < "u" && p[Symbol.iterator] || p["@@iterator"];
    if (!h) {
      if (Array.isArray(p) || (h = o(p)) || A && p && typeof p.length == "number") {
        h && (p = h);
        var S = 0, M = function() {
        };
        return { s: M, n: function() {
          return S >= p.length ? { done: !0 } : { done: !1, value: p[S++] };
        }, e: function(P) {
          throw P;
        }, f: M };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var b, C = !0, x = !1;
    return { s: function() {
      h = h.call(p);
    }, n: function() {
      var P = h.next();
      return C = P.done, P;
    }, e: function(P) {
      x = !0, b = P;
    }, f: function() {
      try {
        C || h.return == null || h.return();
      } finally {
        if (x)
          throw b;
      }
    } };
  }
  function o(p, A) {
    if (p) {
      if (typeof p == "string")
        return _(p, A);
      var h = {}.toString.call(p).slice(8, -1);
      return h === "Object" && p.constructor && (h = p.constructor.name), h === "Map" || h === "Set" ? Array.from(p) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? _(p, A) : void 0;
    }
  }
  function _(p, A) {
    (A == null || A > p.length) && (A = p.length);
    for (var h = 0, S = Array(A); h < A; h++)
      S[h] = p[h];
    return S;
  }
  function m(p) {
    var A = /* @__PURE__ */ new Set(["subject", "body", "cc", "bcc"]), h = {
      cc: "",
      bcc: ""
    }, S = !1, M = p.split("&");
    if (M.length > 4)
      return !1;
    var b = v(M), C;
    try {
      for (b.s(); !(C = b.n()).done; ) {
        var x = C.value, L = x.split("="), P = r(L, 2), Z = P[0], N = P[1];
        if (Z && !A.has(Z)) {
          S = !0;
          break;
        }
        N && (Z === "cc" || Z === "bcc") && (h[Z] = N), Z && A.delete(Z);
      }
    } catch (w) {
      b.e(w);
    } finally {
      b.f();
    }
    return S ? !1 : h;
  }
  function $(p, A) {
    if ((0, i.default)(p), p.indexOf("mailto:") !== 0)
      return !1;
    var h = p.replace("mailto:", "").split("?"), S = r(h, 2), M = S[0], b = S[1], C = b === void 0 ? "" : b;
    if (!M && !C)
      return !0;
    var x = m(C);
    return x ? "".concat(M, ",").concat(x.cc, ",").concat(x.bcc).split(",").every(function(L) {
      return L = (0, f.default)(L, " "), L ? (0, s.default)(L, A) : !0;
    }) : !1;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Kr, Kr.exports);
var Ei = Kr.exports, Vr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var f = s(E);
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var i = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+_]{1,100}$/i, a = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i, r = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;
  function n(u) {
    return (0, f.default)(u), i.test(u) || a.test(u) || r.test(u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Vr, Vr.exports);
var Di = Vr.exports, Yr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = o;
  var f = a(E), s = a(G), i = a(La);
  function a(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  var r = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/, n = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/, u = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i, l = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i, v = {
    checkDMS: !1
  };
  function o(_, m) {
    if ((0, f.default)(_), m = (0, s.default)(m, v), !(0, i.default)(_, ","))
      return !1;
    var $ = _.split(",");
    return $[0].startsWith("(") && !$[1].endsWith(")") || $[1].endsWith(")") && !$[0].startsWith("(") ? !1 : m.checkDMS ? u.test($[0]) && l.test($[1]) : r.test($[0]) && n.test($[1]);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Yr, Yr.exports);
var Ci = Yr.exports, je = {};
Object.defineProperty(je, "__esModule", {
  value: !0
});
je.default = Pi;
je.locales = void 0;
var xi = Li(E);
function Li(t) {
  return t && t.__esModule ? t : { default: t };
}
var ma = /^\d{3}$/, J = /^\d{4}$/, k = /^\d{5}$/, vt = /^\d{6}$/, $e = {
  AD: /^AD\d{3}$/,
  AT: J,
  AU: J,
  AZ: /^AZ\d{4}$/,
  BA: /^([7-8]\d{4}$)/,
  BD: /^([1-8][0-9]{3}|9[0-4][0-9]{2})$/,
  BE: J,
  BG: J,
  BR: /^\d{5}-?\d{3}$/,
  BY: /^2[1-4]\d{4}$/,
  CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  CH: J,
  CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
  CO: /^(05|08|11|13|15|17|18|19|20|23|25|27|41|44|47|50|52|54|63|66|68|70|73|76|81|85|86|88|91|94|95|97|99)(\d{4})$/,
  CZ: /^\d{3}\s?\d{2}$/,
  DE: k,
  DK: J,
  DO: k,
  DZ: k,
  EE: k,
  ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
  FI: k,
  FR: /^(?:(?:0[1-9]|[1-8]\d|9[0-5])\d{3}|97[1-46]\d{2})$/,
  GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
  GR: /^\d{3}\s?\d{2}$/,
  HR: /^([1-5]\d{4}$)/,
  HT: /^HT\d{4}$/,
  HU: J,
  ID: k,
  IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
  IL: /^(\d{5}|\d{7})$/,
  IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
  IR: /^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/,
  IS: ma,
  IT: k,
  JP: /^\d{3}\-\d{4}$/,
  KE: k,
  KR: /^(\d{5}|\d{6})$/,
  LI: /^(948[5-9]|949[0-7])$/,
  LT: /^LT\-\d{5}$/,
  LU: J,
  LV: /^LV\-\d{4}$/,
  LK: k,
  MC: /^980\d{2}$/,
  MG: ma,
  MX: k,
  MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
  MY: k,
  NL: /^[1-9]\d{3}\s?(?!sa|sd|ss)[a-z]{2}$/i,
  NO: J,
  NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
  NZ: J,
  // https://www.pakpost.gov.pk/postcodes.php
  PK: k,
  PL: /^\d{2}\-\d{3}$/,
  PR: /^00[679]\d{2}([ -]\d{4})?$/,
  PT: /^\d{4}\-\d{3}?$/,
  RO: vt,
  RU: vt,
  SA: k,
  SE: /^[1-9]\d{2}\s?\d{2}$/,
  SG: vt,
  SI: J,
  SK: /^\d{3}\s?\d{2}$/,
  TH: k,
  TN: J,
  TW: /^\d{3}(\d{2,3})?$/,
  UA: k,
  US: /^\d{5}(-\d{4})?$/,
  ZA: J,
  ZM: k
};
je.locales = Object.keys($e);
function Pi(t, e) {
  if ((0, xi.default)(t), e in $e)
    return $e[e].test(t);
  if (e === "any") {
    for (var f in $e)
      if ($e.hasOwnProperty(f)) {
        var s = $e[f];
        if (s.test(t))
          return !0;
      }
    return !1;
  }
  throw new Error("Invalid locale '".concat(e, "'"));
}
var zr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(E);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, f.default)(a), a.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;");
  }
  t.exports = e.default, t.exports.default = e.default;
})(zr, zr.exports);
var Oi = zr.exports, Qr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(E);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, f.default)(a), a.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#x5C;/g, "\\").replace(/&#96;/g, "`").replace(/&amp;/g, "&");
  }
  t.exports = e.default, t.exports.default = e.default;
})(Qr, Qr.exports);
var Ni = Qr.exports, Jr = { exports: {} }, Xr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(E);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    return (0, f.default)(a), a.replace(new RegExp("[".concat(r, "]+"), "g"), "");
  }
  t.exports = e.default, t.exports.default = e.default;
})(Xr, Xr.exports);
var Ka = Xr.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = i(E), s = i(Ka);
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r, n) {
    (0, f.default)(r);
    var u = n ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
    return (0, s.default)(r, u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Jr, Jr.exports);
var Bi = Jr.exports, ea = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(E);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    return (0, f.default)(a), a.replace(new RegExp("[^".concat(r, "]+"), "g"), "");
  }
  t.exports = e.default, t.exports.default = e.default;
})(ea, ea.exports);
var Zi = ea.exports, ta = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var f = s(E);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    (0, f.default)(a);
    for (var n = a.length - 1; n >= 0; n--)
      if (r.indexOf(a[n]) === -1)
        return !1;
    return !0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(ta, ta.exports);
var Fi = ta.exports, ra = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = v;
  var f = s(G);
  function s(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var i = {
    // The following options apply to all email addresses
    // Lowercases the local part of the email address.
    // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
    // The domain is always lowercased, as per RFC 1035
    all_lowercase: !0,
    // The following conversions are specific to GMail
    // Lowercases the local part of the GMail address (known to be case-insensitive)
    gmail_lowercase: !0,
    // Removes dots from the local part of the email address, as that's ignored by GMail
    gmail_remove_dots: !0,
    // Removes the subaddress (e.g. "+foo") from the email address
    gmail_remove_subaddress: !0,
    // Conversts the googlemail.com domain to gmail.com
    gmail_convert_googlemaildotcom: !0,
    // The following conversions are specific to Outlook.com / Windows Live / Hotmail
    // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
    outlookdotcom_lowercase: !0,
    // Removes the subaddress (e.g. "+foo") from the email address
    outlookdotcom_remove_subaddress: !0,
    // The following conversions are specific to Yahoo
    // Lowercases the local part of the Yahoo address (known to be case-insensitive)
    yahoo_lowercase: !0,
    // Removes the subaddress (e.g. "-foo") from the email address
    yahoo_remove_subaddress: !0,
    // The following conversions are specific to Yandex
    // Lowercases the local part of the Yandex address (known to be case-insensitive)
    yandex_lowercase: !0,
    // all yandex domains are equal, this explicitly sets the domain to 'yandex.ru'
    yandex_convert_yandexru: !0,
    // The following conversions are specific to iCloud
    // Lowercases the local part of the iCloud address (known to be case-insensitive)
    icloud_lowercase: !0,
    // Removes the subaddress (e.g. "+foo") from the email address
    icloud_remove_subaddress: !0
  }, a = ["icloud.com", "me.com"], r = ["hotmail.at", "hotmail.be", "hotmail.ca", "hotmail.cl", "hotmail.co.il", "hotmail.co.nz", "hotmail.co.th", "hotmail.co.uk", "hotmail.com", "hotmail.com.ar", "hotmail.com.au", "hotmail.com.br", "hotmail.com.gr", "hotmail.com.mx", "hotmail.com.pe", "hotmail.com.tr", "hotmail.com.vn", "hotmail.cz", "hotmail.de", "hotmail.dk", "hotmail.es", "hotmail.fr", "hotmail.hu", "hotmail.id", "hotmail.ie", "hotmail.in", "hotmail.it", "hotmail.jp", "hotmail.kr", "hotmail.lv", "hotmail.my", "hotmail.ph", "hotmail.pt", "hotmail.sa", "hotmail.sg", "hotmail.sk", "live.be", "live.co.uk", "live.com", "live.com.ar", "live.com.mx", "live.de", "live.es", "live.eu", "live.fr", "live.it", "live.nl", "msn.com", "outlook.at", "outlook.be", "outlook.cl", "outlook.co.il", "outlook.co.nz", "outlook.co.th", "outlook.com", "outlook.com.ar", "outlook.com.au", "outlook.com.br", "outlook.com.gr", "outlook.com.pe", "outlook.com.tr", "outlook.com.vn", "outlook.cz", "outlook.de", "outlook.dk", "outlook.es", "outlook.fr", "outlook.hu", "outlook.id", "outlook.ie", "outlook.in", "outlook.it", "outlook.jp", "outlook.kr", "outlook.lv", "outlook.my", "outlook.ph", "outlook.pt", "outlook.sa", "outlook.sg", "outlook.sk", "passport.com"], n = ["rocketmail.com", "yahoo.ca", "yahoo.co.uk", "yahoo.com", "yahoo.de", "yahoo.fr", "yahoo.in", "yahoo.it", "ymail.com"], u = ["yandex.ru", "yandex.ua", "yandex.kz", "yandex.com", "yandex.by", "ya.ru"];
  function l(o) {
    return o.length > 1 ? o : "";
  }
  function v(o, _) {
    _ = (0, f.default)(_, i);
    var m = o.split("@"), $ = m.pop(), p = m.join("@"), A = [p, $];
    if (A[1] = A[1].toLowerCase(), A[1] === "gmail.com" || A[1] === "googlemail.com") {
      if (_.gmail_remove_subaddress && (A[0] = A[0].split("+")[0]), _.gmail_remove_dots && (A[0] = A[0].replace(/\.+/g, l)), !A[0].length)
        return !1;
      (_.all_lowercase || _.gmail_lowercase) && (A[0] = A[0].toLowerCase()), A[1] = _.gmail_convert_googlemaildotcom ? "gmail.com" : A[1];
    } else if (a.indexOf(A[1]) >= 0) {
      if (_.icloud_remove_subaddress && (A[0] = A[0].split("+")[0]), !A[0].length)
        return !1;
      (_.all_lowercase || _.icloud_lowercase) && (A[0] = A[0].toLowerCase());
    } else if (r.indexOf(A[1]) >= 0) {
      if (_.outlookdotcom_remove_subaddress && (A[0] = A[0].split("+")[0]), !A[0].length)
        return !1;
      (_.all_lowercase || _.outlookdotcom_lowercase) && (A[0] = A[0].toLowerCase());
    } else if (n.indexOf(A[1]) >= 0) {
      if (_.yahoo_remove_subaddress) {
        var h = A[0].split("-");
        A[0] = h.length > 1 ? h.slice(0, -1).join("-") : h[0];
      }
      if (!A[0].length)
        return !1;
      (_.all_lowercase || _.yahoo_lowercase) && (A[0] = A[0].toLowerCase());
    } else
      u.indexOf(A[1]) >= 0 ? ((_.all_lowercase || _.yandex_lowercase) && (A[0] = A[0].toLowerCase()), A[1] = _.yandex_convert_yandexru ? "yandex.ru" : A[1]) : _.all_lowercase && (A[0] = A[0].toLowerCase());
    return A.join("@");
  }
  t.exports = e.default, t.exports.default = e.default;
})(ra, ra.exports);
var Ti = ra.exports, aa = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[a-z0-9](?!.*[-_]{2,})(?:[a-z0-9_-]*[a-z0-9])?$/;
  function a(r) {
    return (0, f.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(aa, aa.exports);
var Ui = aa.exports, na = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var f = s(E);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = {
    "cs-CZ": function(n) {
      return /^(([ABCDEFHIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(n);
    },
    "de-DE": function(n) {
      return /^((A|AA|AB|AC|AE|AH|AK|AM|AN|AÖ|AP|AS|AT|AU|AW|AZ|B|BA|BB|BC|BE|BF|BH|BI|BK|BL|BM|BN|BO|BÖ|BS|BT|BZ|C|CA|CB|CE|CO|CR|CW|D|DA|DD|DE|DH|DI|DL|DM|DN|DO|DU|DW|DZ|E|EA|EB|ED|EE|EF|EG|EH|EI|EL|EM|EN|ER|ES|EU|EW|F|FB|FD|FF|FG|FI|FL|FN|FO|FR|FS|FT|FÜ|FW|FZ|G|GA|GC|GD|GE|GF|GG|GI|GK|GL|GM|GN|GÖ|GP|GR|GS|GT|GÜ|GV|GW|GZ|H|HA|HB|HC|HD|HE|HF|HG|HH|HI|HK|HL|HM|HN|HO|HP|HR|HS|HU|HV|HX|HY|HZ|IK|IL|IN|IZ|J|JE|JL|K|KA|KB|KC|KE|KF|KG|KH|KI|KK|KL|KM|KN|KO|KR|KS|KT|KU|KW|KY|L|LA|LB|LC|LD|LF|LG|LH|LI|LL|LM|LN|LÖ|LP|LR|LU|M|MA|MB|MC|MD|ME|MG|MH|MI|MK|ML|MM|MN|MO|MQ|MR|MS|MÜ|MW|MY|MZ|N|NB|ND|NE|NF|NH|NI|NK|NM|NÖ|NP|NR|NT|NU|NW|NY|NZ|OA|OB|OC|OD|OE|OF|OG|OH|OK|OL|OP|OS|OZ|P|PA|PB|PE|PF|PI|PL|PM|PN|PR|PS|PW|PZ|R|RA|RC|RD|RE|RG|RH|RI|RL|RM|RN|RO|RP|RS|RT|RU|RV|RW|RZ|S|SB|SC|SE|SG|SI|SK|SL|SM|SN|SO|SP|SR|ST|SU|SW|SY|SZ|TE|TF|TG|TO|TP|TR|TS|TT|TÜ|ÜB|UE|UH|UL|UM|UN|V|VB|VG|VK|VR|VS|W|WA|WB|WE|WF|WI|WK|WL|WM|WN|WO|WR|WS|WT|WÜ|WW|WZ|Z|ZE|ZI|ZP|ZR|ZW|ZZ)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(ABG|ABI|AIB|AIC|ALF|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BCH|BED|BER|BGD|BGL|BID|BIN|BIR|BIT|BIW|BKS|BLB|BLK|BNA|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BSB|BSK|BTF|BÜD|BUL|BÜR|BÜS|BÜZ|CAS|CHA|CLP|CLZ|COC|COE|CUX|DAH|DAN|DAU|DBR|DEG|DEL|DGF|DIL|DIN|DIZ|DKB|DLG|DON|DUD|DÜW|EBE|EBN|EBS|ECK|EIC|EIL|EIN|EIS|EMD|EMS|ERB|ERH|ERK|ERZ|ESB|ESW|FDB|FDS|FEU|FFB|FKB|FLÖ|FOR|FRG|FRI|FRW|FTL|FÜS|GAN|GAP|GDB|GEL|GEO|GER|GHA|GHC|GLA|GMN|GNT|GOA|GOH|GRA|GRH|GRI|GRM|GRZ|GTH|GUB|GUN|GVM|HAB|HAL|HAM|HAS|HBN|HBS|HCH|HDH|HDL|HEB|HEF|HEI|HER|HET|HGN|HGW|HHM|HIG|HIP|HMÜ|HOG|HOH|HOL|HOM|HOR|HÖS|HOT|HRO|HSK|HST|HVL|HWI|IGB|ILL|JÜL|KEH|KEL|KEM|KIB|KLE|KLZ|KÖN|KÖT|KÖZ|KRU|KÜN|KUS|KYF|LAN|LAU|LBS|LBZ|LDK|LDS|LEO|LER|LEV|LIB|LIF|LIP|LÖB|LOS|LRO|LSZ|LÜN|LUP|LWL|MAB|MAI|MAK|MAL|MED|MEG|MEI|MEK|MEL|MER|MET|MGH|MGN|MHL|MIL|MKK|MOD|MOL|MON|MOS|MSE|MSH|MSP|MST|MTK|MTL|MÜB|MÜR|MYK|MZG|NAB|NAI|NAU|NDH|NEA|NEB|NEC|NEN|NES|NEW|NMB|NMS|NOH|NOL|NOM|NOR|NVP|NWM|OAL|OBB|OBG|OCH|OHA|ÖHR|OHV|OHZ|OPR|OSL|OVI|OVL|OVP|PAF|PAN|PAR|PCH|PEG|PIR|PLÖ|PRÜ|QFT|QLB|RDG|REG|REH|REI|RID|RIE|ROD|ROF|ROK|ROL|ROS|ROT|ROW|RSL|RÜD|RÜG|SAB|SAD|SAN|SAW|SBG|SBK|SCZ|SDH|SDL|SDT|SEB|SEE|SEF|SEL|SFB|SFT|SGH|SHA|SHG|SHK|SHL|SIG|SIM|SLE|SLF|SLK|SLN|SLS|SLÜ|SLZ|SMÜ|SOB|SOG|SOK|SÖM|SON|SPB|SPN|SRB|SRO|STA|STB|STD|STE|STL|SUL|SÜW|SWA|SZB|TBB|TDO|TET|TIR|TÖL|TUT|UEM|UER|UFF|USI|VAI|VEC|VER|VIB|VIE|VIT|VOH|WAF|WAK|WAN|WAR|WAT|WBS|WDA|WEL|WEN|WER|WES|WHV|WIL|WIS|WIT|WIZ|WLG|WMS|WND|WOB|WOH|WOL|WOR|WOS|WRN|WSF|WST|WSW|WTL|WTM|WUG|WÜM|WUN|WUR|WZL|ZEL|ZIG)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(n);
    },
    "de-LI": function(n) {
      return /^FL[- ]?\d{1,5}[UZ]?$/.test(n);
    },
    "en-IN": function(n) {
      return /^[A-Z]{2}[ -]?[0-9]{1,2}(?:[ -]?[A-Z])(?:[ -]?[A-Z]*)?[ -]?[0-9]{4}$/.test(n);
    },
    "en-SG": function(n) {
      return /^[A-Z]{3}[ -]?[\d]{4}[ -]?[A-Z]{1}$/.test(n);
    },
    "es-AR": function(n) {
      return /^(([A-Z]{2} ?[0-9]{3} ?[A-Z]{2})|([A-Z]{3} ?[0-9]{3}))$/.test(n);
    },
    "fi-FI": function(n) {
      return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(n);
    },
    "hu-HU": function(n) {
      return /^((((?!AAA)(([A-NPRSTVZWXY]{1})([A-PR-Z]{1})([A-HJ-NPR-Z]))|(A[ABC]I)|A[ABC]O|A[A-W]Q|BPI|BPO|UCO|UDO|XAO)-(?!000)\d{3})|(M\d{6})|((CK|DT|CD|HC|H[ABEFIKLMNPRSTVX]|MA|OT|R[A-Z]) \d{2}-\d{2})|(CD \d{3}-\d{3})|(C-(C|X) \d{4})|(X-(A|B|C) \d{4})|(([EPVZ]-\d{5}))|(S A[A-Z]{2} \d{2})|(SP \d{2}-\d{2}))$/.test(n);
    },
    "pt-BR": function(n) {
      return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(n);
    },
    "pt-PT": function(n) {
      return /^(([A-Z]{2}[ -·]?[0-9]{2}[ -·]?[0-9]{2})|([0-9]{2}[ -·]?[A-Z]{2}[ -·]?[0-9]{2})|([0-9]{2}[ -·]?[0-9]{2}[ -·]?[A-Z]{2})|([A-Z]{2}[ -·]?[0-9]{2}[ -·]?[A-Z]{2}))$/.test(n);
    },
    "sq-AL": function(n) {
      return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(n);
    },
    "sv-SE": function(n) {
      return /^[A-HJ-PR-UW-Z]{3} ?[\d]{2}[A-HJ-PR-UW-Z1-9]$|(^[A-ZÅÄÖ ]{2,7}$)/.test(n.trim());
    },
    "en-PK": function(n) {
      return /(^[A-Z]{2}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{3}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]{4}((\s|-){0,1})[0-9]{3,4}((\s|-)[0-9]{2}){0,1}$)|(^[A-Z]((\s|-){0,1})[0-9]{4}((\s|-)[0-9]{2}){0,1}$)/.test(n.trim());
    }
  };
  function a(r, n) {
    if ((0, f.default)(r), n in i)
      return i[n](r);
    if (n === "any") {
      for (var u in i) {
        var l = i[u];
        if (l(r))
          return !0;
      }
      return !1;
    }
    throw new Error("Invalid locale '".concat(n, "'"));
  }
  t.exports = e.default, t.exports.default = e.default;
})(na, na.exports);
var Hi = na.exports, ua = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = m;
  var f = i(G), s = i(E);
  function i($) {
    return $ && $.__esModule ? $ : { default: $ };
  }
  var a = /^[A-Z]$/, r = /^[a-z]$/, n = /^[0-9]$/, u = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/\\ ]$/, l = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: !1,
    pointsPerUnique: 1,
    pointsPerRepeat: 0.5,
    pointsForContainingLower: 10,
    pointsForContainingUpper: 10,
    pointsForContainingNumber: 10,
    pointsForContainingSymbol: 10
  };
  function v($) {
    var p = {};
    return Array.from($).forEach(function(A) {
      var h = p[A];
      h ? p[A] += 1 : p[A] = 1;
    }), p;
  }
  function o($) {
    var p = v($), A = {
      length: $.length,
      uniqueChars: Object.keys(p).length,
      uppercaseCount: 0,
      lowercaseCount: 0,
      numberCount: 0,
      symbolCount: 0
    };
    return Object.keys(p).forEach(function(h) {
      a.test(h) ? A.uppercaseCount += p[h] : r.test(h) ? A.lowercaseCount += p[h] : n.test(h) ? A.numberCount += p[h] : u.test(h) && (A.symbolCount += p[h]);
    }), A;
  }
  function _($, p) {
    var A = 0;
    return A += $.uniqueChars * p.pointsPerUnique, A += ($.length - $.uniqueChars) * p.pointsPerRepeat, $.lowercaseCount > 0 && (A += p.pointsForContainingLower), $.uppercaseCount > 0 && (A += p.pointsForContainingUpper), $.numberCount > 0 && (A += p.pointsForContainingNumber), $.symbolCount > 0 && (A += p.pointsForContainingSymbol), A;
  }
  function m($) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    (0, s.default)($);
    var A = o($);
    return p = (0, f.default)(p || {}, l), p.returnScore ? _(A, p) : A.length >= p.minLength && A.lowercaseCount >= p.minLowercase && A.uppercaseCount >= p.minUppercase && A.numberCount >= p.minNumbers && A.symbolCount >= p.minSymbols;
  }
  t.exports = e.default, t.exports.default = e.default;
})(ua, ua.exports);
var wi = ua.exports, qe = {};
function ia(t) {
  "@babel/helpers - typeof";
  return ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ia(t);
}
Object.defineProperty(qe, "__esModule", {
  value: !0
});
qe.default = qi;
qe.vatMatchers = void 0;
var $a = Gi(E), ki = Wa(de);
function Wa(t, e) {
  if (typeof WeakMap == "function")
    var f = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap();
  return (Wa = function(a, r) {
    if (!r && a && a.__esModule)
      return a;
    var n, u, l = { __proto__: null, default: a };
    if (a === null || ia(a) != "object" && typeof a != "function")
      return l;
    if (n = r ? s : f) {
      if (n.has(a))
        return n.get(a);
      n.set(a, l);
    }
    for (var v in a)
      v !== "default" && {}.hasOwnProperty.call(a, v) && ((u = (n = Object.defineProperty) && Object.getOwnPropertyDescriptor(a, v)) && (u.get || u.set) ? n(l, v, u) : l[v] = a[v]);
    return l;
  })(t, e);
}
function Gi(t) {
  return t && t.__esModule ? t : { default: t };
}
var Ki = function(e) {
  var f = e.match(/^(AU)?(\d{11})$/);
  if (!f)
    return !1;
  var s = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  e = e.replace(/^AU/, "");
  for (var i = (parseInt(e.slice(0, 1), 10) - 1).toString() + e.slice(1), a = 0, r = 0; r < 11; r++)
    a += s[r] * i.charAt(r);
  return a !== 0 && a % 89 === 0;
}, Wi = function(e) {
  var f = function(i) {
    var a = i.pop(), r = [5, 4, 3, 2, 7, 6, 5, 4], n = (11 - i.reduce(function(u, l, v) {
      return u + l * r[v];
    }, 0) % 11) % 11;
    return a === n;
  };
  return /^(CHE[- ]?)?(\d{9}|(\d{3}\.\d{3}\.\d{3})|(\d{3} \d{3} \d{3})) ?(TVA|MWST|IVA)?$/.test(e) && f(e.match(/\d/g).map(function(s) {
    return +s;
  }));
}, ji = function(e) {
  var f = e.match(/^(PT)?(\d{9})$/);
  if (!f)
    return !1;
  var s = f[2], i = 11 - ki.reverseMultiplyAndSum(s.split("").slice(0, 8).map(function(a) {
    return parseInt(a, 10);
  }), 9) % 11;
  return i > 9 ? parseInt(s[8], 10) === 0 : i === parseInt(s[8], 10);
}, ya = qe.vatMatchers = {
  /**
   * European Union VAT identification numbers
   */
  AT: function(e) {
    return /^(AT)?U\d{8}$/.test(e);
  },
  BE: function(e) {
    return /^(BE)?\d{10}$/.test(e);
  },
  BG: function(e) {
    return /^(BG)?\d{9,10}$/.test(e);
  },
  HR: function(e) {
    return /^(HR)?\d{11}$/.test(e);
  },
  CY: function(e) {
    return /^(CY)?\w{9}$/.test(e);
  },
  CZ: function(e) {
    return /^(CZ)?\d{8,10}$/.test(e);
  },
  DK: function(e) {
    return /^(DK)?\d{8}$/.test(e);
  },
  EE: function(e) {
    return /^(EE)?\d{9}$/.test(e);
  },
  FI: function(e) {
    return /^(FI)?\d{8}$/.test(e);
  },
  FR: function(e) {
    return /^(FR)([A-Z0-9]{2}\d{9})$/.test(e);
  },
  DE: function(e) {
    return /^(DE)?\d{9}$/.test(e);
  },
  EL: function(e) {
    return /^(EL)?\d{9}$/.test(e);
  },
  HU: function(e) {
    return /^(HU)?\d{8}$/.test(e);
  },
  IE: function(e) {
    return /^(IE)?\d{7}\w{1}(W)?$/.test(e);
  },
  IT: function(e) {
    return /^(IT)?\d{11}$/.test(e);
  },
  LV: function(e) {
    return /^(LV)?\d{11}$/.test(e);
  },
  LT: function(e) {
    return /^(LT)?\d{9,12}$/.test(e);
  },
  LU: function(e) {
    return /^(LU)?\d{8}$/.test(e);
  },
  MT: function(e) {
    return /^(MT)?\d{8}$/.test(e);
  },
  NL: function(e) {
    return /^(NL)?\d{9}B\d{2}$/.test(e);
  },
  PL: function(e) {
    return /^(PL)?(\d{10}|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{3}-\d{2}-\d{2}-\d{3}))$/.test(e);
  },
  PT: ji,
  RO: function(e) {
    return /^(RO)?\d{2,10}$/.test(e);
  },
  SK: function(e) {
    return /^(SK)?\d{10}$/.test(e);
  },
  SI: function(e) {
    return /^(SI)?\d{8}$/.test(e);
  },
  ES: function(e) {
    return /^(ES)?\w\d{7}[A-Z]$/.test(e);
  },
  SE: function(e) {
    return /^(SE)?\d{12}$/.test(e);
  },
  /**
   * VAT numbers of non-EU countries
   */
  AL: function(e) {
    return /^(AL)?\w{9}[A-Z]$/.test(e);
  },
  MK: function(e) {
    return /^(MK)?\d{13}$/.test(e);
  },
  AU: Ki,
  BY: function(e) {
    return /^(УНП )?\d{9}$/.test(e);
  },
  CA: function(e) {
    return /^(CA)?\d{9}$/.test(e);
  },
  IS: function(e) {
    return /^(IS)?\d{5,6}$/.test(e);
  },
  IN: function(e) {
    return /^(IN)?\d{15}$/.test(e);
  },
  ID: function(e) {
    return /^(ID)?(\d{15}|(\d{2}.\d{3}.\d{3}.\d{1}-\d{3}.\d{3}))$/.test(e);
  },
  IL: function(e) {
    return /^(IL)?\d{9}$/.test(e);
  },
  KZ: function(e) {
    return /^(KZ)?\d{12}$/.test(e);
  },
  NZ: function(e) {
    return /^(NZ)?\d{9}$/.test(e);
  },
  NG: function(e) {
    return /^(NG)?(\d{12}|(\d{8}-\d{4}))$/.test(e);
  },
  NO: function(e) {
    return /^(NO)?\d{9}MVA$/.test(e);
  },
  PH: function(e) {
    return /^(PH)?(\d{12}|\d{3} \d{3} \d{3} \d{3})$/.test(e);
  },
  RU: function(e) {
    return /^(RU)?(\d{10}|\d{12})$/.test(e);
  },
  SM: function(e) {
    return /^(SM)?\d{5}$/.test(e);
  },
  SA: function(e) {
    return /^(SA)?\d{15}$/.test(e);
  },
  RS: function(e) {
    return /^(RS)?\d{9}$/.test(e);
  },
  CH: Wi,
  TR: function(e) {
    return /^(TR)?\d{10}$/.test(e);
  },
  UA: function(e) {
    return /^(UA)?\d{12}$/.test(e);
  },
  GB: function(e) {
    return /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/.test(e);
  },
  UZ: function(e) {
    return /^(UZ)?\d{9}$/.test(e);
  },
  /**
   * VAT numbers of Latin American countries
   */
  AR: function(e) {
    return /^(AR)?\d{11}$/.test(e);
  },
  BO: function(e) {
    return /^(BO)?\d{7}$/.test(e);
  },
  BR: function(e) {
    return /^(BR)?((\d{2}.\d{3}.\d{3}\/\d{4}-\d{2})|(\d{3}.\d{3}.\d{3}-\d{2}))$/.test(e);
  },
  CL: function(e) {
    return /^(CL)?\d{8}-\d{1}$/.test(e);
  },
  CO: function(e) {
    return /^(CO)?\d{10}$/.test(e);
  },
  CR: function(e) {
    return /^(CR)?\d{9,12}$/.test(e);
  },
  EC: function(e) {
    return /^(EC)?\d{13}$/.test(e);
  },
  SV: function(e) {
    return /^(SV)?\d{4}-\d{6}-\d{3}-\d{1}$/.test(e);
  },
  GT: function(e) {
    return /^(GT)?\d{7}-\d{1}$/.test(e);
  },
  HN: function(e) {
    return /^(HN)?$/.test(e);
  },
  MX: function(e) {
    return /^(MX)?\w{3,4}\d{6}\w{3}$/.test(e);
  },
  NI: function(e) {
    return /^(NI)?\d{3}-\d{6}-\d{4}\w{1}$/.test(e);
  },
  PA: function(e) {
    return /^(PA)?$/.test(e);
  },
  PY: function(e) {
    return /^(PY)?\d{6,8}-\d{1}$/.test(e);
  },
  PE: function(e) {
    return /^(PE)?\d{11}$/.test(e);
  },
  DO: function(e) {
    return /^(DO)?(\d{11}|(\d{3}-\d{7}-\d{1})|[1,4,5]{1}\d{8}|([1,4,5]{1})-\d{2}-\d{5}-\d{1})$/.test(e);
  },
  UY: function(e) {
    return /^(UY)?\d{12}$/.test(e);
  },
  VE: function(e) {
    return /^(VE)?[J,G,V,E]{1}-(\d{9}|(\d{8}-\d{1}))$/.test(e);
  }
};
function qi(t, e) {
  if ((0, $a.default)(t), (0, $a.default)(e), e in ya)
    return ya[e](t);
  throw new Error("Invalid country code: '".concat(e, "'"));
}
(function(t, e) {
  function f(ie) {
    "@babel/helpers - typeof";
    return f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(le) {
      return typeof le;
    } : function(le) {
      return le && typeof Symbol == "function" && le.constructor === Symbol && le !== Symbol.prototype ? "symbol" : typeof le;
    }, f(ie);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var s = R(la), i = R(Ra), a = R(xn), r = R(Ln), n = R(Pn), u = R(On), l = R(Nn), v = R(xa), o = R(Bn), _ = R(Zn), m = R(at), $ = R(Fn), p = R(sa), A = R(Pa), h = R(Tn), S = R(Un), M = R(Hn), b = R(wn), C = ue(Te), x = ue(Ue), L = R(Vn), P = ue(He), Z = R(Jn), N = R(Xn), w = R(eu), K = R(tu), z = R(ru), Q = R(Me), W = R(be), X = R(du), ae = R(cu), ce = R(pu), se = R(_u), ve = R(fa), fe = ue(ye), Re = R(Au), Ee = R(Oa), De = R(gu), pe = R(hu), Ce = R(Su), _e = R(mu), xe = R($u), Le = R(yu), ne = ue(we), Ve = R(Pu), Pe = R(Ou), nt = R(Nu), ee = R(Bu), te = R(Zu), Ye = R(Fu), Ae = R(Tu), ut = R(Ca), d = R(Uu), c = R(Hu), g = R(wu), I = R(ku), y = R(Gu), D = R(Ku), O = R(Fa), B = R(Wu), F = R(ju), H = R(qu), re = R(Vu), Oe = R(Yu), ge = R(zu), Ne = R(ti), Be = ue(ke), oe = R(ui), he = R(ii), ze = R(li), oa = Ge, ja = R(ci), qa = R(vi), Va = R(pi), Ya = R(Ke), za = R(Ie), Qa = R(hi), Ja = R(Si), Xa = R(We), en = R(Mi), tn = R(bi), rn = R(Za), an = R(Ii), nn = R(Ri), un = R(Ei), ln = R(Di), sn = R(Ci), da = ue(je), fn = R(ka), on = R(wa), dn = R(Ga), cn = R(Oi), vn = R(Ni), pn = R(Bi), _n = R(Zi), An = R(Ka), gn = R(Fi), hn = R(Ti), Sn = R(Ui), mn = R(Hi), $n = R(wi), yn = R(qe);
  function ue(ie, le) {
    if (typeof WeakMap == "function")
      var In = /* @__PURE__ */ new WeakMap(), Rn = /* @__PURE__ */ new WeakMap();
    return (ue = function(q, ca) {
      if (!ca && q && q.__esModule)
        return q;
      var Se, Qe, Ze = { __proto__: null, default: q };
      if (q === null || f(q) != "object" && typeof q != "function")
        return Ze;
      if (Se = ca ? Rn : In) {
        if (Se.has(q))
          return Se.get(q);
        Se.set(q, Ze);
      }
      for (var me in q)
        me !== "default" && {}.hasOwnProperty.call(q, me) && ((Qe = (Se = Object.defineProperty) && Object.getOwnPropertyDescriptor(q, me)) && (Qe.get || Qe.set) ? Se(Ze, me, Qe) : Ze[me] = q[me]);
      return Ze;
    })(ie, le);
  }
  function R(ie) {
    return ie && ie.__esModule ? ie : { default: ie };
  }
  var Mn = "13.15.35", bn = {
    version: Mn,
    toDate: s.default,
    toFloat: i.default,
    toInt: a.default,
    toBoolean: r.default,
    equals: n.default,
    contains: u.default,
    matches: l.default,
    isEmail: v.default,
    isURL: o.default,
    isMACAddress: _.default,
    isIP: m.default,
    isIPRange: $.default,
    isFQDN: p.default,
    isBoolean: S.default,
    isIBAN: ne.default,
    isBIC: Ve.default,
    isAbaRouting: b.default,
    isAlpha: C.default,
    isAlphaLocales: C.locales,
    isAlphanumeric: x.default,
    isAlphanumericLocales: x.locales,
    isNumeric: L.default,
    isPassportNumber: P.default,
    passportNumberLocales: P.locales,
    isPort: Z.default,
    isLowercase: N.default,
    isUppercase: w.default,
    isAscii: z.default,
    isFullWidth: Q.default,
    isHalfWidth: W.default,
    isVariableWidth: X.default,
    isMultibyte: ae.default,
    isSemVer: ce.default,
    isSurrogatePair: se.default,
    isInt: ve.default,
    isIMEI: K.default,
    isFloat: fe.default,
    isFloatLocales: fe.locales,
    isDecimal: Re.default,
    isHexadecimal: Ee.default,
    isOctal: De.default,
    isDivisibleBy: pe.default,
    isHexColor: Ce.default,
    isRgbColor: _e.default,
    isHSL: xe.default,
    isISRC: Le.default,
    isMD5: Pe.default,
    isHash: nt.default,
    isJWT: ee.default,
    isJSON: te.default,
    isEmpty: Ye.default,
    isLength: Ae.default,
    isLocale: M.default,
    isByteLength: ut.default,
    isULID: d.default,
    isUUID: c.default,
    isMongoId: g.default,
    isAfter: I.default,
    isBefore: y.default,
    isIn: D.default,
    isLuhnNumber: O.default,
    isCreditCard: B.default,
    isIdentityCard: F.default,
    isEAN: H.default,
    isISIN: re.default,
    isISBN: Oe.default,
    isISSN: ge.default,
    isMobilePhone: Be.default,
    isMobilePhoneLocales: Be.locales,
    isPostalCode: da.default,
    isPostalCodeLocales: da.locales,
    isEthereumAddress: oe.default,
    isCurrency: he.default,
    isBtcAddress: ze.default,
    isISO6346: oa.isISO6346,
    isFreightContainerID: oa.isFreightContainerID,
    isISO6391: ja.default,
    isISO8601: qa.default,
    isISO15924: Ya.default,
    isRFC3339: Va.default,
    isISO31661Alpha2: za.default,
    isISO31661Alpha3: Qa.default,
    isISO31661Numeric: Ja.default,
    isISO4217: Xa.default,
    isBase32: en.default,
    isBase58: tn.default,
    isBase64: rn.default,
    isDataURI: an.default,
    isMagnetURI: nn.default,
    isMailtoURI: un.default,
    isMimeType: ln.default,
    isLatLong: sn.default,
    ltrim: fn.default,
    rtrim: on.default,
    trim: dn.default,
    escape: cn.default,
    unescape: vn.default,
    stripLow: pn.default,
    whitelist: _n.default,
    blacklist: An.default,
    isWhitelisted: gn.default,
    normalizeEmail: hn.default,
    toString,
    isSlug: Sn.default,
    isStrongPassword: $n.default,
    isTaxID: Ne.default,
    isDate: A.default,
    isTime: h.default,
    isLicensePlate: mn.default,
    isVAT: yn.default,
    ibanLocales: ne.locales
  };
  e.default = bn, t.exports = e.default, t.exports.default = e.default;
})(pt, pt.exports);
var Vi = pt.exports;
const Qi = /* @__PURE__ */ En(Vi);
export {
  Qi as v
};
