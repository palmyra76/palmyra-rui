var u = Object.defineProperty;
var d = (e, t, s) => t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var i = (e, t, s) => d(e, typeof t != "symbol" ? t + "" : t, s);
class r {
  constructor() {
    i(this, "columns", []);
  }
  addTextField(t) {
    return this.columns.push({ type: "string", ...t }), this;
  }
  addSelectField(t) {
    return this.columns.push({ type: "select", ...t }), this;
  }
  addDateField(t) {
    return this.columns.push({ type: "date", ...t }), this;
  }
  addTimeField(t) {
    return this.columns.push({ type: "time", ...t }), this;
  }
  addDateTimeField(t) {
    return this.columns.push({ type: "datetime", ...t }), this;
  }
  addNumberField(t) {
    return this.columns.push({ type: "number", ...t }), this;
  }
  build() {
    return this.columns;
  }
}
export {
  r as GridColumnsBuilder
};
