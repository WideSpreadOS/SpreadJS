// Export Default - Can only be used once per module (mainly a class or a function)
export default function sayName() {
    console.log('Spread User!')
}
// Export Variables
export const name = 'Double Number'
export const age = 18
export const address = {
    street: '123 Main St',
    city: 'SpreadCity',
    state: 'FL',
    zip: '32121',
    country: 'United States'
}
export const devices = [
    'SpreadSet',
    'SpreadShield',
    'SpreadMirror',
    'FlexFloor',
]

// Export Functions

export function double(n) {
    return n * 2
}


// Export other modules from this file
export { fullName, help1b } from './helper1.js'
export { help2a, help2b } from './helper2.js'