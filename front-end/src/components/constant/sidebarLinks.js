import SummarizeIcon from "@mui/icons-material/Summarize";
import ForumIcon from "@mui/icons-material/Forum";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InfoIcon from '@mui/icons-material/Info';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SettingsIcon from '@mui/icons-material/Settings';

export const sidebarLinks = [
  { id: 1, value: "user", path: "/users", title: "User Management", icon: <PeopleOutlineIcon /> },
  {
    id: 2, value: "role",
    path: "/roles",
    title: "Role Management",
    icon: <PeopleAltIcon />,
  },
  { id: 3, value: "chat", path: "/chats", title: "Chats", icon: <ForumIcon /> },
  { id: 4, value: "report", path: "/reports", title: "Reports", icon: <SummarizeIcon /> },
  { id: 5, value: "about", path: "/about", title: "About", icon: <InfoIcon /> },
  {
    id: 6, value: "setting",
    path: "/settings",
    title: "Settings",
    icon: <SettingsIcon />,
  },
  { id: 7,value:"service", path: "/services", title: "Services", icon: <HomeRepairServiceIcon /> },
];

export const settings = [
  { id: 1, tittle: "Profile", path: "/dashboard/profile" },
  { id: 1, tittle: "Account", path: "/dashboard/account" },
  { id: 1, tittle: "Logout", path: "/dashboard/logout" },
];

const Service = [
  {
    id: 1,
    path: "/chats",
    title: "Chats",
    icon: <ForumIcon />,
    description:
      "Anticipate and address potential cybersecurity risk to business.",
  },
  {
    id: 2,
    path: "/about",
    title: "About",
    icon: <InfoIcon />,
    description: "Assess risk scenarios to identify net risk scores.",
  },
  {
    id: 3,
    path: "/reports",
    title: "Reports",
    icon: <SummarizeIcon />,
    description: "Generate reports for the business and security leaders.",
  },
];


export const Constant = {
  bgColor: "#434EB3",
  Service,
};
