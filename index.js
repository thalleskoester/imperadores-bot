const Bot = require('./src/bot');

const bot = new Bot();
bot.run();

/* const fs = require('fs');
const Discord = require('discord.js');
const Config = require('./config');

const bot = new Discord.Client();

const actionFiles = fs.readdirSync('./actions').filter(file => file.endsWith('.js'));

for (const file of actionFiles) {
	const Action = require(`./actions/${file}`);
	const action = new Action();
	bot.once(action.name, action.execute);
}

bot.login(Config.token);

bot.once('ready', () => {
	console.log('I am ready!');
});

// Create an event listener for new guild members
bot.once('guildMemberAdd', member => {
	const test = member.send('test');
	console.log(member.user.id);
});

bot.once('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!bot.commands.has(command)) {

	}

	const commandHandler = bot.commands.get(command);

	if (commandHandler.checkChannel('all')) {
		commandHandler.execute(message, args);
		return;
	}

	if (message.channel.type === 'dm' && commandHandler.checkChannel('dm')) {
		commandHandler.execute(message, args);
	}

	if (message.channel.type === '' && commandHandler.checkChannel('')) {
		commandHandler.execute(message, args);
	}
}); */