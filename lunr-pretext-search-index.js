var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": " For My Son : Aqilah, Nuha, Adibah  "
},
{
  "id": "frontmatter-6",
  "level": "1",
  "url": "frontmatter-6.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Banyak orang yang telah membantu dalam penyusunan materi ini. Terutama sumber informasi dari diskusi dengan team teaching mata kuliah Komputasi Aljabar LInier  "
},
{
  "id": "frontmatter-7",
  "level": "1",
  "url": "frontmatter-7.html",
  "type": "Preface",
  "number": "",
  "title": "Tujuan Kami",
  "body": " Tujuan Kami  Ini adalah buku teks untuk mata kuliah aljabar linear yang disediakan secara daring secara gratis. Buku ini akan memberikan penjelasan ringkas dengan terbatasnya pembahasan materi kalkulus sebagai prasarat kalkulus sebagai prasyarat. Buku ini akan memberikan wawasan mahasiswa untuk membuat implementasi dari Aljabar linier pada beberapa disiplin ilmu seperti teknik, ilmu komputer, riset operasi, ekonomi, dan statistika. Selanjutnya buku ini memberikan pemahaman mendalam tentang dasar yang akan digunakan dalam analitik data dan penambangan data, grafik komputer, pengembangan perangkat lunak, keuangan, dan riset operasi. Buku ini ditulis dengan asumsi bahwa mahasiswa telah mengambil kursus kalkulus. Oleh karena itu diharapkan mahasiswa akan mendapatkan pengalaman matematika yang lebih otentik melalui aljabar linear.  "
},
{
  "id": "sec-expect",
  "level": "1",
  "url": "sec-expect.html",
  "type": "Section",
  "number": "1.1",
  "title": "Apa yang dapat kita harapkan",
  "body": " Apa yang dapat kita harapkan   Secara umum, aljabar linear membahas tentang persamaan linear, terutama sekumpulan dua atau lebih persamaan linear. Google secara rutin menangani triliunan persamaan, masing-masing dengan triliunan variabel tak diketahui. Selanjutnya, kita akan memahami bagaimana menghadapi kompleksitas semacam itu. Kita akan memulai dengan mempelajari dengan beberapa persamaan dan beberapa variabel. Meskipun relatif sederhana, namun cukup memberikan gambaran beberapa konsep dasar yang akan menjadi motivasi dalam eksplorasi kita selanjutnya.    Beberapa contoh sederhana    Dalam kegiatan ini, kita akan membahas beberapa persamaan linear dengan hanya dua variabel tak diketahui. Dalam kasus ini, kita dapat menggambarkan solusi dari masing-masing persamaan, sehingga memungkinkan kita memvisualisasikankannya.     Pada bidang koordinat berikut, gambarkan garis-garis berikut:   Right Triangle Paradox     Dititik mana kedua garis tersebut berpotongan? Berapa banyaknya titik yang memenuhi kedua persamaan tersebut?        Gambar kedua garis ditunjukkan pada gambar di sebelah kanan. Terdapat satu titik potong saja, yaitu titik . Oleh karena itu, hanya terdapat satu titik yang memenuhi kedua persamaan tersebut.      Hanya ada satu titik, yaitu titik , yang memenuhi kedua persamaan tersebut.      Pada kisi di bawah ini, gambarkan garis-garis berikut:   Pada titik mana (atau titik-titik mana) kedua garis tersebut berpotongan? Berapa banyak titik yang memenuhi kedua persamaan tersebut?        Kedua garis ini sejajar, artinya tidak ada titik potong antara keduanya. Oleh karena itu, tidak ada titik yang memenuhi kedua persamaan tersebut.      Tidak ada titik yang memenuhi kedua persamaan tersebut.      Pada kisi di bawah ini, gambarkan garis berikut: .  Berapa banyak titik yang memenuhi persamaan ini?        Terdapat tak hingga banyaknya titik yang terletak pada garis ini dan oleh karena itu memenuhi persamaan tunggal ini.      Terdapat tak hingga banyaknya titik.      Pada kisi di bawah ini, gambarkan garis-garis berikut:   Pada titik mana (atau titik-titik mana) ketiga garis tersebut berpotongan? Berapa banyak titik yang memenuhi ketiga persamaan tersebut?        Ketiga garis tersebut tidak memiliki satu titik potong bersama. Akibatnya, tidak ada titik yang memenuhi ketiga persamaan tersebut.      Tidak ada titik yang memenuhi ketiga persamaan tersebut.     Contoh-contoh dalam kegiatan pengantar ini menunjukkan beberapa kemungkinan hasil untuk solusi dari suatu sistem persamaan linear. Perhatikan bahwa kita tertarik pada titik-titik yang memenuhi setiap persamaan dalam sistem tersebut, dan hal ini tampak sebagai titik potong antar garis. Sebagaimana pada contoh-contoh dalam kegiatan, terdapat tiga jenis kemungkinan hasil seperti yang ditunjukkan pada .    Tiga kemungkinan grafik untuk sistem persamaan linear dalam dua variabel.   Dalam gambar ini, kita melihat bahwa:   Dengan satu persamaan saja, terdapat tak hingga banyaknya titik yang memenuhi persamaan tersebut.  Menambahkan persamaan kedua berarti menambahkan syarat lain terhadap titik , yang menghasilkan satu titik saja yang memenuhi kedua persamaan.  Menambahkan persamaan ketiga berarti menambahkan satu syarat lagi terhadap titik , dan tidak ada titik yang memenuhi ketiga persamaan tersebut.   Secara umum, satu persamaan akan memiliki banyak solusi — bahkan, tak hingga banyaknya. Ketika kita menambahkan persamaan lain, kita menambahkan syarat-syarat baru yang mengakibatkan, dalam arti yang akan kita perjelas nanti, jumlah solusi menjadi lebih sedikit. Pada akhirnya, kita mungkin memiliki terlalu banyak persamaan sehingga tidak ada titik yang memenuhi semuanya.  Contoh ini menggambarkan suatu prinsip umum yang akan sering kita pakai kembali.   Solusi dari sistem persamaan linear  Diberikan suatu sistem persamaan linear, hanya ada tiga kemungkinan:   tak hingga banyaknya titik,    tepat satu titik, atau    tidak ada titik sama sekali  yang memenuhi semua persamaan dalam sistem tersebut.   Perhatikan pula bahwa kita dapat melihat lebih jauh. Pada , kita mempertimbangkan persamaan-persamaan dalam dua variabel. Di sini kita melihat bahwa:   Satu persamaan memiliki tak hingga banyak solusi.    Dua persamaan memiliki tepat satu solusi.   Tiga persamaan tidak memiliki solusi.    Secara intuitif, mungkin kita bertanya-tanya apakah jumlah solusi bergantung pada apakah jumlah persamaan lebih kecil dari, sama dengan, atau lebih besar dari jumlah variabel. Tentu saja, salah satu contoh dalam kegiatan menunjukkan bahwa aturan sederhana ini memiliki pengecualian, sebagaimana ditunjukkan pada . Misalnya, dua persamaan dalam dua variabel bisa saja merepresentasikan dua garis sejajar, sehingga sistem tersebut tidak memiliki solusi. Bisa juga terjadi bahwa sistem tiga persamaan dalam dua variabel memiliki satu solusi tunggal. Namun, tampak wajar untuk menganggap bahwa semakin banyak persamaan yang kita miliki, semakin sedikit himpunan solusinya.   Sistem dua persamaan dalam dua variabel dapat tidak memiliki solusi, dan sistem tiga persamaan dapat memiliki satu solusi.       Sekarang mari kita pertimbangkan pula beberapa contoh persamaan dengan tiga variabel, yang kita sebut , , dan . Seperti halnya solusi dari persamaan linear dalam dua variabel membentuk garis lurus, solusi dari persamaan linear dalam tiga variabel membentuk bidang datar (plane).  Ketika kita mempertimbangkan suatu persamaan dalam tiga variabel secara grafis, kita perlu menambahkan sumbu koordinat ketiga, seperti yang ditunjukkan pada .       Sistem koordinat dalam dua dan tiga dimensi.   Seperti yang ditunjukkan pada , suatu persamaan linear dalam dua variabel, misalnya , membentuk garis, sedangkan suatu persamaan linear dalam tiga variabel, misalnya , membentuk bidang.       Solusi persamaan dalam dua dimensi dan dalam tiga dimensi.   Dalam tiga variabel, himpunan solusi dari satu persamaan linear membentuk sebuah bidang. Himpunan solusi dari dua persamaan linear terlihat secara grafis sebagai perpotongan dua bidang tersebut. Sebagaimana pada , biasanya kita mengharapkan perpotongan ini berupa sebuah garis.       Satu bidang dan perpotongan dua bidang.   Ketika kita menambahkan persamaan ketiga, kita mencari perpotongan tiga bidang, yang biasanya membentuk satu titik, seperti pada gambar kiri . Namun, dalam kasus-kasus khusus, mungkin saja tidak ada solusi, seperti pada gambar kanan.       Dua contoh perpotongan tiga bidang.     Kegiatan ini mempertimbangkan sistem persamaan dengan tiga variabel. Dalam hal ini, kita mengetahui bahwa solusi dari satu persamaan membentuk sebuah bidang. Jika membantu visualisasi, Anda dapat menggunakan kartu indeks berukuran inci untuk merepresentasikan bidang-bidang tersebut.   Apakah mungkin tidak ada solusi untuk dua persamaan linear dalam tiga variabel? Gambarkan contohnya atau jelaskan alasan mengapa hal tersebut tidak mungkin terjadi.    Apakah mungkin terdapat tepat satu solusi untuk dua persamaan linear dalam tiga variabel? Gambarkan contohnya atau jelaskan alasan mengapa hal tersebut tidak mungkin terjadi.    Apakah mungkin solusi dari empat persamaan dalam tiga variabel membentuk sebuah garis? Gambarkan contohnya atau jelaskan alasan mengapa hal tersebut tidak mungkin terjadi.    Secara umum, apa yang Anda harapkan sebagai himpunan solusi dari empat persamaan dalam tiga variabel?    Misalkan kita memiliki sistem 500 persamaan linear dalam 10 variabel. Di antara tiga kemungkinan di atas, manakah yang paling mungkin terjadi?   Misalkan kita memiliki sistem 10 persamaan linear dalam 500 variabel. Dari ketiga kemungkinan tersebut, manakah yang paling mungkin terjadi?       Ya, hal ini mungkin terjadi jika kedua bidang tersebut sejajar satu sama lain.    Tidak, hal ini tidak mungkin. Dua bidang akan berpotongan membentuk sebuah garis (jika tidak sejajar) atau tidak berpotongan sama sekali (jika sejajar).    Ya, mungkin saja empat bidang berpotongan membentuk sebuah garis. Misalnya, kita dapat menggambarkan empat bidang yang berpotongan di sumbu .    Secara umum, kita mengharapkan tidak ada solusi untuk empat persamaan dalam tiga variabel, karena jumlah persamaan lebih banyak daripada jumlah variabel.    Karena jumlah persamaan lebih banyak daripada jumlah variabel, kita mengharapkan tidak ada solusi. Namun, kita tidak dapat menjamin hal ini secara pasti.    Karena jumlah persamaan lebih sedikit daripada jumlah variabel, kita mengharapkan terdapat tak hingga banyak solusi. Namun, kita tidak dapat menjamin hal ini secara pasti.        Ya.   Tidak.   Ya.   Kita mengharapkan tidak ada solusi.   Kita mengharapkan tidak ada solusi.   Kita mengharapkan terdapat tak hingga banyak solusi.      "
},
{
  "id": "ula-preview-1-1",
  "level": "2",
  "url": "sec-expect.html#ula-preview-1-1",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": "  Dalam kegiatan ini, kita akan membahas beberapa persamaan linear dengan hanya dua variabel tak diketahui. Dalam kasus ini, kita dapat menggambarkan solusi dari masing-masing persamaan, sehingga memungkinkan kita memvisualisasikankannya.     Pada bidang koordinat berikut, gambarkan garis-garis berikut:   Right Triangle Paradox     Dititik mana kedua garis tersebut berpotongan? Berapa banyaknya titik yang memenuhi kedua persamaan tersebut?        Gambar kedua garis ditunjukkan pada gambar di sebelah kanan. Terdapat satu titik potong saja, yaitu titik . Oleh karena itu, hanya terdapat satu titik yang memenuhi kedua persamaan tersebut.      Hanya ada satu titik, yaitu titik , yang memenuhi kedua persamaan tersebut.      Pada kisi di bawah ini, gambarkan garis-garis berikut:   Pada titik mana (atau titik-titik mana) kedua garis tersebut berpotongan? Berapa banyak titik yang memenuhi kedua persamaan tersebut?        Kedua garis ini sejajar, artinya tidak ada titik potong antara keduanya. Oleh karena itu, tidak ada titik yang memenuhi kedua persamaan tersebut.      Tidak ada titik yang memenuhi kedua persamaan tersebut.      Pada kisi di bawah ini, gambarkan garis berikut: .  Berapa banyak titik yang memenuhi persamaan ini?        Terdapat tak hingga banyaknya titik yang terletak pada garis ini dan oleh karena itu memenuhi persamaan tunggal ini.      Terdapat tak hingga banyaknya titik.      Pada kisi di bawah ini, gambarkan garis-garis berikut:   Pada titik mana (atau titik-titik mana) ketiga garis tersebut berpotongan? Berapa banyak titik yang memenuhi ketiga persamaan tersebut?        Ketiga garis tersebut tidak memiliki satu titik potong bersama. Akibatnya, tidak ada titik yang memenuhi ketiga persamaan tersebut.      Tidak ada titik yang memenuhi ketiga persamaan tersebut.    "
},
{
  "id": "fig-three-possibilities",
  "level": "2",
  "url": "sec-expect.html#fig-three-possibilities",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": "  Tiga kemungkinan grafik untuk sistem persamaan linear dalam dua variabel.  "
},
{
  "id": "solution-exceptions",
  "level": "2",
  "url": "sec-expect.html#solution-exceptions",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " Sistem dua persamaan dalam dua variabel dapat tidak memiliki solusi, dan sistem tiga persamaan dapat memiliki satu solusi.      "
},
{
  "id": "fig-coordinates",
  "level": "2",
  "url": "sec-expect.html#fig-coordinates",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": "     Sistem koordinat dalam dua dan tiga dimensi.  "
},
{
  "id": "fig-plane-z0",
  "level": "2",
  "url": "sec-expect.html#fig-plane-z0",
  "type": "Figure",
  "number": "1.1.5",
  "title": "",
  "body": "     Solusi persamaan dalam dua dimensi dan dalam tiga dimensi.  "
},
{
  "id": "fig-two-planes",
  "level": "2",
  "url": "sec-expect.html#fig-two-planes",
  "type": "Figure",
  "number": "1.1.6",
  "title": "",
  "body": "     Satu bidang dan perpotongan dua bidang.  "
},
{
  "id": "fig-three-planes",
  "level": "2",
  "url": "sec-expect.html#fig-three-planes",
  "type": "Figure",
  "number": "1.1.7",
  "title": "",
  "body": "     Dua contoh perpotongan tiga bidang.  "
},
{
  "id": "sec-expect-3-22",
  "level": "2",
  "url": "sec-expect.html#sec-expect-3-22",
  "type": "Activity",
  "number": "1.1.2",
  "title": "",
  "body": "  Kegiatan ini mempertimbangkan sistem persamaan dengan tiga variabel. Dalam hal ini, kita mengetahui bahwa solusi dari satu persamaan membentuk sebuah bidang. Jika membantu visualisasi, Anda dapat menggunakan kartu indeks berukuran inci untuk merepresentasikan bidang-bidang tersebut.   Apakah mungkin tidak ada solusi untuk dua persamaan linear dalam tiga variabel? Gambarkan contohnya atau jelaskan alasan mengapa hal tersebut tidak mungkin terjadi.    Apakah mungkin terdapat tepat satu solusi untuk dua persamaan linear dalam tiga variabel? Gambarkan contohnya atau jelaskan alasan mengapa hal tersebut tidak mungkin terjadi.    Apakah mungkin solusi dari empat persamaan dalam tiga variabel membentuk sebuah garis? Gambarkan contohnya atau jelaskan alasan mengapa hal tersebut tidak mungkin terjadi.    Secara umum, apa yang Anda harapkan sebagai himpunan solusi dari empat persamaan dalam tiga variabel?    Misalkan kita memiliki sistem 500 persamaan linear dalam 10 variabel. Di antara tiga kemungkinan di atas, manakah yang paling mungkin terjadi?   Misalkan kita memiliki sistem 10 persamaan linear dalam 500 variabel. Dari ketiga kemungkinan tersebut, manakah yang paling mungkin terjadi?       Ya, hal ini mungkin terjadi jika kedua bidang tersebut sejajar satu sama lain.    Tidak, hal ini tidak mungkin. Dua bidang akan berpotongan membentuk sebuah garis (jika tidak sejajar) atau tidak berpotongan sama sekali (jika sejajar).    Ya, mungkin saja empat bidang berpotongan membentuk sebuah garis. Misalnya, kita dapat menggambarkan empat bidang yang berpotongan di sumbu .    Secara umum, kita mengharapkan tidak ada solusi untuk empat persamaan dalam tiga variabel, karena jumlah persamaan lebih banyak daripada jumlah variabel.    Karena jumlah persamaan lebih banyak daripada jumlah variabel, kita mengharapkan tidak ada solusi. Namun, kita tidak dapat menjamin hal ini secara pasti.    Karena jumlah persamaan lebih sedikit daripada jumlah variabel, kita mengharapkan terdapat tak hingga banyak solusi. Namun, kita tidak dapat menjamin hal ini secara pasti.        Ya.   Tidak.   Ya.   Kita mengharapkan tidak ada solusi.   Kita mengharapkan tidak ada solusi.   Kita mengharapkan terdapat tak hingga banyak solusi.    "
},
{
  "id": "s_systems",
  "level": "1",
  "url": "s_systems.html",
  "type": "Section",
  "number": "1.2",
  "title": "Sistem Persamaan Linear",
  "body": " Sistem Persamaan Linear   Menghitung dan mempelajari solusi persamaan, serta sistem persamaan , tanpa diragukan lagi memainkan peran penting dalam matematika; meskipun kami segera menambahkan bahwa ini bukan satu-satunya hal yang dilakukan para matematikawan! Dalam bab ini, kita akan mengembangkan teori yang pada dasarnya lengkap untuk persamaan matematis yang relatif sederhana: yaitu, persamaan linear . Hal ini akan menjadi pengantar tidak langsung bagi studi aljabar linear kita, karena di balik deskripsi parametrik solusi sistem linear tersirat konsep-konsep ruang vektor seperti subruang, rentangan ( span ), dan kebebasan linear. Lebih jauh lagi, kita akan bertemu dengan salah satu alat komputasi paling penting dalam aljabar linear: eliminasi Gauss .    Sistem Persamaan Linear   Persamaan Linear  persamaan linear   Sebuah ekspresi linear dalam peubah tak diketahui (atau variabel) adalah ekspresi berbentuk dengan adalah bilangan real tetap.  Sebuah persamaan linear dalam peubah adalah persamaan yang dapat disederhanakan—hanya menggunakan penjumlahan dan pengurangan—menjadi bentuk yang kita sebut sebagai bentuk baku . Suatu persamaan dalam peubah disebut nonlinear jika tidak dapat disederhanakan ke bentuk hanya dengan penjumlahan dan pengurangan.  Diberikan suatu persamaan linear dalam bentuk baku , persamaan tersebut disebut homogen jika , dan nonhomogen jika .     Persamaan Linear dan Nonlinear      Tinjau . Ini adalah persamaan linear dalam peubah . Bentuk bakunya adalah . Karena ruas kanannya tak nol, persamaan ini bersifat nonhomogen.    Persamaan adalah persamaan nonlinear dalam peubah dan .        Sistem Persamaan Linear  sistem linear   Sebuah sistem persamaan linear (atau sistem linear ) adalah himpunan persamaan linear.  Sebuah sistem linear disebut homogen jika seluruh persamaannya homogen.    Saat menampilkan sistem yang terdiri atas persamaan dalam peubah , biasanya kita menuliskan setiap persamaan dalam bentuk baku dan menyelaraskan suku-suku yang bersesuaian ke dalam kolom: Sistem homogen biasanya ditulis sebagai:    Anda perlu segera membiasakan diri dengan notasi indeks ganda yang digunakan untuk menampilkan sistem linear. Berikut cara memahaminya:   Indeks pada dan menunjukkan baris ke- dalam sistem yang ditampilkan, atau secara ekuivalen, persamaan ke- .    Indeks pada menunjukkan kolom ke- , yang berkaitan dengan peubah ke- , untuk .       Solusi Sistem Linear  solusi sistem linear   Sebuah solusi persamaan linear  adalah sebuah -tuple bilangan real sedemikian sehingga substitusi menjadikan persamaan tersebut benar. Dalam hal ini, kita katakan bahwa  memecahkan persamaan tersebut .  Sebuah solusi sistem persamaan linear  adalah sebuah -tuple yang merupakan solusi dari masing-masing persamaan dalam sistem tersebut. Kita katakan bahwa  memecahkan sistem tersebut .    Diberikan suatu sistem linear, kita berupaya mencari himpunan seluruh solusinya. Seperti yang akan segera kita lihat, himpunan solusi ini memiliki salah satu dari tiga bentuk kualitatif berikut:   Himpunan solusi kosong; artinya, tidak ada solusi. Dalam hal ini, sistem disebut tidak konsisten . Jika tidak demikian, sistem disebut konsisten .    Himpunan solusi berisi tepat satu elemen; artinya, hanya ada satu solusi.    Himpunan solusi berisi tak hingga banyak elemen; artinya, terdapat tak hingga solusi.      Solusi Sistem Elementer   Untuk tiap sistem berikut, tentukan himpunan solusinya.                  Persamaan pertama mengimplikasikan . Substitusi untuk pada persamaan kedua menghasilkan , suatu kontradiksi. Maka tidak ada solusi: .    Persamaan pertama memberi . Substitusi ke persamaan kedua menghasilkan , sehingga . Maka solusi tunggalnya adalah , dan .    Persamaan kedua hanyalah dua kali persamaan pertama. Keduanya memiliki himpunan solusi yang sama, sehingga cukup cari semua solusi dari . Misalkan untuk sebarang , maka . Jadi solusinya adalah untuk semua , dan , suatu himpunan tak hingga!       Seperti yang mungkin Anda ingat, suatu persamaan linear (nontrivial) dalam dua peubah mendefinisikan sebuah garis di ; dan persamaan linear dalam tiga peubah mendefinisikan sebuah bidang di . Pengamatan ini memungkinkan kita menggunakan intuisi geometris yang kuat dalam menganalisis sistem linear dengan dua atau tiga peubah. Karena garis dan bidang juga akan menjadi sumber contoh penting dalam kuliah ini, kita mengingat kembali beberapa gagasan dasarnya di bawah ini.   Representasi Matriks dari Sistem Linear   Representasi Matriks dari Sistem Linear  sistem linear representasi matriks  sistem linear representasi matriks notasi   Jika adalah matriks koefisien dari suatu sistem persamaan linear dan adalah vektor konstanta, maka kita akan menuliskan sebagai ungkapan singkat untuk sistem persamaan linear tersebut, yang akan kita sebut sebagai representasi matriks dari sistem linear.    Representasi Matriks dari Sistem Linear      Notasi untuk sistem persamaan linear  sistem linear notasi  Sistem persamaan linear memiliki matriks koefisien dan vektor konstanta dan sehingga akan direferensikan sebagai .    Matriks Augmentasi  matriks augmentasi  matriks augmentasi notasi   Misalkan kita memiliki sistem dengan persamaan dalam variabel, dengan matriks koefisien dan vektor konstanta . Maka matriks augmentasi dari sistem persamaan tersebut adalah matriks berukuran yang kolom pertamanya adalah kolom-kolom dari dan kolom terakhirnya (kolom ke- ) adalah vektor kolom . Ketika dideskripsikan secara simbolik, matriks ini akan dituliskan sebagai .    Matriks Augmentasi     Matriks augmentasi merepresentasikan semua informasi penting dalam sistem persamaan, karena nama-nama variabel telah diabaikan, dan satu-satunya koneksi dengan variabel adalah lokasi koefisien mereka dalam matriks. Perlu diperhatikan bahwa matriks augmentasi hanyalah sebuah matriks, dan bukan sistem persamaan. Namun, matriks augmentasi selalu terkait dengan suatu sistem persamaan, dan sebaliknya. Perhatikan bahwa kita menggunakan ungkapan simbolik, , dengan garis vertikal dan kita akan melakukan hal yang sama dalam contoh konkret kita tetapi belum melakukannya karena pertimbangan teknis. Berikut adalah contoh singkat.   Matriks augmentasi  Berikut adalah sistem berikut dengan 3 persamaan dalam 3 variabel. Berikut adalah matriks augmentasinya.    Matriks Augmentasi  matriks augmentasi  Sage memiliki metode matriks, .augment() , yang akan menggabungkan dua matriks, berdampingan asalkan keduanya memiliki jumlah baris yang sama. Metode yang sama akan memungkinkan Anda untuk mengaugmentasi matriks dengan vektor kolom, seperti yang dijelaskan dalam , asalkan jumlah entri dalam vektor sesuai dengan jumlah baris untuk matriks. Di sini kita mengulang konstruksi dalam . Kita sekarang akan memformat matriks kita sebagai input di beberapa baris, suatu praktik yang dapat Anda gunakan dalam lembar kerja Anda sendiri, atau tidak.   Perhatikan bahwa metode matriks .augment() membutuhkan beberapa input, dalam kasus di atas, vektor b . Ini akan menjelaskan perlunya tanda kurung pada akhir perintah titik , bahkan jika perintah tertentu tidak mengharapkan input.  Beberapa metode memungkinkan input opsional, biasanya menggunakan kata kunci. Matriks dapat melacak subdivisi, membuat pemisah antara baris dan\/atau kolom. Saat mengaugmentasi, Anda dapat meminta subdivisi untuk disertakan. Evaluasi sel komputasi di atas jika Anda belum melakukannya, sehingga A dan b terdefinisi, dan kemudian evaluasi:   Sebagai demonstrasi parsial manipulasi subdivisi matriks, kita dapat mengatur ulang subdivisi dari M dengan metode .subdivide() . Kita memberikan daftar baris untuk disubdivisi sebelum , kemudian daftar kolom untuk disubdivisi sebelum , di mana kita ingat bahwa penghitungan dimulai dari nol.      "
},
{
  "id": "d_lin-equation",
  "level": "2",
  "url": "s_systems.html#d_lin-equation",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Persamaan Linear.",
  "body": " Persamaan Linear  persamaan linear   Sebuah ekspresi linear dalam peubah tak diketahui (atau variabel) adalah ekspresi berbentuk dengan adalah bilangan real tetap.  Sebuah persamaan linear dalam peubah adalah persamaan yang dapat disederhanakan—hanya menggunakan penjumlahan dan pengurangan—menjadi bentuk yang kita sebut sebagai bentuk baku . Suatu persamaan dalam peubah disebut nonlinear jika tidak dapat disederhanakan ke bentuk hanya dengan penjumlahan dan pengurangan.  Diberikan suatu persamaan linear dalam bentuk baku , persamaan tersebut disebut homogen jika , dan nonhomogen jika .   "
},
{
  "id": "ss_linear_equations-3",
  "level": "2",
  "url": "s_systems.html#ss_linear_equations-3",
  "type": "Example",
  "number": "1.2.2",
  "title": "Persamaan Linear dan Nonlinear.",
  "body": " Persamaan Linear dan Nonlinear      Tinjau . Ini adalah persamaan linear dalam peubah . Bentuk bakunya adalah . Karena ruas kanannya tak nol, persamaan ini bersifat nonhomogen.    Persamaan adalah persamaan nonlinear dalam peubah dan .      "
},
{
  "id": "d_lin-sys",
  "level": "2",
  "url": "s_systems.html#d_lin-sys",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Sistem Persamaan Linear.",
  "body": " Sistem Persamaan Linear  sistem linear   Sebuah sistem persamaan linear (atau sistem linear ) adalah himpunan persamaan linear.  Sebuah sistem linear disebut homogen jika seluruh persamaannya homogen.   "
},
{
  "id": "ss_linear_equations-6",
  "level": "2",
  "url": "s_systems.html#ss_linear_equations-6",
  "type": "Remark",
  "number": "1.2.4",
  "title": "",
  "body": " Anda perlu segera membiasakan diri dengan notasi indeks ganda yang digunakan untuk menampilkan sistem linear. Berikut cara memahaminya:   Indeks pada dan menunjukkan baris ke- dalam sistem yang ditampilkan, atau secara ekuivalen, persamaan ke- .    Indeks pada menunjukkan kolom ke- , yang berkaitan dengan peubah ke- , untuk .     "
},
{
  "id": "d_lin-sys-sols",
  "level": "2",
  "url": "s_systems.html#d_lin-sys-sols",
  "type": "Definition",
  "number": "1.2.5",
  "title": "Solusi Sistem Linear.",
  "body": " Solusi Sistem Linear  solusi sistem linear   Sebuah solusi persamaan linear  adalah sebuah -tuple bilangan real sedemikian sehingga substitusi menjadikan persamaan tersebut benar. Dalam hal ini, kita katakan bahwa  memecahkan persamaan tersebut .  Sebuah solusi sistem persamaan linear  adalah sebuah -tuple yang merupakan solusi dari masing-masing persamaan dalam sistem tersebut. Kita katakan bahwa  memecahkan sistem tersebut .   "
},
{
  "id": "ss_linear_equations-8",
  "level": "2",
  "url": "s_systems.html#ss_linear_equations-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tidak konsisten konsisten "
},
{
  "id": "s_systems_eg_2eqns2varss",
  "level": "2",
  "url": "s_systems.html#s_systems_eg_2eqns2varss",
  "type": "Example",
  "number": "1.2.6",
  "title": "Solusi Sistem Elementer.",
  "body": " Solusi Sistem Elementer   Untuk tiap sistem berikut, tentukan himpunan solusinya.                  Persamaan pertama mengimplikasikan . Substitusi untuk pada persamaan kedua menghasilkan , suatu kontradiksi. Maka tidak ada solusi: .    Persamaan pertama memberi . Substitusi ke persamaan kedua menghasilkan , sehingga . Maka solusi tunggalnya adalah , dan .    Persamaan kedua hanyalah dua kali persamaan pertama. Keduanya memiliki himpunan solusi yang sama, sehingga cukup cari semua solusi dari . Misalkan untuk sebarang , maka . Jadi solusinya adalah untuk semua , dan , suatu himpunan tak hingga!      "
},
{
  "id": "definition-MRLS",
  "level": "2",
  "url": "s_systems.html#definition-MRLS",
  "type": "Definition",
  "number": "1.2.7",
  "title": "Representasi Matriks dari Sistem Linear.",
  "body": " Representasi Matriks dari Sistem Linear  sistem linear representasi matriks  sistem linear representasi matriks notasi   Jika adalah matriks koefisien dari suatu sistem persamaan linear dan adalah vektor konstanta, maka kita akan menuliskan sebagai ungkapan singkat untuk sistem persamaan linear tersebut, yang akan kita sebut sebagai representasi matriks dari sistem linear.    Representasi Matriks dari Sistem Linear    "
},
{
  "id": "example-NSLE",
  "level": "2",
  "url": "s_systems.html#example-NSLE",
  "type": "Example",
  "number": "1.2.8",
  "title": "Notasi untuk sistem persamaan linear.",
  "body": " Notasi untuk sistem persamaan linear  sistem linear notasi  Sistem persamaan linear memiliki matriks koefisien dan vektor konstanta dan sehingga akan direferensikan sebagai .  "
},
{
  "id": "definition-AM",
  "level": "2",
  "url": "s_systems.html#definition-AM",
  "type": "Definition",
  "number": "1.2.9",
  "title": "Matriks Augmentasi.",
  "body": " Matriks Augmentasi  matriks augmentasi  matriks augmentasi notasi   Misalkan kita memiliki sistem dengan persamaan dalam variabel, dengan matriks koefisien dan vektor konstanta . Maka matriks augmentasi dari sistem persamaan tersebut adalah matriks berukuran yang kolom pertamanya adalah kolom-kolom dari dan kolom terakhirnya (kolom ke- ) adalah vektor kolom . Ketika dideskripsikan secara simbolik, matriks ini akan dituliskan sebagai .    Matriks Augmentasi    "
},
{
  "id": "example-AMAA",
  "level": "2",
  "url": "s_systems.html#example-AMAA",
  "type": "Example",
  "number": "1.2.10",
  "title": "Matriks augmentasi.",
  "body": " Matriks augmentasi  Berikut adalah sistem berikut dengan 3 persamaan dalam 3 variabel. Berikut adalah matriks augmentasinya.  "
},
{
  "id": "sage-AM",
  "level": "2",
  "url": "s_systems.html#sage-AM",
  "type": "Computation",
  "number": "1.2.11",
  "title": "Matriks Augmentasi.",
  "body": " Matriks Augmentasi  matriks augmentasi  Sage memiliki metode matriks, .augment() , yang akan menggabungkan dua matriks, berdampingan asalkan keduanya memiliki jumlah baris yang sama. Metode yang sama akan memungkinkan Anda untuk mengaugmentasi matriks dengan vektor kolom, seperti yang dijelaskan dalam , asalkan jumlah entri dalam vektor sesuai dengan jumlah baris untuk matriks. Di sini kita mengulang konstruksi dalam . Kita sekarang akan memformat matriks kita sebagai input di beberapa baris, suatu praktik yang dapat Anda gunakan dalam lembar kerja Anda sendiri, atau tidak.   Perhatikan bahwa metode matriks .augment() membutuhkan beberapa input, dalam kasus di atas, vektor b . Ini akan menjelaskan perlunya tanda kurung pada akhir perintah titik , bahkan jika perintah tertentu tidak mengharapkan input.  Beberapa metode memungkinkan input opsional, biasanya menggunakan kata kunci. Matriks dapat melacak subdivisi, membuat pemisah antara baris dan\/atau kolom. Saat mengaugmentasi, Anda dapat meminta subdivisi untuk disertakan. Evaluasi sel komputasi di atas jika Anda belum melakukannya, sehingga A dan b terdefinisi, dan kemudian evaluasi:   Sebagai demonstrasi parsial manipulasi subdivisi matriks, kita dapat mengatur ulang subdivisi dari M dengan metode .subdivide() . Kita memberikan daftar baris untuk disubdivisi sebelum , kemudian daftar kolom untuk disubdivisi sebelum , di mana kita ingat bahwa penghitungan dimulai dari nol.   "
},
{
  "id": "s_systemsb",
  "level": "1",
  "url": "s_systemsb.html",
  "type": "Section",
  "number": "1.3",
  "title": "Eliminasi Gaussian",
  "body": " Eliminasi Gaussian   Pada kita menjelaskan bagaimana cara menyelesaikan sistem linear . Prosedur tersebut melibatkan penerapan serangkaian operasi baris pada untuk memperoleh sistem yang lebih sederhana .  Pada bagian ini kita akan memberikan penjelaan lebih detail yaitu bagaimana   mendeskripsikan secara tepat apa yang kita maksud dengan sistem lebih sederhana ,    memberikan algoritma untuk menentukan secara tepat urutan operasi baris apa yang harus diterapkan untuk memperoleh sistem yang lebih sederhana ini,    menjelaskan cara menemukan semua solusi dari sistem yang lebih sederhana yang dihasilkan.     Sebelum kita memulai langkah-langkah ini, kita menjelaskan notasi tertentu. Seperti Anda lihat, ketika melakukan operasi baris pada sistem persamaan, pada dasarnya memperlakukan variabel yang tidak diketahui, serta simbol plus dan sama dengan, salah satu hal yang berubah dalam suatu langkah adalah koefisien dalam persamaan.    Matriks   Sebuah matriks adalah susunan bilangan berbentuk persegi panjang.  Matriks dengan baris dan kolom dikatakan memiliki ukuran (atau dimensi ) .     Matriks augmentasi    Misalkan adalah sistem linear . Matriks augmentasi yang terkait dengan  adalah matriks .     Matriks bentuk eselon baris  Berikut adalah formulasi untuk sistem linear sederhana ; yaitu sistem yang matriks augmentasinya berada dalam bentuk eselon baris , seperti yang dijelaskan di bawah.   Bentuk eselon baris    Baris nol dari suatu matriks adalah baris yang semua entrinya sama dengan nol; baris tak-nol adalah baris yang memuat setidaknya satu entri tak-nol.  Suatu matriks berada dalam bentuk eselon baris jika kondisi-kondisi berikut terpenuhi.  (i)  Pada sembarang baris tak-nol, entri tak-nol pertama (yaitu, paling kiri) sama dengan satu. Satu utama (pivot) dari suatu matriks adalah entri dari suatu baris yang sama dengan satu, dan merupakan entri tak-nol pertama dari baris tersebut.   (ii)  Semua baris nol dikelompokkan bersama di bagian bawah matriks.   (iii)  Diberikan dua baris tak-nol sembarang dalam matriks, satu utama (pivot) dari baris yang lebih bawah terletak di sebelah kanan satu utama dari baris di atasnya.     Suatu matriks berada dalam bentuk eselon baris tereduksi jika selain memenuhi kondisi (i)-(iii) juga memenuhi kondisi berikut.   (iv) Setiap kolom matriks yang memuat satu utama pada salah satu barisnya,maka itu adalah satu-satunya entri tak-nol dari kolom tersebut.    Sistem linear berada dalam bentuk eselon baris (masing-masing bentuk eselon baris tereduksi ) jika matriks augmentasinya berada dalam bentuk eselon baris (masing-masing bentuk eselon baris tereduksi).    Dalam praktik untuk memutuskan apakah suatu matriks berada dalam bentuk eselon baris (tereduksi), ikuti langkah-langkah berikut:   Pertama verifikasi apakah semua baris nol berada di bagian bawah.    Untuk setiap baris tak-nol, tentukan apakah entri tak-nol pertama adalah 1, dan tandai kotak pada pivot tersebut.    Pastikan kotak-kotak tersebut membentuk pola tangga.    (Dan untuk bentuk eselon baris tereduksi.) Tentukan apakah setiap kolom selain pivot memiliki nilai 0.      Bentuk eselon baris versus bentuk eselon baris tereduksi   Untuk setiap matriks, tentukan (a) apakah matriks tersebut berada dalam bentuk eselon baris, dan (b) apakah matriks tersebut berada dalam bentuk eselon baris tereduksi.                  Di bawah ini Anda menemukan matriks dengan satu utama yang ditandai kotak. Matriks ini bukan dalam bentuk eselon baris juga bentuk eselon baris tereduksi karena berbagai alasan: baris nol tidak semuanya dikelompokkan di bagian bawah matrik; baris pertama tak-nol, tetapi tidak memiliki satu utama; satu utama dari baris keempat berada di sebelah kiri satu utama dari baris di atasnya.     Di bawah ini Anda menemukan matriks dengan satu utama yang ditandai kotak. Matriks ini berada dalam bentuk eselon baris: baris nol (baris 4 dan 5) dikelompokkan di bagian bawah; setiap baris tak-nol memiliki satu utama (diberi kotak pada matriks di bawah); satu utama secara berurutan berada disebelah bawah kanannya untuk setiap baris dan membentuk tangga. Matriks ini tidak berada dalam bentuk eselon baris tereduksi, karena kolom terakhir memuat satu utama pada baris ketiganya, dan entri tak-nol pada baris pertamanya.        Eliminasi Gaussian  Kita sekarang akan mendeskripsikan prosedur sistematis, yang disebut eliminasi Gaussian , yang memungkinkan kita mereduksi sistem linear menjadi sistem dalam bentuk eselon baris. Sesuai dengan pembahasan sebelumnya, kita akan mengidentifikasi sistem dengan matriks augmentasinya . Kemudian, mereduksi sistem linear menggunakan operasi baris elementer pada persamaan tersebut dengan operasi baris elementer pada matriks.   Operasi baris elementer pada matriks  operasi baris elementer  operasi baris elementer perkalian skalar  operasi baris elementer pertukaran baris  operasi baris elementer penjumlahan baris  reduksi baris pada matriks  ekuivalensi baris pada matriks   Sebuah operasi baris elementer adalah salah satu dari tiga jenis operasi matriks berikut. Misalkan adalah matriks yang diberikan, dan nyatakan dengan baris ke- dari .    Perkalian skalar  Kalikan sebuah baris dengan bilangan tak-nol  : yaitu, ganti dengan , hasil perkalian semua entri baris dengan .    Pertukaran baris  Tukar dua baris dari .    Penjumlahan baris  Tambahkan kelipatan satu baris ke baris lain: yaitu, ganti dengan untuk suatu , , dan .    Proses mengubah matriks menggunakan operasi baris elementer disebut reduksi baris   Dua matriks ekuivalen baris jika yang salah satunya dari matrik diperoleh dari yang lain dengan melakukan serangkaian operasi baris elementer.    Selanjutkan kita dapat mendefinisikan eliminasi Gaussian yaitu prosedur, atau algoritma , yang menerima masukan matriks dan mereduksinya menjadi matriks dalam bentuk eselon baris.   Eliminasi Gaussian memiliki banyak kegunaan   Eliminasi Gaussian memiliki manfaat dalam menyelesaikan sistem persamaan linear. Proses ini hanyalah prosedur tertentu yang dilakukan pada suatu matriks untuk menyederhanakan sistem linear     Eliminasi Gaussian  eliminasi Gaussian    Eliminasi Gaussian adalah algoritma yang dijelaskan di bawah. Algoritma ini menerima masukan matriks dan mengembalikan matriks yang ekuivalen baris dalam bentuk eselon baris.    Langkah 1  Temukan kolom tak-nol paling kiri dan lakukan pertukaran baris untuk memindahkan baris dengan entri tak-nol ini ke bagian atas matriks.    Langkah 2  Skala baris teratas yang baru untuk menghasilkan satu utama pada baris tersebut. Sebut baris baru ini .    Langkah 3  Untuk setiap baris di bawah , lakukan operasi baris berbentuk untuk mengganti semua entri di bawah satu utama dari dengan nol.    Langkah 4  Mulai lagi dengan Langkah 1 yang diterapkan pada matriks yang terdiri dari semua baris di bawah . Lanjutkan hingga matriks berada dalam bentuk eselon baris.       Contoh  Gunakan contoh berikut sebagai bagaimana melakukan dan memberi anotasi langkah-langkah dalam eliminasi Gaussian. Silahkan lakukan operasi sesuai urutan yang ditentukan dalam Langkah 1-4 dari .   Matriks yang dihasilkan oleh eliminasi Gaussian dijamin berada dalam bentuk eselon baris, tetapi mungkin tidak berada dalam bentuk eselon baris tereduksi . Eliminasi Gauss-Jordan menyatakan dengan sistematis melakukan pross reduksi lebih sederhana.    Eliminasi Gauss-Jordan    Eliminasi Gauss-Jordan adalah algoritma menerima masukan matriks dan menhgasilkan matriks yang ekuivalen baris dalam bentuk eselon baris tereduksi.    Langkah 1-4  Terapkan eliminasi Gaussian untuk mengubah menjadi matriks dalam bentuk eselon baris.    Langkah 5  Temukan kolom paling kanan dari matriks yang memuat satu utama. Misalkan adalah baris yang memuat satu utama ini. Untuk setiap baris di atas , lakukan operasi baris berbentuk untuk mengganti semua entri di atas satu utama dengan nol.    Langkah 6  Mulai lagi dengan Langkah 5 untuk diterapkan pada kolom berikutnya di sebelah kiri yang memuat satu utama. Lanjutkan hingga matriks berada dalam bentuk eselon baris tereduksi.      Melanjutkan contoh sebelumnya: .   Operasi Baris Elementer (Row Operations) di SageMath   Indeks baris dimulai dari (bukan ). Jadi baris pertama adalah baris ke- , baris kedua adalah baris ke- , dst.  Operasi ini mengubah matriks secara langsung (in place).    Tiga Operasi Dasar Baris   1. A.rescale_row(i, a)  Fungsi: Mengalikan baris ke- dengan skalar .   Contoh  A = matrix([[1, 2, 3], [4, 5, 6]]) A.rescale_row(1, 2) # Kalikan baris ke-1 dengan 2 # Hasil: A = [[1, 2, 3], [8, 10, 12]]    2. A.add_multiple_of_row(i, j, a)  Fungsi: Menambahkan (baris ke- ) ke baris ke- .  Rumus:    Contoh  A = matrix([[1, 2, 3], [4, 5, 6]]) A.add_multiple_of_row(1, 0, -4) # Tambahkan -4*(baris 0) ke baris 1 # Hasil: A = [[1, 2, 3], [0, -3, -6]]    3. A.swap_rows(i, j)  Fungsi: Menukar baris ke- dengan baris ke- .   Contoh  A = matrix([[1, 2, 3], [4, 5, 6]]) A.swap_rows(0, 1) # Tukar baris 0 dan 1 # Hasil: A = [[4, 5, 6], [1, 2, 3]]     Contoh Sistem Persamaan Linear   Sistem persamaan:     Matriks augmented:    Langkah 1: Eliminasi pada baris 2 dan 3.  Operasi: dan .   Langkah 2: Tukar baris 2 dan 3 agar pivot lebih mudah.  Operasi: .   Langkah 3: Eliminasi pada baris 3.  Operasi: .   Langkah 4: Normalisasi baris 3.  Operasi: .   Dari sini diperoleh . Lanjutkan ke bentuk eselon baris tereduksi.  dan .   Langkah 5: Langkah terakhir: Eliminasi pada baris 1.  Operasi: .   Kesimpulan: Solusi: , , .    Implementasi proses menggunakan Sage  matriks augmentasi  Sage memiliki metode matriks, .augment() , yang akan menggabungkan dua matriks, berdampingan asalkan keduanya memiliki jumlah baris yang sama. Metode yang sama akan memungkinkan Anda untuk mengaugmentasi matriks dengan vektor kolom, seperti yang dijelaskan dalam , asalkan jumlah entri dalam vektor sesuai dengan jumlah baris untuk matriks. Di sini kita mengulang konstruksi dalam . Kita sekarang akan memformat matriks kita sebagai input di beberapa baris, suatu praktik yang dapat Anda gunakan dalam lembar kerja Anda sendiri, atau tidak.    dan sebenarnya adalah teorema yang tersamar, dan kita meresmikannya dalam .   Eliminasi Gaussian  Pada sel Sage pertama di bawah ini, Anda menemukan implementasi rekursif eliminasi Gaussian di Sage yang mencakup komentar penjelasan. Evaluasi sel ini untuk memuat fungsi row_echelon_form . Sel kedua memungkinkan Anda menerapkan algoritma eliminasi Gaussian pada matriks pilihan Anda. Seperti yang dapat Anda lihat, fungsi show menyediakan versi latex yang bagus untuk keluaran.    Sage memiliki metode reduksi barisnya sendiri, rref , yang mengubah matriks menjadi bentuk eselon baris tereduksi . Mari kita bandingkan keluaran dari kedua algoritma ini.   Aktivitas berikut dapat berguna untuk mengimplementasikan eliminasi Gaussian dengan cara yang menampilkan semua langkah antara. Gunakan sel Sage kosong di bawah ini untuk bereksperimen.   Modifikasi kode row_echelon_form untuk membuat algoritma non-rekursif.    Tambahkan perintah show ke versi non-rekursif Anda dari row_echelon_form untuk menampilkan langkah-langkah dalam reduksi baris.        Bentuk matriks ekuivalen baris     Bentuk eselon baris ada  Sembarang matriks ekuivalen baris dengan matriks dalam bentuk eselon baris. Memang, eliminasi Gaussian mereduksi baris menjadi matriks dalam bentuk eselon baris.    Bentuk eselon baris tereduksi ada  Sembarang matriks ekuivalen baris dengan matriks dalam bentuk eselon baris tereduksi. Memang, eliminasi Gauss-Jordan mereduksi baris menjadi matriks dalam bentuk eselon baris tereduksi.    Bentuk eselon baris tereduksi adalah unik  Diberikan sembarang matriks , terdapat matriks yang unik dalam bentuk eselon baris tereduksi yang ekuivalen baris dengan .      Kita akan banyak menggunakan dua hasil pertama dari . Bukti pernyataan-pernyataan ini tidak sulit, tetapi tidak terlalu mencerahkan. Oleh karena itu kami menghilangkannya di sini, dan mengarahkan pembaca yang tertarik ke A First Course in Linear Algebra karya Robert Beezer ( Teorema REMEF ).  Pernyataan ketiga dari , bahwa setiap matriks ekuivalen baris dengan matriks dalam bentuk eselon baris tereduksi yang unik , memang memiliki bukti yang mencerahkan. Namun, kami akan menunda bukti ini hingga kami memiliki sedikit lebih banyak teori yang tersedia. (Lihat .) Sampai saat itu, kami akan dengan sadar tidak menggunakan hasil ini dalam mengembangkan teori lebih lanjut kami.   Bentuk eselon baris tidak unik   Tunjukkan bahwa matriks dapat ekuivalen baris dengan dua atau lebih matriks dalam bentuk eselon baris.    Ambil . Matriks ini direduksi menjadi menggunakan eliminasi Gaussian; dan direduksi lebih lanjut menjadi menggunakan eliminasi Gauss-Jordan. Dengan demikian kita melihat bahwa ekuivalen baris dengan dua matriks berbeda dalam bentuk eselon baris. (Menurut , matriks adalah satu-satunya matriks dalam bentuk eselon baris tereduksi yang ekuivalen baris dengan .)     "
},
{
  "id": "d_matrix",
  "level": "2",
  "url": "s_systemsb.html#d_matrix",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Matriks.",
  "body": " Matriks   Sebuah matriks adalah susunan bilangan berbentuk persegi panjang.  Matriks dengan baris dan kolom dikatakan memiliki ukuran (atau dimensi ) .   "
},
{
  "id": "d_augmented_matrix",
  "level": "2",
  "url": "s_systemsb.html#d_augmented_matrix",
  "type": "Definition",
  "number": "1.3.2",
  "title": "Matriks augmentasi.",
  "body": " Matriks augmentasi    Misalkan adalah sistem linear . Matriks augmentasi yang terkait dengan  adalah matriks .   "
},
{
  "id": "d_row_echelon",
  "level": "2",
  "url": "s_systemsb.html#d_row_echelon",
  "type": "Definition",
  "number": "1.3.3",
  "title": "Bentuk eselon baris.",
  "body": " Bentuk eselon baris    Baris nol dari suatu matriks adalah baris yang semua entrinya sama dengan nol; baris tak-nol adalah baris yang memuat setidaknya satu entri tak-nol.  Suatu matriks berada dalam bentuk eselon baris jika kondisi-kondisi berikut terpenuhi.  (i)  Pada sembarang baris tak-nol, entri tak-nol pertama (yaitu, paling kiri) sama dengan satu. Satu utama (pivot) dari suatu matriks adalah entri dari suatu baris yang sama dengan satu, dan merupakan entri tak-nol pertama dari baris tersebut.   (ii)  Semua baris nol dikelompokkan bersama di bagian bawah matriks.   (iii)  Diberikan dua baris tak-nol sembarang dalam matriks, satu utama (pivot) dari baris yang lebih bawah terletak di sebelah kanan satu utama dari baris di atasnya.     Suatu matriks berada dalam bentuk eselon baris tereduksi jika selain memenuhi kondisi (i)-(iii) juga memenuhi kondisi berikut.   (iv) Setiap kolom matriks yang memuat satu utama pada salah satu barisnya,maka itu adalah satu-satunya entri tak-nol dari kolom tersebut.    Sistem linear berada dalam bentuk eselon baris (masing-masing bentuk eselon baris tereduksi ) jika matriks augmentasinya berada dalam bentuk eselon baris (masing-masing bentuk eselon baris tereduksi).   "
},
{
  "id": "ss_ge_row_echelon-5",
  "level": "2",
  "url": "s_systemsb.html#ss_ge_row_echelon-5",
  "type": "Example",
  "number": "1.3.4",
  "title": "Bentuk eselon baris versus bentuk eselon baris tereduksi.",
  "body": " Bentuk eselon baris versus bentuk eselon baris tereduksi   Untuk setiap matriks, tentukan (a) apakah matriks tersebut berada dalam bentuk eselon baris, dan (b) apakah matriks tersebut berada dalam bentuk eselon baris tereduksi.                  Di bawah ini Anda menemukan matriks dengan satu utama yang ditandai kotak. Matriks ini bukan dalam bentuk eselon baris juga bentuk eselon baris tereduksi karena berbagai alasan: baris nol tidak semuanya dikelompokkan di bagian bawah matrik; baris pertama tak-nol, tetapi tidak memiliki satu utama; satu utama dari baris keempat berada di sebelah kiri satu utama dari baris di atasnya.     Di bawah ini Anda menemukan matriks dengan satu utama yang ditandai kotak. Matriks ini berada dalam bentuk eselon baris: baris nol (baris 4 dan 5) dikelompokkan di bagian bawah; setiap baris tak-nol memiliki satu utama (diberi kotak pada matriks di bawah); satu utama secara berurutan berada disebelah bawah kanannya untuk setiap baris dan membentuk tangga. Matriks ini tidak berada dalam bentuk eselon baris tereduksi, karena kolom terakhir memuat satu utama pada baris ketiganya, dan entri tak-nol pada baris pertamanya.     "
},
{
  "id": "d_rowops",
  "level": "2",
  "url": "s_systemsb.html#d_rowops",
  "type": "Definition",
  "number": "1.3.5",
  "title": "Operasi baris elementer pada matriks.",
  "body": " Operasi baris elementer pada matriks  operasi baris elementer  operasi baris elementer perkalian skalar  operasi baris elementer pertukaran baris  operasi baris elementer penjumlahan baris  reduksi baris pada matriks  ekuivalensi baris pada matriks   Sebuah operasi baris elementer adalah salah satu dari tiga jenis operasi matriks berikut. Misalkan adalah matriks yang diberikan, dan nyatakan dengan baris ke- dari .    Perkalian skalar  Kalikan sebuah baris dengan bilangan tak-nol  : yaitu, ganti dengan , hasil perkalian semua entri baris dengan .    Pertukaran baris  Tukar dua baris dari .    Penjumlahan baris  Tambahkan kelipatan satu baris ke baris lain: yaitu, ganti dengan untuk suatu , , dan .    Proses mengubah matriks menggunakan operasi baris elementer disebut reduksi baris   Dua matriks ekuivalen baris jika yang salah satunya dari matrik diperoleh dari yang lain dengan melakukan serangkaian operasi baris elementer.   "
},
{
  "id": "pr_GE-has-many-uses",
  "level": "2",
  "url": "s_systemsb.html#pr_GE-has-many-uses",
  "type": "Principle",
  "number": "1.3.6",
  "title": "Eliminasi Gaussian memiliki banyak kegunaan.",
  "body": " Eliminasi Gaussian memiliki banyak kegunaan   Eliminasi Gaussian memiliki manfaat dalam menyelesaikan sistem persamaan linear. Proses ini hanyalah prosedur tertentu yang dilakukan pada suatu matriks untuk menyederhanakan sistem linear   "
},
{
  "id": "d_GE",
  "level": "2",
  "url": "s_systemsb.html#d_GE",
  "type": "Definition",
  "number": "1.3.7",
  "title": "Eliminasi Gaussian.",
  "body": " Eliminasi Gaussian  eliminasi Gaussian    Eliminasi Gaussian adalah algoritma yang dijelaskan di bawah. Algoritma ini menerima masukan matriks dan mengembalikan matriks yang ekuivalen baris dalam bentuk eselon baris.    Langkah 1  Temukan kolom tak-nol paling kiri dan lakukan pertukaran baris untuk memindahkan baris dengan entri tak-nol ini ke bagian atas matriks.    Langkah 2  Skala baris teratas yang baru untuk menghasilkan satu utama pada baris tersebut. Sebut baris baru ini .    Langkah 3  Untuk setiap baris di bawah , lakukan operasi baris berbentuk untuk mengganti semua entri di bawah satu utama dari dengan nol.    Langkah 4  Mulai lagi dengan Langkah 1 yang diterapkan pada matriks yang terdiri dari semua baris di bawah . Lanjutkan hingga matriks berada dalam bentuk eselon baris.     "
},
{
  "id": "d_GaussJordan",
  "level": "2",
  "url": "s_systemsb.html#d_GaussJordan",
  "type": "Definition",
  "number": "1.3.8",
  "title": "Eliminasi Gauss-Jordan.",
  "body": " Eliminasi Gauss-Jordan    Eliminasi Gauss-Jordan adalah algoritma menerima masukan matriks dan menhgasilkan matriks yang ekuivalen baris dalam bentuk eselon baris tereduksi.    Langkah 1-4  Terapkan eliminasi Gaussian untuk mengubah menjadi matriks dalam bentuk eselon baris.    Langkah 5  Temukan kolom paling kanan dari matriks yang memuat satu utama. Misalkan adalah baris yang memuat satu utama ini. Untuk setiap baris di atas , lakukan operasi baris berbentuk untuk mengganti semua entri di atas satu utama dengan nol.    Langkah 6  Mulai lagi dengan Langkah 5 untuk diterapkan pada kolom berikutnya di sebelah kiri yang memuat satu utama. Lanjutkan hingga matriks berada dalam bentuk eselon baris tereduksi.     "
},
{
  "id": "ss_gaussian_elimination-10-5",
  "level": "2",
  "url": "s_systemsb.html#ss_gaussian_elimination-10-5",
  "type": "Example",
  "number": "1.3.9",
  "title": "Contoh.",
  "body": " Contoh  A = matrix([[1, 2, 3], [4, 5, 6]]) A.rescale_row(1, 2) # Kalikan baris ke-1 dengan 2 # Hasil: A = [[1, 2, 3], [8, 10, 12]]  "
},
{
  "id": "ss_gaussian_elimination-10-9",
  "level": "2",
  "url": "s_systemsb.html#ss_gaussian_elimination-10-9",
  "type": "Example",
  "number": "1.3.10",
  "title": "Contoh.",
  "body": " Contoh  A = matrix([[1, 2, 3], [4, 5, 6]]) A.add_multiple_of_row(1, 0, -4) # Tambahkan -4*(baris 0) ke baris 1 # Hasil: A = [[1, 2, 3], [0, -3, -6]]  "
},
{
  "id": "ss_gaussian_elimination-10-12",
  "level": "2",
  "url": "s_systemsb.html#ss_gaussian_elimination-10-12",
  "type": "Example",
  "number": "1.3.11",
  "title": "Contoh.",
  "body": " Contoh  A = matrix([[1, 2, 3], [4, 5, 6]]) A.swap_rows(0, 1) # Tukar baris 0 dan 1 # Hasil: A = [[4, 5, 6], [1, 2, 3]]  "
},
{
  "id": "sage-GE",
  "level": "2",
  "url": "s_systemsb.html#sage-GE",
  "type": "Computation",
  "number": "1.3.12",
  "title": "Implementasi proses menggunakan Sage.",
  "body": " Implementasi proses menggunakan Sage  matriks augmentasi  Sage memiliki metode matriks, .augment() , yang akan menggabungkan dua matriks, berdampingan asalkan keduanya memiliki jumlah baris yang sama. Metode yang sama akan memungkinkan Anda untuk mengaugmentasi matriks dengan vektor kolom, seperti yang dijelaskan dalam , asalkan jumlah entri dalam vektor sesuai dengan jumlah baris untuk matriks. Di sini kita mengulang konstruksi dalam . Kita sekarang akan memformat matriks kita sebagai input di beberapa baris, suatu praktik yang dapat Anda gunakan dalam lembar kerja Anda sendiri, atau tidak.   "
},
{
  "id": "sage_ge",
  "level": "2",
  "url": "s_systemsb.html#sage_ge",
  "type": "Project",
  "number": "1.3.1",
  "title": "Eliminasi Gaussian.",
  "body": " Eliminasi Gaussian  Pada sel Sage pertama di bawah ini, Anda menemukan implementasi rekursif eliminasi Gaussian di Sage yang mencakup komentar penjelasan. Evaluasi sel ini untuk memuat fungsi row_echelon_form . Sel kedua memungkinkan Anda menerapkan algoritma eliminasi Gaussian pada matriks pilihan Anda. Seperti yang dapat Anda lihat, fungsi show menyediakan versi latex yang bagus untuk keluaran.    Sage memiliki metode reduksi barisnya sendiri, rref , yang mengubah matriks menjadi bentuk eselon baris tereduksi . Mari kita bandingkan keluaran dari kedua algoritma ini.   Aktivitas berikut dapat berguna untuk mengimplementasikan eliminasi Gaussian dengan cara yang menampilkan semua langkah antara. Gunakan sel Sage kosong di bawah ini untuk bereksperimen.   Modifikasi kode row_echelon_form untuk membuat algoritma non-rekursif.    Tambahkan perintah show ke versi non-rekursif Anda dari row_echelon_form untuk menampilkan langkah-langkah dalam reduksi baris.      "
},
{
  "id": "s_ge_th_matrixforms",
  "level": "2",
  "url": "s_systemsb.html#s_ge_th_matrixforms",
  "type": "Theorem",
  "number": "1.3.13",
  "title": "Bentuk matriks ekuivalen baris.",
  "body": " Bentuk matriks ekuivalen baris     Bentuk eselon baris ada  Sembarang matriks ekuivalen baris dengan matriks dalam bentuk eselon baris. Memang, eliminasi Gaussian mereduksi baris menjadi matriks dalam bentuk eselon baris.    Bentuk eselon baris tereduksi ada  Sembarang matriks ekuivalen baris dengan matriks dalam bentuk eselon baris tereduksi. Memang, eliminasi Gauss-Jordan mereduksi baris menjadi matriks dalam bentuk eselon baris tereduksi.    Bentuk eselon baris tereduksi adalah unik  Diberikan sembarang matriks , terdapat matriks yang unik dalam bentuk eselon baris tereduksi yang ekuivalen baris dengan .     "
},
{
  "id": "s_ge_ex_REFnotunique",
  "level": "2",
  "url": "s_systemsb.html#s_ge_ex_REFnotunique",
  "type": "Example",
  "number": "1.3.14",
  "title": "Bentuk eselon baris tidak unik.",
  "body": " Bentuk eselon baris tidak unik   Tunjukkan bahwa matriks dapat ekuivalen baris dengan dua atau lebih matriks dalam bentuk eselon baris.    Ambil . Matriks ini direduksi menjadi menggunakan eliminasi Gaussian; dan direduksi lebih lanjut menjadi menggunakan eliminasi Gauss-Jordan. Dengan demikian kita melihat bahwa ekuivalen baris dengan dua matriks berbeda dalam bentuk eselon baris. (Menurut , matriks adalah satu-satunya matriks dalam bentuk eselon baris tereduksi yang ekuivalen baris dengan .)   "
},
{
  "id": "s_matrix",
  "level": "1",
  "url": "s_matrix.html",
  "type": "Section",
  "number": "2.1",
  "title": "Aritmetika Matriks",
  "body": " Aritmetika Matriks   Matriks memainkan peran dalam membahas tentang sistem linear di . Dalam bab ini membahas lebih mendalam tentang matrik.  Seperti topik matematika lainnya, matriks dapat digunakan dalam banyak hal. Dengan demikian, penting untuk memabahas lebih detail dalam kursus ini. .   Matriks   Tidak setiap matriks harus dianggap sebagai matriks augmented yang terkait dengan sistem linear.      Dasar-dasar matrik  Kita mulai dengan beberapa definisi mendasar tentang matriks, kesamaan matriks, dan jenis-jenis matriks khusus. Seperti yang diperjelas oleh definisi berikut ini, matriks hanyalah urutan bilangan yang diatur dengan cara yang sangat khusus.   Matriks  matriks   Sebuah matriks (real) adalah array persegi panjang dari bilangan real . Bilangan yang terletak pada baris ke- dan kolom ke- dari disebut -entri (atau -entri ) dari .  Sebuah matriks dengan baris dan kolom dikatakan memiliki ukuran (atau dimensi ) .  Matrik biasanya menggunakan huruf kapital awal alfabet (  , ) untuk menunjukkan matriks.    Matriks yang ditampilkan dalam sulit dalam ruang yang dibutuhkan untuk menampilkannya, maupun waktu yang dibutuhkan untuk menulis atau mengetiknya. Oleh karena itu kami memperkenalkan dua bentuk notasi yang agak saling melengkapi untuk membantu mendeskripsikan matriks.   Notasi Matriks    Matriks yang entri -nya adalah     Entri ke- dari matriks       Notasi pembangun matriks  matriks notasi pembangun matriks  Notasi menunjukkan matriks yang entri -nya (baris ke- , kolom ke- ) adalah . Ketika tidak ada bahaya kebingungan, notasi ini sering disingkat menjadi .    Notasi entri matriks  matriks notasi entri matriks  Diberikan sebuah matriks , notasi menunjukkan entri ke- dari .   Jadi jika , maka untuk semua dan .     Notasi untuk menyatakan matriks sering digunakan hanya untuk memberikan nama pada entri-entri dari suatu matriks sembarang. Namun, ini juga dapat digunakan untuk mendeskripsikan matriks yang entri -nya diberikan oleh aturan atau formula tertentu.  Sebagai contoh, misalkan , dimana . Ini adalah matriks yang entri -nya adalah . Jadi . Dalam contoh ini kita memiliki dan untuk .    Kesamaan Matriks   Misalkan dan adalah matriks dengan dimensi dan , masing-masing. Dua matriks tersebut sama jika    dan ;     untuk semua dan .     Dengan kata lain, kita memiliki jika dan hanya jika dan memiliki bentuk yang sama, dan setiap entri dari sama dengan entri yang bersesuaian dari .     Kesamaan Matriks   Matriks tidak sama satu sama lain, meskipun mereka memiliki entri yang sama yang muncul kira-kira dalam urutan yang sama. Dalam kasus ini kesamaan tidak berlaku karena dan memiliki bentuk yang berbeda: adalah , dan adalah .  Matriks dan memiliki dimensi yang sama, tetapi tidak sama karena .     Matriks persegi, vektor baris, vektor kolom, matriks nol  matriks persegi  matriks vektor baris  matriks vektor kolom  matriks diagonal dari matriks persegi  matriks matriks nol    matriks nol    Sebuah matriks adalah bujur sangkar (persegi) jika dimensinya adalah . Diagonal dari sebuah matriks persegi terdiri dari entri-entri untuk .  Sebuah matriks  disebut vektor baris . Entri ke- dari sebuah vektor baris dilambangkan   Sebuah matriks  , disebut vektor kolom . Entri ke- dari sebuah vektor kolom dilambangkan .   matriks nol , dilambangkan , adalah matriks dengan dimensi tersebut, yang semua entrinya adalah nol: yaitu, untuk semua dan .  Ketika ukuran dimensi tidak dibutuhkan untuk ditampilkan, kita akan menghapus subskrip dan menulis cukup untuk sebuah matriks nol.     Matriks sebagai kumpulan kolom\/baris  Misalkan adalah sebuah matriks . Kita akan sering memikirkan sebagai kumpulan kolom, dalam hal ini kita menulis , dimana adalah vektor kolom yang terdiri dari entri-entri dari kolom ke- dari : , . Demikian pula, ketika kita memikirkan sebagai kumpulan baris, kita menulis , dimana adalah vektor baris yang terdiri dari entri-entri dari baris ke- dari : , . Garis vertikal dan horizontal digunakan untuk menekankan bahwa adalah vektor kolom dan adalah vektor baris.    Entri, Baris, dan Kolom Matriks  Sintaks Sage untuk mengakses entri spesifik dari sebuah matriks mirip dengan notasi entri matriks secara umum. Namun, dalam Python, kita selalu menghitung dari 0. Sehingga jika A untuk matriks di Sage, A[i,j] adalah entri ke- -nya.   Subset entri matriks yang ditentukan diperoleh melalui metode slicing : misalnya, A[a:b, c:d] mengembalikan kumpulan entri dengan dan , disusun sebagai matriks.   Membiarkan sisi kiri atau kanan dari : kosong dalam notasi ini menghapus batas restriksi indeks yang bersesuaian (kiri atau kanan). Jadi A[2, :] mengembalikan baris ketiga dari , dan A[1:, 3] mengembalikan bagian dari kolom keempat dari dimulai dengan entri keduanya.   Sebagai alternatif, kita dapat memperoleh daftar semua baris atau kolom dari menggunakan metode rows() dan columns() .   Gunakan sel kosong di bawah ini untuk mencoba beberapa perintah ini.      Penjumlahan, pengurangan dan perkalian skalar  Kita sekarnga membahas berbagai operasi aljabar yang akan kita gunakan untuk menggabungkan dan mengubah matriks; kita merujuk pada penggunaan operasi sebagai aritmetika matriks . Beberapa operasi ini menyerupai operasi aritmetika dalam hal notasi dan definisinya. Secara khusus, perhatikan dengan seksama (a) jenis objek matematika apa yang berfungsi sebagai input untuk setiap operasi (bahan operasi), dan (b) jenis objek matematika apa yang dikeluarkan.   Penjumlahan dan pengurangan matriks  penjumlahan matriks  pengurangan matriks    Penjumlahan Matriks adalah operasi yang didefinisikan sebagai berikut: diberikan dua matriks  dan , kita mendefinisikan jumlah mereka menjadi matriks . Dengan kata lain adalah matriks yang memenuhi untuk semua dan .   Pengurangan Matriks adalah operasi yang didefinisikan sebagai berikut: diberikan dua matriks  dan , kita mendefinisikan selisih mereka menjadi matriks . Dengan kata lain adalah matriks yang memenuhi untuk semua dan .     Perhatikan bahwa penjumlahan\/pengurangan matriks tidak didefinisikan untuk sembarang pasangan matriks. Penjumlahan matriks (atau pengurangan) adalah dua matriks dengan dimensi yang sama ; dan outputnya adalah matriks yang memiliki dimensi sama dari pasangan matrik tersebut.    Perkalian skalar matriks  perkalian skalar matriks   Diberikan sembarang matriks dan sembarang konstanta , kita mendefinisikan . Dengan kata lain, adalah matriks yang diperoleh dengan \"menskalakan\" setiap entri dari dengan konstanta .  Kita menyebut sebuah kelipatan skalar dari . Selanjutnya, untuk membantu membedakan antara matriks dan bilangan real, kita akan merujuk elemen-elemen dari sebagai skalar .     Kombinasi linear dari matriks  kombinasi linear dari matriks   Diberikan matriks dengan dimensi yang sama, dan skalar , ekspresi disebut kombinasi linear dari matriks . Skalar disebut koefisien dari kombinasi linear tersebut.     Kombinasi linear matriks   Misalkan dan . Hitung .     .     Menyatakan matriks sebagai kombinasi linear   Tunjukkan bahwa dapat dinyatakan sebagai kombinasi linear dari matriks .    Kita harus menyelesaikan persamaan matriks (atau vektor baris) untuk skalar . Menghitung kombinasi linear di sebelah kiri menghasilkan persamaan matriks . Menggunakan definisi kesamaan matriks ( ), kita mendapatkan sistem persamaan . Menggunakan eliminasi Gaussian kita menemukan bahwa ada solusi unik untuk sistem ini: yaitu, . Kita menyimpulkan bahwa .      Perkalian matriks  Jadi bagaimana kita mendefinisikan perkalikan dari dua matriks? Melihat operasi sebelumnya, Anda mungkin telah menebak bahwa kita harus mendefinisikan perkalian dari dua matriks dengan mengambil perkalian dari entri-entri yang bersesuaian. Tidak demikian!   Perkalian matriks  perkalian matriks    Perkalian Matriks adalah operasi yang didefinisikan sebagai berikut: diberikan sebuah matriks  dan sebuah matriks  , kita mendefinisikan perkalian matrik tersebut menjadi matriks  yang entri -nya yang dinyatakan dengan formula untuk semua dan .      Perkalian Matrik    Ukuran dan perkalian matriks  Perhatikan bagaimana, seperti penjumlahan, perkalian matriks tidak didefinisikan untuk sembarang pasangan matriks: harus ada kesepakatan tertentu dalam dimensi mereka.  Secara lebih rinci, agar produk dari dan terdefinisi, kita membutuhkan . Dengan kata lain kita membutuhkan dimensi \"dalam\" dari dan untuk menjadi sama: . Jika kondisi ini terpenuhi, dimensi dari matriks hasil ditentukan oleh dimensi \"luar\" dari dan . Secara skematis, Anda dapat memikirkan dimensi dalam sebagai \"dibatalkan\":     Perkalian matriks  Pertimbangkan matriks . Karena dimensi \"dalam\" dari dan setuju, kita dapat membentuk matriks produk , yang memiliki dimensi . Misalkan untuk semua . Menggunakan , kita hitung . Kita menyimpulkan bahwa .    Dot Produk  Dot produk    dot produk    Diberikan -tupel dan , dot produk mereka, dilambangkan , didefinisikan sebagai .     Dot Produk dan perkalian matriks   Misalkan adalah sebuah matriks , dan misalkan adalah sebuah matriks . Untuk semua , misalkan adalah baris ke- dari ; dan untuk semua misalkan adalah kolom ke- dari . Untuk semua , kita memiliki , dimana dan diperlakukan sebagai -tupel. Dengan kata lain, entri -th dari adalah dot produk dari baris ke- dari dan kolom ke- dari .    Tetapkan sebuah pasangan dengan dan . Dipertimbangkan sebagai -tupel, baris ke- dari dan kolom ke- dari diberikan sebagai . Kita memiliki , seperti yang diklaim.     Perkalian matriks via dot produk  Pertimbangkan matriks . Dua baris dari adalah . Dua kolom dari adalah . Menggunakan deskripsi dot produk dari perkalian matriks, kita hitung .   Definisi dari sebuah perkalian matriks tidak diragukan lagi lebih rumit daripada yang Anda harapkan. Semua ini akan masuk akal sekali kita mulai memikirkan matriks sebagai mendefinisikan fungsi-fungsi tertentu . Formula kita untuk entri-entri dari dipilih secara presisi sehingga matriks baru ini bersesuaian dengan komposisi dari fungsi-fungsi dan : sehingga .   Aritmetika Matriks  Kita menggunakan + dan * untuk penjumlahan dan perkalian matriks.   Sebagai bukti fleksibilitas Sage, simbol yang sama * juga digunakan untuk perkalian skalar.   Edit sel di bawah ini untuk melatih operasi ini.      Metode alternatif perkalian matrik  Selain definisi perkalian matriks yang diberikan, kita akan membuat dua cara untuk menghitung perkalian matriks, disebut metode kolom dan baris dari perkalian matriks.   Metode kolom dari perkalian matriks  perkalian matriks metode kolom   Misalkan dan . Metode kolom dari perkalian matriks menghitung menggunakan dua langkah di bawah ini.   Langkah 1  Misalkan adalah kolom ke- dari , dianggap sebagai vektor kolom. Maka .    Langkah 2  Misalkan adalah kolom ke- dari , dianggap sebagai vektor kolom. Diberikan sembarang vektor kolom kita memiliki .       Kita membuktikan kesamaan di kedua langkah secara terpisah.   Bukti Langkah 1  Kita harus menunjukkan , dimana . Pertama kita menunjukkan dan memiliki ukuran yang sama. Berdasarkan definisi perkalian matriks, adalah . Berdasarkan konstruksi memiliki kolom dan kolom ke- -nya adalah . Karena dan memiliki ukuran dan , masing-masing, memiliki ukuran . Jadi setiap dari kolom dari adalah vektor kolom . Mengikuti bahwa adalah , seperti yang diinginkan.  Selanjutnya kita menunjukkan bahwa untuk semua , . Karena entri -th dari adalah entri ke- dari kolom ke- dari , kita memiliki .    Bukti Langkah 2  Kita harus menunjukkan bahwa , dimana . Argumen biasa menunjukkan bahwa kedua dan adalah vektor kolom . Tinggal hanya untuk menunjukkan bahwa entri ke-  dari kolom sama dengan entri ke-  dari untuk semua . Untuk sembarang demikian kita memiliki .      Metode baris dari perkalian matriks  perkalian matriks metode baris   Misalkan dan . Metode baris dari perkalian matriks menghitung menggunakan dua langkah di bawah ini.   Langkah 1  Misalkan adalah baris ke- dari . Maka .    Langkah 2  Misalkan adalah baris ke- dari . Diberikan sembarang vektor baris kita memiliki .       Buktinya sangat mirip dengan itu dari dan dibiarkan kepada pembaca.     Metode kolom dan baris   Misalkan dan   Hitung menggunakan (a) definisi perkalian matriks, (b) metode kolom, (c) metode baris.       Menggunakan definisi, kita lihat dengan mudah bahwa     Misalkan adalah kolom-kolom dari , dan misalkan adalah kolom-kolom dari . Kita memiliki     Sekarang misalkan adalah baris-baris dari , dan misalkan adalah baris-baris dari . Kita memiliki         Metode kolom dan baris  Mari kita uji metode kolom dan baris menggunakan Sage dalam beberapa contoh spesifik. Di bawah ini kita menghasilkan matriks bilangan bulat acak dan dengan dimensi dan , masing-masing, dan menghitung perkalian matrik .   Mari kita periksa bahwa kolom ke- dari sama dengan produk dari dengan kolom ke- dari .   Sebagai alternatif, kita dapat mengonfirmasi kesamaan ini secara visual menggunakan tampilan dari di sel pertama di atas. Perhatikan bahwa hasil dari A*colsB[i] ditampilkan oleh Sage sebagai baris, meskipun secara teknis bagi kita ini adalah vektor kolom.   Selanjutnya, mari kita verifikasi bahwa hasil dari mengalikan dan kolom ke- dari adalah kombinasi linear yang bersesuaian dari kolom-kolom dari yang diberikan oleh koefisien dari kolom ini.   Sekarang gunakan sel Sage di bawah ini untuk mendemonstrasikan validitas metode baris untuk produk . Cukup modifikasi kode dalam dua sel di atas untuk mencerminkan metode baris, sebagai lawan dari metode kolom.       Transpos dari sebuah matriks  Kita mengakhiri bagian ini dengan satu operasi terakhir, transposisi matriks .   Transposisi matriks  matrix transposition  transpose   Diberikan sebuah matriks  transposnya adalah matriks yang entri -nya adalah entri -th dari . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .     Diberikan sebuah matriks kita dapat memberikan deskripsi berbasis kolom- atau baris dari sebagai berikut:    adalah matriks yang baris ke- -nya adalah kolom ke- dari .     adalah matriks yang kolom ke- -nya adalah baris ke- dari .       Transpos   Misalkan ; maka .  Misalkan , maka .     Transposisi matriks  Transposisi matriks diimplementasikan dalam Sage sebagai metode transpose() . Dalam sel di bawah ini kita (a) memilih bilangan bulat acak , (b) memilih sebuah matriks acak  dengan entri bilangan bulat, dan (c) menghitung transpos dari .   Seperti biasa, bereksperimen dengan sel Sage di bawah ini.      "
},
{
  "id": "princ_matrix_mantra",
  "level": "2",
  "url": "s_matrix.html#princ_matrix_mantra",
  "type": "Principle",
  "number": "2.1.1",
  "title": "Matriks.",
  "body": " Matriks   Tidak setiap matriks harus dianggap sebagai matriks augmented yang terkait dengan sistem linear.   "
},
{
  "id": "d_matrix",
  "level": "2",
  "url": "s_matrix.html#d_matrix",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Matriks.",
  "body": " Matriks  matriks   Sebuah matriks (real) adalah array persegi panjang dari bilangan real . Bilangan yang terletak pada baris ke- dan kolom ke- dari disebut -entri (atau -entri ) dari .  Sebuah matriks dengan baris dan kolom dikatakan memiliki ukuran (atau dimensi ) .  Matrik biasanya menggunakan huruf kapital awal alfabet (  , ) untuk menunjukkan matriks.   "
},
{
  "id": "d_matrix_notation",
  "level": "2",
  "url": "s_matrix.html#d_matrix_notation",
  "type": "Definition",
  "number": "2.1.3",
  "title": "Notasi Matriks.",
  "body": " Notasi Matriks    Matriks yang entri -nya adalah     Entri ke- dari matriks       Notasi pembangun matriks  matriks notasi pembangun matriks  Notasi menunjukkan matriks yang entri -nya (baris ke- , kolom ke- ) adalah . Ketika tidak ada bahaya kebingungan, notasi ini sering disingkat menjadi .    Notasi entri matriks  matriks notasi entri matriks  Diberikan sebuah matriks , notasi menunjukkan entri ke- dari .   Jadi jika , maka untuk semua dan .   "
},
{
  "id": "ss_matrix_attributes-6",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_attributes-6",
  "type": "Remark",
  "number": "2.1.4",
  "title": "",
  "body": " Notasi untuk menyatakan matriks sering digunakan hanya untuk memberikan nama pada entri-entri dari suatu matriks sembarang. Namun, ini juga dapat digunakan untuk mendeskripsikan matriks yang entri -nya diberikan oleh aturan atau formula tertentu.  Sebagai contoh, misalkan , dimana . Ini adalah matriks yang entri -nya adalah . Jadi . Dalam contoh ini kita memiliki dan untuk .  "
},
{
  "id": "d_matrix_equality",
  "level": "2",
  "url": "s_matrix.html#d_matrix_equality",
  "type": "Definition",
  "number": "2.1.5",
  "title": "Kesamaan Matriks.",
  "body": " Kesamaan Matriks   Misalkan dan adalah matriks dengan dimensi dan , masing-masing. Dua matriks tersebut sama jika    dan ;     untuk semua dan .     Dengan kata lain, kita memiliki jika dan hanya jika dan memiliki bentuk yang sama, dan setiap entri dari sama dengan entri yang bersesuaian dari .   "
},
{
  "id": "eg_inequality",
  "level": "2",
  "url": "s_matrix.html#eg_inequality",
  "type": "Example",
  "number": "2.1.6",
  "title": "Kesamaan Matriks.",
  "body": " Kesamaan Matriks   Matriks tidak sama satu sama lain, meskipun mereka memiliki entri yang sama yang muncul kira-kira dalam urutan yang sama. Dalam kasus ini kesamaan tidak berlaku karena dan memiliki bentuk yang berbeda: adalah , dan adalah .  Matriks dan memiliki dimensi yang sama, tetapi tidak sama karena .   "
},
{
  "id": "d_square_matrices",
  "level": "2",
  "url": "s_matrix.html#d_square_matrices",
  "type": "Definition",
  "number": "2.1.7",
  "title": "Matriks persegi, vektor baris, vektor kolom, matriks nol.",
  "body": " Matriks persegi, vektor baris, vektor kolom, matriks nol  matriks persegi  matriks vektor baris  matriks vektor kolom  matriks diagonal dari matriks persegi  matriks matriks nol    matriks nol    Sebuah matriks adalah bujur sangkar (persegi) jika dimensinya adalah . Diagonal dari sebuah matriks persegi terdiri dari entri-entri untuk .  Sebuah matriks  disebut vektor baris . Entri ke- dari sebuah vektor baris dilambangkan   Sebuah matriks  , disebut vektor kolom . Entri ke- dari sebuah vektor kolom dilambangkan .   matriks nol , dilambangkan , adalah matriks dengan dimensi tersebut, yang semua entrinya adalah nol: yaitu, untuk semua dan .  Ketika ukuran dimensi tidak dibutuhkan untuk ditampilkan, kita akan menghapus subskrip dan menulis cukup untuk sebuah matriks nol.   "
},
{
  "id": "rm_matrices_as_row_columns",
  "level": "2",
  "url": "s_matrix.html#rm_matrices_as_row_columns",
  "type": "Remark",
  "number": "2.1.8",
  "title": "Matriks sebagai kumpulan kolom\/baris.",
  "body": " Matriks sebagai kumpulan kolom\/baris  Misalkan adalah sebuah matriks . Kita akan sering memikirkan sebagai kumpulan kolom, dalam hal ini kita menulis , dimana adalah vektor kolom yang terdiri dari entri-entri dari kolom ke- dari : , . Demikian pula, ketika kita memikirkan sebagai kumpulan baris, kita menulis , dimana adalah vektor baris yang terdiri dari entri-entri dari baris ke- dari : , . Garis vertikal dan horizontal digunakan untuk menekankan bahwa adalah vektor kolom dan adalah vektor baris.  "
},
{
  "id": "sage_matrix_entries_rows_cols",
  "level": "2",
  "url": "s_matrix.html#sage_matrix_entries_rows_cols",
  "type": "Project",
  "number": "2.1.1",
  "title": "Entri, Baris, dan Kolom Matriks.",
  "body": " Entri, Baris, dan Kolom Matriks  Sintaks Sage untuk mengakses entri spesifik dari sebuah matriks mirip dengan notasi entri matriks secara umum. Namun, dalam Python, kita selalu menghitung dari 0. Sehingga jika A untuk matriks di Sage, A[i,j] adalah entri ke- -nya.   Subset entri matriks yang ditentukan diperoleh melalui metode slicing : misalnya, A[a:b, c:d] mengembalikan kumpulan entri dengan dan , disusun sebagai matriks.   Membiarkan sisi kiri atau kanan dari : kosong dalam notasi ini menghapus batas restriksi indeks yang bersesuaian (kiri atau kanan). Jadi A[2, :] mengembalikan baris ketiga dari , dan A[1:, 3] mengembalikan bagian dari kolom keempat dari dimulai dengan entri keduanya.   Sebagai alternatif, kita dapat memperoleh daftar semua baris atau kolom dari menggunakan metode rows() dan columns() .   Gunakan sel kosong di bawah ini untuk mencoba beberapa perintah ini.   "
},
{
  "id": "d_matrix_add_subtract",
  "level": "2",
  "url": "s_matrix.html#d_matrix_add_subtract",
  "type": "Definition",
  "number": "2.1.9",
  "title": "Penjumlahan dan pengurangan matriks.",
  "body": " Penjumlahan dan pengurangan matriks  penjumlahan matriks  pengurangan matriks    Penjumlahan Matriks adalah operasi yang didefinisikan sebagai berikut: diberikan dua matriks  dan , kita mendefinisikan jumlah mereka menjadi matriks . Dengan kata lain adalah matriks yang memenuhi untuk semua dan .   Pengurangan Matriks adalah operasi yang didefinisikan sebagai berikut: diberikan dua matriks  dan , kita mendefinisikan selisih mereka menjadi matriks . Dengan kata lain adalah matriks yang memenuhi untuk semua dan .   "
},
{
  "id": "ss_matrix_arithmetic-4",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_arithmetic-4",
  "type": "Remark",
  "number": "2.1.10",
  "title": "",
  "body": " Perhatikan bahwa penjumlahan\/pengurangan matriks tidak didefinisikan untuk sembarang pasangan matriks. Penjumlahan matriks (atau pengurangan) adalah dua matriks dengan dimensi yang sama ; dan outputnya adalah matriks yang memiliki dimensi sama dari pasangan matrik tersebut.  "
},
{
  "id": "d_matrix_scalar_mult",
  "level": "2",
  "url": "s_matrix.html#d_matrix_scalar_mult",
  "type": "Definition",
  "number": "2.1.11",
  "title": "Perkalian skalar matriks.",
  "body": " Perkalian skalar matriks  perkalian skalar matriks   Diberikan sembarang matriks dan sembarang konstanta , kita mendefinisikan . Dengan kata lain, adalah matriks yang diperoleh dengan \"menskalakan\" setiap entri dari dengan konstanta .  Kita menyebut sebuah kelipatan skalar dari . Selanjutnya, untuk membantu membedakan antara matriks dan bilangan real, kita akan merujuk elemen-elemen dari sebagai skalar .   "
},
{
  "id": "d_matrix_lin_comb",
  "level": "2",
  "url": "s_matrix.html#d_matrix_lin_comb",
  "type": "Definition",
  "number": "2.1.12",
  "title": "Kombinasi linear dari matriks.",
  "body": " Kombinasi linear dari matriks  kombinasi linear dari matriks   Diberikan matriks dengan dimensi yang sama, dan skalar , ekspresi disebut kombinasi linear dari matriks . Skalar disebut koefisien dari kombinasi linear tersebut.   "
},
{
  "id": "eg_matrix_lin_comb",
  "level": "2",
  "url": "s_matrix.html#eg_matrix_lin_comb",
  "type": "Example",
  "number": "2.1.13",
  "title": "Kombinasi linear matriks.",
  "body": " Kombinasi linear matriks   Misalkan dan . Hitung .     .   "
},
{
  "id": "eg_matrix_lin_comb_solve",
  "level": "2",
  "url": "s_matrix.html#eg_matrix_lin_comb_solve",
  "type": "Example",
  "number": "2.1.14",
  "title": "Menyatakan matriks sebagai kombinasi linear.",
  "body": " Menyatakan matriks sebagai kombinasi linear   Tunjukkan bahwa dapat dinyatakan sebagai kombinasi linear dari matriks .    Kita harus menyelesaikan persamaan matriks (atau vektor baris) untuk skalar . Menghitung kombinasi linear di sebelah kiri menghasilkan persamaan matriks . Menggunakan definisi kesamaan matriks ( ), kita mendapatkan sistem persamaan . Menggunakan eliminasi Gaussian kita menemukan bahwa ada solusi unik untuk sistem ini: yaitu, . Kita menyimpulkan bahwa .   "
},
{
  "id": "d_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#d_matrix_mult",
  "type": "Definition",
  "number": "2.1.15",
  "title": "Perkalian matriks.",
  "body": " Perkalian matriks  perkalian matriks    Perkalian Matriks adalah operasi yang didefinisikan sebagai berikut: diberikan sebuah matriks  dan sebuah matriks  , kita mendefinisikan perkalian matrik tersebut menjadi matriks  yang entri -nya yang dinyatakan dengan formula untuk semua dan .   "
},
{
  "id": "ss_matrix_mult-4",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-4",
  "type": "Figure",
  "number": "2.1.16",
  "title": "",
  "body": "  Perkalian Matrik  "
},
{
  "id": "ss_matrix_mult-5",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-5",
  "type": "Remark",
  "number": "2.1.17",
  "title": "Ukuran dan perkalian matriks.",
  "body": " Ukuran dan perkalian matriks  Perhatikan bagaimana, seperti penjumlahan, perkalian matriks tidak didefinisikan untuk sembarang pasangan matriks: harus ada kesepakatan tertentu dalam dimensi mereka.  Secara lebih rinci, agar produk dari dan terdefinisi, kita membutuhkan . Dengan kata lain kita membutuhkan dimensi \"dalam\" dari dan untuk menjadi sama: . Jika kondisi ini terpenuhi, dimensi dari matriks hasil ditentukan oleh dimensi \"luar\" dari dan . Secara skematis, Anda dapat memikirkan dimensi dalam sebagai \"dibatalkan\":   "
},
{
  "id": "eg_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#eg_matrix_mult",
  "type": "Example",
  "number": "2.1.18",
  "title": "Perkalian matriks.",
  "body": " Perkalian matriks  Pertimbangkan matriks . Karena dimensi \"dalam\" dari dan setuju, kita dapat membentuk matriks produk , yang memiliki dimensi . Misalkan untuk semua . Menggunakan , kita hitung . Kita menyimpulkan bahwa .  "
},
{
  "id": "d_dot_product",
  "level": "2",
  "url": "s_matrix.html#d_dot_product",
  "type": "Definition",
  "number": "2.1.19",
  "title": "Dot Produk.",
  "body": " Dot Produk  Dot produk    dot produk    Diberikan -tupel dan , dot produk mereka, dilambangkan , didefinisikan sebagai .   "
},
{
  "id": "th_matrix_mult_dot_product",
  "level": "2",
  "url": "s_matrix.html#th_matrix_mult_dot_product",
  "type": "Theorem",
  "number": "2.1.20",
  "title": "Dot Produk  dan perkalian matriks.",
  "body": " Dot Produk dan perkalian matriks   Misalkan adalah sebuah matriks , dan misalkan adalah sebuah matriks . Untuk semua , misalkan adalah baris ke- dari ; dan untuk semua misalkan adalah kolom ke- dari . Untuk semua , kita memiliki , dimana dan diperlakukan sebagai -tupel. Dengan kata lain, entri -th dari adalah dot produk dari baris ke- dari dan kolom ke- dari .    Tetapkan sebuah pasangan dengan dan . Dipertimbangkan sebagai -tupel, baris ke- dari dan kolom ke- dari diberikan sebagai . Kita memiliki , seperti yang diklaim.   "
},
{
  "id": "eg_matrix_mult_dot_prod",
  "level": "2",
  "url": "s_matrix.html#eg_matrix_mult_dot_prod",
  "type": "Example",
  "number": "2.1.21",
  "title": "Perkalian matriks via dot produk.",
  "body": " Perkalian matriks via dot produk  Pertimbangkan matriks . Dua baris dari adalah . Dua kolom dari adalah . Menggunakan deskripsi dot produk dari perkalian matriks, kita hitung .  "
},
{
  "id": "ss_matrix_mult-11",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-11",
  "type": "Project",
  "number": "2.1.2",
  "title": "Aritmetika Matriks.",
  "body": " Aritmetika Matriks  Kita menggunakan + dan * untuk penjumlahan dan perkalian matriks.   Sebagai bukti fleksibilitas Sage, simbol yang sama * juga digunakan untuk perkalian skalar.   Edit sel di bawah ini untuk melatih operasi ini.   "
},
{
  "id": "th_column_method",
  "level": "2",
  "url": "s_matrix.html#th_column_method",
  "type": "Theorem",
  "number": "2.1.22",
  "title": "Metode kolom dari perkalian matriks.",
  "body": " Metode kolom dari perkalian matriks  perkalian matriks metode kolom   Misalkan dan . Metode kolom dari perkalian matriks menghitung menggunakan dua langkah di bawah ini.   Langkah 1  Misalkan adalah kolom ke- dari , dianggap sebagai vektor kolom. Maka .    Langkah 2  Misalkan adalah kolom ke- dari , dianggap sebagai vektor kolom. Diberikan sembarang vektor kolom kita memiliki .       Kita membuktikan kesamaan di kedua langkah secara terpisah.   Bukti Langkah 1  Kita harus menunjukkan , dimana . Pertama kita menunjukkan dan memiliki ukuran yang sama. Berdasarkan definisi perkalian matriks, adalah . Berdasarkan konstruksi memiliki kolom dan kolom ke- -nya adalah . Karena dan memiliki ukuran dan , masing-masing, memiliki ukuran . Jadi setiap dari kolom dari adalah vektor kolom . Mengikuti bahwa adalah , seperti yang diinginkan.  Selanjutnya kita menunjukkan bahwa untuk semua , . Karena entri -th dari adalah entri ke- dari kolom ke- dari , kita memiliki .    Bukti Langkah 2  Kita harus menunjukkan bahwa , dimana . Argumen biasa menunjukkan bahwa kedua dan adalah vektor kolom . Tinggal hanya untuk menunjukkan bahwa entri ke-  dari kolom sama dengan entri ke-  dari untuk semua . Untuk sembarang demikian kita memiliki .    "
},
{
  "id": "th_row_method",
  "level": "2",
  "url": "s_matrix.html#th_row_method",
  "type": "Theorem",
  "number": "2.1.23",
  "title": "Metode baris dari perkalian matriks.",
  "body": " Metode baris dari perkalian matriks  perkalian matriks metode baris   Misalkan dan . Metode baris dari perkalian matriks menghitung menggunakan dua langkah di bawah ini.   Langkah 1  Misalkan adalah baris ke- dari . Maka .    Langkah 2  Misalkan adalah baris ke- dari . Diberikan sembarang vektor baris kita memiliki .       Buktinya sangat mirip dengan itu dari dan dibiarkan kepada pembaca.   "
},
{
  "id": "s_matrix_ex_product",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex_product",
  "type": "Example",
  "number": "2.1.24",
  "title": "Metode kolom dan baris.",
  "body": " Metode kolom dan baris   Misalkan dan   Hitung menggunakan (a) definisi perkalian matriks, (b) metode kolom, (c) metode baris.       Menggunakan definisi, kita lihat dengan mudah bahwa     Misalkan adalah kolom-kolom dari , dan misalkan adalah kolom-kolom dari . Kita memiliki     Sekarang misalkan adalah baris-baris dari , dan misalkan adalah baris-baris dari . Kita memiliki       "
},
{
  "id": "s_column_row_method-6",
  "level": "2",
  "url": "s_matrix.html#s_column_row_method-6",
  "type": "Project",
  "number": "2.1.3",
  "title": "Metode kolom dan baris.",
  "body": " Metode kolom dan baris  Mari kita uji metode kolom dan baris menggunakan Sage dalam beberapa contoh spesifik. Di bawah ini kita menghasilkan matriks bilangan bulat acak dan dengan dimensi dan , masing-masing, dan menghitung perkalian matrik .   Mari kita periksa bahwa kolom ke- dari sama dengan produk dari dengan kolom ke- dari .   Sebagai alternatif, kita dapat mengonfirmasi kesamaan ini secara visual menggunakan tampilan dari di sel pertama di atas. Perhatikan bahwa hasil dari A*colsB[i] ditampilkan oleh Sage sebagai baris, meskipun secara teknis bagi kita ini adalah vektor kolom.   Selanjutnya, mari kita verifikasi bahwa hasil dari mengalikan dan kolom ke- dari adalah kombinasi linear yang bersesuaian dari kolom-kolom dari yang diberikan oleh koefisien dari kolom ini.   Sekarang gunakan sel Sage di bawah ini untuk mendemonstrasikan validitas metode baris untuk produk . Cukup modifikasi kode dalam dua sel di atas untuk mencerminkan metode baris, sebagai lawan dari metode kolom.    "
},
{
  "id": "d_transpose",
  "level": "2",
  "url": "s_matrix.html#d_transpose",
  "type": "Definition",
  "number": "2.1.25",
  "title": "Transposisi matriks.",
  "body": " Transposisi matriks  matrix transposition  transpose   Diberikan sebuah matriks  transposnya adalah matriks yang entri -nya adalah entri -th dari . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .   "
},
{
  "id": "s_matrix-7-4",
  "level": "2",
  "url": "s_matrix.html#s_matrix-7-4",
  "type": "Remark",
  "number": "2.1.26",
  "title": "",
  "body": " Diberikan sebuah matriks kita dapat memberikan deskripsi berbasis kolom- atau baris dari sebagai berikut:    adalah matriks yang baris ke- -nya adalah kolom ke- dari .     adalah matriks yang kolom ke- -nya adalah baris ke- dari .     "
},
{
  "id": "eg_transpose",
  "level": "2",
  "url": "s_matrix.html#eg_transpose",
  "type": "Example",
  "number": "2.1.27",
  "title": "Transpos.",
  "body": " Transpos   Misalkan ; maka .  Misalkan , maka .   "
},
{
  "id": "s_matrix-7-6",
  "level": "2",
  "url": "s_matrix.html#s_matrix-7-6",
  "type": "Project",
  "number": "2.1.4",
  "title": "Transposisi matriks.",
  "body": " Transposisi matriks  Transposisi matriks diimplementasikan dalam Sage sebagai metode transpose() . Dalam sel di bawah ini kita (a) memilih bilangan bulat acak , (b) memilih sebuah matriks acak  dengan entri bilangan bulat, dan (c) menghitung transpos dari .   Seperti biasa, bereksperimen dengan sel Sage di bawah ini.   "
},
{
  "id": "s_algebraic",
  "level": "1",
  "url": "s_algebraic.html",
  "type": "Section",
  "number": "2.2",
  "title": "Aljabar Matriks",
  "body": " Aljabar Matriks   Dalam bagian ini kita membahas aljabar matriks. Kita akan menyelidiki sifat-sifat yang dimiliki (dan tidak dimiliki) oleh operasi matriks kita, dan akan menunjukkan bagaimana menggunakan operasi ini untuk menyelesaikan persamaan matriks.  Saat kita mempelajari aljabar matriks ada kesamaan dengan operasi aljabar bilangan riel, seperti yang ada pada di bawah ini. Namun, ada dua poin dasar di mana keduanya berbeda (lihat ): dua sifat penting aljabar bilangan real yang tidak berlaku untuk matriks. Dari dua perbedaan dasar ini memberikan wawasan menarik pada aljabar matriks dibandingkan dengan aljabar bilangan real.    Sifat-sifat Aritmetika Matriks   Sifat-sifat berikut berlaku untuk semua matriks dan skalar yang membuat ekspresi yang diberikan masuk akal.   Hukum komutatif penjumlahan       Hukum asosiatif penjumlahan       Hukum asosiatif perkalian       Hukum distributif kiri       Hukum distributif kanan       Hukum distributif penskalaan       Hukum distributif penskalaan lainnya       Hukum asosiatif penskalaan       Hukum komutatif penskalaan   .       Kita dapat membuktikan salah satu sifat ini? Misalkan tentang kesamaan matriks berbentuk , sehingga menurut definisi kesamaan matriks kita harus menunjukkan (1) bahwa matriks dan memiliki dimensi yang sama, dan (2) bahwa untuk semua . Bukti di bawah ini mengilustrasikan teknik ini untuk hukum asosiatif perkalian dari .   Bukti (iii)  Kita telah membuktikan hukum asosiatif perkalian . Misalkan , , . Untuk menunjukkan , kita harus menunjukkan (1) bahwa dan memiliki dimensi yang sama, dan (2) bahwa untuk semua yang mungkin.  (1) Pengamatan biasa tentang dimensi dalam dan luar menunjukkan bahwa baik maupun memiliki dimensi .  (2) Diberikan sembarang dengan dan , kita memiliki:   Ini membuktikan bahwa semua entri dari kedua matriks adalah sama, dan dengan demikian .   Seperti aljabar bilangan real, kita dapat mengidentifikasi beberapa matriks khusus yang bertindak sebagai identitas penjumlahan dan identitas perkalian ; dan setiap matriks memiliki invers penjumlahan . Apa yang kita maksud di sini diuraikan secara rinci dalam .   Invers Penjumlahan Matriks  invers penjumlahan dari matriks  matriks invers penjumlahan    Invers penjumlahan dari    Diberikan sebuah matriks  , invers penjumlahan -nya didefinisikan sebagai .     Matriks Identitas  matriks identitas  matriks matriks identitas    matriks invers     Matriks identitas adalah matriks persegi  dengan angka satu sepanjang diagonal dan nol di tempat lainnya. Dengan kata lain, untuk semua dan , kita memiliki . Ketika ukuran dari matriks identitas tidak penting, kita sering akan menotasikannya cukup sebagai .     Identitas Penjumlahan, Invers Penjumlahan, dan Identitas Perkalian     Identitas penjumlahan  Matriks nol  adalah identitas penjumlahan untuk matriks dalam pengertian berikut: untuk sembarang matriks  kita memiliki .    Invers penjumlahan  Untuk sembarang matriks  kita memiliki .    Identitas perkalian  Matriks identitas adalah identitas perkalian untuk matriks dalam pengertian berikut: untuk sembarang matriks  kita memiliki .       Dibiarkan sebagai latihan.    Pencoretan Aditif Matriks   Diberikan matriks  , dan , kita memiliki jika dan hanya jika . Menggunakan notasi logika:     Sesederhana klaim ini mungkin tampak, ingatlah bahwa kita berurusan dengan sistem aljabar yang sama sekali baru di sini. Kita akan membuktikan kedua implikasi dari pernyataan jika dan hanya jika secara terpisah.   Bukti:  Kita membuktikan ini melalui rantai implikasi: .    Bukti:  Arah ini jelas: jika dan adalah matriks yang sama, maka mereka tetap sama ketika kita menambahkan ke masing-masing.      Kepentingan aljabar dari adalah bahwa kita dapat melakukan pencoretan aditif dalam persamaan matriks sama seperti yang kita lakukan dalam aljabar bilangan real. Sebagai contoh, kita dapat menyelesaikan persamaan matriks untuk sebagai berikut:  .   Meskipun kita dapat melakukan pencoretan aditif dalam aljabar matriks, kita tidak selalu dapat melakukan pencoretan perkalian . Sebagai contoh, pertimbangkan matriks . Periksa sendiri bahwa , namun . Dengan kata lain, kita tidak selalu dapat mencoret  dari persamaan matriks .   Ini adalah contoh kegagalan umum prinsip pencoretan perkalian dalam aljabar matriks. Ini pada gilirannya merupakan konsekuensi dari teorema berikut, yang mengidentifikasi dua hal dasar di mana aljabar matriks berbeda secara signifikan dari aljabar bilangan real.   Penyimpangan Aljabar Matriks      Perkalian matriks tidak komutatif  Untuk dua matriks  dan , kita tidak selalu memiliki .    Perkalian matriks tak-nol dapat sama dengan nol  Jika perkalian dari dua matriks adalah matriks nol, kita tidak dapat menyimpulkan bahwa salah satu matriks adalah matriks nol. Dalam notasi logika: .       Ini menunjukkan bahwa untuk membuktikan suatu identitas tidak berlaku, cukup memberikan satu contoh penyangkal untuk efek tersebut. Kita lakukan demikian untuk setiap identitas yang gagal dari secara bergantian. Tidak ada signifikansi pada contoh penyangkal tertentu yang dipilih di sini, dan memang ada tak terhingga banyaknya contoh penyangkal yang dapat dipilih dalam kedua kasus.   Kita memiliki dan dengan demikian .    Perhatikan bahwa . Ini adalah contoh dari dua matriks tak-nol yang perkaliannya adalah matriks nol.     Konsekuensi penting dari penyimpangan adalah bahwa aljabar matriks tidak menikmati sifat pencoretan perkalian .   Kegagalan Pencoretan Perkalian     Misalkan matriks memenuhi dan . Kita tidak dapat menyimpulkan bahwa . Dalam notasi logika:     Misalkan matriks memenuhi dan . Kita tidak dapat menyimpulkan bahwa . Dalam notasi logika:        Sekali lagi, kita hanya perlu memberikan contoh penyangkal eksplisit untuk setiap pernyataan.    Misalkan , , . Verifikasi sendiri bahwa . Dengan demikian , tetapi jelas .    Misalkan , , . Kita memiliki . Dengan demikian , tetapi .      Perhatikan baik-baik pengecualian pada aljabar matriks ini. Ketika kita persamaan bilangan real berbentuk , kita mungkin akan menyataan bahwa atau . (Jika kita tidak fokus, mungkin akan melupakan kemungkinan pertama itu.) Hal yang sama persamaan matriks tidak dapat langsung digunakan pada matrik, kecuali kita mengetahui sesuatu lebih lanjut tentang .   Kita akan membahasa bagaimana transpos matriks berkaitan dengan penjumlahan matriks, perkalian, dan perkalian skalar.   Sifat-sifat Transposisi Matriks  Sifat-sifat berikut berlaku untuk semua matriks dan skalar yang membuat ekspresi yang diberikan masuk akal.                           Kita hanya akan membuktikan pernyataan yang pertama. Perhatikan bahwa jika adalah , maka demikian pula dan . Maka adalah menurut . Demikian pula, kita melihat bahwa adalah .  Selanjutnya, diberikan sembarang dengan , , kita memiliki . Karena entri dari kedua matriks adalah sama untuk setiap , maka .    "
},
{
  "id": "th_matrix_alg_props",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_alg_props",
  "type": "Theorem",
  "number": "2.2.1",
  "title": "Sifat-sifat Aritmetika Matriks.",
  "body": " Sifat-sifat Aritmetika Matriks   Sifat-sifat berikut berlaku untuk semua matriks dan skalar yang membuat ekspresi yang diberikan masuk akal.   Hukum komutatif penjumlahan       Hukum asosiatif penjumlahan       Hukum asosiatif perkalian       Hukum distributif kiri       Hukum distributif kanan       Hukum distributif penskalaan       Hukum distributif penskalaan lainnya       Hukum asosiatif penskalaan       Hukum komutatif penskalaan   .      "
},
{
  "id": "s_algebraic-5",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-5",
  "type": "Proof",
  "number": "2.2.1",
  "title": "Bukti (iii).",
  "body": " Bukti (iii)  Kita telah membuktikan hukum asosiatif perkalian . Misalkan , , . Untuk menunjukkan , kita harus menunjukkan (1) bahwa dan memiliki dimensi yang sama, dan (2) bahwa untuk semua yang mungkin.  (1) Pengamatan biasa tentang dimensi dalam dan luar menunjukkan bahwa baik maupun memiliki dimensi .  (2) Diberikan sembarang dengan dan , kita memiliki:   Ini membuktikan bahwa semua entri dari kedua matriks adalah sama, dan dengan demikian .  "
},
{
  "id": "d_matrix_add_inverse",
  "level": "2",
  "url": "s_algebraic.html#d_matrix_add_inverse",
  "type": "Definition",
  "number": "2.2.2",
  "title": "Invers Penjumlahan Matriks.",
  "body": " Invers Penjumlahan Matriks  invers penjumlahan dari matriks  matriks invers penjumlahan    Invers penjumlahan dari    Diberikan sebuah matriks  , invers penjumlahan -nya didefinisikan sebagai .   "
},
{
  "id": "d_identity_matrix",
  "level": "2",
  "url": "s_algebraic.html#d_identity_matrix",
  "type": "Definition",
  "number": "2.2.3",
  "title": "Matriks Identitas.",
  "body": " Matriks Identitas  matriks identitas  matriks matriks identitas    matriks invers     Matriks identitas adalah matriks persegi  dengan angka satu sepanjang diagonal dan nol di tempat lainnya. Dengan kata lain, untuk semua dan , kita memiliki . Ketika ukuran dari matriks identitas tidak penting, kita sering akan menotasikannya cukup sebagai .   "
},
{
  "id": "th_matrix_add_mult_ident",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_add_mult_ident",
  "type": "Theorem",
  "number": "2.2.4",
  "title": "Identitas Penjumlahan, Invers Penjumlahan, dan Identitas Perkalian.",
  "body": " Identitas Penjumlahan, Invers Penjumlahan, dan Identitas Perkalian     Identitas penjumlahan  Matriks nol  adalah identitas penjumlahan untuk matriks dalam pengertian berikut: untuk sembarang matriks  kita memiliki .    Invers penjumlahan  Untuk sembarang matriks  kita memiliki .    Identitas perkalian  Matriks identitas adalah identitas perkalian untuk matriks dalam pengertian berikut: untuk sembarang matriks  kita memiliki .     "
},
{
  "id": "s_algebraic-10",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-10",
  "type": "Proof",
  "number": "2.2.2",
  "title": "",
  "body": " Dibiarkan sebagai latihan.  "
},
{
  "id": "c_matrix_additive_canc",
  "level": "2",
  "url": "s_algebraic.html#c_matrix_additive_canc",
  "type": "Corollary",
  "number": "2.2.5",
  "title": "Pencoretan Aditif Matriks.",
  "body": " Pencoretan Aditif Matriks   Diberikan matriks  , dan , kita memiliki jika dan hanya jika . Menggunakan notasi logika:     Sesederhana klaim ini mungkin tampak, ingatlah bahwa kita berurusan dengan sistem aljabar yang sama sekali baru di sini. Kita akan membuktikan kedua implikasi dari pernyataan jika dan hanya jika secara terpisah.   Bukti:  Kita membuktikan ini melalui rantai implikasi: .    Bukti:  Arah ini jelas: jika dan adalah matriks yang sama, maka mereka tetap sama ketika kita menambahkan ke masing-masing.    "
},
{
  "id": "s_algebraic-12",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-12",
  "type": "Remark",
  "number": "2.2.6",
  "title": "",
  "body": " Kepentingan aljabar dari adalah bahwa kita dapat melakukan pencoretan aditif dalam persamaan matriks sama seperti yang kita lakukan dalam aljabar bilangan real. Sebagai contoh, kita dapat menyelesaikan persamaan matriks untuk sebagai berikut:  . "
},
{
  "id": "s_algebraic-13",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-13",
  "type": "Warning",
  "number": "2.2.7",
  "title": "",
  "body": " Meskipun kita dapat melakukan pencoretan aditif dalam aljabar matriks, kita tidak selalu dapat melakukan pencoretan perkalian . Sebagai contoh, pertimbangkan matriks . Periksa sendiri bahwa , namun . Dengan kata lain, kita tidak selalu dapat mencoret  dari persamaan matriks .  "
},
{
  "id": "th_matrix_abnormalities",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_abnormalities",
  "type": "Theorem",
  "number": "2.2.8",
  "title": "Penyimpangan Aljabar Matriks.",
  "body": " Penyimpangan Aljabar Matriks      Perkalian matriks tidak komutatif  Untuk dua matriks  dan , kita tidak selalu memiliki .    Perkalian matriks tak-nol dapat sama dengan nol  Jika perkalian dari dua matriks adalah matriks nol, kita tidak dapat menyimpulkan bahwa salah satu matriks adalah matriks nol. Dalam notasi logika: .      "
},
{
  "id": "th_matrix_cancel",
  "level": "2",
  "url": "s_algebraic.html#th_matrix_cancel",
  "type": "Corollary",
  "number": "2.2.9",
  "title": "Kegagalan Pencoretan Perkalian.",
  "body": " Kegagalan Pencoretan Perkalian     Misalkan matriks memenuhi dan . Kita tidak dapat menyimpulkan bahwa . Dalam notasi logika:     Misalkan matriks memenuhi dan . Kita tidak dapat menyimpulkan bahwa . Dalam notasi logika:      "
},
{
  "id": "s_algebraic-19",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-19",
  "type": "Proof",
  "number": "2.2.3",
  "title": "",
  "body": " Sekali lagi, kita hanya perlu memberikan contoh penyangkal eksplisit untuk setiap pernyataan.    Misalkan , , . Verifikasi sendiri bahwa . Dengan demikian , tetapi jelas .    Misalkan , , . Kita memiliki . Dengan demikian , tetapi .    "
},
{
  "id": "rm_cancel_failure",
  "level": "2",
  "url": "s_algebraic.html#rm_cancel_failure",
  "type": "Remark",
  "number": "2.2.10",
  "title": "",
  "body": " Perhatikan baik-baik pengecualian pada aljabar matriks ini. Ketika kita persamaan bilangan real berbentuk , kita mungkin akan menyataan bahwa atau . (Jika kita tidak fokus, mungkin akan melupakan kemungkinan pertama itu.) Hal yang sama persamaan matriks tidak dapat langsung digunakan pada matrik, kecuali kita mengetahui sesuatu lebih lanjut tentang .  "
},
{
  "id": "th_trans_props",
  "level": "2",
  "url": "s_algebraic.html#th_trans_props",
  "type": "Theorem",
  "number": "2.2.11",
  "title": "Sifat-sifat Transposisi Matriks.",
  "body": " Sifat-sifat Transposisi Matriks  Sifat-sifat berikut berlaku untuk semua matriks dan skalar yang membuat ekspresi yang diberikan masuk akal.                           Kita hanya akan membuktikan pernyataan yang pertama. Perhatikan bahwa jika adalah , maka demikian pula dan . Maka adalah menurut . Demikian pula, kita melihat bahwa adalah .  Selanjutnya, diberikan sembarang dengan , , kita memiliki . Karena entri dari kedua matriks adalah sama untuk setiap , maka .   "
},
{
  "id": "s_invertible_matrices",
  "level": "1",
  "url": "s_invertible_matrices.html",
  "type": "Section",
  "number": "2.3",
  "title": "Matriks Invertibel",
  "body": " Matriks Invertibel   Dari , kita mengamati bahwa sifat pencoretan yang terjadi dalam aljabar bilangan real adalah jika setiap bilangan real tak-nol akan memiliki invers perkalian , yang dilambangkan atau , yang memenuhi . Memang, \"mencoret\" dalam persamaan (dengan asumsi ) sebenarnya sama dengan mengalikan kedua sisi persamaan ini dengan invers perkalian .  Dengan mengkaitkan aljabar bilangan real dan matriks, maka hal yang sama juga dapat dilakukan pada matrik dengan mengalikan dengan invers matriks. Kita telah mengetahaui bahwa matriks identitas memainkan peran untuk identitas perkalian matriks , sama seperti bilangan untuk bilangan real. Dan juga kita membatasi pada matriks identitas itu dengan ukuran .    Matriks Invers   Matriks Invers  Matrik Invers  matriks invers    invers dari    Sebuah matriks  disebut memiliki invers (atau nonsingular ) jika terdapat matriks  yang memenuhi . Ketika hal ini terjadi, kita menyebut sebagai invers dari , dan kita mengatakan bahwa dan adalah invers satu sama lain.  Sebuah matriks yang memenuhi disebut invers dari , dilambangkan .  Sebuah matriks persegi yang tidak memiliki invers (invertibel) disebut singular .     Invers Bersifat Tunggal   Jika adalah matriks invertibel, maka inversnya tunggal: yaitu, hanya ada satu matriks yang memenuhi .     Misalkan matriks dan keduanya memenuhi sifat invers perkalian: yaitu, . Maka . Dengan demikian kita melihat bahwa , menunjukkan bahwa invers dari , jika ada, adalah tunggal.   Teorema berikutnya memberitahu kita bahwa kita dapat melakukan pencoretan perkalian pada sebuah matriks jika matriks tersebut invertibel .   Pencoretan dengan Matriks Invertibel   Misalkan adalah matriks invertibel .   Pencoretan kiri  Diberikan matriks  dan , kita memiliki .    Pencoretan kanan  Diberikan matriks  dan , kita memiliki .          Kita membuktikan kedua implikasi dari secara terpisah. Implikasi sebaliknya ( ) jelas: . Untuk implikasi maju ( ), kita memiliki .    Argumen untuk pencoretan kanan persis serupa.       Korolari berikutnya menunjukkan bagaimana kita dapat menyelesaikan beberapa persamaan matriks secara tunggal menggunakan matriks invertibel.   Penyelesaian dengan Matriks Invertibel   Misalkan adalah matriks invertibel .   Jika dan adalah matriks , maka .    Jika dan adalah matriks , maka .          Kita memiliki .    Kita memiliki .       Untuk menunjukkan matriks invertibel kita harus menemukan matriks yang memenuhi kedua dan . (Ingat: karena kita tidak dapat mengasumsikan , kita benar-benar perlu menunjukkan kedua persamaan tersebut memenuhi.)  Dengan cara yang sama, untuk menunjukkan  tidak invertibel kita harus menunjukkan bahwa invers tidak ada: yaitu, kita harus membuktikan bahwa tidak ada yang memenuhi . Contoh berikut mengilustrasikan teknik ini untuk berbagai matriks.   Matriks memiliki Invers (Invertibel)      Matriks identitas adalah memiliki invers (invertibel), dan sebenarnya kita memiliki , sebagaimana dinyatakan dengan .    Matriks nol persegi tidak pernah memiliki invers (invertibel), karena untuk sembarang matriks persegi dengan dimensi yang sama kita memiliki . Dengan demikian tidak ada matriks yang memenuhi sifat invers terhadap .    Invers dari matriks adalah . Kita memiliki , yang dengan mudah dapat diverifikasi.    Matriks tidak memiliki invers (non invertibel). Dengan menggunakan metode baris perkalian matriks , kita melihat bahwa diberikan sembarang matriks , setiap baris dari diberikan oleh . Akibatnya semua baris dari identik, dan dengan demikian kita tidak dapat memiliki , karena baris-baris dari tidak identik.        Invers Matriks   Sebuah matriks invertibel jika dan hanya jika .  Ketika hal ini terjadi, kita memiliki .     Matriks Invertibel  Sage memiliki sejumlah fitur terkait matrik invers. Fungsi boolean is_invertible() menguji apakah matrik punya invers atau tidak, dan metode inverse() menghitung invers dari matriks . Di cell bawah ini kita akan membuat matrik acak dan menguji apakah dapat diinverskan (invertibel), dan menghitung inversnya jika memiliki invers.   Jalankan sel Sage di bawah ini beberapa kali.    JIka matriks memiliki invers (invertibel), verifikasi bahwa . Gunakan sel Sage kosong untuk menghitung dan .    Ubah pengaturan density dalam random_element() ( , density=0.75 , density=.875 ) lihat pengaruhnya terhadap apakah matrik lebih dapat diinverskan atau tidak.         Perkalian Matriks Invertibel   Misalkan adalah matriks . Jika dan keduanya invertibel, maka demikian pula perkalian matrik matrik tesebut . Menggunakan notasi logika: . Bahkan ketika hal ini terjadi kita memiliki .     Asumsikan dan invertibel. Pernyataan teorema mengusulkan kandidat untuk invers dari : yaitu, . Kita hanya perlu menunjukkan bahwa memenuhi . Berikut buktinya: .    Perkalian Matriks Invertibel   Lebih umum, jika adalah matriks invertibel , maka perkalian matrik matrik tersebut invertibel. Lebih lanjut, kita memiliki dalam kasus ini .      Pangkat Matriks, Polinomial Matriks  Kita bahas bagaimana operasi invers matriks pada aljabar matriks. Pertama, kita sekarang dapat menggunakan operasi invers untuk mendefinisikan pangkat matriks berbentuk , dimana adalah matriks persegi dan adalah bilangan bulat sembarang   Pangkat Matriks  pangkat matriks    pangkat matriks    Misalkan adalah matriks , dan misalkan adalah bilangan bulat. Kita mendefinisikan matriks pangkat dengan: .    Dilengkapi dengan notion pangkat matriks, kita dapat lebih lanjut mendefinisikan polinomial matriks untuk matriks persegi.   Polinomial Matriks  polinomial matriks    polinomial matriks    Misalkan adalah polinomial dengan koefisien real. Untuk sembarang matriks persegi berukuran , kita mendefinisikan matriks sebagai . Kita menyebut hasil dari evaluasi polinomial pada matriks .     Polinomial Matriks   Misalkan . Evaluasi pada matriks dan .    Kita memiliki dan .     Polinomial Matriks  Sebuah pangkat matriks bilangan bulat dihitung dalam Sage sebagai A^n .   Matriks perlu memiliki invertibel agar pangkat negatifnya dapat dihitung. Sage akan menghasilkan error dalam kasus ini jika matriks singular.   Ekspresi polinomial kemudian dapat dengan mudah dihitung secara manual dalam Sage. Sel berikutnya menghitung dan untuk .     Sifat-sifat Pangkat Matriks   Sifat-sifat berikut berlaku untuk semua matriks , semua skalar , dan semua bilangan bulat .                        .        Invers dan Transpose Matrik   Misalkan invertibel. Kita memiliki , dalam hal ini .    Kita membuktikan kedua implikasi dari pernyataan jika dan hanya jika secara terpisah.  Misalkan invertibel dengan invers . Untuk melihat bahwa invertibel, dengan invers sebagaimana ditentukan dalam , kita hanya perlu menunjukkan bahwa . Kita verifikasi kedua kesamaan secara terpisah:  . Dalam kedua rantai kesamaan kita menggunakan klaim jelas .  Untuk arah sebaliknya, asumsikan invertibel. Menetapkan , kita melihat bahwa . Menurut implikasi pertama, kita tahu bahwa jika invertibel, maka demikian pula .       Latihan Tertulis    Untuk setiap matriks, berikan inversnya atau tunjukkan bahwa matriks tersebut tidak memiliki invers (non invertibel).               , dimana .        Setiap di bawah ini invertibel. Temukan dengan tebak dan periksa. Anda mungkin ingin menggunakan metode baris atau kolom perkalian matriks untuk membenarkan jawaban Anda.                       Misalkan adalah matriks invertibel. Buktikan: untuk sembarang  tak-nol , matriks invertibel.      Asumsikan adalah matriks persegi dengan .    Buktikan: jika memiliki dua kolom identik, maka tidak invertibel.    Buktikan: jika memiliki baris yang merupakan kelipatan skalar dari baris lain, maka tidak invertibel.      Gunakan metode kolom dan\/atau baris perkalian matriks untuk menunjukkan secara langsung bahwa tidak dapat memiliki matriks invers.      Temukan semua matriks invertibel  yang memenuhi persamaan yang diberikan, atau tunjukkan tidak ada demikian. Justifikasi jawaban Anda.     .     .                  Misalkan . Temukan rumus untuk , dimana adalah bilangan bulat. Justifikasi jawaban Anda menggunakan pembuktian dengan induksi.      Misalkan , matriks yang terdiri dari semua angka satu. Temukan rumus untuk , dimana adalah bilangan bulat. Justifikasi jawaban Anda menggunakan pembuktian dengan induksi.      Misalkan , dimana adalah skalar tetap tertentu. Misalkan adalah matriks yang memenuhi .    Buktikan: jika , maka invertibel.    Asumsikan lebih lanjut bahwa bukan kelipatan skalar dari .  Buktikan: jika , maka singular.       Ekspansi Produk Matriks  Tetapkan bilangan bulat positif . Diberikan kombinasi linear dari matriks  , buktikan dengan induksi pada bahwa . Perhatikan bahwa setiap langkah (dasar dan induksi) dari induksi Anda pada akan memerlukan argumen yang menggunakan induksi pada ! Ini kadang-kadang disebut induksi ganda . Sebagai contoh, dalam langkah dasar Anda harus menunjukkan bahwa untuk sembarang ; ini harus dibuktikan dengan induksi pada .    Ekspresi Polinomial dari Komutatif   Misalkan dan adalah polinomial dengan koefisien real. Untuk sembarang matriks persegi , tunjukkan bahwa matriks dan komutatif: yaitu, . Anda dapat menggunakan hasil dari .      Misalkan adalah matriks yang memenuhi untuk suatu .  Tunjukkan bahwa invertibel, dan bahwa sebenarnya . Anda dapat menggunakan hasil dari dan\/atau .      "
},
{
  "id": "d_invertible_matrix",
  "level": "2",
  "url": "s_invertible_matrices.html#d_invertible_matrix",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Matriks Invers.",
  "body": " Matriks Invers  Matrik Invers  matriks invers    invers dari    Sebuah matriks  disebut memiliki invers (atau nonsingular ) jika terdapat matriks  yang memenuhi . Ketika hal ini terjadi, kita menyebut sebagai invers dari , dan kita mengatakan bahwa dan adalah invers satu sama lain.  Sebuah matriks yang memenuhi disebut invers dari , dilambangkan .  Sebuah matriks persegi yang tidak memiliki invers (invertibel) disebut singular .   "
},
{
  "id": "th_inverse_unique",
  "level": "2",
  "url": "s_invertible_matrices.html#th_inverse_unique",
  "type": "Theorem",
  "number": "2.3.2",
  "title": "Invers Bersifat Tunggal.",
  "body": " Invers Bersifat Tunggal   Jika adalah matriks invertibel, maka inversnya tunggal: yaitu, hanya ada satu matriks yang memenuhi .   "
},
{
  "id": "subsec-invertible-4",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec-invertible-4",
  "type": "Proof",
  "number": "2.3.1.1",
  "title": "",
  "body": " Misalkan matriks dan keduanya memenuhi sifat invers perkalian: yaitu, . Maka . Dengan demikian kita melihat bahwa , menunjukkan bahwa invers dari , jika ada, adalah tunggal.  "
},
{
  "id": "th_inverse_cancel",
  "level": "2",
  "url": "s_invertible_matrices.html#th_inverse_cancel",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "Pencoretan dengan Matriks Invertibel.",
  "body": " Pencoretan dengan Matriks Invertibel   Misalkan adalah matriks invertibel .   Pencoretan kiri  Diberikan matriks  dan , kita memiliki .    Pencoretan kanan  Diberikan matriks  dan , kita memiliki .          Kita membuktikan kedua implikasi dari secara terpisah. Implikasi sebaliknya ( ) jelas: . Untuk implikasi maju ( ), kita memiliki .    Argumen untuk pencoretan kanan persis serupa.      "
},
{
  "id": "cor_solving_invertible",
  "level": "2",
  "url": "s_invertible_matrices.html#cor_solving_invertible",
  "type": "Corollary",
  "number": "2.3.4",
  "title": "Penyelesaian dengan Matriks Invertibel.",
  "body": " Penyelesaian dengan Matriks Invertibel   Misalkan adalah matriks invertibel .   Jika dan adalah matriks , maka .    Jika dan adalah matriks , maka .          Kita memiliki .    Kita memiliki .      "
},
{
  "id": "eg_invertible_matrices",
  "level": "2",
  "url": "s_invertible_matrices.html#eg_invertible_matrices",
  "type": "Example",
  "number": "2.3.5",
  "title": "Matriks memiliki Invers (Invertibel).",
  "body": " Matriks memiliki Invers (Invertibel)      Matriks identitas adalah memiliki invers (invertibel), dan sebenarnya kita memiliki , sebagaimana dinyatakan dengan .    Matriks nol persegi tidak pernah memiliki invers (invertibel), karena untuk sembarang matriks persegi dengan dimensi yang sama kita memiliki . Dengan demikian tidak ada matriks yang memenuhi sifat invers terhadap .    Invers dari matriks adalah . Kita memiliki , yang dengan mudah dapat diverifikasi.    Matriks tidak memiliki invers (non invertibel). Dengan menggunakan metode baris perkalian matriks , kita melihat bahwa diberikan sembarang matriks , setiap baris dari diberikan oleh . Akibatnya semua baris dari identik, dan dengan demikian kita tidak dapat memiliki , karena baris-baris dari tidak identik.      "
},
{
  "id": "th_2by2_inverse",
  "level": "2",
  "url": "s_invertible_matrices.html#th_2by2_inverse",
  "type": "Theorem",
  "number": "2.3.6",
  "title": "Invers Matriks <span class=\"process-math\">\\(2\\times 2\\)<\/span>.",
  "body": " Invers Matriks   Sebuah matriks invertibel jika dan hanya jika .  Ketika hal ini terjadi, kita memiliki .   "
},
{
  "id": "subsec-invertible-13",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec-invertible-13",
  "type": "Project",
  "number": "2.3.1",
  "title": "Matriks Invertibel.",
  "body": " Matriks Invertibel  Sage memiliki sejumlah fitur terkait matrik invers. Fungsi boolean is_invertible() menguji apakah matrik punya invers atau tidak, dan metode inverse() menghitung invers dari matriks . Di cell bawah ini kita akan membuat matrik acak dan menguji apakah dapat diinverskan (invertibel), dan menghitung inversnya jika memiliki invers.   Jalankan sel Sage di bawah ini beberapa kali.    JIka matriks memiliki invers (invertibel), verifikasi bahwa . Gunakan sel Sage kosong untuk menghitung dan .    Ubah pengaturan density dalam random_element() ( , density=0.75 , density=.875 ) lihat pengaruhnya terhadap apakah matrik lebih dapat diinverskan atau tidak.       "
},
{
  "id": "th_invertible_prod",
  "level": "2",
  "url": "s_invertible_matrices.html#th_invertible_prod",
  "type": "Theorem",
  "number": "2.3.7",
  "title": "Perkalian Matriks Invertibel.",
  "body": " Perkalian Matriks Invertibel   Misalkan adalah matriks . Jika dan keduanya invertibel, maka demikian pula perkalian matrik matrik tesebut . Menggunakan notasi logika: . Bahkan ketika hal ini terjadi kita memiliki .   "
},
{
  "id": "subsec-invertible-15",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec-invertible-15",
  "type": "Proof",
  "number": "2.3.1.2",
  "title": "",
  "body": " Asumsikan dan invertibel. Pernyataan teorema mengusulkan kandidat untuk invers dari : yaitu, . Kita hanya perlu menunjukkan bahwa memenuhi . Berikut buktinya: .  "
},
{
  "id": "c_invertible_prod",
  "level": "2",
  "url": "s_invertible_matrices.html#c_invertible_prod",
  "type": "Corollary",
  "number": "2.3.8",
  "title": "Perkalian Matriks Invertibel.",
  "body": " Perkalian Matriks Invertibel   Lebih umum, jika adalah matriks invertibel , maka perkalian matrik matrik tersebut invertibel. Lebih lanjut, kita memiliki dalam kasus ini .   "
},
{
  "id": "d_matrix_powers",
  "level": "2",
  "url": "s_invertible_matrices.html#d_matrix_powers",
  "type": "Definition",
  "number": "2.3.9",
  "title": "Pangkat Matriks.",
  "body": " Pangkat Matriks  pangkat matriks    pangkat matriks    Misalkan adalah matriks , dan misalkan adalah bilangan bulat. Kita mendefinisikan matriks pangkat dengan: .   "
},
{
  "id": "d_matrix_polynomials",
  "level": "2",
  "url": "s_invertible_matrices.html#d_matrix_polynomials",
  "type": "Definition",
  "number": "2.3.10",
  "title": "Polinomial Matriks.",
  "body": " Polinomial Matriks  polinomial matriks    polinomial matriks    Misalkan adalah polinomial dengan koefisien real. Untuk sembarang matriks persegi berukuran , kita mendefinisikan matriks sebagai . Kita menyebut hasil dari evaluasi polinomial pada matriks .   "
},
{
  "id": "eg_matrix_polynomials",
  "level": "2",
  "url": "s_invertible_matrices.html#eg_matrix_polynomials",
  "type": "Example",
  "number": "2.3.11",
  "title": "Polinomial Matriks.",
  "body": " Polinomial Matriks   Misalkan . Evaluasi pada matriks dan .    Kita memiliki dan .   "
},
{
  "id": "s_invertible_matrices-4-7",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices-4-7",
  "type": "Project",
  "number": "2.3.2",
  "title": "Polinomial Matriks.",
  "body": " Polinomial Matriks  Sebuah pangkat matriks bilangan bulat dihitung dalam Sage sebagai A^n .   Matriks perlu memiliki invertibel agar pangkat negatifnya dapat dihitung. Sage akan menghasilkan error dalam kasus ini jika matriks singular.   Ekspresi polinomial kemudian dapat dengan mudah dihitung secara manual dalam Sage. Sel berikutnya menghitung dan untuk .   "
},
{
  "id": "th_power_rules",
  "level": "2",
  "url": "s_invertible_matrices.html#th_power_rules",
  "type": "Theorem",
  "number": "2.3.12",
  "title": "Sifat-sifat Pangkat Matriks.",
  "body": " Sifat-sifat Pangkat Matriks   Sifat-sifat berikut berlaku untuk semua matriks , semua skalar , dan semua bilangan bulat .                        .      "
},
{
  "id": "th_inverse_trans",
  "level": "2",
  "url": "s_invertible_matrices.html#th_inverse_trans",
  "type": "Theorem",
  "number": "2.3.13",
  "title": "Invers dan Transpose Matrik.",
  "body": " Invers dan Transpose Matrik   Misalkan invertibel. Kita memiliki , dalam hal ini .    Kita membuktikan kedua implikasi dari pernyataan jika dan hanya jika secara terpisah.  Misalkan invertibel dengan invers . Untuk melihat bahwa invertibel, dengan invers sebagaimana ditentukan dalam , kita hanya perlu menunjukkan bahwa . Kita verifikasi kedua kesamaan secara terpisah:  . Dalam kedua rantai kesamaan kita menggunakan klaim jelas .  Untuk arah sebaliknya, asumsikan invertibel. Menetapkan , kita melihat bahwa . Menurut implikasi pertama, kita tahu bahwa jika invertibel, maka demikian pula .   "
},
{
  "id": "s_invertible_matrices_ex-1-2",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-2",
  "type": "Exercise",
  "number": "2.3.3.1",
  "title": "",
  "body": "  Untuk setiap matriks, berikan inversnya atau tunjukkan bahwa matriks tersebut tidak memiliki invers (non invertibel).               , dimana .     "
},
{
  "id": "s_invertible_matrices_ex-1-3",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-3",
  "type": "Exercise",
  "number": "2.3.3.2",
  "title": "",
  "body": "  Setiap di bawah ini invertibel. Temukan dengan tebak dan periksa. Anda mungkin ingin menggunakan metode baris atau kolom perkalian matriks untuk membenarkan jawaban Anda.                    "
},
{
  "id": "s_invertible_matrices_ex-1-4",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-4",
  "type": "Exercise",
  "number": "2.3.3.3",
  "title": "",
  "body": "  Misalkan adalah matriks invertibel. Buktikan: untuk sembarang  tak-nol , matriks invertibel.   "
},
{
  "id": "s_invertible_matrices_ex-1-5",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-5",
  "type": "Exercise",
  "number": "2.3.3.4",
  "title": "",
  "body": "  Asumsikan adalah matriks persegi dengan .    Buktikan: jika memiliki dua kolom identik, maka tidak invertibel.    Buktikan: jika memiliki baris yang merupakan kelipatan skalar dari baris lain, maka tidak invertibel.      Gunakan metode kolom dan\/atau baris perkalian matriks untuk menunjukkan secara langsung bahwa tidak dapat memiliki matriks invers.   "
},
{
  "id": "s_invertible_matrices_ex-1-6",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-6",
  "type": "Exercise",
  "number": "2.3.3.5",
  "title": "",
  "body": "  Temukan semua matriks invertibel  yang memenuhi persamaan yang diberikan, atau tunjukkan tidak ada demikian. Justifikasi jawaban Anda.     .     .               "
},
{
  "id": "s_invertible_matrices_ex-1-7",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-7",
  "type": "Exercise",
  "number": "2.3.3.6",
  "title": "",
  "body": "  Misalkan . Temukan rumus untuk , dimana adalah bilangan bulat. Justifikasi jawaban Anda menggunakan pembuktian dengan induksi.   "
},
{
  "id": "s_invertible_matrices_ex-1-8",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-8",
  "type": "Exercise",
  "number": "2.3.3.7",
  "title": "",
  "body": "  Misalkan , matriks yang terdiri dari semua angka satu. Temukan rumus untuk , dimana adalah bilangan bulat. Justifikasi jawaban Anda menggunakan pembuktian dengan induksi.   "
},
{
  "id": "s_invertible_matrices_ex-1-9",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-9",
  "type": "Exercise",
  "number": "2.3.3.8",
  "title": "",
  "body": "  Misalkan , dimana adalah skalar tetap tertentu. Misalkan adalah matriks yang memenuhi .    Buktikan: jika , maka invertibel.    Asumsikan lebih lanjut bahwa bukan kelipatan skalar dari .  Buktikan: jika , maka singular.     "
},
{
  "id": "ex_expand_matrix_prod",
  "level": "2",
  "url": "s_invertible_matrices.html#ex_expand_matrix_prod",
  "type": "Exercise",
  "number": "2.3.3.9",
  "title": "Ekspansi Produk Matriks.",
  "body": " Ekspansi Produk Matriks  Tetapkan bilangan bulat positif . Diberikan kombinasi linear dari matriks  , buktikan dengan induksi pada bahwa . Perhatikan bahwa setiap langkah (dasar dan induksi) dari induksi Anda pada akan memerlukan argumen yang menggunakan induksi pada ! Ini kadang-kadang disebut induksi ganda . Sebagai contoh, dalam langkah dasar Anda harus menunjukkan bahwa untuk sembarang ; ini harus dibuktikan dengan induksi pada .  "
},
{
  "id": "ex_poly_inA_commute",
  "level": "2",
  "url": "s_invertible_matrices.html#ex_poly_inA_commute",
  "type": "Exercise",
  "number": "2.3.3.10",
  "title": "Ekspresi Polinomial dari <span class=\"process-math\">\\(A\\)<\/span> Komutatif.",
  "body": " Ekspresi Polinomial dari Komutatif   Misalkan dan adalah polinomial dengan koefisien real. Untuk sembarang matriks persegi , tunjukkan bahwa matriks dan komutatif: yaitu, . Anda dapat menggunakan hasil dari .   "
},
{
  "id": "s_invertible_matrices_ex-1-12",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-12",
  "type": "Exercise",
  "number": "2.3.3.11",
  "title": "",
  "body": "  Misalkan adalah matriks yang memenuhi untuk suatu .  Tunjukkan bahwa invertibel, dan bahwa sebenarnya . Anda dapat menggunakan hasil dari dan\/atau .   "
},
{
  "id": "s_invertibility_theorem",
  "level": "1",
  "url": "s_invertibility_theorem.html",
  "type": "Section",
  "number": "2.4",
  "title": "Teorema Invertibilitas",
  "body": " Teorema Invertibilitas   Kita melihat dalam bahwa memverifikasi secara langsung apakah sebuah matriks invertibel, hanya menggunakan , dapat menjadi tugas yang cukup rumit. Tujuan bagian ini adalah membuat hal ini kurang memberatkan dengan mengembangkan beberapa metode ekuivalen untuk menguji invertibilitas. Pekerjaan kita berpuncak pada dan , yang menarik koneksi antara invertibilitas, solusi sistem linear, dan bentuk eselon baris dari matriks persegi. Tidak mengherankan, teman lama kita eliminasi Gaussian muncul sebagai alat komputasional fundamental.    Matriks Elementer  Kita mulai dengan pembahasan matriks elementer , yang berfungsi sebagai blok bangunan dasar untuk matriks invertibel, dan memberikan koneksi krusial antara reduksi baris dan perkalian matriks.   matriks elementer  matriks elementer    Matriks elementer penskalaan     Matriks elementer penukaran baris     Matriks elementer penjumlahan baris   Matriks Elementer   Sebuah matriks  disebut elementer jika mengalikan sembarang matriks  di kiri dengan melakukan salah satu operasi baris kita pada .  Kita memiliki berbagai jenis matriks elementer tergantung pada jenis operasi baris yang mereka lakukan, dan kita menotasikannya dengan elaborasi notasi operasi baris kita sebelumnya:   Sebuah matriks elementer penskalaan  adalah matriks sedemikian sehingga mengalikan matriks di kiri dengan menskalakan baris ke- dari dengan .    Sebuah matriks elementer penukaran baris  adalah matriks sedemikian sehingga mengalikan matriks di kiri dengan menukar baris ke- dan ke- dari .    Sebuah matriks elementer penjumlahan baris  adalah matriks sedemikian sehingga mengalikan matriks di kiri dengan mengganti baris ke- dari dengan .       Secara alami, metode baris perkalian adalah kunci untuk menghubungkan operasi baris tertentu dengan matriks elementer tertentu. menunjukkan bahwa sekali Anda menetapkan dimensi, matriks elementer didefinisikan secara tunggal oleh operasi baris yang dilakukannya.   Rumus Matriks Elementer   Tetapkan bilangan bulat . Tiga jenis matriks elementer dapat dideskripsikan sebagai berikut:    Matriks penskalaan  adalah hasil dari menskalakan baris ke- dari dengan .       Matriks penukaran baris  adalah hasil dari menukar baris ke- dan ke- dari .       Matriks penjumlahan baris  adalah hasil dari mengganti baris ke- dari dengan jumlah dari baris ke- -nya dan kali baris ke- -nya.         Pertama kita menunjukkan bahwa jika adalah salah satu matriks elementer , maka ia harus mengambil salah satu bentuk yang dideskripsikan di atas. Memang, karena mengalikan di kiri dengan melakukan operasi baris tertentu, dan karena , kita melihat bahwa sendiri adalah hasil dari melakukan operasi baris tertentu ini pada matriks identitas . Dengan demikian adalah salah satu dari tiga jenis matriks yang dideskripsikan di atas, diperoleh dengan melakukan operasi baris elementer pada .  Selanjutnya, kita harus menunjukkan bahwa sembarang matriks  yang dideskripsikan di atas memang elementer dalam pengertian : yaitu, kita harus menunjukkan bahwa mengalikan sembarang matriks  di kiri dengan melakukan operasi baris yang relevan pada . Ini sekarang merupakan konsekuensi langsung dari .  Sebagai contoh, ambil . Untuk , baris ke- dari diberikan oleh baris ke- dari kali . Karena baris ke- dari dalam kasus ini memiliki satu pada entri ke- dan nol di tempat lainnya, produk dari baris ini dan hanyalah baris ke- dari . Demikian pula, baris ke- dari dalam kasus ini adalah kali baris ke- dari . Dengan demikian membiarkan semua baris dari kecuali baris ke- , yang diskalakan dengan .    Matriks elementer memberikan kita cara memahami reduksi baris sebagai serangkaian perkalian matriks (di kiri). Ingat bahwa operasi baris pada sistem linear berguna sejauh mereka mempertahankan himpunan solusi, dan bahwa ini adalah hasil dari setiap operasi yang dalam beberapa hal dapat dibalik . (Lihat .) Dalam terms perkalian matriks, atribut dapat dibalik ini tercermin dalam fakta bahwa matriks elementer invertibel .   Invers Matriks Elementer   Tetapkan . Semua matriks elementer invertibel, dan inversnya adalah matriks elementer. Bahkan, kita memiliki rumus berikut:     Semua rumus ini mengikuti dengan mudah dari , dan fakta bahwa matriks elementer invers yang diusulkan melakukan kebalikan , atau invers, dari operasi baris yang berkorespondensi dengan matriks elementer yang diberikan.     Invers Matriks Elementer   Tetapkan . Verifikasi bahwa pasangan berikut dari matriks elementer memang invers satu sama lain.                       Kita memiliki dan . Anda dapat memverifikasi sendiri bahwa .    Kita memiliki . Anda dapat memverifikasi sendiri bahwa .    Kita memiliki dan . Anda dapat memverifikasi sendiri bahwa .        Selingan tentang Persamaan Matriks  Kita mengambil momen untuk membuat observasi sederhana berikut, yang agak terlambat. Yakni, kita dapat merepresentasikan sebuah sistem persamaan linear  sebagai sebuah persamaan matriks tunggal  , atau , dimana , , .  Memang jika Anda menguraikan sisi kiri dari menjadi vektor kolom , menggunakan definisi perkalian matriks, dan kemudian menerapkan definisi kesamaan matriks, maka Anda memperoleh sistem linear .  Dengan cara yang sama, sebuah -tupel adalah solusi untuk sistem persamaan  jika dan hanya jika vektor kolom berkorespondensinya adalah solusi untuk persamaan matriks  .  Kita dengan demikian telah mengulang masalah menyelesaikan sistem linear menjadi masalah menyelesaikan persamaan matriks tertentu berbentuk untuk vektor kolom tak diketahui . Secara khusus, sebuah sistem linear homogen  dapat direpresentasikan sebagai persamaan matriks berbentuk .  Terakhir, penggunaan eliminasi Gaussian untuk menyelesaikan sistem linear sekarang dapat dipahami dengan cara aljabar menggunakan perkalian matriks.  Secara lebih rinci, misalkan sistem linear yang diberikan memiliki matriks augmented yang direduksi baris menjadi matriks eselon baris setelah melakukan urutan operasi baris. Nyatakan operasi baris ke- sebagai , dan nyatakan dengan hasil dari menerapkan pada matriks .  Urutan operasi kita diterjemahkan ke urutan persamaan matriks berikut: .  Misalkan berkorespondensi dengan matriks elementer . Maka kita merepresentasikan urutan yang sama menggunakan perkalian matriks: . Penggambaran reduksi baris dalam terms perkalian kiri berturut-turut oleh matriks elementer ini akan berguna bagi kita dalam banyak cara. Secara khusus, mengikuti dari diskusi ini bahwa dua matriks dan ekuivalen baris jika dan hanya jika kita memiliki untuk sembarang koleksi matriks elementer .    Teorema Invertibilitas  Kita sekarang dalam posisi untuk membuktikan teorema besar pertama kita.   Teorema Invertibilitas   Misalkan adalah matriks . Pernyataan-pernyataan berikut ekuivalen.     invertibel.    Persamaan matriks memiliki solusi tunggal untuk sembarang vektor kolom .    Persamaan matriks memiliki solusi tunggal : yaitu, .     ekuivalen baris dengan , matriks identitas .     adalah produk dari matriks elementer.      Ingat bahwa untuk menunjukkan dua pernyataan dan ekuivalen, kita harus menunjukkan dua implikasi: , dan . Alih-alih melakukan ini untuk setiap pasangan kalimat di atas, kita meringankan beban kerja kita dengan justru menunjukkan siklus implikasi berikut: . Karena implikasi bersifat transitif, mulai dari sembarang titik dalam siklus kita dan membuat jalan kita sepanjang rantai implikasi, kita melihat bahwa sembarang satu proposisi mengimplikasikan proposisi lainnya.    Misalkan ada. Diberikan sembarang vektor kolom , kita memiliki , yang menunjukkan bahwa adalah solusi tunggal untuk .     Jelas, jika memiliki solusi tunggal untuk sembarang pilihan , maka ia memiliki solusi tunggal untuk pilihan tertentu  . Karena jelas merupakan solusi untuk persamaan tersebut, ia harus menjadi satu-satunya solusi.     Reduksi baris menjadi matriks dalam bentuk eselon baris tereduksi menggunakan eliminasi Gauss-Jordan. (Lihat .) Karena himpunan solusi untuk identik dengan himpunan solusi untuk (terapkan pada sistem linear berkorespondensinya), kita melihat bahwa adalah satu-satunya solusi untuk . sekarang mengimplikasikan memiliki leading one di setiap kolom. Karena adalah dan dalam bentuk eselon baris tereduksi , mengikuti bahwa harus menjadi matriks identitas. (Yakinkan diri Anda tentang ini.) Dengan demikian ekuivalen baris dengan , matriks identitas.     Jika ekuivalen baris dengan , maka menurut diskusi kita setelah , kita memiliki untuk sembarang koleksi matriks elementer . Karena matriks elementer invertibel kita dapat mengalikan kedua sisi persamaan ini dengan untuk menyimpulkan . Karena invers matriks elementer adalah elementer ( ), kita menyimpulkan bahwa adalah produk dari matriks elementer.     Jika adalah produk dari matriks elementer, maka ia adalah produk dari matriks invertibel. Karena produk matriks invertibel adalah invertibel, kita menyimpulkan bahwa invertibel.        Teorema invertibilitas memiliki aplikasi segera untuk sistem linear dimana jumlah persamaan sama dengan jumlah variabel tak diketahui. Dalam situasi khusus ini, sistem ekuivalen dengan persamaan matriks berbentuk , dimana adalah matriks persegi . Menurut teorema, jika kita tahu invertibel, maka persamaan matriks, dan dengan demikian sistem linear, memiliki solusi tunggal: yaitu, .  Bagaimana jika tidak invertibel? Maka teorema hanya memberitahu kita bahwa terdapat beberapa vektor kolom , tidak harus yang diberikan, sedemikian sehingga persamaan tidak memiliki solusi tunggal. Dengan kata lain, teorema saja tidak memungkinkan kita menyimpulkan apakah yang diberikan memiliki solusi, dan kita harus menggunakan prosedur eliminasi Gaussian biasa kita untuk menjawab pertanyaan ini.    Keluarga matriks segitiga (atas, bawah, dan diagonal) yang didefinisikan di bawah ini menyediakan tempat uji mudah untuk teorema invertibilitas baru kita.   matriks diagonal  matriks segitiga  matriks segitiga atas  matriks segitiga bawah  Matriks Diagonal dan Segitiga   Misalkan adalah .   Untuk setiap entri disebut entri diagonal ke- dari , dan subarray dari yang terdiri dari disebut diagonal . Sebuah entri off-diagonal dari adalah sembarang entri yang bukan di antara entri diagonal.    Matriks adalah diagonal jika semua entri off-diagonal adalah nol: , jika untuk semua dengan .    Matriks adalah segitiga atas jika semua entri di bawah diagonal adalah nol: , jika untuk semua .    Matriks adalah segitiga bawah jika semua entri di atas diagonal adalah nol: , jika untuk semua .    Matriks adalah segitiga jika segitiga atas atau segitiga bawah.        Matriks Segitiga   Himpunan dari semua matriks diagonal dapat dideskripsikan sebagai . Himpunan dari semua matriks segitiga atas dapat dideskripsikan sebagai . Himpunan dari semua matriks segitiga bawah dapat dideskripsikan sebagai .     Invertibilitas Matriks Segitiga   Misalkan adalah matriks segitiga . Maka invertibel jika dan hanya jika untuk semua .  Dengan kata lain, invertibel jika dan hanya jika entri diagonal dari semuanya tak-nol.    Dalam pembuktian ini kita akan menggunakan fakta bahwa matriks persegi invertibel jika dan hanya jika invertibel. ( )   Kasus: segitiga atas  Jika untuk semua , maka mudah dilihat bahwa kita dapat mereduksi baris pertama menjadi matriks eselon baris dengan leading ones di setiap entri diagonal, dan kemudian lebih lanjut menjadi matriks identitas. Dengan demikian ekuivalen baris dengan dalam kasus ini, dan kita menyimpulkan dari pernyataan (4) bahwa invertibel.  Untuk implikasi sebaliknya, kita menunjukkan bahwa jika tidak benar bahwa untuk semua , maka terdapat solusi tak-nol untuk persamaan matriks . Jika hal ini terjadi, maka karena kita memiliki dua solusi berbeda untuk , tidak invertibel menurut Pernyataan (3) .  Untuk tujuan ini, asumsikan tidak benar bahwa untuk semua . Maka kita dapat menemukan indeks terkecil sedemikian sehingga dan untuk sembarang . Mudah dilihat bahwa ekuivalen baris dengan matriks , yang memenuhi untuk dan untuk semua : yaitu,  diagonal hingga kolom ke- .  Kita sekarang memberikan solusi tak-nol untuk : yaitu, tetapkan , untuk semua , dan untuk semua . (Verifikasi ini untuk diri Anda sendiri, menggunakan deskripsi di atas dari untuk .) Karena ekuivalen baris dengan , sistem linear berkorespondensi dengan dan memiliki solusi yang sama. Dengan demikian juga merupakan solusi tak-nol untuk . Kita menyimpulkan bahwa tidak invertibel menurut Pernyataan (3) . Ini melengkapi pembuktian implikasi ini.    Kasus: segitiga bawah  Tetapkan . Maka segitiga atas, dan untuk semua . Maka .       Algoritma Invertibilitas  Pembuktian implikasi dari dapat diperluas menjadi algoritma yang (1) memutuskan apakah matriks yang diberikan invertibel, dan (2) menghitung jika invertibel.   Algoritma Invers   Misalkan adalah matriks . Untuk menguji invertibilitas lanjutkan sebagai berikut.    Langkah 1  Bangun matriks augmented  dan gunakan eliminasi Gaussian untuk mereduksi baris menjadi bentuk , dimana dalam bentuk eselon baris.  Matriks invertibel jika dan hanya jika memiliki leading ones.    Langkah 2  Jika memiliki leading ones, reduksi baris lebih lanjut menjadi matriks berbentuk . Maka .      Dari pembuktian kita tahu invertibel jika dan hanya jika memiliki leading ones. Pertanyaannya tetap mengapa mereduksi matriks augmented menjadi memberitahu kita bahwa . Misalkan adalah matriks elementer yang merepresentasikan operasi baris yang terlibat dalam proses ini. Maka kita memiliki . Setelah sedikit aljabar, kita melihat bahwa . Karena adalah hasil dari menerapkan operasi baris yang sama pada kita memiliki , sebagaimana diklaim.    Dari pembuktian kita juga menurunkan algoritma untuk menuliskan matriks invertibel sebagai produk matriks elementer. Anda harus memikirkan ini sebagai contoh pertama dari fleksibilitas besar eliminasi Gaussian, sebagaimana disampaikan oleh kita.   Algoritma Produk Matriks Elementer   Misalkan adalah matriks . Untuk (secara potensial) menuliskan sebagai produk matriks elementer, lanjutkan sebagai berikut.    Langkah 1  Cobalah mereduksi baris menjadi identitas, melacak urutan operasi baris Anda dalam bentuk matriks elementer.    Langkah 2  Jika Anda dapat mereduksi baris menjadi dengan urutan operasi baris berkorespondensi dengan matriks elementer , maka Karena invers matriks elementer adalah elementer, kita telah menuliskan sebagai produk matriks elementer.      Lihat pembuktian implikasi dalam .     Contoh Algoritma Invers  Misalkan . Menggabungkan kedua algoritma kita dapat memutuskan apakah invertibel, dan jika ya, menghitung dan menuliskan sebagai produk matriks elementer. Menurut , komputasi menunjukkan bahwa invertibel dan . Selanjutnya, merepresentasikan operasi baris kita sebagai matriks elementer, kita melihat bahwa , dimana . Kita menyimpulkan bahwa .     Beberapa Ujung Teoretis yang Longgar  Kedua algoritma invertibilitas di atas adalah contoh bagus bagaimana hasil teoretis seperti teorema invertibilitas kita dapat memberikan dividen komputasional yang serius. Yakni, berkat teori kita telah menemukan metode menghitung invers matriks yang pada dasarnya bermuara pada reduksi baris.  Kita mengakhiri bagian ini dengan sejumlah implikasi teoretis yang mengikat beberapa ujung yang longgar. Hasil di bawah ini semua merupakan konsekuensi dalam beberapa cara dari . Yang pertama menunjukkan bahwa sebenarnya hanya satu dari persamaan definisi atau cukup untuk mendefinisikan invers matriks.   Invers Kiri jika dan hanya jika Invers Kanan   Misalkan dan adalah . Maka    .     .   Dalam bahasa sederhana: matriks adalah invers kiri dari jika dan hanya jika ia adalah invers kanan dari .    Cukup membuktikan implikasi pertama: yang kedua kemudian mengikuti dengan menukar peran dan .  Misalkan . Kita pertama menunjukkan bahwa invertibel. Kita memiliki . Menurut Pernyataan (3) , kita menyimpulkan bahwa invertibel.  Sekarang setelah kita tahu ada kita memiliki .    Sebagai konsekuensi lebih lanjut dari , kita akhirnya dapat memperkuat implikasi menjadi ekuivalensi.   Ekuivalensi Invertibilitas Produk   Misalkan dan adalah . Maka invertibel jika dan hanya jika dan keduanya invertibel: ,      Implikasi:  Kita tahu dari bahwa jika dan invertibel, maka demikian pula .    Implikasi: invertibel  dan invertibel  Asumsikan invertibel dan misalkan adalah inversnya. Dengan demikian . Kita pertama membuktikan invertibel. Kita memiliki . Implikasi terakhir menggunakan Pernyataan (3) dan fakta bahwa invertibel. Kita telah menunjukkan bahwa , dan dengan demikian bahwa invertibel, menggunakan sekali lagi Pernyataan (3) .  Selanjutnya kita membuktikan secara langsung bahwa invertibel. Yakni, kita klaim bahwa . Memang, karena adalah invers dari , kita memiliki . Dengan demikian adalah invers kanan dari . sekarang mengimplikasikan , dan dengan demikian bahwa , sebagaimana diklaim.  Ini melengkapi pembuktian bahwa jika invertibel, maka dan invertibel.     Kita menyimpulkan dengan dua hasil terkait reduksi baris. Yang pertama memberikan formulasi ekuivalen dari ekuivalensi baris dalam terms aritmetika matriks: elaborasi dari diskusi kita dalam .   Ekuivalensi Baris dan Matriks Invertibel   Misalkan dan adalah matriks . Pernyataan-pernyataan berikut ekuivalen.   Matriks dan ekuivalen baris.    Terdapat matriks elementer sedemikian sehingga .    Terdapat matriks invertibel  sedemikian sehingga .       Ekuivalensi (1) dan (2) ditunjukkan dalam diskusi kita dalam . Ekuivalensi (2) dan (3) adalah konsekuensi langsung dari (5) karena matriks invertibel jika dan hanya jika ia dapat dituliskan sebagai untuk sembarang matriks elementer .     Sifat-sifat Ekuivalensi Baris  Dengan bantuan , kita dapat dengan mudah menunjukkan bahwa relasi ekuivalensi baris bersifat refleksif , simetris , dan transitif . Dengan kata lain, dengan membiarkan menyatakan bahwa ekuivalen baris dengan , sifat-sifat berikut berlaku.   Refleksivitas  Untuk sembarang matriks , kita memiliki : , setiap matriks ekuivalen baris dengan dirinya sendiri.    Simetri  Untuk semua matriks dan , jika , maka .    Transitivitas  Untuk semua matriks , jika dan , maka .   Pembuktian fakta-fakta ini dibiarkan sebagai latihan ( ).   Terakhir, kita memberikan akhirnya pembuktian pernyataan ketiga dari yang dijanjikan kembali dalam . Pembuktian ini berasal dari Thomas Yuster Thomas Yuster. The reduced row echelon form of a matrix is unique: a simple proof , Mathematics Magazine 57 (1984), no. 2, 93-94. .   Keunikan Bentuk Eselon Baris Tereduksi   Sembarang matriks ekuivalen baris dengan matriks tunggal dalam bentuk eselon baris tereduksi.    Misalkan adalah matriks . Menggunakan eliminasi Gauss-Jordan, kita dapat mereduksi baris menjadi matriks dalam bentuk eselon baris tereduksi. Misalkan juga ekuivalen baris dengan matriks dalam bentuk eselon baris tereduksi. Maka dan ekuivalen baris, karena relasi ekuivalensi baris bersifat simetris dan transitif ( ). Dengan demikian cukup menunjukkan bahwa jika dan adalah matriks ekuivalen baris dalam bentuk eselon baris tereduksi, maka . Kita lakukan dengan induksi pada . Langkah dasar trivial, karena hanya ada satu matriks dalam bentuk eselon baris tereduksi.  Untuk langkah induksi kita mengasumsikan bahwa sembarang dua matriks ekuivalen baris dalam bentuk eselon baris tereduksi adalah sama. Misalkan dengan kontradiksi bahwa dan adalah matriks ekuivalen baris dalam bentuk eselon baris tereduksi, dan bahwa . Menurut terdapat matriks invertibel sedemikian sehingga . Kolom pertama dari dan membentuk matriks dan , masing-masing, yang dalam bentuk eselon baris tereduksi, sebagaimana mudah diperiksa. Lebih lanjut, dan ekuivalen baris: memang, menggunakan kita melihat bahwa mengimplikasikan . Menurut hipotesis induksi kita harus memiliki , dan dengan demikian dan hanya dapat berbeda pada kolom terakhir mereka.  Kita klaim bahwa dan keduanya harus memiliki leading one pada kolom terakhir. Untuk melihat mengapa, pertimbangkan persamaan matriks , dimana adalah vektor kolom . Karena , kita memiliki , dan dengan demikian . Karena dan berbeda paling banyak pada kolom terakhir mereka, kolom pertama dari adalah kolom nol, dan dengan demikian kita memiliki . Karena , terdapat beberapa sedemikian sehingga . Karena menurut , kita harus memiliki . Kita telah menunjukkan bahwa untuk sembarang yang memenuhi , kita harus memiliki . Mengikuti dari bahwa harus memiliki leading one pada kolom terakhirnya, karena jika tidak variabel dalam sistem akan bebas, dan dapat mengambil sembarang nilai. Untuk melihat bahwa juga memiliki leading one pada kolom terakhir, kita menggunakan argumen yang sama, mulai dari persamaan .  Untuk meringkas, mulai dengan matriks ekuivalen baris dan dalam bentuk eselon baris tereduksi, dan mengasumsikan dengan kontradiksi bahwa , kita menyimpulkan bahwa (a) kolom pertama dari dan sama dan membentuk matriks dalam bentuk eselon baris tereduksi, dan (b) kolom terakhir dari dan memiliki leading ones. Karena dan dalam bentuk eselon baris tereduksi, dan karena kolom pertama dari dan sama, kita melihat bahwa leading ones pada kolom terakhir dari dan harus terjadi pada baris yang sama: yaitu, baris nol pertama dari . Mengikuti bahwa , sebuah kontradiksi.      "
},
{
  "id": "d_elementary_matrix",
  "level": "2",
  "url": "s_invertibility_theorem.html#d_elementary_matrix",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Matriks Elementer.",
  "body": " matriks elementer  matriks elementer    Matriks elementer penskalaan     Matriks elementer penukaran baris     Matriks elementer penjumlahan baris   Matriks Elementer   Sebuah matriks  disebut elementer jika mengalikan sembarang matriks  di kiri dengan melakukan salah satu operasi baris kita pada .  Kita memiliki berbagai jenis matriks elementer tergantung pada jenis operasi baris yang mereka lakukan, dan kita menotasikannya dengan elaborasi notasi operasi baris kita sebelumnya:   Sebuah matriks elementer penskalaan  adalah matriks sedemikian sehingga mengalikan matriks di kiri dengan menskalakan baris ke- dari dengan .    Sebuah matriks elementer penukaran baris  adalah matriks sedemikian sehingga mengalikan matriks di kiri dengan menukar baris ke- dan ke- dari .    Sebuah matriks elementer penjumlahan baris  adalah matriks sedemikian sehingga mengalikan matriks di kiri dengan mengganti baris ke- dari dengan .      "
},
{
  "id": "th_elementary_matrices",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_elementary_matrices",
  "type": "Theorem",
  "number": "2.4.2",
  "title": "Rumus Matriks Elementer.",
  "body": " Rumus Matriks Elementer   Tetapkan bilangan bulat . Tiga jenis matriks elementer dapat dideskripsikan sebagai berikut:    Matriks penskalaan  adalah hasil dari menskalakan baris ke- dari dengan .       Matriks penukaran baris  adalah hasil dari menukar baris ke- dan ke- dari .       Matriks penjumlahan baris  adalah hasil dari mengganti baris ke- dari dengan jumlah dari baris ke- -nya dan kali baris ke- -nya.         Pertama kita menunjukkan bahwa jika adalah salah satu matriks elementer , maka ia harus mengambil salah satu bentuk yang dideskripsikan di atas. Memang, karena mengalikan di kiri dengan melakukan operasi baris tertentu, dan karena , kita melihat bahwa sendiri adalah hasil dari melakukan operasi baris tertentu ini pada matriks identitas . Dengan demikian adalah salah satu dari tiga jenis matriks yang dideskripsikan di atas, diperoleh dengan melakukan operasi baris elementer pada .  Selanjutnya, kita harus menunjukkan bahwa sembarang matriks  yang dideskripsikan di atas memang elementer dalam pengertian : yaitu, kita harus menunjukkan bahwa mengalikan sembarang matriks  di kiri dengan melakukan operasi baris yang relevan pada . Ini sekarang merupakan konsekuensi langsung dari .  Sebagai contoh, ambil . Untuk , baris ke- dari diberikan oleh baris ke- dari kali . Karena baris ke- dari dalam kasus ini memiliki satu pada entri ke- dan nol di tempat lainnya, produk dari baris ini dan hanyalah baris ke- dari . Demikian pula, baris ke- dari dalam kasus ini adalah kali baris ke- dari . Dengan demikian membiarkan semua baris dari kecuali baris ke- , yang diskalakan dengan .   "
},
{
  "id": "th_inverse_elem",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_inverse_elem",
  "type": "Theorem",
  "number": "2.4.3",
  "title": "Invers Matriks Elementer.",
  "body": " Invers Matriks Elementer   Tetapkan . Semua matriks elementer invertibel, dan inversnya adalah matriks elementer. Bahkan, kita memiliki rumus berikut:     Semua rumus ini mengikuti dengan mudah dari , dan fakta bahwa matriks elementer invers yang diusulkan melakukan kebalikan , atau invers, dari operasi baris yang berkorespondensi dengan matriks elementer yang diberikan.   "
},
{
  "id": "eg_elem_inverse",
  "level": "2",
  "url": "s_invertibility_theorem.html#eg_elem_inverse",
  "type": "Example",
  "number": "2.4.4",
  "title": "Invers Matriks Elementer.",
  "body": " Invers Matriks Elementer   Tetapkan . Verifikasi bahwa pasangan berikut dari matriks elementer memang invers satu sama lain.                       Kita memiliki dan . Anda dapat memverifikasi sendiri bahwa .    Kita memiliki . Anda dapat memverifikasi sendiri bahwa .    Kita memiliki dan . Anda dapat memverifikasi sendiri bahwa .     "
},
{
  "id": "th_invertibility",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_invertibility",
  "type": "Theorem",
  "number": "2.4.5",
  "title": "Teorema Invertibilitas.",
  "body": " Teorema Invertibilitas   Misalkan adalah matriks . Pernyataan-pernyataan berikut ekuivalen.     invertibel.    Persamaan matriks memiliki solusi tunggal untuk sembarang vektor kolom .    Persamaan matriks memiliki solusi tunggal : yaitu, .     ekuivalen baris dengan , matriks identitas .     adalah produk dari matriks elementer.      Ingat bahwa untuk menunjukkan dua pernyataan dan ekuivalen, kita harus menunjukkan dua implikasi: , dan . Alih-alih melakukan ini untuk setiap pasangan kalimat di atas, kita meringankan beban kerja kita dengan justru menunjukkan siklus implikasi berikut: . Karena implikasi bersifat transitif, mulai dari sembarang titik dalam siklus kita dan membuat jalan kita sepanjang rantai implikasi, kita melihat bahwa sembarang satu proposisi mengimplikasikan proposisi lainnya.    Misalkan ada. Diberikan sembarang vektor kolom , kita memiliki , yang menunjukkan bahwa adalah solusi tunggal untuk .     Jelas, jika memiliki solusi tunggal untuk sembarang pilihan , maka ia memiliki solusi tunggal untuk pilihan tertentu  . Karena jelas merupakan solusi untuk persamaan tersebut, ia harus menjadi satu-satunya solusi.     Reduksi baris menjadi matriks dalam bentuk eselon baris tereduksi menggunakan eliminasi Gauss-Jordan. (Lihat .) Karena himpunan solusi untuk identik dengan himpunan solusi untuk (terapkan pada sistem linear berkorespondensinya), kita melihat bahwa adalah satu-satunya solusi untuk . sekarang mengimplikasikan memiliki leading one di setiap kolom. Karena adalah dan dalam bentuk eselon baris tereduksi , mengikuti bahwa harus menjadi matriks identitas. (Yakinkan diri Anda tentang ini.) Dengan demikian ekuivalen baris dengan , matriks identitas.     Jika ekuivalen baris dengan , maka menurut diskusi kita setelah , kita memiliki untuk sembarang koleksi matriks elementer . Karena matriks elementer invertibel kita dapat mengalikan kedua sisi persamaan ini dengan untuk menyimpulkan . Karena invers matriks elementer adalah elementer ( ), kita menyimpulkan bahwa adalah produk dari matriks elementer.     Jika adalah produk dari matriks elementer, maka ia adalah produk dari matriks invertibel. Karena produk matriks invertibel adalah invertibel, kita menyimpulkan bahwa invertibel.    "
},
{
  "id": "rm_inv_solutions",
  "level": "2",
  "url": "s_invertibility_theorem.html#rm_inv_solutions",
  "type": "Remark",
  "number": "2.4.6",
  "title": "",
  "body": "   Teorema invertibilitas memiliki aplikasi segera untuk sistem linear dimana jumlah persamaan sama dengan jumlah variabel tak diketahui. Dalam situasi khusus ini, sistem ekuivalen dengan persamaan matriks berbentuk , dimana adalah matriks persegi . Menurut teorema, jika kita tahu invertibel, maka persamaan matriks, dan dengan demikian sistem linear, memiliki solusi tunggal: yaitu, .  Bagaimana jika tidak invertibel? Maka teorema hanya memberitahu kita bahwa terdapat beberapa vektor kolom , tidak harus yang diberikan, sedemikian sehingga persamaan tidak memiliki solusi tunggal. Dengan kata lain, teorema saja tidak memungkinkan kita menyimpulkan apakah yang diberikan memiliki solusi, dan kita harus menggunakan prosedur eliminasi Gaussian biasa kita untuk menjawab pertanyaan ini.   "
},
{
  "id": "d_diagonal_triangular",
  "level": "2",
  "url": "s_invertibility_theorem.html#d_diagonal_triangular",
  "type": "Definition",
  "number": "2.4.7",
  "title": "Matriks Diagonal dan Segitiga.",
  "body": " matriks diagonal  matriks segitiga  matriks segitiga atas  matriks segitiga bawah  Matriks Diagonal dan Segitiga   Misalkan adalah .   Untuk setiap entri disebut entri diagonal ke- dari , dan subarray dari yang terdiri dari disebut diagonal . Sebuah entri off-diagonal dari adalah sembarang entri yang bukan di antara entri diagonal.    Matriks adalah diagonal jika semua entri off-diagonal adalah nol: , jika untuk semua dengan .    Matriks adalah segitiga atas jika semua entri di bawah diagonal adalah nol: , jika untuk semua .    Matriks adalah segitiga bawah jika semua entri di atas diagonal adalah nol: , jika untuk semua .    Matriks adalah segitiga jika segitiga atas atau segitiga bawah.      "
},
{
  "id": "eg_triang_matrices",
  "level": "2",
  "url": "s_invertibility_theorem.html#eg_triang_matrices",
  "type": "Example",
  "number": "2.4.8",
  "title": "Matriks Segitiga <span class=\"process-math\">\\(3\\times 3\\)<\/span>.",
  "body": " Matriks Segitiga   Himpunan dari semua matriks diagonal dapat dideskripsikan sebagai . Himpunan dari semua matriks segitiga atas dapat dideskripsikan sebagai . Himpunan dari semua matriks segitiga bawah dapat dideskripsikan sebagai .   "
},
{
  "id": "th_invertible_triangular",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_invertible_triangular",
  "type": "Theorem",
  "number": "2.4.9",
  "title": "Invertibilitas Matriks Segitiga.",
  "body": " Invertibilitas Matriks Segitiga   Misalkan adalah matriks segitiga . Maka invertibel jika dan hanya jika untuk semua .  Dengan kata lain, invertibel jika dan hanya jika entri diagonal dari semuanya tak-nol.    Dalam pembuktian ini kita akan menggunakan fakta bahwa matriks persegi invertibel jika dan hanya jika invertibel. ( )   Kasus: segitiga atas  Jika untuk semua , maka mudah dilihat bahwa kita dapat mereduksi baris pertama menjadi matriks eselon baris dengan leading ones di setiap entri diagonal, dan kemudian lebih lanjut menjadi matriks identitas. Dengan demikian ekuivalen baris dengan dalam kasus ini, dan kita menyimpulkan dari pernyataan (4) bahwa invertibel.  Untuk implikasi sebaliknya, kita menunjukkan bahwa jika tidak benar bahwa untuk semua , maka terdapat solusi tak-nol untuk persamaan matriks . Jika hal ini terjadi, maka karena kita memiliki dua solusi berbeda untuk , tidak invertibel menurut Pernyataan (3) .  Untuk tujuan ini, asumsikan tidak benar bahwa untuk semua . Maka kita dapat menemukan indeks terkecil sedemikian sehingga dan untuk sembarang . Mudah dilihat bahwa ekuivalen baris dengan matriks , yang memenuhi untuk dan untuk semua : yaitu,  diagonal hingga kolom ke- .  Kita sekarang memberikan solusi tak-nol untuk : yaitu, tetapkan , untuk semua , dan untuk semua . (Verifikasi ini untuk diri Anda sendiri, menggunakan deskripsi di atas dari untuk .) Karena ekuivalen baris dengan , sistem linear berkorespondensi dengan dan memiliki solusi yang sama. Dengan demikian juga merupakan solusi tak-nol untuk . Kita menyimpulkan bahwa tidak invertibel menurut Pernyataan (3) . Ini melengkapi pembuktian implikasi ini.    Kasus: segitiga bawah  Tetapkan . Maka segitiga atas, dan untuk semua . Maka .    "
},
{
  "id": "th_invertibility_algorithm",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_invertibility_algorithm",
  "type": "Theorem",
  "number": "2.4.10",
  "title": "Algoritma Invers.",
  "body": " Algoritma Invers   Misalkan adalah matriks . Untuk menguji invertibilitas lanjutkan sebagai berikut.    Langkah 1  Bangun matriks augmented  dan gunakan eliminasi Gaussian untuk mereduksi baris menjadi bentuk , dimana dalam bentuk eselon baris.  Matriks invertibel jika dan hanya jika memiliki leading ones.    Langkah 2  Jika memiliki leading ones, reduksi baris lebih lanjut menjadi matriks berbentuk . Maka .      Dari pembuktian kita tahu invertibel jika dan hanya jika memiliki leading ones. Pertanyaannya tetap mengapa mereduksi matriks augmented menjadi memberitahu kita bahwa . Misalkan adalah matriks elementer yang merepresentasikan operasi baris yang terlibat dalam proses ini. Maka kita memiliki . Setelah sedikit aljabar, kita melihat bahwa . Karena adalah hasil dari menerapkan operasi baris yang sama pada kita memiliki , sebagaimana diklaim.   "
},
{
  "id": "th_elem_matrices_alg",
  "level": "2",
  "url": "s_invertibility_theorem.html#th_elem_matrices_alg",
  "type": "Theorem",
  "number": "2.4.11",
  "title": "Algoritma Produk Matriks Elementer.",
  "body": " Algoritma Produk Matriks Elementer   Misalkan adalah matriks . Untuk (secara potensial) menuliskan sebagai produk matriks elementer, lanjutkan sebagai berikut.    Langkah 1  Cobalah mereduksi baris menjadi identitas, melacak urutan operasi baris Anda dalam bentuk matriks elementer.    Langkah 2  Jika Anda dapat mereduksi baris menjadi dengan urutan operasi baris berkorespondensi dengan matriks elementer , maka Karena invers matriks elementer adalah elementer, kita telah menuliskan sebagai produk matriks elementer.      Lihat pembuktian implikasi dalam .   "
},
{
  "id": "eg_inv_alg_example",
  "level": "2",
  "url": "s_invertibility_theorem.html#eg_inv_alg_example",
  "type": "Example",
  "number": "2.4.12",
  "title": "Contoh Algoritma Invers.",
  "body": " Contoh Algoritma Invers  Misalkan . Menggabungkan kedua algoritma kita dapat memutuskan apakah invertibel, dan jika ya, menghitung dan menuliskan sebagai produk matriks elementer. Menurut , komputasi menunjukkan bahwa invertibel dan . Selanjutnya, merepresentasikan operasi baris kita sebagai matriks elementer, kita melihat bahwa , dimana . Kita menyimpulkan bahwa .  "
},
{
  "id": "cor_left-right_inverse",
  "level": "2",
  "url": "s_invertibility_theorem.html#cor_left-right_inverse",
  "type": "Corollary",
  "number": "2.4.13",
  "title": "Invers Kiri jika dan hanya jika Invers Kanan.",
  "body": " Invers Kiri jika dan hanya jika Invers Kanan   Misalkan dan adalah . Maka    .     .   Dalam bahasa sederhana: matriks adalah invers kiri dari jika dan hanya jika ia adalah invers kanan dari .    Cukup membuktikan implikasi pertama: yang kedua kemudian mengikuti dengan menukar peran dan .  Misalkan . Kita pertama menunjukkan bahwa invertibel. Kita memiliki . Menurut Pernyataan (3) , kita menyimpulkan bahwa invertibel.  Sekarang setelah kita tahu ada kita memiliki .   "
},
{
  "id": "cor_inv_prod_eq",
  "level": "2",
  "url": "s_invertibility_theorem.html#cor_inv_prod_eq",
  "type": "Corollary",
  "number": "2.4.14",
  "title": "Ekuivalensi Invertibilitas Produk.",
  "body": " Ekuivalensi Invertibilitas Produk   Misalkan dan adalah . Maka invertibel jika dan hanya jika dan keduanya invertibel: ,      Implikasi:  Kita tahu dari bahwa jika dan invertibel, maka demikian pula .    Implikasi: invertibel  dan invertibel  Asumsikan invertibel dan misalkan adalah inversnya. Dengan demikian . Kita pertama membuktikan invertibel. Kita memiliki . Implikasi terakhir menggunakan Pernyataan (3) dan fakta bahwa invertibel. Kita telah menunjukkan bahwa , dan dengan demikian bahwa invertibel, menggunakan sekali lagi Pernyataan (3) .  Selanjutnya kita membuktikan secara langsung bahwa invertibel. Yakni, kita klaim bahwa . Memang, karena adalah invers dari , kita memiliki . Dengan demikian adalah invers kanan dari . sekarang mengimplikasikan , dan dengan demikian bahwa , sebagaimana diklaim.  Ini melengkapi pembuktian bahwa jika invertibel, maka dan invertibel.    "
},
{
  "id": "cor_row_equivalence_invertibility",
  "level": "2",
  "url": "s_invertibility_theorem.html#cor_row_equivalence_invertibility",
  "type": "Corollary",
  "number": "2.4.15",
  "title": "Ekuivalensi Baris dan Matriks Invertibel.",
  "body": " Ekuivalensi Baris dan Matriks Invertibel   Misalkan dan adalah matriks . Pernyataan-pernyataan berikut ekuivalen.   Matriks dan ekuivalen baris.    Terdapat matriks elementer sedemikian sehingga .    Terdapat matriks invertibel  sedemikian sehingga .       Ekuivalensi (1) dan (2) ditunjukkan dalam diskusi kita dalam . Ekuivalensi (2) dan (3) adalah konsekuensi langsung dari (5) karena matriks invertibel jika dan hanya jika ia dapat dituliskan sebagai untuk sembarang matriks elementer .   "
},
{
  "id": "rm_row_equivalence_props",
  "level": "2",
  "url": "s_invertibility_theorem.html#rm_row_equivalence_props",
  "type": "Remark",
  "number": "2.4.16",
  "title": "Sifat-sifat Ekuivalensi Baris.",
  "body": " Sifat-sifat Ekuivalensi Baris  Dengan bantuan , kita dapat dengan mudah menunjukkan bahwa relasi ekuivalensi baris bersifat refleksif , simetris , dan transitif . Dengan kata lain, dengan membiarkan menyatakan bahwa ekuivalen baris dengan , sifat-sifat berikut berlaku.   Refleksivitas  Untuk sembarang matriks , kita memiliki : , setiap matriks ekuivalen baris dengan dirinya sendiri.    Simetri  Untuk semua matriks dan , jika , maka .    Transitivitas  Untuk semua matriks , jika dan , maka .   Pembuktian fakta-fakta ini dibiarkan sebagai latihan ( ).  "
},
{
  "id": "ss_invertible_loose_ends-10",
  "level": "2",
  "url": "s_invertibility_theorem.html#ss_invertible_loose_ends-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "57 "
},
{
  "id": "cor_RRE_uniqueness",
  "level": "2",
  "url": "s_invertibility_theorem.html#cor_RRE_uniqueness",
  "type": "Corollary",
  "number": "2.4.17",
  "title": "Keunikan Bentuk Eselon Baris Tereduksi.",
  "body": " Keunikan Bentuk Eselon Baris Tereduksi   Sembarang matriks ekuivalen baris dengan matriks tunggal dalam bentuk eselon baris tereduksi.    Misalkan adalah matriks . Menggunakan eliminasi Gauss-Jordan, kita dapat mereduksi baris menjadi matriks dalam bentuk eselon baris tereduksi. Misalkan juga ekuivalen baris dengan matriks dalam bentuk eselon baris tereduksi. Maka dan ekuivalen baris, karena relasi ekuivalensi baris bersifat simetris dan transitif ( ). Dengan demikian cukup menunjukkan bahwa jika dan adalah matriks ekuivalen baris dalam bentuk eselon baris tereduksi, maka . Kita lakukan dengan induksi pada . Langkah dasar trivial, karena hanya ada satu matriks dalam bentuk eselon baris tereduksi.  Untuk langkah induksi kita mengasumsikan bahwa sembarang dua matriks ekuivalen baris dalam bentuk eselon baris tereduksi adalah sama. Misalkan dengan kontradiksi bahwa dan adalah matriks ekuivalen baris dalam bentuk eselon baris tereduksi, dan bahwa . Menurut terdapat matriks invertibel sedemikian sehingga . Kolom pertama dari dan membentuk matriks dan , masing-masing, yang dalam bentuk eselon baris tereduksi, sebagaimana mudah diperiksa. Lebih lanjut, dan ekuivalen baris: memang, menggunakan kita melihat bahwa mengimplikasikan . Menurut hipotesis induksi kita harus memiliki , dan dengan demikian dan hanya dapat berbeda pada kolom terakhir mereka.  Kita klaim bahwa dan keduanya harus memiliki leading one pada kolom terakhir. Untuk melihat mengapa, pertimbangkan persamaan matriks , dimana adalah vektor kolom . Karena , kita memiliki , dan dengan demikian . Karena dan berbeda paling banyak pada kolom terakhir mereka, kolom pertama dari adalah kolom nol, dan dengan demikian kita memiliki . Karena , terdapat beberapa sedemikian sehingga . Karena menurut , kita harus memiliki . Kita telah menunjukkan bahwa untuk sembarang yang memenuhi , kita harus memiliki . Mengikuti dari bahwa harus memiliki leading one pada kolom terakhirnya, karena jika tidak variabel dalam sistem akan bebas, dan dapat mengambil sembarang nilai. Untuk melihat bahwa juga memiliki leading one pada kolom terakhir, kita menggunakan argumen yang sama, mulai dari persamaan .  Untuk meringkas, mulai dengan matriks ekuivalen baris dan dalam bentuk eselon baris tereduksi, dan mengasumsikan dengan kontradiksi bahwa , kita menyimpulkan bahwa (a) kolom pertama dari dan sama dan membentuk matriks dalam bentuk eselon baris tereduksi, dan (b) kolom terakhir dari dan memiliki leading ones. Karena dan dalam bentuk eselon baris tereduksi, dan karena kolom pertama dari dan sama, kita melihat bahwa leading ones pada kolom terakhir dari dan harus terjadi pada baris yang sama: yaitu, baris nol pertama dari . Mengikuti bahwa , sebuah kontradiksi.   "
},
{
  "id": "s_det",
  "level": "1",
  "url": "s_det.html",
  "type": "Section",
  "number": "2.5",
  "title": "Determinan",
  "body": " Determinan    Determinan adalah sebuah nilai skalar (bilangan real) yang dikaitkan dengan setiap matriks persegi dan . Definisi determinan yang diberikan di bawah ini jauh dari intuitif dan secara khusus, kita akan melihat bahwa , oleh karena itu penting untuk menyelidiki invertibilitas.    Definisi Determinan  Definisi determinan kita bersifat rekursif ; diberikan sebuah matriks  determinannya didefinisikan dalam bentuk determinan dari submatriks tertentu berdimensi . Ini memerlukan beberapa notasi untuk membantu diskusi kita.   Notasi Submatriks  submatriks    submatriks dari    Misalkan adalah matriks dengan . Diberikan , submatriks dari yang diperoleh dengan menghapus baris ke- dan kolom ke- dari dilambangkan .      Jangan menyamakan notasi submatriks dengan notasi entri matriks . Hal yang perlu diperhatikan bahwa submatriks dari diperoleh dengan menghapus baris ke- dan kolom ke- ;     Determinan  determinan    determinan dari    Misalkan . Determinan didefinisikan sebagai berikut:   Kasus dasar:  Ketika kita memiliki dan kita mendefinisikan .    Kasus rekursif:  Ketika kita mendefinisikan .        Kasus Kecil   Mari kita lihat rumus determinan untuk kasus . Anda mungkin ingat rumus untuk matriks dari ; kita akan membuat koneksi lebih eksplisit dalam .  Diberikan , kita memiliki . Rumus untuk kasus cukup sederhana untuk berfungsi sebagai kasus dasar kedua , memungkinkan kita mengakhiri proses rekursif menghitung matriks umum sekali kita sampai pada ekspresi yang melibatkan matriks .  Diberikan , kita memiliki .    Sifat rekursif dari definisi determinan membuat argumen induksi sangat berguna ketika membuktikan sifat-sifat determinan, sebagaimana diilustrasikan oleh teorema berikutnya.    Matriks Segitiga Atas ( Upper Triangular Matrix )  Matriks segitiga atas adalah matriks persegi di mana semua elemen di bawah diagonal utama bernilai nol.  Secara matematis, matriks disebut segitiga atas jika:   Contoh:     Matriks Segitiga Bawah ( Lower Triangular Matrix )  Matriks segitiga bawah adalah matriks persegi di mana semua elemen di atas diagonal utama bernilai nol.  Secara matematis, matriks disebut segitiga bawah jika:   Contoh:    Perbedaan Utama   Segitiga Atas: Nol di bawah diagonal ( untuk )  Segitiga Bawah: Nol di atas diagonal ( untuk )       Determinan Matriks Segitiga   Misalkan segitiga (atas, bawah, atau diagonal). Maka . Dengan kata lain, determinan matriks segitiga adalah produk dari entri diagonalnya.    Kita hanya memberikan pembuktian untuk matriks segitiga bawah; pembuktian dalam kasus segitiga atas hampir identik.  Untuk sembarang misalkan menyatakan proposisi: Determinan dari sembarang matriks segitiga bawah adalah produk dari entri diagonalnya . Kita membuktikan dengan induksi bahwa benar untuk semua .   Langkah dasar: tunjukkan benar  Dalam kasus ini , dan memang merupakan produk dari entri diagonal .    Langkah induksi: tunjukkan untuk semua  Misalkan adalah matriks segitiga bawah. Maka untuk semua , dan dengan demikian determinan dari diberikan oleh . Klaim: segitiga bawah. Memang, pertama perhatikan bahwa kita memiliki untuk semua ; dengan menghapus baris pertama dan kolom pertama kita secara efektif menaikkan setiap indeks sebesar satu. Karena segitiga bawah kita memiliki untuk semua , dan dengan demikian juga untuk semua , membuktikan klaim.  Terakhir, dengan mengasumsikan benar (hipotesis induksi) kita memiliki , sebagaimana diinginkan.      Determinan Matriks Identitas   Misalkan adalah matriks identitas . Maka .    Ini mengikuti langsung dari karena entri diagonal dari semuanya satu.      Ekspansi Baris dan Kolom   Kita akan memberikan beberapa contoh determinan berdimensi lebih tinggi, tetapi sebelumnya kita memperkenalkan beberapa teori yang memberikan pemahaman lebih tentang komputasi matrik determinan    Minor dan Ekspansi Baris\/Kolom  minor matriks  ekspansi baris\/kolom    minor ke- dari sebuah matriks    Diberikan matriks  , untuk sembarang pasangan  minor ke- dari didefinisikan sebagai .  Untuk sembarang ekspresi disebut ekspansi baris ke- dari .  Untuk sembarang , ekspresi disebut ekspansi kolom ke- dari .     Ekspansi Baris   Misalkan . Untuk sembarang kita memiliki . Dengan kata lain, kita dapat menghitung dengan mengekspansi sembarang baris dari .    Pembuktian dilakukan dengan induksi pada ukuran matriks.   Langkah dasar:  Untuk tidak ada yang perlu dibuktikan. Diberikan mengekspansi sepanjang sembarang baris menghasilkan , sebagaimana dapat diverifikasi dengan mudah.    Langkah induksi  Asumsikan klaim benar untuk sembarang matriks . Diberikan kita memiliki . Mengekspansi sepanjang baris ke- dari untuk sembarang , di sisi lain, kita mendapatkan . Untuk menunjukkan kedua ekspresi ini sama kita menggunakan hipotesis induksi untuk menghitung setiap dengan mengekspansi sepanjang baris ke- -nya: . Matriks adalah hasil dari pertama-tama menghapus baris 1 dan kolom dari , dan kemudian menghapus baris dan kolom dari matriks yang dihasilkan. Untuk menangani submatriks iteratif seperti ini, kita membuat beberapa observasi sederhana yang menghubungkan baris dan kolom dari dan dengan yang dari .   Baris ke- dari berkorespondensi dengan baris ke- dari , dan baris pertama dari berkorespondensi dengan baris pertama dari .    Jika , maka kolom ke- dari berkorespondensi dengan kolom ke- dari ; jika , maka kolom ke- dari berkorespondensi dengan kolom ke- dari .    Jika , maka kolom ke- dari berkorespondensi dengan kolom ke- dari ; jika , maka kolom ke- dari berkorespondensi dengan kolom ke- dari .   Dari observasi ini kita menurunkan tabel rumus berikut: . Kita sekarang mulai menguraikan : . Ini melengkapi langkah induksi, dan dengan demikian pembuktian selesai.        Determinan dan Transposisi   Misalkan adalah matriks . Maka .    Pembuktian dilakukan dengan induksi pada . Kasus dasar ( ) trivial karena untuk sembarang matriks  .  Untuk induksi kita mengasumsikan bahwa untuk semua kita memiliki untuk sembarang matriks . Misalkan adalah matriks . Kita memiliki . Ini melengkapi pembuktian dengan induksi. (Perhatikan bagaimana dalam kesamaan kedua dalam rantai di atas kita menghitung dalam suku ke- dari dengan mengekspansi sepanjang baris ke- dari . Observasi serupa berlaku untuk kesamaan terakhir.)     Ekspansi Kolom   Misalkan . Untuk sembarang kita memiliki . Dengan kata lain, kita dapat menghitung dengan mengekspansi sembarang baris dari .    Untuk sembarang , kita memiliki .      Hitung untuk .    Pertama kita menghitung dengan mengekspansi sepanjang baris kedua. Satu-satunya suku tak-nol dari ekspansi ini adalah yang terakhir, menghasilkan . Kita memiliki . Untuk menghitung determinannya kita mengekspansi sepanjang kolom ketiganya: . Kita menyimpulkan bahwa .     Matriks Tanda   Ketika mengekspansi baris atau kolom, kita perlu menandai di depan koefisien ke- . Sebuah matriks tanda adalah membantu Anda dalam hal ini. Ini mudah dihasilkan dengan memberi tanda di depan entri ke- selalu (karena ). Sebagai contoh, untuk kita memiliki matriks tanda berikut: .     Baris\/Kolom Nol, Penukaran Baris\/Kolom, Baris\/Kolom Identik   Misalkan adalah matriks .   Jika memiliki baris nol atau kolom nol, maka     Asumsikan . Misalkan adalah matriks yang diperoleh dengan menukar dua baris (atau dua kolom) dari . Maka .    Asumsikan . Jika memiliki dua baris identik atau dua kolom identik, maka .       Pernyataan pertama jelas karena menurut dan kita dapat menghitung determinan dengan mengekspansi sepanjang baris nol atau kolom nol yang dimaksud.  Pernyataan ketiga mengikuti dari yang kedua. Memang, jika memiliki dua baris atau kolom identik, maka matriks yang diperoleh dari dengan menukar baris (atau kolom) yang dimaksud adalah itu sendiri. Dengan demikian menurut pernyataan kedua, dan kita menyimpulkan bahwa .  Tinggal hanya menunjukkan pernyataan kedua. Kita hanya membuktikan pernyataan mengenai penukaran baris; pernyataan yang sesuai tentang kolom mengikuti dari . Pembuktian dilakukan dengan induksi.   Langkah dasar:  Misalkan . Maka , dan .    Langkah induksi  Kita mengasumsikan dengan induksi bahwa hasil berlaku untuk sembarang matriks , , dan menunjukkan hal yang sama benar untuk sembarang matriks .  Misalkan adalah matriks , dan misalkan adalah hasil dari menukar baris ke- dan ke- dari . Kita menghitung determinan dari dan dengan mengekspansi sepanjang baris ke- , dimana dan . Ini dimungkinkan karena .  Bergerak sepanjang baris ke- , perhatikan bahwa setiap submatriks adalah hasil dari menukar dua baris dari yang semula berkorespondensi dengan baris ke- dan ke- dari . Karena submatriks ini berdimensi , kita memiliki menurut induksi. Terakhir, karena baris ke- dari dan sama kita memiliki .     Sebagai konsekuensi lebih lanjut dari dan , kita dapat menurunkan rumus matriks adjoin .   Matriks Adjoin  matriks adjoin    adjoin dari matriks persegi    Misalkan adalah matriks . Matriks adjoin dari , dilambangkan , adalah matriks yang entri ke- -nya didefinisikan sebagai berikut: .      Berhati-hatilah dengan pembalikan urutan dalam definisi ini. Entri ke- dari sama dengan plus atau minus minor ke- dari . Mari kita lihat ini dalam aksi untuk beberapa matriks kecil.  Untuk kita memiliki .  Untuk kita memiliki .     Rumus Matriks Adjoin   Diberikan matriks  , kita memiliki . Sebagai konsekuensi, jika , maka invertibel dan .    Pertama perhatikan bahwa pernyataan kedua mengenai invertibilitas mengikuti langsung dari , karena dalam kasus ini menetapkan kita memiliki .  Dengan demikian cukup membuktikan . Untuk melakukannya, kita harus menunjukkan bahwa .   Kasus:  Dalam kasus ini kita memiliki . Argumen serupa menunjukkan bahwa , meskipun dalam kasus ini kita menggunakan ekspansi sepanjang kolom.    Kasus:  Ketika kita memiliki , dimana adalah matriks yang diperoleh dengan mengganti baris ke- dari dengan salinan baris ke- -nya. Karena memiliki dua baris identik mengimplikasikan , sebagaimana diinginkan. Sekali lagi, argumen serupa menggunakan ekspansi sepanjang kolom menunjukkan bahwa .       Gunakan rumus matriks adjoin untuk menghitung , dimana .    Pertama hitung dengan mengekspansi sepanjang baris ketiga: . Selanjutnya, hitung . Maka kita memiliki .      Sebelum Anda terlalu bersemangat tentang rumus matriks adjoin, Anda harus tahu bahwa seiring bertambah, prosedur ini menjadi jauh lebih mahal dalam terms jumlah operasi aritmetika yang terlibat dibandingkan algoritma invers kita berdasarkan eliminasi Gauss-Jordan. Anda mendapatkan gambaran tentang ini sudah dari contoh sebelumnya. Secara umum, algoritma invers Gauss-Jordan adalah cara yang tepat.       "
},
{
  "id": "d_minors",
  "level": "2",
  "url": "s_det.html#d_minors",
  "type": "Definition",
  "number": "2.5.1",
  "title": "Notasi Submatriks.",
  "body": " Notasi Submatriks  submatriks    submatriks dari    Misalkan adalah matriks dengan . Diberikan , submatriks dari yang diperoleh dengan menghapus baris ke- dan kolom ke- dari dilambangkan .   "
},
{
  "id": "rm_minors",
  "level": "2",
  "url": "s_det.html#rm_minors",
  "type": "Warning",
  "number": "2.5.2",
  "title": "",
  "body": "  Jangan menyamakan notasi submatriks dengan notasi entri matriks . Hal yang perlu diperhatikan bahwa submatriks dari diperoleh dengan menghapus baris ke- dan kolom ke- ;   "
},
{
  "id": "d_det",
  "level": "2",
  "url": "s_det.html#d_det",
  "type": "Definition",
  "number": "2.5.3",
  "title": "Determinan.",
  "body": " Determinan  determinan    determinan dari    Misalkan . Determinan didefinisikan sebagai berikut:   Kasus dasar:  Ketika kita memiliki dan kita mendefinisikan .    Kasus rekursif:  Ketika kita mendefinisikan .      "
},
{
  "id": "rm_det_small_cases",
  "level": "2",
  "url": "s_det.html#rm_det_small_cases",
  "type": "Remark",
  "number": "2.5.4",
  "title": "Kasus <span class=\"process-math\">\\(n\\)<\/span> Kecil.",
  "body": " Kasus Kecil   Mari kita lihat rumus determinan untuk kasus . Anda mungkin ingat rumus untuk matriks dari ; kita akan membuat koneksi lebih eksplisit dalam .  Diberikan , kita memiliki . Rumus untuk kasus cukup sederhana untuk berfungsi sebagai kasus dasar kedua , memungkinkan kita mengakhiri proses rekursif menghitung matriks umum sekali kita sampai pada ekspresi yang melibatkan matriks .  Diberikan , kita memiliki .   "
},
{
  "id": "segitiga",
  "level": "2",
  "url": "s_det.html#segitiga",
  "type": "Remark",
  "number": "2.5.5",
  "title": "",
  "body": "   Matriks Segitiga Atas ( Upper Triangular Matrix )  Matriks segitiga atas adalah matriks persegi di mana semua elemen di bawah diagonal utama bernilai nol.  Secara matematis, matriks disebut segitiga atas jika:   Contoh:     Matriks Segitiga Bawah ( Lower Triangular Matrix )  Matriks segitiga bawah adalah matriks persegi di mana semua elemen di atas diagonal utama bernilai nol.  Secara matematis, matriks disebut segitiga bawah jika:   Contoh:    Perbedaan Utama   Segitiga Atas: Nol di bawah diagonal ( untuk )  Segitiga Bawah: Nol di atas diagonal ( untuk )    "
},
{
  "id": "th_det_triangular",
  "level": "2",
  "url": "s_det.html#th_det_triangular",
  "type": "Theorem",
  "number": "2.5.6",
  "title": "Determinan Matriks Segitiga.",
  "body": " Determinan Matriks Segitiga   Misalkan segitiga (atas, bawah, atau diagonal). Maka . Dengan kata lain, determinan matriks segitiga adalah produk dari entri diagonalnya.    Kita hanya memberikan pembuktian untuk matriks segitiga bawah; pembuktian dalam kasus segitiga atas hampir identik.  Untuk sembarang misalkan menyatakan proposisi: Determinan dari sembarang matriks segitiga bawah adalah produk dari entri diagonalnya . Kita membuktikan dengan induksi bahwa benar untuk semua .   Langkah dasar: tunjukkan benar  Dalam kasus ini , dan memang merupakan produk dari entri diagonal .    Langkah induksi: tunjukkan untuk semua  Misalkan adalah matriks segitiga bawah. Maka untuk semua , dan dengan demikian determinan dari diberikan oleh . Klaim: segitiga bawah. Memang, pertama perhatikan bahwa kita memiliki untuk semua ; dengan menghapus baris pertama dan kolom pertama kita secara efektif menaikkan setiap indeks sebesar satu. Karena segitiga bawah kita memiliki untuk semua , dan dengan demikian juga untuk semua , membuktikan klaim.  Terakhir, dengan mengasumsikan benar (hipotesis induksi) kita memiliki , sebagaimana diinginkan.    "
},
{
  "id": "cor_det_identity",
  "level": "2",
  "url": "s_det.html#cor_det_identity",
  "type": "Corollary",
  "number": "2.5.7",
  "title": "Determinan Matriks Identitas.",
  "body": " Determinan Matriks Identitas   Misalkan adalah matriks identitas . Maka .    Ini mengikuti langsung dari karena entri diagonal dari semuanya satu.   "
},
{
  "id": "d_minors_expansions",
  "level": "2",
  "url": "s_det.html#d_minors_expansions",
  "type": "Definition",
  "number": "2.5.8",
  "title": "Minor dan Ekspansi  Baris\/Kolom.",
  "body": " Minor dan Ekspansi Baris\/Kolom  minor matriks  ekspansi baris\/kolom    minor ke- dari sebuah matriks    Diberikan matriks  , untuk sembarang pasangan  minor ke- dari didefinisikan sebagai .  Untuk sembarang ekspresi disebut ekspansi baris ke- dari .  Untuk sembarang , ekspresi disebut ekspansi kolom ke- dari .   "
},
{
  "id": "th_expansion_row",
  "level": "2",
  "url": "s_det.html#th_expansion_row",
  "type": "Theorem",
  "number": "2.5.9",
  "title": "Ekspansi  Baris.",
  "body": " Ekspansi Baris   Misalkan . Untuk sembarang kita memiliki . Dengan kata lain, kita dapat menghitung dengan mengekspansi sembarang baris dari .    Pembuktian dilakukan dengan induksi pada ukuran matriks.   Langkah dasar:  Untuk tidak ada yang perlu dibuktikan. Diberikan mengekspansi sepanjang sembarang baris menghasilkan , sebagaimana dapat diverifikasi dengan mudah.    Langkah induksi  Asumsikan klaim benar untuk sembarang matriks . Diberikan kita memiliki . Mengekspansi sepanjang baris ke- dari untuk sembarang , di sisi lain, kita mendapatkan . Untuk menunjukkan kedua ekspresi ini sama kita menggunakan hipotesis induksi untuk menghitung setiap dengan mengekspansi sepanjang baris ke- -nya: . Matriks adalah hasil dari pertama-tama menghapus baris 1 dan kolom dari , dan kemudian menghapus baris dan kolom dari matriks yang dihasilkan. Untuk menangani submatriks iteratif seperti ini, kita membuat beberapa observasi sederhana yang menghubungkan baris dan kolom dari dan dengan yang dari .   Baris ke- dari berkorespondensi dengan baris ke- dari , dan baris pertama dari berkorespondensi dengan baris pertama dari .    Jika , maka kolom ke- dari berkorespondensi dengan kolom ke- dari ; jika , maka kolom ke- dari berkorespondensi dengan kolom ke- dari .    Jika , maka kolom ke- dari berkorespondensi dengan kolom ke- dari ; jika , maka kolom ke- dari berkorespondensi dengan kolom ke- dari .   Dari observasi ini kita menurunkan tabel rumus berikut: . Kita sekarang mulai menguraikan : . Ini melengkapi langkah induksi, dan dengan demikian pembuktian selesai.    "
},
{
  "id": "th_det_transpose",
  "level": "2",
  "url": "s_det.html#th_det_transpose",
  "type": "Theorem",
  "number": "2.5.10",
  "title": "Determinan dan Transposisi.",
  "body": " Determinan dan Transposisi   Misalkan adalah matriks . Maka .    Pembuktian dilakukan dengan induksi pada . Kasus dasar ( ) trivial karena untuk sembarang matriks  .  Untuk induksi kita mengasumsikan bahwa untuk semua kita memiliki untuk sembarang matriks . Misalkan adalah matriks . Kita memiliki . Ini melengkapi pembuktian dengan induksi. (Perhatikan bagaimana dalam kesamaan kedua dalam rantai di atas kita menghitung dalam suku ke- dari dengan mengekspansi sepanjang baris ke- dari . Observasi serupa berlaku untuk kesamaan terakhir.)   "
},
{
  "id": "cor_expansion_columns",
  "level": "2",
  "url": "s_det.html#cor_expansion_columns",
  "type": "Corollary",
  "number": "2.5.11",
  "title": "Ekspansi Kolom.",
  "body": " Ekspansi Kolom   Misalkan . Untuk sembarang kita memiliki . Dengan kata lain, kita dapat menghitung dengan mengekspansi sembarang baris dari .    Untuk sembarang , kita memiliki .   "
},
{
  "id": "ss_expansion_rows_columns-8",
  "level": "2",
  "url": "s_det.html#ss_expansion_rows_columns-8",
  "type": "Example",
  "number": "2.5.12",
  "title": "",
  "body": "  Hitung untuk .    Pertama kita menghitung dengan mengekspansi sepanjang baris kedua. Satu-satunya suku tak-nol dari ekspansi ini adalah yang terakhir, menghasilkan . Kita memiliki . Untuk menghitung determinannya kita mengekspansi sepanjang kolom ketiganya: . Kita menyimpulkan bahwa .   "
},
{
  "id": "rm_sign_matrix",
  "level": "2",
  "url": "s_det.html#rm_sign_matrix",
  "type": "Remark",
  "number": "2.5.13",
  "title": "Matriks Tanda.",
  "body": " Matriks Tanda   Ketika mengekspansi baris atau kolom, kita perlu menandai di depan koefisien ke- . Sebuah matriks tanda adalah membantu Anda dalam hal ini. Ini mudah dihasilkan dengan memberi tanda di depan entri ke- selalu (karena ). Sebagai contoh, untuk kita memiliki matriks tanda berikut: .   "
},
{
  "id": "th_det_zero_repeated_row",
  "level": "2",
  "url": "s_det.html#th_det_zero_repeated_row",
  "type": "Theorem",
  "number": "2.5.14",
  "title": "Baris\/Kolom Nol, Penukaran Baris\/Kolom, Baris\/Kolom Identik.",
  "body": " Baris\/Kolom Nol, Penukaran Baris\/Kolom, Baris\/Kolom Identik   Misalkan adalah matriks .   Jika memiliki baris nol atau kolom nol, maka     Asumsikan . Misalkan adalah matriks yang diperoleh dengan menukar dua baris (atau dua kolom) dari . Maka .    Asumsikan . Jika memiliki dua baris identik atau dua kolom identik, maka .       Pernyataan pertama jelas karena menurut dan kita dapat menghitung determinan dengan mengekspansi sepanjang baris nol atau kolom nol yang dimaksud.  Pernyataan ketiga mengikuti dari yang kedua. Memang, jika memiliki dua baris atau kolom identik, maka matriks yang diperoleh dari dengan menukar baris (atau kolom) yang dimaksud adalah itu sendiri. Dengan demikian menurut pernyataan kedua, dan kita menyimpulkan bahwa .  Tinggal hanya menunjukkan pernyataan kedua. Kita hanya membuktikan pernyataan mengenai penukaran baris; pernyataan yang sesuai tentang kolom mengikuti dari . Pembuktian dilakukan dengan induksi.   Langkah dasar:  Misalkan . Maka , dan .    Langkah induksi  Kita mengasumsikan dengan induksi bahwa hasil berlaku untuk sembarang matriks , , dan menunjukkan hal yang sama benar untuk sembarang matriks .  Misalkan adalah matriks , dan misalkan adalah hasil dari menukar baris ke- dan ke- dari . Kita menghitung determinan dari dan dengan mengekspansi sepanjang baris ke- , dimana dan . Ini dimungkinkan karena .  Bergerak sepanjang baris ke- , perhatikan bahwa setiap submatriks adalah hasil dari menukar dua baris dari yang semula berkorespondensi dengan baris ke- dan ke- dari . Karena submatriks ini berdimensi , kita memiliki menurut induksi. Terakhir, karena baris ke- dari dan sama kita memiliki .    "
},
{
  "id": "d_adjoint",
  "level": "2",
  "url": "s_det.html#d_adjoint",
  "type": "Definition",
  "number": "2.5.15",
  "title": "Matriks Adjoin.",
  "body": " Matriks Adjoin  matriks adjoin    adjoin dari matriks persegi    Misalkan adalah matriks . Matriks adjoin dari , dilambangkan , adalah matriks yang entri ke- -nya didefinisikan sebagai berikut: .   "
},
{
  "id": "rm_adjoint",
  "level": "2",
  "url": "s_det.html#rm_adjoint",
  "type": "Remark",
  "number": "2.5.16",
  "title": "",
  "body": "  Berhati-hatilah dengan pembalikan urutan dalam definisi ini. Entri ke- dari sama dengan plus atau minus minor ke- dari . Mari kita lihat ini dalam aksi untuk beberapa matriks kecil.  Untuk kita memiliki .  Untuk kita memiliki .   "
},
{
  "id": "th_adjoint",
  "level": "2",
  "url": "s_det.html#th_adjoint",
  "type": "Theorem",
  "number": "2.5.17",
  "title": "Rumus Matriks Adjoin.",
  "body": " Rumus Matriks Adjoin   Diberikan matriks  , kita memiliki . Sebagai konsekuensi, jika , maka invertibel dan .    Pertama perhatikan bahwa pernyataan kedua mengenai invertibilitas mengikuti langsung dari , karena dalam kasus ini menetapkan kita memiliki .  Dengan demikian cukup membuktikan . Untuk melakukannya, kita harus menunjukkan bahwa .   Kasus:  Dalam kasus ini kita memiliki . Argumen serupa menunjukkan bahwa , meskipun dalam kasus ini kita menggunakan ekspansi sepanjang kolom.    Kasus:  Ketika kita memiliki , dimana adalah matriks yang diperoleh dengan mengganti baris ke- dari dengan salinan baris ke- -nya. Karena memiliki dua baris identik mengimplikasikan , sebagaimana diinginkan. Sekali lagi, argumen serupa menggunakan ekspansi sepanjang kolom menunjukkan bahwa .    "
},
{
  "id": "ss_expansion_rows_columns-15",
  "level": "2",
  "url": "s_det.html#ss_expansion_rows_columns-15",
  "type": "Example",
  "number": "2.5.18",
  "title": "",
  "body": "  Gunakan rumus matriks adjoin untuk menghitung , dimana .    Pertama hitung dengan mengekspansi sepanjang baris ketiga: . Selanjutnya, hitung . Maka kita memiliki .   "
},
{
  "id": "rm_adjoint_form",
  "level": "2",
  "url": "s_det.html#rm_adjoint_form",
  "type": "Remark",
  "number": "2.5.19",
  "title": "",
  "body": "  Sebelum Anda terlalu bersemangat tentang rumus matriks adjoin, Anda harus tahu bahwa seiring bertambah, prosedur ini menjadi jauh lebih mahal dalam terms jumlah operasi aritmetika yang terlibat dibandingkan algoritma invers kita berdasarkan eliminasi Gauss-Jordan. Anda mendapatkan gambaran tentang ini sudah dari contoh sebelumnya. Secara umum, algoritma invers Gauss-Jordan adalah cara yang tepat.   "
},
{
  "id": "app-sage-reference",
  "level": "1",
  "url": "app-sage-reference.html",
  "type": "Appendix",
  "number": "A",
  "title": "Referensi Sage",
  "body": " Referensi Sage  Kami telah memperkenalkan sejumlah perintah Sage di seluruh teks, dan yang paling penting dirangkum di sini dalam satu tempat.    Mengakses Sage  Selain sel-sel Sage yang disertakan di seluruh buku, terdapat sejumlah cara untuk mengakses Sage.  Terdapat sel Sage yang tersedia secara gratis di .  Anda dapat menyimpan pekerjaan Sage Anda dengan membuat akun di dan bekerja dalam lembar kerja Sage.  Terdapat halaman sel Sage di . Hasil yang diperoleh dari mengevaluasi satu sel tersedia di sel lain pada halaman tersebut. Namun, Anda akan kehilangan pekerjaan apa pun setelah halaman dimuat ulang.    Membuat matriks  Terdapat beberapa cara untuk membuat matriks. Misalnya, matriks dapat dibuat dengan salah satu dari dua cara berikut.    matrix(3, 4, [-2, 3, 0, 4, 1,-2, 1,-3, 0, 2, 3, 0])      matrix([ [-2, 3, 0, 4], [ 1,-2, 1,-3], [ 0, 2, 3, 0] ])      Harap diingat bahwa Sage dapat memperlakukan matriks yang setara secara matematis dengan cara berbeda tergantung pada cara pemasukannya. Misalnya, matriks matrix([ [1, 2], [2, 1] ]) memiliki entri bilangan bulat sementara matrix([ [1.0, 2.0], [2.0, 1.0] ]) memiliki entri bilangan titik-apung (floating point).  Jika Anda ingin entri diperlakukan sebagai bilangan titik-apung, Anda dapat menyertakan RDF dalam definisi matriks. matrix(RDF, [ [1, 2], [2, 1] ])     Matriks khusus  Matriks identitas dapat dibuat dengan identity_matrix(4) Matriks diagonal dapat dibuat dari daftar entri diagonalnya. Misalnya, diagonal_matrix([3,-4,2])     Bentuk eselon baris tereduksi  Bentuk eselon baris tereduksi dari suatu matriks dapat diperoleh menggunakan fungsi rref() . Misalnya, A = matrix([ [1,2], [2,1] ]) A.rref()     Vektor  Sebuah vektor didefinisikan dengan mendaftarkan komponen-komponennya. v = vector([3,-1,2])     Penjumlahan  Operator + melakukan penjumlahan vektor dan matriks. v = vector([2,1]) w = vector([-3,2]) print(v+w)  A = matrix([[2,-3],[1,2]]) B = matrix([[-4,1],[3,-1]]) print(A+B)     Perkalian  Operator * melakukan perkalian skalar dari vektor dan matriks. v = vector([2,1]) print(3*v) A = matrix([[2,1],[-3,2]]) print(3*A)   Demikian pula, * digunakan untuk perkalian matriks-vektor dan matriks-matriks. A = matrix([[2,-3],[1,2]]) v = vector([2,1]) print(A*v) B = matrix([[-4,1],[3,-1]]) print(A*B)     Operasi pada vektor     Panjang suatu vektor v ditemukan menggunakan v.norm() .    Hasil kali titik (dot product) dari dua vektor v dan w adalah v*w .       Operasi pada matriks    Transpos dari matriks A diperoleh menggunakan A.transpose() atau A.T .    Invers dari matriks A diperoleh menggunakan A.inverse() atau A^-1 .    Determinan dari A adalah A.det() .    Basis untuk ruang nol ditemukan dengan A.right_kernel() .    Ambil kolom dari A menggunakan, misalnya, A.column(0) , yang mengembalikan vektor yang merupakan kolom pertama dari A .    Perintah A.matrix_from_columns([0,1,2]) mengembalikan matriks yang dibentuk oleh tiga kolom pertama dari A .       Vektor eigen dan nilai eigen     Nilai eigen dari matriks A dapat ditemukan dengan A.eigenvalues() . Jumlah kemunculan suatu nilai eigen dalam daftar sama dengan multiplisitasnya.    Vektor eigen dari matriks yang memiliki entri rasional dapat ditemukan dengan A.eigenvectors_right() .    Jika dapat didiagonalisasi sebagai , maka D, P = A.right_eigenmatrix() menyediakan matriks D dan P .    Polinomial karakteristik dari A adalah A.charpoly('x') dan bentuk terfaktornya A.fcp('x') .       Faktorisasi matriks     Faktorisasi dari suatu matriks P, L, U = A.LU() menghasilkan matriks sehingga .    Dekomposisi nilai singular diperoleh dengan U, Sigma, V = A.SVD() Penting untuk dicatat bahwa matriks harus didefinisikan menggunakan RDF . Misalnya, A = matrix(RDF, 3,2,[1,0,-1,1,1,1]) .    Faktorisasi dari A adalah A.QR() asalkan A didefinisikan menggunakan RDF .        "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
},
{
  "id": "references-backmatter",
  "level": "1",
  "url": "references-backmatter.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " References      Thomas  Judson    Abstract Algebra: Theory and Applications         David C.  Lay    Subspaces and Echelon Forms  The College Mathematics Journal     24  1  57-62       Doe  John       Still Anonymous, But now Ibid       Doe  John       His Anonymous Life      Conrey  J. B.    Farmer  D. W.    Mean values of -functions and symmetry  Internat. Math. Res. Notices     17  883-908       D'Arcus  Bruce  false    Boundaries of Dissent: Protest and State Power in the Media Age  Routledge  New York     http:\/\/www.test01.com      Northwestern University    Systems of Linear Equations   http:\/\/linear-algebra.northwestern.pub\/s_systems.html  2026-02-21   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
