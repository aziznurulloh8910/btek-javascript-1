// 20 Method bawaan Javascript

// Berikut adalah beberapa method untuk memanipulasi string

// 1. chartAt()
// Berfungsi untuk Menyalin karakter dari indeks tertentu pada string. contoh :

var nama='Aziz Ganteng'
console.log(nama.charAt(0))

// Outputnya adalah : A



// 2. concat()	
// Berfungsi untuk menggabungkan dua buah string. Contoh

var nama="BTEK Labs"
var konten="Belajar Javascript"
console.log(nama.concat(konten))

// Output : BTEK LabsBelajar Javascript



// 3. includes()	
// Memeriksa antara string 1 dan string 2. Apakah string 1 berada di string 2. Metod ini menghasilkan nilai boolean

var str1="Belajar Javascript"
var str2="Javascript"

console.log(str1.includes(str2))

// Output : false



// 4. endsWith()	
// Memeriksa string diakhiri dengan string tertentu atau tidak.

var str1="Aziz Ganteng"
var str2="ng"
console.log(str1.endsWith(str2))

// Output : True



// 5. indexOf()
// Memberikan indeks dari string2 terhadap string1. Bila tidak ditemukan menghasilkan nlai -1.	

var str1="Aziz Ganteng"
var str2="i"
console.log(str1.indexOf(str2))

// Output : 2



// 6. lastIndexOf()
// Memberikan indeks yang terakhir dari string2 terhadap string1. Bila tidak ditemukan menghasilkan nlai -1.

var str1="Aziz Ganteng"
var str2="A"
console.log(str1.lastIndexOf(str2))

// Output : 0



// 7. repeat()	
// Menghasilkan duplikasi string sesuai jumlah (n) duplikasi yang diinginkan.

var nama="Aziz Nurulloh"
console.log(nama.repeat(2))

// Output : Aziz NurullohAziz Nurulloh



// 8. replace()
// Mengganti string lama dengan string yang baru. 

var nama="Aziz Nurulloh"
console.log(nama.replace(nama, "Samsudin"))

// output : Samsudin



// 9. search()
// Mencari sebuah string dalam string lainnya.

var nama="Aziz Nurulloh"
console.log(nama.search("Aziz"))

// output : 0



// 10. slice()
// Mengambil string dengan rentan indeks awal dan akhir.

var nama="Aziz Nurulloh"
console.log(nama.slice(0,8))

// output : Aziz Nur
