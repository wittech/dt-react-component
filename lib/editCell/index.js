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
import React from 'react';
import { Input } from 'antd';
import EllipsisText from '../ellipsisText';
var EditCell = /** @class */ (function (_super) {
    __extends(EditCell, _super);
    function EditCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isEdit: false,
            editValue: ''
        };
        _this.onEdit = function () { return _this.setState({ isEdit: true }); };
        _this.onChangeEdit = function (e) {
            var value = e.target.value;
            _this.setState({
                editValue: value ? value.slice(0, 20) : ''
            });
        };
        _this.onOkEdit = function () {
            var editValue = _this.state.editValue;
            var keyField = _this.props.keyField;
            _this.props.onHandleEdit(keyField, editValue);
            _this.onCancelEdit();
        };
        _this.onCancelEdit = function () { return _this.setState({ isEdit: false }); };
        return _this;
    }
    EditCell.prototype.componentDidMount = function () {
        var value = this.props.value;
        this.setState({ editValue: value });
    };
    EditCell.prototype.render = function () {
        var _a = this.state, isEdit = _a.isEdit, editValue = _a.editValue;
        var isView = this.props.isView;
        return (React.createElement("div", { className: "dtc-edit-Cell" }, isEdit ? (React.createElement("div", { className: "dtc-edit-input-row" },
            React.createElement(Input, { value: editValue, style: { width: 150, lineHeight: 24, height: 24 }, onChange: this.onChangeEdit }),
            React.createElement("a", { onClick: this.onOkEdit }, "\u5B8C\u6210"),
            React.createElement("a", { onClick: this.onCancelEdit }, "\u53D6\u6D88"))) : (React.createElement(React.Fragment, null,
            React.createElement(EllipsisText, { value: editValue }),
            !isView && React.createElement("a", { onClick: this.onEdit }, "\u4FEE\u6539")))));
    };
    return EditCell;
}(React.PureComponent));
export default EditCell;
