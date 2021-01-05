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
var contextPrefix = 'dtc-context-menu';
var ContextMenuItem = /** @class */ (function (_super) {
    __extends(ContextMenuItem, _super);
    function ContextMenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContextMenuItem.prototype.render = function () {
        return (React.createElement("li", __assign({}, this.props, { className: contextPrefix + "-context-list_li" }),
            React.createElement("a", { className: contextPrefix + "-context-list_a", "data-value": this.props.value }, this.props.children)));
    };
    return ContextMenuItem;
}(React.Component));
export { ContextMenuItem };
var ContextMenu = /** @class */ (function (_super) {
    __extends(ContextMenu, _super);
    function ContextMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.toggleMenu = _this.toggleMenu.bind(_this);
        _this.removeMenu = _this.removeMenu.bind(_this);
        return _this;
    }
    ContextMenu.prototype.componentDidMount = function () {
        document.addEventListener('contextmenu', this.toggleMenu, false);
        document.addEventListener('click', this.removeMenu, false);
    };
    ContextMenu.prototype.componentWillUnmount = function () {
        document.removeEventListener('click', this.removeMenu, false);
        document.removeEventListener('contextmenu', this.toggleMenu, false);
    };
    ContextMenu.prototype.toggleMenu = function (evt) {
        var _a = this.props, targetClassName = _a.targetClassName, onChange = _a.onChange;
        var selfEle = this.selfEle;
        if (!selfEle)
            return;
        var parent = this.findParent(evt.target, targetClassName);
        if (parent) {
            this.hideAll();
            var style = selfEle.style;
            style.display = 'block';
            var pointerY = evt.clientY;
            var pointerX = evt.clientX;
            var viewHeight = document.body.offsetHeight; // 可视区高度
            var distanceToBottom = viewHeight - pointerY;
            var menuHeight = selfEle.offsetHeight;
            var menuTop = distanceToBottom > menuHeight ? pointerY : pointerY - menuHeight;
            style.cssText = "\n                top: " + menuTop + "px;\n                left: " + pointerX + "px;\n                display: block;\n            ";
            if (onChange) {
                onChange(parent);
            }
            evt.preventDefault();
        }
    };
    ContextMenu.prototype.hideAll = function () {
        var allEles = document.querySelectorAll("." + contextPrefix);
        for (var i = 0; i < allEles.length; i++) {
            allEles[i].style.display = 'none';
        }
    };
    ContextMenu.prototype.closeMenu = function (evt) {
        if (!this.selfEle)
            return;
        var style = this.selfEle.style;
        style.display = 'none';
    };
    ContextMenu.prototype.removeMenu = function (evt) {
        if (!this.selfEle)
            return;
        var style = this.selfEle.style;
        style.display = 'none';
    };
    ContextMenu.prototype.findParent = function (child, selector) {
        try {
            if (!selector || !child)
                return;
            selector = selector.toLowerCase();
            var node = child;
            while (node) {
                if (node.nodeType === 1) { // just hand dom element
                    var className = node.getAttribute('class');
                    if (className && className.includes(selector))
                        return node;
                }
                node = node.parentNode;
            }
        }
        catch (e) {
            throw new Error(e);
        }
        return null;
    };
    ContextMenu.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { ref: function (e) { _this.selfEle = e; }, className: contextPrefix, style: { display: 'none' } },
            React.createElement("ul", { className: contextPrefix + "-context-menu_list" }, this.props.children)));
    };
    ContextMenu.ContextMenuItem = ContextMenuItem;
    return ContextMenu;
}(React.Component));
export default ContextMenu;
