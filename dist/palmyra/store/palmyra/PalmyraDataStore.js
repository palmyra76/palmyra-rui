import { PalmyraGridStore as a } from "./PalmyraGridStore.js";
class o extends a {
  constructor(t, s, e) {
    super(t, s, e);
  }
  save(t, s) {
    var e = this.target + this.postUrl(), r = this.formatUrl(e, s);
    return this.isUrlValid(r) || this.getClient().post(r, t, { headers: { action: "save" } }).then((i) => i.data);
  }
  post(t, s) {
    var e = this.target + this.postUrl(), r = this.formatUrl(e, s);
    return this.isUrlValid(r) || this.getClient().post(r, t).then((i) => i.data);
  }
  put(t, s) {
    var e = this.target + this.putUrl(), r = this.formatUrl(e, s);
    return this.isUrlValid(r) || this.getClient().put(r, t).then((i) => i.data);
  }
  remove(t, s) {
    var e = this.target + this.deleteUrl(), r = this.formatUrl(e, t);
    return this.isUrlValid(r) || this.getClient().delete(r, { data: {} }).then((i) => i.data);
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
