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
import { Icon } from 'antd';
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotFound.prototype.render = function () {
        return (React.createElement("div", { style: { lineHeight: '200px', textAlign: 'center' } },
            React.createElement("h1", null,
                React.createElement(Icon, { type: "frown-o" }),
                " \u4EB2\uFF0C\u662F\u4E0D\u662F\u8D70\u9519\u5730\u65B9\u4E86\uFF1F")));
    };
    return NotFound;
}(React.Component));
export default NotFound;
