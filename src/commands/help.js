const Command = require('../command');
const Config = require('../config');

module.exports = class Help extends Command {
	constructor() {
		super('help', ['dm', 'guild']);
	}

	executeDm(message) {
		const commands = [
			`> \`${Config.prefix}help\` Use esse comando para ver a lista de comandos disponíveis.`,
			`> \`${Config.prefix}verify\` Use esse comando para verificar sua matrícula.`,
		];

		const msg = `**${message.author.username}**, segue a minha lista de comandos como pediu\n\n${commands.join('\n')}`;
		message.reply(msg)
			.then(() => console.log(`Sent a reply to ${message.author.username} in dm`))
			.catch(console.error);
	}

	executeGuild(message) {
		const commands = [
			`**${message.author.username}**, não tenho nenhum comando disponível para você no momento.`,
		];

		message.reply(commands.join('\n'))
			.then(() => console.log(`Sent a reply to ${message.author.username} in guild`))
			.catch(console.error);
	}
};