import e from "react";
class a extends e.Component {
  constructor(r) {
    super(r), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(r) {
    return { hasError: !0 };
  }
  componentDidCatch(r, t) {
    console.log(r, t.componentStack);
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
export {
  a as ErrorBoundary
};
