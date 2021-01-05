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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React from 'react';
import { Checkbox, Dropdown, Button, Divider } from 'antd';
import { isEqual } from 'lodash';
var MulSelectDropdown = /** @class */ (function (_super) {
    __extends(MulSelectDropdown, _super);
    function MulSelectDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            visible: false,
            selectVal: [],
            allKeys: [],
            indeterminate: false,
            disabledKeys: []
        };
        _this.handleCheckboxChange = function (checkedValue) {
            var allKeys = _this.state.allKeys;
            _this.setState({
                selectVal: checkedValue,
                indeterminate: Boolean(checkedValue.length && checkedValue.length !== allKeys.length)
            });
            _this.props.onChange && _this.props.onChange(checkedValue);
        };
        _this.handleCheckAllChange = function () {
            var _a = _this.state, allKeys = _a.allKeys, selectVal = _a.selectVal, disabledKeys = _a.disabledKeys;
            var newSelectVal = selectVal.length === allKeys.length ? disabledKeys : __spreadArrays(allKeys);
            _this.setState({
                selectVal: newSelectVal,
                indeterminate: false
            });
            _this.props.onChange && _this.props.onChange(newSelectVal);
        };
        _this.handleCancel = function () {
            _this.setState({
                visible: false
            });
        };
        _this.handleOk = function () {
            var selectVal = _this.state.selectVal;
            _this.handleCancel();
            _this.props.onOk(selectVal);
        };
        _this.handleOpen = function () {
            _this.setState({
                visible: true
            });
        };
        return _this;
    }
    MulSelectDropdown.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, options = _a.options, value = _a.value;
        var allKeys = [];
        var disabledKeys = [];
        options.forEach(function (item) {
            allKeys.push(item.value);
            item.disabled && disabledKeys.push(item.value);
        });
        this.setState({
            allKeys: allKeys,
            disabledKeys: disabledKeys
        }, function () {
            _this.handleCheckboxChange(value);
        });
    };
    MulSelectDropdown.prototype.componentDidUpdate = function (preProps) {
        var value = this.props.value;
        if (!isEqual(value, preProps.value)) {
            this.handleCheckboxChange(value);
        }
    };
    MulSelectDropdown.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.popupContainer, popupContainer = _b === void 0 ? function () { return document.body; } : _b, _c = _a.options, options = _c === void 0 ? [] : _c, _d = _a.renderNode, renderNode = _d === void 0 ? function (openFun) { return (React.createElement("span", { onClick: openFun }, "\u6253\u5F00")); } : _d;
        var _e = this.state, visible = _e.visible, selectVal = _e.selectVal, indeterminate = _e.indeterminate, allKeys = _e.allKeys;
        var overlay = (React.createElement("div", { className: "dtc-option-select-overlay" },
            React.createElement(Checkbox.Group, { onChange: this.handleCheckboxChange, value: selectVal },
                React.createElement("div", { className: 'dtc-option-select-overlay-menu' }, options.map(function (item) { return React.createElement("div", { className: "dtc-option-select-overlay-row", key: item.value },
                    React.createElement(Checkbox, { disabled: item.disabled, value: item.value }, item.label)); }))),
            React.createElement(Divider, null),
            React.createElement("div", { className: "dtc-option-select-overlay-row footer-box" },
                React.createElement(Checkbox, { onChange: this.handleCheckAllChange, checked: selectVal.length === allKeys.length, indeterminate: indeterminate }, "\u5168\u9009"),
                React.createElement("span", null,
                    React.createElement("a", { style: { marginRight: 8 }, "data-testid": "select_cancel_btn", onClick: this.handleCancel }, "\u5173\u95ED"),
                    React.createElement(Button, { type: "primary", size: "small", onClick: this.handleOk }, "\u786E\u5B9A")))));
        return (React.createElement(Dropdown, { visible: visible, trigger: ['click'], overlay: overlay, overlayClassName: "dtc-mul-select-dropdown", getPopupContainer: popupContainer, onVisibleChange: function (visible) { !visible && _this.handleCancel(); } }, renderNode(this.handleOpen)));
    };
    return MulSelectDropdown;
}(React.Component));
export default MulSelectDropdown;
