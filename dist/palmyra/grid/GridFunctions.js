function n(e) {
  return (t) => t.table.getFilteredRowModel().rows.reduce((r, o) => r + o.getValue(e.attribute), 0);
}
const c = { columnSum: n };
export {
  c as gridFn
};
