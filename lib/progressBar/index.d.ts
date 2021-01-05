declare class ProgressBar {
    _clock: any;
    _count: number;
    className: string;
    img: HTMLDivElement;
    hodor: HTMLDivElement;
    constructor();
    show(): void;
    hide(): void;
    hasAdded(): boolean;
}
declare const _default: ProgressBar;
export default _default;
