import React from 'react';
export declare const tuple: <T extends string[]>(...args: T) => T;
declare const CicleTypes: ["running", "finished", "stopped", "frozen", "fail", "submitting", "restarting", "waitSubmit"];
export declare type CicleType = typeof CicleTypes[number];
export interface CircleProps {
    type?: CicleType;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    children?: React.ReactNode;
}
export default function Circle(props: CircleProps): JSX.Element;
export {};
