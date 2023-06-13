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
        title: 'Ended',
        icon: MemberIcon
    },
    {
        title: 'Failed',
        icon: FailedIcon
    },
]