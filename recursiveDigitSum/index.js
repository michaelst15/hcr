/*
salinan angka yang berbentuk string diubah menjadi integer, kemudian di jumlah 
per angka setelah mendapatkan hasil penjumlahan kemudian di jumlahkan dalam angka tersebut

misal :
'123' => dibuat 3 salinan => '123' '123' '123' => di ubah ke bentuk integer => 123123123
kemudian dilakukan penjumlahan per angka 1+2+3+1+2+3+1+2+3 = 18 => jumlah dalam hasil => 1 + 8 => 9

hasil final 9
*/


const n = "123"
const k = 3;

//salin n sebanyak k
//'123'  '123'  '123'
const x = n.repeat(k);

function digit(number) {
   if(number.length === 1) {
      return parseInt(number);
   }

   let sum = 0;
   for (let i = 0; i < number.length; i++) {
      sum += parseInt(number.charAt(i));
   }

   return digit(sum.toString())
}


const hasil = digit(x);

console.log(hasil);