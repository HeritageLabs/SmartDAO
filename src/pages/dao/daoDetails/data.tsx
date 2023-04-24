import { ReactNode } from "react";
import { FundsIcon, MembersIcon, PoolsIcon, SettingsIc, WriteIcon } from "../../../assets/svgs";

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

export const FundData = [
    {
      name: '',
      uv: 1000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '',
      uv: 2280,
      pv: 3908,
      amt: 2000,
    },
  ];

  export const SideBar = [
    {
        title: 'Dao funds',
        percent: 0,
        value: '10.90USD'
    },
    {
        title: 'Active proposals',
        percent: 0,
        value: '2'
    },
    {
        title: 'Proposals in total',
        percent: 0,
        value: '5'
    },
  ]

export default DaoDetail;
