"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var upload_1 = __importDefault(require("./config/upload"));
var ProductsController_1 = __importDefault(require("./controllers/ProductsController"));
var routes = express_1.Router();
var upload = multer_1.default(upload_1.default);
routes.get('/product', ProductsController_1.default.index);
routes.post('/product', upload.single('image'), ProductsController_1.default.create);
routes.get('/product/:id', ProductsController_1.default.show);
exports.default = routes;
