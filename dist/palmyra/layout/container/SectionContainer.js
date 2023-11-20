import { jsxs as c, jsx as t } from "react/jsx-runtime";
/* empty css                               */const s = (e) => {
  const i = e.title, n = e.hideTitle || !1;
  return /* @__PURE__ */ c("div", { className: "section-container", children: [
    i && !n ? /* @__PURE__ */ t("div", { className: "palmyra-form-section-header", children: i }) : "",
    /* @__PURE__ */ t("div", { className: "section-container-child", children: e.children })
  ] });
};
export {
  s as default
};
