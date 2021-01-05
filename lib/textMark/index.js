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
var TextMark = /** @class */ (function (_super) {
    __extends(TextMark, _super);
    function TextMark() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextMark.prototype.renderMark = function (text, markText) {
        if (text === void 0) { text = ''; }
        if (markText === void 0) { markText = ''; }
        var markTextIndex = text.indexOf(markText);
        if (markTextIndex !== -1) {
            return React.createElement("span", null,
                text.substring(0, markTextIndex),
                React.createElement("mark", null, markText),
                text.substring(markTextIndex + markText.length, text.length));
        }
        else {
            return text;
        }
    };
    TextMark.prototype.render = function () {
        var _a = this.props, text = _a.text, markText = _a.markText, others = __rest(_a, ["text", "markText"]);
        return (React.createElement("span", __assign({}, others), this.renderMark(text, markText)));
    };
    return TextMark;
}(React.Component));
export default TextMark;
