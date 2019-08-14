const bbb = {
	register(markdown){
		//
	},
	compile(segment){
		return 333
	},
	render(str){
		let bbbbb = str.replace(/\$color:red\$(.*)\$color:end/, `<span style="color: red">$1</span>`)
	}
}

module.exports = bbb
