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
var GlobalLoading = /** @class */ (function (_super) {
    __extends(GlobalLoading, _super);
    function GlobalLoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GlobalLoading.prototype.render = function () {
        var _a = this.props, _b = _a.prefix, prefix = _b === void 0 ? '' : _b, _c = _a.loadingTitle, loadingTitle = _c === void 0 ? '应用加载中，请等候～' : _c, _d = _a.mainBackground, mainBackground = _d === void 0 ? '#2E3943' : _d, _e = _a.circleBackground, circleBackground = _e === void 0 ? '#fff' : _e, _f = _a.titleColor, titleColor = _f === void 0 ? '#fff' : _f;
        return (React.createElement("div", { className: "dtc-loading-wrapper", style: { background: mainBackground }, "data-testid": 'test-globalLoading' },
            React.createElement("div", { className: "dtc-loading-center" },
                React.createElement("h1", { style: { color: titleColor } }, prefix + "  " + loadingTitle),
                React.createElement("div", { className: "dtc-bouncywrap" },
                    React.createElement("div", { className: "dtc-dotcon dtc-dc1" },
                        React.createElement("div", { className: "dtc-dot", style: { background: circleBackground } })),
                    React.createElement("div", { className: "dtc-dotcon dtc-dc2" },
                        React.createElement("div", { className: "dtc-dot", style: { background: circleBackground } })),
                    React.createElement("div", { className: "dtc-dotcon dtc-dc3" },
                        React.createElement("div", { className: "dtc-dot", style: { background: circleBackground } }))))));
    };
    return GlobalLoading;
}(React.Component));
export default GlobalLoading;
