var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import React, { Component } from 'react';
import { Modal, Form } from 'antd';
function ModalWithForm(FormComponent) {
    return Form.create()(/** @class */ (function (_super) {
        __extends(ModalForm, _super);
        function ModalForm(props) {
            var _this = _super.call(this, props) || this;
            _this.okHandler = function () {
                var _a = _this.props, record = _a.record, onSubmit = _a.onSubmit, hideModelHandler = _a.hideModelHandler;
                _this.props.form.validateFields(function (err, values) {
                    if (!err) {
                        onSubmit(values, record);
                        hideModelHandler();
                    }
                });
            };
            return _this;
        }
        ModalForm.prototype.render = function () {
            var _a = this.props, form = _a.form, title = _a.title, visible = _a.visible, okText = _a.okText, cancelText = _a.cancelText, hideModelHandler = _a.hideModelHandler, modelClass = _a.modelClass;
            return (React.createElement(React.Fragment, null,
                React.createElement(Modal, { className: modelClass, title: title, visible: visible, onOk: this.okHandler, onCancel: hideModelHandler, okText: okText, cancelText: cancelText },
                    React.createElement(FormComponent, __assign({ form: form }, this.props)))));
        };
        return ModalForm;
    }(Component)));
}
export default ModalWithForm;
