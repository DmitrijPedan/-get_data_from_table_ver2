/*=========== get Stuff from table =========== */

function getDataArrayFromTable () {
    let result = [...new Array([...document.querySelectorAll(`body table tbody tr`)].length - 2)];
    let keys = [...document.querySelectorAll('table thead th')].map(el => el.innerHTML.replace(/\s+/g, '').toLowerCase()); 
    let rows = [...new Array(result.length)]
        .map((elem, i) => elem = [...document.querySelectorAll(`body table tbody tr:nth-child(${i+1}) td`)]
        .map(el => el.innerHTML));
    return result.map((elem, i) => {
        elem = {};
        keys.forEach((el,j) => elem[el] = rows[i][j])
        return elem;
    })
}

let stuff = getDataArrayFromTable()
console.log(stuff)

total.innerHTML = stuff.map((el) => el = +el.salary).reduce((acc, el) => acc + el);
avg.innerHTML = stuff.map((el) => el = +el.salary).reduce((acc, el, ind, arr) => {return Math.round((count += +el) / arr.length)}, count = 0);
totalMale.innerHTML = stuff.filter((el) => el.sex == 'Male').map((el) => el = +el.salary).reduce((acc, el) => acc + el);
avgMale.innerHTML = stuff.filter((el) => el.sex == 'Male').map((el) => el = +el.salary).reduce((acc, el, ind, arr) => {return Math.round((count += +el) / arr.length)}, count = 0);
totalFemale.innerHTML = stuff.filter((el) => el.sex == 'Famale').map((el) => el = +el.salary).reduce((acc, el) => acc + el);
avgFemale.innerHTML = stuff.filter((el) => el.sex == 'Famale').map((el) => el = +el.salary).reduce((acc, el, ind, arr) => {return Math.round((count += +el) / arr.length)}, count = 0);
