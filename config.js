//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2349123731026";
global.sudo = process.env.SUDO || "2348120549697";
global.owner = process.env.OWNER_NUMBER || "2348120549697";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0tzYmFmY2U0emJoN0pWWll2TnJsNWlZVjV5MTI1ZVlCb1IzSk1vd2NsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFA3Q3BsanNPQllOYVluWWNCbzdPMlhXa3prN01xQVVZd2dFRG5ZLzRETT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrT1kxdWpRbCtLekk5OGhHSVMwT05ITnBYVnNPYThDUktPWGtxbnZ6cDNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGS3pPY04vQy9TWTZsaTBnZ2R5R3d5OGg0RTkyWjBzeE9DdVFMWnlrU2dvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNEazZVcEo0ZFptSU1jL21ZMDFocERJYXYwTDYzRnBVRWloOCtaeU9lRzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJwbWxWa2pFTmo3Y0ZWL1dURnhGbG9peUNFTXloSTBFdWNNTWpMMXNqRDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0o2QUdCNDZkSEIxUFZXZmdjemo4S2tLQWc3NVlvSTRNZWZ2UFpHbzUzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibThITzh3VDRsb09xNzJIT1JaMVowcFZjTi9RYjVKU3JQR1QvVysxaVNFcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitSY29WS2F3U3ltQyt5V3pkeW9XcEFVTHE3MUNLQkszWWFsRkR6L2F6UXlFS1lrTmU2YmErNTlxYWhSSHY3aUtDVUpkNlVYcFN1RHJHVGZrdHBhVWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzcsImFkdlNlY3JldEtleSI6IkgveW50b0UyQ25wVWVUeXc3cW1lRVR2TmdZZ1hjWnpMR2dWZDV2Z1RHNXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkdCemZWX0hoUVpTbnBUWEh4TGRnNnciLCJwaG9uZUlkIjoiMzI3NzA4ZWMtNzE1MC00M2U4LWI3MzUtNjgzN2RhYzYzMjBlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh6Q0txR1RyR09oRVRzbU8yNUlpdEJiTENLVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4NEIzMmw0akZyYzk1Qk43VEw2NmpxM0dTd2s9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNlc3OUE5SzUiLCJtZSI6eyJpZCI6IjIzNDgxMjA1NDk2OTc6NzNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09MdGorb0ZFTG5IeGJnR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkkxeFh6Qy90Sklxa202dnJHbE5YMUY5ZDh0Qy9DV3FSRXJVOGxRd2x5eTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjFaOVdQZXhWVndrdXRxNVhneDdnWm41SGg2QmkwcEI2QkdxT2YrQ1FBTWlMb0tGR2h0Rmp2aDR1SmJ4ZTNjUFJ5Rkg5ZTJGdFNlMkNDZDR1SDFieGpRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPc3pOc2JwcjljQzkxKzlkT2x0dGpNcndHVkl5UGdITmUvdDFnV09jRmV3SzlUOHFueWl0Y3lTdnVaR0xobWdOd0Qya2M0bnIvMnMvN05QbXpCK0VoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMjA1NDk2OTc6NzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU05jVjh3djdTU0twSnVyNnhwVFY5UmZYZkxRdndscWtSSzFQSlVNSmNzdiJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MTkyOTAzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU44YSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
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
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
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
