import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/"
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    path: "/#services"
  },
  {
    id: 2.1,
    title: "Projects",
    newTab: false,
    path: "/project"
  },
  // {
  //   id: 2.3,
  //   title: "Team",
  //   newTab: false,
  //   path: "/team"
  // },
  // {
  //   id: 3,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Projects",
  //       newTab: false,
  //       path: "/project",
  //     },
  //     {
  //       id: 34,
  //       title: "Sign In",
  //       newTab: false,
  //       path: "/auth/signin",
  //     },
  //     {
  //       id: 35,
  //       title: "Sign Up",
  //       newTab: false,
  //       path: "/auth/signup",
  //     },
  //     {
  //       id: 35,
  //       title: "Team",
  //       newTab: false,
  //       path: "/team",
  //     },
  //     {
  //       id: 35.1,
  //       title: "Support",
  //       newTab: false,
  //       path: "/support",
  //     },
  //     {
  //       id: 36,
  //       title: "404",
  //       newTab: false,
  //       path: "/error",
  //     },
  //   ],
  // },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support"
  },
];

export default menuData;
