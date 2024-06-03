const { Telegraf } = require('telegraf')  
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);



bot.start((ctx) => ctx.reply('Welcome to Sachin\'s demo bot'))

bot.command('Name' , (ctx) => ctx.reply(Sachin))

bot.on('sticker' , (ctx) => ctx.reply('❤️'))

bot.launch();
