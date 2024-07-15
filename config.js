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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_49_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgODUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM4LFxuICAgICAgICA4MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICA0NixcbiAgICAgICAgMTUwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUwLFxuICAgICAgICA1LFxuICAgICAgICAxNSxcbiAgICAgICAgNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDk2LFxuICAgICAgICAwLFxuICAgICAgICA2NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDksXG4gICAgICAgIDk3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIsXG4gICAgICAgIDM0LFxuICAgICAgICA3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgxLFxuICAgICAgICA0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzLFxuICAgICAgICA0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4TTc0V1hFZHBuVGZuazlRZWNQK0hFM2gwZ1hvZmZGa1hBK1M3b3A4eGNFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZXzA2MFA3c1JyNjF5ZkVQVktUNkZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjViNWQwZWUwLTkxYWQtNGFhNC1iNTJiLWVmOWZkZTdiYWZkY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICA5MyxcbiAgICAgIDEzOSxcbiAgICAgIDEzMyxcbiAgICAgIDE0NyxcbiAgICAgIDI1MyxcbiAgICAgIDEzNSxcbiAgICAgIDEyNSxcbiAgICAgIDYwLFxuICAgICAgMTcyLFxuICAgICAgMTk3LFxuICAgICAgMTU1LFxuICAgICAgMjE3LFxuICAgICAgMTEyLFxuICAgICAgMTY4LFxuICAgICAgMjgsXG4gICAgICAxNzAsXG4gICAgICAxNzAsXG4gICAgICAxOTUsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICAxMjUsXG4gICAgICAxMDMsXG4gICAgICAyMjIsXG4gICAgICAxNTUsXG4gICAgICAyMTEsXG4gICAgICAyMTcsXG4gICAgICAyNDMsXG4gICAgICAxMjksXG4gICAgICAzMyxcbiAgICAgIDg1LFxuICAgICAgNzksXG4gICAgICAzOSxcbiAgICAgIDMxLFxuICAgICAgMTM3LFxuICAgICAgMTIwLFxuICAgICAgMTEzLFxuICAgICAgNTEsXG4gICAgICAxNjEsXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzFMMkZYN0ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjUyODM1NjE6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjQ3NzM0NzU3Mzk3Nzo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01uMDNTd1FvZGZRdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWXltWHZjbVV2Nmo4a2pEdFcrNnl2cGhPMXhSL1pRbHFNUkRNRm8xRUFXTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkMWNYbXRsTmhsT1JzOE9iei8xRXk0bVZsSmN0VXc1d3N1NmpWRW8xUXZoUGNDeU94Yk96VmR4bzAvODZBNjdQVmxDRnF5dEE2aVVRdmdDbUJOdVZBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0bXp3V3pRNVd4aXZVbTlWM2NJeVErVlp3Q252bUxHamFaT0VwdUEwdkRudFMvNHlTVHlyOURpWDFYVkFyMGRpVUFucG95eGticzFmZnF2dnY4TWtqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDY1MjgzNTYxOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5ODY1MzRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
