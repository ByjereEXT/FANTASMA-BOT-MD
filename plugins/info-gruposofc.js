let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*𝙷𝙾𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 👋🏻, 𝚃𝙴 𝙸𝙽𝚅𝙸𝚃𝙾 𝙰 𝚄𝙽𝙸𝚁𝚃𝙴 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾 𝙾𝙵𝙸𝙲𝙸𝙰𝙻 𝙳𝙴 𝙵𝙰𝙽𝚃𝙰𝚂𝙼𝙰 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚅𝙸𝚅𝙸𝚁 𝙲𝙾𝙽 𝙻𝙰 𝙲𝙾𝙼𝚄𝙽𝙸𝙳𝙰𝙳 :𝙳*

*➤ 𝙶𝚛𝚞𝚙𝚘 𝚘𝚏𝚒𝚌𝚒𝚊𝚕 𝚍𝚎𝚕 𝙱𝚘𝚝:*
*1.-* https://chat.whatsapp.com/C6bYPddiknm1qLc1CCwpBQ


`.trim(), wm, media, [['💟 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 💟', '#menu']], m)
handler.command = /^linkgp|grupos$/i
export default handler
