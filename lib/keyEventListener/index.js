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
import KeyCombiner from './listener';
var KeyEventListener = /** @class */ (function (_super) {
    __extends(KeyEventListener, _super);
    function KeyEventListener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindEvent = function (target) {
            var _a = _this.props, onKeyDown = _a.onKeyDown, onKeyUp = _a.onKeyUp;
            var isKeyDown = target.type === 'keydown';
            if (isKeyDown && onKeyDown) {
                onKeyDown(target);
            }
            else if (!isKeyDown && onKeyUp) {
                onKeyUp(target);
            }
        };
        return _this;
    }
    KeyEventListener.prototype.componentDidMount = function () {
        addEventListener('keydown', this.bindEvent, false);
        addEventListener('keyup', this.bindEvent, false);
    };
    KeyEventListener.prototype.componentWillUnmount = function () {
        removeEventListener('keydown', this.bindEvent, false);
        removeEventListener('keyup', this.bindEvent, false);
    };
    KeyEventListener.prototype.render = function () {
        return this.props.children;
    };
    KeyEventListener.KeyCombiner = KeyCombiner;
    return KeyEventListener;
}(React.Component));
export default KeyEventListener;
