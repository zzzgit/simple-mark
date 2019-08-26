const plugin = {
	name: "line",
	type: "other",
	render(str) {
		const paragraph_arr = str.split(/[\r\n]{2}/)
		const temp = paragraph_arr.map((p)=>{
			p = p.replace(/[\r\n]+/g, "<br>")
			return `<p>${p}</p>`
		})
		return temp.join("")
	},
}

export default plugin

