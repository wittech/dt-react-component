import React from 'react';
import { FormComponentProps } from 'antd/lib/form/Form';
export interface ModalProps {
    hideModelHandler: () => any;
    onSubmit: (values: any, record: any) => void;
    cancelText?: string;
    okText?: string;
    record?: string | number | object;
    visible?: boolean;
    title?: React.ReactNode | string;
    onCancel?: (func: Function) => any;
    width?: string | number;
    modelClass?: string;
}
declare function ModalWithForm(FormComponent: any): import("antd/lib/form/interface").ConnectedComponentClass<{
    new (props: any): {
        okHandler: () => void;
        render(): JSX.Element;
        context: any;
        setState<K extends string>(state: any, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<ModalProps & FormComponentProps<any>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<ModalProps & FormComponentProps<any>>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<ModalProps & FormComponentProps<any>>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<ModalProps & FormComponentProps<any>>, prevState: Readonly<any>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<ModalProps & FormComponentProps<any>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<ModalProps & FormComponentProps<any>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<ModalProps & FormComponentProps<any>>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<ModalProps & FormComponentProps<any>>, nextState: Readonly<any>, nextContext: any): void;
    };
    contextType?: React.Context<any>;
}, Pick<any, string>>;
export default ModalWithForm;
