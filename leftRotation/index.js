function index(arr, rotasi) {
    const rotasiArray = arr.concat();
    for(let i = 0; i < rotasi; i++) {
        const item = rotasiArray.shift();
        rotasiArray.push(item)
    }
    return rotasiArray;
}

const nomorRotasi = 0;
const numberX = [1, 2, 3, 4, 5];

const output = [5, 1, 2, 3, 4];

console.log(index(numberX, nomorRotasi));
console.log(output);