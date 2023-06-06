"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const discord_js_1 = require("discord.js");
class Bot {
    constructor(token) {
        this.client = new discord_js_1.Client();
        this.setup();
        this.start();
    }
    setup() {
        this.client.on('ready', () => {
            console.log('Bot is online!');
        });
        this.client.on('message', (message) => {
            if (message.author.bot)
                return;
            if (message.content === 'ping') {
                message.channel.send('pong');
            }
        });
    }
    start(token) {
        this.client.login(token);
    }
}
exports.Bot = Bot;
