const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233248195376";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "233xxxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_49_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1LFxuICAgICAgICA3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcyLFxuICAgICAgICA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjExLFxuICAgICAgICAzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzksXG4gICAgICAgIDY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDYyLFxuICAgICAgICA0MixcbiAgICAgICAgMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMixcbiAgICAgICAgOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI5LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MixcbiAgICAgICAgMTM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NixcbiAgICAgICAgMjIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MixcbiAgICAgICAgMjE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI5LFxuICAgICAgICA3MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODksXG4gICAgICAgIDk2LFxuICAgICAgICA2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MixcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDksXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInpjbjNxSU5CQTVUN01FZU1PQk1UQ2xtTFpZZUcyTGpkK0lWYnIrQ0FIanc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRGNnM1NG9OVE91SHZuTjhIS3ZXOXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2IzNTFjNzYtYmVkYS00YjlmLTkzYjEtN2Y3ZWJkOGQwNWYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDE2NixcbiAgICAgIDEyNCxcbiAgICAgIDE2MSxcbiAgICAgIDU5LFxuICAgICAgMTU2LFxuICAgICAgMTA1LFxuICAgICAgMTY0LFxuICAgICAgNDUsXG4gICAgICAxMjIsXG4gICAgICAxNjAsXG4gICAgICAyNDgsXG4gICAgICAxNTIsXG4gICAgICA5NSxcbiAgICAgIDg5LFxuICAgICAgMTgyLFxuICAgICAgNDcsXG4gICAgICA3NSxcbiAgICAgIDE4MixcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NSxcbiAgICAgIDAsXG4gICAgICAzNyxcbiAgICAgIDEzNSxcbiAgICAgIDIwNCxcbiAgICAgIDY2LFxuICAgICAgMTY2LFxuICAgICAgNDksXG4gICAgICAxNyxcbiAgICAgIDExMCxcbiAgICAgIDIyMixcbiAgICAgIDEyMSxcbiAgICAgIDE3OSxcbiAgICAgIDc0LFxuICAgICAgNTQsXG4gICAgICAxODIsXG4gICAgICAxMTcsXG4gICAgICA4NCxcbiAgICAgIDIxNSxcbiAgICAgIDEzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQUlhMTVczOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQ4MTk1Mzc2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjUwNzkyNzg2NTk1OTk1OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWVOdDdVQkVLT20xTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvUUVHbGdmaTRBemdvNzhhTjZYdWM4SGMzanMvY05EWHZMam9JbkRYa2dvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJ0MWxNWjBLVjloTG5jSWJBRlYrd1A3RmxZTmR3TU03Ny9tSHRVcWFaTnNBSnFBVE9jREdEY2xIYVRoemJRL0pKNk5TL0JvVE9yMyszUDhtSXZwY0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpNbXo5LzhYcFZLeFp2UGNsR1JhVkFhRUMyVHJUUmcvZm5ZVmdzeTBtZXBacm9UWTN3clp6cEpnSTRuaVVmZjBCVVcwRWVxMENQWndmelN1dUQ1R2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0ODE5NTM3NjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxNDI5NTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQZE1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBkTS5qc29uIjogIntcImtleURhdGFcIjpcIjRPYkI4K0E4dUNHT1kzLzd3UkV0VHhpdmR2UlF3WFpNU3liUGNoVzMxRmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzgwNDg3MzY3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMxNDI5NTcyMzdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Dosted💥🥰🍆.",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_🍆 : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.RAPIEMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "DOSTED"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
