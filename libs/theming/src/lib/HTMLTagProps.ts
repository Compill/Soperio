import { ParentComponent, SoperioComponent } from "@soperio/theming";
import { As, PropsOf } from "./forwardRef";

type HTMLComponent<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;
type HTMLParentComponent<T> = HTMLComponent<T> & ParentComponent;

// export type HTMLAnchorProps = HTMLParentComponent<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;
// export type HTMLButtonProps = HTMLParentComponent<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>;
// export type HTMLDivProps = HTMLParentComponent<HTMLDivElement>;
// export type HTMLFormProps = HTMLParentComponent<HTMLFormElement> & React.FormHTMLAttributes<HTMLFormElement>;
// export type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;
// export type HTMLImageProps = React.ImgHTMLAttributes<HTMLImageElement>;
// export type HTMLHeadingProps = HTMLComponent<HTMLHeadingElement>;
// export type HTMLLabelProps = HTMLParentComponent<HTMLLabelElement> & React.LabelHTMLAttributes<HTMLLabelElement>;
// export type HTMLLegendProps = HTMLParentComponent<HTMLLegendElement> & HTMLComponent<HTMLLegendElement>;
// export type HTMLParagraphProps = HTMLParentComponent<HTMLParagraphElement> & HTMLComponent<HTMLParagraphElement>;
// export type HTMLQuoteProps = HTMLParentComponent<HTMLQuoteElement> & React.QuoteHTMLAttributes<HTMLQuoteElement>;
// export type HTMLSelectProps = HTMLParentComponent<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLSelectElement>;
// export type HTMLSpanProps = HTMLParentComponent<HTMLSpanElement> & HTMLComponent<HTMLSpanElement>;
// export type HTMLTableProps = HTMLParentComponent<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement>;
// export type HTMLTextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
// export type HTMLUListProps = HTMLParentComponent<HTMLUListElement> & React.ButtonHTMLAttributes<HTMLUListElement>;

type HTMLProps<T extends As> = Omit<PropsOf<T>, "ref" | keyof SoperioComponent>

export type HTMLAnchorProps = HTMLProps<"a">;
export type HTMLButtonProps = HTMLProps<"button">;
export type HTMLDivProps = HTMLProps<"div">;
export type HTMLFormProps = HTMLProps<"form">;
export type HTMLInputProps = HTMLProps<"input">;
export type HTMLImageProps = HTMLProps<"img">;
export type HTMLHeadingProps = HTMLProps<"h1">;
export type HTMLLabelProps = HTMLProps<"label">;
export type HTMLLegendProps = HTMLProps<"legend">;
export type HTMLParagraphProps = HTMLProps<"p">;
// export type HTMLQuoteProps = HTMLProps<"citation">;
export type HTMLSelectProps = HTMLProps<"select">;
export type HTMLSpanProps = HTMLProps<"span">;
export type HTMLTableProps = HTMLProps<"table">;
export type HTMLTextAreaProps = HTMLProps<"textarea">;
export type HTMLUListProps = HTMLProps<"ul">;
export type HTMLListItemProps = HTMLProps<"li">;
