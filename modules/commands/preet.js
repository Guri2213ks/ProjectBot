module.exports.config = {
  name: "preeadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100080882858036","100079222321994","61555719449877") {
    var aid = ["100080882858036","100079222321994","61555719449877"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = [" ਚੱਪਲਾਂ ਚੁੱਕਣ ਵਾਲੇ ਨੂੰ ਕਿਉਂ ਬਲਾ ਰਹੇ ਹੋ 🙂", "ਮੁਸ਼ਕੀ ਨੂੰ ਮੈਸ਼ਨ ਨਾ ਮਾਰ 😒",  "ਇਹ ਨਹਾਉਣਾ ਨਹੀ ਨਾ ਬਲਾਉ ਮੁਸ਼ਕ ਮਾਰੂ ਗਰੁੱਪ ਚੋ 😒😒", "ਇਹ ਠਰਕੀ ਆ ਸਿਰੇ ਦਾ ਲੁੱਚਾ ", "ਠਰਕੀ ਨੂੰ ਮੈਸ਼ਨ ਕਿਸਨੇ ਮਾਰਿਆ 🤔", "ਉਹ ਭਾਂਡੇ ਮਾਝ ਰਿਹਾ ਨਾ ਬਲਾਉ ਉਹਨੂੰ 😒", "ਘਰ ਵਾਲੀ ਦਾ ਗੁਲਾਮ ਪੋਚਾ ਮਾਰਨ ਚੋ ਬੀਜੀ ਆ 🙂" ,"ਇਹ ਝਾੜੀਆਂ ਚੋ ਟੱਟੀ ਬੈਠਾ 😂😂"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }