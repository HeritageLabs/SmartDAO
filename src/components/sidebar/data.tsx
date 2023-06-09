import { AddIcon, DaoIcon, DaoIconBlack, HomeIcon, HomeIconBlack, ProposalIcon, ProposalIconBlack } from "../../assets/svgs";
import { DAOS, FEEDS, PROPOSALS, SELECT_TEMPLATE_URL, VIEW_MY_DAO } from "../../utils/constants/pages";
import { ReactNode } from 'react';

interface SidebarProp {
    title: string;
    icon: ReactNode;
    url: string;
    activeIcon: ReactNode;
    id: number
}

export const SidebarLinks: SidebarProp[] = [
    {
        title: 'Home',
        icon: HomeIcon,
        url: FEEDS,
        activeIcon: HomeIconBlack,
        id: 1
    },
    {
        title: 'DAOs',
        url: DAOS,
        icon: DaoIcon,
        activeIcon: DaoIconBlack,
        id: 2
    },
    {
        title: 'Proposals',
        icon: ProposalIcon,
        url: PROPOSALS,
        activeIcon: ProposalIconBlack,
        id: 3
    },
    {
        title: 'My DAOs',
        icon: DaoIcon,
        url: VIEW_MY_DAO,
        activeIcon: ProposalIconBlack,
        id: 4
    },
];

interface CreationProp {
    title: string;
    icon: ReactNode;
    url: string;
    id: number;
}

export const Creation: CreationProp[] = [
    {
        title: 'Create DAO',
        icon: AddIcon,
        url: SELECT_TEMPLATE_URL,
        id: 1
    }
]