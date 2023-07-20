const K = 2;
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

console.log(find(K, array));