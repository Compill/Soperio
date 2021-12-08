export type ParentComponent = {
  children?: React.ReactNode;
};

export type HTMLComponent<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;
export type HTMLParentComponent<T> = HTMLComponent<T> & ParentComponent;
