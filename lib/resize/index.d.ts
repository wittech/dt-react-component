import React from 'react';
export interface ResizeProps {
    onResize?: Function;
    children?: React.ReactNode;
}
export default class Resize extends React.Component<ResizeProps, any> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    resize: () => void;
    render(): React.ReactNode;
}
