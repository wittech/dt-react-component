import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router';
var BreadcrumbItem = Breadcrumb.Item;
export default function BreadcrumbRender(props) {
    var routes = props.routes, _a = props.style, style = _a === void 0 ? {} : _a;
    var len = routes.length - 1;
    return (React.createElement("div", { style: style, "data-testid": "test-breadcrumb" },
        React.createElement(Breadcrumb, null, routes.map(function (item, index) { return (React.createElement(BreadcrumbItem, { key: item.path }, index == len ? (item.name) : (React.createElement(Link, { to: item.path, "data-testid": item.path + "-link" }, item.name)))); }))));
}
;
