const plugin = {
	name: "csName",
	type: "replace",
	compile(segment) {
		return `${this.segment}{{cs_name}}`
	},
	render(str, config) {
		let result = str
		result = result.replace(/\{\{cs_name_name\}\}/g, config["csName"])
		return result
	},
}

export default plugin


