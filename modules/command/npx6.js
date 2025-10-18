const fs = require("fs");
module.exports.config = {
	name: "রিজিয়া",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😱",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("rijiya")==0 || event.body.indexOf("RIJIYA")==0 || event.body.indexOf("Rijiya")==0 || event.body.indexOf("@Rijiya Aktar Maya")==0) {
		var msg = {
				body: "🌺!!༄᭄༊___দূরত্ব কিছুই না যদি___🦋●\n🌻༄᭄༊__তোমার অনূভুতি\nআমার জন্য সত্যি হয়-🥀𖠺᭄🥀\n‎[𝐎𝐖𝐍𝐄𝐑:☞𝐉𝐑 𝐉𝐀𝐇𝐈𝐃 (✷‿✷)☜",
				attachment: fs.createReadStream(__dirname + `/noprefix/misti3.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }