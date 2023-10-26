import React from "react";

interface ErrorState{
    hasError:boolean
}

interface PropsArgs {
    children:any,
    fallback:any
}

class ErrorBoundary extends React.Component<PropsArgs, ErrorState> {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {        
        console.error(error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}

export { ErrorBoundary };