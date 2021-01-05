import React from 'react';
interface Opts {
    label?: string;
    value?: string | number;
    disabled?: boolean;
}
interface MulSelectDropdownProps {
    popupContainer?: any;
    onChange?: (checked: any) => void;
    options: Opts[];
    value: any[];
    onOk: (sel: any) => void;
    renderNode: Function;
}
interface MulSelectDropdownStates {
    visible: boolean;
    selectVal: any[];
    allKeys: Array<string | number>;
    disabledKeys: Array<string | number>;
    indeterminate: boolean;
}
export default class MulSelectDropdown extends React.Component<MulSelectDropdownProps, MulSelectDropdownStates> {
    state: MulSelectDropdownStates;
    componentDidMount(): void;
    componentDidUpdate(preProps: any): void;
    handleCheckboxChange: (checkedValue: any) => void;
    handleCheckAllChange: () => void;
    handleCancel: () => void;
    handleOk: () => void;
    handleOpen: () => void;
    render(): JSX.Element;
}
export {};
