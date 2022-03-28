let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Dana
╠➥ *085754180729*
║- Owner Bot:
║- wa.me/6285754180729
╠═〘 FAHZBOT 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viadigi']
handler.tags = ['info']
handler.command = /^viadigi$/i

module.exports = handler
