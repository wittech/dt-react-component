import React from 'react';
export interface KeyCombinerProps {
    onTrigger?: (evt: any) => void;
    keyMap?: {
        [key: string]: boolean;
    };
}
export interface KeyCombinerState {
    currentKeys: {
        [propName: string]: any;
    };
}
export default class KeyCombiner extends React.Component<KeyCombinerProps, KeyCombinerState> {
    constructor(props: KeyCombinerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    bindEvent: (target: KeyboardEvent) => void;
    render(): JSX.Element;
}
