module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "info",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/d3N5wxBj/Picsart-23-05-27-16-59-51-589.jpg", 
            
            "https://i.postimg.cc/WznHZGkY/received-129050313516419.jpg", 
            
            "https://i.postimg.cc/W3t3C82g/20230527-165730.jpg",

"",
            
            ""];
  
var callback = () => api.sendMessage({body:`ADMIN AND BOT INFORMATION 
________________________________________

❇️BOT NAME : ${global.config.BOTNAME}

❇️BOT ADMIN : 𝐉𝐑 𝐉𝐀𝐇𝐈𝐃🐰

❇️ADDRESS: KHULNA, Bangladesh

_____________CONTACT_____________

❇️FACEBOOK ID:
https://www.facebook.com/Sexy.pola.69


❇️BOT PREFIX : ${global.config.PREFIX}

❇️BOT OWNER : 𝐉𝐀𝐇𝐈𝐃

OTHER NFORMATION____________________

TYPE /admin 

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🤖🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };