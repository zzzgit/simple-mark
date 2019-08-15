const plugin = {
	name: "bold",
	type: "bound",
	affix: "bold",
	compile(segment) {
		return `{${this.affix}}${segment}{/${this.affix}}`
	},
	render(str) {
		let result = str
		result = result.replace(/\{bold\}/g, "<span class='md md_bold'>")
		result = result.replace(/\{\/bold\}/g, "</span>")
		return result
	},
}

export default plugin

