import { 
    Bot 
} from './bot'

import dotenv from 'dotenv'

dotenv.config()

var token = process.env.DISCORD_APP_TOKEN

console.log(token);

const bot = new Bot(token || '')