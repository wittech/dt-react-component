import React from 'react';
import KeyCombiner from './listener';
export interface KeyEventListenerProps {
    onKeyDown?: (e: any) => void;
    onKeyUp?: (e: any) => void;
    children?: React.ReactNode;
}
export default class KeyEventListener extends React.Component<KeyEventListenerProps, any> {
    static KeyCombiner: typeof KeyCombiner;
    componentDidMount(): void;
    componentWillUnmount(): void;
    bindEvent: (target: MouseEvent) => void;
    render(): React.ReactNode;
}
