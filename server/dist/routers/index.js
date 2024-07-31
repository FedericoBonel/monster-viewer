"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routerSetup = {
    configRoutes(app) {
        app.use("", (req, res) => {
            res.send("Hello World!");
        });
    },
};
exports.default = routerSetup;
