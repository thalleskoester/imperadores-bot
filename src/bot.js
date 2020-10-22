const fs = require('fs');
const Discord = require('discord.js');
const Config = require('./config');


module.exports = class Bot {
	constructor() {
		this.client = new Discord.Client();

		this.registerEvents();

		this.updateBot = this.updateBot.bind(this);
	}

	registerEvents() {
		const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));

		for (const file of eventFiles) {
			const Event = require(`./events/${file}`);
			const event = new Event();
			this.client.once(event.name, event.execute);
		}
	}

	updateBot() {
		// console.log(this.client.guilds);
	}

	run() {
		this.client.login(Config.token)
			.catch(console.error);

		this.client.setInterval(this.updateBot, 1000);
	}
};