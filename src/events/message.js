const fs = require('fs');
const Discord = require('discord.js');
const Config = require('../config');
const Module = require('../module');

module.exports = class Message extends Module {
	constructor() {
		super('message');
		this.commands = new Discord.Collection();

		this.registerCommands();

		this.execute = this.execute.bind(this);
	}

	registerCommands() {
		const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const Command = require(`./../commands/${file}`);
			const command = new Command();
			this.commands.set(command.name, command);
		}
	}

	executeHelp(env) {
		const help = this.commands.get('help');
		if (env === 'dm') {
			help.executeDm();
		} else {
			help.executeGuild();
		}
	}

	dispatchCommand(command, args, env, message) {
		if (command.checkChannel('all')) {
			command.execute(message, args);
			return;
		}

		if (env === 'dm' && command.checkChannel('dm')) {
			if (typeof command.executeDm === 'function') {
				command.executeDm(message, args);
			} else {
				command.execute(message, args);
			}
		}

		if (env === 'guild' && command.checkChannel('guild')) {
			if (typeof command.executeGuild === 'function') {
				command.executeGuild(message, args);
			} else {
				command.execute(message, args);
			}
		}
	}

	execute(message) {
		if (!message.content.startsWith(Config.prefix) || message.author.bot) return;

		const args = message.content.slice(Config.prefix.length).trim().split(/ +/);
		const command = args.shift().toLowerCase();
		const env = message.channel.type === 'dm' ? 'dm' : 'guild';

		if (!this.commands.has(command)) {
			this.executeHelp(env);
		}

		const commandHandler = this.commands.get(command);
		if (commandHandler.args && !args.length) {
			this.executeHelp(env);
		}

		this.dispatchCommand(commandHandler, args, env, message);
	}
};