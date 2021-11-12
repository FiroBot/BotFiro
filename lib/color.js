const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const XinzLog = (text, color) => {
	kembali   !  warna   ?   kapur . kuning ( '[FIRO] ' ) +   kapur . hijau ( teks ) : kapur . kuning ( '[FIRO] ' ) +   kapur . kata  kunci ( warna ) ( teks )
}

module.exports = {
	color,
	bgcolor,
	
}
