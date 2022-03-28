let handler = function (m) {
	this.sendContact(m.chat, '6285754180729', 'Owner Bot Fahzz :)', m)
}

handler.customPrefix = ['Owner bot'] 
handler.command = new RegExp

module.exports = handler
