"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const urls_1 = require("./urls");
const cors_1 = __importDefault(require("cors"));
const PORT = 3001;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get("/countries", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(urls_1.COUNTRIES_LIST_URL);
        const data = response.data;
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}));
app.get("/country/:code", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { code } = req.params;
    try {
        const response = yield axios_1.default.get(`${urls_1.COUTRY_URL}${code}`);
        const data = response.data;
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}));
function startServer(options) {
    const { port } = options;
    const server = app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
    return server;
}
const server = startServer({ port: 3001 });
process.title = 'myApp';
