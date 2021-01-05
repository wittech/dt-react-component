import React from 'react';
declare type SearchType = 'fuzzy' | 'precise' | 'front' | 'tail';
export interface MultiSearchInputProps {
    placeholder?: string;
    style?: React.CSSProperties;
    value?: string;
    onChange?: (value: string) => void;
    onSearch?: (value: string, searchType: SearchType) => void;
    onTypeChange?: (searchType: SearchType) => void;
    searchType?: SearchType;
    filterOptions?: (SearchType)[];
    [propName: string]: any;
}
export interface MultiSearchInputStates {
}
declare class MultiSearchInput extends React.Component<MultiSearchInputProps, MultiSearchInputStates & MultiSearchInputProps> {
    constructor(props: any);
    render(): JSX.Element;
}
export default MultiSearchInput;
