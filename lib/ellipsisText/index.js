import React from 'react';
import { Tooltip } from 'antd';
import { isEmpty } from 'lodash';
export default (function (props) {
    var _a = props.value, value = _a === void 0 ? '' : _a, _b = props.className, className = _b === void 0 ? '' : _b, _c = props.style, style = _c === void 0 ? {} : _c, _d = props.placement, placement = _d === void 0 ? undefined : _d;
    return (React.createElement(Tooltip, { placement: placement, title: "" + value },
        React.createElement("span", { "data-testid": "ellipsis_text", className: isEmpty(className) ? 'dtc-ellipsis-text' : 'dtc-ellipsis-text ' + className, style: style }, "" + value)));
});
