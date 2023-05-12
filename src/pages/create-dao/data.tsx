import { ReactElement } from "react";
import { EnterpriseIcon, MembershipIcon, ReputationIcon } from "../../assets/svgs";
import { CREATE_DAO_URL, CREATE_DAO_URL_ADD_GROUPS, CREATE_DAO_URL_CHECKOUT, CREATE_DAO_URL_PROPOSAL, CREATE_DAO_URL_SOCIALS, SELECT_TEMPLATE_URL } from "../../utils/constants/pages";

interface IDaoTemplate {
    icon: ReactElement;
    title: string;
    desc: string;
    color: string;
    id: number;
    url: string;
    disable: boolean;
};

export interface IDaoCreationStage {
    no: number;
    title: string;
    url: string;
    value: string;
}

export const DaoTemplate: IDaoTemplate[] = [
    {
        icon: EnterpriseIcon,
        title: 'Open Enterprise',
        desc: 'Use one of our pre-defined templates to create your organization. A suite of apps for organizations. ',
        color: 'bg-tertiary',
        id: 1,
        url: CREATE_DAO_URL,
        disable: true,
    },
    {
        icon: MembershipIcon,
        title: 'Membership',
        desc: 'Employ a non-transferable token to symbolize membership. One member, one vote is the basis for decision-making.',
        color: 'bg-quaternary',
        id: 2,
        url: CREATE_DAO_URL,
        disable: false
    },
    {
        icon: ReputationIcon,
        title: 'Reputation',
        desc: 'Employ a non-transferable token to symbolize representation. Reputation-weighted voting is the basis for decision-making.',
        color: 'bg-quinary',
        id: 3,
        url: CREATE_DAO_URL,
        disable: true,
    },
];

export const DaoCreationStage: IDaoCreationStage[] = [
    {
        no: 1,
        title: 'Select Template',
        url: SELECT_TEMPLATE_URL,
        value: 'dao_type',
    },
    {
        no: 2,
        title: 'Dao Info',
        url: CREATE_DAO_URL,
        value: 'dao_info',
    },
    {
        no: 3,
        title: 'Links & Socials',
        url: CREATE_DAO_URL_SOCIALS,
        value: 'dao_socials',
    },
    {
        no: 4,
        title: 'Add Groups & Members',
        url: CREATE_DAO_URL_ADD_GROUPS,
        value: 'dao_members',
    },
    {
        no: 5,
        title: 'Proposal Creation',
        url: CREATE_DAO_URL_PROPOSAL,
        value: 'dao_proposal',
    },
    {
        no: 6,
        title: 'Checkout',
        url: CREATE_DAO_URL_CHECKOUT,
        value: 'dao_checkout'
    },
];