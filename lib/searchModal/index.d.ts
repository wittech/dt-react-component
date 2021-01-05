import React from 'react';
declare const TASK_STATUS: {
    TASKDESC: number;
    TASKNAME: number;
};
export interface SearchModalProps {
    visible: boolean;
    name?: 'notebook';
    title?: string;
    onChange?: (value: string, callback: Function, search?: typeof TASK_STATUS) => void;
    onSelect?: (value: string) => void;
    onCancel?: () => void;
    [propName: string]: any;
}
declare class SearchModal extends React.Component<SearchModalProps, any> {
    state: any;
    onCancel: () => void;
    onChange: (value: any) => void;
    searchTask(value: number): void;
    onSelect: (value: any) => void;
    changeValue: (values: any) => void;
    render(): JSX.Element;
}
export default SearchModal;
