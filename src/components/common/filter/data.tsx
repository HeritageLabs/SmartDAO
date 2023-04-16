import { ActiveIcon, FailedIcon, MemberIcon } from "../../../assets/svgs";
import { ReactNode } from 'react';

interface FilterProp {
    title: string;
    icon: ReactNode;
}

export const FilterInput: FilterProp[] = [
    {
        title: 'Active',
        icon: ActiveIcon
    },
    {
        title: 'Failed',
        icon: FailedIcon
    },
    {
        title: 'Members',
        icon: MemberIcon
    },
]