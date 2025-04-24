"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customers_route_1 = require("../moudle/customers/customers.route");
const bike_route_1 = require("../moudle/bikes/bike.route");
const services_route_1 = require("../moudle/services/services.route");
const router = (0, express_1.Router)();
const AllRoutes = [
    {
        path: "/customers",
        route: customers_route_1.customerRoute,
    },
    {
        path: "/bikes",
        route: bike_route_1.bikeRoutes,
    },
    {
        path: "/services",
        route: services_route_1.servicesRoutes,
    }
];
AllRoutes.forEach((item) => router.use(item.path, item.route));
exports.default = router;
