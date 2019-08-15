const noop = str => str

const markdown = {
	compilers: {},
	renderers: {
		bound: [],
		replace: [],
	},
	compile(segment, instruction, options) {
		const compiler = this.compilers[instruction]
		if (!compiler) {
			throw new Error(`[simple-markdown][compile]: no such compiler registered: ${instruction}`)
		}
		return compiler(segment || "", options)
	},
	render(str, config) {
		if (!config) {
			config = {}

			// throw new Error(`[simple-markdown][render]: config must be supplied`)
		}
		let result = str || ""
		this.renderers.bound.forEach((render)=>{
			result = render(result, config)
		})
		this.renderers.replace.forEach((render)=>{
			result = render(result, config)
		})
		return result
	},
	use(plugins) {
		if (!Array.isArray(plugins)) {
			plugins = [plugins]
		}
		plugins.forEach((plugin)=>{
			if (!plugin) {
				throw new Error(`[simple-markdown][use]: the argument passed into 'use' method is not a valid plugin`)
			}
			if (!plugin) {
				throw new Error(`[simple-markdown][use]: the argument passed into 'use' method is not a valid plugin`)
			}
			if (plugin.beforeRegister) {
				plugin.beforeRegister(this)
			}
			this.compilers[plugin.name] = plugin.compile.bind(plugin)
			const renderers = this.renderers[plugin.type]
			renderers.push(plugin.render.bind(plugin) || noop)
			if (plugin.afterRegister) {
				plugin.afterRegister(this)
			}
		})
		return this
	},
}

export default markdown
