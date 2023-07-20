function twoStrings(s1, s2) {
    // Membuat objek set untuk menyimpan karakter unik dari s1
    const charSet = new Set(s1);
  
    // Memeriksa setiap karakter di s2
    for (let char of s2) {
      // Jika karakter ditemukan di set charSet, berarti substring yang sama ditemukan
      if (charSet.has(char)) {
        return "YES";
      }
    }
  
    // Jika tidak ada karakter yang sama ditemukan, kembalikan "NO"
    return "NO";
  }
  
  // Contoh penggunaan:
  const string1 = "hello";
  const string2 = "world";
  console.log(twoStrings(string1, string2)); // Output: "YES" (karena "l" ada di kedua string)
  
  const string3 = "be";
  const string4 = "cat";
  console.log(twoStrings(string3, string4)); // tidak ada huruf yang sama