const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot successfully loaded.');
});

client.on('message', message => {
    if (message.content === ';;weather') {
    	message.reply('This feature is coming soon.');
  	}
});
client.on('message', message => {
    if (message.content === ';;help') {
    	message.reply('The bot is currently in beta mode, so none of its commands work yet. The bot will leave beta mode soon.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
