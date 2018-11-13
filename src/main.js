/**
 * resolve interpolation with method lagrange
 * @param {*} params 
 */
function calcLagrange() {
    let values = this.getValues();
    let px = this.getPx();
    let matrix = this.arrayToMatrix(values, 2);
    let final = 0;

    for (let i = 0; i < matrix.length; i++) {
        let actualL = i;
        let result = 1;
        for (let x = 0; x < matrix.length; x++) {
            if (!(x === actualL)) {
                let resultL = (px - matrix[x][0]) / (matrix[actualL][0] - matrix[x][0]);
                result *= resultL;
            }
        }
        final += matrix[i][1] * result;
    }

    alert(`Resultado Final: ${final.toFixed(2)}`)

}

/**
 * resolve interpolation with newton method
 * @param {*} params 
 */
function calcNewton(input, table) {
    console.log('%c Calc Newton', 'color:red;font-size:2em;');
    throw "Not Implemented"
}

/**
 * resolve interpolation with method lagrange
 * @param {*} params 
 */
function clearTable() {
    let table = this.getInputs();
    table.forEach(value => value.value = '');
}

function getPx() {
    return Number(document.querySelector('#px').value);
}

function getInputs() {
    let htmlCollectionTd = document.querySelectorAll('td input');
    let arrayHtmlCollection = [...htmlCollectionTd];
    return arrayHtmlCollection;
}

function getValues() {
    let table = this.getInputs();
    let values = table.filter((input) => {
        return input.value !== "";
    }).map(input => {
        return Number(input.value);
    })

    if (!this.isPair(values)) {
        alert(" Numero impar de entradas. ");
        return;
    }

    return values;
}

function arrayToMatrix(arr, size) {
    return arr.reduce((rows, key, index) => (index % size == 0 ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows, []);
}

/**
 * populate table with predefinied values
 * @param {*} params 
 */
function populate() {

    let input = [1, -1, 1.1, 1.51, 1.3, 2.56, 1.4, -3.1];
    let array = document.querySelectorAll('table td input');
    array.forEach((v, i, a) => { if (i < 10) v.value = input[i] });

}

function isPair(array) {
    return array.length % 2 === 0;
}