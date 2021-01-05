import React from 'react';
export interface SlidePaneProps {
    children: React.ReactNode;
    visible: boolean;
    left?: string | number;
    width?: string | number;
    className?: string;
    style?: React.CSSProperties;
    onClose?<HTMLSpanElement, MouseEvent>(): void;
    [propName: string]: any;
}
declare class SlidePane extends React.Component<SlidePaneProps, any> {
    constructor(props: SlidePaneProps);
    render(): JSX.Element;
}
export default SlidePane;
