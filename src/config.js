require('dotenv').config();

module.exports = {
	env: process.env.NODE_ENV,
	token: process.env.BOT_TOKEN,
	prefix: process.env.CMD_PREFIX,
};