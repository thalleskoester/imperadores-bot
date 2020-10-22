const Module = require('./module');

module.exports = class Command extends Module {
	constructor(name, channels, description) {
		super(name, description);
		this.channels = channels;
	}

	checkChannel(channel) {
		return this.channels === channel || this.channels.find(ch => ch === channel);
	}
};