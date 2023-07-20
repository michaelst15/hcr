function twoString(s1, s2) {
    const object = {};
    for( let i = 0; i < s1.length; i++ ) {
        const s1Other = s1[i];
        object[s1Other] = true;
    }
    for(let i = 0; i < s2.length; i++) {
        const s2Other = s2[i];
        if(object[s2Other]) {
            return 'YES';
        }
    }
    return 'NO'
}

const inputPertama = ['hello', 'world'];
const inputKedua = [ 'hi', 'world' ]

console.log(twoString(inputPertama[0], inputPertama[1]));
console.log(twoString(inputKedua[0], inputKedua[1]));