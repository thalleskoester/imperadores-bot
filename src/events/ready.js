const Module = require('../module');

module.exports = class Ready extends Module {
	constructor() {
		super('ready');

		this.execute = this.execute.bind(this);
	}

	execute() {
		console.log('I am ready!');
		console.log();
	}
};