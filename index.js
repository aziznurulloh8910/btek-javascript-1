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



// 11. startsWith()
// Mengecek apakah suatu string diawali dengan string tertentu. 
var nama="Aziz Nurulloh"
console.log(nama.startsWith("Azi"))
// output : true



// 12. substr()
// Menyalin string dari indeks ke-n dengan panjang tertentu.
var nama="Aziz Nurulloh"
console.log(nama.substr(0,10))
// 0 Merupakan indeks
// 10 Merupakan panjang string	
// Output : Aziz Nurul



// 13 substring()	
// Menyalin sebagian string anatara dua indeks (awal dan akhir).
var nama="Aziz Nurulloh"
console.log(nama.substring(0,9))
// 0 Merupakan indeks awal
// 9 Merupakan indeks akhir	
// Output : Aziz Nuru


// 14 toLowerCase()	
// Menjadikan semua huruf dalam string menjadi huruf kecil
var string1="Aziz Nurulloh"
console.log(string1.toLowerCase())
// output : aziz nurulloh

// 15 toUpperCase()
// Menjadikan semua huruf dalam string menjadi huruf besar (huruf kapital)
console.log(string1.toUpperCase())	
// output : AZIZ NURULLOH


// 16	trim()	
// Menghapus spasi kosong dibagian awal maupun akhir string.
var strtrim=" Javascript Trim "
console.log(strtrim.trim())
// output : Javascript Trim



// 17 toString()
// Menjadikan suatu objek menjadi string	
var nilai = 98
console.log(nilai.toString())
// output : 98


// Berikut adalah contoh Method dalam memanipulasi Array

// 18. join()
// Method Array .join() berfungsi untuk menggabungkan elemen array menjadi sebuah string. 
// Sebuah argumen bisa diinputkan kedalam method ini yang akan berfungsi sebagai karakter ’pembatas’ untuk menyatukan array. 
var arr1 = [1,2,3,4,5,"a","b","c","d","e"];
console.log(arr1.join());         // output : 1,2,3,4,5,a,b,c,d,e
console.log(arr1.join("."));      // output : 1.2.3.4.5.a.b.c.d.e
console.log(arr1.join("|"));      // output : 1|2|3|4|5|a|b|c|d|e
console.log(arr1.join("_"));      // output : 1_2_3_4_5_a_b_c_d_e



// 19. reserve()
// Method Array.reverse() digunakan untuk membalikkan urutan dari elemen di dalam array. 
// Method ini akan mengubah array asal.
var arr1 = [1,2,3,4,5,"a","b","c","d","e"];
console.log(arr1.toString());         // output : 1,2,3,4,5,a,b,c,d,e
arr1.reverse();
console.log(arr1.toString());         // output : e,d,c,b,a,5,4,3,2,1



// 20. sort()
// Method Array.sort() digunakan untuk mengurutkan elemen dari array. 
// Jika method ini dipanggil tanpa argumen, elemen dari array akan diurutkan berdasarkan abjad. 
// Jika elemen di dalam array bukan huruf, maka akan dikonversi sementara menjadi string, 
// baru kemudian dilakukan proses pengurutan. Jika ditemukan elemen dengan nilai null atau 
// undefined, akan di tempatkan pada urutan akhir.
var arr1 = ["aziz","samsul","erik","jokowi","dina"];
arr1.sort();
console.log(arr1.toString());         // output : aziz,dina,erik,jokowi,samsul

var arr2 = [3,5,2,8,,,1,31,22,44,33,11];
arr2.sort();
console.log(arr2.toString());         // output : 1,11,2,22,3,31,33,44,5,8,,



// 21. splice()
// ethod yang mirip dengan slice(), method splice() sepenuhnya berbeda. Method splice() adalah 
// method "serba-bisa" yang bisa digunakan untuk memotong array, menambahkan elemen array, bahkan 
// melakukan keduanya sekaligus. Tidak seperti method slice() dan concat(), pemanggilan method ini 
// akan mengubah array asal. Jika hanya diberikan satu buah argumen, method splice() akan berfungsi 
// "menghapus" array asal mulai dari index yang diberikan, dan mengembalikan nilai array yang "dihapus".

var arr1 = [1,2,3,4,"a","b","c","d"];
//splice dari index ke 4
var arr2 = arr1.splice(4)
console.log(arr1.toString());     // Output : 1,2,3,4
console.log(arr2.toString());     // Output : a,b,c,d


var arr1 = [1,2,3,4,"a","b","c","d"];
//hapus 3 elemen mulai dari index ke 3
var arr2 = arr1.splice(3,3)
console.log(arr1.toString());     // Output : 1,2,3,c,d
console.log(arr2.toString());     // Output : 4,a,b


var arr1 = [1,2,3,4,"a","b","c","d"];
// masukkan elemen "x","y","z"
// mulai dari elemen ke 4
var arr2 = arr1.splice(4,0,"x","y","z")
console.log(arr1.toString());     // Output : 1,2,3,4,x,y,z,a,b,c,d
console.log(arr2.toString());     // Output : [] (array kosong)


var arr1 = [1,2,3,4,"a","b","c","d"];
// hapus 4 elemen mulai dari elemen ke 4
// masukkan elemen "x","y","z" pada posisi penghapusan
var arr2 = arr1.splice(4,4,"x","y","z")
console.log(arr1.toString());     // Output : 1,2,3,4,x,y,z
console.log(arr2.toString());     // Output : a,b,c,d



// 22. push dan pop()
// Method push() dan pop() digunakan untuk menambahkan dan mengurangi elemen dari array. 
// Kedua method ini memungkinkan pemrosesan array sabagai sebuah ’stack’ atau tumpukan dengan 
// metoda ”first in last out”.

// Method push() akan menambahkan elemen array pada akhir dari array, sedangkan method pop() 
// akan menghapus elemen terakhir dari array. Kedua method ini akan mengubah array asal dan 
// mengembalikan nilai jumlah elemen array.

var arr1 = [];

arr1.push("x","y","z");
console.log(arr1.toString());   // Output : x,y,z

arr1.push("a");
console.log(arr1.toString());   // Output : x,y,z,a

arr1.pop();
console.log(arr1.toString());   // Output : x,y,z

arr1.pop();
console.log(arr1.toString());   // Output : x,y



// 22. shift() dan unshift()
// Method Array.unshift() dan Array.shift() hampir sama dengan Array.push() dan Array.pop() 
// perbedaannya, method unshift() dan shift() akan menambahkan atau menghapus elemen array di awal array.

// Method unshift() akan menambahkan elemen baru diawal array, dan menggeser seluruh eleman 
// yang ada. Method shift() akan menghapus elemen paling awal array, dan menggeser ke bawah seluruh 
// elemen lain di dalam Array. Kedua method ini akan mengubah array asal.

var arr1 = [];

arr1.unshift("a","j","i");
console.log(arr1.toString());   // Output : a,j,i

arr1.unshift("d");
console.log(arr1.toString());   // Output : d,a,j,i

arr1.shift();
console.log(arr1.toString());   // Output : a,j,i

arr1.shift();
console.log(arr1.toString());   // Output : j,i


// 24. toLocaleString()
// toLocaleString() berfungsi untuk menkonversi array menjadi string. Dalam contoh-contoh yang kita 
// lakukan dalam tutorial ini, hampir semuanya menggunakan method toString untuk menampilkan hasil array.

var arr1 = [1,2,3,4,"a","b","c","d"];
console.log(arr1.toLocaleString());
// Output: 1,2,3,4,a,b,c,d