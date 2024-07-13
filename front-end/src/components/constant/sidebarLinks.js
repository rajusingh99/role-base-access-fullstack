import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import AssessmentIcon from "@mui/icons-material/Assessment";
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
const RiskScenario = [
  {
    risk_id: "RS-8306432",
    risk_scenario: "Confidentiality of system ABC is compromised.",
    risk_description:
      "This risk scenario occurs when sensitive data in a system is disclosed to unauthorized users.",
    tag_key: "Industry",
    tag_value: "Healthcare",
    draft: false,
  },
  {
    risk_id: "RS-8306433",
    risk_scenario: "Integrity of data stored in system ABC is compromised.",
    risk_description:
      "This risk scenario occurs when sensitive data is tampered with.",
    tag_key: "Industry",
    tag_value: "Healthcare",
    draft: true,
  },
  {
    risk_id: "RS-8306434",
    risk_scenario: "Confidentiality of system ABC is compromised.",
    risk_description:
      "This scenario occurs when the system is down and not accessible.",
    tag_key: "Industry",
    tag_value: "Banking",
    draft: false,
  },
  {
    risk_id: "RS-8306435",
    risk_scenario: "Integrity of data stored in system ABC is compromised.",
    risk_description:
      "This risk scenario occurs when sensitive data in a system is disclosed to unauthorized users.",
    tag_key: "Industry",
    tag_value: "Banking",
    draft: false,
  },
  {
    risk_id: "RS-8306436",
    risk_scenario: "Confidentiality of system ABC is compromised.",
    risk_description:
      "This risk scenario occurs when sensitive data is tampered with.",
    tag_key: "Industry",
    tag_value: "Banking",
    draft: false,
  },
  {
    risk_id: "RS-8306437",
    risk_scenario: "Integrity of data stored in system ABC is compromised.",
    risk_description:
      "This scenario occurs when the system is down and not accessible.",
    tag_key: "Industry",
    tag_value: "Healthcare",
    draft: true,
  },
  {
    risk_id: "RS-8306438",
    risk_scenario: "Confidentiality of system ABC is compromised.",
    risk_description:
      "This risk scenario occurs when sensitive data in a system is disclosed to unauthorized users.",
    tag_key: "Industry",
    tag_value: "Technology",
    draft: false,
  },
  {
    risk_id: "RS-8306439",
    risk_scenario: "Integrity of data stored in system ABC is compromised.",
    risk_description:
      "This risk scenario occurs when sensitive data is tampered with.",
    tag_key: "Industry",
    tag_value: "Technology",
    draft: false,
  },
  {
    risk_id: "RS-8306440",
    risk_scenario: "Confidentiality of system ABC is compromised.",
    risk_description:
      "This scenario occurs when the system is down and not accessible.",
    tag_key: "Industry",
    tag_value: "Technology",
    draft: false,
  },
];

const Tag_key = [
  {
    key: "Industry",
    value: "industry",
  },
  {
    key: "Domain",
    value: "domain",
  },
  {
    key: "Client",
    value: "client",
  },
];

const AssessmentData = [
  {
    run_id: "AR-876891",
    risk_id: "RS-8306432",
    risk_scenario: "Confidentiality of system ABC is compromised.",
    likelihood_score_text: "Always",
    likelihood_score_value: "5",
    business_impact_score_text: "Low",
    business_impact_score_value: "2",
    net_risk_score: "2",
    submitted_date: "12/03/23",
  },
  {
    run_id: "AR-876891",
    risk_id: "RS-8306433",
    risk_scenario: "Integrity of data stored in system ABC is compromised.",
    likelihood_score_text: "Frequent",
    likelihood_score_value: "3",
    business_impact_score_text: "Very Low",
    business_impact_score_value: "1",
    net_risk_score: "0.6",
    submitted_date: "12/03/23",
  },
  {
    run_id: "AR-876891",
    risk_id: "RS-8306434",
    risk_scenario:
      "System ABC is operationally unavailable for an extended time period.",
    likelihood_score_text: "Periodic",
    likelihood_score_value: "2",
    business_impact_score_text: "Critical",
    business_impact_score_value: "5",
    net_risk_score: "2",
    submitted_date: "12/03/23",
  },
  {
    run_id: "AR-876891",
    risk_id: "RS-8306435",
    risk_scenario: "Confidentiality of system XYZ is compromised.",
    likelihood_score_text: "Often",
    likelihood_score_value: "4",
    business_impact_score_text: "High",
    business_impact_score_value: "4",
    net_risk_score: "3.2",
    submitted_date: "12/03/23",
  },
  {
    run_id: "AR-876891",
    risk_id: "RS-8306436",
    risk_scenario: "Integrity of data stored in system XYZ is compromised.",
    likelihood_score_text: "Always",
    likelihood_score_value: "5",
    business_impact_score_text: "Medium",
    business_impact_score_value: "3",
    net_risk_score: "3",
    submitted_date: "12/03/23",
  },
  {
    run_id: "AR-876891",
    risk_id: "RS-8306437",
    risk_scenario:
      "System XYZ is operationally unavailable for an extended time period.",
    likelihood_score_text: "Rare",
    likelihood_score_value: "1",
    business_impact_score_text: "Low",
    business_impact_score_value: "2",
    net_risk_score: "0.4",
    submitted_date: "12/03/23",
  },
  {
    run_id: "AR-876891",
    risk_id: "RS-8306438",
    risk_scenario: "Confidentiality of system KLM is compromised.",
    likelihood_score_text: "Often",
    likelihood_score_value: "4",
    business_impact_score_text: "High",
    business_impact_score_value: "4",
    net_risk_score: "3.2",
    submitted_date: "12/03/23",
  },
  {
    run_id: "AR-876891",
    risk_id: "RS-8306439",
    risk_scenario: "Integrity of data stored in system KLM is compromised.",
    likelihood_score_text: "Frequent",
    likelihood_score_value: "3",
    business_impact_score_text: "Critical",
    business_impact_score_value: "5",
    net_risk_score: "3",
    submitted_date: "12/03/23",
  },
  {
    run_id: "AR-876891",
    risk_id: "RS-8306440",
    risk_scenario:
      "System KLM is operationally unavailable for an extended time period.",
    likelihood_score_text: "Periodic",
    likelihood_score_value: "2",
    business_impact_score_text: "Very Low",
    business_impact_score_value: "1",
    net_risk_score: "0.4",
    submitted_date: "12/03/23",
  },
  {
    run_id: "AR-876892",
    risk_id: "RS-8306432",
    risk_scenario: "Confidentiality of system ABC is compromised.",
    likelihood_score_text: "Often",
    likelihood_score_value: "4",
    business_impact_score_text: "Medium",
    business_impact_score_value: "3",
    net_risk_score: "2.4",
    submitted_date: "24/08/23",
  },
  {
    run_id: "AR-876892",
    risk_id: "RS-8306433",
    risk_scenario: "Integrity of data stored in system ABC is compromised.",
    likelihood_score_text: "Always",
    likelihood_score_value: "5",
    business_impact_score_text: "Low",
    business_impact_score_value: "2",
    net_risk_score: "2",
    submitted_date: "24/08/23",
  },
  {
    run_id: "AR-876892",
    risk_id: "RS-8306434",
    risk_scenario:
      "System ABC is operationally unavailable for an extended time period.",
    likelihood_score_text: "Often",
    likelihood_score_value: "4",
    business_impact_score_text: "High",
    business_impact_score_value: "4",
    net_risk_score: "3.2",
    submitted_date: "24/08/23",
  },
  {
    run_id: "AR-876892",
    risk_id: "RS-8306435",
    risk_scenario: "Confidentiality of system XYZ is compromised.",
    likelihood_score_text: "Often",
    likelihood_score_value: "4",
    business_impact_score_text: "Critical",
    business_impact_score_value: "5",
    net_risk_score: "4",
    submitted_date: "24/08/23",
  },
  {
    run_id: "AR-876892",
    risk_id: "RS-8306436",
    risk_scenario: "Integrity of data stored in system XYZ is compromised.",
    likelihood_score_text: "Frequent",
    likelihood_score_value: "3",
    business_impact_score_text: "Very Low",
    business_impact_score_value: "1",
    net_risk_score: "0.6",
    submitted_date: "24/08/23",
  },
  {
    run_id: "AR-876892",
    risk_id: "RS-8306437",
    risk_scenario:
      "System XYZ is operationally unavailable for an extended time period.",
    likelihood_score_text: "Periodic",
    likelihood_score_value: "2",
    business_impact_score_text: "Very Low",
    business_impact_score_value: "1",
    net_risk_score: "0.4",
    submitted_date: "24/08/23",
  },
  {
    run_id: "AR-876892",
    risk_id: "RS-8306438",
    risk_scenario: "Confidentiality of system KLM is compromised.",
    likelihood_score_text: "Always",
    likelihood_score_value: "5",
    business_impact_score_text: "Critical",
    business_impact_score_value: "5",
    net_risk_score: "5",
    submitted_date: "24/08/23",
  },
  {
    run_id: "AR-876892",
    risk_id: "RS-8306439",
    risk_scenario: "Integrity of data stored in system KLM is compromised.",
    likelihood_score_text: "Rare",
    likelihood_score_value: "1",
    business_impact_score_text: "High",
    business_impact_score_value: "4",
    net_risk_score: "0.8",
    submitted_date: "24/08/23",
  },
  {
    run_id: "AR-876892",
    risk_id: "RS-8306440",
    risk_scenario:
      "System KLM is operationally unavailable for an extended time period.",
    likelihood_score_text: "Often",
    likelihood_score_value: "4",
    business_impact_score_text: "Medium",
    business_impact_score_value: "3",
    net_risk_score: "2.4",
    submitted_date: "24/08/23",
  },
];

export const Constant = {
  bgColor: "#434EB3",
  Service,
  RiskScenario,
  Tag_key,
  AssessmentData,
};
