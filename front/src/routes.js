// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import LocationOn from "@material-ui/icons/LocationOn";
import RoomServiceSharp from "@material-ui/icons/RoomServiceSharp";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard";
import UserProfile from "./views/UserProfile/UserProfile";
import Profile from "./components/auth/profile.component";
import TableList from "./views/TableList/TableList";
import Product from "./views/Product/Product";
// import Maps from "./views/Maps/Maps";
import Chat from "./views/Chatting/chat";
import Services from "./views/Services/services";

const dashboardRoutes = [
  // admin routes
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Profil",
    icon: Person,
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Devis",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/product",
    name: "Projects",
    icon: LibraryBooks,
    component: Product,
    layout: "/admin",
  },

  {
    path: "/chat",
    name: "chat",
    icon: LibraryBooks,
    component: Chat,
    layout: "/admin",
  },
  // user routes
  {
    path: "/chat",
    name: "chat",
    icon: LibraryBooks,
    component: Chat,
    layout: "/user",
  },
  {
    path: "/user",
    name: "Profil",
    icon: Person,
    component: Profile,
    layout: "/user",
  },
  // {
  //   path: "/services",
  //   name: "Services",
  //   icon: RoomServiceSharp,
  //   component: Services,
  //   layout: "/admin",
  // },

  // {
  //   path: "/maps",
  //   name: "Services",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
