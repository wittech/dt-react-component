function isEqual(a, b) {
    for (var key in a) {
        if ({}.hasOwnProperty.call(a, key) &&
            (!{}.hasOwnProperty.call(b, key) || a[key] !== b[key])) {
            return false;
        }
    }
    for (var key in b) {
        if ({}.hasOwnProperty.call(b, key) && !{}.hasOwnProperty.call(a, key)) {
            return false;
        }
    }
    return true;
}
export default function shouldRender(targetComponent) {
    targetComponent.prototype.shouldComponentUpdate = function (props, state) {
        return !isEqual(this.state, state) || !isEqual(this.props, props);
    };
}
