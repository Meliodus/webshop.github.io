import React from "react";

const SignUp1 = React.lazy(() =>
  import("./Pages/Authentication/SignUp/SignUp1")
);
const Signin1 = React.lazy(() =>
  import("./Pages/Authentication/SignIn/SignIn1")
);
const Reset1 = React.lazy(() => import("./Pages/Authentication/Reset/Reset1"));
const Dashboard = React.lazy(() => import("./Pages/Dashboard/Default"));

const route = [
  { path: "/auth/signup-1", exact: true, name: "Signup 1", component: SignUp1 },
  { path: "/auth/signin-1", exact: true, name: "Signin 1", component: Signin1 },
  { path: "/auth/reset-1", exact: true, name: "Reset 1", component: Reset1 },
  {
    path: "/default/dashboard/default",
    exact: true,
    name: "default",
    component: Dashboard,
  },
];

export default route;
