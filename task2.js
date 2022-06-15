const chalk = require("chalk")

const reverseWord = (str) => {
    if(Number.parseInt(str) + 1 == str + 1|| str == "") {
        return chalk.red("tolong masukan kalimat")
    }
    let kata = str.split(" ")
    return chalk.blue(kata.reverse().join(" "))
}

// console.log(reverseWord("Saya Belajar Jvascript"))

module.exports = {reverseWord}