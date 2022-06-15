// import yargs from "yargs"
// import { hideBin } from 'yargs/helpers'
// import { cekPalindrom } from "./task1.js"
// import { reverseWord } from "./task2.js"
// import { fazzFood, print } from "./task3.js"
// import { divideAndSort } from "./task4.js"
const yargs = require("yargs")
const {cekPalindrom} = require("./task1.js");
const { reverseWord } = require("./task2.js");
const { fazzFood , print } = require("./task3.js");
const { divideAndSort } = require("./task4.js");

yargs.command({
    command: "task1",
    desc: "masukan sebuah kata",
    builder: {
        kata: {
            describe: "kata apa saja",
             demandOption: true,
             type: "string"
         } 
     },
    handler(argv) {
        console.log(cekPalindrom(argv.kata));      
    }
})

yargs.command({
    command: "task2",
    desc:  "masukan sebuah kalimat",
    builder: {
        kalimat: {
             describe: "kata apa saja",
             demandOption: true,
             type: "string"
        } 
    },
    handler(argv) {
         console.log(reverseWord(argv.kalimat))      
    }
})

yargs.command({
    command: "task3",
    desc: "masukan harga, diskon, jarak , dan pajak ",
    builder: {
        harga: {
            describe: "harga",
            demandOption: true,
            type: "number"
        },
        diskon: {
            describe: "kode diskon",
            demandOption: true,
            type: "string"
        },
        jarak: {
            describe: "jarak dalam km",
            demandOption: true,
            type: "number"
        },
        pajak: {
            describe: "apakah ada pajak masukan true or false",
            demandOption: true,
            type: "boolean"
        }
    },
    handler(argv) {
        print(fazzFood(argv.harga,argv.diskon,argv.jarak,argv.pajak))       
    }
})

yargs.command({
    command: "task4",
    desc:  "masukan kumpulan angka",
    builder: {
        number: {
            describe: "angka apa saja",
            demandOption: true,
            type: "number"
        } 
    },
    handler(argv) {
        console.log(divideAndSort(argv.number));      
    }
})

yargs.parse()

