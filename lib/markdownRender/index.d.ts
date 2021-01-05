/// <reference types="react" />
export interface MarkdownRenderProps {
    text?: string;
    className?: string;
    dark?: boolean;
}
export default function MarkdownRender(props: MarkdownRenderProps): JSX.Element;
