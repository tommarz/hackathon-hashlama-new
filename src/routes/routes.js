import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Feed from "@/pages/Feed.vue"
import TableList from "@/pages/TableList.vue";
import UserPage from "@/pages/UserProfile/UserCard.vue"
import Product from "@/pages/Product.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import AddProduct from "@/pages/AddProduct.vue"

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/user",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "feed",
        name: "Feed",
        component: Feed
      },
      {
        path: "product",
        name: "Product",
        component: Product
      },
      {
        path: "userPage",
        name: "userPage",
        component: UserPage
      },
    {
        path: "add-product",
        name: "Add Product",
        component: AddProduct
      }
    ]
  }
];

export default routes;
