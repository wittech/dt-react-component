import React from 'react';
import CopyUtils from '../utils/copy';
import 'handsontable/dist/handsontable.full.css';
import 'handsontable/languages/zh-CN.js';
export interface SpreadSheetProps {
    data: Array<Array<string>>;
    columns: any;
}
declare class SpreadSheet extends React.PureComponent<SpreadSheetProps, any> {
    tableRef: any;
    copyUtils: CopyUtils;
    _renderColck: any;
    componentDidUpdate(prevProps: any, prevState: any): void;
    removeRenderClock(): void;
    componentWillUnmount(): void;
    getData(): string[][];
    getMergeCells(): {
        row: number;
        col: number;
        rowspan: number;
        colspan: any;
    }[];
    getCell(): {
        row: number;
        col: number;
        className: string;
    }[];
    beforeCopy(arr: any, arr2?: any): boolean;
    getContextMenu(): any;
    render(): JSX.Element;
}
export default SpreadSheet;
