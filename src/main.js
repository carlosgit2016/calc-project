
/**
 * resolve interpolation with method lagrange
 * @param {*} params 
 */
function calcLagrange() {
    let values = this.getValues();
    let px = this.getPx();
    let matrix = this.arrayToMatrix(values, 2);
    let output = [];
    let final = 0;

    for (let i = 0; i < matrix.length; i++) {
        let out = { l: 0, y: 0 };
        let actualL = i;
        let result = 1;
        for (let x = 0; x < matrix.length; x++) {
            if (!(x === actualL)) {
                let resultL = (px - matrix[x][0]) / (matrix[actualL][0] - matrix[x][0]);
                result *= resultL;
            }
        }
        out.l = matrix[i][1] * result;
        out.y = matrix[actualL][0];
        output.push(out);
        final += matrix[i][1] * result;
    }
    let str = "";
    output.forEach((v, i, a) => {
        str += `L${i}: ${v.l.toFixed(2)}, y: ${v.y.toFixed(2)} \n`
    });

    alert(`${str} Resultado Final: ${final.toFixed(2)}`);
}

/**
 * resolve interpolation with newton method
 * @param {*} params 
 */
function calcNewton() {
    let values = this.getValues();
    let px = this.getPx();
    let matrix = this.arrayToMatrix(values, 2);

    let objPolimer = interpolationNewton(matrix);
    let finalResult = objPolimer.f(px)
    let str = "";
    objPolimer.stack.forEach((v, i, a) => {
        str += `interacao${i}: ${v.toFixed(2)} \n`
    })

    alert(`${str} Resultado Final: ${finalResult.toFixed(2)}`)
}

function interpolationNewton(points) {
    var n = points.length - 1, p;
    let stackResponse = [];

    p = function (i, j, x) {
        if (i === j) {
            return points[i][1];
        }

        stackResponse.push(((points[j][0] - x) * p(i, j - 1, x) +
            (x - points[i][0]) * p(i + 1, j, x)) /
            (points[j][0] - points[i][0]));

        return ((points[j][0] - x) * p(i, j - 1, x) +
            (x - points[i][0]) * p(i + 1, j, x)) /
            (points[j][0] - points[i][0]);
    };

    return {
        f: function (x) {
            if (points.length === 0) {
                return 0;
            }

            return p(0, n, x);
        },
        stack: stackResponse
    }
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