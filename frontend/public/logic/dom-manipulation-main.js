console.log(`%c\nREACHED DOM-MANIPULATION-MAIN.JS`, `color:lime;font-family:system-ui;font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold; border-bottom: solid 2px lime;`)



/* DOM-MANIPULATION START */

class ElementCollection extends Array {

}

function getById(param) {
    if (typeof param === 'string' || param instanceof String) {
        return new ElementCollection(document.getElementById(param))[0]
    } else {
        return new ElementCollection(param)
    }
}

function getByClass(param) {
    if (typeof param === 'string' || param instanceof String) {
        return new ElementCollection(...document.getElementsByClassName(param))
    } else {
        return new ElementCollection(param)
    }
}

function getByTag(param) {
    if (typeof param === 'string' || param instanceof String) {
        return new ElementCollection(...document.getElementsByTagName(param))
    } else {
        return new ElementCollection(param)
    }
}

function getFirstEl(param) {
    if (typeof param === 'string' || param instanceof String) {
        return new ElementCollection(...document.querySelector(param))
    } else {
        return new ElementCollection(param)
    }
}

function getAllEls(param) {
    if (typeof param === 'string' || param instanceof String) {
        return new ElementCollection(...document.querySelectorAll(param))
    } else {
        return new ElementCollection(param)
    }
}





/* DOM-MANIPULATION END */