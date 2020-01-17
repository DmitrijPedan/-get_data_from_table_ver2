/*=========== get object Stuff from table =========== */

function getObjectFromTable () {
    let obj = [];
    let objLength = [...document.querySelectorAll(`body table tbody tr`)].length - 2; 
    let keys = [...document.querySelectorAll('table thead th')].map(el => el.innerHTML.replace(/\s+/g, '').toLowerCase()); 
    for (i = 0; i < objLength; i++) {
        obj[i] = {}
        let row = [...document.querySelectorAll(`body table tbody tr:nth-child(${i+1}) td`)].map(el => el.innerHTML); 
        for (let j = 0; j < keys.length; j++) {
            obj[i][keys[j]] = row[j]
        }
    }
    return obj;
}
let stuff = getObjectFromTable()
console.log(stuff)

total.innerHTML = stuff.map((el) => el = +el.salary).reduce((acc, el) => acc + el);
avg.innerHTML = stuff.map((el) => el = +el.salary).reduce((acc, el, ind, arr) => {return Math.round((count += +el) / arr.length)}, count = 0);
totalMale.innerHTML = stuff.filter((el) => el.sex == 'Male').map((el) => el = +el.salary).reduce((acc, el) => acc + el);
avgMale.innerHTML = stuff.filter((el) => el.sex == 'Male').map((el) => el = +el.salary).reduce((acc, el, ind, arr) => {return Math.round((count += +el) / arr.length)}, count = 0);
totalFemale.innerHTML = stuff.filter((el) => el.sex == 'Famale').map((el) => el = +el.salary).reduce((acc, el) => acc + el);
avgFemale.innerHTML = stuff.filter((el) => el.sex == 'Famale').map((el) => el = +el.salary).reduce((acc, el, ind, arr) => {return Math.round((count += +el) / arr.length)}, count = 0);
