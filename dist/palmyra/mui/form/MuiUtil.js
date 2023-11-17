const d = (e, i, r) => {
  var a = {
    disabled: e.disabled,
    required: e.required,
    placeholder: e.placeHolder,
    value: i,
    variant: e.variant
  };
  return r && (a.label = r), a;
};
export {
  d as copyMuiOptions
};
