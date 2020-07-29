"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express = require("express"); // import-require combo
const express_1 = __importDefault(require("express")); // browser-based import syntax
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = __importDefault(require("./routes/router"));
const app = express_1.default();
app.use(body_parser_1.default.json()); // inferred-type
app.use(router_1.default);
app.listen(5000);
console.log("http-server");
