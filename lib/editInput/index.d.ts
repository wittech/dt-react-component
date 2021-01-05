import React from 'react';
export interface EditInputProps {
    value?: string | number;
    onChange?: (e: any) => void;
    max?: number;
    [propName: string]: any;
}
export interface EditInputPropsStates {
    value: string | number;
}
export default class EditInput extends React.PureComponent<EditInputProps, EditInputPropsStates> {
    constructor(props: EditInputProps);
    componentDidMount(): void;
    componentDidUpdate(preProps: EditInputProps): void;
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
