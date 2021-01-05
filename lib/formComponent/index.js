var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { Form, Input } from 'antd';
var FormItem = Form.Item;
export default function RenderFormItem(_a) {
    var item = _a.item, layout = _a.layout, getFieldDecorator = _a.getFieldDecorator;
    var label = item.label, key = item.key, required = item.required, component = item.component, _b = item.options, options = _b === void 0 ? {} : _b, rules = item.rules;
    return (React.createElement(FormItem, __assign({ key: key, label: label, colon: true }, layout, { className: options.className }), getFieldDecorator(key, __assign(__assign({}, options), { rules: rules || [{ required: required, message: label + "\u4E3A\u7A7A" }] }))(component || React.createElement(Input, { "data-testid": 'test-input' }))));
}
