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
import classNames from 'classnames';
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getBase64ImgSrc = function (type, themeDark) {
            var src = '';
            if (themeDark) {
                // 全屏状态
                if (type) {
                    src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTMyMDY4NzE5NzYyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk1NzgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTUuOTQ0IDM3MS4wODJoMjM5LjQ4N2MxOS44NTEgMCAzNi0xNi4xNDkgMzYtMzZWOTUuNTk0YzAtMTcuNjczLTE0LjMyNy0zMi0zMi0zMnMtMzIgMTQuMzI3LTMyIDMydjIxMS40ODhIOTUuOTQ0Yy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzIgMCAxNy42NzIgMTQuMzI3IDMyIDMyIDMyek05NS45NDQgNzE2LjAxNmgyMTEuNDg3djIxMS40ODdjMCAxNy42NzMgMTQuMzI3IDMyIDMyIDMyczMyLTE0LjMyNyAzMi0zMlY2ODguMDE2YzAtMTkuODUxLTE2LjE0OS0zNi0zNi0zNkg5NS45NDRjLTE3LjY3MyAwLTMyIDE0LjMyNy0zMiAzMnMxNC4zMjcgMzIgMzIgMzJ6TTY4NC41MTMgOTU5LjQwMmMxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJWNzE1LjkxNUg5MjhjMTcuNjczIDAgMzItMTQuMzI3IDMyLTMycy0xNC4zMjctMzItMzItMzJINjg4LjUxM2MtMTkuODUxIDAtMzYgMTYuMTQ5LTM2IDM2djIzOS40ODdjMCAxNy42NzMgMTQuMzI3IDMyIDMyIDMyek02ODguNTEzIDM3MS42MzlIOTI4YzE3LjY3MyAwIDMyLTE0LjMyNyAzMi0zMnMtMTQuMzI3LTMyLTMyLTMySDcxNi41MTNWOTYuMTUxYzAtMTcuNjczLTE0LjMyNy0zMi0zMi0zMnMtMzIgMTQuMzI3LTMyIDMydjIzOS40ODhjMCAxOS44NSAxNi4xNDkgMzYgMzYgMzZ6IiBmaWxsPSIjQURBREFEIiBwLWlkPSI5NTc5Ij48L3BhdGg+PC9zdmc+';
                }
                else {
                    src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTMyMDcwODIxNTI3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM3MzciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMzM5LjQzMiA2My41OTRIOTkuOTQ0Yy0xOS44NTEgMC0zNiAxNi4xNDktMzYgMzZ2MjM5LjQ4OGMwIDE3LjY3MyAxNC4zMjcgMzIgMzIgMzJzMzItMTQuMzI3IDMyLTMyVjEyNy41OTRoMjExLjQ4N2MxNy42NzMgMCAzMi0xNC4zMjcgMzItMzIgMC4wMDEtMTcuNjczLTE0LjMyNi0zMi0zMS45OTktMzJ6TTMzOS40MzIgODk1LjUwM0gxMjcuOTQ0VjY4NC4wMTZjMC0xNy42NzMtMTQuMzI3LTMyLTMyLTMycy0zMiAxNC4zMjctMzIgMzJ2MjM5LjQ4N2MwIDE5Ljg1MSAxNi4xNDkgMzYgMzYgMzZoMjM5LjQ4N2MxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJzLTE0LjMyNi0zMi0zMS45OTktMzJ6TTkyOCA2NTEuOTE1Yy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzJ2MjExLjQ4N0g2ODQuNTEzYy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzJzMTQuMzI3IDMyIDMyIDMySDkyNGMxOS44NTEgMCAzNi0xNi4xNDkgMzYtMzZWNjgzLjkxNWMwLTE3LjY3My0xNC4zMjctMzItMzItMzJ6TTkyNCA2NC4xNTFINjg0LjUxM2MtMTcuNjczIDAtMzIgMTQuMzI3LTMyIDMyczE0LjMyNyAzMiAzMiAzMkg4OTZ2MjExLjQ4OGMwIDE3LjY3MyAxNC4zMjcgMzIgMzIgMzJzMzItMTQuMzI3IDMyLTMyVjEwMC4xNTFjMC0xOS44NTEtMTYuMTQ5LTM2LTM2LTM2eiIgZmlsbD0iI0FEQURBRCIgcC1pZD0iMzczOCI+PC9wYXRoPjwvc3ZnPg==';
                }
            }
            else {
                // 全屏状态
                if (type) {
                    src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTMyMDY4NzE5NzYyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk1NzgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTUuOTQ0IDM3MS4wODJoMjM5LjQ4N2MxOS44NTEgMCAzNi0xNi4xNDkgMzYtMzZWOTUuNTk0YzAtMTcuNjczLTE0LjMyNy0zMi0zMi0zMnMtMzIgMTQuMzI3LTMyIDMydjIxMS40ODhIOTUuOTQ0Yy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzIgMCAxNy42NzIgMTQuMzI3IDMyIDMyIDMyek05NS45NDQgNzE2LjAxNmgyMTEuNDg3djIxMS40ODdjMCAxNy42NzMgMTQuMzI3IDMyIDMyIDMyczMyLTE0LjMyNyAzMi0zMlY2ODguMDE2YzAtMTkuODUxLTE2LjE0OS0zNi0zNi0zNkg5NS45NDRjLTE3LjY3MyAwLTMyIDE0LjMyNy0zMiAzMnMxNC4zMjcgMzIgMzIgMzJ6TTY4NC41MTMgOTU5LjQwMmMxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJWNzE1LjkxNUg5MjhjMTcuNjczIDAgMzItMTQuMzI3IDMyLTMycy0xNC4zMjctMzItMzItMzJINjg4LjUxM2MtMTkuODUxIDAtMzYgMTYuMTQ5LTM2IDM2djIzOS40ODdjMCAxNy42NzMgMTQuMzI3IDMyIDMyIDMyek02ODguNTEzIDM3MS42MzlIOTI4YzE3LjY3MyAwIDMyLTE0LjMyNyAzMi0zMnMtMTQuMzI3LTMyLTMyLTMySDcxNi41MTNWOTYuMTUxYzAtMTcuNjczLTE0LjMyNy0zMi0zMi0zMnMtMzIgMTQuMzI3LTMyIDMydjIzOS40ODhjMCAxOS44NSAxNi4xNDkgMzYgMzYgMzZ6IiBmaWxsPSIjNTE1MTUxIiBwLWlkPSI5NTc5Ij48L3BhdGg+PC9zdmc+';
                }
                else {
                    src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTMyMDcwODIxNTI3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM3MzciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMzM5LjQzMiA2My41OTRIOTkuOTQ0Yy0xOS44NTEgMC0zNiAxNi4xNDktMzYgMzZ2MjM5LjQ4OGMwIDE3LjY3MyAxNC4zMjcgMzIgMzIgMzJzMzItMTQuMzI3IDMyLTMyVjEyNy41OTRoMjExLjQ4N2MxNy42NzMgMCAzMi0xNC4zMjcgMzItMzIgMC4wMDEtMTcuNjczLTE0LjMyNi0zMi0zMS45OTktMzJ6TTMzOS40MzIgODk1LjUwM0gxMjcuOTQ0VjY4NC4wMTZjMC0xNy42NzMtMTQuMzI3LTMyLTMyLTMycy0zMiAxNC4zMjctMzIgMzJ2MjM5LjQ4N2MwIDE5Ljg1MSAxNi4xNDkgMzYgMzYgMzZoMjM5LjQ4N2MxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJzLTE0LjMyNi0zMi0zMS45OTktMzJ6TTkyOCA2NTEuOTE1Yy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzJ2MjExLjQ4N0g2ODQuNTEzYy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzJzMTQuMzI3IDMyIDMyIDMySDkyNGMxOS44NTEgMCAzNi0xNi4xNDkgMzYtMzZWNjgzLjkxNWMwLTE3LjY3My0xNC4zMjctMzItMzItMzJ6TTkyNCA2NC4xNTFINjg0LjUxM2MtMTcuNjczIDAtMzIgMTQuMzI3LTMyIDMyczE0LjMyNyAzMiAzMiAzMkg4OTZ2MjExLjQ4OGMwIDE3LjY3MyAxNC4zMjcgMzIgMzIgMzJzMzItMTQuMzI3IDMyLTMyVjEwMC4xNTFjMC0xOS44NTEtMTYuMTQ5LTM2LTM2LTM2eiIgZmlsbD0iIzUxNTE1MSIgcC1pZD0iMzczOCI+PC9wYXRoPjwvc3ZnPg==';
                }
            }
            return src;
        };
        return _this;
    }
    Icon.prototype.render = function () {
        var _a = this.props, themeDark = _a.themeDark, type = _a.type, otherProps = __rest(_a, ["themeDark", "type"]);
        var cls = classNames('dtc-fullscreen-icon', otherProps.className);
        var src = this.getBase64ImgSrc(type, themeDark);
        return (React.createElement("img", __assign({}, otherProps, { "data-testid": 'test_myIcon', className: cls, alt: otherProps.alt, src: src })));
    };
    return Icon;
}(React.Component));
export default Icon;
