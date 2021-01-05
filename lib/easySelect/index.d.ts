import React from 'react';
import { SelectProps } from 'antd/lib/select';
interface EasySelectProps {
    autoValue?: string;
    dataSource?: any[];
    clearValueRequest?: boolean;
    isLazy?: boolean;
    auto?: boolean;
    filterLocal?: boolean;
    servise?: (str: string) => Promise<any>;
}
declare const initStates: {
    dataSource: any[];
    str: string;
    scrollPage: number;
    allData: any[];
};
declare type EasySelectStates = typeof initStates;
declare class EasySelect extends React.Component<EasySelectProps & SelectProps, EasySelectStates> {
    state: {
        dataSource: any[];
        str: string;
        scrollPage: number;
        allData: any[];
    };
    static getDerivedStateFromProps({ dataSource }: {
        dataSource: any;
    }): {
        dataSource: any;
    };
    componentDidMount: () => void;
    onSearch: (str: string) => void;
    lazyDataSource: (data: any[]) => void;
    getDataSource: (str: string) => Promise<void>;
    companyScroll: (e: {
        persist?: any;
        target?: any;
    }) => void;
    render(): JSX.Element;
}
export default EasySelect;
