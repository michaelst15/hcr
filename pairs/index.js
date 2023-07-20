/*
menghitung jumlah selisi dari beberapa pengurangan dengan selisih yang sama,
misal jumlah selisi nya 2, ada bebrapa yang bisa mendapatkan selisih 2 dalam
array ini [1, 5, 3, 4, 2]

hasilnya :

[5-3] => selisih 2
[4-2] => selisih 2
[3-1] => selisih 2

menghitung jumlah selisi dari beberapa pengurangan dengan selisih yang sama,
misal jumlah selisi nya 5, ada bebrapa yang bisa mendapatkan selisih 5 dalam
array ini [1, 5, 3, 4, 2]

hasilnya :
0 atau tidak ada yang bisa menghasilkan selisih 5
*/

const selisih2 = 2;
const selisih5 = 5;
const array = [1, 5, 3, 4, 2];

function find(k, arr) {
    let r = 0;

    function inner(k, arr) {
        if(!arr.length) return 1;
        const rest = arr.splice(1);

        rest.forEach((e) => {
            if(Math.abs(arr[0] - e) == k) r++;
        })
        inner(k, rest);
    }
    inner(k, arr);
    return r
}

//yang bisa menghasilkan selisih 2, ada 3 
console.log(find(selisih2, array));

//yang bisa menghasilkan selisih 5, tidak ada
console.log(find(selisih5, array));