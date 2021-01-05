import React from 'react';
declare type TooltipPlacement = "top" | "left" | "right" | "bottom" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight" | "leftTop" | "leftBottom" | "rightTop" | "rightBottom";
interface IProps {
    placement?: TooltipPlacement;
    style?: React.CSSProperties;
    className?: string;
    value: string | number;
}
declare const _default: (props: IProps) => JSX.Element;
export default _default;
