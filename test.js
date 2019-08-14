const me = require('./src')
const bold = require("./src/plugin/bold")

me.use(bold)

me.render("{{owner}}")
