import { ReactNode } from "react";
import { FundsIcon, MembersIcon, PoolsIcon, SettingsIc, WriteIcon } from "../../assets/svgs";

interface IDaoDetail {
    icon: ReactNode,
    name: string;
    id: number;
    url: string;
}

const DaoDetail: IDaoDetail[] = [
    {
        icon: WriteIcon,
        name: 'Proposals',
        id: 1,
        url: "#"
    },
    {
        icon: FundsIcon,
        name: 'Funds',
        id: 2,
        url: "#"
    },
    {
        icon: MembersIcon,
        name: 'Members',
        id: 3,
        url: "#"
    },
    {
        icon: SettingsIc,
        name: 'Settings',
        id: 4,
        url: "#"
    },
    {
        icon: PoolsIcon,
        name: 'Pools',
        id: 5,
        url: "#"
    },
];

export default DaoDetail;