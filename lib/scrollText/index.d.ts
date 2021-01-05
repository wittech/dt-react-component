import React from 'react';
export interface ScrollTextProps {
    value?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export default function scrollText(props: ScrollTextProps): JSX.Element;
