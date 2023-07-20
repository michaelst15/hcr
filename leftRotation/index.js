/*
angka sebelah kanan di pindah ke kiri dengan mengikuti posisi
misal kita akan memasukkan 4 kali rotasi ke kiri semua angka

n = 4 => berarti 4 kali ke kiri
[1, 2, 3, 4, 5] => [2, 3, 4, 5, 1] => [3, 4, 5, 1, 2] => [4, 5, 1, 2, 3] => [5, 1, 2, 3, 4]

hasilnya :
[5, 1, 2, 3, 4]


atau n = 5 => berarti 5 kali ke kiri
[1, 2, 3, 4, 5] => [2, 3, 4, 5, 1] => [3, 4, 5, 1, 2] => [4, 5, 1, 2, 3] => [5, 1, 2, 3, 4] => [1, 2, 3, 4, 5]

hasilnya :
[1, 2, 3, 4, 5]

*/

function index(arr, rotasi) {
    const rotasiArray = arr.concat();
    for(let i = 0; i < rotasi; i++) {
        const item = rotasiArray.shift();
        rotasiArray.push(item)
    }
    return rotasiArray;
}

const nomorYangKeKiri1 = 4;
const numberX1 = [1, 2, 3, 4, 5];

const nomorYangKeKiri = 5;
const numberX = [1, 2, 3, 4, 5];

//2 kali geser kekiri semua angka
console.log(index(numberX1, nomorYangKeKiri1));

//3 kali geser ke kiri semua angka
console.log(index(numberX, nomorYangKeKiri));