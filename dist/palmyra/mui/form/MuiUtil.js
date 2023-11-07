const a = (e, l, r) => {
  var d = {
    disabled: e.disabled,
    required: e.required,
    placeholder: e.placeHolder,
    value: l
  };
  return r && (d.label = r), d;
};
export {
  a as copyMuiOptions
};
