let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '*[ ⚠️ ] ɪɴɢʀᴇsᴇ ᴇʟ ɴᴜᴍᴇʀᴏ ᴀʟ ᴄᴜᴀʟ sᴇ ʟᴇ ʜᴀʀᴀ ᴇʟ sᴘᴀᴍ ᴅᴇ ᴍᴇɴsᴀᴊᴇs!*\n*ᴜsᴏ ᴄᴏʀʀᴇᴄᴛᴏ:*\n*—◉ .spamwa numero|texto|cantidad*\n*ᴇᴊᴇᴍᴘʟᴏ:*\n*—◉ .spamwa 19894000000|fantasmin|25*'
if (!pesan) throw '*[ ⚠️ ] ᴘᴏʀ ғᴀᴠᴏʀ ɪɴɢʀᴇsᴇ ᴇʟ ᴍᴇɴsᴀᴊᴇ ᴘᴀʀᴀ ʜᴀᴄᴇʀ ᴇʟ sᴘᴀᴍ!*\n*ᴜsᴏ ᴄᴏʀʀᴇᴄᴛᴏ:*\n*—◉ .spamwa numero|texto|cantidad*\n*ᴇᴊᴇᴍᴘʟᴏ:*\n*—◉ .spamwa 19894000000|fantasmin|25*'
if (jumlah && isNaN(jumlah)) throw '*[ ⚠️ ] ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ᴅᴇʙᴇ sᴇʀ ᴜɴ ɴᴜᴍᴇʀᴏ!*\n*ᴜsᴏ ᴄᴏʀʀᴇᴄᴛᴏ:*\n*—◉ .spamwa numero|texto|cantidad*\n*ᴇᴊᴇᴍᴘʟᴏ:*\n*—◉ .spamwa 19894000000|fantasmin|25*'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw '*[ ⚠️ ] ᴅᴇᴍᴀsɪᴀᴅᴏs ᴍᴇɴsᴀᴊᴇs﹗ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ᴅᴇʙᴇ sᴇʀ ᴍᴇɴᴏʀ ᴀ ₅₀ ᴍᴇɴsᴀᴊᴇs*️'
await m.reply(`*[❗] ᴇʟ sᴘᴀᴍ ᴅᴇ ᴍᴇɴsᴀᴊᴇs ᴀʟ ɴᴜᴍᴇʀᴏ ${nomor} ғᴜᴇ ʀᴇᴀʟɪᴢᴀᴅᴏ ᴄᴏɴ ᴇxɪᴛᴏ*\n*ᴄᴀɴᴛɪᴅᴀᴅ ᴇɴᴠɪᴀᴅᴀ:*\n*—◉ ${fixedJumlah} ᴠᴇᴄᴇs!*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.private = true
handler.limit = true
export default handler
