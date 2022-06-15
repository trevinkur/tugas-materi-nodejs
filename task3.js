const chalk = require("chalk");

const fazzFood = (harga,diskon,jarak,pajak) => {
    let hargaPotongan = 0;
    let onkir = 5000;
    let hargaPajak = 0;
    let subTotal = 0;
    let potongan = 0;

    if(diskon != "FAZZFOOD50" && diskon != "DITRAKTIR60") {
        return chalk.red("kode diskon salah")
    }

    if(diskon === "FAZZFOOD50") {
        if(harga > 50000) {
            potongan = harga * 50/100;
            potongan > 50000 ? potongan = 50000 : hargaPotongan = harga - potongan;  
        } else {
            return chalk.red("untuk kode diskon ini harga minimal 50 ribu")
        }
    }
    if(diskon === "DITRAKTIR60") {
        if(harga > 25000) {
            let potongan = harga * 60/100;
            potongan > 30000 ? potongan = 30000 : harga -= potongan;
        } else {
            return chalk.red("untuk kode diskon ini harga minimal 25 ribu")
        }
    }
    
    if(jarak >= 2) {
        onkir = onkir + (jarak - 2) * 3000;
    }

    if(pajak) {
        hargaPajak = harga * 5/100
    }

    subTotal = hargaPotongan + onkir + hargaPajak;

    return { harga, potongan, onkir, hargaPajak, subTotal }
    
}

const print = (param) => {
    if(typeof param == "string"){
        return console.log(param)
    }
    console.log(chalk.green(`Harga: ${chalk.white(param.harga)} \nPotongan: ${chalk.white(param.potongan)} \nBiaya Antar: ${chalk.white(param.onkir)} \nPajak: ${chalk.white(param.hargaPajak)} \nsubTotal: ${chalk.white(param.subTotal)}`))
}

// print(fazzFood(75000,"FAZZFOOD50",5,true))

module.exports = {fazzFood,print}