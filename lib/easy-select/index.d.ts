import React from 'react';
declare class EasySelect extends React.Component<any, any> {
    constructor(props: any);
    componentDidMount: () => void;
    onSearch: (str: any) => void;
    getDataSource: (str: any) => Promise<void>;
    render(): JSX.Element;
}
export default EasySelect;
