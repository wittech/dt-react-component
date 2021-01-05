import React from 'react';
export interface GlobalLoadingProps {
    prefix?: string;
    loadingTitle?: string;
    mainBackground?: string;
    circleBackground?: string;
    titleColor?: string;
}
export default class GlobalLoading extends React.Component<GlobalLoadingProps, any> {
    render(): JSX.Element;
}
