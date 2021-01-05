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
 * 窗口切换事件监听，
 * 用法：
 * <SwitchWindow onSwitch={}></SwitchWindow>
 */
var SwitchWindow = /** @class */ (function (_super) {
    __extends(SwitchWindow, _super);
    function SwitchWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listener = function (e) {
            var onSwitch = _this.props.onSwitch;
            console.log('switch window is focusing!', window.location);
            if (onSwitch)
                onSwitch(e);
        };
        _this.initEvent = function () {
            window.addEventListener('focus', _this.listener);
        };
        return _this;
    }
    SwitchWindow.prototype.componentDidMount = function () {
        this.initEvent();
    };
    SwitchWindow.prototype.componentWillUnmount = function () {
        window.removeEventListener('focus', this.listener);
    };
    SwitchWindow.prototype.render = function () {
        return (React.createElement(React.Fragment, null, this.props.children));
    };
    return SwitchWindow;
}(React.Component));
export default SwitchWindow;
