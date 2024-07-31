"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
const appFactory = {
    createApp() {
        const app = (0, express_1.default)();
        routers_1.default.configRoutes(app);
        return app;
    },
};
exports.default = appFactory;
