export type ParentComponent = {
    children?: React.ReactNode;
};

export type HTMLComponent<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;
export type HTMLParentComponent<T> = HTMLComponent<T> & ParentComponent;

export type HTMLButtonProps = HTMLParentComponent<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>;
export type HTMLDivProps = HTMLParentComponent<HTMLDivElement>;
export type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;
export type HTMLSelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;
export type HTMLTextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
