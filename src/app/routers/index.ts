import { Router } from "express";
import { customerRoute } from "../moudle/customers/customers.route";
import { bikeRoutes } from "../moudle/bikes/bike.route";
import { servicesRoutes } from "../moudle/services/services.route";

const router = Router();

const AllRoutes = [
  {
    path: "/customers",
    route: customerRoute,
  },
  {
    path: "/bikes",
    route: bikeRoutes,
  },
  {
    path: "/services",
    route: servicesRoutes,
  }
];
AllRoutes.forEach((item) => router.use(item.path, item.route));
export default router;
