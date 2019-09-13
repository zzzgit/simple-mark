const plugin = {
	name: "sanitize",
	type: "replace",
	priority: 99,
	render(str) {
		if (!str) {
			return ""
		}
		return str.replace(/</g, "&lt;").replace(/>/g, "&gt;")
	},
}

export default plugin

