import React from "react";
interface ErrorState {
    hasError: boolean;
}
interface PropsArgs {
    children: any;
    fallback: any;
}
declare class ErrorBoundary extends React.Component<PropsArgs, ErrorState> {
    constructor(props: any);
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
    };
    componentDidCatch(error: any, info: any): void;
    render(): any;
}
export { ErrorBoundary };
