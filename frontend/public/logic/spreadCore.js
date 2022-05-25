const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);

import * as Utils from './utils.js'
import { getEl } from "./dom-manipulation-main"
import { Car } from "../../fragments/Car"

const spreadCoreBtn = getEl('#spreadCoreBtn')[0]
console.log('spreadCoreBtn: ', spreadCoreBtn)
spreadCoreBtn.addEventListener('click', e => {
    let myCar1 = new Car("Knight XV", 2022);
    let myCar2 = new Car("McLaren", 2023);
    let cars = []

    cars.push(myCar1)
    cars.push(myCar2)
    console.table(cars)

    const outputEl = getEl('#output')[0]
    cars.forEach(car => {
        let singleOutput = document.createElement('div')

        let singleItem = car.el.textToHTML(`${car.el}`)
        outputEl.append(singleItem)


        // let spreadListItem = document.createElement('div')
        // spreadListItem.classList.add('spread-list-item')
        // let spreadListItemHeader = document.createElement('h6')
        // spreadListItemHeader.innerText = car.name
        // let spreadListItemData = document.createElement('p')
        // spreadListItemData.innerText = car.year

        // spreadListItem.appendChild(spreadListItemHeader)
        // spreadListItem.appendChild(spreadListItemData)
        // outputEl.appendChild(spreadListItem)
    })

    console.log('myCar1: ', myCar1)
    console.log('myCar2: ', myCar2)
})

function readFile(file) {
    let fileReader = new FileReader()
    // fileReader.readAsArrayBuffer(file);
    fileReader.readAsText(file);
    fileReader.onload = function () {

        const outputEl = document.getElementById('output')
        outputEl.innerText = fileReader.result
        // alert(fileReader.result);
    };
    fileReader.onerror = function () {
        alert(fileReader.error);
    };
}


/* READ FILES AS HTML */
var support = (function () {
    if (!window.DOMParser) return false;
    var parser = new DOMParser();
    try {
        parser.parseFromString('x', 'text/html');
    } catch (err) {
        return false;
    }
    return true;
})();

var textToHTML = function (str) {

    // check for DOMParser support
    if (support) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(str, 'text/html');
        return doc.body.innerHTML;
    }

    // Otherwise, create div and append HTML
    var dom = document.createElement('div');
    dom.innerHTML = str;
    return dom;

};


let num = 24
const numNum = Utils.double(num)

console.log('numNum: ', numNum)
console.log('name: ', Utils.name)
console.log('age: ', Utils.age)
console.log('address: ', Utils.address)
console.log('devices: ', Utils.devices)
console.table(Utils.devices)


Utils.fullName('WideSpread', 'User')
Utils.help1b()
Utils.help2a()
Utils.help2b()
