"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = __importDefault(require("./app/routers"));
const globalErrorHandle_1 = require("./app/Middlewere/globalErrorHandle");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json()),
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
app.use('/api', routers_1.default);
app.use(globalErrorHandle_1.GlobalErrorHandle);
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "This Route Not Found",
        error: {
            path: req.originalUrl,
            message: "You Requested Path Not Found!!!"
        }
    });
});
exports.default = app;
