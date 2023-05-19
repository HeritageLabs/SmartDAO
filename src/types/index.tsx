export interface IAccount {
    address: string;
    balance: number;
};

export interface IContextType {
    isLoggedIn: boolean;
    showModal: boolean;
    loginUser: () => void;
    logoutUser: () => void;
    setShowModal: (arg0: boolean) => void;
    account: IAccount;
    createDAO: (dao: IDAO) => void;
    getDAOs: () => Promise<any>;
    aeSdk: any;
    getDAO: (id: string) => Promise<any>;
    createProposal: (DAOAddress: string, proposal: IProposal) => void;
    voteForProposal: (DAOAddress: string, proposalId: number) => void;
    voteAgainstProposal: (DAOAddress: string, proposalId: number) => void;
    executeProposal: (DAOAddress: string, proposalId: number) => void;
    getProposal: (DAOAddress: string, proposalId: number) => Promise<any>;
    getProposals: (DAOAddress: string) => Promise<any>;
    getActiveProposals: (DAOAddress: string) => Promise<any>;
    searchValue: string;
    handleSearch: (args: string) => void;
    donate: (DAOAddress: string, amount: number) => void;
    amoutDonated: string | number;
    getAmountDonated: (args: string) => void;
};

export interface IDAO {
    name: string;
    description: string;
    tokenSymbol: string;
    image: string;
    socials: any;
    initialMembers: string[];
    startingBalance: number
}

export interface IProposal {
    proposalType: string;
    description: string;
    value: number;
    target: string
}

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