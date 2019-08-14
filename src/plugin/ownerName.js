const plugin = {
	name: "ownerName",
	type: "replace",
	compile(segment) {
		return `${segment}{{owner_name}}`
	},
	render(str, config) {
		let result = str
		result = result.replace(/\{\{owner_name\}\}/g, config["ownerName"])
		return result
	},
}

export default plugin


