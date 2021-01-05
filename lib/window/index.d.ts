import React from 'react';
export interface SwitchWindowProps {
    onSwitch?: (evt: any) => void;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
/**
 * 窗口切换事件监听，
 * 用法：
 * <SwitchWindow onSwitch={}></SwitchWindow>
 */
declare class SwitchWindow extends React.Component<SwitchWindowProps, any> {
    componentDidMount(): void;
    listener: (e: any) => void;
    componentWillUnmount(): void;
    initEvent: () => void;
    render(): JSX.Element;
}
export default SwitchWindow;
