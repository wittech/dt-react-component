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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import { Select } from 'antd';
import debounce from 'lodash/debounce';
var Option = Select.Option;
var EasySelect = /** @class */ (function (_super) {
    __extends(EasySelect, _super);
    function EasySelect(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
            var _a = _this.props.autoValue, autoValue = _a === void 0 ? '' : _a;
            _this.getDataSource(autoValue);
        };
        _this.onSearch = function (str) {
            var _a = _this.props, _b = _a.clearValueRequest, clearValueRequest = _b === void 0 ? false : _b, autoValue = _a.autoValue;
            if (!clearValueRequest && !str) {
                // 默认清空展示上次的数据
                _this.setState({ dataSource: _this.state.dataSource });
            }
            else if (clearValueRequest && !str) {
                // 此时清空展示最初的数据, 进行初始化的请求，参数传入autoValue
                _this.getDataSource(autoValue);
            }
            else {
                // 正常搜索函数，特殊处理防抖
                debounce(function () { return _this.getDataSource(str); }, 300)();
            }
        };
        _this.getDataSource = function (str) { return __awaiter(_this, void 0, void 0, function () {
            var servise, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        servise = this.props.servise;
                        _a = servise;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, servise(str).then(function (res) {
                                _this.setState({
                                    dataSource: res || []
                                });
                            })];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        _a;
                        return [2 /*return*/];
                }
            });
        }); };
        var _a = _this.props.dataSource, dataSource = _a === void 0 ? [] : _a;
        _this.state = {
            dataSource: dataSource
        };
        return _this;
    }
    EasySelect.prototype.render = function () {
        var _a = this.props, _b = _a.allowClear, allowClear = _b === void 0 ? true : _b, _c = _a.showSearch, showSearch = _c === void 0 ? true : _c, filterLocal = _a.filterLocal, servise = _a.servise, others = __rest(_a, ["allowClear", "showSearch", "filterLocal", "servise"]);
        var dataSource = this.state.dataSource;
        return (React.createElement(Select, __assign({ allowClear: allowClear, showSearch: showSearch, style: { minWidth: 120 }, onSearch: servise && !filterLocal && this.onSearch, filterOption: !filterLocal
                ? null
                : function (input, option) {
                    // 兼容数字和字符串等模糊查询
                    return option.props.children
                        .toString()
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0 ||
                        option.props.value
                            .toString()
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0;
                } }, others), dataSource &&
            dataSource.map(function (item) {
                return (React.createElement(Option, { key: item.value || item, value: item.value || item }, item.label || item));
            })));
    };
    return EasySelect;
}(React.Component));
export default EasySelect;
