import React from 'react';
interface ErrorBoundaryProps {
    children?: React.ReactNode;
}
interface ErrorBoundaryStates {
    hasError: boolean;
}
export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryStates> {
    state: {
        hasError: boolean;
    };
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    render(): {};
}
export {};
