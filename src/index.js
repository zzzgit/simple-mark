import markdown from "./markdown"
import color from "./plugin/color"
import bold from "./plugin/bold"
import userName from "./plugin/userName"
import ownerName from "./plugin/ownerName"
import csName from "./plugin/csName"
import line from "./plugin/line"
import sanitize from "./plugin/sanitize"
import emoji from "./plugin/emoji"

markdown.use(color).use(bold)
	.use([userName, ownerName, csName])
	.use(line)
	.use(sanitize)
	.use(emoji)

export default markdown
