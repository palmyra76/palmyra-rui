import { g as dn } from "../../_commonjsHelpers-c5d32002.js";
var st = { exports: {} }, ft = { exports: {} }, ot = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = s;
  function l(i) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? l = function(r) {
      return typeof r;
    } : l = function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, l(i);
  }
  function s(i) {
    var a = typeof i == "string" || i instanceof String;
    if (!a) {
      var r = l(i);
      throw i === null ? r = "null" : r === "object" && (r = i.constructor.name), new TypeError("Expected a string but received a ".concat(r));
    }
  }
  t.exports = e.default, t.exports.default = e.default;
})(ot, ot.exports);
var y = ot.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(y);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, l.default)(a), a = Date.parse(a), isNaN(a) ? null : new Date(a);
  }
  t.exports = e.default, t.exports.default = e.default;
})(ft, ft.exports);
var ta = ft.exports, dt = { exports: {} }, pe = {}, U = {};
Object.defineProperty(U, "__esModule", {
  value: !0
});
U.commaDecimal = U.dotDecimal = U.bengaliLocales = U.farsiLocales = U.arabicLocales = U.englishLocales = U.decimal = U.alphanumeric = U.alpha = void 0;
var q = {
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
  "hi-IN": /^[\u0900-\u0961]+[\u0972-\u097F]*$/i,
  "si-LK": /^[\u0D80-\u0DFF]+$/
};
U.alpha = q;
var Y = {
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
  "hi-IN": /^[\u0900-\u0963]+[\u0966-\u097F]*$/i,
  "si-LK": /^[0-9\u0D80-\u0DFF]+$/
};
U.alphanumeric = Y;
var K = {
  "en-US": ".",
  ar: "٫"
};
U.decimal = K;
var ct = ["AU", "GB", "HK", "IN", "NZ", "ZA", "ZM"];
U.englishLocales = ct;
for (var Ze, et = 0; et < ct.length; et++)
  Ze = "en-".concat(ct[et]), q[Ze] = q["en-US"], Y[Ze] = Y["en-US"], K[Ze] = K["en-US"];
var vt = ["AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY", "MA", "QM", "QA", "SA", "SD", "SY", "TN", "YE"];
U.arabicLocales = vt;
for (var Fe, tt = 0; tt < vt.length; tt++)
  Fe = "ar-".concat(vt[tt]), q[Fe] = q.ar, Y[Fe] = Y.ar, K[Fe] = K.ar;
var pt = ["IR", "AF"];
U.farsiLocales = pt;
for (var rt, at = 0; at < pt.length; at++)
  rt = "fa-".concat(pt[at]), Y[rt] = Y.fa, K[rt] = K.ar;
var _t = ["BD", "IN"];
U.bengaliLocales = _t;
for (var Te, nt = 0; nt < _t.length; nt++)
  Te = "bn-".concat(_t[nt]), q[Te] = q.bn, Y[Te] = Y.bn, K[Te] = K["en-US"];
var gt = ["ar-EG", "ar-LB", "ar-LY"];
U.dotDecimal = gt;
var At = ["bg-BG", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-ZM", "es-ES", "fr-CA", "fr-FR", "id-ID", "it-IT", "ku-IQ", "hi-IN", "hu-HU", "nb-NO", "nn-NO", "nl-NL", "pl-PL", "pt-PT", "ru-RU", "kk-KZ", "si-LK", "sl-SI", "sr-RS@latin", "sr-RS", "sv-SE", "tr-TR", "uk-UA", "vi-VN"];
U.commaDecimal = At;
for (var ut = 0; ut < gt.length; ut++)
  K[gt[ut]] = K["en-US"];
for (var it = 0; it < At.length; it++)
  K[At[it]] = ",";
q["fr-CA"] = q["fr-FR"];
Y["fr-CA"] = Y["fr-FR"];
q["pt-BR"] = q["pt-PT"];
Y["pt-BR"] = Y["pt-PT"];
K["pt-BR"] = K["pt-PT"];
q["pl-Pl"] = q["pl-PL"];
Y["pl-Pl"] = Y["pl-PL"];
K["pl-Pl"] = K["pl-PL"];
q["fa-AF"] = q.fa;
Object.defineProperty(pe, "__esModule", {
  value: !0
});
pe.default = pn;
pe.locales = void 0;
var cn = vn(y), oa = U;
function vn(t) {
  return t && t.__esModule ? t : { default: t };
}
function pn(t, e) {
  (0, cn.default)(t), e = e || {};
  var l = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(e.locale ? oa.decimal[e.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
  if (t === "" || t === "." || t === "," || t === "-" || t === "+")
    return !1;
  var s = parseFloat(t.replace(",", "."));
  return l.test(t) && (!e.hasOwnProperty("min") || s >= e.min) && (!e.hasOwnProperty("max") || s <= e.max) && (!e.hasOwnProperty("lt") || s < e.lt) && (!e.hasOwnProperty("gt") || s > e.gt);
}
var _n = Object.keys(oa.decimal);
pe.locales = _n;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(pe);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, l.default)(a) ? parseFloat(a) : NaN;
  }
  t.exports = e.default, t.exports.default = e.default;
})(dt, dt.exports);
var da = dt.exports, ht = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(y);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    return (0, l.default)(a), parseInt(a, r || 10);
  }
  t.exports = e.default, t.exports.default = e.default;
})(ht, ht.exports);
var gn = ht.exports, St = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(y);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    return (0, l.default)(a), r ? a === "1" || /^true$/i.test(a) : a !== "0" && !/^false$/i.test(a) && a !== "";
  }
  t.exports = e.default, t.exports.default = e.default;
})(St, St.exports);
var An = St.exports, $t = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(y);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    return (0, l.default)(a), a === r;
  }
  t.exports = e.default, t.exports.default = e.default;
})($t, $t.exports);
var hn = $t.exports, mt = { exports: {} }, Mt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = s;
  function l(i) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? l = function(r) {
      return typeof r;
    } : l = function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, l(i);
  }
  function s(i) {
    return l(i) === "object" && i !== null ? typeof i.toString == "function" ? i = i.toString() : i = "[object Object]" : (i === null || typeof i > "u" || isNaN(i) && !i.length) && (i = ""), String(i);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Mt, Mt.exports);
var ca = Mt.exports, yt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = l;
  function l() {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    for (var a in i)
      typeof s[a] > "u" && (s[a] = i[a]);
    return s;
  }
  t.exports = e.default, t.exports.default = e.default;
})(yt, yt.exports);
var V = yt.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var l = a(y), s = a(ca), i = a(V);
  function a(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var r = {
    ignoreCase: !1,
    minOccurrences: 1
  };
  function u(n, o, d) {
    return (0, l.default)(n), d = (0, i.default)(d, r), d.ignoreCase ? n.toLowerCase().split((0, s.default)(o).toLowerCase()).length > d.minOccurrences : n.split((0, s.default)(o)).length > d.minOccurrences;
  }
  t.exports = e.default, t.exports.default = e.default;
})(mt, mt.exports);
var Sn = mt.exports, It = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(y);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r, u) {
    return (0, l.default)(a), Object.prototype.toString.call(r) !== "[object RegExp]" && (r = new RegExp(r, u)), !!a.match(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(It, It.exports);
var $n = It.exports, Rt = { exports: {} }, Et = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function i(r) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? i = function(n) {
      return typeof n;
    } : i = function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    }, i(r);
  }
  function a(r, u) {
    (0, l.default)(r);
    var n, o;
    i(u) === "object" ? (n = u.min || 0, o = u.max) : (n = arguments[1], o = arguments[2]);
    var d = encodeURI(r).split(/%..|./).length - 1;
    return d >= n && (typeof o > "u" || d <= o);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Et, Et.exports);
var va = Et.exports, Dt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var l = i(y), s = i(V);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = {
    require_tld: !0,
    allow_underscores: !1,
    allow_trailing_dot: !1,
    allow_numeric_tld: !1,
    allow_wildcard: !1,
    ignore_max_length: !1
  };
  function r(u, n) {
    (0, l.default)(u), n = (0, s.default)(n, a), n.allow_trailing_dot && u[u.length - 1] === "." && (u = u.substring(0, u.length - 1)), n.allow_wildcard === !0 && u.indexOf("*.") === 0 && (u = u.substring(2));
    var o = u.split("."), d = o[o.length - 1];
    return n.require_tld && (o.length < 2 || !n.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(d) || /\s/.test(d)) || !n.allow_numeric_tld && /^\d+$/.test(d) ? !1 : o.every(function(v) {
      return !(v.length > 63 && !n.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(v) || /[\uff01-\uff5e]/.test(v) || /^-|-$/.test(v) || !n.allow_underscores && /_/.test(v));
    });
  }
  t.exports = e.default, t.exports.default = e.default;
})(Dt, Dt.exports);
var ra = Dt.exports, xt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = o;
  var l = s(y);
  function s(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var i = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])", a = "(".concat(i, "[.]){3}").concat(i), r = new RegExp("^".concat(a, "$")), u = "(?:[0-9a-fA-F]{1,4})", n = new RegExp("^(" + "(?:".concat(u, ":){7}(?:").concat(u, "|:)|") + "(?:".concat(u, ":){6}(?:").concat(a, "|:").concat(u, "|:)|") + "(?:".concat(u, ":){5}(?::").concat(a, "|(:").concat(u, "){1,2}|:)|") + "(?:".concat(u, ":){4}(?:(:").concat(u, "){0,1}:").concat(a, "|(:").concat(u, "){1,3}|:)|") + "(?:".concat(u, ":){3}(?:(:").concat(u, "){0,2}:").concat(a, "|(:").concat(u, "){1,4}|:)|") + "(?:".concat(u, ":){2}(?:(:").concat(u, "){0,3}:").concat(a, "|(:").concat(u, "){1,5}|:)|") + "(?:".concat(u, ":){1}(?:(:").concat(u, "){0,4}:").concat(a, "|(:").concat(u, "){1,6}|:)|") + "(?::((?::".concat(u, "){0,5}:").concat(a, "|(?::").concat(u, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
  function o(d) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (0, l.default)(d), v = String(v), v ? v === "4" ? r.test(d) : v === "6" ? n.test(d) : !1 : o(d, 4) || o(d, 6);
  }
  t.exports = e.default, t.exports.default = e.default;
})(xt, xt.exports);
var Ge = xt.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = $;
  var l = u(y), s = u(va), i = u(ra), a = u(Ge), r = u(V);
  function u(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var n = {
    allow_display_name: !1,
    allow_underscores: !1,
    require_display_name: !1,
    allow_utf8_local_part: !0,
    require_tld: !0,
    blacklisted_chars: "",
    ignore_max_length: !1,
    host_blacklist: [],
    host_whitelist: []
  }, o = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i, d = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i, v = /^[a-z\d]+$/, g = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i, m = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i, E = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i, p = 254;
  function _(h) {
    var S = h.replace(/^"(.+)"$/, "$1");
    if (!S.trim())
      return !1;
    var I = /[\.";<>]/.test(S);
    if (I) {
      if (S === h)
        return !1;
      var C = S.split('"').length === S.split('\\"').length;
      if (!C)
        return !1;
    }
    return !0;
  }
  function $(h, S) {
    if ((0, l.default)(h), S = (0, r.default)(S, n), S.require_display_name || S.allow_display_name) {
      var I = h.match(o);
      if (I) {
        var C = I[1];
        if (h = h.replace(C, "").replace(/(^<|>$)/g, ""), C.endsWith(" ") && (C = C.slice(0, -1)), !_(C))
          return !1;
      } else if (S.require_display_name)
        return !1;
    }
    if (!S.ignore_max_length && h.length > p)
      return !1;
    var O = h.split("@"), P = O.pop(), L = P.toLowerCase();
    if (S.host_blacklist.includes(L) || S.host_whitelist.length > 0 && !S.host_whitelist.includes(L))
      return !1;
    var Z = O.join("@");
    if (S.domain_specific_validation && (L === "gmail.com" || L === "googlemail.com")) {
      Z = Z.toLowerCase();
      var F = Z.split("+")[0];
      if (!(0, s.default)(F.replace(/\./g, ""), {
        min: 6,
        max: 30
      }))
        return !1;
      for (var k = F.split("."), j = 0; j < k.length; j++)
        if (!v.test(k[j]))
          return !1;
    }
    if (S.ignore_max_length === !1 && (!(0, s.default)(Z, {
      max: 64
    }) || !(0, s.default)(P, {
      max: 254
    })))
      return !1;
    if (!(0, i.default)(P, {
      require_tld: S.require_tld,
      ignore_max_length: S.ignore_max_length,
      allow_underscores: S.allow_underscores
    })) {
      if (!S.allow_ip_domain)
        return !1;
      if (!(0, a.default)(P)) {
        if (!P.startsWith("[") || !P.endsWith("]"))
          return !1;
        var W = P.slice(1, -1);
        if (W.length === 0 || !(0, a.default)(W))
          return !1;
      }
    }
    if (Z[0] === '"')
      return Z = Z.slice(1, Z.length - 1), S.allow_utf8_local_part ? E.test(Z) : g.test(Z);
    for (var le = S.allow_utf8_local_part ? m : d, ne = Z.split("."), ee = 0; ee < ne.length; ee++)
      if (!le.test(ne[ee]))
        return !1;
    return !(S.blacklisted_chars && Z.search(new RegExp("[".concat(S.blacklisted_chars, "]+"), "g")) !== -1);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Rt, Rt.exports);
var pa = Rt.exports, Ct = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = $;
  var l = r(y), s = r(ra), i = r(Ge), a = r(V);
  function r(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function u(h, S) {
    return g(h) || v(h, S) || o(h, S) || n();
  }
  function n() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function o(h, S) {
    if (h) {
      if (typeof h == "string")
        return d(h, S);
      var I = Object.prototype.toString.call(h).slice(8, -1);
      if (I === "Object" && h.constructor && (I = h.constructor.name), I === "Map" || I === "Set")
        return Array.from(h);
      if (I === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))
        return d(h, S);
    }
  }
  function d(h, S) {
    (S == null || S > h.length) && (S = h.length);
    for (var I = 0, C = new Array(S); I < S; I++)
      C[I] = h[I];
    return C;
  }
  function v(h, S) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(h)))) {
      var I = [], C = !0, O = !1, P = void 0;
      try {
        for (var L = h[Symbol.iterator](), Z; !(C = (Z = L.next()).done) && (I.push(Z.value), !(S && I.length === S)); C = !0)
          ;
      } catch (F) {
        O = !0, P = F;
      } finally {
        try {
          !C && L.return != null && L.return();
        } finally {
          if (O)
            throw P;
        }
      }
      return I;
    }
  }
  function g(h) {
    if (Array.isArray(h))
      return h;
  }
  var m = {
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
    validate_length: !0
  }, E = /^\[([^\]]+)\](?::([0-9]+))?$/;
  function p(h) {
    return Object.prototype.toString.call(h) === "[object RegExp]";
  }
  function _(h, S) {
    for (var I = 0; I < S.length; I++) {
      var C = S[I];
      if (h === C || p(C) && C.test(h))
        return !0;
    }
    return !1;
  }
  function $(h, S) {
    if ((0, l.default)(h), !h || /[\s<>]/.test(h) || h.indexOf("mailto:") === 0 || (S = (0, a.default)(S, m), S.validate_length && h.length >= 2083) || !S.allow_fragments && h.includes("#") || !S.allow_query_components && (h.includes("?") || h.includes("&")))
      return !1;
    var I, C, O, P, L, Z, F, k;
    if (F = h.split("#"), h = F.shift(), F = h.split("?"), h = F.shift(), F = h.split("://"), F.length > 1) {
      if (I = F.shift().toLowerCase(), S.require_valid_protocol && S.protocols.indexOf(I) === -1)
        return !1;
    } else {
      if (S.require_protocol)
        return !1;
      if (h.slice(0, 2) === "//") {
        if (!S.allow_protocol_relative_urls)
          return !1;
        F[0] = h.slice(2);
      }
    }
    if (h = F.join("://"), h === "")
      return !1;
    if (F = h.split("/"), h = F.shift(), h === "" && !S.require_host)
      return !0;
    if (F = h.split("@"), F.length > 1) {
      if (S.disallow_auth || F[0] === "" || (C = F.shift(), C.indexOf(":") >= 0 && C.split(":").length > 2))
        return !1;
      var j = C.split(":"), W = u(j, 2), le = W[0], ne = W[1];
      if (le === "" && ne === "")
        return !1;
    }
    P = F.join("@"), Z = null, k = null;
    var ee = P.match(E);
    if (ee ? (O = "", k = ee[1], Z = ee[2] || null) : (F = P.split(":"), O = F.shift(), F.length && (Z = F.join(":"))), Z !== null && Z.length > 0) {
      if (L = parseInt(Z, 10), !/^[0-9]+$/.test(Z) || L <= 0 || L > 65535)
        return !1;
    } else if (S.require_port)
      return !1;
    return S.host_whitelist ? _(O, S.host_whitelist) : O === "" && !S.require_host ? !0 : !(!(0, i.default)(O) && !(0, s.default)(O, S) && (!k || !(0, i.default)(k, 6)) || (O = O || k, S.host_blacklist && _(O, S.host_blacklist)));
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ct, Ct.exports);
var mn = Ct.exports, Pt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = d;
  var l = s(y);
  function s(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var i = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/, a = /^([0-9a-fA-F]){12}$/, r = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/, u = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/, n = /^([0-9a-fA-F]){16}$/, o = /^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;
  function d(v, g) {
    return (0, l.default)(v), g != null && g.eui && (g.eui = String(g.eui)), g != null && g.no_colons || g != null && g.no_separators ? g.eui === "48" ? a.test(v) : g.eui === "64" ? n.test(v) : a.test(v) || n.test(v) : (g == null ? void 0 : g.eui) === "48" ? i.test(v) || r.test(v) : (g == null ? void 0 : g.eui) === "64" ? u.test(v) || o.test(v) : d(v, {
      eui: "48"
    }) || d(v, {
      eui: "64"
    });
  }
  t.exports = e.default, t.exports.default = e.default;
})(Pt, Pt.exports);
var Mn = Pt.exports, Lt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var l = i(y), s = i(Ge);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = /^\d{1,3}$/, r = 32, u = 128;
  function n(o) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    (0, l.default)(o);
    var v = o.split("/");
    if (v.length !== 2 || !a.test(v[1]) || v[1].length > 1 && v[1].startsWith("0"))
      return !1;
    var g = (0, s.default)(v[0], d);
    if (!g)
      return !1;
    var m = null;
    switch (String(d)) {
      case "4":
        m = r;
        break;
      case "6":
        m = u;
        break;
      default:
        m = (0, s.default)(v[0], "6") ? u : r;
    }
    return v[1] <= m && v[1] >= 0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Lt, Lt.exports);
var yn = Lt.exports, Ot = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = E;
  var l = s(V);
  function s(p) {
    return p && p.__esModule ? p : { default: p };
  }
  function i(p, _) {
    return u(p) || r(p, _) || o(p, _) || a();
  }
  function a() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function r(p, _) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(p)))) {
      var $ = [], h = !0, S = !1, I = void 0;
      try {
        for (var C = p[Symbol.iterator](), O; !(h = (O = C.next()).done) && ($.push(O.value), !(_ && $.length === _)); h = !0)
          ;
      } catch (P) {
        S = !0, I = P;
      } finally {
        try {
          !h && C.return != null && C.return();
        } finally {
          if (S)
            throw I;
        }
      }
      return $;
    }
  }
  function u(p) {
    if (Array.isArray(p))
      return p;
  }
  function n(p, _) {
    var $;
    if (typeof Symbol > "u" || p[Symbol.iterator] == null) {
      if (Array.isArray(p) || ($ = o(p)) || _ && p && typeof p.length == "number") {
        $ && (p = $);
        var h = 0, S = function() {
        };
        return { s: S, n: function() {
          return h >= p.length ? { done: !0 } : { done: !1, value: p[h++] };
        }, e: function(L) {
          throw L;
        }, f: S };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var I = !0, C = !1, O;
    return { s: function() {
      $ = p[Symbol.iterator]();
    }, n: function() {
      var L = $.next();
      return I = L.done, L;
    }, e: function(L) {
      C = !0, O = L;
    }, f: function() {
      try {
        !I && $.return != null && $.return();
      } finally {
        if (C)
          throw O;
      }
    } };
  }
  function o(p, _) {
    if (p) {
      if (typeof p == "string")
        return d(p, _);
      var $ = Object.prototype.toString.call(p).slice(8, -1);
      if ($ === "Object" && p.constructor && ($ = p.constructor.name), $ === "Map" || $ === "Set")
        return Array.from(p);
      if ($ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($))
        return d(p, _);
    }
  }
  function d(p, _) {
    (_ == null || _ > p.length) && (_ = p.length);
    for (var $ = 0, h = new Array(_); $ < _; $++)
      h[$] = p[$];
    return h;
  }
  var v = {
    format: "YYYY/MM/DD",
    delimiters: ["/", "-"],
    strictMode: !1
  };
  function g(p) {
    return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(p);
  }
  function m(p, _) {
    for (var $ = [], h = Math.min(p.length, _.length), S = 0; S < h; S++)
      $.push([p[S], _[S]]);
    return $;
  }
  function E(p, _) {
    if (typeof _ == "string" ? _ = (0, l.default)({
      format: _
    }, v) : _ = (0, l.default)(_, v), typeof p == "string" && g(_.format)) {
      var $ = _.delimiters.find(function(W) {
        return _.format.indexOf(W) !== -1;
      }), h = _.strictMode ? $ : _.delimiters.find(function(W) {
        return p.indexOf(W) !== -1;
      }), S = m(p.split(h), _.format.toLowerCase().split($)), I = {}, C = n(S), O;
      try {
        for (C.s(); !(O = C.n()).done; ) {
          var P = i(O.value, 2), L = P[0], Z = P[1];
          if (L.length !== Z.length)
            return !1;
          I[Z.charAt(0)] = L;
        }
      } catch (W) {
        C.e(W);
      } finally {
        C.f();
      }
      var F = I.y;
      if (I.y.length === 2) {
        var k = parseInt(I.y, 10);
        if (isNaN(k))
          return !1;
        var j = (/* @__PURE__ */ new Date()).getFullYear() % 100;
        k < j ? F = "20".concat(I.y) : F = "19".concat(I.y);
      }
      return new Date("".concat(F, "-").concat(I.m, "-").concat(I.d)).getDate() === +I.d;
    }
    return _.strictMode ? !1 : Object.prototype.toString.call(p) === "[object Date]" && isFinite(p);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ot, Ot.exports);
var _a = Ot.exports, Bt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var l = s(V);
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var i = {
    hourFormat: "hour24",
    mode: "default"
  }, a = {
    hour24: {
      default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
      withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
    },
    hour12: {
      default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
      withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/
    }
  };
  function r(u, n) {
    return n = (0, l.default)(n, i), typeof u != "string" ? !1 : a[n.hourFormat][n.mode].test(u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Bt, Bt.exports);
var In = Bt.exports, Nt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var l = s(y);
  function s(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var i = {
    loose: !1
  }, a = ["true", "false", "1", "0"], r = [].concat(a, ["yes", "no"]);
  function u(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i;
    return (0, l.default)(n), o.loose ? r.includes(n.toLowerCase()) : a.includes(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Nt, Nt.exports);
var Rn = Nt.exports, Zt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = h;
  var l = s(y);
  function s(S) {
    return S && S.__esModule ? S : { default: S };
  }
  var i = "([A-Za-z]{3}(-[A-Za-z]{3}){0,2})", a = "(([a-zA-Z]{2,3}(-".concat(i, ")?)|([a-zA-Z]{5,8}))"), r = "([A-Za-z]{4})", u = "([A-Za-z]{2}|\\d{3})", n = "([A-Za-z0-9]{5,8}|(\\d[A-Z-a-z0-9]{3}))", o = "(\\d|[A-W]|[Y-Z]|[a-w]|[y-z])", d = "(".concat(o, "(-[A-Za-z0-9]{2,8})+)"), v = "(x(-[A-Za-z0-9]{1,8})+)", g = "((en-GB-oed)|(i-ami)|(i-bnn)|(i-default)|(i-enochian)|(i-hak)|(i-klingon)|(i-lux)|(i-mingo)|(i-navajo)|(i-pwn)|(i-tao)|(i-tay)|(i-tsu)|(sgn-BE-FR)|(sgn-BE-NL)|(sgn-CH-DE))", m = "((art-lojban)|(cel-gaulish)|(no-bok)|(no-nyn)|(zh-guoyu)|(zh-hakka)|(zh-min)|(zh-min-nan)|(zh-xiang))", E = "(".concat(g, "|").concat(m, ")"), p = "(-|_)", _ = "".concat(a, "(").concat(p).concat(r, ")?(").concat(p).concat(u, ")?(").concat(p).concat(n, ")*(").concat(p).concat(d, ")*(").concat(p).concat(v, ")?"), $ = new RegExp("(^".concat(v, "$)|(^").concat(E, "$)|(^").concat(_, "$)"));
  function h(S) {
    return (0, l.default)(S), $.test(S);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Zt, Zt.exports);
var En = Zt.exports, $e = {};
Object.defineProperty($e, "__esModule", {
  value: !0
});
$e.default = Cn;
$e.locales = void 0;
var Dn = xn(y), Ft = U;
function xn(t) {
  return t && t.__esModule ? t : { default: t };
}
function Cn(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US", l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  (0, Dn.default)(t);
  var s = t, i = l.ignore;
  if (i)
    if (i instanceof RegExp)
      s = s.replace(i, "");
    else if (typeof i == "string")
      s = s.replace(new RegExp("[".concat(i.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
    else
      throw new Error("ignore should be instance of a String or RegExp");
  if (e in Ft.alpha)
    return Ft.alpha[e].test(s);
  throw new Error("Invalid locale '".concat(e, "'"));
}
var Pn = Object.keys(Ft.alpha);
$e.locales = Pn;
var me = {};
Object.defineProperty(me, "__esModule", {
  value: !0
});
me.default = Bn;
me.locales = void 0;
var Ln = On(y), Tt = U;
function On(t) {
  return t && t.__esModule ? t : { default: t };
}
function Bn(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US", l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  (0, Ln.default)(t);
  var s = t, i = l.ignore;
  if (i)
    if (i instanceof RegExp)
      s = s.replace(i, "");
    else if (typeof i == "string")
      s = s.replace(new RegExp("[".concat(i.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), "");
    else
      throw new Error("ignore should be instance of a String or RegExp");
  if (e in Tt.alphanumeric)
    return Tt.alphanumeric[e].test(s);
  throw new Error("Invalid locale '".concat(e, "'"));
}
var Nn = Object.keys(Tt.alphanumeric);
me.locales = Nn;
var wt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var l = i(y), s = U;
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = /^[0-9]+$/;
  function r(u, n) {
    return (0, l.default)(u), n && n.no_symbols ? a.test(u) : new RegExp("^[+-]?([0-9]*[".concat((n || {}).locale ? s.decimal[n.locale] : ".", "])?[0-9]+$")).test(u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(wt, wt.exports);
var Zn = wt.exports, Ht = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = {
    AM: /^[A-Z]{2}\d{7}$/,
    // ARMENIA
    AR: /^[A-Z]{3}\d{6}$/,
    // ARGENTINA
    AT: /^[A-Z]\d{7}$/,
    // AUSTRIA
    AU: /^[A-Z]\d{7}$/,
    // AUSTRALIA
    AZ: /^[A-Z]{2,3}\d{7,8}$/,
    // AZERBAIJAN
    BE: /^[A-Z]{2}\d{6}$/,
    // BELGIUM
    BG: /^\d{9}$/,
    // BULGARIA
    BR: /^[A-Z]{2}\d{6}$/,
    // BRAZIL
    BY: /^[A-Z]{2}\d{7}$/,
    // BELARUS
    CA: /^[A-Z]{2}\d{6}$/,
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
    MX: /^\d{10,11}$/,
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
    US: /^\d{9}$/
    // UNITED STATES
  };
  function a(r, u) {
    (0, l.default)(r);
    var n = r.replace(/\s/g, "").toUpperCase();
    return u.toUpperCase() in i && i[u].test(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ht, Ht.exports);
var Fn = Ht.exports, Ut = { exports: {} }, Gt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var l = s(y);
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var i = /^(?:[-+]?(?:0|[1-9][0-9]*))$/, a = /^[-+]?[0-9]+$/;
  function r(u, n) {
    (0, l.default)(u), n = n || {};
    var o = n.hasOwnProperty("allow_leading_zeroes") && !n.allow_leading_zeroes ? i : a, d = !n.hasOwnProperty("min") || u >= n.min, v = !n.hasOwnProperty("max") || u <= n.max, g = !n.hasOwnProperty("lt") || u < n.lt, m = !n.hasOwnProperty("gt") || u > n.gt;
    return o.test(u) && d && v && g && m;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Gt, Gt.exports);
var aa = Gt.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(aa);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, l.default)(a, {
      min: 0,
      max: 65535
    });
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ut, Ut.exports);
var Tn = Ut.exports, kt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(y);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, l.default)(a), a === a.toLowerCase();
  }
  t.exports = e.default, t.exports.default = e.default;
})(kt, kt.exports);
var wn = kt.exports, Kt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(y);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, l.default)(a), a === a.toUpperCase();
  }
  t.exports = e.default, t.exports.default = e.default;
})(Kt, Kt.exports);
var Hn = Kt.exports, Wt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var l = s(y);
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var i = /^[0-9]{15}$/, a = /^\d{2}-\d{6}-\d{6}-\d{1}$/;
  function r(u, n) {
    (0, l.default)(u), n = n || {};
    var o = i;
    if (n.allow_hyphens && (o = a), !o.test(u))
      return !1;
    u = u.replace(/-/g, "");
    for (var d = 0, v = 2, g = 14, m = 0; m < g; m++) {
      var E = u.substring(g - m - 1, g - m), p = parseInt(E, 10) * v;
      p >= 10 ? d += p % 10 + 1 : d += p, v === 1 ? v += 1 : v -= 1;
    }
    var _ = (10 - d % 10) % 10;
    return _ === parseInt(u.substring(14, 15), 10);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Wt, Wt.exports);
var Un = Wt.exports, bt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[\x00-\x7F]+$/;
  function a(r) {
    return (0, l.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(bt, bt.exports);
var Gn = bt.exports, _e = {};
Object.defineProperty(_e, "__esModule", {
  value: !0
});
_e.default = Wn;
_e.fullWidth = void 0;
var kn = Kn(y);
function Kn(t) {
  return t && t.__esModule ? t : { default: t };
}
var ga = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
_e.fullWidth = ga;
function Wn(t) {
  return (0, kn.default)(t), ga.test(t);
}
var ge = {};
Object.defineProperty(ge, "__esModule", {
  value: !0
});
ge.default = Yn;
ge.halfWidth = void 0;
var bn = qn(y);
function qn(t) {
  return t && t.__esModule ? t : { default: t };
}
var Aa = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
ge.halfWidth = Aa;
function Yn(t) {
  return (0, bn.default)(t), Aa.test(t);
}
var qt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var l = a(y), s = _e, i = ge;
  function a(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function r(u) {
    return (0, l.default)(u), s.fullWidth.test(u) && i.halfWidth.test(u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(qt, qt.exports);
var Vn = qt.exports, Yt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /[^\x00-\x7F]/;
  function a(r) {
    return (0, l.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Yt, Yt.exports);
var zn = Yt.exports, Vt = { exports: {} }, zt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = l;
  function l(s, i) {
    var a = s.join("");
    return new RegExp(a, i);
  }
  t.exports = e.default, t.exports.default = e.default;
})(zt, zt.exports);
var Jn = zt.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var l = i(y), s = i(Jn);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = (0, s.default)(["^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)", "(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))", "?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$"], "i");
  function r(u) {
    return (0, l.default)(u), a.test(u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Vt, Vt.exports);
var Xn = Vt.exports, Jt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
  function a(r) {
    return (0, l.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Jt, Jt.exports);
var Qn = Jt.exports, Xt = { exports: {} }, Qt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var l = function(a, r) {
    return a.some(function(u) {
      return r === u;
    });
  }, s = l;
  e.default = s, t.exports = e.default, t.exports.default = e.default;
})(Qt, Qt.exports);
var jn = Qt.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = d;
  var l = r(V), s = r(y), i = r(jn), a = U;
  function r(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function u(v) {
    var g = new RegExp("^[-+]?([0-9]+)?(\\".concat(a.decimal[v.locale], "[0-9]{").concat(v.decimal_digits, "})").concat(v.force_decimal ? "" : "?", "$"));
    return g;
  }
  var n = {
    force_decimal: !1,
    decimal_digits: "1,",
    locale: "en-US"
  }, o = ["", "-", "+"];
  function d(v, g) {
    if ((0, s.default)(v), g = (0, l.default)(g, n), g.locale in a.decimal)
      return !(0, i.default)(o, v.replace(/ /g, "")) && u(g).test(v);
    throw new Error("Invalid locale '".concat(g.locale, "'"));
  }
  t.exports = e.default, t.exports.default = e.default;
})(Xt, Xt.exports);
var eu = Xt.exports, jt = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^(0x|0h)?[0-9A-F]+$/i;
  function a(r) {
    return (0, l.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(jt, jt.exports);
var ha = jt.exports, er = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^(0o)?[0-7]+$/i;
  function a(r) {
    return (0, l.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(er, er.exports);
var tu = er.exports, tr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = i(y), s = i(da);
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r, u) {
    return (0, l.default)(r), (0, s.default)(r) % parseInt(u, 10) === 0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(tr, tr.exports);
var ru = tr.exports, rr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
  function a(r) {
    return (0, l.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(rr, rr.exports);
var au = rr.exports, ar = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var l = s(y);
  function s(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var i = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/, a = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/, r = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)$/, u = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
  function n(o) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return (0, l.default)(o), d ? i.test(o) || a.test(o) || r.test(o) || u.test(o) : i.test(o) || a.test(o);
  }
  t.exports = e.default, t.exports.default = e.default;
})(ar, ar.exports);
var nu = ar.exports, nr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var l = s(y);
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var i = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i, a = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;
  function r(u) {
    (0, l.default)(u);
    var n = u.replace(/\s+/g, " ").replace(/\s?(hsla?\(|\)|,)\s?/ig, "$1");
    return n.indexOf(",") !== -1 ? i.test(n) : a.test(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(nr, nr.exports);
var uu = nr.exports, ur = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
  function a(r) {
    return (0, l.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(ur, ur.exports);
var iu = ur.exports, Me = {};
Object.defineProperty(Me, "__esModule", {
  value: !0
});
Me.default = cu;
Me.locales = void 0;
var lu = su(y);
function su(t) {
  return t && t.__esModule ? t : { default: t };
}
var Ue = {
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
  IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
  IL: /^(IL[0-9]{2})\d{19}$/,
  IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
  IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
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
  PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
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
  VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
  XK: /^(XK[0-9]{2})\d{16}$/
};
function fu(t) {
  var e = t.filter(function(l) {
    return !(l in Ue);
  });
  return !(e.length > 0);
}
function ou(t, e) {
  var l = t.replace(/[\s\-]+/gi, "").toUpperCase(), s = l.slice(0, 2).toUpperCase(), i = s in Ue;
  if (e.whitelist) {
    if (!fu(e.whitelist))
      return !1;
    var a = e.whitelist.includes(s);
    if (!a)
      return !1;
  }
  if (e.blacklist) {
    var r = e.blacklist.includes(s);
    if (r)
      return !1;
  }
  return i && Ue[s].test(l);
}
function du(t) {
  var e = t.replace(/[^A-Z0-9]+/gi, "").toUpperCase(), l = e.slice(4) + e.slice(0, 4), s = l.replace(/[A-Z]/g, function(a) {
    return a.charCodeAt(0) - 55;
  }), i = s.match(/\d{1,7}/g).reduce(function(a, r) {
    return Number(a + r) % 97;
  }, "");
  return i === 1;
}
function cu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return (0, lu.default)(t), ou(t, e) && du(t);
}
var vu = Object.keys(Ue);
Me.locales = vu;
var ir = { exports: {} }, Ae = {};
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
Ae.default = gu;
Ae.CountryCodes = void 0;
var pu = _u(y);
function _u(t) {
  return t && t.__esModule ? t : { default: t };
}
var Sa = /* @__PURE__ */ new Set(["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"]);
function gu(t) {
  return (0, pu.default)(t), Sa.has(t.toUpperCase());
}
var Au = Sa;
Ae.CountryCodes = Au;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var l = i(y), s = Ae;
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;
  function r(u) {
    (0, l.default)(u);
    var n = u.slice(4, 6).toUpperCase();
    return !s.CountryCodes.has(n) && n !== "XK" ? !1 : a.test(u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(ir, ir.exports);
var hu = ir.exports, lr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[a-f0-9]{32}$/;
  function a(r) {
    return (0, l.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(lr, lr.exports);
var Su = lr.exports, sr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
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
  function a(r, u) {
    (0, l.default)(r);
    var n = new RegExp("^[a-fA-F0-9]{".concat(i[u], "}$"));
    return n.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(sr, sr.exports);
var $u = sr.exports, fr = { exports: {} }, or = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var l = i(y), s = i(V);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = /[^A-Z0-9+\/=]/i, r = /^[A-Z0-9_\-]*$/i, u = {
    urlSafe: !1
  };
  function n(o, d) {
    (0, l.default)(o), d = (0, s.default)(d, u);
    var v = o.length;
    if (d.urlSafe)
      return r.test(o);
    if (v % 4 !== 0 || a.test(o))
      return !1;
    var g = o.indexOf("=");
    return g === -1 || g === v - 1 || g === v - 2 && o[v - 1] === "=";
  }
  t.exports = e.default, t.exports.default = e.default;
})(or, or.exports);
var $a = or.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = i(y), s = i($a);
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r) {
    (0, l.default)(r);
    var u = r.split("."), n = u.length;
    return n !== 3 ? !1 : u.reduce(function(o, d) {
      return o && (0, s.default)(d, {
        urlSafe: !0
      });
    }, !0);
  }
  t.exports = e.default, t.exports.default = e.default;
})(fr, fr.exports);
var mu = fr.exports, dr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var l = i(y), s = i(V);
  function i(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function a(n) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? a = function(d) {
      return typeof d;
    } : a = function(d) {
      return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
    }, a(n);
  }
  var r = {
    allow_primitives: !1
  };
  function u(n, o) {
    (0, l.default)(n);
    try {
      o = (0, s.default)(o, r);
      var d = [];
      o.allow_primitives && (d = [null, !1, !0]);
      var v = JSON.parse(n);
      return d.includes(v) || !!v && a(v) === "object";
    } catch {
    }
    return !1;
  }
  t.exports = e.default, t.exports.default = e.default;
})(dr, dr.exports);
var Mu = dr.exports, cr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var l = i(y), s = i(V);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = {
    ignore_whitespace: !1
  };
  function r(u, n) {
    return (0, l.default)(u), n = (0, s.default)(n, a), (n.ignore_whitespace ? u.trim().length : u.length) === 0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(cr, cr.exports);
var yu = cr.exports, vr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function i(r) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? i = function(n) {
      return typeof n;
    } : i = function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    }, i(r);
  }
  function a(r, u) {
    (0, l.default)(r);
    var n, o;
    i(u) === "object" ? (n = u.min || 0, o = u.max) : (n = arguments[1] || 0, o = arguments[2]);
    var d = r.match(/(\uFE0F|\uFE0E)/g) || [], v = r.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [], g = r.length - d.length - v.length;
    return g >= n && (typeof o > "u" || g <= o);
  }
  t.exports = e.default, t.exports.default = e.default;
})(vr, vr.exports);
var Iu = vr.exports, pr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = {
    1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
  };
  function a(r, u) {
    (0, l.default)(r);
    var n = i[[void 0, null].includes(u) ? "all" : u];
    return !!n && n.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(pr, pr.exports);
var Ru = pr.exports, _r = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = i(y), s = i(ha);
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r) {
    return (0, l.default)(r), (0, s.default)(r) && r.length === 24;
  }
  t.exports = e.default, t.exports.default = e.default;
})(_r, _r.exports);
var Eu = _r.exports, gr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(ta);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    var u = (r == null ? void 0 : r.comparisonDate) || r || Date().toString(), n = (0, l.default)(u), o = (0, l.default)(a);
    return !!(o && n && o > n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(gr, gr.exports);
var Du = gr.exports, Ar = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = i(y), s = i(ta);
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : String(/* @__PURE__ */ new Date());
    (0, l.default)(r);
    var n = (0, s.default)(u), o = (0, s.default)(r);
    return !!(o && n && o < n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ar, Ar.exports);
var xu = Ar.exports, hr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var l = i(y), s = i(ca);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function a(u) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? a = function(o) {
      return typeof o;
    } : a = function(o) {
      return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, a(u);
  }
  function r(u, n) {
    (0, l.default)(u);
    var o;
    if (Object.prototype.toString.call(n) === "[object Array]") {
      var d = [];
      for (o in n)
        ({}).hasOwnProperty.call(n, o) && (d[o] = (0, s.default)(n[o]));
      return d.indexOf(u) >= 0;
    } else {
      if (a(n) === "object")
        return n.hasOwnProperty(u);
      if (n && typeof n.indexOf == "function")
        return n.indexOf(u) >= 0;
    }
    return !1;
  }
  t.exports = e.default, t.exports.default = e.default;
})(hr, hr.exports);
var Cu = hr.exports, Sr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(y);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    (0, l.default)(a);
    for (var r = a.replace(/[- ]+/g, ""), u = 0, n, o, d, v = r.length - 1; v >= 0; v--)
      n = r.substring(v, v + 1), o = parseInt(n, 10), d ? (o *= 2, o >= 10 ? u += o % 10 + 1 : u += o) : u += o, d = !d;
    return !!(u % 10 === 0 && r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Sr, Sr.exports);
var ma = Sr.exports, $r = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var l = i(y), s = i(ma);
  function i(n) {
    return n && n.__esModule ? n : { default: n };
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
    var n = [];
    for (var o in a)
      a.hasOwnProperty(o) && n.push(a[o]);
    return n;
  }();
  function u(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, l.default)(n);
    var d = o.provider, v = n.replace(/[- ]+/g, "");
    if (d && d.toLowerCase() in a) {
      if (!a[d.toLowerCase()].test(v))
        return !1;
    } else {
      if (d && !(d.toLowerCase() in a))
        throw new Error("".concat(d, " is not a valid credit card provider."));
      if (!r.some(function(g) {
        return g.test(v);
      }))
        return !1;
    }
    return (0, s.default)(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})($r, $r.exports);
var Pu = $r.exports, mr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var l = i(y), s = i(aa);
  function i(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = {
    PL: function(n) {
      (0, l.default)(n);
      var o = {
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
      if (n != null && n.length === 11 && (0, s.default)(n, {
        allow_leading_zeroes: !0
      })) {
        var d = n.split("").slice(0, -1), v = d.reduce(function(E, p, _) {
          return E + Number(p) * o[_ + 1];
        }, 0), g = v % 10, m = Number(n.charAt(n.length - 1));
        if (g === 0 && m === 0 || m === 10 - g)
          return !0;
      }
      return !1;
    },
    ES: function(n) {
      (0, l.default)(n);
      var o = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/, d = {
        X: 0,
        Y: 1,
        Z: 2
      }, v = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"], g = n.trim().toUpperCase();
      if (!o.test(g))
        return !1;
      var m = g.slice(0, -1).replace(/[X,Y,Z]/g, function(E) {
        return d[E];
      });
      return g.endsWith(v[m % 23]);
    },
    FI: function(n) {
      if ((0, l.default)(n), n.length !== 11 || !n.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/))
        return !1;
      var o = "0123456789ABCDEFHJKLMNPRSTUVWXY", d = parseInt(n.slice(0, 6), 10) * 1e3 + parseInt(n.slice(7, 10), 10), v = d % 31, g = o[v];
      return g === n.slice(10, 11);
    },
    IN: function(n) {
      var o = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/, d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]], v = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]], g = n.trim();
      if (!o.test(g))
        return !1;
      var m = 0, E = g.replace(/\s/g, "").split("").map(Number).reverse();
      return E.forEach(function(p, _) {
        m = d[m][v[_ % 8][p]];
      }), m === 0;
    },
    IR: function(n) {
      if (!n.match(/^\d{10}$/) || (n = "0000".concat(n).slice(n.length - 6), parseInt(n.slice(3, 9), 10) === 0))
        return !1;
      for (var o = parseInt(n.slice(9, 10), 10), d = 0, v = 0; v < 9; v++)
        d += parseInt(n.slice(v, v + 1), 10) * (10 - v);
      return d %= 11, d < 2 && o === d || d >= 2 && o === 11 - d;
    },
    IT: function(n) {
      return n.length !== 9 || n === "CA00000AA" ? !1 : n.search(/C[A-Z][0-9]{5}[A-Z]{2}/i) > -1;
    },
    NO: function(n) {
      var o = n.trim();
      if (isNaN(Number(o)) || o.length !== 11 || o === "00000000000")
        return !1;
      var d = o.split("").map(Number), v = (11 - (3 * d[0] + 7 * d[1] + 6 * d[2] + 1 * d[3] + 8 * d[4] + 9 * d[5] + 4 * d[6] + 5 * d[7] + 2 * d[8]) % 11) % 11, g = (11 - (5 * d[0] + 4 * d[1] + 3 * d[2] + 2 * d[3] + 7 * d[4] + 6 * d[5] + 5 * d[6] + 4 * d[7] + 3 * d[8] + 2 * v) % 11) % 11;
      return !(v !== d[9] || g !== d[10]);
    },
    TH: function(n) {
      if (!n.match(/^[1-8]\d{12}$/))
        return !1;
      for (var o = 0, d = 0; d < 12; d++)
        o += parseInt(n[d], 10) * (13 - d);
      return n[12] === ((11 - o % 11) % 10).toString();
    },
    LK: function(n) {
      var o = /^[1-9]\d{8}[vx]$/i, d = /^[1-9]\d{11}$/i;
      return n.length === 10 && o.test(n) ? !0 : !!(n.length === 12 && d.test(n));
    },
    "he-IL": function(n) {
      var o = /^\d{9}$/, d = n.trim();
      if (!o.test(d))
        return !1;
      for (var v = d, g = 0, m, E = 0; E < v.length; E++)
        m = Number(v[E]) * (E % 2 + 1), g += m > 9 ? m - 9 : m;
      return g % 10 === 0;
    },
    "ar-LY": function(n) {
      var o = /^(1|2)\d{11}$/, d = n.trim();
      return !!o.test(d);
    },
    "ar-TN": function(n) {
      var o = /^\d{8}$/, d = n.trim();
      return !!o.test(d);
    },
    "zh-CN": function(n) {
      var o = [
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
      ], d = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"], v = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"], g = function(I) {
        return o.includes(I);
      }, m = function(I) {
        var C = parseInt(I.substring(0, 4), 10), O = parseInt(I.substring(4, 6), 10), P = parseInt(I.substring(6), 10), L = new Date(C, O - 1, P);
        return L > /* @__PURE__ */ new Date() ? !1 : L.getFullYear() === C && L.getMonth() === O - 1 && L.getDate() === P;
      }, E = function(I) {
        for (var C = I.substring(0, 17), O = 0, P = 0; P < 17; P++)
          O += parseInt(C.charAt(P), 10) * parseInt(d[P], 10);
        var L = O % 11;
        return v[L];
      }, p = function(I) {
        return E(I) === I.charAt(17).toUpperCase();
      }, _ = function(I) {
        var C = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(I);
        if (!C)
          return !1;
        var O = I.substring(0, 2);
        if (C = g(O), !C)
          return !1;
        var P = "19".concat(I.substring(6, 12));
        return C = m(P), !!C;
      }, $ = function(I) {
        var C = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(I);
        if (!C)
          return !1;
        var O = I.substring(0, 2);
        if (C = g(O), !C)
          return !1;
        var P = I.substring(6, 14);
        return C = m(P), C ? p(I) : !1;
      }, h = function(I) {
        var C = /^\d{15}|(\d{17}(\d|x|X))$/.test(I);
        return C ? I.length === 15 ? _(I) : $(I) : !1;
      };
      return h(n);
    },
    "zh-HK": function(n) {
      n = n.trim();
      var o = /^[A-Z]{1,2}[0-9]{6}((\([0-9A]\))|(\[[0-9A]\])|([0-9A]))$/, d = /^[0-9]$/;
      if (n = n.toUpperCase(), !o.test(n))
        return !1;
      n = n.replace(/\[|\]|\(|\)/g, ""), n.length === 8 && (n = "3".concat(n));
      for (var v = 0, g = 0; g <= 7; g++) {
        var m = void 0;
        d.test(n[g]) ? m = n[g] : m = (n[g].charCodeAt(0) - 55) % 11, v += m * (9 - g);
      }
      v %= 11;
      var E;
      return v === 0 ? E = "0" : v === 1 ? E = "A" : E = String(11 - v), E === n[n.length - 1];
    },
    "zh-TW": function(n) {
      var o = {
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
      }, d = n.trim().toUpperCase();
      return /^[A-Z][0-9]{9}$/.test(d) ? Array.from(d).reduce(function(v, g, m) {
        if (m === 0) {
          var E = o[g];
          return E % 10 * 9 + Math.floor(E / 10);
        }
        return m === 9 ? (10 - v % 10 - Number(g)) % 10 === 0 : v + Number(g) * (9 - m);
      }, 0) : !1;
    }
  };
  function r(u, n) {
    if ((0, l.default)(u), n in a)
      return a[n](u);
    if (n === "any") {
      for (var o in a)
        if (a.hasOwnProperty(o)) {
          var d = a[o];
          if (d(u))
            return !0;
        }
      return !1;
    }
    throw new Error("Invalid locale '".concat(n, "'"));
  }
  t.exports = e.default, t.exports.default = e.default;
})(mr, mr.exports);
var Lu = mr.exports, Mr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = o;
  var l = s(y);
  function s(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var i = 8, a = 14, r = /^(\d{8}|\d{13}|\d{14})$/;
  function u(d, v) {
    return d === i || d === a ? v % 2 === 0 ? 3 : 1 : v % 2 === 0 ? 1 : 3;
  }
  function n(d) {
    var v = d.slice(0, -1).split("").map(function(m, E) {
      return Number(m) * u(d.length, E);
    }).reduce(function(m, E) {
      return m + E;
    }, 0), g = 10 - v % 10;
    return g < 10 ? g : 0;
  }
  function o(d) {
    (0, l.default)(d);
    var v = Number(d.slice(-1));
    return r.test(d) && v === n(d);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Mr, Mr.exports);
var Ou = Mr.exports, yr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;
  function a(r) {
    if ((0, l.default)(r), !i.test(r))
      return !1;
    for (var u = !0, n = 0, o = r.length - 2; o >= 0; o--)
      if (r[o] >= "A" && r[o] <= "Z")
        for (var d = r[o].charCodeAt(0) - 55, v = d % 10, g = Math.trunc(d / 10), m = 0, E = [v, g]; m < E.length; m++) {
          var p = E[m];
          u ? p >= 5 ? n += 1 + (p - 5) * 2 : n += p * 2 : n += p, u = !u;
        }
      else {
        var _ = r[o].charCodeAt(0) - "0".charCodeAt(0);
        u ? _ >= 5 ? n += 1 + (_ - 5) * 2 : n += _ * 2 : n += _, u = !u;
      }
    var $ = Math.trunc((n + 9) / 10) * 10 - n;
    return +r[r.length - 1] === $;
  }
  t.exports = e.default, t.exports.default = e.default;
})(yr, yr.exports);
var Bu = yr.exports, Ir = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var l = s(y);
  function s(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var i = /^(?:[0-9]{9}X|[0-9]{10})$/, a = /^(?:[0-9]{13})$/, r = [1, 3];
  function u(n, o) {
    (0, l.default)(n);
    var d = String((o == null ? void 0 : o.version) || o);
    if (!(o != null && o.version || o))
      return u(n, {
        version: 10
      }) || u(n, {
        version: 13
      });
    var v = n.replace(/[\s-]+/g, ""), g = 0;
    if (d === "10") {
      if (!i.test(v))
        return !1;
      for (var m = 0; m < d - 1; m++)
        g += (m + 1) * v.charAt(m);
      if (v.charAt(9) === "X" ? g += 10 * 10 : g += 10 * v.charAt(9), g % 11 === 0)
        return !0;
    } else if (d === "13") {
      if (!a.test(v))
        return !1;
      for (var E = 0; E < 12; E++)
        g += r[E % 2] * v.charAt(E);
      if (v.charAt(12) - (10 - g % 10) % 10 === 0)
        return !0;
    }
    return !1;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ir, Ir.exports);
var Nu = Ir.exports, Rr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = "^\\d{4}-?\\d{3}[\\dX]$";
  function a(r) {
    var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, l.default)(r);
    var n = i;
    if (n = u.require_hyphen ? n.replace("?", "") : n, n = u.case_sensitive ? new RegExp(n) : new RegExp(n, "i"), !n.test(r))
      return !1;
    for (var o = r.replace("-", "").toUpperCase(), d = 0, v = 0; v < o.length; v++) {
      var g = o[v];
      d += (g === "X" ? 10 : +g) * (8 - v);
    }
    return d % 11 === 0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Rr, Rr.exports);
var Zu = Rr.exports, Er = { exports: {} }, fe = {};
Object.defineProperty(fe, "__esModule", {
  value: !0
});
fe.iso7064Check = Fu;
fe.luhnCheck = Tu;
fe.reverseMultiplyAndSum = wu;
fe.verhoeffCheck = Hu;
function Fu(t) {
  for (var e = 10, l = 0; l < t.length - 1; l++)
    e = (parseInt(t[l], 10) + e) % 10 === 0 ? 10 * 2 % 11 : (parseInt(t[l], 10) + e) % 10 * 2 % 11;
  return e = e === 1 ? 0 : 11 - e, e === parseInt(t[10], 10);
}
function Tu(t) {
  for (var e = 0, l = !1, s = t.length - 1; s >= 0; s--) {
    if (l) {
      var i = parseInt(t[s], 10) * 2;
      i > 9 ? e += i.toString().split("").map(function(a) {
        return parseInt(a, 10);
      }).reduce(function(a, r) {
        return a + r;
      }, 0) : e += i;
    } else
      e += parseInt(t[s], 10);
    l = !l;
  }
  return e % 10 === 0;
}
function wu(t, e) {
  for (var l = 0, s = 0; s < t.length; s++)
    l += t[s] * (e - s);
  return l;
}
function Hu(t) {
  for (var e = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]], l = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]], s = t.split("").reverse().join(""), i = 0, a = 0; a < s.length; a++)
    i = e[i][l[a % 8][parseInt(s[a], 10)]];
  return i === 0;
}
(function(t, e) {
  function l(f) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? l = function(A) {
      return typeof A;
    } : l = function(A) {
      return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
    }, l(f);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = je;
  var s = n(y), i = u(fe), a = n(_a);
  function r() {
    if (typeof WeakMap != "function")
      return null;
    var f = /* @__PURE__ */ new WeakMap();
    return r = function() {
      return f;
    }, f;
  }
  function u(f) {
    if (f && f.__esModule)
      return f;
    if (f === null || l(f) !== "object" && typeof f != "function")
      return { default: f };
    var c = r();
    if (c && c.has(f))
      return c.get(f);
    var A = {}, D = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var R in f)
      if (Object.prototype.hasOwnProperty.call(f, R)) {
        var x = D ? Object.getOwnPropertyDescriptor(f, R) : null;
        x && (x.get || x.set) ? Object.defineProperty(A, R, x) : A[R] = f[R];
      }
    return A.default = f, c && c.set(f, A), A;
  }
  function n(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function o(f) {
    return m(f) || g(f) || v(f) || d();
  }
  function d() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function v(f, c) {
    if (f) {
      if (typeof f == "string")
        return E(f, c);
      var A = Object.prototype.toString.call(f).slice(8, -1);
      if (A === "Object" && f.constructor && (A = f.constructor.name), A === "Map" || A === "Set")
        return Array.from(f);
      if (A === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))
        return E(f, c);
    }
  }
  function g(f) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(f))
      return Array.from(f);
  }
  function m(f) {
    if (Array.isArray(f))
      return E(f);
  }
  function E(f, c) {
    (c == null || c > f.length) && (c = f.length);
    for (var A = 0, D = new Array(c); A < c; A++)
      D[A] = f[A];
    return D;
  }
  function p(f) {
    var c = f.slice(0, 2), A = parseInt(f.slice(2, 4), 10);
    A > 40 ? (A -= 40, c = "20".concat(c)) : A > 20 ? (A -= 20, c = "18".concat(c)) : c = "19".concat(c), A < 10 && (A = "0".concat(A));
    var D = "".concat(c, "/").concat(A, "/").concat(f.slice(4, 6));
    if (!(0, a.default)(D, "YYYY/MM/DD"))
      return !1;
    for (var R = f.split("").map(function(T) {
      return parseInt(T, 10);
    }), x = [2, 4, 8, 5, 10, 9, 7, 3, 6], B = 0, N = 0; N < x.length; N++)
      B += R[N] * x[N];
    return B = B % 11 === 10 ? 0 : B % 11, B === R[9];
  }
  function _(f) {
    var c = f.split(""), A = c.filter(function(R, x) {
      return x % 2;
    }).map(function(R) {
      return Number(R) * 2;
    }).join("").split(""), D = c.filter(function(R, x) {
      return !(x % 2);
    }).concat(A).map(function(R) {
      return Number(R);
    }).reduce(function(R, x) {
      return R + x;
    });
    return D % 10 === 0;
  }
  function $(f) {
    f = f.replace(/\W/, "");
    var c = parseInt(f.slice(0, 2), 10);
    if (f.length === 10)
      c < 54 ? c = "20".concat(c) : c = "19".concat(c);
    else {
      if (f.slice(6) === "000")
        return !1;
      if (c < 54)
        c = "19".concat(c);
      else
        return !1;
    }
    c.length === 3 && (c = [c.slice(0, 2), "0", c.slice(2)].join(""));
    var A = parseInt(f.slice(2, 4), 10);
    if (A > 50 && (A -= 50), A > 20) {
      if (parseInt(c, 10) < 2004)
        return !1;
      A -= 20;
    }
    A < 10 && (A = "0".concat(A));
    var D = "".concat(c, "/").concat(A, "/").concat(f.slice(4, 6));
    if (!(0, a.default)(D, "YYYY/MM/DD"))
      return !1;
    if (f.length === 10 && parseInt(f, 10) % 11 !== 0) {
      var R = parseInt(f.slice(0, 9), 10) % 11;
      if (parseInt(c, 10) < 1986 && R === 10) {
        if (parseInt(f.slice(9), 10) !== 0)
          return !1;
      } else
        return !1;
    }
    return !0;
  }
  function h(f) {
    return i.luhnCheck(f);
  }
  function S(f) {
    for (var c = f.split("").map(function(T) {
      return parseInt(T, 10);
    }), A = [], D = 0; D < c.length - 1; D++) {
      A.push("");
      for (var R = 0; R < c.length - 1; R++)
        c[D] === c[R] && (A[D] += R);
    }
    if (A = A.filter(function(T) {
      return T.length > 1;
    }), A.length !== 2 && A.length !== 3)
      return !1;
    if (A[0].length === 3) {
      for (var x = A[0].split("").map(function(T) {
        return parseInt(T, 10);
      }), B = 0, N = 0; N < x.length - 1; N++)
        x[N] + 1 === x[N + 1] && (B += 1);
      if (B === 2)
        return !1;
    }
    return i.iso7064Check(f);
  }
  function I(f) {
    f = f.replace(/\W/, "");
    var c = parseInt(f.slice(4, 6), 10), A = f.slice(6, 7);
    switch (A) {
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
    var D = "".concat(c, "/").concat(f.slice(2, 4), "/").concat(f.slice(0, 2));
    if (!(0, a.default)(D, "YYYY/MM/DD"))
      return !1;
    for (var R = f.split("").map(function(T) {
      return parseInt(T, 10);
    }), x = 0, B = 4, N = 0; N < 9; N++)
      x += R[N] * B, B -= 1, B === 1 && (B = 7);
    return x %= 11, x === 1 ? !1 : x === 0 ? R[9] === 0 : R[9] === 11 - x;
  }
  function C(f) {
    for (var c = f.slice(0, 8).split("").map(function(x) {
      return parseInt(x, 10);
    }), A = 0, D = 1; D < c.length; D += 2)
      A += c[D];
    for (var R = 0; R < c.length; R += 2)
      c[R] < 2 ? A += 1 - c[R] : (A += 2 * (c[R] - 2) + 5, c[R] > 4 && (A += 2));
    return String.fromCharCode(A % 26 + 65) === f.charAt(8);
  }
  function O(f) {
    for (var c = f.split("").map(function(R) {
      return parseInt(R, 10);
    }), A = 0, D = 0; D < 8; D++)
      A += c[D] * Math.pow(2, 8 - D);
    return A % 11 % 10 === c[8];
  }
  function P(f) {
    var c = i.reverseMultiplyAndSum(f.split("").slice(0, 7).map(function(A) {
      return parseInt(A, 10);
    }), 8);
    return f.length === 9 && f[8] !== "W" && (c += (f[8].charCodeAt(0) - 64) * 9), c %= 23, c === 0 ? f[7].toUpperCase() === "W" : f[7].toUpperCase() === String.fromCharCode(64 + c);
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
  function Z() {
    var f = [];
    for (var c in L)
      L.hasOwnProperty(c) && f.push.apply(f, o(L[c]));
    return f;
  }
  function F(f) {
    return Z().indexOf(f.slice(0, 2)) !== -1;
  }
  function k(f) {
    var c = f.toUpperCase().split("");
    if (isNaN(parseInt(c[0], 10)) && c.length > 1) {
      var A = 0;
      switch (c[0]) {
        case "Y":
          A = 1;
          break;
        case "Z":
          A = 2;
          break;
      }
      c.splice(0, 1, A);
    } else
      for (; c.length < 9; )
        c.unshift(0);
    var D = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    c = c.join("");
    var R = parseInt(c.slice(0, 8), 10) % 23;
    return c[8] === D[R];
  }
  function j(f) {
    var c = f.slice(1, 3), A = f.slice(0, 1);
    switch (A) {
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
    var D = "".concat(c, "/").concat(f.slice(3, 5), "/").concat(f.slice(5, 7));
    if (!(0, a.default)(D, "YYYY/MM/DD"))
      return !1;
    for (var R = f.split("").map(function(H) {
      return parseInt(H, 10);
    }), x = 0, B = 1, N = 0; N < 10; N++)
      x += R[N] * B, B += 1, B === 10 && (B = 1);
    if (x % 11 === 10) {
      x = 0, B = 3;
      for (var T = 0; T < 10; T++)
        x += R[T] * B, B += 1, B === 10 && (B = 1);
      if (x % 11 === 10)
        return R[10] === 0;
    }
    return x % 11 === R[10];
  }
  function W(f) {
    var c = f.slice(4, 6), A = f.slice(6, 7);
    switch (A) {
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
    var D = "".concat(c, "/").concat(f.slice(2, 4), "/").concat(f.slice(0, 2));
    if (!(0, a.default)(D, "YYYY/MM/DD"))
      return !1;
    var R = parseInt(f.slice(0, 6) + f.slice(7, 10), 10) % 31;
    if (R < 10)
      return R === parseInt(f.slice(10), 10);
    R -= 10;
    var x = ["A", "B", "C", "D", "E", "F", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y"];
    return x[R] === f.slice(10);
  }
  function le(f) {
    if (f.slice(2, 4) !== "00" || f.slice(4, 6) !== "00") {
      var c = "".concat(f.slice(0, 2), "/").concat(f.slice(2, 4), "/").concat(f.slice(4, 6));
      if (!(0, a.default)(c, "YY/MM/DD"))
        return !1;
    }
    var A = 97 - parseInt(f.slice(0, 9), 10) % 97, D = parseInt(f.slice(9, 11), 10);
    return !(A !== D && (A = 97 - parseInt("2".concat(f.slice(0, 9)), 10) % 97, A !== D));
  }
  function ne(f) {
    f = f.replace(/\s/g, "");
    var c = parseInt(f.slice(0, 10), 10) % 511, A = parseInt(f.slice(10, 13), 10);
    return c === A;
  }
  function ee(f) {
    var c = "".concat(f.slice(0, 4), "/").concat(f.slice(4, 6), "/").concat(f.slice(6, 8));
    return !(0, a.default)(c, "YYYY/MM/DD") || !i.luhnCheck(f.slice(0, 12)) ? !1 : i.verhoeffCheck("".concat(f.slice(0, 11)).concat(f[12]));
  }
  function ke(f) {
    return i.iso7064Check(f);
  }
  function Ke(f) {
    for (var c = f.split("").map(function(R) {
      return parseInt(R, 10);
    }), A = 8, D = 1; D < 9; D++)
      A += c[D] * (D + 1);
    return A % 11 === c[9];
  }
  function xe(f) {
    for (var c = !1, A = !1, D = 0; D < 3; D++)
      if (!c && /[AEIOU]/.test(f[D]))
        c = !0;
      else if (!A && c && f[D] === "X")
        A = !0;
      else if (D > 0 && (c && !A && !/[AEIOU]/.test(f[D]) || A && !/X/.test(f[D])))
        return !1;
    return !0;
  }
  function Ce(f) {
    var c = f.toUpperCase().split("");
    if (!xe(c.slice(0, 3)) || !xe(c.slice(3, 6)))
      return !1;
    for (var A = [6, 7, 9, 10, 12, 13, 14], D = {
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
    }, R = 0, x = A; R < x.length; R++) {
      var B = x[R];
      c[B] in D && c.splice(B, 1, D[c[B]]);
    }
    var N = {
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
    }, T = N[c[8]], H = parseInt(c[9] + c[10], 10);
    H > 40 && (H -= 40), H < 10 && (H = "0".concat(H));
    var se = "".concat(c[6]).concat(c[7], "/").concat(T, "/").concat(H);
    if (!(0, a.default)(se, "YY/MM/DD"))
      return !1;
    for (var ae = 0, re = 1; re < c.length - 1; re += 2) {
      var he = parseInt(c[re], 10);
      isNaN(he) && (he = c[re].charCodeAt(0) - 65), ae += he;
    }
    for (var Oe = {
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
    }, ue = 0; ue < c.length - 1; ue += 2) {
      var de = 0;
      if (c[ue] in Oe)
        de = Oe[c[ue]];
      else {
        var Be = parseInt(c[ue], 10);
        de = 2 * Be + 1, Be > 4 && (de += 2);
      }
      ae += de;
    }
    return String.fromCharCode(65 + ae % 26) === c[15];
  }
  function We(f) {
    f = f.replace(/\W/, "");
    var c = f.slice(0, 2);
    if (c !== "32") {
      var A = f.slice(2, 4);
      if (A !== "00") {
        var D = f.slice(4, 6);
        switch (f[6]) {
          case "0":
            D = "18".concat(D);
            break;
          case "1":
            D = "19".concat(D);
            break;
          default:
            D = "20".concat(D);
            break;
        }
        var R = "".concat(D, "/").concat(f.slice(2, 4), "/").concat(c);
        if (!(0, a.default)(R, "YYYY/MM/DD"))
          return !1;
      }
      for (var x = 1101, B = [1, 6, 3, 7, 9, 10, 5, 8, 4, 2], N = 0; N < f.length - 1; N++)
        x -= parseInt(f[N], 10) * B[N];
      return parseInt(f[10], 10) === x % 11;
    }
    return !0;
  }
  function be(f) {
    if (f.length !== 9) {
      for (var c = f.toUpperCase().split(""); c.length < 8; )
        c.unshift(0);
      switch (f[7]) {
        case "A":
        case "P":
          if (parseInt(c[6], 10) === 0)
            return !1;
          break;
        default: {
          var A = parseInt(c.join("").slice(0, 5), 10);
          if (A > 32e3)
            return !1;
          var D = parseInt(c.join("").slice(5, 7), 10);
          if (A === D)
            return !1;
        }
      }
    }
    return !0;
  }
  function qe(f) {
    return i.reverseMultiplyAndSum(f.split("").slice(0, 8).map(function(c) {
      return parseInt(c, 10);
    }), 9) % 11 === parseInt(f[8], 10);
  }
  function Ye(f) {
    if (f.length === 10) {
      for (var c = [6, 5, 7, 2, 3, 4, 5, 6, 7], A = 0, D = 0; D < c.length; D++)
        A += parseInt(f[D], 10) * c[D];
      return A %= 11, A === 10 ? !1 : A === parseInt(f[9], 10);
    }
    var R = f.slice(0, 2), x = parseInt(f.slice(2, 4), 10);
    x > 80 ? (R = "18".concat(R), x -= 80) : x > 60 ? (R = "22".concat(R), x -= 60) : x > 40 ? (R = "21".concat(R), x -= 40) : x > 20 ? (R = "20".concat(R), x -= 20) : R = "19".concat(R), x < 10 && (x = "0".concat(x));
    var B = "".concat(R, "/").concat(x, "/").concat(f.slice(4, 6));
    if (!(0, a.default)(B, "YYYY/MM/DD"))
      return !1;
    for (var N = 0, T = 1, H = 0; H < f.length - 1; H++)
      N += parseInt(f[H], 10) * T % 10, T += 2, T > 10 ? T = 1 : T === 5 && (T += 2);
    return N = 10 - N % 10, N === parseInt(f[10], 10);
  }
  function Ve(f) {
    if (f.length === 11) {
      var c, A;
      if (c = 0, // Reject known invalid CPFs
      f === "11111111111" || f === "22222222222" || f === "33333333333" || f === "44444444444" || f === "55555555555" || f === "66666666666" || f === "77777777777" || f === "88888888888" || f === "99999999999" || f === "00000000000")
        return !1;
      for (var D = 1; D <= 9; D++)
        c += parseInt(f.substring(D - 1, D), 10) * (11 - D);
      if (A = c * 10 % 11, A === 10 && (A = 0), A !== parseInt(f.substring(9, 10), 10))
        return !1;
      c = 0;
      for (var R = 1; R <= 10; R++)
        c += parseInt(f.substring(R - 1, R), 10) * (12 - R);
      return A = c * 10 % 11, A === 10 && (A = 0), A === parseInt(f.substring(10, 11), 10);
    }
    if (
      // Reject know invalid CNPJs
      f === "00000000000000" || f === "11111111111111" || f === "22222222222222" || f === "33333333333333" || f === "44444444444444" || f === "55555555555555" || f === "66666666666666" || f === "77777777777777" || f === "88888888888888" || f === "99999999999999"
    )
      return !1;
    for (var x = f.length - 2, B = f.substring(0, x), N = f.substring(x), T = 0, H = x - 7, se = x; se >= 1; se--)
      T += B.charAt(x - se) * H, H -= 1, H < 2 && (H = 9);
    var ae = T % 11 < 2 ? 0 : 11 - T % 11;
    if (ae !== parseInt(N.charAt(0), 10))
      return !1;
    x += 1, B = f.substring(0, x), T = 0, H = x - 7;
    for (var re = x; re >= 1; re--)
      T += B.charAt(x - re) * H, H -= 1, H < 2 && (H = 9);
    return ae = T % 11 < 2 ? 0 : 11 - T % 11, ae === parseInt(N.charAt(1), 10);
  }
  function ze(f) {
    var c = 11 - i.reverseMultiplyAndSum(f.split("").slice(0, 8).map(function(A) {
      return parseInt(A, 10);
    }), 9) % 11;
    return c > 9 ? parseInt(f[8], 10) === 0 : c === parseInt(f[8], 10);
  }
  function Je(f) {
    if (f.slice(0, 4) !== "9000") {
      var c = f.slice(1, 3);
      switch (f[0]) {
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
      var A = "".concat(c, "/").concat(f.slice(3, 5), "/").concat(f.slice(5, 7));
      if (A.length === 8) {
        if (!(0, a.default)(A, "YY/MM/DD"))
          return !1;
      } else if (!(0, a.default)(A, "YYYY/MM/DD"))
        return !1;
      for (var D = f.split("").map(function(N) {
        return parseInt(N, 10);
      }), R = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9], x = 0, B = 0; B < R.length; B++)
        x += D[B] * R[B];
      return x % 11 === 10 ? D[12] === 1 : D[12] === x % 11;
    }
    return !0;
  }
  function Xe(f) {
    if (f.length === 9) {
      if (f = f.replace(/\W/, ""), f.slice(6) === "000")
        return !1;
      var c = parseInt(f.slice(0, 2), 10);
      if (c > 53)
        return !1;
      c < 10 ? c = "190".concat(c) : c = "19".concat(c);
      var A = parseInt(f.slice(2, 4), 10);
      A > 50 && (A -= 50), A < 10 && (A = "0".concat(A));
      var D = "".concat(c, "/").concat(A, "/").concat(f.slice(4, 6));
      if (!(0, a.default)(D, "YYYY/MM/DD"))
        return !1;
    }
    return !0;
  }
  function Pe(f) {
    var c = 11 - i.reverseMultiplyAndSum(f.split("").slice(0, 7).map(function(A) {
      return parseInt(A, 10);
    }), 8) % 11;
    return c === 10 ? parseInt(f[7], 10) === 0 : c === parseInt(f[7], 10);
  }
  function Qe(f) {
    var c = f.slice(0);
    f.length > 11 && (c = c.slice(2));
    var A = "", D = c.slice(2, 4), R = parseInt(c.slice(4, 6), 10);
    if (f.length > 11)
      A = f.slice(0, 4);
    else if (A = f.slice(0, 2), f.length === 11 && R < 60) {
      var x = (/* @__PURE__ */ new Date()).getFullYear().toString(), B = parseInt(x.slice(0, 2), 10);
      if (x = parseInt(x, 10), f[6] === "-")
        parseInt("".concat(B).concat(A), 10) > x ? A = "".concat(B - 1).concat(A) : A = "".concat(B).concat(A);
      else if (A = "".concat(B - 1).concat(A), x - parseInt(A, 10) < 100)
        return !1;
    }
    R > 60 && (R -= 60), R < 10 && (R = "0".concat(R));
    var N = "".concat(A, "/").concat(D, "/").concat(R);
    if (N.length === 8) {
      if (!(0, a.default)(N, "YY/MM/DD"))
        return !1;
    } else if (!(0, a.default)(N, "YYYY/MM/DD"))
      return !1;
    return i.luhnCheck(f.replace(/\W/, ""));
  }
  var J = {
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
    "pt-BR": /(?:^\d{11}$)|(?:^\d{14}$)/,
    "pt-PT": /^\d{9}$/,
    "ro-RO": /^\d{13}$/,
    "sk-SK": /^\d{6}\/{0,1}\d{3,4}$/,
    "sl-SI": /^[1-9]\d{7}$/,
    "sv-SE": /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/
  };
  J["lb-LU"] = J["fr-LU"], J["lt-LT"] = J["et-EE"], J["nl-BE"] = J["fr-BE"], J["fr-CA"] = J["en-CA"];
  var X = {
    "bg-BG": p,
    "cs-CZ": $,
    "de-AT": h,
    "de-DE": S,
    "dk-DK": I,
    "el-CY": C,
    "el-GR": O,
    "en-CA": _,
    "en-IE": P,
    "en-US": F,
    "es-ES": k,
    "et-EE": j,
    "fi-FI": W,
    "fr-BE": le,
    "fr-FR": ne,
    "fr-LU": ee,
    "hr-HR": ke,
    "hu-HU": Ke,
    "it-IT": Ce,
    "lv-LV": We,
    "mt-MT": be,
    "nl-NL": qe,
    "pl-PL": Ye,
    "pt-BR": Ve,
    "pt-PT": ze,
    "ro-RO": Je,
    "sk-SK": Xe,
    "sl-SI": Pe,
    "sv-SE": Qe
  };
  X["lb-LU"] = X["fr-LU"], X["lt-LT"] = X["et-EE"], X["nl-BE"] = X["fr-BE"], X["fr-CA"] = X["en-CA"];
  var Le = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g, oe = {
    "de-AT": Le,
    "de-DE": /[\/\\]/g,
    "fr-BE": Le
  };
  oe["nl-BE"] = oe["fr-BE"];
  function je(f) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "en-US";
    (0, s.default)(f);
    var A = f.slice(0);
    if (c in J)
      return c in oe && (A = A.replace(oe[c], "")), J[c].test(A) ? c in X ? X[c](A) : !0 : !1;
    throw new Error("Invalid locale '".concat(c, "'"));
  }
  t.exports = e.default, t.exports.default = e.default;
})(Er, Er.exports);
var Uu = Er.exports, ye = {};
Object.defineProperty(ye, "__esModule", {
  value: !0
});
ye.default = Ku;
ye.locales = void 0;
var Gu = ku(y);
function ku(t) {
  return t && t.__esModule ? t : { default: t };
}
var G = {
  "am-AM": /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,
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
  "ar-OM": /^((\+|00)968)?(9[1-9])\d{6}$/,
  "ar-PS": /^(\+?970|0)5[6|9](\d{7})$/,
  "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
  "ar-SD": /^((\+?249)|0)?(9[012369]|1[012])\d{7}$/,
  "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
  "ar-TN": /^(\+?216)?[2459]\d{7}$/,
  "az-AZ": /^(\+994|0)(10|5[015]|7[07]|99)\d{7}$/,
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
  "el-CY": /^(\+?357?)?(9(9|6)\d{6})$/,
  "en-AI": /^(\+?1|0)264(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/,
  "en-AU": /^(\+?61|0)4\d{8}$/,
  "en-AG": /^(?:\+1|1)268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
  "en-BM": /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}$))/,
  "en-BS": /^(\+?1[-\s]?|0)?\(?242\)?[-\s]?\d{3}[-\s]?\d{4}$/,
  "en-GB": /^(\+?44|0)7\d{9}$/,
  "en-GG": /^(\+?44|0)1481\d{6}$/,
  "en-GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,
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
  "en-ZM": /^(\+?26)?09[567]\d{7}$/,
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
  "ky-KG": /^(\+?7\s?\+?7|0)\s?\d{2}\s?\d{3}\s?\d{4}$/,
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
  "pt-AO": /^(\+244)\d{9}$/,
  "ro-MD": /^(\+?373|0)((6(0|1|2|6|7|8|9))|(7(6|7|8|9)))\d{6}$/,
  "ro-RO": /^(\+?40|0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,
  "ru-RU": /^(\+?7|8)?9\d{9}$/,
  "si-LK": /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
  "sl-SI": /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
  "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  "so-SO": /^(\+?252|0)((6[0-9])\d{7}|(7[1-9])\d{7})$/,
  "sq-AL": /^(\+355|0)6[789]\d{6}$/,
  "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
  "sv-SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
  "tg-TJ": /^(\+?992)?[5][5]\d{7}$/,
  "th-TH": /^(\+66|66|0)\d{9}$/,
  "tr-TR": /^(\+?90|0)?5\d{9}$/,
  "tk-TM": /^(\+993|993|8)\d{8}$/,
  "uk-UA": /^(\+?38|8)?0\d{9}$/,
  "uz-UZ": /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
  "vi-VN": /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
  "zh-CN": /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
  "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
  "dz-BT": /^(\+?975|0)?(17|16|77|02)\d{6}$/,
  "ar-YE": /^(((\+|00)9677|0?7)[0137]\d{7}|((\+|00)967|0)[1-7]\d{6})$/,
  "ar-EH": /^(\+?212|0)[\s\-]?(5288|5289)[\s\-]?\d{5}$/,
  "fa-AF": /^(\+93|0)?(2{1}[0-8]{1}|[3-5]{1}[0-4]{1})(\d{7})$/
};
G["en-CA"] = G["en-US"];
G["fr-CA"] = G["en-CA"];
G["fr-BE"] = G["nl-BE"];
G["zh-HK"] = G["en-HK"];
G["zh-MO"] = G["en-MO"];
G["ga-IE"] = G["en-IE"];
G["fr-CH"] = G["de-CH"];
G["it-CH"] = G["fr-CH"];
function Ku(t, e, l) {
  if ((0, Gu.default)(t), l && l.strictMode && !t.startsWith("+"))
    return !1;
  if (Array.isArray(e))
    return e.some(function(a) {
      if (G.hasOwnProperty(a)) {
        var r = G[a];
        if (r.test(t))
          return !0;
      }
      return !1;
    });
  if (e in G)
    return G[e].test(t);
  if (!e || e === "any") {
    for (var s in G)
      if (G.hasOwnProperty(s)) {
        var i = G[s];
        if (i.test(t))
          return !0;
      }
    return !1;
  }
  throw new Error("Invalid locale '".concat(e, "'"));
}
var Wu = Object.keys(G);
ye.locales = Wu;
var Dr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^(0x)[0-9a-f]{40}$/i;
  function a(r) {
    return (0, l.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Dr, Dr.exports);
var bu = Dr.exports, xr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var l = i(V), s = i(y);
  function i(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function a(n) {
    var o = "\\d{".concat(n.digits_after_decimal[0], "}");
    n.digits_after_decimal.forEach(function(h, S) {
      S !== 0 && (o = "".concat(o, "|\\d{").concat(h, "}"));
    });
    var d = "(".concat(n.symbol.replace(/\W/, function(h) {
      return "\\".concat(h);
    }), ")").concat(n.require_symbol ? "" : "?"), v = "-?", g = "[1-9]\\d*", m = "[1-9]\\d{0,2}(\\".concat(n.thousands_separator, "\\d{3})*"), E = ["0", g, m], p = "(".concat(E.join("|"), ")?"), _ = "(\\".concat(n.decimal_separator, "(").concat(o, "))").concat(n.require_decimal ? "" : "?"), $ = p + (n.allow_decimal || n.require_decimal ? _ : "");
    return n.allow_negatives && !n.parens_for_negatives && (n.negative_sign_after_digits ? $ += v : n.negative_sign_before_digits && ($ = v + $)), n.allow_negative_sign_placeholder ? $ = "( (?!\\-))?".concat($) : n.allow_space_after_symbol ? $ = " ?".concat($) : n.allow_space_after_digits && ($ += "( (?!$))?"), n.symbol_after_digits ? $ += d : $ = d + $, n.allow_negatives && (n.parens_for_negatives ? $ = "(\\(".concat($, "\\)|").concat($, ")") : n.negative_sign_before_digits || n.negative_sign_after_digits || ($ = v + $)), new RegExp("^(?!-? )(?=.*\\d)".concat($, "$"));
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
  function u(n, o) {
    return (0, s.default)(n), o = (0, l.default)(o, r), a(o).test(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(xr, xr.exports);
var qu = xr.exports, Cr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var l = s(y);
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var i = /^(bc1)[a-z0-9]{25,39}$/, a = /^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;
  function r(u) {
    return (0, l.default)(u), i.test(u) || a.test(u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Cr, Cr.exports);
var Yu = Cr.exports, Ie = {};
Object.defineProperty(Ie, "__esModule", {
  value: !0
});
Ie.isISO6346 = Ma;
Ie.isFreightContainerID = void 0;
var Vu = zu(y);
function zu(t) {
  return t && t.__esModule ? t : { default: t };
}
var Ju = /^[A-Z]{3}(U[0-9]{7})|([J,Z][0-9]{6,7})$/, Xu = /^[0-9]$/;
function Ma(t) {
  if ((0, Vu.default)(t), t = t.toUpperCase(), !Ju.test(t))
    return !1;
  if (t.length === 11) {
    for (var e = 0, l = 0; l < t.length - 1; l++)
      if (Xu.test(t[l]))
        e += t[l] * Math.pow(2, l);
      else {
        var s = void 0, i = t.charCodeAt(l) - 55;
        i < 11 ? s = i : i >= 11 && i <= 20 ? s = 12 + i % 11 : i >= 21 && i <= 30 ? s = 23 + i % 21 : s = 34 + i % 31, e += s * Math.pow(2, l);
      }
    var a = e % 11;
    return Number(t[t.length - 1]) === a;
  }
  return !0;
}
var Qu = Ma;
Ie.isFreightContainerID = Qu;
var Pr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /* @__PURE__ */ new Set(["aa", "ab", "ae", "af", "ak", "am", "an", "ar", "as", "av", "ay", "az", "az", "ba", "be", "bg", "bh", "bi", "bm", "bn", "bo", "br", "bs", "ca", "ce", "ch", "co", "cr", "cs", "cu", "cv", "cy", "da", "de", "dv", "dz", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "ff", "fi", "fj", "fo", "fr", "fy", "ga", "gd", "gl", "gn", "gu", "gv", "ha", "he", "hi", "ho", "hr", "ht", "hu", "hy", "hz", "ia", "id", "ie", "ig", "ii", "ik", "io", "is", "it", "iu", "ja", "jv", "ka", "kg", "ki", "kj", "kk", "kl", "km", "kn", "ko", "kr", "ks", "ku", "kv", "kw", "ky", "la", "lb", "lg", "li", "ln", "lo", "lt", "lu", "lv", "mg", "mh", "mi", "mk", "ml", "mn", "mr", "ms", "mt", "my", "na", "nb", "nd", "ne", "ng", "nl", "nn", "no", "nr", "nv", "ny", "oc", "oj", "om", "or", "os", "pa", "pi", "pl", "ps", "pt", "qu", "rm", "rn", "ro", "ru", "rw", "sa", "sc", "sd", "se", "sg", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "ss", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk", "tl", "tn", "to", "tr", "ts", "tt", "tw", "ty", "ug", "uk", "ur", "uz", "ve", "vi", "vo", "wa", "wo", "xh", "yi", "yo", "za", "zh", "zu"]);
  function a(r) {
    return (0, l.default)(r), i.has(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Pr, Pr.exports);
var ju = Pr.exports, Lr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var l = s(y);
  function s(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var i = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/, a = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/, r = function(o) {
    var d = o.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
    if (d) {
      var v = Number(d[1]), g = Number(d[2]);
      return v % 4 === 0 && v % 100 !== 0 || v % 400 === 0 ? g <= 366 : g <= 365;
    }
    var m = o.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number), E = m[1], p = m[2], _ = m[3], $ = p && "0".concat(p).slice(-2), h = _ && "0".concat(_).slice(-2), S = new Date("".concat(E, "-").concat($ || "01", "-").concat(h || "01"));
    return p && _ ? S.getUTCFullYear() === E && S.getUTCMonth() + 1 === p && S.getUTCDate() === _ : !0;
  };
  function u(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (0, l.default)(n);
    var d = o.strictSeparator ? a.test(n) : i.test(n);
    return d && o.strict ? r(n) : d;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Lr, Lr.exports);
var ei = Lr.exports, Or = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = $;
  var l = s(y);
  function s(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var i = /[0-9]{4}/, a = /(0[1-9]|1[0-2])/, r = /([12]\d|0[1-9]|3[01])/, u = /([01][0-9]|2[0-3])/, n = /[0-5][0-9]/, o = /([0-5][0-9]|60)/, d = /(\.[0-9]+)?/, v = new RegExp("[-+]".concat(u.source, ":").concat(n.source)), g = new RegExp("([zZ]|".concat(v.source, ")")), m = new RegExp("".concat(u.source, ":").concat(n.source, ":").concat(o.source).concat(d.source)), E = new RegExp("".concat(i.source, "-").concat(a.source, "-").concat(r.source)), p = new RegExp("".concat(m.source).concat(g.source)), _ = new RegExp("^".concat(E.source, "[ tT]").concat(p.source, "$"));
  function $(h) {
    return (0, l.default)(h), _.test(h);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Or, Or.exports);
var ti = Or.exports, Br = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /* @__PURE__ */ new Set(["AFG", "ALA", "ALB", "DZA", "ASM", "AND", "AGO", "AIA", "ATA", "ATG", "ARG", "ARM", "ABW", "AUS", "AUT", "AZE", "BHS", "BHR", "BGD", "BRB", "BLR", "BEL", "BLZ", "BEN", "BMU", "BTN", "BOL", "BES", "BIH", "BWA", "BVT", "BRA", "IOT", "BRN", "BGR", "BFA", "BDI", "KHM", "CMR", "CAN", "CPV", "CYM", "CAF", "TCD", "CHL", "CHN", "CXR", "CCK", "COL", "COM", "COG", "COD", "COK", "CRI", "CIV", "HRV", "CUB", "CUW", "CYP", "CZE", "DNK", "DJI", "DMA", "DOM", "ECU", "EGY", "SLV", "GNQ", "ERI", "EST", "ETH", "FLK", "FRO", "FJI", "FIN", "FRA", "GUF", "PYF", "ATF", "GAB", "GMB", "GEO", "DEU", "GHA", "GIB", "GRC", "GRL", "GRD", "GLP", "GUM", "GTM", "GGY", "GIN", "GNB", "GUY", "HTI", "HMD", "VAT", "HND", "HKG", "HUN", "ISL", "IND", "IDN", "IRN", "IRQ", "IRL", "IMN", "ISR", "ITA", "JAM", "JPN", "JEY", "JOR", "KAZ", "KEN", "KIR", "PRK", "KOR", "KWT", "KGZ", "LAO", "LVA", "LBN", "LSO", "LBR", "LBY", "LIE", "LTU", "LUX", "MAC", "MKD", "MDG", "MWI", "MYS", "MDV", "MLI", "MLT", "MHL", "MTQ", "MRT", "MUS", "MYT", "MEX", "FSM", "MDA", "MCO", "MNG", "MNE", "MSR", "MAR", "MOZ", "MMR", "NAM", "NRU", "NPL", "NLD", "NCL", "NZL", "NIC", "NER", "NGA", "NIU", "NFK", "MNP", "NOR", "OMN", "PAK", "PLW", "PSE", "PAN", "PNG", "PRY", "PER", "PHL", "PCN", "POL", "PRT", "PRI", "QAT", "REU", "ROU", "RUS", "RWA", "BLM", "SHN", "KNA", "LCA", "MAF", "SPM", "VCT", "WSM", "SMR", "STP", "SAU", "SEN", "SRB", "SYC", "SLE", "SGP", "SXM", "SVK", "SVN", "SLB", "SOM", "ZAF", "SGS", "SSD", "ESP", "LKA", "SDN", "SUR", "SJM", "SWZ", "SWE", "CHE", "SYR", "TWN", "TJK", "TZA", "THA", "TLS", "TGO", "TKL", "TON", "TTO", "TUN", "TUR", "TKM", "TCA", "TUV", "UGA", "UKR", "ARE", "GBR", "USA", "UMI", "URY", "UZB", "VUT", "VEN", "VNM", "VGB", "VIR", "WLF", "ESH", "YEM", "ZMB", "ZWE"]);
  function a(r) {
    return (0, l.default)(r), i.has(r.toUpperCase());
  }
  t.exports = e.default, t.exports.default = e.default;
})(Br, Br.exports);
var ri = Br.exports, Re = {};
Object.defineProperty(Re, "__esModule", {
  value: !0
});
Re.default = ui;
Re.CurrencyCodes = void 0;
var ai = ni(y);
function ni(t) {
  return t && t.__esModule ? t : { default: t };
}
var ya = /* @__PURE__ */ new Set(["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "USN", "UYI", "UYU", "UYW", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XSU", "XTS", "XUA", "XXX", "YER", "ZAR", "ZMW", "ZWL"]);
function ui(t) {
  return (0, ai.default)(t), ya.has(t.toUpperCase());
}
var ii = ya;
Re.CurrencyCodes = ii;
var Nr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = n;
  var l = i(y), s = i(V);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var a = /^[A-Z2-7]+=*$/, r = /^[A-HJKMNP-TV-Z0-9]+$/, u = {
    crockford: !1
  };
  function n(o, d) {
    if ((0, l.default)(o), d = (0, s.default)(d, u), d.crockford)
      return r.test(o);
    var v = o.length;
    return !!(v % 8 === 0 && a.test(o));
  }
  t.exports = e.default, t.exports.default = e.default;
})(Nr, Nr.exports);
var li = Nr.exports, Zr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[A-HJ-NP-Za-km-z1-9]*$/;
  function a(r) {
    return (0, l.default)(r), !!i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Zr, Zr.exports);
var si = Zr.exports, Fr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var l = s(y);
  function s(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var i = /^[a-z]+\/[a-z0-9\-\+\._]+$/i, a = /^[a-z\-]+=[a-z0-9\-]+$/i, r = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;
  function u(n) {
    (0, l.default)(n);
    var o = n.split(",");
    if (o.length < 2)
      return !1;
    var d = o.shift().trim().split(";"), v = d.shift();
    if (v.slice(0, 5) !== "data:")
      return !1;
    var g = v.slice(5);
    if (g !== "" && !i.test(g))
      return !1;
    for (var m = 0; m < d.length; m++)
      if (!(m === d.length - 1 && d[m].toLowerCase() === "base64") && !a.test(d[m]))
        return !1;
    for (var E = 0; E < o.length; E++)
      if (!r.test(o[E]))
        return !1;
    return !0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(Fr, Fr.exports);
var fi = Fr.exports, Tr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;
  function a(r) {
    return (0, l.default)(r), r.indexOf("magnet:?") !== 0 ? !1 : i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Tr, Tr.exports);
var oi = Tr.exports, wr = { exports: {} }, Hr = { exports: {} }, Ur = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(y);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    if ((0, l.default)(a), r) {
      var u = new RegExp("[".concat(r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+$"), "g");
      return a.replace(u, "");
    }
    for (var n = a.length - 1; /\s/.test(a.charAt(n)); )
      n -= 1;
    return a.slice(0, n + 1);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Ur, Ur.exports);
var Ia = Ur.exports, Gr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(y);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    (0, l.default)(a);
    var u = r ? new RegExp("^[".concat(r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+"), "g") : /^\s+/g;
    return a.replace(u, "");
  }
  t.exports = e.default, t.exports.default = e.default;
})(Gr, Gr.exports);
var Ra = Gr.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = i(Ia), s = i(Ra);
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r, u) {
    return (0, l.default)((0, s.default)(r, u), u);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Hr, Hr.exports);
var Ea = Hr.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = E;
  var l = a(Ea), s = a(pa), i = a(y);
  function a(p) {
    return p && p.__esModule ? p : { default: p };
  }
  function r(p, _) {
    return o(p) || n(p, _) || v(p, _) || u();
  }
  function u() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function n(p, _) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(p)))) {
      var $ = [], h = !0, S = !1, I = void 0;
      try {
        for (var C = p[Symbol.iterator](), O; !(h = (O = C.next()).done) && ($.push(O.value), !(_ && $.length === _)); h = !0)
          ;
      } catch (P) {
        S = !0, I = P;
      } finally {
        try {
          !h && C.return != null && C.return();
        } finally {
          if (S)
            throw I;
        }
      }
      return $;
    }
  }
  function o(p) {
    if (Array.isArray(p))
      return p;
  }
  function d(p, _) {
    var $;
    if (typeof Symbol > "u" || p[Symbol.iterator] == null) {
      if (Array.isArray(p) || ($ = v(p)) || _ && p && typeof p.length == "number") {
        $ && (p = $);
        var h = 0, S = function() {
        };
        return { s: S, n: function() {
          return h >= p.length ? { done: !0 } : { done: !1, value: p[h++] };
        }, e: function(L) {
          throw L;
        }, f: S };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var I = !0, C = !1, O;
    return { s: function() {
      $ = p[Symbol.iterator]();
    }, n: function() {
      var L = $.next();
      return I = L.done, L;
    }, e: function(L) {
      C = !0, O = L;
    }, f: function() {
      try {
        !I && $.return != null && $.return();
      } finally {
        if (C)
          throw O;
      }
    } };
  }
  function v(p, _) {
    if (p) {
      if (typeof p == "string")
        return g(p, _);
      var $ = Object.prototype.toString.call(p).slice(8, -1);
      if ($ === "Object" && p.constructor && ($ = p.constructor.name), $ === "Map" || $ === "Set")
        return Array.from(p);
      if ($ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($))
        return g(p, _);
    }
  }
  function g(p, _) {
    (_ == null || _ > p.length) && (_ = p.length);
    for (var $ = 0, h = new Array(_); $ < _; $++)
      h[$] = p[$];
    return h;
  }
  function m(p) {
    var _ = /* @__PURE__ */ new Set(["subject", "body", "cc", "bcc"]), $ = {
      cc: "",
      bcc: ""
    }, h = !1, S = p.split("&");
    if (S.length > 4)
      return !1;
    var I = d(S), C;
    try {
      for (I.s(); !(C = I.n()).done; ) {
        var O = C.value, P = O.split("="), L = r(P, 2), Z = L[0], F = L[1];
        if (Z && !_.has(Z)) {
          h = !0;
          break;
        }
        F && (Z === "cc" || Z === "bcc") && ($[Z] = F), Z && _.delete(Z);
      }
    } catch (k) {
      I.e(k);
    } finally {
      I.f();
    }
    return h ? !1 : $;
  }
  function E(p, _) {
    if ((0, i.default)(p), p.indexOf("mailto:") !== 0)
      return !1;
    var $ = p.replace("mailto:", "").split("?"), h = r($, 2), S = h[0], I = S === void 0 ? "" : S, C = h[1], O = C === void 0 ? "" : C;
    if (!I && !O)
      return !0;
    var P = m(O);
    return P ? "".concat(I, ",").concat(P.cc, ",").concat(P.bcc).split(",").every(function(L) {
      return L = (0, l.default)(L, " "), L ? (0, s.default)(L, _) : !0;
    }) : !1;
  }
  t.exports = e.default, t.exports.default = e.default;
})(wr, wr.exports);
var di = wr.exports, kr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = u;
  var l = s(y);
  function s(n) {
    return n && n.__esModule ? n : { default: n };
  }
  var i = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+_]{1,100}$/i, a = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i, r = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i;
  function u(n) {
    return (0, l.default)(n), i.test(n) || a.test(n) || r.test(n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(kr, kr.exports);
var ci = kr.exports, Kr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = d;
  var l = i(y), s = i(V);
  function i(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var a = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/, r = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/, u = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i, n = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i, o = {
    checkDMS: !1
  };
  function d(v, g) {
    if ((0, l.default)(v), g = (0, s.default)(g, o), !v.includes(","))
      return !1;
    var m = v.split(",");
    return m[0].startsWith("(") && !m[1].endsWith(")") || m[1].endsWith(")") && !m[0].startsWith("(") ? !1 : g.checkDMS ? u.test(m[0]) && n.test(m[1]) : a.test(m[0]) && r.test(m[1]);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Kr, Kr.exports);
var vi = Kr.exports, Ee = {};
Object.defineProperty(Ee, "__esModule", {
  value: !0
});
Ee.default = Ai;
Ee.locales = void 0;
var pi = _i(y);
function _i(t) {
  return t && t.__esModule ? t : { default: t };
}
var la = /^\d{3}$/, z = /^\d{4}$/, b = /^\d{5}$/, lt = /^\d{6}$/, ve = {
  AD: /^AD\d{3}$/,
  AT: z,
  AU: z,
  AZ: /^AZ\d{4}$/,
  BA: /^([7-8]\d{4}$)/,
  BE: z,
  BG: z,
  BR: /^\d{5}-\d{3}$/,
  BY: /^2[1-4]\d{4}$/,
  CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  CH: z,
  CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
  CZ: /^\d{3}\s?\d{2}$/,
  DE: b,
  DK: z,
  DO: b,
  DZ: b,
  EE: b,
  ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
  FI: b,
  FR: /^\d{2}\s?\d{3}$/,
  GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
  GR: /^\d{3}\s?\d{2}$/,
  HR: /^([1-5]\d{4}$)/,
  HT: /^HT\d{4}$/,
  HU: z,
  ID: b,
  IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
  IL: /^(\d{5}|\d{7})$/,
  IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
  IR: /^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/,
  IS: la,
  IT: b,
  JP: /^\d{3}\-\d{4}$/,
  KE: b,
  KR: /^(\d{5}|\d{6})$/,
  LI: /^(948[5-9]|949[0-7])$/,
  LT: /^LT\-\d{5}$/,
  LU: z,
  LV: /^LV\-\d{4}$/,
  LK: b,
  MG: la,
  MX: b,
  MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
  MY: b,
  NL: /^\d{4}\s?[a-z]{2}$/i,
  NO: z,
  NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
  NZ: z,
  PL: /^\d{2}\-\d{3}$/,
  PR: /^00[679]\d{2}([ -]\d{4})?$/,
  PT: /^\d{4}\-\d{3}?$/,
  RO: lt,
  RU: lt,
  SA: b,
  SE: /^[1-9]\d{2}\s?\d{2}$/,
  SG: lt,
  SI: z,
  SK: /^\d{3}\s?\d{2}$/,
  TH: b,
  TN: z,
  TW: /^\d{3}(\d{2})?$/,
  UA: b,
  US: /^\d{5}(-\d{4})?$/,
  ZA: z,
  ZM: b
}, gi = Object.keys(ve);
Ee.locales = gi;
function Ai(t, e) {
  if ((0, pi.default)(t), e in ve)
    return ve[e].test(t);
  if (e === "any") {
    for (var l in ve)
      if (ve.hasOwnProperty(l)) {
        var s = ve[l];
        if (s.test(t))
          return !0;
      }
    return !1;
  }
  throw new Error("Invalid locale '".concat(e, "'"));
}
var Wr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(y);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, l.default)(a), a.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;");
  }
  t.exports = e.default, t.exports.default = e.default;
})(Wr, Wr.exports);
var hi = Wr.exports, br = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(y);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a) {
    return (0, l.default)(a), a.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#x5C;/g, "\\").replace(/&#96;/g, "`").replace(/&amp;/g, "&");
  }
  t.exports = e.default, t.exports.default = e.default;
})(br, br.exports);
var Si = br.exports, qr = { exports: {} }, Yr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(y);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    return (0, l.default)(a), a.replace(new RegExp("[".concat(r, "]+"), "g"), "");
  }
  t.exports = e.default, t.exports.default = e.default;
})(Yr, Yr.exports);
var Da = Yr.exports;
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = i(y), s = i(Da);
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function a(r, u) {
    (0, l.default)(r);
    var n = u ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
    return (0, s.default)(r, n);
  }
  t.exports = e.default, t.exports.default = e.default;
})(qr, qr.exports);
var $i = qr.exports, Vr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(y);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    return (0, l.default)(a), a.replace(new RegExp("[^".concat(r, "]+"), "g"), "");
  }
  t.exports = e.default, t.exports.default = e.default;
})(Vr, Vr.exports);
var mi = Vr.exports, zr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = i;
  var l = s(y);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function i(a, r) {
    (0, l.default)(a);
    for (var u = a.length - 1; u >= 0; u--)
      if (r.indexOf(a[u]) === -1)
        return !1;
    return !0;
  }
  t.exports = e.default, t.exports.default = e.default;
})(zr, zr.exports);
var Mi = zr.exports, Jr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = d;
  var l = s(V);
  function s(v) {
    return v && v.__esModule ? v : { default: v };
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
    // The following conversions are specific to iCloud
    // Lowercases the local part of the iCloud address (known to be case-insensitive)
    icloud_lowercase: !0,
    // Removes the subaddress (e.g. "+foo") from the email address
    icloud_remove_subaddress: !0
  }, a = ["icloud.com", "me.com"], r = ["hotmail.at", "hotmail.be", "hotmail.ca", "hotmail.cl", "hotmail.co.il", "hotmail.co.nz", "hotmail.co.th", "hotmail.co.uk", "hotmail.com", "hotmail.com.ar", "hotmail.com.au", "hotmail.com.br", "hotmail.com.gr", "hotmail.com.mx", "hotmail.com.pe", "hotmail.com.tr", "hotmail.com.vn", "hotmail.cz", "hotmail.de", "hotmail.dk", "hotmail.es", "hotmail.fr", "hotmail.hu", "hotmail.id", "hotmail.ie", "hotmail.in", "hotmail.it", "hotmail.jp", "hotmail.kr", "hotmail.lv", "hotmail.my", "hotmail.ph", "hotmail.pt", "hotmail.sa", "hotmail.sg", "hotmail.sk", "live.be", "live.co.uk", "live.com", "live.com.ar", "live.com.mx", "live.de", "live.es", "live.eu", "live.fr", "live.it", "live.nl", "msn.com", "outlook.at", "outlook.be", "outlook.cl", "outlook.co.il", "outlook.co.nz", "outlook.co.th", "outlook.com", "outlook.com.ar", "outlook.com.au", "outlook.com.br", "outlook.com.gr", "outlook.com.pe", "outlook.com.tr", "outlook.com.vn", "outlook.cz", "outlook.de", "outlook.dk", "outlook.es", "outlook.fr", "outlook.hu", "outlook.id", "outlook.ie", "outlook.in", "outlook.it", "outlook.jp", "outlook.kr", "outlook.lv", "outlook.my", "outlook.ph", "outlook.pt", "outlook.sa", "outlook.sg", "outlook.sk", "passport.com"], u = ["rocketmail.com", "yahoo.ca", "yahoo.co.uk", "yahoo.com", "yahoo.de", "yahoo.fr", "yahoo.in", "yahoo.it", "ymail.com"], n = ["yandex.ru", "yandex.ua", "yandex.kz", "yandex.com", "yandex.by", "ya.ru"];
  function o(v) {
    return v.length > 1 ? v : "";
  }
  function d(v, g) {
    g = (0, l.default)(g, i);
    var m = v.split("@"), E = m.pop(), p = m.join("@"), _ = [p, E];
    if (_[1] = _[1].toLowerCase(), _[1] === "gmail.com" || _[1] === "googlemail.com") {
      if (g.gmail_remove_subaddress && (_[0] = _[0].split("+")[0]), g.gmail_remove_dots && (_[0] = _[0].replace(/\.+/g, o)), !_[0].length)
        return !1;
      (g.all_lowercase || g.gmail_lowercase) && (_[0] = _[0].toLowerCase()), _[1] = g.gmail_convert_googlemaildotcom ? "gmail.com" : _[1];
    } else if (a.indexOf(_[1]) >= 0) {
      if (g.icloud_remove_subaddress && (_[0] = _[0].split("+")[0]), !_[0].length)
        return !1;
      (g.all_lowercase || g.icloud_lowercase) && (_[0] = _[0].toLowerCase());
    } else if (r.indexOf(_[1]) >= 0) {
      if (g.outlookdotcom_remove_subaddress && (_[0] = _[0].split("+")[0]), !_[0].length)
        return !1;
      (g.all_lowercase || g.outlookdotcom_lowercase) && (_[0] = _[0].toLowerCase());
    } else if (u.indexOf(_[1]) >= 0) {
      if (g.yahoo_remove_subaddress) {
        var $ = _[0].split("-");
        _[0] = $.length > 1 ? $.slice(0, -1).join("-") : $[0];
      }
      if (!_[0].length)
        return !1;
      (g.all_lowercase || g.yahoo_lowercase) && (_[0] = _[0].toLowerCase());
    } else
      n.indexOf(_[1]) >= 0 ? ((g.all_lowercase || g.yandex_lowercase) && (_[0] = _[0].toLowerCase()), _[1] = "yandex.ru") : g.all_lowercase && (_[0] = _[0].toLowerCase());
    return _.join("@");
  }
  t.exports = e.default, t.exports.default = e.default;
})(Jr, Jr.exports);
var yi = Jr.exports, Xr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
  function a(r) {
    return (0, l.default)(r), i.test(r);
  }
  t.exports = e.default, t.exports.default = e.default;
})(Xr, Xr.exports);
var Ii = Xr.exports, Qr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = a;
  var l = s(y);
  function s(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var i = {
    "cs-CZ": function(u) {
      return /^(([ABCDEFHIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(u);
    },
    "de-DE": function(u) {
      return /^((A|AA|AB|AC|AE|AH|AK|AM|AN|AÖ|AP|AS|AT|AU|AW|AZ|B|BA|BB|BC|BE|BF|BH|BI|BK|BL|BM|BN|BO|BÖ|BS|BT|BZ|C|CA|CB|CE|CO|CR|CW|D|DA|DD|DE|DH|DI|DL|DM|DN|DO|DU|DW|DZ|E|EA|EB|ED|EE|EF|EG|EH|EI|EL|EM|EN|ER|ES|EU|EW|F|FB|FD|FF|FG|FI|FL|FN|FO|FR|FS|FT|FÜ|FW|FZ|G|GA|GC|GD|GE|GF|GG|GI|GK|GL|GM|GN|GÖ|GP|GR|GS|GT|GÜ|GV|GW|GZ|H|HA|HB|HC|HD|HE|HF|HG|HH|HI|HK|HL|HM|HN|HO|HP|HR|HS|HU|HV|HX|HY|HZ|IK|IL|IN|IZ|J|JE|JL|K|KA|KB|KC|KE|KF|KG|KH|KI|KK|KL|KM|KN|KO|KR|KS|KT|KU|KW|KY|L|LA|LB|LC|LD|LF|LG|LH|LI|LL|LM|LN|LÖ|LP|LR|LU|M|MA|MB|MC|MD|ME|MG|MH|MI|MK|ML|MM|MN|MO|MQ|MR|MS|MÜ|MW|MY|MZ|N|NB|ND|NE|NF|NH|NI|NK|NM|NÖ|NP|NR|NT|NU|NW|NY|NZ|OA|OB|OC|OD|OE|OF|OG|OH|OK|OL|OP|OS|OZ|P|PA|PB|PE|PF|PI|PL|PM|PN|PR|PS|PW|PZ|R|RA|RC|RD|RE|RG|RH|RI|RL|RM|RN|RO|RP|RS|RT|RU|RV|RW|RZ|S|SB|SC|SE|SG|SI|SK|SL|SM|SN|SO|SP|SR|ST|SU|SW|SY|SZ|TE|TF|TG|TO|TP|TR|TS|TT|TÜ|ÜB|UE|UH|UL|UM|UN|V|VB|VG|VK|VR|VS|W|WA|WB|WE|WF|WI|WK|WL|WM|WN|WO|WR|WS|WT|WÜ|WW|WZ|Z|ZE|ZI|ZP|ZR|ZW|ZZ)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(ABG|ABI|AIB|AIC|ALF|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BCH|BED|BER|BGD|BGL|BID|BIN|BIR|BIT|BIW|BKS|BLB|BLK|BNA|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BSB|BSK|BTF|BÜD|BUL|BÜR|BÜS|BÜZ|CAS|CHA|CLP|CLZ|COC|COE|CUX|DAH|DAN|DAU|DBR|DEG|DEL|DGF|DIL|DIN|DIZ|DKB|DLG|DON|DUD|DÜW|EBE|EBN|EBS|ECK|EIC|EIL|EIN|EIS|EMD|EMS|ERB|ERH|ERK|ERZ|ESB|ESW|FDB|FDS|FEU|FFB|FKB|FLÖ|FOR|FRG|FRI|FRW|FTL|FÜS|GAN|GAP|GDB|GEL|GEO|GER|GHA|GHC|GLA|GMN|GNT|GOA|GOH|GRA|GRH|GRI|GRM|GRZ|GTH|GUB|GUN|GVM|HAB|HAL|HAM|HAS|HBN|HBS|HCH|HDH|HDL|HEB|HEF|HEI|HER|HET|HGN|HGW|HHM|HIG|HIP|HMÜ|HOG|HOH|HOL|HOM|HOR|HÖS|HOT|HRO|HSK|HST|HVL|HWI|IGB|ILL|JÜL|KEH|KEL|KEM|KIB|KLE|KLZ|KÖN|KÖT|KÖZ|KRU|KÜN|KUS|KYF|LAN|LAU|LBS|LBZ|LDK|LDS|LEO|LER|LEV|LIB|LIF|LIP|LÖB|LOS|LRO|LSZ|LÜN|LUP|LWL|MAB|MAI|MAK|MAL|MED|MEG|MEI|MEK|MEL|MER|MET|MGH|MGN|MHL|MIL|MKK|MOD|MOL|MON|MOS|MSE|MSH|MSP|MST|MTK|MTL|MÜB|MÜR|MYK|MZG|NAB|NAI|NAU|NDH|NEA|NEB|NEC|NEN|NES|NEW|NMB|NMS|NOH|NOL|NOM|NOR|NVP|NWM|OAL|OBB|OBG|OCH|OHA|ÖHR|OHV|OHZ|OPR|OSL|OVI|OVL|OVP|PAF|PAN|PAR|PCH|PEG|PIR|PLÖ|PRÜ|QFT|QLB|RDG|REG|REH|REI|RID|RIE|ROD|ROF|ROK|ROL|ROS|ROT|ROW|RSL|RÜD|RÜG|SAB|SAD|SAN|SAW|SBG|SBK|SCZ|SDH|SDL|SDT|SEB|SEE|SEF|SEL|SFB|SFT|SGH|SHA|SHG|SHK|SHL|SIG|SIM|SLE|SLF|SLK|SLN|SLS|SLÜ|SLZ|SMÜ|SOB|SOG|SOK|SÖM|SON|SPB|SPN|SRB|SRO|STA|STB|STD|STE|STL|SUL|SÜW|SWA|SZB|TBB|TDO|TET|TIR|TÖL|TUT|UEM|UER|UFF|USI|VAI|VEC|VER|VIB|VIE|VIT|VOH|WAF|WAK|WAN|WAR|WAT|WBS|WDA|WEL|WEN|WER|WES|WHV|WIL|WIS|WIT|WIZ|WLG|WMS|WND|WOB|WOH|WOL|WOR|WOS|WRN|WSF|WST|WSW|WTL|WTM|WUG|WÜM|WUN|WUR|WZL|ZEL|ZIG)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(u);
    },
    "de-LI": function(u) {
      return /^FL[- ]?\d{1,5}[UZ]?$/.test(u);
    },
    "en-IN": function(u) {
      return /^[A-Z]{2}[ -]?[0-9]{1,2}(?:[ -]?[A-Z])(?:[ -]?[A-Z]*)?[ -]?[0-9]{4}$/.test(u);
    },
    "es-AR": function(u) {
      return /^(([A-Z]{2} ?[0-9]{3} ?[A-Z]{2})|([A-Z]{3} ?[0-9]{3}))$/.test(u);
    },
    "fi-FI": function(u) {
      return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(u);
    },
    "hu-HU": function(u) {
      return /^((((?!AAA)(([A-NPRSTVZWXY]{1})([A-PR-Z]{1})([A-HJ-NPR-Z]))|(A[ABC]I)|A[ABC]O|A[A-W]Q|BPI|BPO|UCO|UDO|XAO)-(?!000)\d{3})|(M\d{6})|((CK|DT|CD|HC|H[ABEFIKLMNPRSTVX]|MA|OT|R[A-Z]) \d{2}-\d{2})|(CD \d{3}-\d{3})|(C-(C|X) \d{4})|(X-(A|B|C) \d{4})|(([EPVZ]-\d{5}))|(S A[A-Z]{2} \d{2})|(SP \d{2}-\d{2}))$/.test(u);
    },
    "pt-BR": function(u) {
      return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(u);
    },
    "pt-PT": function(u) {
      return /^([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})$/.test(u);
    },
    "sq-AL": function(u) {
      return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(u);
    },
    "sv-SE": function(u) {
      return /^[A-HJ-PR-UW-Z]{3} ?[\d]{2}[A-HJ-PR-UW-Z1-9]$|(^[A-ZÅÄÖ ]{2,7}$)/.test(u.trim());
    }
  };
  function a(r, u) {
    if ((0, l.default)(r), u in i)
      return i[u](r);
    if (u === "any") {
      for (var n in i) {
        var o = i[n];
        if (o(r))
          return !0;
      }
      return !1;
    }
    throw new Error("Invalid locale '".concat(u, "'"));
  }
  t.exports = e.default, t.exports.default = e.default;
})(Qr, Qr.exports);
var Ri = Qr.exports, jr = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = m;
  var l = i(V), s = i(y);
  function i(E) {
    return E && E.__esModule ? E : { default: E };
  }
  var a = /^[A-Z]$/, r = /^[a-z]$/, u = /^[0-9]$/, n = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/, o = {
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
  function d(E) {
    var p = {};
    return Array.from(E).forEach(function(_) {
      var $ = p[_];
      $ ? p[_] += 1 : p[_] = 1;
    }), p;
  }
  function v(E) {
    var p = d(E), _ = {
      length: E.length,
      uniqueChars: Object.keys(p).length,
      uppercaseCount: 0,
      lowercaseCount: 0,
      numberCount: 0,
      symbolCount: 0
    };
    return Object.keys(p).forEach(function($) {
      a.test($) ? _.uppercaseCount += p[$] : r.test($) ? _.lowercaseCount += p[$] : u.test($) ? _.numberCount += p[$] : n.test($) && (_.symbolCount += p[$]);
    }), _;
  }
  function g(E, p) {
    var _ = 0;
    return _ += E.uniqueChars * p.pointsPerUnique, _ += (E.length - E.uniqueChars) * p.pointsPerRepeat, E.lowercaseCount > 0 && (_ += p.pointsForContainingLower), E.uppercaseCount > 0 && (_ += p.pointsForContainingUpper), E.numberCount > 0 && (_ += p.pointsForContainingNumber), E.symbolCount > 0 && (_ += p.pointsForContainingSymbol), _;
  }
  function m(E) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    (0, s.default)(E);
    var _ = v(E);
    return p = (0, l.default)(p || {}, o), p.returnScore ? g(_, p) : _.length >= p.minLength && _.lowercaseCount >= p.minLowercase && _.uppercaseCount >= p.minUppercase && _.numberCount >= p.minNumbers && _.symbolCount >= p.minSymbols;
  }
  t.exports = e.default, t.exports.default = e.default;
})(jr, jr.exports);
var Ei = jr.exports, De = {};
function we(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? we = function(l) {
    return typeof l;
  } : we = function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, we(t);
}
Object.defineProperty(De, "__esModule", {
  value: !0
});
De.default = Oi;
De.vatMatchers = void 0;
var sa = Ci(y), Di = xi(fe);
function xa() {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap();
  return xa = function() {
    return t;
  }, t;
}
function xi(t) {
  if (t && t.__esModule)
    return t;
  if (t === null || we(t) !== "object" && typeof t != "function")
    return { default: t };
  var e = xa();
  if (e && e.has(t))
    return e.get(t);
  var l = {}, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in t)
    if (Object.prototype.hasOwnProperty.call(t, i)) {
      var a = s ? Object.getOwnPropertyDescriptor(t, i) : null;
      a && (a.get || a.set) ? Object.defineProperty(l, i, a) : l[i] = t[i];
    }
  return l.default = t, e && e.set(t, l), l;
}
function Ci(t) {
  return t && t.__esModule ? t : { default: t };
}
var Pi = function(e) {
  var l = function(i) {
    var a = i.pop(), r = [5, 4, 3, 2, 7, 6, 5, 4], u = (11 - i.reduce(function(n, o, d) {
      return n + o * r[d];
    }, 0) % 11) % 11;
    return a === u;
  };
  return /^(CHE[- ]?)?(\d{9}|(\d{3}\.\d{3}\.\d{3})|(\d{3} \d{3} \d{3})) ?(TVA|MWST|IVA)?$/.test(e) && l(e.match(/\d/g).map(function(s) {
    return +s;
  }));
}, Li = function(e) {
  var l = e.match(/^(PT)?(\d{9})$/);
  if (!l)
    return !1;
  var s = l[2], i = 11 - Di.reverseMultiplyAndSum(s.split("").slice(0, 8).map(function(a) {
    return parseInt(a, 10);
  }), 9) % 11;
  return i > 9 ? parseInt(s[8], 10) === 0 : i === parseInt(s[8], 10);
}, ea = {
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
    return /^(FR)?\w{2}\d{9}$/.test(e);
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
  PT: Li,
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
  AU: function(e) {
    return /^(AU)?\d{11}$/.test(e);
  },
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
    return /^(KZ)?\d{9}$/.test(e);
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
  CH: Pi,
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
De.vatMatchers = ea;
function Oi(t, e) {
  if ((0, sa.default)(t), (0, sa.default)(e), e in ea)
    return ea[e](t);
  throw new Error("Invalid country code: '".concat(e, "'"));
}
(function(t, e) {
  function l(w) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? l = function(Q) {
      return typeof Q;
    } : l = function(Q) {
      return Q && typeof Symbol == "function" && Q.constructor === Symbol && Q !== Symbol.prototype ? "symbol" : typeof Q;
    }, l(w);
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var s = M(ta), i = M(da), a = M(gn), r = M(An), u = M(hn), n = M(Sn), o = M($n), d = M(pa), v = M(mn), g = M(Mn), m = M(Ge), E = M(yn), p = M(ra), _ = M(_a), $ = M(In), h = M(Rn), S = M(En), I = ce($e), C = ce(me), O = M(Zn), P = M(Fn), L = M(Tn), Z = M(wn), F = M(Hn), k = M(Un), j = M(Gn), W = M(_e), le = M(ge), ne = M(Vn), ee = M(zn), ke = M(Xn), Ke = M(Qn), xe = M(aa), Ce = ce(pe), We = M(eu), be = M(ha), qe = M(tu), Ye = M(ru), Ve = M(au), ze = M(nu), Je = M(uu), Xe = M(iu), Pe = ce(Me), Qe = M(hu), J = M(Su), X = M($u), Le = M(mu), oe = M(Mu), je = M(yu), f = M(Iu), c = M(va), A = M(Ru), D = M(Eu), R = M(Du), x = M(xu), B = M(Cu), N = M(ma), T = M(Pu), H = M(Lu), se = M(Ou), ae = M(Bu), re = M(Nu), he = M(Zu), Oe = M(Uu), ue = ce(ye), de = M(bu), Be = M(qu), La = M(Yu), na = Ie, Oa = M(ju), Ba = M(ei), Na = M(ti), Za = M(Ae), Fa = M(ri), Ta = M(Re), wa = M(li), Ha = M(si), Ua = M($a), Ga = M(fi), ka = M(oi), Ka = M(di), Wa = M(ci), ba = M(vi), ua = ce(Ee), qa = M(Ra), Ya = M(Ia), Va = M(Ea), za = M(hi), Ja = M(Si), Xa = M($i), Qa = M(mi), ja = M(Da), en = M(Mi), tn = M(yi), rn = M(Ii), an = M(Ri), nn = M(Ei), un = M(De);
  function ia() {
    if (typeof WeakMap != "function")
      return null;
    var w = /* @__PURE__ */ new WeakMap();
    return ia = function() {
      return w;
    }, w;
  }
  function ce(w) {
    if (w && w.__esModule)
      return w;
    if (w === null || l(w) !== "object" && typeof w != "function")
      return { default: w };
    var ie = ia();
    if (ie && ie.has(w))
      return ie.get(w);
    var Q = {}, on = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var Se in w)
      if (Object.prototype.hasOwnProperty.call(w, Se)) {
        var Ne = on ? Object.getOwnPropertyDescriptor(w, Se) : null;
        Ne && (Ne.get || Ne.set) ? Object.defineProperty(Q, Se, Ne) : Q[Se] = w[Se];
      }
    return Q.default = w, ie && ie.set(w, Q), Q;
  }
  function M(w) {
    return w && w.__esModule ? w : { default: w };
  }
  var ln = "13.11.0", sn = {
    version: ln,
    toDate: s.default,
    toFloat: i.default,
    toInt: a.default,
    toBoolean: r.default,
    equals: u.default,
    contains: n.default,
    matches: o.default,
    isEmail: d.default,
    isURL: v.default,
    isMACAddress: g.default,
    isIP: m.default,
    isIPRange: E.default,
    isFQDN: p.default,
    isBoolean: h.default,
    isIBAN: Pe.default,
    isBIC: Qe.default,
    isAlpha: I.default,
    isAlphaLocales: I.locales,
    isAlphanumeric: C.default,
    isAlphanumericLocales: C.locales,
    isNumeric: O.default,
    isPassportNumber: P.default,
    isPort: L.default,
    isLowercase: Z.default,
    isUppercase: F.default,
    isAscii: j.default,
    isFullWidth: W.default,
    isHalfWidth: le.default,
    isVariableWidth: ne.default,
    isMultibyte: ee.default,
    isSemVer: ke.default,
    isSurrogatePair: Ke.default,
    isInt: xe.default,
    isIMEI: k.default,
    isFloat: Ce.default,
    isFloatLocales: Ce.locales,
    isDecimal: We.default,
    isHexadecimal: be.default,
    isOctal: qe.default,
    isDivisibleBy: Ye.default,
    isHexColor: Ve.default,
    isRgbColor: ze.default,
    isHSL: Je.default,
    isISRC: Xe.default,
    isMD5: J.default,
    isHash: X.default,
    isJWT: Le.default,
    isJSON: oe.default,
    isEmpty: je.default,
    isLength: f.default,
    isLocale: S.default,
    isByteLength: c.default,
    isUUID: A.default,
    isMongoId: D.default,
    isAfter: R.default,
    isBefore: x.default,
    isIn: B.default,
    isLuhnNumber: N.default,
    isCreditCard: T.default,
    isIdentityCard: H.default,
    isEAN: se.default,
    isISIN: ae.default,
    isISBN: re.default,
    isISSN: he.default,
    isMobilePhone: ue.default,
    isMobilePhoneLocales: ue.locales,
    isPostalCode: ua.default,
    isPostalCodeLocales: ua.locales,
    isEthereumAddress: de.default,
    isCurrency: Be.default,
    isBtcAddress: La.default,
    isISO6346: na.isISO6346,
    isFreightContainerID: na.isFreightContainerID,
    isISO6391: Oa.default,
    isISO8601: Ba.default,
    isRFC3339: Na.default,
    isISO31661Alpha2: Za.default,
    isISO31661Alpha3: Fa.default,
    isISO4217: Ta.default,
    isBase32: wa.default,
    isBase58: Ha.default,
    isBase64: Ua.default,
    isDataURI: Ga.default,
    isMagnetURI: ka.default,
    isMailtoURI: Ka.default,
    isMimeType: Wa.default,
    isLatLong: ba.default,
    ltrim: qa.default,
    rtrim: Ya.default,
    trim: Va.default,
    escape: za.default,
    unescape: Ja.default,
    stripLow: Xa.default,
    whitelist: Qa.default,
    blacklist: ja.default,
    isWhitelisted: en.default,
    normalizeEmail: tn.default,
    toString,
    isSlug: rn.default,
    isStrongPassword: nn.default,
    isTaxID: Oe.default,
    isDate: _.default,
    isTime: $.default,
    isLicensePlate: an.default,
    isVAT: un.default,
    ibanLocales: Pe.locales
  }, fn = sn;
  e.default = fn, t.exports = e.default, t.exports.default = e.default;
})(st, st.exports);
var Bi = st.exports;
const te = /* @__PURE__ */ dn(Bi), Ni = (t) => /^(?:[A-Za-z]:\/)?[\w\/]+\w+$/.test(t), Zi = (t) => /^(102[4-9]|10[3-9]\d|1[1-9]\d{2}|[2-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(t), ki = (t) => {
  let e = {};
  for (var l in t) {
    var s = t[l];
    const i = Fi(s);
    e[l] = i;
  }
  return e;
}, Fi = (t) => {
  var n, o;
  let e = [], l = t.required;
  if (t.required == !0 && Ui(t)) {
    var s = ((n = t.errorMessage) == null ? void 0 : n.required) || "This field is mandatory";
    e.push(He(Hi, s));
  }
  if (t.length) {
    var i = t.length.message || "Invalid size";
    e.push(He(wi(t), i));
  }
  if (t.validationRule) {
    var a = t.validationRule;
    if (a instanceof Array && a.length > 0) {
      const d = a[0];
      e.push(Ti(t, d == "OR"));
    } else {
      var r = Ca(t, a), u = ((o = t.errorMessage) == null ? void 0 : o.rule) || "Invalid";
      e.push(He(r, u));
    }
  }
  return (d) => {
    if (!l && Pa(d))
      return { status: !0, message: "" };
    for (var v of e) {
      const g = v.call(null, d);
      if (!g.status)
        return g;
    }
    return { status: !0, message: "" };
  };
}, Ti = (t, e) => {
  var l = [], s = t.validationRule;
  return s instanceof Array && s.map((i, a) => {
    var n;
    if (!(e && a == 0)) {
      var r = Ca(t, i), u = ((n = t.errorMessage) == null ? void 0 : n[i]) || "Invalid";
      l.push(He(r, u));
    }
  }), e ? (i) => {
    if (l.length > 0) {
      var a = "";
      for (var r of l) {
        const u = r.call(null, i);
        if (u.status)
          return u;
        a = u.message;
      }
      return { status: !1, message: a };
    }
  } : (i) => {
    for (var a of l) {
      const r = a.call(null, i);
      if (!r.status)
        return r;
    }
    return { status: !0, message: "" };
  };
}, wi = (t) => {
  if (t.length) {
    const e = t.length.is, l = t.length.min, s = t.length.max;
    if (e)
      return (i) => i.length == e;
    if (l)
      return s ? (i) => {
        const a = i.length;
        return l <= a && a <= s;
      } : (i) => l <= i.length;
    if (s)
      return (i) => i.length <= s;
  }
}, Ca = (t, e) => {
  if (e)
    switch (e) {
      case "string":
        return fa;
      case "alphabets":
        return te.isAlpha;
      case "date":
        return te.isDate;
      case "time":
        return te.isTime;
      case "number":
        return te.isNumeric;
      case "email":
        return te.isEmail;
      case "mobilePhone":
        return te.isMobilePhone;
      case "port":
        return te.isPort;
      case "ip":
        return te.isIP;
      case "fqdn":
        return te.isFQDN;
      case "folder":
        return Ni;
      case "portrange":
        return Zi;
      case "password":
        return te.isPassword;
    }
  return fa;
}, fa = () => !0, Pa = (t) => t == null || t == null ? !0 : typeof t == "number" ? !1 : typeof t == "string" ? te.isEmpty(t) : !t, Hi = (t) => !Pa(t);
function He(t, e) {
  return (l) => t.call(null, l) ? { status: !0, message: "" } : { status: !1, message: e };
}
function Ui(t) {
  switch (t.type) {
    case "switch":
      return !1;
    default:
      return !0;
  }
}
export {
  Fi as default,
  ki as getValidators
};
