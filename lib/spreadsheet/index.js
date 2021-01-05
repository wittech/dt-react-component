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
import React from 'react';
import CopyUtils from '../utils/copy';
import { HotTable } from '@handsontable/react';
import 'handsontable/dist/handsontable.full.css';
import 'handsontable/languages/zh-CN.js';
var SpreadSheet = /** @class */ (function (_super) {
    __extends(SpreadSheet, _super);
    function SpreadSheet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tableRef = React.createRef();
        _this.copyUtils = new CopyUtils();
        return _this;
    }
    SpreadSheet.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;
        if (prevProps != this.props) {
            if (this.tableRef) {
                this.removeRenderClock();
                this._renderColck = setTimeout(function () {
                    console.log('render sheet');
                    _this.tableRef.current.hotInstance.render();
                }, 100);
            }
        }
    };
    SpreadSheet.prototype.removeRenderClock = function () {
        if (this._renderColck) {
            clearTimeout(this._renderColck);
        }
    };
    SpreadSheet.prototype.componentWillUnmount = function () {
        this.removeRenderClock();
    };
    SpreadSheet.prototype.getData = function () {
        var _a = this.props, data = _a.data, _b = _a.columns, columns = _b === void 0 ? [] : _b;
        var showData = data;
        if (!showData || !showData.length) {
            var emptyArr = new Array(columns.length).fill('', 0, columns.length);
            emptyArr[0] = '暂无数据';
            showData = [emptyArr];
        }
        return showData;
    };
    SpreadSheet.prototype.getMergeCells = function () {
        var _a = this.props, data = _a.data, _b = _a.columns, columns = _b === void 0 ? [] : _b;
        if (!data || !data.length) {
            return [{ row: 0, col: 0, rowspan: 1, colspan: columns.length }];
        }
        return null;
    };
    SpreadSheet.prototype.getCell = function () {
        var data = this.props.data;
        if (!data || !data.length) {
            return [{ row: 0, col: 0, className: 'htCenter htMiddle' }];
        }
        return null;
    };
    SpreadSheet.prototype.beforeCopy = function (arr, arr2) {
        /**
         * 去除格式化
         */
        var value = arr.map(function (row) {
            return row.join('\t');
        }).join('\n');
        this.copyUtils.copy(value);
        return false;
    };
    SpreadSheet.prototype.getContextMenu = function () {
        var that = this;
        return {
            items: {
                copy: {
                    name: '复制',
                    callback: function () {
                        var indexArr = this.getSelected();
                        /* eslint-disable-next-line */
                        var copyDataArr = this.getData.apply(this, indexArr[0]);
                        that.beforeCopy(copyDataArr);
                    }
                }
            }
        };
    };
    SpreadSheet.prototype.render = function () {
        var _a = this.props.columns, columns = _a === void 0 ? [] : _a;
        var showData = this.getData();
        // 空数组情况，不显示colHeaders，否则colHeaders默认会按照 A、B...显示
        // 具体可见 https://handsontable.com/docs/7.1.1/Options.html#colHeaders
        var isShowColHeaders = false;
        if (columns && columns.length > 0) {
            isShowColHeaders = true;
        }
        return (React.createElement(HotTable, { ref: this.tableRef, className: 'dtc-handsontable-no-border', style: { width: '100%' }, language: 'zh-CN', colHeaders: isShowColHeaders ? columns : false, data: showData, mergeCells: this.getMergeCells(), cell: this.getCell(), readOnly: true, rowHeaders: true, fillHandle: false, manualRowResize: true, manualColumnResize: true, colWidths: 200, beforeCopy: this.beforeCopy.bind(this), columnHeaderHeight: 25, contextMenu: this.getContextMenu(), stretchH: 'all' // 填充空白区域
         }));
    };
    return SpreadSheet;
}(React.PureComponent));
export default SpreadSheet;
