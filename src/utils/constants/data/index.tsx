import Mgt from "../../../assets/icons/mgt.png";
import { AddMembers, ChangeIcon, RemoveMembers, TransferIcon } from "../../../assets/svgs";

export const DAOBuilds = [
    {
        image: Mgt,
        header: 'Treasury Management',
        subheader: 'Your DAO address can store fungible tokens, NFTs, and NEAR. It acts like any other wallet so you can do DeFi, ReFi, or use dApps as a group.',
        id: 1
    },
    {
        image: Mgt,
        header: 'Flexible Governance',
        subheader: 'Your DAO address can store fungible tokens, NFTs, and NEAR. It acts like any other wallet so you can do DeFi, ReFi, or use dApps as a group.',
        id: 1
    },
];

export const ProposalCreationData = [
    {
        thIcon: ChangeIcon,
        th: 'Change DAO config',
    },
    {
        thIcon: TransferIcon,
        th: 'Transfer',
    },
    {
        thIcon: AddMembers,
        th: 'Add members',
    },
    {
        thIcon: RemoveMembers,
        th: 'Remove members',
    }
]