const divideAndSort = (num) => {
    const arrNum = num.toString().split("0");
    return arrNum.map((item) => {
        return item.split("").sort((a,b) => {
            return a - b
        }).join("")
    }).join("0")
}

divideAndSort(99837089709829)

module.exports = {divideAndSort}