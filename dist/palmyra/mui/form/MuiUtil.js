const d = (e, r, i) => {
  var l;
  var t = {
    disabled: e.disabled,
    required: e.required,
    placeholder: e.placeHolder,
    value: r,
    variant: e.variant,
    size: (l = e.fieldProps) == null ? void 0 : l.size
  };
  return i && (t.label = i), t;
}, a = (e) => e.required && e.title ? e.title + "*" : e.title;
export {
  d as copyMuiOptions,
  a as getFieldLabel
};
