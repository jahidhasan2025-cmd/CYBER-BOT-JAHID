module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100093953207938","100093953207938","100093953207938") {
    var aid = ["100093953207938","100093953207938","100093953207938"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["য়ামাল মামা কে এতো ডাকো কেন😒, ভালো টালো বাসো নাকি🤭", "য়ামাল মাম জাহিদ কে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু😡", " মামা এখন মামির সাথে কথা বলায় বেস্তো আছে যা বলার আমাকে বলো🫣", "Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","মামা এখন মামির চিপায় আছে🤭🙈🤖"," মামা কই থুমি থুমারে এক বলদে ডাকে😁🤣"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }