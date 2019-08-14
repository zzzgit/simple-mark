const plugin = {
	name: "color",
	type: "bound",
	affix: "color",
	compile(segment, options) {
		if (!options) {
			throw new Error(`[simple-markdown][color][compile]: options is required`)
		}
		if (!options.color) {
			throw new Error(`[simple-markdown][color][compile]: you must assign a color in options`)
		}
		return `{${this.affix}:${options.color}}${segment}{/${this.affix}}`
	},
	render(str) {
		let result = str
		result = result.replace(/\{color:([^}]+)\}/g, `<span style="color: $1" class='md md_color'>`)
		result = result.replace(/\{\/color\}/g, "</span>")
		return result
	},
}

export default plugin
