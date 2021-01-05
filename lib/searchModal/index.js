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
import { Modal, AutoComplete, Input, Row, Col, Select } from 'antd';
var Option = Select.Option;
var TASK_STATUS = {
    TASKDESC: 1,
    TASKNAME: 2
};
var SearchModal = /** @class */ (function (_super) {
    __extends(SearchModal, _super);
    function SearchModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: [],
            search: TASK_STATUS.TASKNAME
        };
        _this.onCancel = function () {
            _this.props.onCancel();
        };
        _this.onChange = function (value) {
            var onChange = _this.props.onChange;
            var search = _this.state.search;
            if (onChange) {
                onChange(value, _this.changeValue, search);
            }
        };
        _this.onSelect = function (value) {
            _this.props.onSelect(value);
        };
        _this.changeValue = function (values) {
            _this.setState({
                data: values
            });
        };
        return _this;
    }
    SearchModal.prototype.searchTask = function (value) {
        this.setState({ search: value });
    };
    SearchModal.prototype.render = function () {
        var _a = this.state, data = _a.data, search = _a.search;
        var _b = this.props, visible = _b.visible, title = _b.title, name = _b.name;
        return (React.createElement(Modal, { visible: visible, onCancel: this.onCancel, footer: null, title: title || '搜索并打开' },
            React.createElement(Row, { align: "middle", justify: "center", type: "flex" },
                name === 'notebook' && (React.createElement(Col, { span: 6 },
                    React.createElement(Select, { style: { width: '100%', marginTop: '4px' }, value: search, onChange: this.searchTask.bind(this) },
                        React.createElement(Option, { value: TASK_STATUS.TASKNAME }, "\u4EFB\u52A1\u540D\u79F0"),
                        React.createElement(Option, { value: TASK_STATUS.TASKDESC }, "\u4EFB\u52A1\u63CF\u8FF0")))),
                React.createElement(Col, { span: name === 'notebook' ? 18 : 24 },
                    React.createElement(AutoComplete, { dataSource: data, style: { width: '100%', height: '28px', margin: '8px 0' }, onSelect: this.onSelect, onSearch: this.onChange },
                        React.createElement(Input.Search, { style: { marginLeft: '8px' } }))))));
    };
    return SearchModal;
}(React.Component));
export default SearchModal;
