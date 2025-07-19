import React from "react";
import { PATH } from "../../../config";
import { 
  BsHouseDoor, 
  BsPerson, 
  BsGear, 
  BsBarChart, 
  BsFolder,
  BsPeople,
  BsClipboardData,
  BsFileText
} from "react-icons/bs";
import { 
  FiSettings, 
  FiUsers, 
  FiFileText, 
  FiHome,
  FiUser,
  FiFolder
} from "react-icons/fi";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <FiHome />,
    path: PATH.DASHBOARD,
    pathList: [PATH.DASHBOARD, PATH.USER_DASHBOARD, PATH.ADMIN_DASHBOARD, PATH.MANAGER_DASHBOARD],
  },
  {
    title: "Profile",
    icon: <FiUser />,
    path: "/profile",
    pathList: ["/profile"],
  },
  {
    title: "Projects",
    icon: <FiFolder />,
    path: "/projects",
    pathList: ["/projects"],
    subNav: [
      {
        title: "All Projects",
        path: "/projects/all",
        pathList: ["/projects/all"],
        icon: <BsFolder />,
      },
      {
        title: "My Projects",
        path: "/projects/my",
        pathList: ["/projects/my"],
        icon: <BsPerson />,
      },
    ],
  },
  {
    title: "Analytics",
    icon: <BsBarChart />,
    path: "/analytics",
    pathList: ["/analytics"],
    subNav: [
      {
        title: "Overview",
        path: "/analytics/overview",
        pathList: ["/analytics/overview"],
        icon: <BsBarChart />,
      },
      {
        title: "Reports",
        path: "/analytics/reports",
        pathList: ["/analytics/reports"],
        icon: <BsClipboardData />,
      },
    ],
  },
  {
    title: "Team",
    icon: <FiUsers />,
    path: "/team",
    pathList: ["/team"],
    subNav: [
      {
        title: "Members",
        path: "/team/members",
        pathList: ["/team/members"],
        icon: <BsPeople />,
      },
      {
        title: "Roles",
        path: "/team/roles",
        pathList: ["/team/roles"],
        icon: <BsGear />,
      },
    ],
  },
  {
    title: "Documents",
    icon: <FiFileText />,
    path: "/documents",
    pathList: ["/documents"],
  },
  {
    title: "Settings",
    icon: <FiSettings />,
    subNav: [
      {
        title: "General",
        path: "/settings/general",
        pathList: ["/settings/general"],
        icon: <BsGear />,
      },
      {
        title: "Security",
        path: "/settings/security",
        pathList: ["/settings/security"],
        icon: <BsGear />,
      },
      {
        title: "Notifications",
        path: "/settings/notifications",
        pathList: ["/settings/notifications"],
        icon: <BsGear />,
      },
    ],
  },
];