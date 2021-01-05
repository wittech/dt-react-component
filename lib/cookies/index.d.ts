import React from 'react';
interface Filds {
    key?: string;
    value?: string;
}
export interface CookiesProps {
    watchFields?: string[];
    onChanged?: (old: string, newCookie: string) => void;
    onFieldsChanged?: (fields: Filds[]) => void;
    children?: React.ReactNode;
}
declare class Cookies extends React.Component<CookiesProps, any> {
    _currentCookies: string;
    private _timerId;
    componentDidMount(): void;
    componentWillUnmount(): void;
    compareValue: () => void;
    onFieldsChange: (old: string, newCookies: string) => void;
    getCookieValue: (cookies: string, name: string) => string;
    initEvent: () => void;
    render(): JSX.Element;
}
export default Cookies;
