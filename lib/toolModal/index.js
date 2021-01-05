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
import { Modal, Icon } from 'antd';
import FullScreen from '../fullscreen';
var defaultModalStyle = {
    width: 800,
    minHeight: 200
};
var DTModal = /** @class */ (function (_super) {
    __extends(DTModal, _super);
    function DTModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            modalStyle: defaultModalStyle,
            className: '',
            isFullscreen: false
        };
        _this.exChangeModalStyle = function (isFullscreen) {
            var _a = _this.props, style = _a.style, width = _a.width;
            if (!isFullscreen) {
                _this.setState({
                    modalStyle: __assign(__assign(__assign({}, defaultModalStyle), style), { width: width }),
                    className: ''
                });
            }
            else {
                _this.setState({
                    modalStyle: {
                        width: '100%',
                        height: '100%',
                        margin: 0,
                        padding: 0,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    },
                    className: 'dtc-ant-modal-control'
                });
            }
        };
        _this.onEleFullScreen = function () {
            _this.setState(function (prevState) { return ({
                isFullscreen: !prevState.isFullscreen
            }); }, function () {
                _this.exChangeModalStyle(_this.state.isFullscreen);
            });
        };
        _this.renderToolbox = function () {
            var _a = _this.props, toolbox = _a.toolbox, fullscreen = _a.fullscreen;
            var isFullscreen = _this.state.isFullscreen;
            var iconType = isFullscreen ? 'shrink' : 'arrows-alt';
            return (React.createElement("div", { className: "dtc-ant-modal_icon__position" },
                toolbox,
                fullscreen ? React.createElement(FullScreen, { fullIcon: React.createElement(Icon, { className: "alt", type: "arrows-alt" }), exitFullIcon: React.createElement(Icon, { className: "alt", type: "shrink" }), isShowTitle: false, className: 'dtc-icon__cursor', onFullscreen: _this.onEleFullScreen }) : React.createElement(Icon, { className: "alt icon__cursor", type: iconType, onClick: _this.onEleFullScreen })));
        };
        return _this;
    }
    DTModal.prototype.render = function () {
        var _a = this.props, children = _a.children, style = _a.style, visible = _a.visible;
        var _b = this.state, modalStyle = _b.modalStyle, className = _b.className;
        var applyStyle = __assign(__assign({}, style), modalStyle);
        return React.createElement(Modal, __assign({}, this.props, { className: className, width: modalStyle.width, style: applyStyle }),
            visible && this.renderToolbox(),
            visible && children);
    };
    return DTModal;
}(React.Component));
export default DTModal;
