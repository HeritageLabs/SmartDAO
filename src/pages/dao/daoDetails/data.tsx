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
    url: ""
  },
  {
    icon: FundsIcon,
    name: 'Funds',
    id: 2,
    url: ""
  },
  {
    icon: MembersIcon,
    name: 'Members',
    id: 3,
    url: ""
  },
  {
    icon: SettingsIc,
    name: 'Settings',
    id: 4,
    url: ""
  },
  {
    icon: PoolsIcon,
    name: 'Pools',
    id: 5,
    url: ""
  },
];

export const FundData = [
  {
    name: '',
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: '',
    uv: 2,
    pv: 2,
    amt: 2,
  },
  {
    name: '',
    uv: 2,
    pv: 2,
    amt: 2,
  },
  {
    name: '',
    uv: 2,
    pv: 2,
    amt: 2,
  },
];

export const SideBar = [
  {
    title: 'Dao funds',
    percent: 0,
    value: '0AE'
  },
  {
    title: 'Active proposals',
    percent: 0,
    value: '0'
  },
  {
    title: 'Proposals in total',
    percent: 0,
    value: '0'
  },
]

export default DaoDetail;
