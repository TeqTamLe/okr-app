import type { IMenu } from "@/interfaces/menu";
import {
  AppstoreOutlined,
  BankOutlined,
  HomeOutlined,
  PlusCircleFilled,
  PlusCircleOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const PathName = {
  new: "new",
  dashboard: "",
  company: "companies",
  teamokr: "team_okrs",
  myokr: "my_okrs",
  people: "people",
  teams: "teams",
  admin: "admin",
};

export const SidebarName = {
  [PathName.new]: "New",
  [PathName.dashboard]: "Dashboard",
  [PathName.company]: "Company OKRs",
  [PathName.teamokr]: "Team OKRs",
  [PathName.myokr]: "My OKRs",
  [PathName.people]: "People",
  [PathName.teams]: "Teams",
  [PathName.admin]: "Admin",
};

export const RouteMap: IMenu[] = [
  {
    key: PathName.new,
    // icon: { fill: PlusCircleFilled, outline: PlusCircleOutlined },
    icon: PlusCircleFilled,
    openSubMenu: true,
    // children: [
    //   {
    //     key: PathName.transactionMonitoring,
    //   },
    // ], // use implement sidebar with submenu"
  },
  {
    key: PathName.dashboard,
    icon: HomeOutlined,
  },
  {
    key: "",
    type: "divider",
  },
  {
    key: PathName.company,
    icon: BankOutlined,
  },
  {
    key: PathName.teamokr,
    icon: PlusCircleOutlined,
  },
  {
    key: PathName.myokr,
    icon: UserOutlined,
  },
  {
    key: "",
    type: "divider",
  },
  {
    key: PathName.people,
    icon: TeamOutlined,
  },
  {
    key: PathName.teams,
    icon: AppstoreOutlined,
  },
  {
    key: "",
    type: "divider",
  },
  {
    key: PathName.admin,
    icon: SettingOutlined,
  },
];
