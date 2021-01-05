import React from 'react';
export interface ContextMenuProps {
    key?: string;
    targetClassName?: string;
    onChange?: Function;
    [propName: string]: any;
}
export interface ContextMenuItemProps {
    key?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    value?: string;
    [propName: string]: any;
}
export declare class ContextMenuItem extends React.Component<ContextMenuItemProps, any> {
    render(): JSX.Element;
}
export default class ContextMenu extends React.Component<ContextMenuProps, any> {
    constructor(props: ContextMenuProps);
    static ContextMenuItem: typeof ContextMenuItem;
    selfEle: HTMLElement;
    componentDidMount(): void;
    componentWillUnmount(): void;
    toggleMenu(evt: MouseEvent): void;
    hideAll(): void;
    closeMenu(evt: MouseEvent): void;
    removeMenu(evt: MouseEvent): void;
    findParent(child: HTMLElement, selector: string): any;
    render(): JSX.Element;
}
