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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Button } from 'antd';
import MyIcon from './icon';
import KeyEventListener from '../keyEventListener';
var KeyCombiner = KeyEventListener.KeyCombiner;
var FullScreenButton = /** @class */ (function (_super) {
    __extends(FullScreenButton, _super);
    function FullScreenButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isFullScreen: false
        };
        _this.keyPressFullScreen = function (evt) {
            evt.preventDefault();
            _this.fullScreen();
        };
        _this.fullScreen = function () {
            var _a = _this.props, target = _a.target, onFullscreen = _a.onFullscreen;
            if (onFullscreen) {
                onFullscreen(_this.state.isFullScreen);
            }
            ;
            if (_this.state.isFullScreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
                else if (document.mozExitFullscreen) {
                    document.mozExitFullscreen();
                }
                else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
                else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
            else {
                var propsDom = document.getElementById(target);
                var domEle = propsDom || document.body;
                if (domEle.requestFullscreen) {
                    domEle.requestFullscreen();
                }
                else if (domEle.msRequestFullscreen) { // IE
                    domEle.msRequestFullscreen();
                }
                else if (domEle.mozRequestFullscreen) { // Firefox (Gecko)
                    domEle.mozRequestFullscreen();
                }
                else if (domEle.webkitRequestFullscreen) { // Webkit
                    domEle.webkitRequestFullscreen();
                }
            }
        };
        return _this;
    }
    /**
     * 在一定情况下chrome不会触发resize事件，所以手动触发一下resize。
     */
    FullScreenButton.prototype.dispatchResizeEvent = function () {
        var event = new Event('resize');
        window.dispatchEvent(event);
    };
    FullScreenButton.prototype.componentDidMount = function () {
        var _this = this;
        var target = this.props.target;
        var propsDom = document.getElementById(target);
        var domEle = propsDom || document.body;
        var callBack = function (event) {
            var node;
            if (domEle.requestFullscreen) {
                node = document.fullscreenElement;
            }
            else if (domEle.msRequestFullscreen) { // IE
                node = document.msFullscreenElement;
            }
            else if (domEle.mozRequestFullscreen) { // Firefox (Gecko)
                node = document.mozFullScreenElement;
            }
            else if (domEle.webkitRequestFullscreen) { // Webkit
                node = document.webkitFullscreenElement;
            }
            _this.setState({
                isFullScreen: !!node
            }, _this.dispatchResizeEvent);
        };
        if (domEle.requestFullscreen) {
            domEle.onfullscreenchange = callBack;
        }
        else if (domEle.msRequestFullscreen) { // IE
            domEle.onmsfullscreenchange = callBack;
        }
        else if (domEle.mozRequestFullscreen) { // Firefox (Gecko)
            domEle.onmozfullscreenchange = callBack;
        }
        else if (domEle.webkitRequestFullscreen) { // Webkit
            domEle.onwebkitfullscreenchange = callBack;
        }
    };
    FullScreenButton.prototype.componentWillUnmount = function () {
        var target = this.props.target;
        var propsDom = document.getElementById(target);
        var domEle = propsDom || document.body;
        if (domEle.requestFullscreen) {
            document.onfullscreenchange = null;
        }
        else if (domEle.msRequestFullscreen) { // IE
            document.onmsfullscreenchange = null;
        }
        else if (domEle.mozRequestFullscreen) { // Firefox (Gecko)
            document.onmozfullscreenchange = null;
        }
        else if (domEle.webkitRequestFullscreen) { // Webkit
            document.onwebkitfullscreenchange = null;
        }
    };
    FullScreenButton.prototype.render = function () {
        var _a = this.props, themeDark = _a.themeDark, fullIcon = _a.fullIcon, exitFullIcon = _a.exitFullIcon, iconStyle = _a.iconStyle, other = __rest(_a, ["themeDark", "fullIcon", "exitFullIcon", "iconStyle"]);
        var title = this.state.isFullScreen ? '退出全屏' : '全屏';
        // const iconType = this.state.isFullScreen ? 'exit-fullscreen' : 'fullscreen';
        var customIcon = this.state.isFullScreen ? exitFullIcon : fullIcon;
        return (React.createElement(KeyCombiner, { onTrigger: this.keyPressFullScreen, keyMap: {
                70: true,
                91: true,
                16: true
            } }, customIcon ? React.createElement("span", __assign({}, other, { onClick: this.fullScreen }), customIcon)
            : React.createElement(Button, __assign({}, other, { "data-testid": 'test_myButton', onClick: this.fullScreen }),
                React.createElement(MyIcon, { style: iconStyle, type: this.state.isFullScreen, themeDark: themeDark }),
                title)));
    };
    return FullScreenButton;
}(React.Component));
export default FullScreenButton;
