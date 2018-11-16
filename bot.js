const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot successfully loaded.');
});

client.on('message', message => {
    if (message.content === ';;weather') {
    	message.reply(':x: This feature is coming soon.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
