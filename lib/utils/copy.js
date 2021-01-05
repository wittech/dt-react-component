/**
 * Copy工具类
 *
 * 使用方法：
 *  import CopyUtils from 'copy.js';
 *  const instance = new CopyUtils();
 *  instance.copy(value, callback);
 */
var CopyUtils = /** @class */ (function () {
    function CopyUtils() {
        this.fakeHandler = null;
    }
    CopyUtils.prototype.copy = function (value, callback) {
        var _this = this;
        this.removeFake();
        this.fakeHandlerCallback = function () { return _this.removeFake(); };
        this.fakeHandler = document.body.addEventListener('click', this.fakeHandlerCallback);
        this.fakeElem = document.createElement('textarea');
        // Prevent zooming on iOS
        this.fakeElem.style.fontSize = '12pt';
        // Reset box model
        this.fakeElem.style.border = '0';
        this.fakeElem.style.padding = '0';
        this.fakeElem.style.margin = '0';
        // Move element out of screen horizontally
        this.fakeElem.style.position = 'absolute';
        this.fakeElem.style.left = '-9999px';
        // Move element to the same position vertically
        var yPosition = window.pageYOffset || document.documentElement.scrollTop;
        this.fakeElem.style.top = yPosition + "px";
        this.fakeElem.setAttribute('readonly', '');
        this.fakeElem.value = value;
        document.body.appendChild(this.fakeElem);
        this.fakeElem.select();
        this.copyText(callback);
    };
    CopyUtils.prototype.removeFake = function () {
        if (this.fakeHandler) {
            document.body.removeEventListener('click', this.fakeHandlerCallback);
            this.fakeHandler = null;
            this.fakeHandlerCallback = null;
        }
        if (this.fakeElem) {
            document.body.removeChild(this.fakeElem);
            this.fakeElem = null;
        }
    };
    CopyUtils.prototype.copyText = function (callback) {
        var succeeded;
        try {
            succeeded = document.execCommand('copy');
        }
        catch (err) {
            succeeded = false;
        }
        if (callback)
            callback(succeeded);
    };
    return CopyUtils;
}());
export default CopyUtils;
