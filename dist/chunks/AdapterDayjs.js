var Mt = Object.defineProperty;
var pt = (l, t, e) => t in l ? Mt(l, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[t] = e;
var r = (l, t, e) => (pt(l, typeof t != "symbol" ? t + "" : t, e), e);
import { _ as yt } from "./extends.js";
import p from "dayjs";
import { c as b, g as W } from "./_commonjsHelpers.js";
function nt(l, ...t) {
  const e = new URL("https://mui.com/x/production-error");
  return e.searchParams.set("code", l.toString()), t.forEach((s) => e.searchParams.append("args[]", s)), `MUI X error #${l}; visit ${e} for the full message.`;
}
var ot = { exports: {} };
(function(l, t) {
  (function(e, s) {
    l.exports = s();
  })(b, function() {
    var e = "week", s = "year";
    return function(h, u, i) {
      var o = u.prototype;
      o.week = function(f) {
        if (f === void 0 && (f = null), f !== null)
          return this.add(7 * (f - this.week()), "day");
        var M = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var d = i(this).startOf(s).add(1, s).date(M), y = i(this).endOf(e);
          if (d.isBefore(y))
            return 1;
        }
        var T = i(this).startOf(s).date(M).startOf(e).subtract(1, "millisecond"), A = this.diff(T, e, !0);
        return A < 0 ? i(this).startOf("week").week() : Math.ceil(A);
      }, o.weeks = function(f) {
        return f === void 0 && (f = null), this.week(f);
      };
    };
  });
})(ot);
var gt = ot.exports;
const Tt = /* @__PURE__ */ W(gt);
var it = { exports: {} };
(function(l, t) {
  (function(e, s) {
    l.exports = s();
  })(b, function() {
    var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, s = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, h = /\d/, u = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, f = {}, M = function(n) {
      return (n = +n) + (n > 68 ? 1900 : 2e3);
    }, d = function(n) {
      return function(a) {
        this[n] = +a;
      };
    }, y = [/[+-]\d\d:?(\d\d)?|Z/, function(n) {
      (this.zone || (this.zone = {})).offset = function(a) {
        if (!a || a === "Z")
          return 0;
        var c = a.match(/([+-]|\d\d)/g), m = 60 * c[1] + (+c[2] || 0);
        return m === 0 ? 0 : c[0] === "+" ? -m : m;
      }(n);
    }], T = function(n) {
      var a = f[n];
      return a && (a.indexOf ? a : a.s.concat(a.f));
    }, A = function(n, a) {
      var c, m = f.meridiem;
      if (m) {
        for (var w = 1; w <= 24; w += 1)
          if (n.indexOf(m(w, 0, a)) > -1) {
            c = w > 12;
            break;
          }
      } else
        c = n === (a ? "pm" : "PM");
      return c;
    }, I = { A: [o, function(n) {
      this.afternoon = A(n, !1);
    }], a: [o, function(n) {
      this.afternoon = A(n, !0);
    }], Q: [h, function(n) {
      this.month = 3 * (n - 1) + 1;
    }], S: [h, function(n) {
      this.milliseconds = 100 * +n;
    }], SS: [u, function(n) {
      this.milliseconds = 10 * +n;
    }], SSS: [/\d{3}/, function(n) {
      this.milliseconds = +n;
    }], s: [i, d("seconds")], ss: [i, d("seconds")], m: [i, d("minutes")], mm: [i, d("minutes")], H: [i, d("hours")], h: [i, d("hours")], HH: [i, d("hours")], hh: [i, d("hours")], D: [i, d("day")], DD: [u, d("day")], Do: [o, function(n) {
      var a = f.ordinal, c = n.match(/\d+/);
      if (this.day = c[0], a)
        for (var m = 1; m <= 31; m += 1)
          a(m).replace(/\[|\]/g, "") === n && (this.day = m);
    }], w: [i, d("week")], ww: [u, d("week")], M: [i, d("month")], MM: [u, d("month")], MMM: [o, function(n) {
      var a = T("months"), c = (T("monthsShort") || a.map(function(m) {
        return m.slice(0, 3);
      })).indexOf(n) + 1;
      if (c < 1)
        throw new Error();
      this.month = c % 12 || c;
    }], MMMM: [o, function(n) {
      var a = T("months").indexOf(n) + 1;
      if (a < 1)
        throw new Error();
      this.month = a % 12 || a;
    }], Y: [/[+-]?\d+/, d("year")], YY: [u, function(n) {
      this.year = M(n);
    }], YYYY: [/\d{4}/, d("year")], Z: y, ZZ: y };
    function $(n) {
      var a, c;
      a = n, c = f && f.formats;
      for (var m = (n = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(C, x, Y) {
        var D = Y && Y.toUpperCase();
        return x || c[Y] || e[Y] || c[D].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(S, z, U) {
          return z || U.slice(1);
        });
      })).match(s), w = m.length, O = 0; O < w; O += 1) {
        var E = m[O], j = I[E], L = j && j[0], k = j && j[1];
        m[O] = k ? { regex: L, parser: k } : E.replace(/^\[|\]$/g, "");
      }
      return function(C) {
        for (var x = {}, Y = 0, D = 0; Y < w; Y += 1) {
          var S = m[Y];
          if (typeof S == "string")
            D += S.length;
          else {
            var z = S.regex, U = S.parser, v = C.slice(D), H = z.exec(v)[0];
            U.call(x, H), C = C.replace(H, "");
          }
        }
        return function(P) {
          var F = P.afternoon;
          if (F !== void 0) {
            var g = P.hours;
            F ? g < 12 && (P.hours += 12) : g === 12 && (P.hours = 0), delete P.afternoon;
          }
        }(x), x;
      };
    }
    return function(n, a, c) {
      c.p.customParseFormat = !0, n && n.parseTwoDigitYear && (M = n.parseTwoDigitYear);
      var m = a.prototype, w = m.parse;
      m.parse = function(O) {
        var E = O.date, j = O.utc, L = O.args;
        this.$u = j;
        var k = L[1];
        if (typeof k == "string") {
          var C = L[2] === !0, x = L[3] === !0, Y = C || x, D = L[2];
          x && (D = L[2]), f = this.$locale(), !C && D && (f = c.Ls[D]), this.$d = function(v, H, P, F) {
            try {
              if (["x", "X"].indexOf(H) > -1)
                return new Date((H === "X" ? 1e3 : 1) * v);
              var g = $(H)(v), Z = g.year, V = g.month, dt = g.day, ht = g.hours, ct = g.minutes, lt = g.seconds, mt = g.milliseconds, tt = g.zone, et = g.week, _ = /* @__PURE__ */ new Date(), G = dt || (Z || V ? 1 : _.getDate()), X = Z || _.getFullYear(), B = 0;
              Z && !V || (B = V > 0 ? V - 1 : _.getMonth());
              var N, Q = ht || 0, q = ct || 0, R = lt || 0, J = mt || 0;
              return tt ? new Date(Date.UTC(X, B, G, Q, q, R, J + 60 * tt.offset * 1e3)) : P ? new Date(Date.UTC(X, B, G, Q, q, R, J)) : (N = new Date(X, B, G, Q, q, R, J), et && (N = F(N).week(et).toDate()), N);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(E, k, j, c), this.init(), D && D !== !0 && (this.$L = this.locale(D).$L), Y && E != this.format(k) && (this.$d = /* @__PURE__ */ new Date("")), f = {};
        } else if (k instanceof Array)
          for (var S = k.length, z = 1; z <= S; z += 1) {
            L[1] = k[z - 1];
            var U = c.apply(this, L);
            if (U.isValid()) {
              this.$d = U.$d, this.$L = U.$L, this.init();
              break;
            }
            z === S && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          w.call(this, O);
      };
    };
  });
})(it);
var Dt = it.exports;
const Yt = /* @__PURE__ */ W(Dt);
var at = { exports: {} };
(function(l, t) {
  (function(e, s) {
    l.exports = s();
  })(b, function() {
    var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(s, h, u) {
      var i = h.prototype, o = i.format;
      u.en.formats = e, i.format = function(f) {
        f === void 0 && (f = "YYYY-MM-DDTHH:mm:ssZ");
        var M = this.$locale().formats, d = function(y, T) {
          return y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(A, I, $) {
            var n = $ && $.toUpperCase();
            return I || T[$] || e[$] || T[n].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(a, c, m) {
              return c || m.slice(1);
            });
          });
        }(f, M === void 0 ? {} : M);
        return o.call(this, d);
      };
    };
  });
})(at);
var wt = at.exports;
const Ot = /* @__PURE__ */ W(wt);
var ut = { exports: {} };
(function(l, t) {
  (function(e, s) {
    l.exports = s();
  })(b, function() {
    return function(e, s, h) {
      s.prototype.isBetween = function(u, i, o, f) {
        var M = h(u), d = h(i), y = (f = f || "()")[0] === "(", T = f[1] === ")";
        return (y ? this.isAfter(M, o) : !this.isBefore(M, o)) && (T ? this.isBefore(d, o) : !this.isAfter(d, o)) || (y ? this.isBefore(M, o) : !this.isAfter(M, o)) && (T ? this.isAfter(d, o) : !this.isBefore(d, o));
      };
    };
  });
})(ut);
var Lt = ut.exports;
const kt = /* @__PURE__ */ W(Lt);
var ft = { exports: {} };
(function(l, t) {
  (function(e, s) {
    l.exports = s();
  })(b, function() {
    return function(e, s) {
      var h = s.prototype, u = h.format;
      h.format = function(i) {
        var o = this, f = this.$locale();
        if (!this.isValid())
          return u.bind(this)(i);
        var M = this.$utils(), d = (i || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(y) {
          switch (y) {
            case "Q":
              return Math.ceil((o.$M + 1) / 3);
            case "Do":
              return f.ordinal(o.$D);
            case "gggg":
              return o.weekYear();
            case "GGGG":
              return o.isoWeekYear();
            case "wo":
              return f.ordinal(o.week(), "W");
            case "w":
            case "ww":
              return M.s(o.week(), y === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return M.s(o.isoWeek(), y === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return M.s(String(o.$H === 0 ? 24 : o.$H), y === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(o.$d.getTime() / 1e3);
            case "x":
              return o.$d.getTime();
            case "z":
              return "[" + o.offsetName() + "]";
            case "zzz":
              return "[" + o.offsetName("long") + "]";
            default:
              return y;
          }
        });
        return u.bind(this)(d);
      };
    };
  });
})(ft);
var xt = ft.exports;
const St = /* @__PURE__ */ W(xt), rt = /* @__PURE__ */ new Set();
function zt(l, t = "warning") {
  if (process.env.NODE_ENV === "production")
    return;
  const e = Array.isArray(l) ? l.join(`
`) : l;
  rt.has(e) || (rt.add(e), t === "error" ? console.error(e) : console.warn(e));
}
p.extend(Ot);
p.extend(Tt);
p.extend(kt);
p.extend(St);
const jt = {
  // Year
  YY: "year",
  YYYY: {
    sectionType: "year",
    contentType: "digit",
    maxLength: 4
  },
  // Month
  M: {
    sectionType: "month",
    contentType: "digit",
    maxLength: 2
  },
  MM: "month",
  MMM: {
    sectionType: "month",
    contentType: "letter"
  },
  MMMM: {
    sectionType: "month",
    contentType: "letter"
  },
  // Day of the month
  D: {
    sectionType: "day",
    contentType: "digit",
    maxLength: 2
  },
  DD: "day",
  Do: {
    sectionType: "day",
    contentType: "digit-with-letter"
  },
  // Day of the week
  d: {
    sectionType: "weekDay",
    contentType: "digit",
    maxLength: 2
  },
  dd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  ddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  dddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  // Meridiem
  A: "meridiem",
  a: "meridiem",
  // Hours
  H: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  HH: "hours",
  h: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  hh: "hours",
  // Minutes
  m: {
    sectionType: "minutes",
    contentType: "digit",
    maxLength: 2
  },
  mm: "minutes",
  // Seconds
  s: {
    sectionType: "seconds",
    contentType: "digit",
    maxLength: 2
  },
  ss: "seconds"
}, Ct = {
  year: "YYYY",
  month: "MMMM",
  monthShort: "MMM",
  dayOfMonth: "D",
  dayOfMonthFull: "Do",
  weekday: "dddd",
  weekdayShort: "dd",
  hours24h: "HH",
  hours12h: "hh",
  meridiem: "A",
  minutes: "mm",
  seconds: "ss",
  fullDate: "ll",
  keyboardDate: "L",
  shortDate: "MMM D",
  normalDate: "D MMMM",
  normalDateWithWeekday: "ddd, MMM D",
  fullTime12h: "hh:mm A",
  fullTime24h: "HH:mm",
  keyboardDateTime12h: "L hh:mm A",
  keyboardDateTime24h: "L HH:mm"
};
function K() {
  throw new Error(process.env.NODE_ENV !== "production" ? "MUI X Date Pickers: Missing dayjs UTC plugin. UTC and timezone support requires the dayjs UTC plugin to be enabled. See https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc for setup instructions." : nt(138));
}
function st() {
  throw new Error(process.env.NODE_ENV !== "production" ? "MUI X Date Pickers: Missing dayjs timezone plugin. Timezone support requires both the dayjs UTC and timezone plugins to be enabled. See https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone for setup instructions." : nt(139));
}
class Et {
  constructor({
    locale: t,
    formats: e
  } = {}) {
    r(this, "isMUIAdapter", !0);
    r(this, "isTimezoneCompatible", !0);
    r(this, "lib", "dayjs");
    r(this, "escapedCharacters", {
      start: "[",
      end: "]"
    });
    r(this, "formatTokenMap", jt);
    r(this, "setLocaleToValue", (t) => {
      const e = this.getCurrentLocaleCode();
      return e === t.locale() ? t : t.locale(e);
    });
    r(this, "hasUTCPlugin", () => typeof p.utc < "u");
    r(this, "hasTimezonePlugin", () => typeof p.tz < "u");
    r(this, "isSame", (t, e, s) => {
      const h = this.setTimezone(e, this.getTimezone(t));
      return t.format(s) === h.format(s);
    });
    /**
     * Replaces "default" by undefined and "system" by the system timezone before passing it to `dayjs`.
     */
    r(this, "cleanTimezone", (t) => {
      switch (t) {
        case "default":
          return;
        case "system":
          return p.tz.guess();
        default:
          return t;
      }
    });
    r(this, "createSystemDate", (t) => this.setLocaleToValue(p(t)));
    r(this, "createUTCDate", (t) => (this.hasUTCPlugin() || K(), this.setLocaleToValue(p.utc(t))));
    r(this, "createTZDate", (t, e) => {
      this.hasUTCPlugin() || K(), this.hasTimezonePlugin() || st();
      const s = t !== void 0 && !t.endsWith("Z");
      return this.setLocaleToValue(p(t).tz(this.cleanTimezone(e), s));
    });
    r(this, "getLocaleFormats", () => {
      const t = p.Ls, e = this.locale || "en";
      let s = t[e];
      return s === void 0 && (process.env.NODE_ENV !== "production" && zt(["MUI X: Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale.", "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", "fallback on English locale."]), s = t.en), s.formats;
    });
    /**
     * If the new day does not have the same offset as the old one (when switching to summer day time for example),
     * Then dayjs will not automatically adjust the offset (moment does).
     * We have to parse again the value to make sure the `fixOffset` method is applied.
     * See https://github.com/iamkun/dayjs/blob/b3624de619d6e734cd0ffdbbd3502185041c1b60/src/plugin/timezone/index.js#L72
     */
    r(this, "adjustOffset", (t) => {
      if (!this.hasTimezonePlugin())
        return t;
      const e = this.getTimezone(t);
      if (e !== "UTC") {
        const s = t.tz(this.cleanTimezone(e), !0);
        if (s.$offset === (t.$offset ?? 0))
          return t;
        t.$offset = s.$offset;
      }
      return t;
    });
    /**
     * On dates predating the timezone standardization, IANA falls back on the Local Mean Time of the
     * location, whose offset is not a round number of minutes (`Asia/Kolkata` is `GMT+05:53:28`).
     * `dayjs` then moves the day of the month when only the year or the month was meant to change.
     * `daysInMonth()` is unusable on such a value because it derives from the equally broken
     * `endOf('month')`, hence computing it on a plain UTC value instead.
     * See https://github.com/mui/mui-x/issues/23163
     */
    r(this, "restoreDayOfMonth", (t, e) => {
      const s = this.getTimezone(t);
      if (!this.hasUTCPlugin() || s === "system" || s === "UTC")
        return t;
      const h = p.utc(t.format("YYYY-MM-DDTHH:mm:ss.SSS"));
      if (!h.isValid())
        return t;
      const u = Math.min(e.date(), h.daysInMonth());
      return t.date() === u ? t : t.set("date", u);
    });
    r(this, "date", (t, e = "default") => t === null ? null : e === "UTC" ? this.createUTCDate(t) : e === "system" || e === "default" && !this.hasTimezonePlugin() ? this.createSystemDate(t) : this.createTZDate(t, e));
    r(this, "getInvalidDate", () => p(/* @__PURE__ */ new Date("Invalid date")));
    r(this, "getTimezone", (t) => {
      var e;
      if (this.hasTimezonePlugin()) {
        const s = (e = t.$x) == null ? void 0 : e.$timezone;
        if (s)
          return s;
      }
      return this.hasUTCPlugin() && t.isUTC() ? "UTC" : "system";
    });
    r(this, "setTimezone", (t, e) => {
      if (this.getTimezone(t) === e)
        return t;
      if (e === "UTC")
        return this.hasUTCPlugin() || K(), t.utc();
      if (e === "system")
        return t.local();
      if (!this.hasTimezonePlugin()) {
        if (e === "default")
          return t;
        st();
      }
      return this.setLocaleToValue(p.tz(t, this.cleanTimezone(e)));
    });
    r(this, "toJsDate", (t) => t.toDate());
    r(this, "parse", (t, e) => t === "" ? null : p(t, e, this.locale, !0));
    r(this, "getCurrentLocaleCode", () => this.locale || "en");
    r(this, "is12HourCycleInCurrentLocale", () => /A|a/.test(this.getLocaleFormats().LT || ""));
    r(this, "expandFormat", (t) => {
      const e = this.getLocaleFormats(), s = (h) => h.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (u, i, o) => i || o.slice(1));
      return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (h, u, i) => {
        const o = i && i.toUpperCase();
        return u || e[i] || s(e[o]);
      });
    });
    r(this, "isValid", (t) => t == null ? !1 : t.isValid());
    r(this, "format", (t, e) => this.formatByString(t, this.formats[e]));
    r(this, "formatByString", (t, e) => this.setLocaleToValue(t).format(e));
    r(this, "formatNumber", (t) => t);
    r(this, "isEqual", (t, e) => t === null && e === null ? !0 : t === null || e === null ? !1 : t.toDate().getTime() === e.toDate().getTime());
    r(this, "isSameYear", (t, e) => this.isSame(t, e, "YYYY"));
    r(this, "isSameMonth", (t, e) => this.isSame(t, e, "YYYY-MM"));
    r(this, "isSameDay", (t, e) => this.isSame(t, e, "YYYY-MM-DD"));
    r(this, "isSameHour", (t, e) => t.isSame(e, "hour"));
    r(this, "isAfter", (t, e) => t > e);
    r(this, "isAfterYear", (t, e) => this.hasUTCPlugin() ? !this.isSameYear(t, e) && t.utc() > e.utc() : t.isAfter(e, "year"));
    r(this, "isAfterDay", (t, e) => this.hasUTCPlugin() ? !this.isSameDay(t, e) && t.utc() > e.utc() : t.isAfter(e, "day"));
    r(this, "isBefore", (t, e) => t < e);
    r(this, "isBeforeYear", (t, e) => this.hasUTCPlugin() ? !this.isSameYear(t, e) && t.utc() < e.utc() : t.isBefore(e, "year"));
    r(this, "isBeforeDay", (t, e) => this.hasUTCPlugin() ? !this.isSameDay(t, e) && t.utc() < e.utc() : t.isBefore(e, "day"));
    r(this, "isWithinRange", (t, [e, s]) => t >= e && t <= s);
    r(this, "startOfYear", (t) => this.adjustOffset(t.startOf("year")));
    r(this, "startOfMonth", (t) => this.adjustOffset(t.startOf("month")));
    r(this, "startOfWeek", (t) => this.adjustOffset(this.setLocaleToValue(t).startOf("week")));
    r(this, "startOfDay", (t) => this.adjustOffset(t.startOf("day")));
    r(this, "endOfYear", (t) => this.adjustOffset(t.endOf("year")));
    r(this, "endOfMonth", (t) => this.adjustOffset(t.endOf("month")));
    r(this, "endOfWeek", (t) => this.adjustOffset(this.setLocaleToValue(t).endOf("week")));
    r(this, "endOfDay", (t) => this.adjustOffset(t.endOf("day")));
    r(this, "addYears", (t, e) => this.adjustOffset(this.restoreDayOfMonth(t.add(e, "year"), t)));
    r(this, "addMonths", (t, e) => this.adjustOffset(this.restoreDayOfMonth(t.add(e, "month"), t)));
    r(this, "addWeeks", (t, e) => this.adjustOffset(t.add(e, "week")));
    r(this, "addDays", (t, e) => this.adjustOffset(t.add(e, "day")));
    r(this, "addHours", (t, e) => this.adjustOffset(t.add(e, "hour")));
    r(this, "addMinutes", (t, e) => this.adjustOffset(t.add(e, "minute")));
    r(this, "addSeconds", (t, e) => this.adjustOffset(t.add(e, "second")));
    r(this, "getYear", (t) => t.year());
    r(this, "getMonth", (t) => t.month());
    r(this, "getDate", (t) => t.date());
    r(this, "getHours", (t) => t.hour());
    r(this, "getMinutes", (t) => t.minute());
    r(this, "getSeconds", (t) => t.second());
    r(this, "getMilliseconds", (t) => t.millisecond());
    r(this, "setYear", (t, e) => this.adjustOffset(this.restoreDayOfMonth(t.set("year", e), t)));
    r(this, "setMonth", (t, e) => this.adjustOffset(this.restoreDayOfMonth(t.set("month", e), t)));
    r(this, "setDate", (t, e) => this.adjustOffset(t.set("date", e)));
    r(this, "setHours", (t, e) => this.adjustOffset(t.set("hour", e)));
    r(this, "setMinutes", (t, e) => this.adjustOffset(t.set("minute", e)));
    r(this, "setSeconds", (t, e) => this.adjustOffset(t.set("second", e)));
    r(this, "setMilliseconds", (t, e) => this.adjustOffset(t.set("millisecond", e)));
    r(this, "getDaysInMonth", (t) => t.daysInMonth());
    r(this, "getWeekArray", (t) => {
      const e = this.startOfWeek(this.startOfMonth(t)), s = this.endOfWeek(this.endOfMonth(t));
      let h = 0, u = e;
      const i = [];
      for (; u < s; ) {
        const o = Math.floor(h / 7);
        i[o] = i[o] || [], i[o].push(u), u = this.addDays(u, 1), h += 1;
      }
      return i;
    });
    r(this, "getWeekNumber", (t) => t.week());
    r(this, "getYearRange", ([t, e]) => {
      const s = this.startOfYear(t), h = this.endOfYear(e), u = [];
      let i = s;
      for (; this.isBefore(i, h); )
        u.push(i), i = this.addYears(i, 1);
      return u;
    });
    this.locale = t, this.formats = yt({}, Ct, e), p.extend(Yt);
  }
  getDayOfWeek(t) {
    return t.day() + 1;
  }
}
export {
  Et as A
};
