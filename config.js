//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348142909904";
global.sudo = process.env.SUDO || "2348142909904";
global.owner = process.env.OWNER_NUMBER || "2348100514856";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0I1dDliYVZNZVdmT1RzZWV1VjNyU0d3MnNuU1F1UVhWWVlQTmlOTlpIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVJFVHRyOC8yamZPWWlMcW9KWFdKSndPYUpiaTlDQlJvSzFYRjRWMmxBaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTW5Sa0xLaXIwQ290RmJPNVdNckhqakxyc0ZaQjVEWVAwRWxCTjVsUFVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1WDJQVm1ld29zQVdyZXVQOVhuSGVYbWtOSHk1M1hSRkE5ZnN4OGpMUkFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdQL28rRXBnRUM5eXlnMjh6VWNVMGIxaDZPYjZESVVXTkdNSUliazF3bEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktnLzdLMzFEaDVFVy9sVzF6QmNjRS9QQ01FNW1xTCtreFhkWjlTb0NlZ289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0JlalEvOGVFWUZzM2huSVFTbDdVTXpsVloxcUpDaUt1MGRRZm5aR0xYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT211c3NFUlFRek5xQzFRMkpoU25UalZYc3lFUEkxZ0p4MjJ3ZDUvRlBWRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlArNC9qVS8zVGlaK1FHcjJHN3FlbnNzMTd1SHRzQnhaWjg5MkI2czRyVlRoRGM3NUpCU2pvdVBLaVdnQ1ZDK3pSUkZIVEJQMGx5QUFTU2xUREVhVWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzcsImFkdlNlY3JldEtleSI6IjlpZndkSnppVHY0RTVXRGpGRkxrZTF3NkFPM1ZuZHpLcHFIaEFXaENpZ009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imk4cWdfVVE3UnlpTzQyZE1sRWNMemciLCJwaG9uZUlkIjoiMTc5ODZiYmItYjUzZS00ODMyLTkxZTktNGI1ZWJiNTEzNGU5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhMaE1tRjRuTjYrUWxOQ3MyczJaV05ucGdIOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3dHNHeFBvdnhneWtQY2sxN0Y0b2pLYTlhRG89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSk5ZRVdNUVIiLCJtZSI6eyJpZCI6IjIzNDgxMDA1MTQ4NTY6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJQUsOCRMOCUTxNRz4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0svQWtkSUZFTDdjMUxrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNJR1NUWkZzMzFaNk9PRXd1VVU3OFNsMTNyWkpLVjdDdk9NOC83ak02MlE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IklnSHBJTWphWGlObG1PWDZzZmhrZjVVU1lQRlM0U1N1RVQvSUJkekhTclRkWHI2OVVZZ091a2UrbFBsNXpvSkt2ejNIbEhEUnQvZ2ZrWFRUbjdyd0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6RFgxT29nSGc5TlZ3ZTJGUGFyZVIvZjQyUnVkS3kwa0lUK3Z5Qm5rY25IWnlYZXpWUmN0ZUR4MWpTU0NocmwxMy9WZnE1U2pjNGxXSytVTTdwNUpnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDA1MTQ4NTY6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiQ0JrazJSYk45V2VqamhNTGxGTy9FcGRkNjJTU2xld3J6alBQKzR6T3RrIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxNTM4NTA4fQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "PRÂDÂQ<MG>",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
