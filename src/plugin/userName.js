const plugin = {
	name: "userName",
	type: "replace",
	compile(segment) {
		return `${segment}{{user_name}}`
	},
	render(str, config) {
		let result = str
		result = result.replace(/\{\{user_name\}\}/g, config["userName"])
		return result
	},
}

export default plugin


