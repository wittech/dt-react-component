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
import React from 'react';
import { Input, message } from 'antd';
var EditInput = /** @class */ (function (_super) {
    __extends(EditInput, _super);
    function EditInput(props) {
        var _this = _super.call(this, props) || this;
        _this.onChangeInput = function (e) {
            _this.props.onChange(e);
        };
        _this.onChangeValue = function (e) {
            var value = e.target.value;
            var max = _this.props.max;
            if (value && max && value.length > max) {
                message.warning("\u5B57\u7B26\u957F\u5EA6\u4E0D\u53EF\u8D85\u8FC7" + max);
            }
            else {
                _this.setState({
                    value: value
                });
            }
        };
        _this.state = {
            value: ''
        };
        return _this;
    }
    EditInput.prototype.componentDidMount = function () {
        this.setState({
            value: this.props.value
        });
    };
    EditInput.prototype.componentDidUpdate = function (preProps) {
        var value = this.props.value;
        if (value != preProps.value) {
            this.setState({
                value: value
            });
        }
    };
    EditInput.prototype.render = function () {
        var value = this.state.value;
        return (React.createElement(Input, __assign({ className: "input" }, this.props, { value: value, onChange: this.onChangeValue, onBlur: this.onChangeInput, "data-testid": 'test-input' })));
    };
    return EditInput;
}(React.PureComponent));
export default EditInput;
