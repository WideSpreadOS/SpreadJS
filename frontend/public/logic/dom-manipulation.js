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
console.log(`%c\n\n\n(Defered)`, `color:orangered;font-family:system-ui;font-size:1rem;-webkit-text-stroke: 0px black;font-weight:regular`)
console.log(`%c\nREACHED DOM-MANIPULATION.JS\n\n\n`, `color:lime;font-family:system-ui;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold; border-bottom: solid 2px lime;`)



/* 
    SpreadJS Selectors (REPLACES: document.getElementBy[Id, ClassName, TagName]('') & document.[querySelector, querySelctorAll]('') )

    getById()
    getByClass()
    getByTag()
    getFirstEl()
    getAllEls()

*/



// SpreadApp Containers & Logic

const backstageEl = getById('spreadAppBackstage')
const spreadAppEl = getById('spreadApp')
const ON_OFF = getById('ON_OFF_CONTROLS')

console.log(backstageEl)
console.log(spreadAppEl)
console.log(ON_OFF)

ON_OFF.addEventListener('click', e => {
    console.log('CLICK', e.target)
    spreadAppEl.classList.toggle('on')
    spreadAppEl.classList.toggle('off')
})





/* DOM-MANIPULATION JS END */