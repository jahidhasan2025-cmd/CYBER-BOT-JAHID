const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["বেশি bot Bot করলে leave নিবো কিন্তু😒😒 " , "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺" , "আমি আবাল দের সাথে কথা বলি না,ok😒" , "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑", "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?" , "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬" , "I love you janu🥰" , "আরে Bolo আমার জান ,কেমন আছো?😚 " , "Bot বলে অসম্মান করছি,😰😿" , "Hop beda😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে ব্যাস্ত আছি😋" , "আমাকে এতো না ডেকে মামা জাহিদ কে একটা গফ দে✍️👙⛏️" , "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 " , "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒" , "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আছি" , "কি হলো , মিস্টেক করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "আমাকে এতো না ডেকে মামা জাহিদ কে একটা গফ দে✍️👙⛏️" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "হুম বলো কি বলবে😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒","হুম জান তোমার ওই খানে উম্মহ😑😘" , "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ😇😘" , " jang hanga korba😒😬" , "হুম জান তোমার অইখানে উম্মমাহ😷😘" , "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰" , "আমাকে এতো না ডেকে মামা জাহিদ কে একটা গফ দে✍️👙⛏️" , "😒তোর নানির সাউয়া", "আমাকে এতো না ডেকছ কেন ভলো টালো বাসো নাকি🤭🙈" ,];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "MISS YOU") || (event.body.toLowerCase() == "miss you")) {
     return api.sendMessage("<আমি তোমাকে রাইতে মিস খাই🥹🤖👅/👅-✘ 𝐉𝐑 𝐉𝐀𝐇𝐈𝐃 : ) 🎀 🍒:))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍🏼") || (event.body.toLowerCase() == "👍")) {
     return api.sendMessage("সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️", threadID);
   };
  
   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kya Tera Bap LagaYega? Pehle Prefix Laga Fir Likh Sim", threadID);
   };

if ((event.body.toLowerCase() == "👀")
  || (event.body.toLowerCase() == "চোখ")) {
  api.sendMessage("°♡︎⎯͢⎯⃝🩷🌺তার একজোড়া চোখ দেখে আমি আজ ও মাতাল...!🥀💔♡︎⎯͢⎯⃝🩷🥰", threadID);
};

if (event.body.toLowerCase() === "abeg" || event.body.toLowerCase() === "আবেগ") {
    api.sendMessage("আবেগ চুদে প্রেগন্যান্ট করে দাও যেন Depression আর কষ্ট তোমাকে চুদতে না পারে ✍️😈", threadID);
}

if ((event.body.toLowerCase() === "xud")
|| (event.body.toLowerCase() === "18+caption")) {
  api.sendMessage("︵❝།།💚🌺 ষুদতে ষুদতে হাপিয়ে যাবো তাও ষুদেই যাবো”ღ᭄🐹🤤💦",threadID);
};  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("এত হাই-হ্যালো চুদাছ কেনো বোকাচোদা..!🍆⛏️🐸🤣", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("SAME TO YOU😊 ", threadID);
   };

   if ((event.body.toLowerCase() == "pro") || (event.body.toLowerCase() == "lol")) {
     return api.sendMessage("Khud k0o KYa LeGend SmJhTi Hai 😂", threadID);
   };

  if (event.body.toLowerCase() === "nunu" || event.body.toLowerCase() === "/Nunu") {
    api.sendMessage("️ ছেলেদের নুনু চুসলে 🥵💦 মেয়েদের ভোদা সুন্দর হয়💦👄", threadID);
  }
  
   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚", threadID);
   };

   if ((event.body.toLowerCase() == "tor ball") || (event.body.toLowerCase() == "ball")) {
     return api.sendMessage("~ তোমার বাল উঠে নাই নাকি তোমার?? 🤖", threadID);
   };

  if ((event.body.toLowerCase() == "JAHID") || (event.body.toLowerCase() == "JR") || (event.body.toLowerCase() == "Jahid") || (event.body.toLowerCase() == "jahid")) {
     return api.sendMessage("উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "ceo")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞𝐉𝐑 𝐉𝐀𝐇𝐈𝐃 (✷‿✷)☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐉𝐀𝐇𝐈𝐃.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/Sexy.pola.69\nতার সাতে যোগা যোগ করবেন WhatsApp :- +8801944732721", threadID);
   };

   if ((event.body.toLowerCase() == "boss keda") || (event.body.toLowerCase() == "boss")) {
     return api.sendMessage("My Creator:𝐉𝐑 𝐉𝐀𝐇𝐈𝐃 ❤️/n হাই আমি মেছেন্জার ROBOT  আামার বস জাহিদ আমাকে আমাকে বানিয়েছেন আপনাদের কে হাসানোর জন্য/n আমি চাই আপনারা সব সময় হাসি খুশি থাকেন", threadID);
   };

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "boter admin")) {
     return api.sendMessage("He is 𝐉𝐑 𝐉𝐀𝐇𝐈𝐃 ❤️/n তাকে সবাই 𝐉𝐑 𝐉𝐀𝐇𝐈𝐃(✷‿✷)নামে  চিনে🤙", threadID);
   };

   if ((event.body.toLowerCase() == "bhabi") || (event.body.toLowerCase() == "vabi")) {
     return api.sendMessage("এ তো হাছিনা হে মেরে দিলকি দারকান হে মেরি জান হে😍.", threadID);
   };

  
   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() ==    "Hop") ||  (event.body.toLowerCase() ==
"stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("তুই চুপ তোর ১৪ গুষ্টি চুপ😼", threadID);
   };

  if ((event.body.toLowerCase() == "আসসালামু আলাইকুম") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "Salam ")) {
     return api.sendMessage("️- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "dhur") || (event.body.toLowerCase() == "baler robot") || (event.body.toLowerCase() == "kpl") || (event.body.toLowerCase() == "madari")) {
     return api.sendMessage("সরি বস মাফ করে দেন আর এমন ভুল হবে না🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "Samiya") || (event.body.toLowerCase() == "samiya")) {
     return api.sendMessage("খবরদার কেউ এই নাম দরে ডাক দিবানা এটা আমার বস জাহিদ এর বউ এর নাম..!😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ তুমি পঁচা তোমাকে কিস দিবো না 🤭", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "দন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️এতো ধন্যবাদ না দিয়ে পারলে গার্লফ্রেন্ড টা দিয়ে দে..!🌚⛏️🌶️", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️রাগ করে না সোনা পাখি এতো রাগ শরীরের জন্য ভালো না🥰", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️হুম চোদাইস না মাথা এমনিতেই গরম আছে🤬⛏️😷", threadID);
   };

   if ((event.body.toLowerCase() == "Name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "Tor nam ki")) {
     return api.sendMessage("️MY NAME IS °_>👅-✘ 𝐉𝐑 𝐉𝐀𝐇𝐈𝐃 : ) 🎀 🍒", threadID);
   };
  
   if (event.body.toLowerCase() === "Mohona" || event.body.toLowerCase() === "mohona") {
    api.sendMessage("️মামি এখন জাহিদ মামার সাথে বিজি বিরক্ত করো না 😈🔪👁️‍🗨️", threadID);
   }

if (event.body.toLowerCase() === "😈" || event.body.toLowerCase() === "fuck you") {
    api.sendMessage("️️কাক হয়ে বাজপাখির সাথে বেয়াদবি😅 হে'হে উরন্ত অবস্থায় ঝুলোন্ত গান শুনিয়ে দিবো..!!🥱😈", threadID);
}

if (event.body.toLowerCase() === "sad1" || event.body.toLowerCase() === "jr1") {
    api.sendMessage("️️_তুমি চাও বা না চাও পরপারে দেখা হলে, আমি আবার তোমার পিছু নিবো...!!🙂", threadID);
}

  if (event.body.toLowerCase() === "sad2" || event.body.toLowerCase() === "jr2") {
    api.sendMessage("️️(:-তোমাকে দেখার তৃষ্ণা আমার কখনোই মিটবেনা মায়াবতী..!🥺😅❤️", threadID);
  }

if (event.body.toLowerCase() === "sad3" || event.body.toLowerCase() === "jr3") {
    api.sendMessage("️️ উপন্যাস কিছু লাইন পড়ার সময় কল্পনাতে শুধু তুমিই ছিলে..😊💔", threadID);
}

if (event.body.toLowerCase() === "sad4" || event.body.toLowerCase() === "jr4") {
    api.sendMessage("️️নিষ্ঠুর পৃথিবীর অনিয়মের ধোঁয়াশা 💔টাকার কাছেই হেরে যায় মধ্যবিত্তের ভালোবাসা😅💔🥀", threadID);
}
  
  if (event.body.toLowerCase() === "🕋" || event.body.toLowerCase() === "🇸🇦") {
    api.sendMessage("️😓__আমলের খাতাটা বড্ড শূণ্য_😓😔_কিন্তু গুনাহের খাতাটা পরিপূর্ণ__ ইয়া الله আমাদের ক্ষমা করুন 🤲 আমিন 🤲", threadID);
  }

if (event.body.toLowerCase() === "sad5" || event.body.toLowerCase() === "jr5") {
    api.sendMessage("️— হাঁ'সি টা স'বার জ'ন্য হলেও চোখের জল'টা বিশেষ এক'জনের জ'ন্যই পরে বুজ'লা জান-!!🤍R", threadID);
}

if (event.body.toLowerCase() === "post1" || event.body.toLowerCase() === "শখের নাড়ী**") {
    api.sendMessage("️______''পুরুষ তার শখে'র নারী'কে অসংখ্য স্টাইলে তুদে''-(👌👈)-💢", threadID);
}

if (event.body.toLowerCase() === "🖕" || event.body.toLowerCase() === "post2") {
    api.sendMessage("️___ফাক ইউ'র ভুদা!!🐸🫵", threadID);
}

if (event.body.toLowerCase() === "bot koi" || event.body.toLowerCase() === "son") {
    api.sendMessage("️কিছু কইবি নাকি 😒🙄", threadID);
}
  
  if (event.body.toLowerCase() === "গোলাপী" || event.body.toLowerCase() === "golapi") {
    api.sendMessage("️ উফফফফ জান তোমার কচি গোলাপী ভোদায় উম্মাহ 🫶🥵👁️‍🗨️", threadID);
  }

if (event.body.toLowerCase() === "🤑" || event.body.toLowerCase() === "💰" || event.body.toLowerCase() === "💵" || event.body.toLowerCase() === "💸") {
    api.sendMessage("️আমি হবো জাদুকর খেলনা হবে নারী মন্ত্র হবে Money💸😎🥱😈", threadID);
}

if (event.body.toLowerCase() === "black" || event.body.toLowerCase() === "kala") {
    api.sendMessage("️️😒তোর টাও তো কালা🤧🌚", threadID);
}
  
   if ((event.body.toLowerCase() == "Pic de") || (event.body.toLowerCase() == "ss dew")) {
     return api.sendMessage("️এন থেকে সর দুরে গিয়া মর😒", threadID);
   };

   if (event.body.toLowerCase() === "nusrat" || event.body.toLowerCase() === "ex") {
    api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
}

   if ((event.body.toLowerCase() == "xudi") || (event.body.toLowerCase() == "tor nanire xudi")) {
     return api.sendMessage("️এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস..!🥱🌝🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️কি গো কলিজা তোমার কি মন খারাপ🥺", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ এইদিকে ওইদিকে কি দেখো জানু আমি তোমার সামনে দেখো😘", threadID);
   };

   if ((event.body.toLowerCase() == "AMAKE KEW VALOBASHE NA") || (event.body.toLowerCase() == "amake kew valobashe na") || (event.body.toLowerCase() == "Aj kew nai bole")) {
     return api.sendMessage("️চিন্তা করো কেন আমি তো আছি🫶/nতোমাকে রাইকে ভালোবাসবো", threadID);
   };

   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
     return api.sendMessage("খালি কি তোরাই পেম করবি আমাকেও একটা গফ দে<🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে..!🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("ভালোবাসা নামক আবলামী করতে চাইলে  ইনবক্সে চলে যা পাগল ছাগল🌚🐸🌶️🍆", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "Kemon acho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("আমি তখনই ভালো থাকি যখন আপনাকে হাসতে দেখি🤎☺️", threadID);
   };

   if ((event.body.toLowerCase() == "mon kharap") || (event.body.toLowerCase() == "tmr ki mon kharap")) {
     return api.sendMessage("আমার সাদা মনে কোনো কাদা নাই...!🌝", threadID);
   };

   if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("হুম আমার বস জাহিদ ও তেমাকে ভালোবাসে🥰🥱", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "tmi khaiso") || (event.body.toLowerCase() == "kheyeso")) {
     return api.sendMessage("না ঝাং 🥹 তুমি রান্না করে রাখো আমি এসে খাবো <😘", threadID);
   };

   if ((event.body.toLowerCase() == "tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlo basho")) {
     return api.sendMessage("হুম ঝাং আমি তোমাকে রাইতে ভলোপাসি <🥵", threadID);
   };

   if ((event.body.toLowerCase() == "ami jahid") || (event.body.toLowerCase() == "ki re")) {
     return api.sendMessage("হ্যা জাহিদ মামা ভালো আছো?", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }