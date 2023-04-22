export interface IContextType {
    value: boolean;
    setValue: (arg0: boolean) => void;
};

export interface IInput {
    type: string;
    placeholder: string;
    label: string;
    disabled: boolean;
    onChange: (arg0: any) => void;
    defaultValue: string;
    value: string;
    textTransform: string;
    readOnly: boolean;
    hasCancel: boolean;
    handleClickCancel: () => void;
}

export interface ITextAreaInput {
    type: string;
    placeholder: string;
    label: string;
    disabled: boolean;
    onChange: (arg0: any) => void;
    defaultValue: string;
    value: string;
    textTransform: string;
    readOnly: boolean;
    hasCancel: boolean;
}