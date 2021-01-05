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
var Resize = /** @class */ (function (_super) {
    __extends(Resize, _super);
    function Resize() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resize = function () {
            var onResize = _this.props.onResize;
            if (onResize)
                onResize();
        };
        return _this;
    }
    Resize.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.resize, false);
    };
    Resize.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.resize, false);
    };
    Resize.prototype.render = function () {
        return this.props.children;
    };
    return Resize;
}(React.Component));
export default Resize;
