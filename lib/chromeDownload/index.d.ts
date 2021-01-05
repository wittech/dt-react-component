import React from 'react';
interface ChromeDownloadProps {
    downloadChrome?: (chromeOfOsType?: 'macChrome' | 'windowsChrome' | 'others') => void;
    className?: string;
    style?: React.CSSProperties;
}
export default class ChromeDownload extends React.Component<ChromeDownloadProps, any> {
    constructor(props: ChromeDownloadProps);
    renderDivide(name: string): JSX.Element;
    detectOS(): "macChrome" | "windowsChrome" | "others";
    render(): JSX.Element;
}
export {};
