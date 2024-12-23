const version = require("@whiskeysockets/baileys/package.json").version
//Input number for pair code
global.pairingNumber = "2347066226618"

global.botNumber = ["2347066226618"]

global.anticall = false

global.autoReadChat = false

global.alwaysonline = true

global.autoswview = false

global.public = true

global.autoreact = false

global.antidelete = false

global.autotyping = false

global.autoBio = true

global.antiSpam = true

global.sign = "〆"
// ☞ ➻ ➽ ☛ 〆 
global.bank = "MONIEPOINT"

global.bankname = "SOMTOCHUKWU OBINNA UMEASIEGBU"

global.accnumber = "8100366428"

global.language = "en"
global.sessionName = "session"
global.pairingCode = true 
global.runWith = "𝙽𝙾𝙳𝙴.𝙹𝚂"
global.newsletterJid = "120363304326105871@newsletter"
global.newsletterName = "BLASTUS 𝐕𝟒"
global.caption = "𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 BLASTUS🐦‍🔥"
global.ownerName = "BLASTUS"
global.syt = 'https://whatsapp.com/channel/0029VatNCBZJf05ZCahFFe0d'
global.sgc = 'https://whatsapp.com/channel/0029VatNCBZJf05ZCahFFe0d'
global.sig = 'https://whatsapp.com/channel/0029VatNCBZJf05ZCahFFe0d'
global.web = 'https://whatsapp.com/channel/0029VatNCBZJf05ZCahFFe0d'
//setbot
global.botName = "𝐁𝐋ASTUS 𝐕𝟒" 
global.wm = "𝐁𝐋ASTUS 𝐕𝟒"
global.fake = botName
global.setmenu = "image" 
global.docType = "application/vnd.ms-excel"
global.themeemoji = '🐦‍🔥'
global.fotoRandom = [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgC1d1LdE8t_W2mGbhUW1292Xi3ddt5xZacRdetnXpBOGLGHx0CmLQuTs&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfmBimlAEwpPR1twNZV6ClUXRHTGgD-tJMw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_w8kkLRBc19chTKUU7FYSld3-XLlEipNqlg&usqp=CAU"]
global.baileysMd = true
global.multi = false
global.prefa = "!"
global.Console = false
global.autorespon = false
global.copyright = `BLUE DEMON BOT`
global.baileysVersion = `${themeemoji}Baileys ${version}`
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="Bot WhatsApp"
global.packName = `𝐁𝐋ASTUS`
global.authorName = "BLASTUS"
global.replyType = "web"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = true
global.autoSticker = true
global.gamewaktu = 60
global.limitCount = 30
global.Intervalmsg = 1000
global.gris = '`'
global.fileStackApi ="AVKHbeyXsT0G9IKI01qenz"

global.skizo = 'memberaja'
global.Betabotz = 'LSd7Lq9S'
global.Lolhuman = '652c7664865e2b0e70929768',
global.FilestackApi = 'AJgyzwz0FQk67sTuplYoiz'  
global.gcounti = {
'prem' : 1000,
'user' : 5
} 
 



let d = new Date();
      let locale = "en";
      let gmt = new Date(0).getTime() - new Date("1 January 2024").getTime();
      let week = d.toLocaleDateString(locale, { weekday: "long" });
      const calender = d.toLocaleDateString("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      });

global.calender = calender;

const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
