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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233534291398";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_34_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUzLFxuICAgICAgICA1LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNixcbiAgICAgICAgOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDc5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDM5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTExLFxuICAgICAgICA4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDkzLFxuICAgICAgICA2MixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDczLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxODUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk3LFxuICAgICAgICAzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZVVQUUplTk5GOFlUY2pxUlExWGV6bGpKT2RJU2loOEVrMVpta3JwTEphdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzM1MzQyOTEzOThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZGQzVGQjk0RkIyN0NBMzJGQzBGMUE2QkM2RDQxQTQyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjk4NzI4N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQejk4aUN2QlRGeUs5Q2VFRFIyNVZRXCIsXG4gIFwicGhvbmVJZFwiOiBcImU5NTE3ZDczLTVhMzctNDljYS05ZDA3LWFiMDA5MDZiZDU5MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDQxLFxuICAgICAgOTQsXG4gICAgICAxNDcsXG4gICAgICA3MixcbiAgICAgIDI0NyxcbiAgICAgIDQwLFxuICAgICAgMTEyLFxuICAgICAgOTIsXG4gICAgICA0NixcbiAgICAgIDIzOSxcbiAgICAgIDEzNCxcbiAgICAgIDk1LFxuICAgICAgMjIzLFxuICAgICAgMjIsXG4gICAgICAxNTQsXG4gICAgICA2MSxcbiAgICAgIDIxMixcbiAgICAgIDE1NyxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY4LFxuICAgICAgNzksXG4gICAgICA1NixcbiAgICAgIDIzMSxcbiAgICAgIDE3OCxcbiAgICAgIDIwNCxcbiAgICAgIDE0MixcbiAgICAgIDE3LFxuICAgICAgMjQyLFxuICAgICAgMjIyLFxuICAgICAgMTA4LFxuICAgICAgMjUzLFxuICAgICAgMTM2LFxuICAgICAgMTg5LFxuICAgICAgMTEsXG4gICAgICAxODEsXG4gICAgICAyMzksXG4gICAgICA5LFxuICAgICAgMTE2LFxuICAgICAgOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUVWUFBETVZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzUzNDI5MTM5ODoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE5NjcxMTEwMDM3NjkxOjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01hTnQ3VUJFSXZteXJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib1FFR2xnZmk0QXpnbzc4YU42WHVjOEhjM2pzL2NORFh2TGpvSW5EWGtnbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZeXhJUE5iZVQxWFJQSURUWklNR0ZhQkN5eTRUaFpsOUJPYkxMWlA1bzUzZ1kwWG11NVdKVzZvTWFUTWgvZDNEZkMyVjkyd2p4aEt6N3RnbVlEZVlBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTazJQcUtWbWJ2WjB6S2VMTDBDa1FIQ3h3a2NFcktSbzRqYXJUc3FTSjZZNWxtTFM4TWlZVjlYb1dpVFRKZFozbkxHZzFrNUZ5ankrTkhEWXYzbnlEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1MzQyOTEzOTg6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjk4NzI3OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdSOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1I4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZExGRWhwN3U0MHgrMldOMHRPVVZTVkg4amJMYnJqZjFkczRML2tIa3kyQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODA0ODczNjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Dosted💥🥰",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
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
