"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("../database/connection"));
var Yup = __importStar(require("yup"));
exports.default = {
    index: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var category, products, seralizeProducts, products, seralizeProducts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        category = request.query.category;
                        if (!category) return [3 /*break*/, 2];
                        return [4 /*yield*/, connection_1.default('products')
                                .where('category', 'like', "%" + category + "%")
                                .select('*')];
                    case 1:
                        products = _a.sent();
                        seralizeProducts = products.map(function (product) {
                            return __assign(__assign({}, product), { image_url: "https://barshop.herokuapp.com/uploads/" + product.image });
                        });
                        return [2 /*return*/, response.json(seralizeProducts)];
                    case 2: return [4 /*yield*/, connection_1.default('products').select('*')];
                    case 3:
                        products = _a.sent();
                        seralizeProducts = products.map(function (product) {
                            return __assign(__assign({}, product), { image_url: "https://barshop.herokuapp.com/uploads/" + product.image });
                        });
                        return [2 /*return*/, response.json(seralizeProducts)];
                }
            });
        });
    },
    create: function (resquest, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, price, description, whatsapp, address, number, category, trx, product, schema, status;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = resquest.body, name = _a.name, price = _a.price, description = _a.description, whatsapp = _a.whatsapp, address = _a.address, number = _a.number, category = _a.category;
                        return [4 /*yield*/, connection_1.default.transaction()];
                    case 1:
                        trx = _b.sent();
                        product = {
                            image: resquest.file.filename,
                            name: name,
                            price: price,
                            description: description,
                            whatsapp: whatsapp,
                            address: address,
                            number: number,
                            category: category
                        };
                        schema = Yup.object().shape({
                            name: Yup.string().required(),
                            image: Yup.string().required(),
                            price: Yup.string().required(),
                            description: Yup.string().required(),
                            whatsapp: Yup.string().required(),
                            address: Yup.string().required(),
                            number: Yup.string().required(),
                            category: Yup.string().required()
                        });
                        return [4 /*yield*/, schema.isValid(product)];
                    case 2:
                        if (!(_b.sent())) {
                            return [2 /*return*/, response.status(400).json({ error: 'Erro na inserçao dos dados' })];
                        }
                        return [4 /*yield*/, trx('products').insert(product)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, trx.commit()];
                    case 4:
                        status = _b.sent();
                        if (!status) {
                            return [2 /*return*/, response.status(400).json({ error: 'Error na Requisição' })];
                        }
                        return [2 /*return*/, response.status(201).json({ status: 'Sucesso na criação' })];
                }
            });
        });
    },
    show: function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, product, seralizeProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        return [4 /*yield*/, connection_1.default('products')
                                .where('id', String(id))
                                .first()
                                .select('*')];
                    case 1:
                        product = _a.sent();
                        seralizeProduct = __assign(__assign({}, product), { image_url: "https://barshop.herokuapp.com/uploads/" + product.image });
                        return [2 /*return*/, response.json(seralizeProduct)];
                }
            });
        });
    }
};
