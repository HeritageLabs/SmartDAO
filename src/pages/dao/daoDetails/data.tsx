import { ReactNode } from "react";
import { FundsIcon, HomeIconDark, MembersIcon, PoolsIcon, SettingsIc, WriteIcon } from "../../../assets/svgs";
import { DAOS } from "../../../utils/constants/pages";

interface IDaoDetail {
  icon: ReactNode,
  name: string;
  id: number;
  url: string | any;
}

const DaoMenu: IDaoDetail[] = [
  {
    icon: HomeIconDark,
    name: 'Home',
    id: 1,
    url: (dao: { name: string }) => `${DAOS}/${dao.name}`
  },
  {
    icon: WriteIcon,
    name: 'Proposals',
    id: 2,
    url: ""
  },
  {
    icon: FundsIcon,
    name: 'Funds',
    id: 3,
    url: ""
  },
  {
    icon: MembersIcon,
    name: 'Members',
    id: 4,
    url: (dao: { name: string }) => `${DAOS}/${dao.name}/members`
  },
  {
    icon: SettingsIc,
    name: 'Settings',
    id: 5,
    url: ""
  },
  {
    icon: PoolsIcon,
    name: 'Pools',
    id: 6,
    url: ""
  },
];
// onClick={() => navigate(`${DAOS}/${dao.name}/members`)}
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

export default DaoMenu;
