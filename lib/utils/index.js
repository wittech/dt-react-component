var utils = {
    /**
     * 获取页面宽度
     * @return {[type]} [description]
     */
    pageWidth: function () {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    },
    /**
     * 获取页面高度
     * @return {[type]} [description]
     */
    pageHeight: function () {
        return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    },
    checkExist: function (prop) {
        return prop !== undefined && prop !== null && prop !== '';
    },
    isMacOs: function () {
        return navigator.userAgent.indexOf('Macintosh') > -1;
    },
    isWindows: function () {
        return navigator.userAgent.indexOf('Windows') > -1;
    },
    isMobileDevice: function () {
        return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
    },
    /**
     * @description 浏览器类型和版本检测
     * @returns {Boolean} `true`表示通过兼容性检测,`false`表示不通过兼容性检测
     */
    browserCheck: function () {
        var Sys = {};
        if (this.isMobileDevice()) {
            return true;
        } // 忽略移动设备
        var ua = navigator.userAgent.toLowerCase();
        var s;
        // eslint:disable:no-conditional-assignment
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1]
            : (s = ua.match(/msie ([\d\.]+)/)) ? Sys.ie = s[1]
                : (s = ua.match(/edge\/([\d\.]+)/)) ? Sys.edge = s[1]
                    : (s = ua.match(/firefox\/([\d\.]+)/)) ? Sys.firefox = s[1]
                        : (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? Sys.opera = s[1]
                            : (s = ua.match(/chrome\/([\d\.]+)/)) ? Sys.chrome = s[1]
                                // tslint:disable-next-line:no-unused-expression
                                : (s = ua.match(/version\/([\d\.]+).*safari/)) ? Sys.safari = s[1] : 0;
        if ((Sys.chrome && parseInt(Sys.chrome.split('.')[0], 10) >= 66) ||
            Sys.firefox) {
            return true;
        }
        return false;
    },
    /**
     * 根据参数名获取URL数据
     * @param  {[type]} name [description]
     * @param  {[type]} url  [description]
     */
    getParameterByName: function (name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        var results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },
    /**
     * 获取图片的Base64格式
     * @param  {[type]}   img      [description]
     * @param  {Function} callback [description]
     */
    getBase64: function (img, callback) {
        var reader = new FileReader();
        reader.addEventListener('load', function () { return callback(reader.result); });
        reader.readAsDataURL(img);
    },
    /**
     * 百分比转换
     * @param  {[type]} num       [description]
     * @param  {[type]} precision [description]
     */
    percent: function (num, precision) {
        if (!num || num === Infinity) {
            return 0 + '%';
        }
        if (num > 1) {
            num = 1;
        }
        precision = precision || 2;
        precision = Math.pow(10, precision);
        return Math.round(num * precision * 100) / precision + '%';
    },
    getCssText: function (object) {
        if (object === void 0) { object = {}; }
        var str = '';
        for (var attr in object) {
            if (object.hasOwnProperty(attr)) {
                str += attr + ':' + object[attr] + ';';
            }
        }
        return str;
    },
    /**
     * 去除空串
     */
    trim: function (str) {
        return typeof str === 'string'
            ? str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
            : str;
    },
    trimlr: function (str) {
        var res = str.replace(/^\s*/, ''); // 去左边
        return res.replace(/\s*$/, ''); // 去右边
    },
    removeAllSpaces: function (str) {
        return typeof str === 'string'
            ? str.replace(/\s*/g, '') // 去除全部空串
            : str;
    },
    /**
     * 原生 JavaScript 获取 cookie 值
     * @param name
     */
    getCookie: function (name) {
        var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
        if (arr != null) {
            return unescape(decodeURI(arr[2]));
        }
        return null;
    },
    deleteCookie: function (name, domain, path) {
        var d = new Date(0);
        domain = domain ? "; domain=" + domain : '';
        path = path || '/';
        document.cookie =
            name + '=; expires=' + d.toUTCString() + domain + '; path=' + path;
    },
    deleteAllCookies: function (domain, path) {
        var cookies = document.cookie.split(';');
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < cookies.length; i++) {
            if (cookies[i]) {
                this.deleteCookie(cookies[i].split('=')[0], domain, path);
            }
        }
    },
    setCookie: function (name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    },
    /**
     * 转换 Byte 转换为小于1024值最大单位
     * @param value 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB' 转换原始值
     */
    convertBytes: function (value) {
        var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = 0;
        while (value >= 1024) {
            value = Number((value / 1024).toFixed(2));
            i++;
        }
        return value + " " + units[i];
    },
    // 千位分割
    toQfw: function (str) {
        if (!str) {
            return 0;
        }
        str = str.toString ? str.toString() : str;
        var re = /(?=(?!(\b))(\d{3})+$)/g;
        str = str.replace(re, ',');
        return str;
    },
    // 文字溢出转换
    textOverflowExchange: function (text, length) {
        if (text && text.length > length) {
            return text.substring(0, length) + '...';
        }
        return text;
    },
    /**
     * json格式化
     * @param {格式化内容} text
     * @param {格式化占位符} space
     */
    jsonFormat: function (text, space) {
        if (!text) {
            return text;
        }
        try {
            var json = JSON.parse(text);
            var output = JSON.stringify(json, null, space || 2);
            return output;
        }
        catch (e) {
            return null;
        }
    },
    /**
     * 多函数排序，匹配到0为止
     */
    sortByCompareFunctions: function (arr) {
        var compareFunctions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            compareFunctions[_i - 1] = arguments[_i];
        }
        arr.sort(function (a, b) {
            var result = 0;
            for (var _i = 0, compareFunctions_1 = compareFunctions; _i < compareFunctions_1.length; _i++) {
                var func = compareFunctions_1[_i];
                result = func(a, b);
                if (result !== 0) {
                    return result;
                }
            }
            return result;
        });
    },
    /**
     * 转换排序字段
     */
    exchangeOrder: function (order) {
        switch (order) {
            case 'ascend': {
                return 'asc';
            }
            case 'descend': {
                return 'desc';
            }
            default: {
                return undefined;
            }
        }
    },
    /**
     * 生成一个key
     */
    generateAKey: function () {
        // tslint:disable-next-line:no-bitwise
        return '' + new Date().getTime() + ~~(Math.random() * 1000000);
    },
    /**
     * 判断是否是JSON string
     * @param  {String}  str 所要验证的字符串
     * @return {Boolean}   是否是JSON字符串
     */
    isJSONStr: function (str) {
        str = this.trimlr(str);
        return ((str.charAt(0) === '{' && str.charAt(str.length - 1) === '}') ||
            (str.charAt(0) === '[' && str.charAt(str.length - 1) === ']'));
    },
    /**
     * 随机生成一串6位同时包含数字、大小写字母的字符串
     * @param len number
     */
    getRandomStr: function (len) {
        var numChar = '0123456789';
        var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
        var upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
        function getChar(baseChar) {
            var randomIndex = Math.random() * (baseChar.length - 1);
            return baseChar.charAt(randomIndex);
        }
        var currentChar = 'num';
        var str = '';
        for (var i = 0; i < len; i++) {
            if (currentChar === 'num') {
                str += getChar(numChar);
                currentChar = 'lower';
            }
            else if (currentChar === 'lower') {
                str += getChar(lowerCaseChar);
                currentChar = 'upper';
            }
            else if (currentChar === 'upper') {
                str += getChar(upperCaseChar);
                currentChar = 'num';
            }
        }
        return str;
    },
    /**
     * simply judge whether the array is equal
     * @param arr1
     * @param arr2
     * @returns arr1 === arr2
     */
    isEqualArr: function (arr1, arr2) {
        var toString = JSON.stringify;
        return toString(arr1.sort()) === toString(arr2.sort());
    }
};
export default utils;
