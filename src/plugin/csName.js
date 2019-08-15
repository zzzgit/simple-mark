const plugin = {
	name: "csName",
	type: "replace",
	compile(segment) {
		return `${segment}{{cs_name}}`
	},
	render(str, config) {
		let result = str
		result = result.replace(/\{\{cs_name\}\}/g, config["csName"])
		return result
	},
}

export default plugin


