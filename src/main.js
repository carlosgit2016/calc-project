/**
 * resolve interpolation with method lagrange
 * @param {*} params 
 */
function calcLagrange(input,table) {
    console.log('%c Calc lagrange','color:red;font-size:2em;');
    throw "Not Implemented"
}

/**
 * resolve interpolation with newton method
 * @param {*} params 
 */
function calcNewton(input,table) {
    console.log('%c Calc Newton','color:red;font-size:2em;');
    throw "Not Implemented"
}

/**
 * retrieve all values table
 * @param {*} params 
 */
function retrieveTable() {
    throw "Not Implemented"
}

/**
 * retrieve input value of {x}
 * @param {*} params 
 */
function retrieveInput() {
    throw "Not Implemented"
}

/**
 * resolve interpolation with method lagrange
 * @param {*} params 
 */
function clearTable() {
    let htmlCollectionTd = document.querySelectorAll('td input');
    let arrayHtmlCollection = [...htmlCollectionTd];
    arrayHtmlCollection.forEach(value => value.value = '');
}