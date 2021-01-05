import React from 'react';
export interface TextMarkProps {
    text?: string;
    markText?: string;
    [propName: string]: any;
}
declare class TextMark extends React.Component<TextMarkProps, any> {
    renderMark(text?: string, markText?: string): React.ReactNode | string;
    render(): JSX.Element;
}
export default TextMark;
