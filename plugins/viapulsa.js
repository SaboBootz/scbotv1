let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Gopay
╠➥ *085754180729*
╠➥ Chat Owner:
║- wa.me/6285754180729
╠═〘 FAHZBOT 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viagopay']
handler.tags = ['info']
handler.command = /^viagopay$/i

module.exports = handler
