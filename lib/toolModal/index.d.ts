import React from 'react';
export interface ToolModalProps {
    visible: boolean;
    toolbox?: React.ReactNode | string;
    fullscreen?: boolean | undefined;
    children?: React.ReactNode;
    [propName: string]: any;
}
export interface ToolModalStates {
    isFullscreen: boolean;
    modalStyle?: React.CSSProperties;
    className?: string;
}
export default class DTModal extends React.Component<ToolModalProps, ToolModalStates> {
    state: ToolModalStates;
    exChangeModalStyle: (isFullscreen: boolean) => void;
    onEleFullScreen: () => void;
    renderToolbox: () => JSX.Element;
    render(): JSX.Element;
}
