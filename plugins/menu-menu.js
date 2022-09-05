import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
﹡ミ ❗️ʜᴏʟᴀ﹐✨${name}✨ᴀϙᴜɪ ᴇsᴛᴀ ᴇʟ ᴍᴇɴᴜ ᴄᴏᴍᴘʟᴇᴛᴏ ᴅᴇ ғᴀɴᴛᴀsᴍᴀ﹣ʙᴏᴛ ❗️彡﹡

*📅 ғᴇᴄʜᴀ: ${week}, ${date}*
*📈 ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ : ${uptime}*
*📊 ᴜsᴜᴀʀɪᴏs : ${rtotalreg}*

﹡< ɪɴғᴏʀᴍᴀᴄɪᴏɴ ᴅᴇʟ ʙᴏᴛ />﹡

° ඬ ⃟ 💟 ${usedPrefix}grupos
° ඬ ⃟ 💟 ${usedPrefix}estado
° ඬ ⃟ 💟 ${usedPrefix}infobot
° ඬ ⃟ 💟 ${usedPrefix}donar
° ඬ ⃟ 💟 ${usedPrefix}grouplist
° ඬ ⃟ 💟 ${usedPrefix}owner
° ඬ ⃟ 💟 ${usedPrefix}script
° ඬ ⃟ 💟 Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)

﹡< ᴜɴᴇ ᴀ ғᴀɴᴛᴀsᴍᴀ﹣ʙᴏᴛ ᴀ ᴛᴜ ɢʀᴜᴘᴏ  />﹡

° ඬ⃟👽 ${usedPrefix}join *<enlace / link / url>*

﹡<ᴊᴜᴇɢᴏs/>﹡

° ඬ⃟🎖️ ${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*
° ඬ⃟🎖️ ${usedPrefix}ppt *<papel / tijera /piedra>*
° ඬ⃟🎖️ ${usedPrefix}prostituto *<nombre / @tag>*
° ඬ⃟🎖️ ${usedPrefix}prostituta *<nombre / @tag>*
° ඬ⃟🎖️ ${usedPrefix}gay2 *<nombre / @tag>*
° ඬ⃟🎖️ ${usedPrefix}lesbiana *<nombre / @tag>*
° ඬ⃟🎖️ ${usedPrefix}pajero *<nombre / @tag>*
° ඬ⃟🎖️ ${usedPrefix}pajera *<nombre / @tag>*
° ඬ⃟🎖️ ${usedPrefix}puto *<nombre / @tag>*
° ඬ⃟🎖️ ${usedPrefix}puta *<nombre / @tag>*
° ඬ⃟🎖️ ${usedPrefix}manco *<nombre / @tag>*
° ඬ⃟🎖️ ${usedPrefix}manca *<nombre / @tag>*
° ඬ⃟🎖️ ${usedPrefix}rata *<nombre / @tag>*
° ඬ⃟🎖️ ${usedPrefix}love *<nombre / @tag>*
° ඬ⃟🎖️ ${usedPrefix}doxear *<nombre / @tag>*
° ඬ⃟🎖️ ${usedPrefix}pregunta *<texto>*
° ඬ⃟🎖️ ${usedPrefix}suitpvp *<@tag>*
° ඬ⃟🎖️ ${usedPrefix}slot *<apuesta>*
° ඬ⃟🎖️ ${usedPrefix}ttt *<nombre sala>*
° ඬ⃟🎖️ ${usedPrefix}delttt
° ඬ⃟🎖️ ${usedPrefix}simi *<texto>*
° ඬ⃟🎖️ ${usedPrefix}top *<texto>*
° ඬ⃟🎖️ ${usedPrefix}topgays
° ඬ⃟🎖️ ${usedPrefix}topotakus
° ඬ⃟🎖️ ${usedPrefix}formarpareja
° ඬ⃟🎖️ ${usedPrefix}verdad
° ඬ⃟🎖️ ${usedPrefix}reto
° ඬ⃟🎖️ ${usedPrefix}cancion
° ඬ⃟🎖️ ${usedPrefix}pista

*<ᴀᴄᴛɪᴠᴀʀ ᴏ ᴅᴇsᴀᴄᴛɪᴠᴀʀ/>﹡

° ඬ⃟☑️ ${usedPrefix}enable *welcome*
° ඬ⃟☑️ ${usedPrefix}disable *welcome*
° ඬ⃟☑️ ${usedPrefix}enable *modohorny*
° ඬ⃟☑️ ${usedPrefix}disable *modohorny*
° ඬ⃟☑️ ${usedPrefix}enable *antilink*
° ඬ⃟☑️ ${usedPrefix}disable *antilink*
° ඬ⃟☑️ ${usedPrefix}enable *antilink2*
° ඬ⃟☑️ ${usedPrefix}disable *antilink2*
° ඬ⃟☑️ ${usedPrefix}enable *detect*
° ඬ⃟☑️ ${usedPrefix}disable *detect*
° ඬ⃟☑️ ${usedPrefix}enable *audios*
° ඬ⃟☑️ ${usedPrefix}disable *audios*
° ඬ⃟☑️ ${usedPrefix}enable *autosticker*
° ඬ⃟☑️ ${usedPrefix}disable *autosticker*
° ඬ⃟☑️ ${usedPrefix}enable *antiviewonce*
° ඬ⃟☑️ ${usedPrefix}disable *antiviewonce*

﹡<ʀᴇᴘᴏʀᴛᴇs ᴅᴇ ғᴀʟʟᴏs/>﹡

° ඬ⃟🔰 ${usedPrefix}reporte *<texto>*

﹡<ᴅᴇsᴄᴀʀɢᴀs/>﹡

° ඬ⃟📥 ${usedPrefix}facebook *<enlace / link / url>*
° ඬ⃟📥 ${usedPrefix}instagram *<enlace / link / url>*
° ඬ⃟📥 ${usedPrefix}mediafire *<enlace / link / url>*
° ඬ⃟📥 ${usedPrefix}instagram *<enlace / link / url>*
° ඬ⃟📥 ${usedPrefix}gitclone *<enlace / link / url>*
° ඬ⃟📥 ${usedPrefix}stickerpack *<enlace / link / url>*
° ඬ⃟📥 ${usedPrefix}gdrive *<enlace / link / url>*
° ඬ⃟📥 ${usedPrefix}tiktok *<enlace / link / url>*
° ඬ⃟📥 ${usedPrefix}xnxxdl *<enlace / link / url>*
° ඬ⃟📥 ${usedPrefix}xvideosdl *<enlace / link / url>*
° ඬ⃟📥 ${usedPrefix}ytmp3 *<enlace / link / url>*
° ඬ⃟📥 ${usedPrefix}ytmp4 *<enlace / link / url>*
° ඬ⃟📥 ${usedPrefix}ytmp3doc *<enlace / link / url>*
° ඬ⃟📥 ${usedPrefix}ytmp4doc *<enlace / link / url>*
° ඬ⃟📥 ${usedPrefix}play.1 *<texto / enlace / link / url>*
° ඬ⃟📥 ${usedPrefix}play.2 *<texto / enlace / link / url>*
° ඬ⃟📥 ${usedPrefix}play *<texto>*
° ඬ⃟📥 ${usedPrefix}playdoc *<texto>*
° ඬ⃟📥 ${usedPrefix}playlist *<texto>*
° ඬ⃟📥 ${usedPrefix}playlist2 *<texto>*
° ඬ⃟📥 ${usedPrefix}ringtone *<texto>*
° ඬ⃟📥 ${usedPrefix}soundcloud *<texto>*
° ඬ⃟📥 ${usedPrefix}imagen *<texto>*
° ඬ⃟📥 ${usedPrefix}pinteret *<texto>*
° ඬ⃟📥 ${usedPrefix}wallpaper *<texto>*
° ඬ⃟📥 ${usedPrefix}wallpaper2 *<texto>*
° ඬ⃟📥 ${usedPrefix}pptiktok *<nombre de usuario>*
° ඬ⃟📥 ${usedPrefix}igstalk *<nombre de usuario>*
° ඬ⃟📥 ${usedPrefix}igstory *<nombre de usuario>*
° ඬ⃟📥 ${usedPrefix}tiktokstalk *<nombre de usuario>*

﹡<ɢʀᴜᴘᴏs/>﹡

° ඬ⃟💎 ${usedPrefix}add *<numero>*
° ඬ⃟💎 ${usedPrefix}kick *<@tag>*
° ඬ⃟💎 ${usedPrefix}grupo *<abrir / cerrar>*
° ඬ⃟💎 ${usedPrefix}promote *<@tag>*
° ඬ⃟💎 ${usedPrefix}demote *<@tag>*
° ඬ⃟💎 admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
° ඬ⃟💎 ${usedPrefix}demote *<@tag>*
° ඬ⃟💎 ${usedPrefix}infogroup
° ඬ⃟💎 ${usedPrefix}link
° ඬ⃟💎 ${usedPrefix}setname *<texto>*
° ඬ⃟💎 ${usedPrefix}setdesc *<texto>*
° ඬ⃟💎 ${usedPrefix}invocar *<texto>*
° ඬ⃟💎 ${usedPrefix}setwelcome *<texto>*
° ඬ⃟💎 ${usedPrefix}setbye *<texto>*
° ඬ⃟💎 ${usedPrefix}hidetag *<texto>*
° ඬ⃟💎 ${usedPrefix}fantasmas

﹡<ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs/>*

° ඬ⃟🧧 ${usedPrefix}toimg *<responde a un sticker>*
° ඬ⃟🧧 ${usedPrefix}tomp3 *<responde a un video / nota de voz>*
° ඬ⃟🧧 ${usedPrefix}toptt *<responde a un video / audio>*
° ඬ⃟🧧 ${usedPrefix}tovideo *<responde a un sticker>*
° ඬ⃟🧧 ${usedPrefix}tourl *<responde a un video / imagen / audio>*
° ඬ⃟🧧 ${usedPrefix}tts es *<texto>*

﹡<ᴇғᴇᴄᴛᴏs ʏ ʟᴏɢᴏs/>﹡

° ඬ⃟🖍️ ${usedPrefix}logos *<efecto> <texto>*
° ඬ⃟🖍️ ${usedPrefix}logocorazon *<texto>*
° ඬ⃟🖍️ ${usedPrefix}logochristmas *<texto>*
° ඬ⃟🖍️ ${usedPrefix}simpcard *<@tag>*
° ඬ⃟🖍️ ${usedPrefix}hornycard *<@tag>*
° ඬ⃟🖍️ ${usedPrefix}lolice *<@tag>*
° ඬ⃟🖍️ ${usedPrefix}ytcomment *<texto>*
° ඬ⃟🖍️ ${usedPrefix}phmaker *<opcion><responder a imagen>*
° ඬ⃟🖍️ ${usedPrefix}itssostupid
° ඬ⃟🖍️ ${usedPrefix}pixelar
° ඬ⃟🖍️ ${usedPrefix}blur

﹡<ғʀᴀsᴇs ʏ ᴛᴇxᴛᴏs/>﹡

° ඬ⃟🥀 ${usedPrefix}consejo
° ඬ⃟🥀 ${usedPrefix}fraseromantica
° ඬ⃟🥀 ${usedPrefix}historiaromantica

﹡<ʀᴀɴᴅᴏᴍ/>﹡

° ඬ⃟👾 ${usedPrefix}cristianoronaldo
° ඬ⃟👾 ${usedPrefix}messi
° ඬ⃟👾 ${usedPrefix}meme
° ඬ⃟👾 ${usedPrefix}itzy
° ඬ⃟👾 ${usedPrefix}blackpink
° ඬ⃟👾 ${usedPrefix}kpop *<blackpink / exo / bts>*
° ඬ⃟👾 ${usedPrefix}lolivid
° ඬ⃟👾 ${usedPrefix}loli
° ඬ⃟👾 ${usedPrefix}navidad
° ඬ⃟👾 ${usedPrefix}ppcouple
° ඬ⃟👾 ${usedPrefix}wpmontaña
° ඬ⃟👾 ${usedPrefix}pubg
° ඬ⃟👾 ${usedPrefix}wpgaming
° ඬ⃟👾 ${usedPrefix}wpaesthetic
° ඬ⃟👾 ${usedPrefix}wpaesthetic2
° ඬ⃟👾 ${usedPrefix}wprandom
° ඬ⃟👾 ${usedPrefix}wallhp
° ඬ⃟👾 ${usedPrefix}wpvehiculo
° ඬ⃟👾 ${usedPrefix}wpmoto
° ඬ⃟👾 ${usedPrefix}coffee
° ඬ⃟👾 ${usedPrefix}pentol
° ඬ⃟👾 ${usedPrefix}caricatura
° ඬ⃟👾 ${usedPrefix}ciberespacio
° ඬ⃟👾 ${usedPrefix}technology
° ඬ⃟👾 ${usedPrefix}doraemon
° ඬ⃟👾 ${usedPrefix}hacker
° ඬ⃟👾 ${usedPrefix}planeta
° ඬ⃟👾 ${usedPrefix}randomprofile
° ඬ⃟👾 ${usedPrefix}neko
° ඬ⃟👾 ${usedPrefix}waifu
° ඬ⃟👾 ${usedPrefix}akira
° ඬ⃟👾 ${usedPrefix}akiyama
° ඬ⃟👾 ${usedPrefix}anna
° ඬ⃟👾 ${usedPrefix}asuna
° ඬ⃟👾 ${usedPrefix}ayuzawa
° ඬ⃟👾 ${usedPrefix}boruto
° ඬ⃟👾 ${usedPrefix}chiho
° ඬ⃟👾 ${usedPrefix}chitoge
° ඬ⃟👾 ${usedPrefix}deidara
° ඬ⃟👾 ${usedPrefix}erza
° ඬ⃟👾 ${usedPrefix}elaina
° ඬ⃟👾 ${usedPrefix}eba
° ඬ⃟👾 ${usedPrefix}emilia
° ඬ⃟👾 ${usedPrefix}hestia
° ඬ⃟👾 ${usedPrefix}hinata
° ඬ⃟👾 ${usedPrefix}inori
° ඬ⃟👾 ${usedPrefix}isuzu
° ඬ⃟👾 ${usedPrefix}itachi
° ඬ⃟👾 ${usedPrefix}itori
° ඬ⃟👾 ${usedPrefix}kaga
° ඬ⃟👾 ${usedPrefix}kagura
° ඬ⃟👾 ${usedPrefix}kaori
° ඬ⃟👾 ${usedPrefix}keneki
° ඬ⃟👾 ${usedPrefix}kotori
° ඬ⃟👾 ${usedPrefix}kurumi
° ඬ⃟👾 ${usedPrefix}madara
° ඬ⃟👾 ${usedPrefix}mikasa
° ඬ⃟👾 ${usedPrefix}miku
° ඬ⃟👾 ${usedPrefix}minato
° ඬ⃟👾 ${usedPrefix}naruto
° ඬ⃟👾 ${usedPrefix}nezuko
° ඬ⃟👾 ${usedPrefix}sagiri
° ඬ⃟👾 ${usedPrefix}sasuke
° ඬ⃟👾 ${usedPrefix}sakura
° ඬ⃟👾 ${usedPrefix}cosplay

*<ᴄᴏᴍᴀɴᴅᴏs +18/>﹡

° ඬ⃟🔞 ${usedPrefix}pack
° ඬ⃟🔞 ${usedPrefix}pack2
° ඬ⃟🔞 ${usedPrefix}pack3
° ඬ⃟🔞 ${usedPrefix}videoxxx
° ඬ⃟🔞 ${usedPrefix}tiktokxxx
° ඬ⃟🔞 ${usedPrefix}tetas
° ඬ⃟🔞 ${usedPrefix}booty
° ඬ⃟🔞 ${usedPrefix}ecchi
° ඬ⃟🔞 ${usedPrefix}furro
° ඬ⃟🔞 ${usedPrefix}imagenlesbians
° ඬ⃟🔞 ${usedPrefix}panties
° ඬ⃟🔞 ${usedPrefix}pene
° ඬ⃟🔞 ${usedPrefix}porno
° ඬ⃟🔞 ${usedPrefix}porno2
° ඬ⃟🔞 ${usedPrefix}randomxxx
° ඬ⃟🔞 ${usedPrefix}pechos
° ඬ⃟🔞 ${usedPrefix}yaoi
° ඬ⃟🔞 ${usedPrefix}yaoi2
° ඬ⃟🔞 ${usedPrefix}yuri
° ඬ⃟🔞 ${usedPrefix}yuri2
° ඬ⃟🔞 ${usedPrefix}trapito
° ඬ⃟🔞 ${usedPrefix}hentai
° ඬ⃟🔞 ${usedPrefix}nsfwloli
° ඬ⃟🔞 ${usedPrefix}nsfworgy
° ඬ⃟🔞 ${usedPrefix}nsfwfoot
° ඬ⃟🔞 ${usedPrefix}nsfwass
° ඬ⃟🔞 ${usedPrefix}nsfwbdsm
° ඬ⃟🔞 ${usedPrefix}nsfwcum
° ඬ⃟🔞 ${usedPrefix}nsfwero
° ඬ⃟🔞 ${usedPrefix}nsfwfemdom
° ඬ⃟🔞 ${usedPrefix}nsfwglass

﹡<ᴇғᴇᴄᴛᴏs ᴅᴇ ᴀᴜᴅɪᴏs/>﹡
﹡﹣ ʀᴇsᴘᴏɴᴅᴇ ᴀ ᴜɴ ᴀᴜᴅɪᴏ ᴏ ɴᴏᴛᴀ ᴅᴇ ᴠᴏᴢ*

° ඬ⃟🎤 ${usedPrefix}bass
° ඬ⃟🎤 ${usedPrefix}blown
° ඬ⃟🎤 ${usedPrefix}deep
° ඬ⃟🎤 ${usedPrefix}earrape
° ඬ⃟🎤 ${usedPrefix}fast
° ඬ⃟🎤 ${usedPrefix}fat
° ඬ⃟🎤 ${usedPrefix}nightcore
° ඬ⃟🎤 ${usedPrefix}reverse
° ඬ⃟🎤 ${usedPrefix}robot
° ඬ⃟🎤 ${usedPrefix}slow
° ඬ⃟🎤 ${usedPrefix}smooth
° ඬ⃟🎤 ${usedPrefix}tupai

﹡<ᴄʜᴀᴛ ᴀɴᴏɴɪᴍᴏ/>﹡

° ඬ⃟📳 ${usedPrefix}start
° ඬ⃟📳 ${usedPrefix}next
° ඬ⃟📳 ${usedPrefix}leave

*<ʙᴜsᴄᴀᴅᴏʀᴇs/>﹡

° ඬ⃟🔍 ${usedPrefix}stickersearch *<texto>*
° ඬ⃟🔍 ${usedPrefix}xnxxsearch *<texto>*
° ඬ⃟🔍 ${usedPrefix}animeinfo *<texto>*
° ඬ⃟🔍 ${usedPrefix}google *<texto>*
° ඬ⃟🔍 ${usedPrefix}letra *<texto>*
° ඬ⃟🔍 ${usedPrefix}wikipedia *<texto>*
° ඬ⃟🔍 ${usedPrefix}ytsearch *<texto>*
° ඬ⃟🔍 ${usedPrefix}apkdone *<texto>*
° ඬ⃟🔍 ${usedPrefix}apkgoogle *<texto>*
° ඬ⃟🔍 ${usedPrefix}apkmody *<texto>*
° ඬ⃟🔍 ${usedPrefix}apkshub *<texto>*
° ඬ⃟🔍 ${usedPrefix}happymod *<texto>*
° ඬ⃟🔍 ${usedPrefix}hostapk *<texto>*
° ඬ⃟🔍 ${usedPrefix}revdl *<texto>*
° ඬ⃟🔍 ${usedPrefix}toraccino *<texto>*
° ඬ⃟🔍 ${usedPrefix}uapkpro *<texto>*

﹡<ᴀᴜᴅɪᴏs/>﹡ 
﹡﹣ ᴇsᴄʀɪʙᴇ ʟᴀs sɪɢᴜɪᴇɴᴛᴇs ᴘᴀʟᴀʙʀᴀs ᴏ ғʀᴀsᴇs sɪɴ ɴɪɴɢᴜɴ ᴘʀᴇғɪᴊᴏ ﹙﹟﹐ /﹐ ﹡﹐ .﹚﹡ 
_﹙𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜﹚_

° ඬ⃟🔊 Quien es tu sempai botsito 7w7
° ඬ⃟🔊 Te diagnostico con gay
° ඬ⃟🔊 A nadie le importa
° ඬ⃟🔊 Fiesta del admin
° ඬ⃟🔊 Fiesta del administrador 
° ඬ⃟🔊 Vivan los novios
° ඬ⃟🔊 Feliz cumpleaños
° ඬ⃟🔊 Noche de paz
° ඬ⃟🔊 Buenos dias
° ඬ⃟🔊 Buenos tardes
° ඬ⃟🔊 Buenos noches
° ඬ⃟🔊 Audio hentai
° ඬ⃟🔊 Chica lgante
° ඬ⃟🔊 Feliz navidad
° ඬ⃟🔊 Vete a la vrg
° ඬ⃟🔊 Pasa pack Bot
° ඬ⃟🔊 Atencion grupo
° ඬ⃟🔊 Marica quien
° ඬ⃟🔊 Murio el grupo
° ඬ⃟🔊 Oh me vengo
° ඬ⃟🔊 tio que rico
° ඬ⃟🔊 Viernes
° ඬ⃟🔊 Baneado
° ඬ⃟🔊 Sexo
° ඬ⃟🔊 Hola
° ඬ⃟🔊 Un pato
° ඬ⃟🔊 Nyanpasu
° ඬ⃟🔊 Te amo
° ඬ⃟🔊 amete
° ඬ⃟🔊 Bañate
° ඬ⃟🔊 Es puto
° ඬ⃟🔊 La biblia
° ඬ⃟🔊 Onichan
° ඬ⃟🔊 Mierda de Bot
° ඬ⃟🔊 Siuuu
° ඬ⃟🔊 Rawr
° ඬ⃟🔊 UwU
° ඬ⃟🔊 :c
° ඬ⃟🔊 a

﹡<ʜᴇʀʀᴀᴍɪᴇɴᴛᴀs/>﹡

° ඬ⃟🛠️ ${usedPrefix}afk *<motivo>*
° ඬ⃟🛠️ ${usedPrefix}ocr *<responde a imagen>*
° ඬ⃟🛠️ ${usedPrefix}acortar *<enlace / link / url>*
° ඬ⃟🛠️ ${usedPrefix}calc *<operacion math>*
° ඬ⃟🛠️ ${usedPrefix}del *<respondre a mensaje del Bot>*
° ඬ⃟🛠️ ${usedPrefix}whatmusic *<responde a un audio>*
° ඬ⃟🛠️ ${usedPrefix}qrcode *<texto>*
° ඬ⃟🛠️ ${usedPrefix}readmore *<texto1| texto2>*
° ඬ⃟🛠️ ${usedPrefix}spamwa *<numero|texto|cantidad>*
° ඬ⃟🛠️ ${usedPrefix}styletext *<texto>*
° ඬ⃟🛠️ ${usedPrefix}traducir *<texto>*

﹡ <ʀᴘɢ﹣ ʟɪᴍɪᴛᴇ ﹣ ᴇᴄᴏɴᴏᴍɪᴀ/>﹡

° ඬ⃟💵 ${usedPrefix}balance
° ඬ⃟💵 ${usedPrefix}claim
° ඬ⃟💵 ${usedPrefix}lb
° ඬ⃟💵 ${usedPrefix}levelup
° ඬ⃟💵 ${usedPrefix}myns
° ඬ⃟💵 ${usedPrefix}perfil
° ඬ⃟💵 ${usedPrefix}work
° ඬ⃟💵 ${usedPrefix}minar
° ඬ⃟💵 ${usedPrefix}buy
° ඬ⃟💵 ${usedPrefix}buyall
° ඬ⃟💵 ${usedPrefix}transfer *<tipo> <cantidad> <@tag>*
° ඬ⃟💵 ${usedPrefix}verificar
° ඬ⃟💵 ${usedPrefix}unreg *<numero de serie>*

﹡<sᴛɪᴄᴋᴇʀs/>﹡

° ඬ⃟👽 ${usedPrefix}sticker *<responder a imagen o video>*
° ඬ⃟👽 ${usedPrefix}sticker *<enlace / link / url>*
° ඬ⃟👽 ${usedPrefix}s *<responder a imagen o video>*
° ඬ⃟👽 ${usedPrefix}s *<enlace / link / url>*
° ඬ⃟👽 ${usedPrefix}emojimix *<emoji 1>&<emoji 2>*
° ඬ⃟👽 ${usedPrefix}scircle *<responder a imagen>*
° ඬ⃟👽 ${usedPrefix}sremovebg *<responder a imagen>*
° ඬ⃟👽 ${usedPrefix}semoji *<tipo> <emoji>*
° ඬ⃟👽 ${usedPrefix}attp *<texto>*
° ඬ⃟👽 ${usedPrefix}attp2 *<texto>*
° ඬ⃟👽 ${usedPrefix}attp3 *<texto>*
° ඬ⃟👽 ${usedPrefix}ttp *<texto>*
° ඬ⃟👽 ${usedPrefix}ttp2 *<texto>*
° ඬ⃟👽 ${usedPrefix}ttp3 *<texto>*
° ඬ⃟👽 ${usedPrefix}ttp4 *<texto>*
° ඬ⃟👽 ${usedPrefix}ttp5 *<texto>*
° ඬ⃟👽 ${usedPrefix}pat *<@tag>*
° ඬ⃟👽 ${usedPrefix}slap *<@tag>*
° ඬ⃟👽 ${usedPrefix}kiss *<@tag>*
° ඬ⃟👽 ${usedPrefix}dado
° ඬ⃟👽 ${usedPrefix}wm *<packname> <author>*
° ඬ⃟👽 ${usedPrefix}stickermarker *<efecto> <responder a imagen>*
° ඬ⃟👽 ${usedPrefix}stickerfilter *<efecto> <responder a imagen>*

﹡<ᴏɴᴡɴᴇʀ ʏ ᴍᴏᴅᴇʀᴀᴅᴏʀᴇs />﹡

° ඬ⃟👑 ${usedPrefix}cajafuerte
° ඬ⃟👑 ${usedPrefix}enable *restrict*
° ඬ⃟👑 ${usedPrefix}disable *restrict*
° ඬ⃟👑 ${usedPrefix}enable *autoread*
° ඬ⃟👑 ${usedPrefix}disable *autoread*
° ඬ⃟👑 ${usedPrefix}enable *public*
° ඬ⃟👑 ${usedPrefix}disable *public*
° ඬ⃟👑 ${usedPrefix}enable *pconly*_
° ඬ⃟👑 ${usedPrefix}disable *pconly*
° ඬ⃟👑 ${usedPrefix}enable *gconly*
° ඬ⃟👑 ${usedPrefix}disable *gconly*
° ඬ⃟👑 ${usedPrefix}msg *<texto>*
° ඬ⃟👑 ${usedPrefix}banchat_
° ඬ⃟👑 ${usedPrefix}unbanchat
° ඬ⃟👑 ${usedPrefix}banuser *<@tag>*
° ඬ⃟👑 ${usedPrefix}unbanuser *<@tag>*
° ඬ⃟👑 ${usedPrefix}banuser *<@tag>*
° ඬ⃟👑 ${usedPrefix}bc *<texto>*
° ඬ⃟👑 ${usedPrefix}bcchats *<texto>*
° ඬ⃟👑 ${usedPrefix}bcgc *<texto>*
° ඬ⃟👑 ${usedPrefix}cleartpm
° ඬ⃟👑 ${usedPrefix}restart
° ඬ⃟👑 ${usedPrefix}update
° ඬ⃟👑 ${usedPrefix}addprem *<@tag>*
° ඬ⃟👑 ${usedPrefix}delprem *<@tag>*
° ඬ⃟👑 ${usedPrefix}listprem
`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, 'https://www.paypal.me/ElRaptor', '𝙿𝙰𝚈𝙿𝙰𝙻', 'https://Wa.me/527441666666', 'ɴᴜᴍᴇʀᴏ ᴅᴇ ᴍɪ ᴅᴜᴇɴ̃ᴏ ', [
['📮 ᴅᴏɴᴀʀ 📮', '/donasi'],
[' ᴏᴡɴᴇʀ ', '/owner'],
['🐾 ɪɴғᴏʙᴏᴛ 🐾', '/infobot']
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
