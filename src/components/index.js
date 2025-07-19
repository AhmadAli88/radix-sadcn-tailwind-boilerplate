import React from "react";

const NoPage = React.lazy(() => import("./NoPageFound"));
const SignIn = React.lazy(() => import("./SignIn/Index"));
const Register = React.lazy(() => import("./SignUp/Index"));
const Dashboard = React.lazy(() => import("./Dashboard"));
const AdminDashboard = React.lazy(() => import("./Dashboard/AdminDashboard"));
const UserDashboard = React.lazy(() => import("./Dashboard/UserDashboard"));
const ManagerDashboard = React.lazy(() =>
  import("./Dashboard/ManagerDashboard")
);

const WEB_PAGES = {
  NOPAGE: NoPage,
  SIGN_IN: SignIn,
  REGISTER: Register,
  DASHBOARD: Dashboard,
  ADMIN_DASHBOARD: AdminDashboard,
  USER_DASHBOARD: UserDashboard,
  MANAGER_DASHBOARD: ManagerDashboard,
};

export { WEB_PAGES };
