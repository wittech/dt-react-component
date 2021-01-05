import React from 'react';
export interface FullScreenProps {
    themeDark?: boolean;
    target?: string;
    customIcon?: boolean;
    iconStyle?: object;
    fullIcon?: React.ReactNode;
    exitFullIcon?: React.ReactNode;
    [propName: string]: any;
}
export interface FullScreenButtonState {
    isFullScreen: boolean;
}
export default class FullScreenButton extends React.Component<FullScreenProps, FullScreenButtonState> {
    state: FullScreenButtonState;
    /**
     * 在一定情况下chrome不会触发resize事件，所以手动触发一下resize。
     */
    dispatchResizeEvent(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    keyPressFullScreen: (evt: React.KeyboardEvent<Element>) => void;
    fullScreen: () => void;
    render(): JSX.Element;
}
