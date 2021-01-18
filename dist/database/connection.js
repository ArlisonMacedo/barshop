"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var path_1 = __importDefault(require("path"));
var connection = knex_1.default({
    client: 'pg',
    connection: {
        host: 'ziggy.db.elephantsql.com',
        database: 'reqjviqj',
        user: 'reqjviqj',
        password: 'uZVghlZqSdKkbEFHPFt9mD8hvP6fJldz',
        port: 5432
    },
    migrations: {
        directory: path_1.default.join(__dirname, "database", "migrations")
    }
    // connection: {
    //   host: 'localhost',
    //   database: 'barshop',
    //   user: 'postgres',
    //   password: 'root',
    //   port: 5433
    // },
    // migrations: {
    //   directory: path.join(__dirname, "database", "migrations")
    // }
});
exports.default = connection;
