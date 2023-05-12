export interface IContextType {
    isLoggedIn: boolean;
    showModal: boolean;
    loginUser: () => void;
    logoutUser: () => void;
    setShowModal: (arg0: boolean) => void;
    account: IAccount;
};

export interface IAccount {
    address: string;
    balance: number;
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
    mb: string;
    name: string;
    error: string;
    isCompulsory: boolean;
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