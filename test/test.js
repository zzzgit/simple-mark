const me = require('../dist')

let compiled = ""
let original = "mmmmm"
compiled += me.compile(original, "color", {color: "red"})
console.log(compiled)

original = "kkkkk"
compiled += me.compile(original, "bold")
console.log(compiled)

original = "jjjjj"
compiled += me.compile(original, "userName")

console.log(compiled)


console.log(me.render(compiled, {userName: "大發財"}))
