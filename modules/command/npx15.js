const fs = require("fs");
module.exports.config = {
	name: "npx15",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "pari",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🌹")==0 || event.body.indexOf("🌺")==0 || event.body.indexOf("🥀")==0 || event.body.indexOf("🌻")==0 || event.body.indexOf("🌸")==0 || event.body.indexOf("🌼")==0 || event.body.indexOf("🐸")==0 ||
event.body.indexOf("✨")==0 || event.body.indexOf("🌝")==0) {
		var msg = {
				body: "🦋__!\n!তুমি আমার ক্লান্ত রাতে'র࿐\n        🥀🦋ঘুম থেকে উঠা হাসি♡࿐\n              !!-বিষন্নতায় ডুবে থাকলেও-\n࿐\n                          🦋🥀 আমি\nতোমাকেই__ভালোবাসি!࿐\n\n𝐉𝐑 𝐉𝐀𝐇𝐈𝐃(✷‿✷)",
				attachment: fs.createReadStream(__dirname + `/noprefix/pari.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🍂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                }