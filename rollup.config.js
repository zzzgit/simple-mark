/* eslint-env node */
const path = require("path")
const pkg = require("./package.json")

module.exports = {
	input: path.resolve(__dirname, "./src/index.js"),
	output: {
		file: path.resolve(__dirname, pkg.main),
		format: "cjs",
		name: "simple_markdown",
		banner: "/* eslint-disable */",
	},
	plugins: [
	],
}
