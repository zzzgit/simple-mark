const plugin = {
	name: "emoji",
	type: "replace",
	render(str) {
		if (!str) {
			return str
		}
		return str.replace(/\$::(\d+)::\$/, '<img src="/static/emoji/$1.gif">')
	},
}

export default plugin


