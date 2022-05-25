/* 


DOM-MANIPULATION ASSETS


    Templates

        console.log CSS
        console.log(`%c<ENTER_CONSOLE_LOG_DATA_HERE>`, `color:lightskyblue;font-family:system-ui;font-size:1.3rem;-webkit-text-stroke: 1px black;font-weight:bold`)
        console.log("hi %c", "background: url('../assets/img/check.png') 0 0 no-repeat; padding-left: 20px;");


    Notes



    Refrences


    Other





*/





/* DOM-MANIPULATION JS BEGIN */
// console.log(`%c\n\n\n(Defered)`, `color:orangered;font-family:system-ui;font-size:1rem;-webkit-text-stroke: 0px black;font-weight:regular`)
// console.log(`%c\nREACHED DOM-MANIPULATION.JS\n\n\n`, `color:lime;font-family:system-ui;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold; border-bottom: solid 2px lime;`)



/* 
    SpreadJS Selectors (REPLACES: document.getElementBy[Id, ClassName, TagName]('') & document.[querySelector, querySelctorAll]('') )

    getEl()
*/

// Imports

import { getEl } from "./dom-manipulation-main"

// SpreadApp Containers & Logic

const backstageEl = getEl('#spreadAppBackstage')[0]
const spreadAppEl = getEl('#spreadApp')[0]
const ON_OFF = getEl('#ON_OFF_CONTROLS')[0]



ON_OFF.addEventListener('click', e => {
    spreadAppEl.classList.toggle('on')
    spreadAppEl.classList.toggle('off')
})


/* DOM-MANIPULATION JS END */
let imageArray = []
const imageDataEl = getEl("#spreadAppData")[0]
const imageBackstageEl = getEl("#spreadAppBackstageImg")[0]
const allImages = getEl("img")
allImages.forEach((img, index) => {
    const imageData = `${allImages[index].getAttribute('src')}`
    const imageElSrc = img.getAttribute('src')
    imageArray.push(imageElSrc)
})


// imageDataEl.appendChild(imageElArray)


imageArray.forEach((img, index) => {

    let imageEl = document.createElement('div')
    imageEl.classList.add('image-data')
    imageEl.setAttribute(`data-backstage-image`, `${index}`)
    let imageElContainer = document.createElement('div')
    imageElContainer.setAttribute(`data-backstage-image-container`, `${index}`)

    imageEl.innerText = img
    imageDataEl.appendChild(imageEl)

})

const allImagesData = getEl('.image-data')

allImagesData.forEach((imgData, index) => {
    imgData.addEventListener('click', e => {

        const parentContainer = getEl('.image-data')
        parentContainer.forEach(parent => {
            const parentIndex = parseInt(parent.getAttribute('data-backstage-image'))
            
            if (parentIndex == index) {
                const currentImageIndex = parseInt(imgData.getAttribute('data-backstage-image'))
                if (currentImageIndex == index) {
                    let imgContainer = document.createElement('img')
                    imgContainer.setAttribute('data-image-id', `image__${index}`)
                    imgContainer.setAttribute('id', `image__${index}`)
                    imgContainer.setAttribute('src', imgData.innerText)
                    imgContainer.classList.add('backstage-image')
                    parent.appendChild(imgContainer)

                    imgContainer.addEventListener('click', e => {
                        const imgContainerAttr = imgContainer.getAttribute('data-image-id')
                        let imgToRemove = getEl(`#${imgContainerAttr}`)
                        parent.remove(imgToRemove)
                    })
                }
                
            }
        })

    })
})


/* 
getEl(document).ready(function () {
    getEl(document).on("click", ".next", function () {
        const currentImg = getEl(".active")
        currentImg.forEach((img, index) => {
        })
        const nextImg = currentImg.next()

        if (nextImg.length) {
            currentImg.removeClass("active").css("z-index", -10)
            nextImg.addClass("active").css("z-index", 10)
        }
    })

    getEl(".prev").on("click", function () {
        const currentImg = getEl(".active")
        const prevImg = currentImg.prev()

        if (prevImg.length) {
            currentImg.removeClass("active").css("z-index", -10)
            prevImg.addClass("active").css("z-index", 10)
        }
    })
})

getEl.get({
    url: "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001",
    success: data => {
        let dataEl = getEl('#apiData')[0]
        data.forEach(item => {

            let itemEl = document.createElement('div')
            itemEl.classList.add('array-item')
            let itemName = document.createElement('p')
            itemName.innerText = `${item.firstName} ${item.lastName}`
            itemEl.appendChild(itemName)
            let itemEmail = document.createElement('a')
            itemEmail.setAttribute('href', `mailto:${item.email}`)
            itemEmail.innerText = item.email
            itemEl.appendChild(itemEmail)

            dataEl.appendChild(itemEl)
        })
    },
})
    .done(data => console.table(data))
    .fail(e => console.error("Fail", e))
    .always(() => console.log("Always"))
 */