import React from 'react';
export default function scrollText(props) {
    var style = {
        height: '28px',
        margin: '5px 5px 5px 0px',
        width: '100%',
        textAlign: 'left',
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        border: 'none'
    };
    var value = props.value;
    return React.createElement("input", { "data-testid": 'test-scroll-text', style: Object.assign({}, style, props.style || {}), title: value, readOnly: true, className: "cell-input", value: value });
}
