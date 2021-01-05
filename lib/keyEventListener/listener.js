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
var KeyCombiner = /** @class */ (function (_super) {
    __extends(KeyCombiner, _super);
    function KeyCombiner(props) {
        var _this = _super.call(this, props) || this;
        _this.bindEvent = function (target) {
            var _a;
            var _b = _this.props, onTrigger = _b.onTrigger, keyMap = _b.keyMap;
            var keyCode = target.keyCode;
            var isKeyDown = target.type === 'keydown';
            if (!isKeyDown) {
                _this.setState({
                    currentKeys: {}
                });
                return;
            }
            ;
            if (keyMap[keyCode] === true) {
                var currentKeys = Object.assign(_this.state.currentKeys, (_a = {},
                    _a[keyCode] = isKeyDown,
                    _a));
                _this.setState({
                    currentKeys: currentKeys
                });
                var keyAllRight = true;
                for (var key in keyMap) {
                    if (!currentKeys[key]) {
                        keyAllRight = false;
                        break;
                    }
                }
                if (keyAllRight) {
                    onTrigger(target);
                }
            }
        };
        _this.state = {
            currentKeys: {}
        };
        return _this;
    }
    KeyCombiner.prototype.componentDidMount = function () {
        addEventListener('keydown', this.bindEvent, false);
        addEventListener('keyup', this.bindEvent, false);
    };
    KeyCombiner.prototype.componentWillUnmount = function () {
        removeEventListener('keydown', this.bindEvent, false);
        removeEventListener('keyup', this.bindEvent, false);
        this.setState({ currentKeys: {} });
    };
    KeyCombiner.prototype.render = function () {
        return React.createElement("span", { "data-testid": 'test_keyCombiner' }, this.props.children);
    };
    return KeyCombiner;
}(React.Component));
export default KeyCombiner;
