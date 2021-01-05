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
/**
 * Cookies 组件
 * 用法：
 * <Cookies onChanged={callback}></Cookies>
 */
var defaultIntervalTime = 200;
var Cookies = /** @class */ (function (_super) {
    __extends(Cookies, _super);
    function Cookies() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timerId = null;
        _this.compareValue = function () {
            var onChanged = _this.props.onChanged;
            var old = '' + _this._currentCookies;
            var newCookies = document.cookie;
            if (old !== newCookies) {
                if (onChanged)
                    onChanged(old, newCookies);
                _this._currentCookies = newCookies;
                _this.onFieldsChange(old, newCookies);
            }
        };
        _this.onFieldsChange = function (old, newCookies) {
            var _a = _this.props, watchFields = _a.watchFields, onFieldsChanged = _a.onFieldsChanged;
            if (watchFields) {
                var changedFields = [];
                for (var i = 0; i < watchFields.length; i++) {
                    var key = watchFields[i];
                    var originValue = _this.getCookieValue(old, key);
                    var newValue = _this.getCookieValue(newCookies, key);
                    if (originValue !== null && originValue !== newValue) {
                        console.log('fieldChanged:', key, originValue, newValue);
                        changedFields.push({ key: key, value: newValue });
                    }
                }
                if (onFieldsChanged) {
                    onFieldsChanged(changedFields);
                }
            }
        };
        // 根据 Cookies获取 name
        _this.getCookieValue = function (cookies, name) {
            if (cookies) {
                var arr = cookies.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
                if (arr != null)
                    return unescape(decodeURI(arr[2]));
            }
            return null;
        };
        _this.initEvent = function () {
            _this._timerId = setInterval(function () {
                _this.compareValue();
            }, defaultIntervalTime);
        };
        return _this;
    }
    ;
    Cookies.prototype.componentDidMount = function () {
        this.initEvent();
    };
    Cookies.prototype.componentWillUnmount = function () {
        clearInterval(this._timerId);
    };
    Cookies.prototype.render = function () {
        return (React.createElement(React.Fragment, null, this.props.children));
    };
    return Cookies;
}(React.Component));
export default Cookies;
