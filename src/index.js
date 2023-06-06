"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = require("./bot");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var token = process.env.DISCORD_APP_TOKEN;
console.log(token);
const bot = new bot_1.Bot(token !== undefined ? token : '');
