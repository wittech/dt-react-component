import React from 'react';
export interface GoBackProps {
    url?: string;
    autoClose?: boolean;
    style?: React.CSSProperties;
    history?: boolean;
}
export default class GoBack extends React.Component<GoBackProps, any> {
    go: () => void;
    getButtonView(): JSX.Element;
    render(): JSX.Element;
}
