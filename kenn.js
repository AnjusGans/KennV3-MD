// Kalau Mao Copas Kasih Tqto Goblok
// Tqto Nabb Botz
// Jangan Hapus Tqto Yaa

require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const { FajarNews, 
BBCNews, 
metroNews, 
CNNNews, 
iNews, 
KumparanNews, 
TribunNews, 
DailyNews, 
DetikNews, 
OkezoneNews, 
CNBCNews, 
KompasNews, 
SindoNews, 
TempoNews, 
IndozoneNews, 
AntaraNews, 
RepublikaNews, 
VivaNews, 
KontanNews, 
MerdekaNews, 
KomikuSearch, 
AniPlanetSearch, 
KomikFoxSearch, 
KomikStationSearch, 
MangakuSearch, 
KiryuuSearch, 
KissMangaSearch, 
KlikMangaSearch, 
PalingMurah, 
LayarKaca21, 
AminoApps, 
Mangatoon, 
WAModsSearch, 
Emojis, 
CoronaInfo, 
JalanTikusMeme, 
Cerpen, 
Quotes, 
Couples, 
Darkjokes } = require('dhn-api')
const hikki = require('hikki-me')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const crypto = require('crypto')
const { exec, spawn, execSync } = require('child_process')
const axios = require('axios')
const path = require('path')
const os = require('os')
const jimp = require('jimp')
const hxz = require('hxz-api')
const caliph = require('caliph-api')
const moment = require('moment-timezone')
const maker = require('mumaker')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const yts = require('yt-search')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const ms = require('parse-ms')
const toMs = require('ms')
const { vweb1 } = require('./Lib/vweb1')
const { vweb4 } = require('./Lib/vweb4')
const { vweb6 } = require('./Lib/vweb6')
const { ngazapv1 } = require('./Lib/ngazapv1')
const { ngazapv2 } = require('./Lib/ngazapv2')
const { ngazapv3 } = require('./Lib/ngazapv3')
const { cerpen } = require('./Lib/cerpen')
const { pinterest } = require('./Lib/scraper')
const { idML } = require('./Lib/stalkml')
const _sewa = require('./Lib/sewa')
const { color, bgcolor } = require('./Lib/color')
const { toAudio, toPTT, toVideo } = require('./Lib/converter')
const { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require('./Lib/level')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./Lib/limit')
const { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require('./Lib/rpg')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./Lib/myfunc')

const tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
const kuismath = JSON.parse(fs.readFileSync('./database/math.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const tebakkata = JSON.parse(fs.readFileSync('./database/tebakkata.json'))
const caklontong = JSON.parse(fs.readFileSync('./database/lontong.json'))
const caklontong_desk = JSON.parse(fs.readFileSync('./database/lontong_desk.json'))
const tebakkalimat = JSON.parse(fs.readFileSync('./database/kalimat.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./database/lirik.json'))
const tebaktebakan = JSON.parse(fs.readFileSync('./database/tebakan.json'))

const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
const _level = JSON.parse(fs.readFileSync('./database/leveluser.json'))
const _petualang = JSON.parse(fs.readFileSync('./database/inventori.json'))
const balance = JSON.parse(fs.readFileSync('./database/balance.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))

blocked = []
const turbrek = `break`

module.exports = kenn = async (kenn, m, chatUpdate, store) => {
try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        var content = JSON.stringify(m.message)
        const { tampilan } = require('./Lib/isinya')
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await kenn.decodeJid(kenn.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
        const isMedia = /image|video|sticker|audio/.test(mime)
        const charger = `${charging ? 'Charging' : 'Discharging'}`
	    
	    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const groupMetadata = m.isGroup ? await kenn.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const isPrem = prem.includes(sender)
        const isPetualang = checkPetualangUser(sender)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const floc = {
        key : {
        participant : '0@s.whatsapp.net'
        },
        message: {
        locationMessage: {
        name: `I’m From Indonesia 🇮🇩`,
        jpegThumbnail: thumb
        }
        }
        }
        
        const fbug = {
        key : {
        participant : '0@s.whatsapp.net'
        },
        ...({ remoteJid: "" }),
        message: {
        locationMessage: {
        name: `I’m From Indonesia 🇮🇩`,
        jpegThumbnail: thumb
        }
        }
        }
        
var levelRole = getLevelingLevel(sender, _level)
var role = 'Warrior III'
if (levelRole <= 5) {
role = 'Warrior II'
} else if (levelRole <= 10) {
role = 'Warrior I'
} else if (levelRole <= 15) {
role = 'Elite III'
} else if (levelRole <= 20) {
role = 'Elite II'
} else if (levelRole <= 25) {
role = 'Elite I'
} else if (levelRole <= 30) {
role = 'Master III'
} else if (levelRole <= 35) {
role = 'Master II'
} else if (levelRole <= 40) {
role = 'Master I'
} else if (levelRole <= 45) {
role = 'GrandMaster III'
} else if (levelRole <= 50) {
role = 'GrandMaster II'
} else if (levelRole <= 55) {
role = 'GrandMaster I'
} else if (levelRole <= 60) {
role = 'Epic III'
} else if (levelRole <= 65) {
role = 'Epic II'
} else if (levelRole <= 70) {
role = 'Epic I'
} else if (levelRole <= 75) {
role = 'Legend III'
} else if (levelRole <= 80) {
role = 'Legend II'
} else if (levelRole <= 85) {
role = 'Legend I'
} else if (levelRole <= 90) {
role = 'Mythic'
} else if (levelRole <= 95) {
role = 'Mythical Glory'
} else if (levelRole >= 100) {
role = 'Immortal'
} 

var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']        
var petnya = ['😾','🐺','🦊','🐶','🐰']
var makan = ['🌭','🌮','🌯','🍙','🍝','🍕','🍘','🍟','🍞','🍖','🍡']
var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓']
var log1 = '•>'

var elit = 'Petualang Biasa'
if (isPrem)
{
elit = 'Petualang Pro'
}
if (isCreator)
{
elit = 'Admin Game'
}

try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
           
} catch (err) {
console.error(err)
}

            if (!kenn.public) {
            if (!m.key.fromMe) return
            }

		if (!m.isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(20), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
		}
		if (m.isGroup && isCmd && !fromMe) {
			addBalance(sender, randomNomor(20), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
		}
		
		
		
		if (m.sender.startsWith('212')) return kenn.updateBlockStatus(m.sender, 'block')

	    kenn.sendReadReceipt(from, sender, [m.key.id])
		kenn.sendPresenceUpdate('available', from)
		
		if (m.sender.startsWith('212')) return kenn.groupParticipantsUpdate(m.chat, [sender], 'remove')
		
		try {
        ppuser = await kenn.profilePictureUrl(m.sender, 'image')
        } catch (err) {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        ppnyauser = await getBuffer(ppuser)
        fakefake = './Image/fake.jpg'

        const isFoVid = (type === 'imageMessage' || type === 'videoMessage')
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

const generateProfilePicture = async(buffer) => {
const jimp_1 = await jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, jimp.AUTO) : jimp_1.resize(jimp.AUTO, 650)
const jimp_2 = await jimp.read(await resz.getBufferAsync(jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(jimp.MIME_JPEG)
}
}

        const sendFileFromUrl = async (from, url, caption, m, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return kenn.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return kenn.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: m })
            }
            if(mime.split("/")[0] === "image"){
                return kenn.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "video"){
                return kenn.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m })
            }
            if(mime.split("/")[0] === "audio"){
                return kenn.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            }
        }
	        
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: kenn.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, kenn.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        kenn.ev.emit('messages.upsert', msg)
        }

		const reply = async(teks) => {
        kenn.sendMessage(m.chat, { text : teks, mentions: await kenn.parseMention(teks), contextInfo : {
        "forwardingScore":999,
        "isForwarded":true, 
        "mentionedJid": [m.sender],
        "externalAdReply": {
        "title": `Hai Kak ${pushname}👋🏻`, 
        "mediaType": 2, 
        "thumbnail": fakefake,
        "previewType": "VIDEO",
        "mediaUrl": `https://github.com/AnjusGans`,
        "sourceUrl": `https://github.com/AnjusGans`,
        { quoted: m })
        }
	
		const createSerial = (size) => {
        return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

const efff = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6281903153426-1626053991@g.us" } : {})
},
message: { 
"extendedTextMessage": {
"text": "Topup Diamond Free Fire",
'jpegThumbnail': fs.readFileSync('./Image/diamond.jpg')
}
} 
}

        const sticWait = (hehe) => {
			ano = fs.readFileSync('./stik/wait.webp')
			kenn.sendMessage(hehe, { sticker: ano, contextInfo: {
			forwardingScore:999,
            isForwarded:true, 
            mentionedJid: [m.sender],
			externalAdReply: { 
			title: "I'm From Indonesia 🇲🇨", 
			mediaType: 1, 
			body: "Website Owner", 
			thumbnail: ppnyauser, 
			previewType: "FOTO",
			sourceUrl: `https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ`}}}, 
			{ quoted: floc })
		}

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kenn.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kenn.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kenn.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kenn.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kenn.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kenn.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kenn.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, kenn.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kenn.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kenn.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kenn.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kenn.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await kenn.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, kenn.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }

_sewa.expiredCheck(kenn, sewa)

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
function monospace(string) {
return '```' + string + '```'
}  

const fakekenn = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    imageMessage: {
      mimetype: 'image/jpeg',
      caption: 'KennBot MD',
      jpegThumbnail: ppnyauser,
      viewOnce: true
    }
  }
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid, 
"thumbnail": img, 
"itemCount": itcount, 
"status": "INQUIRY", 
"surface": "CATALOG", 
"orderTitle": title, 
"message": text, 
"sellerJid": sellers, 
"token": tokens, 
"totalAmount1000": ammount, 
"totalCurrencyCode": "IDR", 
}
}), { userJid: jid })
kenn.relayMessage(jid, order.message, { messageId: order.key.id})
}
        
        if (m.isGroup && !m.key.fromMe &&  db.data.chats[m.chat].antilink && !isCreator && !isGroupAdmins){
        if (budy.match(`https://chat.whatsapp.com`)) {
        kenn.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
	    kenn.groupParticipantsUpdate(m.chat, [sender], 'remove')
		}
	    }
	    
	    if (m.isGroup && !m.key.fromMe &&  db.data.chats[m.chat].antiwame && !isGroupAdmins){
        if (budy.match(`wa.me`)) {
        kenn.sendMessage(m.chat, {text: `*Antiwame Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
	    kenn.groupParticipantsUpdate(m.chat, [sender], 'remove')
		}
	    }
	    
        async function sendPlay(from, query) {
        var url = await yts(query)
        url = url.videos[0].url
        hxz.youtube(url).then(async(data) => {
        var button = [
		{ urlButton: { displayText: `❃ S O U R C E V I D I O ❃`, url : ` https://youtu.be/${data.id}` } },
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `🎥 Video (${data.size})`, id: `${prefix}ytmp4 ${url}` } },
		{ quickReplyButton: { displayText: `🎵 Audio (${data.size_mp3})`, id: `${prefix}ytmp3 ${url}` } },
		{ quickReplyButton: { displayText: `🔍 Search ${data.title}`, id: `${prefix}ytsearch https://youtu.be/${data.id}` } }
		]
        var hg = `*⚐︎ Title :* ${data.title}\n*⚐︎ Quality :* ${data.quality}`
        kenn.sendMessage(from, { caption: hg, location: { jpegThumbnail: await getBuffer(data.thumb) }, templateButtons: button, footer: `Pilih Salah Satu Button Dibawah⬇️`, mentions: [sender] })
        }).catch((e) => {
        kenn.sendMessage(from, { text: mess.error }, { quoted: m })
        ownerNumber.map( i => kenn.sendMessage(from, { text: `Send Play Error : ${e}` }))
        })
        }
        
        async function sendButLoc(from) {
        reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(sender, balance))}
 • Emas : ${getEmas(sender)}
 • Besi : ${getBesi(sender)}
 • Ikan : ${getFish(sender)}
 • Berlian : ${getDm(sender)}

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 × ${prefix}joinrpg
 × ${prefix}quest 
 × ${prefix}mining
 × ${prefix}mancing
 × ${prefix}luckyday
 × ${prefix}luckytime
 × ${prefix}adventure
 × ${prefix}inventori
 
⚔️ 𝗙𝗮𝗿𝗺𝗶𝗻𝗴 𝗥𝗣𝗚
 × ${prefix}killslime
 × ${prefix}killgoblin
 × ${prefix}killdevil
 × ${prefix}killbehemoth
 × ${prefix}killdemon
 × ${prefix}killdemonking 
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 × ${prefix}sellikan
 × ${prefix}sellbesi
 × ${prefix}sellemas
 × ${prefix}selldiamond`
        kenn.sendMessage(from, { caption: hg, location: { jpegThumbnail: thumbrpg }, templateButtons: button, footer: `Rpg Game By KennBot MD`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
        async function sendButJoin(from, query) {
        reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        _petualang.push(sender)
        fs.writeFileSync('./database/inventori.json', JSON.stringify(_petualang))        
        addInventori(sender)
        addLevelingId(sender) 
        var name = args[0]
        var serialUser = createSerial(14)
        reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Rpg Menu`, id: `${prefix}rpgmenu` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `〘 SUKSES JOIN RPG 〙
        
「 PROFILE 」
 • Nama : ${name}
 • Level : ${getLevelingLevel(sender)}
 • Status : ${elit}
 • Xp :  ${getLevelingXp(sender)}/${reqXp}
「 RPG GAME 」`
        kenn.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgjoinrpg }, templateButtons: button, footer: `Rpg Game By KennBot MD`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
        async function sendButslime(from) {
ez = Math.ceil(Math.random() * 400)
addLevelingXp(sender, ez)
a = randomNomor(55)
b = randomNomor(400)
c = randomNomor(80)
d = randomNomor(3)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
        var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗦𝗹𝗶𝗺𝗲️\n\n🎁 Hadiah Membunuh Slime\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
        kenn.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgslime }, templateButtons: button, footer: `Rpg Game By KennBot MD`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButgoblin(from) {
ez = Math.ceil(Math.random() * 500)
addLevelingXp(sender, ez)
a = randomNomor(65)
b = randomNomor(500)
c = randomNomor(90)
d = randomNomor(5)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗚𝗼𝗯𝗹𝗶𝗻\n\n🎁 Hadiah Membunuh Goblin\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kenn.sendMessage(from, { caption: hg, location: { jpegThumbnail: imggoblin }, templateButtons: button, footer: `Rpg Game By KennBot MD`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButdevil(from) {
ez = Math.ceil(Math.random() * 600)
addLevelingXp(sender, ez)
a = randomNomor(70)
b = randomNomor(600)
c = randomNomor(95)
d = randomNomor(6)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝘃𝗶𝗹️\n\n🎁 Hadiah Membunuh Devil\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kenn.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgdevil }, templateButtons: button, footer: `Rpg Game By KennBot MD`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButbehemoth(from) {
ez = Math.ceil(Math.random() * 700)
addLevelingXp(sender, ez)
a = randomNomor(75)
b = randomNomor(600)
c = randomNomor(100)
d = randomNomor(7)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗕𝗲𝗵𝗲𝗺𝗼𝘁𝗵️\n\n🎁 Hadiah Membunuh Behemoth\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kenn.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgbehemoth }, templateButtons: button, footer: `Rpg Game By KennBot MD`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButdemon(from) {
ez = Math.ceil(Math.random() * 850)
addLevelingXp(sender, ez)
a = randomNomor(90)
b = randomNomor(900)
c = randomNomor(120)
d = randomNomor(10)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻️\n\n🎁 Hadiah Membunuh Demond\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kenn.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgdemon }, templateButtons: button, footer: `Rpg Game By KennBot MD`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function sendButdemonking(from) {
ez = Math.ceil(Math.random() * 1000)
addLevelingXp(sender, ez)
addLevelingXp(sender, ez)
addBalance(sender, 1999, balance)
addEmas(sender, 99)
addBesi(sender, 99)
addDm(sender, 99)
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
var hg = `☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻𝗞𝗶𝗻𝗴\n\n🎁 Hadiah Membunuh DemonKing\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`
kenn.sendMessage(from, { caption: hg, location: { jpegThumbnail: imgdemonking }, templateButtons: button, footer: `Rpg Game By KennBot MD`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
async function replyTemplate(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `WA OWNER`, url : `${wame}` } },
	             		{ quickReplyButton: { displayText: `RULES`, id : 'rules'}}
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "Bot by Nabb Botz", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kenn.sendMessage(from, buttonMessage)
                }

async function replyOwnerr(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `YouTube`, url : `${yt}` } }
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "Bot by Nabb Botz", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kenn.sendMessage(from, buttonMessage)
                }

async function replyNya(teks) {
                       const buttonsDefault = []                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "KennBot MD", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kenn.sendMessage(from, buttonMessage)
                }

async function replyBan(teks) {
                       const buttonsDefault = [{ urlButton: { displayText: `👑 Owner`, url : `${wame}` } }]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "KennBot MD", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kenn.sendMessage(from, buttonMessage)
                }

async function replyPremium(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `👑 Owner`, url : `${wame}` } },
	             		{ quickReplyButton: { displayText : `Buy Premium`, id : `buypremium` } }
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "Bot by Nabb Botz", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return kenn.sendMessage(from, buttonMessage)
                }
                
async function sendBut5nya(teks) {
var button = [
{"urlButton": {"displayText": "👑 Owner🔥","url": `https://wa.me/6283123381900`}},
{"quickReplyButton": {"displayText": "Sewabot","id": 'sewabot'}},
{"quickReplyButton": {"displayText": "Donasi","id": 'donasi'}},
{"quickReplyButton": {"displayText": "Status Botz","id": 'ping'}}
		]
kenn.sendMessage(from, { caption: teks, location: { jpegThumbnail: thumb }, templateButtons: button, footer: `👑 Owner  : ${owner.length}`, mentions: [sender] })
        .catch ((err) => reply(err))
        }
        
if (m.isGroup && isAutoSticker) {
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await kenn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyNya('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await kenn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
}

switch (command) {
case 'creategc': {
if (!isCreator) return reply(mess.owner)
if (!args.join(" ")) return reply(`Penggunaan ${prefix+command} namagroup`)
try {
let cret = await kenn.groupCreate(args.join(" "), [])
let response = await kenn.groupInviteCode(cret.id)
teks = `     「 Group Create Fitur 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB

https://chat.whatsapp.com/${response}
       `
kenn.sendMessage(m.chat, { text:teks, mentions: await kenn.parseMention(teks)}, {quoted:m})
} catch {
reply("Error!")
}
}
break
case 'getcase': {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply("Mau ngambil case apa?")
try {
reply(`// KennBot MD\n` + 'case ' + `'${args[0]}'` + fs.readFileSync('./kenn.js').toString().split(`case '${args[0]}'`)[1].split(turbrek)[0] + turbrek)
} catch {
reply("Case Tidak Ditemukan")
}
}
break
case 'readmore':
var more = String.fromCharCode(8206)
                var readMore = more.repeat(4001)
                const rmoreteks1 = q.split('|')[0] ? q.split('|')[0] : q
                const rmoreteks2 = q.split('|')[1] ? q.split('|')[1] : ''
                reply(`${rmoreteks1}${readMore}${rmoreteks2}`)
                break
case 'nulis':
if (!q) return reply(`Teks Nya Apa Kak?`)
let fejfjej = [
{
"title": `NULIS BUKU`,
 rows: [
{
"title": `KANAN`,
"rowId": `${prefix}nuliskanan ${q}`
}
,
{
"title": `KIRI`,
"rowId": `${prefix}nuliskiri ${q}`
}
]
}
,
{
"title": `NULIS FOLIO`,
 rows: [
{
"title": `KANAN`,
"rowId": `${prefix}foliokanan ${q}`
}
,
{
"title": `KIRI`,
"rowId": `${prefix}foliokiri ${q}`
}
]
}
]
kenn.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Di Bawah`, "CLICK", "Fitur Nulis By KennBot MD ", fejfjej, { quoted: m })
break
case 'nuliskiri':{
if (args.length < 1) return replyNya(`Kirim perintah *${prefix}nuliskiri* teks`)
replyNya(mess.wait)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./Kir/FOTO/BUKU/sebelumkiri.jpg','-font','./Kir/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight,'./Kir/FOTO/BUKU/setelahkiri.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
kenn.sendMessage(from, { image: fs.readFileSync('./Kir/FOTO/BUKU/setelahkiri.jpg')}, {quoted: m, caption: `Jangan Malas Kak...`})
})
}
break
case 'nuliskanan':{
                if (args.length < 1) return replyNya(`Kirim perintah *${prefix}nuliskanan* teks`)
replyNya(mess.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', ['./Kir/FOTO/BUKU/sebelumkanan.jpg','-font','./Kir/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./Kir/FOTO/BUKU/setelahkanan.jpg'])
                .on('error', () => reply('error'))
                .on('exit', () => {
                kenn.sendMessage(from, { image: fs.readFileSync('./Kir/FOTO/BUKU/setelahkanan.jpg')}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
                break
case 'foliokiri':{
                if (args.length < 1) return replyNya(`Kirim perintah *${prefix}foliokiri* teks`)
replyNya(mess.wait)
                var tulisan = body.slice(11)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./Kir/FOTO/FOLIO/sebelumkiri.jpg','-font','./Kir/FONT/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./Kir/FOTO/FOLIO/setelahkiri.jpg'])
                .on('error', () => reply('error'))
                .on('exit', () => {
                kenn.sendMessage(from, { image: fs.readFileSync('./Kir/FOTO/FOLIO/setelahkiri.jpg')}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
                break
case 'foliokanan':{
                if (args.length < 1) return replyNya(`Kirim perintah *${prefix}foliokanan* teks`)
replyNya(mess.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./Kir/FOTO/FOLIO/sebelumkanan.jpg','-font','./Kir/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./Kir/FOTO/FOLIO/setelahkanan.jpg'])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                kenn.sendMessage(from, { image: fs.readFileSync('./Kir/FOTO/FOLIO/setelahkanan.jpg')}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
                break
case 'mlstalk': {
if (!q) return replyNya("Isi id|zoneid")
let dat = await idML(q.split("|")[0], q.split("|")[1])
replyNya(`Id : ${dat.userId}
Username : ${decodeURI(dat.username)}
ZoneId : ${dat.zoneId}
Country : ${dat.country}`)
}
break
case 'ffstalk': {
if (!args[0]) return replyNya(`Example : \n${prefix + command} 946716486`)
if (!Number(args[0])) return replyNya("Hanya angka")
let dede = await caliph.search.freefireid(args.join(" "))
teks = `Message : ${dede.message}\nId : ${encodeURI(q)}\nResult : ${dede.result}`
reply(teks)
}
break
case 'cowner': {
if (!isCreator) return replyNya(mess.owner)
if (!args[0]) return replyNya(`Pilih add atau del`)
orgnye = m.mentionedJid[0] ? m.mentionedJid[0].split("@")[0] : m.quoted ? m.quoted.sender.split("@")[0] : args[1] ? args[1] : false
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return replyNya('User Sudah Menjadi Owner')
owner.push(orgnye)
replyNya(`Succes Add Owner`)
} else if (args[0] === "del") {
if (!isCwner) return replyNya('User Bukan Owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
replyNya(`Succes Delete Owner`)
} else {
replyNya("Error")
}
}
break
case 'profile': {
const jidny = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender ? m.sender : false
const ddny = await store.chats.all().filter(v => v.id.includes(jidny)).map(v => v)
const isblocks = await kenn.fetchBlocklist()
const isBlock = isblocks.includes(jidny)
texnr = `     「 Profile Inspector 」
▸ Number : ${jidny.split("@")[0]}
▸ Mention : @${jidny.split("@")[0]}
▸ Name : ${kenn.getName(jidny)}
▸ Biography : ${jsonformat(await kenn.fetchStatus(jidny).catch(() => {}))}
▸ Business : ${jsonformat(await kenn.getBusinessProfile(jidny))}
▸ LastChat : ${ddny[0] ? moment(ddny[0].conversationTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss") : "undefined"}
▸ Chat : ${ddny[0] ? ddny[0].unreadCount +" chat" : "0 chat"}
▸ Blockir : ${isBlock}`
try {
ppuser = await kenn.profilePictureUrl(jidny, 'image')
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
kenn.sendMessage(m.chat, { image: { url: ppuser }, caption: texnr, mentions: await kenn.parseMention(texnr), contextInfo:{externalAdReply:{
title:"WhatsApp Bot Multi Device",
body:"By KennBot MD",
thumbnail: ppnyauser,
mediaType:2,
mediaUrl: "https://github.com/AnjusGans",
sourceUrl: "https://github.com/AnjusGans"
}}}, {quoted:m})
}
break
case 'listban': case 'lisbanned':
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
teks = '*List Banned*\n\n'
for (let kenn of ban) {
teks += `- ${kenn}\n`
}
teks += `\n*Total : ${ban.length}*`
kenn.sendMessage(from, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": ban } })
break
case 'ban':
if (!m.isGroup) return replyNya(mess.group)
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
ban.push(bnnd)
fs.writeFileSync('./database/ban.json', JSON.stringify(ban))
reply(`Nomor ${bnnd} Telah Di Ban!!!`)
break
case 'unban':
if (!m.isGroup) return replyNya(mess.group)
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unp = ban.indexOf(ya)
ban.splice(unp, 1)
fs.writeFileSync('./database/ban.json', JSON.stringify(ban))
reply(`Nomor Telah Di Unban!!!`)
break
case 'zippysearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    reply(mess.wait)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    replyNya(ini_txt)
                    break
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!text) return replyNya(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return replyNya(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return replyNya(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
replyNya(mess.wait)
arg = args.join(' ')
mee = await kenn.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./Lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await kenn.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'sewa':
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
if (!m.isGroup) return replyNya(mess.group)
if (!q) return replyNya(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0].toLowerCase() === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
replyNya(mess.success)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
replyNya(mess.success)
} else {
replyNya(`Penggunaan :\n*${prefix}sewa* add/del waktu`)}
break
case 'listsewa':
if (!m.isGroup) return replyNya(mess.group)
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvippsewa.seconds} second(s)\n\n`
}
replyNya(txtnyee)
break
case 'ceksewa': 
if (!m.isGroup) return replyNya(mess.group)
if (!isSewa) return replyNya(`Group Ini Tidak Terdaftar Dalam List Sewabot. Ketik ${prefix}sewabot Untuk Info Lebih Lanjut`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s) ${cekvipsewa.seconds} second(s)`
reply(sewanya)
break
case 'tebak': {

            	if (!m.isGroup) return replyNya(mess.group)
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await kenn.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    kenn.sendText(m.chat, `Judul Lagu Nya Apa??\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kenn.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kenn.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kenn.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kenn.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kenn.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kenn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kenn.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kenn.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kenn.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kenn.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kenn.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kenn.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kenn.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kenn.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kenn.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kenn.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kenn.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
		
                    }
                }
            }
            break
case 'kuismath': case 'math': {

            	if (!m.isGroup) return reply(mess.group)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./Lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix+command} medium`
                let result = await genMath(text.toLowerCase())
                kenn.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
case 'lirik':

if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
query = args.join(" ")
nanih = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${lolkey}&query=${query}`)
replyNya(nanih.result)
break
case 'darkjokes':{

sticWait(from)
nyenye = fs.readFileSync('./Lib/darkjokes.js');
jsonData = JSON.parse(nyenye);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: hasil }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'meme':{

sticWait(from)
nyaa = fs.readFileSync('./Lib/meme.js');
                 jsonData = JSON.parse(nyaa);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 memeall = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: memeall }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'hsdxd':{

sticWait(from)
kntlll = fs.readFileSync('./Lib/highschooldxd.js');
                 jsonData = JSON.parse(kntlll);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: highschooldxd }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'sao':{

sticWait(from)
kntll = fs.readFileSync('./Lib/swortartonline.js');
                 jsonData = JSON.parse(kntll);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: swordartonline }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'lovelive':{

sticWait(from)
kntl = fs.readFileSync('./Lib/lovelive.js');
                 jsonData = JSON.parse(kntl);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: lovelive }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'listpremium':
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
teks = '*List Premium*\n\n'
for (let kenn of prem) {
teks += `- ${kenn}\n`
}
teks += `\n*Total : ${prem.length}*`
kenn.sendMessage(from, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'addprem':
if (!m.isGroup) return replyNya(mess.group)
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
prem.push(bnnd)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`Nomor ${bnnd} Telah Menjadi Premium!`)
break
case 'delprem':
if (!m.isGroup) return replyNya(mess.group)
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`Nomor Telah Di Hapus Premium!`)
break
case 'sound1':case 'sound2':
case 'sound3':case 'sound4':case 'sound5':case 'sound6':
case 'sound7':case 'sound8':case 'sound9':case 'sound10':
case 'sound11':case 'sound12':case 'sound13':case 'sound14':
case 'sound15':case 'sound16':case 'sound17':case 'sound18':
case 'sound19':case 'sound20':case 'sound21':case 'sound22':
case 'sound23':case 'sound24':case 'sound25':case 'sound26':
case 'sound27':case 'sound28':case 'sound29':case 'sound30':
case 'sound31':case 'sound32':case 'sound33':case 'sound34':
case 'sound35':case 'sound36':case 'sound37':case 'sound38':
case 'sound39':case 'sound40':case 'sound41':case 'sound42':
case 'sound43':case 'sound44':case 'sound45':case 'sound46':
case 'sound47':case 'sound48':case 'sound49':case 'sound50':
case 'sound51':case 'sound52':case 'sound53':case 'sound54':
case 'sound55':case 'sound56':case 'sound57':case 'sound58':
case 'sound59':case 'sound60':case 'sound61':case 'sound62':
case 'sound63':case 'sound64':case 'sound65':case 'sound66':
case 'sound67':case 'sound68':case 'sound69':case 'sound70':
case 'sound71':case 'sound72':case 'sound73':case 'sound74':

inicdd = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
kenn.sendMessage(m.chat, {audio: inicdd, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case 'tts':

if (!q) return replyNya(`Teks Nya???`)
sticWait(from)
inimmk = await fetchJson(`https://api.dapuhy.xyz/api/maker/tts?text=${q}&lang=id&apikey=${dapkey}`)
kenn.sendMessage(m.chat, {audio: { url: inimmk.result }, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case 'scriptbot': case 'sc': case 'script': case 'esce':{
await replyBan(`Chat Owner Di Bawah`)
}
break
case 'creator': case 'owner': {
kenn.sendContact(m.chat, global.owner, m)
}
break
case 'credits':
const sokl = "6288991078377@s.whatsapp.net"
const sokd = "6281259121031@s.whatsapp.net"
const soka = "62881038149808@s.whatsapp.net"
const sokdi = "6288292024190@s.whatsapp.net"
const sokr = "6283127014833@s.whatsapp.net"
const sokt = "62881036690566@s.whatsapp.net"
const soky = "628871746203@s.whatsapp.net"
const soki = "6281523940672@s.whatsapp.net"
const sokf = "6285921969852@s.whatsapp.net"
const sokrz = "6288226703423@s.whatsapp.net"
const sokha = "6281385062956@s.whatsapp.net"
const sokyu = "6281370435024@s.whatsapp.net"
teksits = `「 *Thanks To* 」
♕ Nabb Botz @${sokl.split("@")[0]}
♕ Dinata @${sokd.split("@")[0]}
♕ Ardy @${soka.split("@")[0]}
♕ DikaArtdnt. @${sokdi.split("@")[0]}
♕ Zakky @${sokt.split("@")[0]}
♕ FXdev @${soky.split("@")[0]}
♕ Fardan @${soki.split("@")[0]}
♕ Fadly @${sokf.split("@")[0]}
♕ Rizky @${sokrz.split("@")[0]}
♕ HACKER 1988 @${sokha.split("@")[0]}
♕ Yudha Xwer @${sokyu.split("@")[0]}`
kenn.sendMessage(m.chat, { image: ppnyauser, caption: teksits, contextInfo: {
"forwardingScore":999,
"isForwarded":true,
"mentionedJid": [sokl, sokd, soka, sokdi, sokr, sokt, soky, soki, sokf, sokrz, sokha, sokyu],
"externalAdReply": {
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}}, { quoted: fakekenn })
break
case 'quest':

let sectionnya= [
{
"title": `MISI KE 1`,
 rows: [
{
"title": `Membunuh Slime`,
"description": `Berburu Slime Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}slime`
}
]
}
,
{
"title": `MISI KE 2`,
 rows: [
{
"title": `Membunuh Goblin`,
"description": `Berburu Globin Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}goblin`
}
]
}
,
{
"title": `MISI KE 3`,
 rows: [
{
"title": `Membunuh Devil`,
"description": `Berburu Devil Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}devil`
}
]
}
,
{
"title": `MISI KE 4`,
 rows: [
{
"title": `Membunuh Behemoth`,
"description": `Berburu Behemoth Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}behemoth`
}
]
}
,
{
"title": `MISI KE 5`,
 rows: [
{
"title": `Membunuh Demon`,
"description": `Berburu Demon Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}demon`
}
]
}
,
{
"title": `MISI KE 6`,
 rows: [
{
"title": `Membunuh DemonKing`,
"description": `Berburu DemonKing Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}demonking`
}
]
}
]
kenn.sendList(m.chat, `Haii *${pushname}*`, `Silahkan Pilih Di Bawah`, "CLICK", "Rpg Game By KennBot MD ", sectionnya, { quoted: fakekenn})
break
case 'slime':
case 'killslime':

if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButslime(from)
break
case 'goblin':
case 'killgoblin':

if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButgoblin(from)
break
case 'devil':
case 'killdevil':

if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButdevil(from)
break
case 'behemoth':
case 'killbehemoth':

if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButbehemoth(from)
break
case 'killdemon':

if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButdemon(from)
break
case 'demonking':
case 'killdemonking':

if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButdemonking(from)
break

break
case 'menu': {
menuu = `
┌─〔  Info User 〕
│➥Nama User: ${pushname}
│➥Nomor User: ${sender.split("@")[0]}
│➥User Premium: ${isPrem ? 'Premium͎' : 'Tidak͎'}
│➥Rank: ${role}
│➥Status: ${elit}
└─〇


┌─〔 *Owner Menu* 〕
│
│${log1} $ [EXE]
│${log1} > [EVAL]
│${log1} < [EVAL2]
│•> => [ASYNC]
│•> ${prefix}setppbot 'panjang' <reply foto>
│•> ${prefix}sewa <add 1d>
│•> ${prefix}sewa <del>
│•> ${prefix}listsewa
│•> ${prefix}ceksewa
│•> ${prefix}cowner <add>
│•> ${prefix}cowner <del>
│•> ${prefix}getcase
│•> ${prefix}creategc
│•> ${prefix}join
│•> ${prefix}public
│•> ${prefix}self
│•> ${prefix}out
│•> ${prefix}ban
│•> ${prefix}unban
│•> ${prefix}listbanned
│•> ${prefix}block
│•> ${prefix}unblock
│•> ${prefix}bcall
│•> ${prefix}bcaudio
│•> ${prefix}bcvidio
│•> ${prefix}bcimg
└──────

┌──〔  Nulis Menu 〕
│${log1}${prefix}nulis <teks>
│${log1}${prefix}nuliskanan <teks>
│${log1}${prefix}nuliskiri <teks>
│${log1}${prefix}foliokanan <teks>
│${log1}${prefix}foliokiri <teks>
└──────
┌──〔  Other Menu 〕
│${log1}${prefix}owner
│${log1}${prefix}credits
│${log1}${prefix}readmore
│${log1}${prefix}rules
│${log1}${prefix}donasi
│${log1}${prefix}sewabot
│${log1}${prefix}profile
│${log1}${prefix}sticker
│${log1}${prefix}smeme
│${log1}${prefix}attp
│${log1}${prefix}ttp
│${log1}${prefix}tts
│${log1}${prefix}toimg
│${log1}${prefix}tovideo
│${log1}${prefix}tovn
│${log1}${prefix}tomp3
│${log1}${prefix}ssweb
│${log1}${prefix}emojimix
│${log1}${prefix}emoji
│${log1}${prefix}lirik
│${log1}${prefix}translate
│${log1}${prefix}namapeople
│${log1}${prefix}faktaunik
│${log1}${prefix}katabijak
│${log1}${prefix}pantun
│${log1}${prefix}bucin
│${log1}${prefix}quotes
│${log1}${prefix}randomnama
│${log1}${prefix}halah
│${log1}${prefix}hilih
│${log1}${prefix}huluh
│${log1}${prefix}heleh
│${log1}${prefix}holoh
│${log1}${prefix}cry
│${log1}${prefix}kill
│${log1}${prefix}hug
│${log1}${prefix}pat
│${log1}${prefix}lick
│${log1}${prefix}kiss
│${log1}${prefix}bite
│${log1}${prefix}yeet
│${log1}${prefix}bully
│${log1}${prefix}bonk
│${log1}${prefix}wink
│${log1}${prefix}poke
│${log1}${prefix}nom
│${log1}${prefix}slap
│${log1}${prefix}smile
│${log1}${prefix}wave
│${log1}${prefix}awoo
│${log1}${prefix}blush
│${log1}${prefix}smug
│${log1}${prefix}glomp
│${log1}${prefix}happy
│${log1}${prefix}dance
│${log1}${prefix}cringe
│${log1}${prefix}cuddle
│${log1}${prefix}highfive
│${log1}${prefix}handhold
│${log1}${prefix}dadu
│${log1}${prefix}patrick
│${log1}${prefix}amongus
│${log1}${prefix}gawrgura
│${log1}${prefix}anjing
│${log1}${prefix}bucinstick
└──────
┌──〔  Random Cerita 〕
│${log1}${prefix}cerpen
│${log1}${prefix}ceritahoror
│${log1}${prefix}cerpen-sejarah
│${log1}${prefix}cerpen-sedih
│${log1}${prefix}cerpen-sastra
│${log1}${prefix}cerpen-romantis
│${log1}${prefix}cerpen-rohani
│${log1}${prefix}cerpen-rindu
│${log1}${prefix}cerpen-remaja
│${log1}${prefix}cerpen-ramadhan
│${log1}${prefix}cerpen-petualangan
│${log1}${prefix}cerpen-persahabatan
│${log1}${prefix}cerpen-perpisahan
│${log1}${prefix}cerpen-perjuangan
│${log1}${prefix}cerpen-penyesalan
│${log1}${prefix}cerpen-pengorbanan
│${log1}${prefix}cerpen-pengalaman
│${log1}${prefix}cerpen-pendidikan
│${log1}${prefix}cerpen-penantian
│${log1}${prefix}cerpen-patahhati
│${log1}${prefix}cerpen-olahraga
│${log1}${prefix}cerpen-nasionalisme
│${log1}${prefix}cerpen-nasihat
│${log1}${prefix}cerpen-motivasi
│${log1}${prefix}cerpen-misteri
│${log1}${prefix}cerpen-mengharukan
│${log1}${prefix}cerpen-malaysia
│${log1}${prefix}cerpen-liburan
│${log1}${prefix}cerpen-kristen
│${log1}${prefix}cerpen-korea
│${log1}${prefix}cerpen-kisahnyata
│${log1}${prefix}cerpen-keluarga
│${log1}${prefix}cerpen-kehidupan
│${log1}${prefix}cerpen-jepang
│${log1}${prefix}cerpen-inspiratif
│${log1}${prefix}cerpen-gokil
│${log1}${prefix}cerpen-galau
│${log1}${prefix}cerpen-cintasejati
│${log1}${prefix}cerpen-cintasegitiga
│${log1}${prefix}cerpen-cintasedih
│${log1}${prefix}cerpen-cintaromantis
│${log1}${prefix}cerpen-cintapertama
│${log1}${prefix}cerpen-cintaislami
│${log1}${prefix}cerpen-cinta
│${log1}${prefix}cerpen-budaya
│${log1}${prefix}cerpen-bahasasunda
│${log1}${prefix}cerpen-bahasajawa
│${log1}${prefix}cerpen-bahasainggris
│${log1}${prefix}cerpen-bahasadaerah
│${log1}${prefix}cerpen-anak
└──────
┌──〔  Wibu Menu 〕
│${log1}${prefix}anime
│${log1}${prefix}nekopoisearch
│${log1}${prefix}nekopoi
│${log1}${prefix}kusonime
│${log1}${prefix}lk21
│${log1}${prefix}character
│${log1}${prefix}manga
│${log1}${prefix}pinterest2
└──────
┌──〔  Group Menu 〕
│${log1}${prefix}linkgroup
│${log1}${prefix}antilink <on>
│${log1}${prefix}antilink <off>
│${log1}${prefix}antiwame <on>
│${log1}${prefix}antiwame <off>
│${log1}${prefix}autosticker <1>
│${log1}${prefix}autosticker <0>
│${log1}${prefix}group <open>
│${log1}${prefix}group <close>
│${log1}${prefix}add 628××××
│${log1}${prefix}kick @tag
│${log1}${prefix}tagall <teks>
│${log1}${prefix}hidetag <teks>
│${log1}${prefix}promote @tag
│${log1}${prefix}demote @tag
│${log1}${prefix}setppgc <reply foto>
│${log1}${prefix}setppgc2 'panjang' <reply foto>
│${log1}${prefix}setname <name>
│${log1}${prefix}setdesc <teks>
│${log1}${prefix}listgc
└──────
┌──〔  Game Menu 〕
│${log1}${prefix}goblokcek
│${log1}${prefix}jelekcek
│${log1}${prefix}gaycek
│${log1}${prefix}lesbicek
│${log1}${prefix}gantengcek
│${log1}${prefix}cantikcek
│${log1}${prefix}begocek
│${log1}${prefix}suhucek
│${log1}${prefix}pintercek
│${log1}${prefix}jagocek
│${log1}${prefix}nolepcek
│${log1}${prefix}babicek
│${log1}${prefix}bebancek
│${log1}${prefix}baikcek
│${log1}${prefix}jahatcek
│${log1}${prefix}anjingcek
│${log1}${prefix}haramcek
│${log1}${prefix}pakboycek
│${log1}${prefix}pakgirlcek
│${log1}${prefix}sangecek
│${log1}${prefix}bapercek
│${log1}${prefix}fakboycek
│${log1}${prefix}alimcek
│${log1}${prefix}suhucek
│${log1}${prefix}fakgirlcek
│${log1}${prefix}kerencek
│${log1}${prefix}wibucek
│${log1}${prefix}pasarkascek
│${log1}${prefix}jadian
│${log1}${prefix}apakah
│${log1}${prefix}rate
│${log1}${prefix}kapankah
│${log1}${prefix}bisakah
│${log1}${prefix}kuismath
│${log1}${prefix}tebak lagu
│${log1}${prefix}tebak gambar
│${log1}${prefix}tebak kata
│${log1}${prefix}tebak kalimat
│${log1}${prefix}tebak lirik
│${log1}${prefix}tebak lontong
└──────
┌──〔  Download Menu 〕
│${log1}${prefix}ytsearch <query>
│${log1}${prefix}play <query>
│${log1}${prefix}ytmp4 <link>
│${log1}${prefix}ytmp3 <link>
│${log1}${prefix}tiktoknowm <link>
│${log1}${prefix}tiktokaudio <link>
│${log1}${prefix}mediafire <link>
│${log1}${prefix}xnxxsearch <query>
│${log1}${prefix}xnxxvideo <link>
│${log1}${prefix}spotify <link>
│${log1}${prefix}spotifysearch <query>
│${log1}${prefix}jooxplay <query>
│${log1}${prefix}zippysearch <link>
│${log1}${prefix}tiktokstalk <nama tiktok>
│${log1}${prefix}githubstalk <nama github>
│${log1}${prefix}igstalk <nama ig>
│${log1}${prefix}ytstalk <nama yt>
│${log1}${prefix}ffstalk <id ff>
│${log1}${prefix}mlstalk <id|zoneid>
└──────
┌──〔  Islam Menu 〕
│${log1}${prefix}asmaulhusna
│${log1}${prefix}iqra
│${log1}${prefix}hadist
│${log1}${prefix}juzamma
│${log1}${prefix}listsurah
│${log1}${prefix}jadwalsholat
│${log1}${prefix}kisahnabi
│${log1}${prefix}tafsirsurah
└──────
┌──〔  Sound Menu 〕
│${log1}${prefix}sound1
│${log1}${prefix}sound2
│${log1}${prefix}sound3
│${log1}${prefix}sound4
│${log1}${prefix}sound5
│${log1}${prefix}sound6
│${log1}${prefix}sound7
│${log1}${prefix}sound8
│${log1}${prefix}sound9
│${log1}${prefix}sound10
│${log1}${prefix}sound11
│${log1}${prefix}sound12
│${log1}${prefix}sound13
│${log1}${prefix}sound14
│${log1}${prefix}sound15
│${log1}${prefix}sound16
│${log1}${prefix}sound17
│${log1}${prefix}sound18
│${log1}${prefix}sound19
│${log1}${prefix}sound20
│${log1}${prefix}sound21
│${log1}${prefix}sound22
│${log1}${prefix}sound23
│${log1}${prefix}sound24
│${log1}${prefix}sound25
│${log1}${prefix}sound26
│${log1}${prefix}sound27
│${log1}${prefix}sound28
│${log1}${prefix}sound29
│${log1}${prefix}sound30
│${log1}${prefix}sound31
│${log1}${prefix}sound32
│${log1}${prefix}sound33
│${log1}${prefix}sound34
│${log1}${prefix}sound35
│${log1}${prefix}sound36
│${log1}${prefix}sound37
│${log1}${prefix}sound38
│${log1}${prefix}sound39
│${log1}${prefix}sound40
│${log1}${prefix}sound41
│${log1}${prefix}sound42
│${log1}${prefix}sound43
│${log1}${prefix}sound44
│${log1}${prefix}sound45
│${log1}${prefix}sound46
│${log1}${prefix}sound47
│${log1}${prefix}sound48
│${log1}${prefix}sound49
│${log1}${prefix}sound50
│${log1}${prefix}sound51
│${log1}${prefix}sound52
│${log1}${prefix}sound53
│${log1}${prefix}sound54
│${log1}${prefix}sound55
│${log1}${prefix}sound56
│${log1}${prefix}sound57
│${log1}${prefix}sound58
│${log1}${prefix}sound59
│${log1}${prefix}sound60
│${log1}${prefix}sound61
│${log1}${prefix}sound62
│${log1}${prefix}sound63
│${log1}${prefix}sound64
│${log1}${prefix}sound65
│${log1}${prefix}sound66
│${log1}${prefix}sound67
│${log1}${prefix}sound68
│${log1}${prefix}sound69
│${log1}${prefix}sound70
│${log1}${prefix}sound71
│${log1}${prefix}sound72
│${log1}${prefix}sound73
│${log1}${prefix}sound74
└──────
┌──〔  Logo Menu 〕
│${log1}${prefix}candy
│${log1}${prefix}3dchristmas
│${log1}${prefix}sparklechristmas
│${log1}${prefix}deepsea
│${log1}${prefix}scifi
│${log1}${prefix}rainbow
│${log1}${prefix}waterpipe
│${log1}${prefix}spooky
│${log1}${prefix}pencil
│${log1}${prefix}circuit
│${log1}${prefix}discovery
│${log1}${prefix}metalic
│${log1}${prefix}fiction
│${log1}${prefix}demon
│${log1}${prefix}transformer
│${log1}${prefix}berry
│${log1}${prefix}magma
│${log1}${prefix}3dstone
│${log1}${prefix}brokenglass
│${log1}${prefix}papercut
│${log1}${prefix}graffitibike
│${log1}${prefix}honey
│${log1}${prefix}ice
│${log1}${prefix}fruitjuice
│${log1}${prefix}biscuit
│${log1}${prefix}wood
│${log1}${prefix}chocolate
│${log1}${prefix}matrix
│${log1}${prefix}blood
│${log1}${prefix}dropwater
│${log1}${prefix}lava
│${log1}${prefix}rock
│${log1}${prefix}bloodglas
│${log1}${prefix}hallowen
│${log1}${prefix}darkgold
│${log1}${prefix}joker
│${log1}${prefix}wicker
│${log1}${prefix}firework
│${log1}${prefix}skeleton
│${log1}${prefix}sand
│${log1}${prefix}glue
│${log1}${prefix}1917
│${log1}${prefix}leaves
│${log1}${prefix}tololserti
│${log1}${prefix}shadow
│${log1}${prefix}cup
│${log1}${prefix}cup1
│${log1}${prefix}romance
│${log1}${prefix}smoke
│${log1}${prefix}burnpaper
│${log1}${prefix}lovemessage
│${log1}${prefix}undergrass
│${log1}${prefix}love
│${log1}${prefix}coffe
│${log1}${prefix}woodheart
│${log1}${prefix}woodenboard
│${log1}${prefix}summer3d
│${log1}${prefix}wolfmetal
│${log1}${prefix}nature3d
│${log1}${prefix}underwater
│${log1}${prefix}golderrose
│${log1}${prefix}summernature
│${log1}${prefix}letterleaves
│${log1}${prefix}glowingneon
│${log1}${prefix}fallleaves
│${log1}${prefix}flamming
│${log1}${prefix}harrypotter
│${log1}${prefix}carvedwood
│${log1}${prefix}tiktokmaker
│${log1}${prefix}ktpmaker
│${log1}${prefix}arcade8bit
│${log1}${prefix}battlefield4
│${log1}${prefix}pubg
│${log1}${prefix}pornhub
│${log1}${prefix}glitch
│${log1}${prefix}avenger
│${log1}${prefix}space
│${log1}${prefix}ninjalogo
│${log1}${prefix}marvelstudio
│${log1}${prefix}lionlogo
│${log1}${prefix}wolflogo
│${log1}${prefix}steel3d
│${log1}${prefix}wallgravity
│${log1}${prefix}coolgravity
│${log1}${prefix}wetglass
│${log1}${prefix}multicolor3d
│${log1}${prefix}watercolor
│${log1}${prefix}luxurygold
│${log1}${prefix}galaxywallpaper
│${log1}${prefix}lighttext
│${log1}${prefix}beautifulflower
│${log1}${prefix}puppycute
│${log1}${prefix}royaltext
│${log1}${prefix}heartshaped
│${log1}${prefix}birthdaycake
│${log1}${prefix}galaxystyle
│${log1}${prefix}hologram3d
│${log1}${prefix}greenneon
│${log1}${prefix}glossychrome
│${log1}${prefix}greenbush
│${log1}${prefix}metallogo
│${log1}${prefix}noeltext
│${log1}${prefix}glittergold
│${log1}${prefix}textcake
│${log1}${prefix}starsnight
│${log1}${prefix}wooden3d
│${log1}${prefix}textbyname
│${log1}${prefix}writegalacy
│${log1}${prefix}galaxybat
│${log1}${prefix}snow3d
│${log1}${prefix}birthdayday
│${log1}${prefix}goldplaybutton
│${log1}${prefix}silverplaybutton
│${log1}${prefix}freefire
│${log1}${prefix}blackpink
│${log1}${prefix}neon
│${log1}${prefix}greenneon
│${log1}${prefix}advanceglow
│${log1}${prefix}futureneon
│${log1}${prefix}sandwriting
│${log1}${prefix}sandsummer
│${log1}${prefix}sandengraved
│${log1}${prefix}metaldark
│${log1}${prefix}neonlight
│${log1}${prefix}holographic
│${log1}${prefix}text1917
│${log1}${prefix}minion
│${log1}${prefix}deluxesilver
│${log1}${prefix}newyearcard
│${log1}${prefix}bloodfrosted
│${log1}${prefix}halloween
│${log1}${prefix}jokerlogo
│${log1}${prefix}fireworksparkle
│${log1}${prefix}natureleaves
│${log1}${prefix}bokeh
│${log1}${prefix}toxic
│${log1}${prefix}strawberry
│${log1}${prefix}box3d
│${log1}${prefix}roadwarning
│${log1}${prefix}breakwall
│${log1}${prefix}icecold
│${log1}${prefix}luxury
│${log1}${prefix}cloud
│${log1}${prefix}summersand
│${log1}${prefix}horrorblood
│${log1}${prefix}thunder
└──────
┌──〔  Photo Funia 〕
│${log1}${prefix}denimembroidery
│${log1}${prefix}bracelet
│${log1}${prefix}nightmare
│${log1}${prefix}neondevil
│${log1}${prefix}artpapercut
│${log1}${prefix}neonwriting
│${log1}${prefix}airballoon
│${log1}${prefix}lovelock
│${log1}${prefix}neonsign
│${log1}${prefix}christmas
│${log1}${prefix}cemeterygates
└──────
┌──〔  Random Foto 〕
│${log1}${prefix}hentai
│${log1}${prefix}ahegao
│${log1}${prefix}ass
│${log1}${prefix}bdsm
│${log1}${prefix}cuckold
│${log1}${prefix}cum
│${log1}${prefix}ero
│${log1}${prefix}femdom
│${log1}${prefix}foot
│${log1}${prefix}gangbang
│${log1}${prefix}glasses
│${log1}${prefix}jahy
│${log1}${prefix}masturbation
│${log1}${prefix}orgy
│${log1}${prefix}panties
│${log1}${prefix}pussy
│${log1}${prefix}thighs
│${log1}${prefix}yuri
│${log1}${prefix}wallpaper
│${log1}${prefix}wallpapermeme
│${log1}${prefix}wallpaperprogamer
│${log1}${prefix}wallpapergamer
│${log1}${prefix}wallpaperanime
│${log1}${prefix}wallpaperteknologi
│${log1}${prefix}wallpapercyber
│${log1}${prefix}wallpaperinori
│${log1}${prefix}wallpaperislami
│${log1}${prefix}darkjokes
│${log1}${prefix}meme
│${log1}${prefix}hsdxd
│${log1}${prefix}sao
│${log1}${prefix}lovelive
│${log1}${prefix}translate
│${log1}${prefix}pinterest
│${log1}${prefix}ppcouple
│${log1}${prefix}hijaber
│${log1}${prefix}cecan
│${log1}${prefix}cecan2
│${log1}${prefix}cogan
│${log1}${prefix}waifu
│${log1}${prefix}loli
│${log1}${prefix}husbu
│${log1}${prefix}milf
│${log1}${prefix}cosplay
│${log1}${prefix}wallml
│${log1}${prefix}art
│${log1}${prefix}bts
│${log1}${prefix}exo
│${log1}${prefix}elf
│${log1}${prefix}neko
│${log1}${prefix}shota
│${log1}${prefix}sagiri
│${log1}${prefix}shinobu
│${log1}${prefix}megumin
│${log1}${prefix}wallnime
│${log1}${prefix}chiisaihentai
│${log1}${prefix}trap
│${log1}${prefix}blowjob
│${log1}${prefix}yaoi
│${log1}${prefix}ecchi
│${log1}${prefix}ahegao
│${log1}${prefix}hololewd
│${log1}${prefix}sideoppai
│${log1}${prefix}animefeets
│${log1}${prefix}animebooty
│${log1}${prefix}animethighss
│${log1}${prefix}hentaiparadise
│${log1}${prefix}animearmpits
│${log1}${prefix}hentaifemdom
│${log1}${prefix}lewdanimegirls
│${log1}${prefix}biganimetiddies
│${log1}${prefix}animebellybutton
│${log1}${prefix}hentai4everyone
└──────
┌──〔  Random Video 〕
│${log1}${prefix}storyanime
│${log1}${prefix}asupan
│${log1}${prefix}asupansantuy
│${log1}${prefix}asupanbocil
│${log1}${prefix}asupanukhty
│${log1}${prefix}asupanghea
│${log1}${prefix}asupanrikagusriani
│${log1}${prefix}asupan2
│${log1}${prefix}bokep
│${log1}${prefix}bocil
│${log1}${prefix}santuy
│${log1}${prefix}ukhty
│${log1}${prefix}rikagusriani
│${log1}${prefix}ghea
└──────`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/kenn.jpg') }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: menuu,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
                                urlButton: {
                                    displayText: 'My Github 🐈‍⬛',
                                    url: 'https://github.com/AnjusGans'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Rest Api',
                                    url: 'http://hadi-api.herokuapp.com'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot ⏰',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner 👤',
                                    id: 'owner'
                                    }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Peraturan 🥀',
                                    id: 'rules'
                                 }
                            }]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'tes':{
let btn = [{
urlButton: {
displayText: '👑 Owner ',
url: `${wame}`
}
}
,
{
quickReplyButton: {
displayText: 'M E N U',
id: `${prefix}menu`
}
}]
kenn.send5Loc(m.chat, `On Kak Silahkan Pencet Button Di Bawah\nJika Button Tidak Kelihatan Ketik ${prefix}menu`, `KennBot MD`, global.thumb, btn)
}
break
case 'Assalamualaikum': case 'assalamualaikum':{
replyNya(`Waalaikumsalam Kak *${pushname}*`)
}
break
case 'userkenn':{
replyNya(`*${Object.keys(global.db.data.users).length} User*`)
}
break
case 'rules': {
ules = `${ucapanWaktu} 𝐊𝐚𝐤 *${pushname}*
𒍮 *Rules Bot*
❒͡ 1. Jangan Spam Command, Berikan Delay 1-3 detik
❒͡ 2. Jangan Telepon Bot, Karena Akan Di Blok Otomatis

*JIKA MENEMUKAN BUG BISA LANGSUNG CONTACT OWNER*

𒍮 *Owner*
_*https://wa.me/6283123381900*_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/kenn.jpg') }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ules,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '👑 Owner ',
url: `${wame}`
}
},
{
urlButton: {
displayText: '🐈‍⬛ Github',
url: `https://github.com/AnjusGans`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'listpc': {
            	if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 kenn.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'block': {
		if (!isCreator) return replyNya(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kenn.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
break
case 'unblock': {
		if (!isCreator) return replyNya(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kenn.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
case 'bcimg': case 'bcvidio': case 'bcaudio': {
if (!isCreator) return replyNya(mess.owner)
if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) return replyNya(`Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`)
let anu = await store.chats.all().map(v => v.id)
replyNya(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let butoon = [{
urlButton: {
displayText: `👑 Owner `,
url: `${wame}`
}
},
{
quickReplyButton: {
displayText: 'List Menu',
id: 'menu'
}
}]
let media = await kenn.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
if (/webp/.test(mime)) {
kenn.sendMessage(i, { sticker: { url: media } }, { quoted: m })
} else if (/image/.test(mime)) {
let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
kenn.send5ButImg(i, junn, `KennBot MD`, buffer, butoon)
} else if (/video/.test(mime)) {
let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
kenn.send5Vid(i, junn, `KennBot MD`, buffer, butoon)
} else if (/audio/.test(mime)) {
kenn.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : m })
} else {
replyNya(`Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`)
}
await fs.unlinkSync(media)
}
replyNya(`Sukses Mengirim Broadcast Ke ${anu.length} Chats`)
}
break
case 'bcall': {
                if (!isCreator) return replyNya(mess.owner)
                if (!text) return replyNya(`Text mana?\n\nExample : ${prefix + command} fatih-san`)
                let anu = await store.chats.all().map(v => v.id)
                replyNya(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: '👑 Owner ',
                                    url: `${wame}`
                                }
                            }, {
                                callButton: {
                                    displayText: 'Nomor Owner',
                                    phoneNumber: '6288991078377'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      kenn.send5ButImg(yoi, txt, kenn.user.name, global.thumb, btn)
		}
		replyNya('Sukses Broadcast')
            }
            break
case 'asupan': case 'asupansantuy': case 'asupanbocil': case 'asupanukhty': case 'asupanghea': case 'asupanrikagusriani':{

sticWait(from)
hasiltod = await fetchJson(`https://api.dapuhy.xyz/api/asupan/${command}?apikey=${dapkey}`)
hasiltt = await getBuffer(hasiltod.result)
let btn = [{
                                urlButton: {
                                    displayText: '👑 Owner ',
                                    url: `${wame}`
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: 'Next',
                                    id: `${prefix+command}`
                                }  
                            }]
                      kenn.send5Vid(m.chat, `Nih Kak`, kenn.user.name, hasiltt, btn)
                      }
                      break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':{

sticWait(from)
hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: hasil }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'asupan2':{

sticWait(from)
hasiltod = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
kenn.sendMessage(m.chat, { video: { url: hasiltod.result }, mimetype: 'video/mp4', fileName: `asupan.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekenn })
}
break
case 'ghea':{

sticWait(from)
hasilwjd = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/ghea?apikey=SpyBotApi`)
kenn.sendMessage(m.chat, { video: { url: hasilwjd.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekenn })
}
break
case 'ukhty':{

sticWait(from)
hasilwjd = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/ukty?apikey=SpyBotApi`)
kenn.sendMessage(m.chat, { video: { url: hasilwjd.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekenn })
}
break
case 'rikagusriani':{

sticWait(from)
hasifs = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/rikagusriani?apikey=SpyBotApi`)
kenn.sendMessage(m.chat, { video: { url: hasifs.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekenn })
}
break
case 'santuy':{

sticWait(from)
hasifs = await fetchJson(`https://raku-web.herokuapp.com/api/asupan/santuy?apikey=RakuKeyTod`)
kenn.sendMessage(m.chat, { video: { url: hasifs.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekenn })
}
break
case 'bocil':{

sticWait(from)
hasily = await fetchJson(`https://spybot-api.herokuapp.com/api/asupan/bocil?apikey=SpyBotApi`)
kenn.sendMessage(m.chat, { video: { url: hasily.result.url }, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Asupan Nya` }, { quoted: fakekenn })
}
break
case 'bokep':{

sticWait(from)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
kenn.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: fakekenn })
}
break
case 'storyanime':{

sticWait(from)
hasiltod = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${lolkey}`)
kenn.sendMessage(m.chat, { video: { url: hasiltod.result }, mimetype: 'video/mp4', fileName: `storyanime.mp4`, caption: `Nih Story Animenya` }, { quoted: fakekenn })
}
break
case 'out':{
if (!isCreator) return replyNya(mess.owner)
kenn.groupLeave(from)
}
break
case 'public': {
if (!isCreator) return replyNya(mess.owner)
kenn.public = true
replyNya('Sukses Kak')
}
break
case 'self': {
if (!isCreator) return replyNya(mess.owner)
kenn.public = false
replyNya('Sukses Kak')
}
break

case 'cry':
case 'kill':
case 'hug':
case 'pat':
case 'lick':
case 'kiss':
case 'bite':
case 'yeet':
case 'bully':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'awoo':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'cuddle':
case 'highfive':
case 'handhold':

axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
kenn.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break
case 'attp':
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} Hai`)
gehdhe = await getBuffer(`https://api.xteam.xyz/${command}?file&text=${encodeURI(q)}`)
kenn.sendMessage(m.chat, { sticker: gehdhe }, { quoted: fakekenn })
break
case 'ttp':
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} Hai`)
veireuue = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${encodeURI(q)}`)
kenn.sendMessage(m.chat, { sticker: veireuue }, { quoted: fakekenn })
break
case 'tovideo': {
                if (!quoted) throw 'Reply sticker'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                sticWait(from)
		        let { webp2mp4File } = require('./Lib/uploader')
                let media = await kenn.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kenn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
case 'tovn':{
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            sticWait(from)
            let media = await quoted.download()
            let audio = await toPTT(media, 'mp4')
            kenn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            sticWait(from)
            let media = await quoted.download()
            let audio = await toAudio(media, 'mp4')
            kenn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${kenn.user.name}.mp3`}, { quoted : m })
            }
            break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) replyNya(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await kenn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyNya('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await kenn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
replyNya (`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'emojimix': {

if (!text) return replyNya(`Example : ${prefix + command} 😅+🤔`)
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await kenn.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'emoji':

if (args.length == 0) return replyNya(`Contoh: ${prefix + command} 🗿`)
titor = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${encodeURI(q)}?apikey=${lolkey}`)
let encmedia = await kenn.sendImageAsSticker(m.chat, titor, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
break
case 'dadu':
case 'patrick':
case 'amongus':
case 'gawrgura':
case 'anjing':
case 'bucinstick':

let buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/${command}?apikey=${lolkey}`)
kenn.sendMessage(m.chat, { sticker: buffer }, { quoted: fakekenn })
break
case 'faktaunik': 
case 'katabijak': 
case 'pantun': 
case 'bucin': {

kohg = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: kohg.result,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kenn.sendMessage(m.chat, buttonMessage, { quoted: fakekenn })
}
break
case 'quotes':{

var res = await Quotes()
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: teks,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kenn.sendMessage(m.chat, buttonMessage, { quoted: fakekenn })
}
break
case 'tafsirsurah': {

if (!args[0]) return replyNya(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
if (!args[1]) return replyNya(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah* 」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
replyNya(txt)
}
break
case 'cerpen-anak':{

let cerpe = await cerpen(`anak`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasadaerah':{

let cerpe = await cerpen(`bahasa daerah`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasainggris':{

let cerpe = await cerpen(`bahasa Inggris`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasajawa':{

let cerpe = await cerpen(`bahasa jawa`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasasunda':{

let cerpe = await cerpen(`bahasa sunda`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-budaya':{

let cerpe = await cerpen(`budaya`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cinta':{

let cerpe = await cerpen(`cinta`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaislami':{

let cerpe = await cerpen(`cinta islami`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintapertama':{

let cerpe = await cerpen(`cinta pertama`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaromantis':{

let cerpe = await cerpen(`cinta romantis`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasedih':{

let cerpe = await cerpen(`cinta sedih`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasegitiga':{

let cerpe = await cerpen(`Cinta segitiga`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasejati':{

let cerpe = await cerpen(`cinta sejati`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-galau':{

let cerpe = await cerpen(`galau`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-gokil':{

let cerpe = await cerpen(`gokil`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-inspiratif':{

let cerpe = await cerpen(`inspiratif`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-jepang':{

let cerpe = await cerpen(`jepang`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kehidupan':{

let cerpe = await cerpen(`kehidupan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-keluarga':{

let cerpe = await cerpen(`keluarga`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kisahnyata':{

let cerpe = await cerpen(`kisah nyata`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-korea':{

let cerpe = await cerpen(`korea`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kristen':{

let cerpe = await cerpen(`kristen`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'topup':{ //Create By Daffa (Walau liat readme aowkwowk) 
if (!q) return reply(`Example : ${command} id|jumlah`) 
try {
id = q.split('|')[0]
jumlah = q.split('|')[1]
ff = await hikki.game.nickNameFreefire(id) 
const topup = async function topupFreeFire() {
const makeSession = await hikki.game.topupFreeFire(id, jumlah) 
return await hikki.game.payDiamond(makeSession, '081938835391')
}
const top = await topup() 
sock.sendMessage(from, { image : { url : top.qrCode}, caption : `Payment : ${top.paymentMethod}\nId : ${id}\nJumlah : ${jumlah} Diamond\nScan & Bayar Maksimal 30 detik setelah qr ini keluar`}) 
} catch (e) { return reply(`Sistem Error atau Nominal Diamond/Id\nUser Tidak ada\nList Nominal Diamond\n5 Dm\n12 Dm\n70 Dm\n140 Dm\n355 Dm\n720 Dm`) }
}
addCmd(command.slice(1), 1, commund)
break
case 'cerpen-liburan':{

let cerpe = await cerpen(`liburan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-malaysia':{

let cerpe = await cerpen(`malaysia`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-mengharukan':{

let cerpe = await cerpen(`mengharukan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-misteri':{

let cerpe = await cerpen(`misteri`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-motivasi':{

let cerpe = await cerpen(`motivasi`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasihat':{

let cerpe = await cerpen(`nasihat`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasionalisme':{

let cerpe = await cerpen(`nasionalisme`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-olahraga':{

let cerpe = await cerpen(`olahraga`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-patahhati':{

let cerpe = await cerpen(`patah hati`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penantian':{

let cerpe = await cerpen(`penantian`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pendidikan':{

let cerpe = await cerpen(`pendidikan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengalaman':{

let cerpe = await cerpen(`pengalaman pribadi`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengorbanan':{

let cerpe = await cerpen(`pengorbanan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penyesalan':{

let cerpe = await cerpen(`penyesalan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perjuangan':{

let cerpe = await cerpen(`perjuangan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perpisahan':{

let cerpe = await cerpen(`perpisahan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-persahabatan':{

let cerpe = await cerpen(`persahabatan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-petualangan':{

let cerpe = await cerpen(`petualangan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-ramadhan':{

let cerpe = await cerpen(`ramadhan`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-remaja':{

let cerpe = await cerpen(`remaja`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rindu':{

let cerpe = await cerpen(`rindu`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rohani':{

let cerpe = await cerpen(`rohani`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-romantis':{

let cerpe = await cerpen(`romantis`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sastra':{

let cerpe = await cerpen(`sastra`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sedih':{

let cerpe = await cerpen(`sedih`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sejarah':{

let cerpe = await cerpen(`sejarah`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen':{

kohp = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
kohz = kohp.result
ini_txt = `Title : ${kohz.title}\n`
ini_txt += `Creator : ${kohz.creator}\n`
ini_txt += `Story :\n${kohz.cerpen}`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kenn.sendMessage(m.chat, buttonMessage, { quoted: fakekenn })
}
break
case 'namapeople':{

kohc = await fetchJson(`https://api.lolhuman.xyz/api/random/people?apikey=${lolkey}`)
kohx = kohc.result
ini_txt = `Nama : ${kohx.name.title} ${kohx.name.first} ${kohx.name.last}\n`
ini_txt += `Gender : ${kohx.gender}\n`
ini_txt += `Location Number : ${kohx.location.street.number}\n`
ini_txt += `Location Name : ${kohx.location.street.name}\n`
ini_txt += `Location City : ${kohx.location.city}\n`
ini_txt += `Location State : ${kohx.location.state}\n`
ini_txt += `Location Country : ${kohx.location.country}\n`
ini_txt += `Location PostCode : ${kohx.location.postcode}\n`
ini_txt += `Location Latitude : ${kohx.location.coordinates.latitude}\n`
ini_txt += `Location Longitude : ${kohx.location.coordinates.longitude}\n`
ini_txt += `Location Timeone : ${kohx.location.timezone.offset}\n`
ini_txt += `Deskripsi : ${kohx.location.timezone.description}\n`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kenn.sendMessage(m.chat, buttonMessage, { quoted: fakekenn })
}
break
case 'asmaulhusna': {

kohj = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
kghw = kohj.result
ini_txt = `No : ${kghw.index}\n`
ini_txt += `Latin: ${kghw.latin}\n`
ini_txt += `Arab : ${kghw.ar}\n`
ini_txt += `Indonesia : ${kghw.id}\n`
ini_txt += `English : ${kghw.en}`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
kenn.sendMessage(m.chat, buttonMessage, { quoted: fakekenn })
}
break
case 'kisahnabi':

if (args.length == 0) return replyNya(`Example: ${prefix + command} Muhammad`)
query = args.join(" ")
wdwo = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
wdwp = wdwo.result
ini_txt = `Name : ${wdwp.name}\n`
ini_txt += `Lahir : ${wdwp.thn_kelahiran}\n`
ini_txt += `Umur : ${wdwp.age}\n`
ini_txt += `Tempat : ${wdwp.place}\n`
ini_txt += `Story : \n${wdwp.story}`
replyNya(ini_txt)
break
case 'jadwalsholat':	

if (args.length == 0) return replyNya(`Example: ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
wdza = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
wdzs = wdza.result
ini_txt = `Wilayah : ${wdzs.wilayah}\n`
ini_txt += `Tanggal : ${wdzs.tanggal}\n`
ini_txt += `Sahur : ${wdzs.sahur}\n`
ini_txt += `Imsak : ${wdzs.imsak}\n`
ini_txt += `Subuh : ${wdzs.subuh}\n`
ini_txt += `Terbit : ${wdzs.terbit}\n`
ini_txt += `Dhuha : ${wdzs.dhuha}\n`
ini_txt += `Dzuhur : ${wdzs.dzuhur}\n`
ini_txt += `Ashar : ${wdzs.ashar}\n`
ini_txt += `Maghrib : ${wdzs.imsak}\n`
ini_txt += `Isya : ${wdzs.isya}`
replyNya(ini_txt)
break
case 'listsurah':

whqg = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
whqa = whqg.result
ini_txt = 'List Surah:\n'
for (var x in whqa) {
ini_txt += `${x}. ${whqa[x]}\n`
}
replyNya(ini_txt)
break
case 'mediafire':{

oh = `Example : ${prefix + command} link`
if (!text) throw oh
sticWait(from)
kfeh = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=${lolkey}&url=${text}`)
mnya = await getBuffer(kfeh.result.link)
kenn.sendMessage(m.chat, {document: mnya, mimetype: 'application/zip', fileName: `${kfeh.result.filename}`}, {quoted:fakekenn}).catch ((err) => reply(oh))
}
break
case 'iqra': {

oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
sticWait(from)
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
kenn.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:fakekenn}).catch ((err) => reply(oh))
}
break
case 'hadis': case 'hadist': {

if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan Tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis Yang Ke Berapa?\n\nContoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
replyNya(`No. ${number}

${arab}

${id}`)
} catch (e) {
replyNya(`Hadis tidak ditemukan !`)
}
}
break
case 'juzamma': {

if (args[0] === 'pdf') {
sticWait(from)
kenn.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:fakekenn})
} else if (args[0] === 'docx') {
sticWait(from)
kenn.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:fakekenn})
} else if (args[0] === 'pptx') {
sticWait(from)
kenn.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:fakekenn})
} else if (args[0] === 'xlsx') {
sticWait(from)
kenn.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:fakekenn})
} else {
replyNya(`Mau Format Apa ? Example : ${prefix + command} pdf

Format Yang Tersedia : pdf, docx, pptx, xlsx`)
}
}
break
case 'translate':

if (args.length < 1) return reply(`Text Nya Mana Kak?\nContoh\n${prefix + command} Who am I`)
sticWait(from)
tes = await fetchJson(`https://megayaa.herokuapp.com/api/translate?to=id&kata=${q}`)
Infoo = tes.info
Detek = tes.translate
replyNya(`👷Translate : ${Detek}\n🔎Hasil : ${Infoo}`)
break
case 'nekopoisearch':

              if (args.length == 0) return replyNya(`Example: ${prefix + command} Isekai Harem`)
              query = args.join(" ")
              pqsh = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
              fekfw = pqsh.result
              ini_txt = ""
              for (var x of fekfw) {
              ini_txt += `\`\`\`🐥 Title : ${x.title}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Link : ${x.link}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Thumbnail : ${x.thumbnail}\`\`\`\n\n`
}
              replyNya(ini_txt)
              break
case 'nekopoi':{

              if (args.length == 0) return replyNya(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
              ini_url = args[0]
sticWait(from)
              geof = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lolkey}&url=${ini_url}`)
              skdl = geof.result
              ini_txt = `\`\`\`🐥 Title : ${skdl.anime}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Porducers : ${skdl.producers}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Duration : ${skdl.duration}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Size : ${skdl.size}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Sinopsis : ${skdl.sinopsis}\`\`\`\n`
              link = skdl.link
              for (var x in link) {
              ini_txt += `\n${link[x].name}\n`
              link_dl = link[x].link
              for (var y in link_dl) {
              ini_txt += `${y} - ${link_dl[y]}\n`
}
}
              buff = await getBuffer(skdl.thumb)
let message = await prepareWAMessageMedia({ image: buff }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ini_txt,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}             
         break
case 'lk21':

                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    sticWait(from)
                    query = args.join(" ")
                    fejfw = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
                    fejfwd = fejfw.result
                    ini_txt = `Title : ${fejfwd.title}\n`
                    ini_txt += `Link : ${fejfwd.link}\n`
                    ini_txt += `Genre : ${fejfwd.genre}\n`
                    ini_txt += `Views : ${fejfwd.views}\n`
                    ini_txt += `Duration : ${fejfwd.duration}\n`
                    ini_txt += `Tahun : ${fejfwd.tahun}\n`
                    ini_txt += `Rating : ${fejfwd.rating}\n`
                    ini_txt += `Desc : ${fejfwd.desc}\n`
                    ini_txt += `Actors : ${fejfwd.actors.join(", ")}\n`
                    ini_txt += `Location : ${fejfwd.location}\n`
                    ini_txt += `Date Release : ${fejfwd.date_release}\n`
                    ini_txt += `Language : ${fejfwd.language}\n`
                    ini_txt += `Link Download : ${fejfwd.link_dl}`
                    eahdw = await getBuffer(fejfwd.thumbnail)
                    await kenn.sendMessage(m.chat, { image: eahdw, caption: ini_txt }, { quoted: fakekenn})                  
                    break
case 'pinterest':

if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
sticWait(from)
                    query = args.join(" ")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await kenn.sendMessage(m.chat, { image: ini_buffer, caption: '*PINTEREST IMAGE*' }, { quoted: fakekenn})                  
                    break
case 'pinterest2':

                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    sticWait(from)
                    query = args.join(" ")
                    dwxwdw = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${lolkey}&query=${query}`)
                    vdcdns = dwxwdw.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(vdcdns[x])
                        await await kenn.sendMessage(m.chat, { image: ini_buffer, caption: '*PINTEREST IMAGE*' }, { quoted: fakekenn})                  
                    }
                    break
case 'character':

                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
sticWait(from)
                    query = args.join(" ")
                    fjwje = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
                    fejfqds = fjwje.result
                    ini_txt = `Id : ${fejfqds.id}\n`
                    ini_txt += `Name : ${fejfqds.name.full}\n`
                    ini_txt += `Native : ${fejfqds.name.native}\n`
                    ini_txt += `Favorites : ${fejfqds.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = fejfqds.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${fejfqds.description.replace(/__/g, "_")}`
                    gnejws = await getBuffer(fejfqds.image.large)
                    await kenn.sendMessage(m.chat, { image: gnejws, caption: ini_txt }, { quoted: fakekenn})                  
                    break
case 'manga':

if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
sticWait(from)
                    query = args.join(" ")
                    mcndn = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
                    vendks = mcndn.result
                    ini_txt = `Id : ${vendks.id}\n`
                    ini_txt += `Id MAL : ${vendks.idMal}\n`
                    ini_txt += `Title : ${vendks.title.romaji}\n`
                    ini_txt += `English : ${vendks.title.english}\n`
                    ini_txt += `Native : ${vendks.title.native}\n`
                    ini_txt += `Format : ${vendks.format}\n`
                    ini_txt += `Chapters : ${vendks.chapters}\n`
                    ini_txt += `Volume : ${vendks.volumes}\n`
                    ini_txt += `Status : ${vendks.status}\n`
                    ini_txt += `Source : ${vendks.source}\n`
                    ini_txt += `Start Date : ${vendks.startDate.day} - ${vendks.startDate.month} - ${vendks.startDate.year}\n`
                    ini_txt += `End Date : ${vendks.endDate.day} - ${vendks.endDate.month} - ${vendks.endDate.year}\n`
                    ini_txt += `Genre : ${vendks.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${vendks.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${vendks.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = vendks.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${vendks.description}`
                    cehdhw = await getBuffer(vendks.coverImage.large)
                    await kenn.sendMessage(m.chat, { image: cehdhw, caption: ini_txt }, { quoted: fakekenn})                  
                    break
case 'kusonime':{

             if (args.length == 0) return replyNya(`Example: ${prefix + command} Gotoubun No Hanayome`)
sticWait(from)
             query = args.join(" ")
             fwjf = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
             fsdj = fwjf.result
             ini_txt = `Title : ${fsdj.title}\n`
             ini_txt += `Japanese : ${fsdj.japanese}\n`
             ini_txt += `Genre : ${fsdj.genre}\n`
             ini_txt += `Seasons : ${fsdj.seasons}\n`
             ini_txt += `Producers : ${fsdj.producers}\n`
             ini_txt += `Type : ${fsdj.type}\n`
             ini_txt += `Status : ${fsdj.status}\n`
             ini_txt += `Total Episode : ${fsdj.total_episode}\n`
             ini_txt += `Score : ${fsdj.score}\n`
             ini_txt += `Duration : ${fsdj.duration}\n`
             ini_txt += `Released On : ${fsdj.released_on}\n`
             ini_txt += `Desc : ${fsdj.desc}\n`
             link_dl = fsdj.link_dl
             for (var x in link_dl) {
             ini_txt += `\n${x}\n`
             for (var y in link_dl[x]) {
             ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
             ini_buffer = await getBuffer(fsdj.thumbnail)
let message = await prepareWAMessageMedia({ image: ini_buffer }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ini_txt,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}             
         break
case 'anime':{

             if (args.length == 0) return replyNya(`Example: ${prefix + command} Gotoubun No Hanayome`)
sticWait(from)
             query = args.join(" ")
             zcem = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
             zcez = zcem.result
             ini_txt = `Id : ${zcez.id}\n`
             ini_txt += `Id MAL : ${zcez.idMal}\n`
             ini_txt += `Title : ${zcez.title.romaji}\n`
             ini_txt += `English : ${zcez.title.english}\n`
             ini_txt += `Native : ${zcez.title.native}\n`
             ini_txt += `Format : ${zcez.format}\n`
             ini_txt += `Episodes : ${zcez.episodes}\n`
             ini_txt += `Duration : ${zcez.duration} mins.\n`
             ini_txt += `Status : ${zcez.status}\n`
             ini_txt += `Season : ${zcez.season}\n`
             ini_txt += `Season Year : ${zcez.seasonYear}\n`
             ini_txt += `Source : ${zcez.source}\n`
             ini_txt += `Start Date : ${zcez.startDate.day} - ${zcez.startDate.month} - ${zcez.startDate.year}\n`
             ini_txt += `End Date : ${zcez.endDate.day} - ${zcez.endDate.month} - ${zcez.endDate.year}\n`
             ini_txt += `Genre : ${zcez.genres.join(", ")}\n`
             ini_txt += `Synonyms : ${zcez.synonyms.join(", ")}\n`
             ini_txt += `Score : ${zcez.averageScore}%\n`
             ini_txt += `Characters : \n`
             ini_character = zcez.characters.nodes
             for (var x of ini_character) {
             ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
             ini_txt += `\nDescription : ${zcez.description}`
             mvn = await getBuffer(zcez.coverImage.large)
             let message = await prepareWAMessageMedia({ image: mvn }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ini_txt,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}             
break
case 'ceritahoror':{

sticWait(from)
pqdnw = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
csksw = pqdnw.result
ini_txt = `Title : ${csksw.title}\n`
ini_txt += `Desc : ${csksw.desc}\n`
ini_txt += `Story :\n${csksw.story}\n`
buff = await getBuffer(csksw.thumbnail)
let message = await prepareWAMessageMedia({ image: buff }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ini_txt,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'wetglass':
case 'multicolor3d':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':{

if (args.length == 0) return replyNya(`Example: ${prefix + command} teks`)
sticWait(from)
ini_txt = args.join(" ")
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'summersand':
case 'horrorblood':{

if (args.length == 0) return replyNya(`Example: ${prefix + command} Nabb Botz`)
sticWait(from)
ini_txt = args.join(" ")
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'carbon':{

if(!q) return replyNya(`Contoh: ${prefix + command} teks`)
sticWait(from)
dwruw = await getBuffer(`https://ws-production.up.railway.app/api/JavaScript/carbon?code=${q}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: dwruw }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
             if (!q) return reply(`Example : ${prefix + command} kenn`) 
             reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                kenn.sendMessage(m.chat, { image: { url: anu }, caption: `*Done*` }, { quoted: m })
             }
break
case 'denimembroidery': case 'bracelet': case 'nightmare': case 'artpapercut': case 'neonwriting': case 'airballoon': case 'lovelock': case 'neonsign': case 'cemeterygates':{

if (args.length == 0) return replyNya(`Contoh: ${prefix + command} teks`)
sticWait(from)
txt1 = args[0]
imagetod = await getBuffer(`https://api.dapuhy.xyz/api/photofunia/${command}?text=${txt1}&apikey=${dapkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagetod }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'carvedwood':{

if (args.length == 0) return replyNya(`Contoh: ${prefix + command} teks`)
sticWait(from)
txt1 = args[0]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${txt1}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'pornhub':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
case 'coolgravity':{

if (args.length == 0) return replyNya(`Example: ${prefix + command} Nabb Botz Botz`)
sticWait(from)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'ktpmaker':

if (args.length == 0) return replyNya(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
sticWait(from)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${lolkey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    kenn.sendMessage(m.chat, { image: ini_buffer, caption: `*KTP MAKER*` }, { quoted: fakekenn})
                    break
case 'tiktokmaker':{

if (args.length == 0) return replyNya(`Contoh: ${prefix + command} teks1 teks2`)
sticWait(from)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'arcade8bit':
case 'battlefield4':
case 'pubg':{

if (args.length == 0) return replyNya(`Contoh: ${prefix + command} teks1 teks2`)
sticWait(from)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break

case 'art':
case 'bts':
case 'exo':
case 'elf':
case 'neko':
case 'shota':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':{

sticWait(from)
hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: hasil }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'rpgmenu':
case 'profile':

if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
await sendButLoc(from)
break
case 'joinrpg':

if (!m.isGroup) return replyNya(mess.group)  
if (isPetualang) return replyNya('Kamu Sudah Menjadi Petualang')
if (args.length < 1) return replyNya(`Kirim perintah ${prefix + command} nama`)
await sendButJoin(from, q)
break
case 'mining':

if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
pp = randomNomor(75)
emas = randomNomor(15)
dm = randomNomor(3)
besi = randomNomor(50)
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
mining = ('Waitt Sedang Menguli . . .')
setTimeout( () => {
butkie = [
{ buttonId: 'mining', buttonText: { displayText: 'Mining' }, type: 1 }
]
kenn.sendButtonText(m.chat, butkie, `Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`, kenn.user.name, m)
}, 9000) // 1000 = 1s,
setTimeout( () => {
kenn.sendMessage(from, { text: '🚧 Selesai Menguli . . .🪙👷' }, { quoted: fakekenn })
}, 7000) // 1000 = 1s,
setTimeout( () => {
kenn.sendMessage(from, { text: '🚧 Menemukan Emas . . .⚒️🏔️️️' }, { quoted: fakekenn })
}, 4000) // 1000 = 1s,
setTimeout( () => {
kenn.sendMessage(from, { text: '🚧 Mulai Menambang . . .⚒️🏔️️' }, { quoted: fakekenn })
}, 1500) // 1000 = 1s,
setTimeout( () => {
kenn.sendMessage(from, { text: mining }, {quoted: fakekenn}) 
}, 0) // 1000 = 1s,
break
case 'inventori':

if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
buttonnss = [
{ buttonId: 'adventure', buttonText: { displayText: 'Adventure' }, type: 1 }
]
kenn.sendButtonText(m.chat, buttonnss, `📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(sender)}/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(sender)}🪙\n • Uang : $${(getBalance(sender, balance))}💰\n • Besi : ${getBesi(sender)}⛓️\n • Berlian : ${getDm(sender)}💎\n • Ikan : ${getFish(sender)}🎣`, kenn.user.name, m)
break
case 'sellikan':

if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
if (args.length < 1) return replyNya(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 5 * jmlh
if (getFish(sender) < jmlh) return replyNya(`Ikan Kamu Tidak Cukup`)
sellFish(sender, jmlh, balance)
addBalance(sender, rp, balance) 
buttotons = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
kenn.sendButtonText(m.chat, buttotons, `🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(sender)}\n • Hasil Penjualan : $${rp}`,  kenn.user.name, m)
break
case 'sellbesi':

if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
if (args.length < 1) return replyNya(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 10 * jmlh
if (getBesi(sender) < jmlh) return replyNya(`Besi Kamu Tidak Cukup`)
sellBesi(sender, jmlh, balance)
addBalance(sender, rp, balance) 
butbes = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
kenn.sendButtonText(m.chat, butbes, `🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Besi : 10\n • Status : Sukses\n • Sisa Besi : ${getBesi(sender)}\n • Hasil Penjualan : $${rp}`, kenn.user.name, m)
break
case 'sellemas':

if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
if (args.length < 1) return replyNya(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 25 * jmlh
if (getEmas(sender) < jmlh) return replyNya(`Emas Kamu Tidak Cukup`)
sellEmas(sender, jmlh, balance)
addBalance(sender, rp, balance) 
butem = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
kenn.sendButtonText(m.chat, butem, `🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Emas : 25\n • Status : Sukses\n • Sisa Emas : ${getEmas(sender)}\n • Hasil Penjualan : $${rp}`, kenn.user.name, m)
break 
case 'selldiamond':

if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
if (args.length < 1) return replyNya(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
ttl = body.slice(13)
var etoo = 75 * ttl
if (getDm(sender) < ttl) return replyNya(`Besi Kamu Tidak Cukup`)
sellDm(sender, ttl)
addBalance(sender, etoo, balance) 
butdi = [
{ buttonId: 'inventori', buttonText: { displayText: 'Inventori' }, type: 1 }
]
kenn.sendButtonText(m.chat, butdi, `🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Dm : 75\n • Status : Sukses\n • Sisa Diamond : ${getDm(sender)}\n • Hasil Penjualan : $${etoo}`, kenn.user.name, m)
break 
case 'mancing':

if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
ikannya = ikan[Math.floor(Math.random() * ikan.length)]
xp = Math.ceil(Math.random() * 350)
coin = randomNomor(50)	    
ditangkap = Math.ceil(Math.random() * 50)
cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
setTimeout( () => {
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`
        kenn.sendMessage(from, { caption: hg, location: { jpegThumbnail: cing }, templateButtons: button, footer: `Rpg Game By KennBot MD`, mentions: [sender] })
        .catch ((err) => reply(mess.error))
}, 6000)
setTimeout( () => {
kenn.sendMessage(from, { text: 'Berhasil Mendapatkan Ikan . . .' }, { quoted: fakekenn })
}, 5000) // 1000 = 1s,
setTimeout( () => {
kenn.sendMessage(from, { text: '🎣 Menarik Kail. . .' }, { quoted: fakekenn })
}, 3000) // 1000 = 1s,
setTimeout( () => {
kenn.sendMessage(from, { text: '🎣 Mulai Memancing . . .' }, { quoted: fakekenn })
}, 1500) // 1000 = 1s,
addFish(sender, ditangkap)
addLevelingXp(sender, xp)
addBalance(sender, coin, balance) 
break
case 'adventure':

if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
anu = fs.readFileSync('./Lib/dungeon.js');
var ad = dungeon[Math.floor(Math.random() * dungeon.length)]
jsonData = JSON.parse(anu);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasm = await getBuffer(randKey.result)  
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {		
var button = [
		{ urlButton: { displayText: `Script`, url : `${wame}` } },
		{ quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
		{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
		]
        var hg = `「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`
        kenn.sendMessage(from, { caption: hg, location: { jpegThumbnail: hasm }, templateButtons: button, footer: `Rpg Game By KennBot MD`, mentions: [sender] })
        .catch ((err) => reply(mess.error))
}, 7000)
setTimeout( () => {
kenn.sendMessage(from, { text: `Awass` }, { quoted: fakekenn })
}, 5000) // 1000 = 1s,
setTimeout( () => {
kenn.sendMessage(from, { text: `Tiba Tiba Ada ${sesuatu}` }, { quoted: fakekenn })
}, 3000) // 1000 = 1s,
setTimeout( () => {
kenn.sendMessage(from, { text: `${pushname} Sedang Bertualang` }, { quoted: fakekenn })
}, 1500) // 1000 = 1s,
addLevelingXp(sender, adven)
addBalance(sender, money, balance)
break
case 'luckyday':
case 'luckytime':

if (!m.isGroup) return replyNya(mess.group) 
if (!isPetualang) return replyNya(mess.noPetualang)
{
ez = Math.ceil(Math.random() * 450)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
addEmas(sender, a)
addBesi(sender, c)
butluck = [
{ buttonId: `${command}`, buttonText: { displayText: `Next Lucky` }, type: 1 }
]
kenn.sendButtonText(m.chat, butluck, `🎰 Lucky\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`, kenn.user.name, m)
}
break
case 'cecan2':{

sticWait(from)
imgd = await fetchJson('https://spybot-api.herokuapp.com/api/asupan/cecan?apikey=SpyBotApi')
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: { url: imgd.result.url } }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'hijaber':{

sticWait(from)
imgd = await fetchJson('https://spybot-api.herokuapp.com/api/asupan/hijaber?apikey=SpyBotApi')
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: { url: imgd.result.url } }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'cecan':
case 'cogan':{

sticWait(from)
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'buypremium': case 'sewabot': {
ya = '```'
sewbot = `Hai *${pushname}*

List Sewabot
5k/Minggu
7k/Bulan
10k/Manent
Note : *Keuntungan Sewabot?*
Bisa Masukin Bot Ke Group

List Premium
6k/Minggu
8k/Bulan
20k/Manent
Note : *Keuntungan Premium?*
Bisa Gunain Fitur Premium Tanpa Batas

List Sewabot & Premium
17k/Minggu
34k/Bulan
50k/Manent
Note : *Keuntungan Sewabot & Premium?*
Bisa Masukin Bot Ke Group & Bisa Gunain Fitur Premium Tanpa Batas

List Payment
GOPAY : Scan Qr Di Atas
OVO : 081938835391

Note : MAU SEWA & PREM APA MAU LIAT DOANG ANJING
Jika Sudah Membayar Silahkan Kirim Bukti Screenshot Ke Button Url Di Bawah`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/gopaykir.jpg') }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: sewbot,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [
{
urlButton: {
displayText: 'Owner Nabb Botz',
url: `${wame}`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'payment': case 'donasi': {
donte = `_MAU BAYAR YA KAK_
GOPAY : Scan Qr Di Atas


*NOTE :*
MAU BAYAR APA LIAT DOANG ANJING
JIKA SUDAH BAYAR KIRIM BUKTI 
SCREENSHOT KE NOMOR OWNER`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./Image/gopaykir.jpg') }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/Nabb Botz'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
sticWait(from)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await kenn.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
let response = await kenn.groupInviteCode(m.chat)
kenn.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'antilink':
if (!m.isGroup) return replyNya(mess.group)
if (!isGroupAdmins && !isCreator) return replyNya(mess.admin)
if (!isBotAdmins) return replyNya(mess.botAdmin)
if (args[0] === "on") {
if (global.db.data.chats[m.chat].antilink) return replyNya('Sudah Aktif Sebelumnya')
global.db.data.chats[m.chat].antilink = true
replyNya(`Antilink Berhasil Di Aktifkan !`)
} else if (args[0] === "off") {
if (!global.db.data.chats[m.chat].antilink) return replyNya('Sudah Nonaktif Sebelumnya')
global.db.data.chats[m.chat].antilink = false
replyNya(`Antilink Berhasil Di Nonaktifkan !`)
} else {
let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await kenn.sendButtonText(m.chat, buttons, `Mode Antilink`, kenn.user.name, m)
}
break
case 'antiwame':
if (!m.isGroup) return replyNya(mess.group)
if (!isGroupAdmins && !isCreator) return replyNya(mess.admin)
if (!isBotAdmins) return replyNya(mess.botAdmin)
if (args[0] === "on") {
if (global.db.data.chats[m.chat].antiwame) return replyNya('Sudah Aktif Sebelumnya')
global.db.data.chats[m.chat].antiwame = true
replyNya(`Antilink Berhasil Di Aktifkan !`)
} else if (args[0] === "off") {
if (!global.db.data.chats[m.chat].antiwame) return replyNya('Sudah Nonaktif Sebelumnya')
global.db.data.chats[m.chat].antiwame = false
replyNya(`Antilink Berhasil Di Nonaktifkan !`)
} else {
let buttons = [
{ buttonId: 'antiwame on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antiwame off', buttonText: { displayText: 'Off' }, type: 1 }
]
await kenn.sendButtonText(m.chat, buttons, `Mode Antilink`, kenn.user.name, m)
}
break
case 'listgc': {
if (!m.isGroup) return replyNya(mess.group)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 List Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
 let metadata = await kenn.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nDibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
kenn.sendTextWithMentions(m.chat, teks, m)
}
break
case 'autosticker':
if (!m.isGroup) return replyNya(mess.group)
if (!isGroupAdmins && !isCreator) return replyNya(mess.admin)
if (!isBotAdmins) return replyNya(mess.botAdmin)
					if (args[0] === '1') {
					if (isAutoSticker) return replyNya('Sudah Aktif Sebelumnya')
					autosticker.push(from)
					fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replyNya(`Autosticker Berhasil Di Aktifkan !`)
					} else if (args[0] === '0') {
					autosticker.splice(from, 1)
						fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replyNya(`Autosticker Berhasil Di Nonaktifkan !`)
					} else {
let buttons = [
{ buttonId: 'autosticker 1', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'autosticker 0', buttonText: { displayText: 'Off' }, type: 1 }
]
await kenn.sendButtonText(m.chat, buttons, `Mode Autosticker`, kenn.user.name, m)
}
					break
case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){
await kenn.groupSettingUpdate(m.chat, 'announcement').then((res) => replyNya(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await kenn.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replyNya(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
]
await kenn.sendButtonText(m.chat, buttons, `Mode Group`, kenn.user.name, m)
}
}
break
case 'apakah':{
if (!m.isGroup) throw mess.group
if (args.length < 1) return replyNya(`Contoh : ${prefix}apakah aku jelek`)
query = args.join(" ")
naon = ['Iya','Tidak','Mungkin']
random = naon[Math.floor(Math.random() * (naon.length))]
tz = `Pertanyaan = ${command} ${query}
Jawaban = ${random}`
replyNya(tz)
}
break
case 'goblokcek': case 'jelekcek': case 'gaycek':
case 'lesbicek':case 'gantengcek': case 'cantikcek':case 'begocek': case 'suhucek':case 'pintercek':
case 'jagocek':case 'nolepcek':case 'babicek':case 'bebancek':case 'baikcek':
case 'jahatcek':case 'anjingcek':case 'haramcek':case 'pakboycek':
case 'pakgirlcek':case 'sangecek': case 'bapercek':case 'fakboycek':case 'alimcek':case 'suhucek':
case 'fakgirlcek':case 'kerencek':case 'wibucek':case 'pasarkascek':
if (args.length < 1) return replyNya(`Contoh : ${prefix + command} kenn`)
cantik = body.slice(1)
const eyy =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const yn = eyy[Math.floor(Math.random() * eyy.length)]
kenn.sendMessage(m.chat, { text: `${yn}%` }, { quoted: fakekenn })
break
case 'jadian': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee Yang Jadian💖 Jangan Lupa Pajak Jadiannya Yaa🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
]
await kenn.sendButtonText(m.chat, buttons, jawab, kenn.user.name, m, {mentions: menst})
}
break
case 'bisakah':
if (!m.isGroup) throw mess.group
if (args.length < 1) return replyNya(`Contoh : ${prefix}bisakah aku terbang`)
query = args.join(" ")
naon = ['Iya','Tidak','Mungkin']
random = naon[Math.floor(Math.random() * (naon.length))]
tt = `Pertanyaan = ${command} ${query}
Jawaban : ${random}`
replyNya(tt)
break
case 'kapankah':
if (!m.isGroup) throw mess.group
if (args.length < 1) return replyNya(`Contoh : ${prefix}kapankah aku menikah`)
query = args.join(" ")
no = `${Math.floor(Math.random() * 100)}`
naon = ['Jam lagi','Hari lagi','Minggu lagi','Bulan lagi','Tahun lagi']
random = naon[Math.floor(Math.random() * (naon.length))]
kapan = `Pertanyaan = ${command} ${query}
Jawaban : ${no} ${random}`
replyNya(kapan)
break      	   
case 'rate':
if (!m.isGroup) throw mess.group
if (args.length < 1) return replyNya(`Contoh : ${prefix}rate aku ganteng`)
random = `${Math.floor(Math.random() * 100)}`
rating = `Persentase : ${random}%`
replyNya(rating)
break
case 'setppgc2': {
if (!m.isGroup) return replyNya(mess.group)
if (!isAdmins && !isCreator) return replyNya(mess.admin)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var media = await kenn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await kenn.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
reply(`Sukses`)
} else {
var memeg = await kenn.updateProfilePicture(m.chat, { url: media })
fs.unlinkSync(media)
reply(`Sukses`)
}
}
break
case 'setppbot': {
if (!isCreator) return replyNya(mess.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var media = await kenn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await kenn.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
reply(`Sukses`)
} else {
var memeg = await kenn.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
reply(`Sukses`)
}
}
break
case 'setppgc': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await kenn.downloadAndSaveMediaMessage(quoted)
await kenn.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
replyNya(mess.success)
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await kenn.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'setdesc': case 'setdesk': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await kenn.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kenn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'kick': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kenn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'tagall': {
if (!m.isGroup) throw mess.group
if (!q) throw `Teks?`
let teks = `══✪〘 *👥 Tag All* 〙✪══\n\n${q ? q : ''}\n`
for (let mem of participants) {
teks += `➲ @${mem.id.split('@')[0]}\n`
}
kenn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: fakekenn })
}
break
case 'hidetag': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
kenn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fakekenn })
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
if (!isCreator && !isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kenn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
if (!isCreator && !isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kenn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!m.quoted && !text) throw `Kirim/Reply Teks Dengan Caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
replyNya(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
case 'jooxplay':

if (args.length == 0) return replyNya(`Example: ${prefix + command} Melukis Senja`)
sticWait(from)
                    query = args.join(" ")
                    ina = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${query}`)
                    ani = ina.result
                    ini_txt = `Title : ${ani.info.song}\n`
                    ini_txt += `Artists : ${ani.info.singer}\n`
                    ini_txt += `Duration : ${ani.info.duration}\n`
                    ini_txt += `Album : ${ani.info.album}\n`
                    ini_txt += `Uploaded : ${ani.info.date}\n`
                    ini_txt += `Lirik :\n ${ani.lirik}\n`
                    fol = await getBuffer(ani.image)
                    kenn.sendMessage(m.chat, { image: fol, caption: ini_txt }, { quoted: fakekenn})                  
                    get_audio = await getBuffer(ani.audio[0].link)
                    kenn.sendMessage(m.chat, {audio: get_audio, mimetype: 'audio/mpeg', fileName: `${ani.title}.mp3`}, { quoted : fakekenn })
                    break
case 'play':

if (args.length < 1) return replyNya(`Kirim perintah ${command} query\nContoh : ${command} dj sad`)
sticWait(from)
await sendPlay(from, q)
break
case 'ytmp4': case 'ytvideo': {

let { ytv } = require('./Lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return replyNya('File Melebihi Batas '+util.format(media))
kenn.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP4\n✇ Resolusi : ${args[1] || '360p'}` }, { quoted: fakekenn })
}
break
case 'ytmp3': case 'ytaudio': {

let { yta } = require('./Lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return replyNya('File Melebihi Batas '+util.format(media))
kenn.sendImage(m.chat, media.thumb, `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP3\n✇ Resolusi : ${args[1] || '128kbps'}`, m)
kenn.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mp4', ptt:true, contextInfo:{externalAdReply:{
                title: `Hai Kak ${pushname}`,
                body: `© 2022`,
                thumbnail: thumb,
mediaType:2,
mediaUrl: "https://github.com/AnjusGans",
sourceUrl: "https://github.com/AnjusGans"
                 }}}, { quoted: m })
            }
break
case 'speed':{
let timestamp = speed()
let latensi = speed() - timestamp
await sendBut5nya(`${latensi.toFixed(4)} _Detik_`)
}
break
case 'runtime':{
await sendBut5nya(`${runtime(process.uptime())}`)
}
break
case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Detik_ \n ${oldd - neww} _Miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
replyNya(respon)
}
break
case 'ssweb':
if (!q) throw `Link Nya?`
sticWait(from)
kenn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/ssweb?apikey=${lolkey}&url=${q}`}})
break
case 'xnxxsearch':

                    if (args.length == 0) return replyNya(`Example: ${prefix + command} Japanese`)
                    sticWait(from)
                    query = args.join(" ")
                    csksyu = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${query}`)
                    csksyz = csksyu.result
                    ini_txt = ""
                    for (var x of csksyz) {
                        ini_txt = `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
anu = `${ini_txt}───────────────\n\n┌ ◪ *DOWNLOAD*
└ ${prefix}xnxxvideo [link]`
kenn.sendMessage(from, { text: anu }, { quoted: fakekenn })
break
              case 'spotifysearch':
              
                    if (args.length == 0) return replyNya(`Example: ${prefix + command} Melukis Senja`)
                    sticWait(from)
                    query = args.join(" ")
                    kirt = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
                    haye = kirt.result
                    ini_txt = ""
                    for (var x of haye) {
                        ini_txt = `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n`
                    }
                    replyNya(ini_txt)
                    break
case 'xnxxvideo':

if (args.length == 0) return replyNya(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
sticWait(from)
                    query = args.join(" ")
                    kohr = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${lolkey}&url=${query}`)
                    kohl = kohr.result
                    ini_txt = `Title : ${kohl.title}\n`
                    ini_txt += `Duration : ${kohl.duration}\n`
                    ini_txt += `View : ${kohl.view}\n`
                    ini_txt += `Rating : ${kohl.rating}\n`
                    ini_txt += `Like : ${kohl.like}\n`
                    ini_txt += `Dislike : ${kohl.dislike}\n`
                    ini_txt += `Comment : ${kohl.comment}\n`
                    ini_txt += `Tag : ${kohl.tag.join(", ")}\n`
                    ini_txt += `Description : ${kohl.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = kohl.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    fott = await getBuffer(kohl.thumbnail)
                    await kenn.sendMessage(m.chat, { image: fott, caption: ini_txt }, { quoted: fakekenn})                  
                    break
case 'tiktokmp3': case 'tiktokaudio': {

if (!text) return reply(`Link Nya Kak???`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
sticWait(from)
let res = await hxz.ttdownloader(args[0])
kenn.sendMessage(from, { audio: { url: res.nowm }, mimetype: 'audio/mp4', ptt:true, contextInfo:{externalAdReply:{
title: `Hai Kak ${pushname}`,
body: `KennBot MD`,
thumbnail: ppnyauser,
mediaType:2,
mediaUrl: "https://github.com/AnjusGans",
sourceUrl: "https://github.com/AnjusGans"
}}}, { quoted: m })
}
break
case 'tiktok': case 'tiktoknowm': {

if (!text) throw 'Masukkan Query Link!'
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`Link Error`)
sticWait(from)
let anu = await hxz.ttdownloader(args[0])
let message = await prepareWAMessageMedia({ video : { url: anu.nowm } }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: `Download From ${text}`,
hydratedFooterText: `Klik Button Di Bawah`,
hydratedButtons: [{ urlButton: { displayText: 'Source Video', url: `${args[0]}` } },
{ quickReplyButton: { displayText: '⇄   ◃◃   ⅠⅠ   ▹▹   ↻', id: `${prefix}tiktokaudio ${args[0]}` } }]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'yts': case 'ytsearch':

if (args.length < 1) return replyNya(`Contoh:\n${command} bukti Virgoun`)
let list_rows = [];
let yts = require("yt-search")
const data = await yts(q);
for(let a of data.all) {
list_rows.push({
title: a.title, description: `Channel: ${a.author.name} | Durasi: ${a.duration}`, rowId: `${prefix}play ${a.url}`
})
}
    const button = {
        title: `Hasil Pencarian Dari ${q}`,
        description: "Silahkan Tap Tombol Dibawah!",
        footerText: `Create By KennBot MD`,
        buttonText: 'Tap Disini!',
        listType: 'SINGLE_SELECT',
        sections: [
            {
                title: "Hasil Pencarian", 
                rows: list_rows
            }
        ]
        }
        const templateList = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ "listMessage": button }), {});
        kenn.relayMessage(m.chat, templateList.message, { messageId: templateList.key.id });
break
case 'hentai':
case 'ahegao':
case 'ass':
case 'bdsm':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'masturbation':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':{

sticWait(from)
let cndn = await fetchJson(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/${command}.json`)
let random = cndn[Math.floor(Math.random() * cndn.length)]
kenn.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekenn })
}
break
case 'wallpaperislami':{

sticWait(from)
let kcle = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Islamic.json`)
let random = kcle[Math.floor(Math.random() * kcle.length)]
kenn.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekenn })
}
break
case 'wallpaperinori':{

sticWait(from)
let kuxe = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/inori-pic.json`)
let random = kuxe[Math.floor(Math.random() * kuxe.length)]
kenn.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekenn })
}
break
case 'wallpapercyber':{

sticWait(from)
let xpwl = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/CyberSpace.json`)
let random = xpwl[Math.floor(Math.random() * xpwl.length)]
kenn.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekenn })
}
break
case 'waifu':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'wallml':{

sticWait(from)
let eek = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
kenn.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekenn })
}
break
case 'wallpaperteknologi':{

sticWait(from)
let toth = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Technology.json`)
let random = toth[Math.floor(Math.random() * toth.length)]
kenn.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekenn })
}
break
case 'wallpaperanime':{

sticWait(from)
let tozs = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/anime-wallpaper-pic.json`)
let random = tozs[Math.floor(Math.random() * tozs.length)]
kenn.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekenn })
}
break
case 'wallpapergamer':{

sticWait(from)
let toew = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/GameWallp.json`)
let random = toew[Math.floor(Math.random() * toew.length)]
kenn.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekenn })
}
break
case 'wallpaperprogamer':{

sticWait(from)
let xeke = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Programming.json`)
let random = xeke[Math.floor(Math.random() * xeke.length)]
kenn.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekenn })
}
break
case 'wallpapermeme':{

sticWait(from)
let crkr = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/meme.json`)
let random = crkr[Math.floor(Math.random() * crkr.length)]
kenn.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekenn })
}
break
case 'wallpaper':{

sticWait(from)
let crpe = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Mountain.json`)
let random = crpe[Math.floor(Math.random() * crpe.length)]
kenn.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: fakekenn })
}
break
case 'ppcouple': {

sticWait(from)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
kenn.sendMessage(m.chat, { image: { url: random.male }, caption: `Foto Couple Male` }, { quoted: fakekenn })
kenn.sendMessage(m.chat, { image: { url: random.female }, caption: `Fofo Couple Female` }, { quoted: fakekenn })
}
break
case 'tiktokstalk':{

if (args.length == 0) return replyNya(`Example: ${prefix + command} namatt`)
sticWait(from)
ttk = args.join(" ")
csksyb = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${ttk}?apikey=${lolkey}`)
csksyl = csksyb.result
txt = `Username : ${csksyl.username}\n`
txt += `Nickname : ${csksyl.nickname}\n`
txt += `Bio : ${csksyl.bio}\n`
txt += `Followers : ${csksyl.followers}\n`
txt += `Following : ${csksyl.followings}\n`
txt += `Likes : ${csksyl.likes}\n`
txt += `Vidio : ${csksyl.video}\n`
buffer = await getBuffer(csksyl.user_picture)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'githubstalk':{

if (args.length == 0) return replyNya(`Example: ${prefix + command} namagh`)
sticWait(from)
ghk = args.join(" ")
csksdke = await fetchJson(`http://api.lolhuman.xyz/api/github/${ghk}?apikey=${lolkey}`)
csksdah = csksdke.result
txt = `Full : ${csksdah.name}\n`
txt += `Followers : ${csksdah.followers}\n`
txt += `Following : ${csksdah.following}\n`
txt += `Publick : ${csksdah.public_repos}\n`
txt += `Public Gits : ${csksdah.public_gists}\n`
txt += `User : ${csksdah.user}\n`
txt += `Compi : ${csksdah.company}\n`
txt += `Lokasi : ${csksdah.location}\n`
txt += `Email : ${csksdah.email}\n`
txt += `Bio : ${csksdah.bio}\n`
buffer = await getBuffer(csksdah.avatar)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'igstalk':{

if (args.length == 0) return replyNya(`Example: ${prefix + command} namaig`)
sticWait(from)
igk = args.join(" ")
deshd = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${igk}?apikey=${lolkey}`)
deshxs = deshd.result
txt = `Link : https://www.instagram.com/${deshxs.username}\n`
txt += `Full : ${deshxs.fullname}\n`
txt += `Post : ${deshxs.posts}\n`
txt += `Followers : ${deshxs.followers}\n`
txt += `Following : ${deshxs.following}\n`
txt += `Bio : ${deshxs.bio}\n`
buffer = await getBuffer(deshxs.photo_profile)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'ytstalk':

if (args.length == 0) return replyNya(`Example: ${prefix + command} namachannel`)
sticWait(from)
ytk = args.join(" ")
anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${ytk}`)
cari = '↻↻↻↻↻\n'
for (let search of anu.result) {
cari += `Chanel : ${search.channel_name}\nTentang : ${search.channel_about}\nCreated : ${search.channel_created}\nLink : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
}
replyNya(cari.trim())
break
case 'spotify':

                    if (args.length == 0) return replyNya(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    sticWait(from)
                    url = args[0]
                    let get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
let thumbnail = await getBuffer(get_result.thumbnail)
kenn.sendMessage(m.chat, { image: thumbnail, caption: ini_txt }, { quoted: fakekenn})
break
case 'pacarserti':{

if (args.length == 0) return reply(`Contoh: ${prefix + command} Nama1 Nama2`)
sticWait(from)
txt1 = args[0]
txt2 = args[1]
wehw = await getBuffer(`https://api.lolhuman.xyz/api/pacarserti?apikey=${lolkey}&name1=${txt1}&name2=${txt2}`)
let message = await prepareWAMessageMedia({ image: wehw }, { upload: kenn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Nih Kak`,
hydratedFooterText: 'KennBot MD',
hydratedButtons: [{
urlButton: {
displayText: '🐈‍⬛ Github',
url: 'https://github.com/AnjusGans'
}
},
{
urlButton: {
displayText: '👑 Owner',
url: `${wame}`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
kenn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'inspect': {
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
kenn.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `     「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await kenn.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
kenn.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await kenn.parseMention(tekse) })
})
}
case 'randomnama':

anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
replyNya(anu.result)
break
default:
}

if (budy.startsWith('=>')) {
if (!isCreator) return replyNya(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return replyNya(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('<')) {
if (!isCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('$')){
if (!isCreator) return reply(mess.owner)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

} catch (err) {
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})