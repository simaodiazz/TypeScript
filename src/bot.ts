import {
    Client,
    Message
} from 'discord.js'

export class Bot {

    private client: Client;

    constructor(token: string) {
        this.client = new Client();
        this.setup();
        this.start(token);
    }

    private setup(): void {
        this.client.on('ready', () => {
            console.log('Bot is online!')
        });

        this.client.on('message', (message: Message) => {
            if (message.author.bot) return;

            if (message.content === 'ping') {
                message.channel.send('pong')
            }
        })
    }

    public start(token: string): void {
        this.client.login(token)
    }
}
