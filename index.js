// Write your solution here!
let cats = [];
cats.push('Milo', 'Otis', 'Garfield');
const destructivelyAppendCat = () => cats.push('Ralph');

const destructivelyPrependCat = () => cats.unshift('Bob');
const destructivelyRemoveLastCat = () => cats.pop();
const destructivelyRemoveFirstCat = () => cats.shift();
const appendCat = () => {
    let cats1 = [...cats];
    cats1.push('Broom')
    return cats1;
}

const prependCat = () => {
    let cats2 = [...cats];
    cats2.unshift('Arnold');
    return cats2;
}

const removeLastCat = () => {
    let cats1 = [...cats];
    cats1.splice(cats1.length-1);
    return cats1;
}
const removeFirstCat = () => {
    let cats1 = [...cats];
    cats1.splice(0,1);
    return cats1;
}