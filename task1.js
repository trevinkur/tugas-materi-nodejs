const chalk = require("chalk")

const cekPalindrom = (str) => {
    if(Number.parseInt(str) + 1 == str + 1 || str == "") {
        return chalk.red("tolong masukan kata")
    }

    let hasil = ""
    for(let i = str.length - 1; i >= 0;i-- ) {
        hasil += str[i]
    }
  
    if(hasil === str) {
        return chalk.blue("Palindrom")
    }
    return chalk.yellow("bukan Palindrom")
}

// console.log(cekPalindrom("malam"))

module.exports =  { cekPalindrom } 
