import { PalmyraGridStore as a } from "./PalmyraGridStore.js";
class o extends a {
  constructor(t, i, s) {
    super(t, i, s);
  }
  save(t, i) {
    var s = this.target + this.postUrl(), r = this.formatUrl(s, i);
    return this.isUrlValid(r) || this.getClient().post(r, t, { headers: { action: "save" } }).then((l) => {
      var e;
      return (e = l.data) == null ? void 0 : e.result;
    });
  }
  post(t, i) {
    var s = this.target + this.postUrl(), r = this.formatUrl(s, i);
    return this.isUrlValid(r) || this.getClient().post(r, t).then((l) => {
      var e;
      return (e = l.data) == null ? void 0 : e.result;
    });
  }
  put(t, i) {
    var s = this.target + this.putUrl(), r = this.formatUrl(s, i);
    return this.isUrlValid(r) || this.getClient().put(r, t).then((l) => {
      var e;
      return (e = l.data) == null ? void 0 : e.result;
    });
  }
  remove(t, i) {
    var s = this.target + this.deleteUrl(), r = this.formatUrl(s, t);
    return this.isUrlValid(r) || this.getClient().delete(r, { data: {} }).then((l) => {
      var e;
      return (e = l.data) == null ? void 0 : e.result;
    });
  }
  postUrl() {
    const t = this.getEndPoint();
    return typeof t == "string" ? t : t.post ? t.post : t.get;
  }
  putUrl() {
    const t = this.getEndPoint();
    return typeof t == "string" ? t : t.put;
  }
  deleteUrl() {
    const t = this.getEndPoint();
    return typeof t == "string" ? t : t.delete ? t.delete : t.put;
  }
}
export {
  o as PalmyraDataStore
};
