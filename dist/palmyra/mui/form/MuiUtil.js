const d = (e, l, t) => {
  const r = e.fieldProps || {};
  var i = {
    disabled: e.disabled,
    required: e.required,
    placeholder: e.placeHolder,
    value: l,
    variant: e.variant,
    ...r
  };
  return t && (i.label = t), i;
}, a = (e) => e.required && e.title ? e.title + "*" : e.title;
export {
  d as copyMuiOptions,
  a as getFieldLabel
};
