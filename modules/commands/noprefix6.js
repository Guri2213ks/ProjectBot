/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "punjab",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ayush Shukla",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "ig",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["●▬▬๑۩۩ 𝐉𝐚𝐠𝐝𝐞𝐞𝐩 𝐬𝐢𝐧𝐠𝐡 IS MY BOSS۩۩๑▬▬😍😍😍 .... 😋😋😋😋 JOIN OUR FB GROUP ...PUNJAB 👉🏻♦️ https://www.facebook.com/groups/839843826572746/?ref=share ✨"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.imgur.com/HRPawQc.jpg",
    "https://i.imgur.com/I3sEJNM.jpg",
    "https://i.postimg.cc/fL7pFv6h/FB-IMG-1681795528177.jpg",
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/kaal.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };