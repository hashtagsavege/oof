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
    if (message.content === ';;weather1') {
    	message.reply('This feature is coming soon.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
