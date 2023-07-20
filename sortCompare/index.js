const array = [
    { nama: 'army', rating: 100 },
    { nama: 'david', rating: 100 },
    { nama: 'heraldo', rating: 50 },
    { nama: 'aakansha', rating: 75 },
    { nama: 'aleksa', rating: 150 }
]

const banding = (a, b) => {
    return a.nama.length - b.nama.length;
}

console.log(array.sort(banding));