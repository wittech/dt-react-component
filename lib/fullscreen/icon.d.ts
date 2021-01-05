import React from 'react';
export interface IconProps {
    themeDark?: boolean;
    type?: boolean;
    className?: string;
    alt?: string;
    [propName: string]: any;
}
export default class Icon extends React.Component<IconProps, any> {
    getBase64ImgSrc: (type: boolean, themeDark: boolean) => string;
    render(): JSX.Element;
}
