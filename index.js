const TelegramBot = require('node-telegram-bot-api');
const token = "1302875258:AAHm6ycpdWGw4X0aBOZRAUrLOnDVjUdS_mc";
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {

    var hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hello dear user");
    } 
        
    var bye = "bye";
    if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again");
    } 
    
    });

