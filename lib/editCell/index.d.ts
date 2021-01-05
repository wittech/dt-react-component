import React from 'react';
declare type EditType = string | number;
export interface EditCellProps {
    value: string;
    keyField: string;
    isView?: boolean;
    onHandleEdit: (keyField: string, editValue: EditType) => void;
}
export interface EditCellStates {
    isEdit: boolean;
    editValue: EditType;
}
export default class EditCell extends React.PureComponent<EditCellProps, EditCellStates> {
    state: EditCellStates;
    componentDidMount(): void;
    onEdit: () => void;
    onChangeEdit: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onOkEdit: () => void;
    onCancelEdit: () => void;
    render(): JSX.Element;
}
export {};
