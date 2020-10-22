const Module = require('../module');

module.exports = class GuildMemberAdd extends Module {
	constructor() {
		super('guildMemberAdd');

		this.execute = this.execute.bind(this);
	}

	execute(member) {
		const test = member.send('test');
		console.log(member.user.id);
	}
};