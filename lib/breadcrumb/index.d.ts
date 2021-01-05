import React from 'react';
interface Route {
    path?: string;
    name?: string;
}
interface IProps {
    routes: Route[];
    style?: React.CSSProperties;
}
export default function BreadcrumbRender(props: IProps): JSX.Element;
export {};
