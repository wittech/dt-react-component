import React from 'react';
var LoadError = function () {
    return (React.createElement("div", { className: "error", "data-testid": "test-error" },
        React.createElement("div", null,
            "\b",
            React.createElement("h2", { style: { textAlign: 'center' }, "data-testid": 'test-error' },
                "\u53D1\u73B0\u65B0\u7248\u672C\uFF0C\u8BF7",
                React.createElement("a", { onClick: function () {
                        location.reload();
                    } }, "\u5237\u65B0"),
                "\u83B7\u53D6\u65B0\u7248\u672C\u3002"),
            React.createElement("h4", { style: { textAlign: 'center' } }, "\u82E5\u8BE5\u63D0\u793A\u957F\u65F6\u95F4\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u3002"))));
};
export default LoadError;
