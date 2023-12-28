import { PalmyraGridStore as n } from "./PalmyraGridStore.js";
class o extends n {
  constructor(t, e, r) {
    super(t, e, r);
  }
  save(t, e) {
    var r = this.target + this.postUrl(), s = this.formatUrl(r, e);
    return this.getClient().post(s, t, { headers: { action: "save" } }).then((a) => a.data);
  }
  post(t, e) {
    var r = this.target + this.postUrl(), s = this.formatUrl(r, e);
    return this.getClient().post(s, t).then((a) => a.data);
  }
  put(t, e) {
    var r = this.target + this.putUrl(), s = this.formatUrl(r, e);
    return this.getClient().put(s, t).then((a) => a.data);
  }
  remove(t, e) {
    var r = this.target + this.deleteUrl(), s = this.formatUrl(r, t);
    return this.getClient().delete(s, { data: {} }).then((a) => a.data);
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
