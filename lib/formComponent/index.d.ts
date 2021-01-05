import React from 'react';
export declare type ValidationRule = {
    message?: React.ReactNode;
    type?: string;
    required?: boolean;
    whitespace?: boolean;
    len?: number;
    min?: number;
    max?: number;
    enum?: string | string[];
    pattern?: RegExp;
    transform?: (value: any) => any;
    validator?: (rule: any, value: any, callback?: any, source?: any, options?: any) => any;
};
interface ItemType {
    item?: {
        label?: React.ReactNode;
        key: string | number;
        required?: boolean;
        component?: React.ReactNode;
        options: {
            className?: string;
        };
        rules?: ValidationRule[];
    };
    layout?: {};
    getFieldDecorator: any;
}
export default function RenderFormItem({ item, layout, getFieldDecorator }: ItemType): JSX.Element;
export {};
