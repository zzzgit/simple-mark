import markdown from "./markdown"
import color from "./plugin/color"
import bold from "./plugin/bold"
import userName from "./plugin/userName"
import csName from "./plugin/csName"
import line from "./plugin/line"

markdown.use(color).use(bold)
	.use([userName, csName])
	.use(line)

export default markdown
