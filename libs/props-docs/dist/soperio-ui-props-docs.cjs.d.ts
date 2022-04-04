
    export interface Parent {
        fileName: string;
        name: string;
    }

    export interface Declaration {
        fileName: string;
        name: string;
    }

    export interface DefaultProps {
        defaultValue?: any;
        description: string | JSX.Element;
        name: string;
        parent: Parent;
        declarations: Declaration[];
        required: boolean;
        type: { name: string };
    }

    export interface PropDoc {
        tags: { see: string };
        filePath: string;
        description: string | JSX.Element;
        displayName: string;
        methods: any[];
        props: {
          defaultProps?: DefaultProps;
          components?: DefaultProps;
        };
    }
  
export declare const Avatar: PropDoc
export declare const Badge: PropDoc
export declare const Soperio Button: PropDoc
export declare const CardNamespace: PropDoc
export declare const Checkbox: PropDoc
export declare const Container: PropDoc
export declare const Divider: PropDoc
export declare const Input: PropDoc
export declare const Radio: PropDoc
export declare const Select: PropDoc
export declare const Sidebar: PropDoc
export declare const Spinner: PropDoc
export declare const Stack: PropDoc
export declare const Switch: PropDoc
export declare const TextArea: PropDoc
export declare const Tile: PropDoc