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
  "body": " Eliminasi Gaussian   Pada kita telah menguraikan prosedur untuk menyelesaikan sistem linear . Prosedur tersebut melibatkan penerapan serangkaian operasi baris pada untuk memperoleh sistem yang lebih sederhana .  Pada bagian ini kita akan melengkapi uraian tersebut. Secara khusus, kita akan   mendeskripsikan secara tepat apa yang kita maksud dengan sistem lebih sederhana ,    menyediakan algoritma (atau resep) yang menentukan secara tepat urutan operasi baris apa yang harus diterapkan untuk memperoleh sistem yang lebih sederhana ini,    menjelaskan cara menemukan semua solusi dari sistem yang lebih sederhana yang dihasilkan.     Sebelum kita memulai langkah-langkah ini, kita memperkenalkan sedikit notasi yang berguna. Seperti yang mungkin telah Anda perhatikan, ketika melakukan operasi baris pada sistem persamaan, kita pada dasarnya memperlakukan variabel yang tidak diketahui, serta simbol plus dan sama dengan, sebagai penampung; satu-satunya hal yang benar-benar berubah dalam suatu langkah adalah koefisien dalam persamaan. Matriks augmentasi yang terkait dengan sistem linear adalah cara formal untuk mengekstrak hanya informasi koefisien dari sistem linear. Tentu saja, agar resmi, kita harus terlebih dahulu mendefinisikan apa itu matriks.    Matriks   Sebuah matriks adalah susunan bilangan berbentuk persegi panjang.  Matriks dengan baris dan kolom dikatakan memiliki ukuran (atau dimensi ) .     Matriks augmentasi    Misalkan adalah sistem linear . Matriks augmentasi yang terkait dengan  adalah matriks .     Matriks bentuk eselon baris  Berikut adalah formulasi tepat kita untuk sistem linear sederhana ; yaitu sistem yang matriks augmentasinya berada dalam bentuk eselon baris , seperti yang dijelaskan di bawah.   Bentuk eselon baris    Baris nol dari suatu matriks adalah baris yang semua entrinya sama dengan nol; baris tak-nol adalah baris yang memuat setidaknya satu entri tak-nol.  Suatu matriks berada dalam bentuk eselon baris jika kondisi-kondisi berikut terpenuhi.  (i)  Pada sembarang baris tak-nol, entri tak-nol pertama (yaitu, paling kiri) sama dengan satu. Satu utama dari suatu matriks adalah entri semacam itu: yaitu, entri dari suatu baris yang sama dengan satu, dan juga merupakan entri tak-nol pertama dari baris tersebut.   (ii)  Semua baris nol dikelompokkan bersama di bagian bawah matriks.   (iii)  Diberikan dua baris tak-nol sembarang dalam matriks, satu utama dari baris yang lebih bawah terletak secara ketat di sebelah kanan satu utama dari baris di atasnya.     Suatu matriks berada dalam bentuk eselon baris tereduksi jika selain memenuhi kondisi (i)-(iii) juga memenuhi kondisi berikut.   (iv) Setiap kolom matriks yang memuat satu utama dari matriks pada salah satu barisnya hanya memiliki entri tak-nol tersebut. Dengan kata lain, jika suatu kolom memuat satu utama, maka itu adalah satu-satunya entri tak-nol dari kolom tersebut.    Sistem linear berada dalam bentuk eselon baris (masing-masing bentuk eselon baris tereduksi ) jika matriks augmentasinya berada dalam bentuk eselon baris (masing-masing bentuk eselon baris tereduksi).    Dalam praktik untuk memutuskan apakah suatu matriks berada dalam bentuk eselon baris (tereduksi), ikuti langkah-langkah berikut:   Pertama verifikasi apakah semua baris nol berada di bagian bawah.    Untuk setiap baris tak-nol, tentukan apakah entri tak-nol pertama adalah 1, dan beri kotak di sekelilingnya.    Pastikan kotak-kotak Anda membentuk pola tangga.    (Hanya untuk bentuk eselon baris tereduksi.) Tentukan apakah setiap kolom dengan kotak memiliki 0 di semua tempat lainnya.      Bentuk eselon baris versus bentuk eselon baris tereduksi   Untuk setiap matriks, tentukan (a) apakah matriks tersebut berada dalam bentuk eselon baris, dan (b) apakah matriks tersebut berada dalam bentuk eselon baris tereduksi.                  Di bawah ini Anda menemukan matriks dengan satu utama yang diberi kotak. Matriks ini gagal berada dalam bentuk eselon baris (dan karenanya juga bentuk eselon baris tereduksi) karena berbagai alasan: baris nol tidak semuanya dikelompokkan di bagian bawah; baris pertama tak-nol, tetapi tidak memiliki satu utama; satu utama dari baris keempat berada di sebelah kiri satu utama dari baris di atasnya.     Di bawah ini Anda menemukan matriks dengan satu utama yang diberi kotak. Matriks ini berada dalam bentuk eselon baris: baris nol (baris 4 dan 5) dikelompokkan di bagian bawah; setiap baris tak-nol memiliki satu utama (diberi kotak pada matriks di bawah); satu utama melangkah secara ketat ke kanan saat kita bergerak ke bawah baris. Matriks ini tidak berada dalam bentuk eselon baris tereduksi, karena kolom terakhir memuat satu utama pada baris ketiganya, dan entri tak-nol pada baris pertamanya.        Eliminasi Gaussian  Kita sekarang akan mendeskripsikan prosedur sistematis, yang disebut eliminasi Gaussian , yang memungkinkan kita mereduksi sistem linear yang diberikan menjadi sistem dalam bentuk eselon baris. Sesuai dengan pembahasan sebelumnya, kita akan mengidentifikasi sistem dengan matriks augmentasinya . Lebih lanjut, mereduksi sistem linear menggunakan operasi elementer pada persamaan sekarang diterjemahkan sebagai melakukan operasi baris elementer pada matriks. Dengan risiko redundansi, kita sekarang secara resmi menerjemahkan sejumlah konsep terdahulu kita mengenai reduksi sistem linear ke dalam konteks matriks.   Operasi baris elementer pada matriks  operasi baris elementer  operasi baris elementer perkalian skalar  operasi baris elementer pertukaran baris  operasi baris elementer penjumlahan baris  reduksi baris pada matriks  ekuivalensi baris pada matriks   Sebuah operasi baris elementer adalah salah satu dari tiga jenis operasi matriks berikut. Misalkan adalah matriks yang diberikan, dan nyatakan dengan baris ke- dari .    Perkalian skalar  Kalikan sebuah baris dengan bilangan tak-nol  : yaitu, ganti dengan , hasil perkalian semua entri baris dengan .    Pertukaran baris  Tukar dua baris dari .    Penjumlahan baris  Tambahkan kelipatan satu baris ke baris lain: yaitu, ganti dengan untuk suatu , , dan .    Tindakan mengubah matriks menggunakan operasi baris elementer disebut reduksi baris   Dua matriks ekuivalen baris jika yang satu dapat diperoleh dari yang lain dengan melakukan urutan hingga operasi baris elementer.     Notasi Notasi operasi elementer terdahulu kita dengan mudah ditransfer ke operasi baris pada matriks. Ekspresi masing-masing menyatakan operasi yang mengganti baris dalam dengan , menukar baris dan dalam , dan mengganti dalam dengan .  Akhirnya kita siap untuk mendefinisikan eliminasi Gaussian. Ini adalah prosedur, atau algoritma , yang menerima masukan matriks dan mereduksinya menjadi matriks dalam bentuk eselon baris.   Eliminasi Gaussian memiliki banyak kegunaan   Anda harus memandang eliminasi Gaussian sebagai sesuatu yang memiliki kehidupan independen dari perannya dalam menyelesaikan sistem persamaan linear. Pada hakikatnya, ini hanyalah prosedur tertentu yang dilakukan pada matriks. Seperti yang akan Anda lihat, eliminasi Gaussian adalah kuda kerja sejati aljabar linear; menyederhanakan sistem linear hanyalah salah satu dari banyak aplikasi bergunanya.     Eliminasi Gaussian  eliminasi Gaussian    Eliminasi Gaussian adalah algoritma yang dijelaskan di bawah. Algoritma ini menerima masukan matriks dan mengembalikan matriks yang ekuivalen baris dalam bentuk eselon baris.    Langkah 1  Temukan kolom tak-nol paling kiri dan lakukan pertukaran baris untuk memindahkan baris dengan entri tak-nol ini ke bagian atas matriks.    Langkah 2  Skala baris teratas yang baru untuk menghasilkan satu utama pada baris tersebut. Sebut baris baru ini .    Langkah 3  Untuk setiap baris di bawah , lakukan operasi baris berbentuk untuk mengganti semua entri di bawah satu utama dari dengan nol.    Langkah 4  Mulai lagi dengan Langkah 1 yang diterapkan pada matriks yang terdiri dari semua baris di bawah . Lanjutkan hingga matriks berada dalam bentuk eselon baris.       Contoh model  Gunakan contoh berikut sebagai model bagaimana melakukan dan memberi anotasi langkah-langkah dalam eliminasi Gaussian. Saat pertama kali mempelajari prosedur ini, pastikan untuk mengikutinya sesuai huruf . Secara khusus, sesuai dengan mandat yang dikeluarkan dalam , Anda hanya boleh melakukan satu operasi baris pada satu waktu, dan hanya dalam urutan yang ditentukan dalam Langkah 1-4 dari .   Matriks yang dihasilkan oleh eliminasi Gaussian dijamin berada dalam bentuk eselon baris, tetapi mungkin tidak berada dalam bentuk eselon baris tereduksi . Eliminasi Gauss-Jordan mendeskripsikan cara sistematis untuk melanjutkan reduksi ke keadaan yang bahkan lebih sederhana ini.    Eliminasi Gauss-Jordan    Eliminasi Gauss-Jordan adalah algoritma yang dijelaskan di bawah. Algoritma ini menerima masukan matriks dan mengembalikan matriks yang ekuivalen baris dalam bentuk eselon baris tereduksi.    Langkah 1-4  Terapkan eliminasi Gaussian untuk mengubah menjadi matriks dalam bentuk eselon baris.    Langkah 5  Temukan kolom paling kanan dari matriks yang memuat satu utama. Misalkan adalah baris yang memuat satu utama ini. Untuk setiap baris di atas , lakukan operasi baris berbentuk untuk mengganti semua entri di atas satu utama dengan nol.    Langkah 6  Mulai lagi dengan Langkah 5 yang diterapkan pada kolom berikutnya di sebelah kiri yang memuat satu utama. Lanjutkan hingga matriks berada dalam bentuk eselon baris tereduksi.      Melanjutkan contoh sebelumnya: .   Operasi Baris Elementer (Row Operations) di SageMath   Indeks baris dimulai dari (bukan ). Jadi baris pertama adalah baris ke- , baris kedua adalah baris ke- , dst.  Operasi ini mengubah matriks secara langsung (in place).    Tiga Operasi Dasar Baris   1. A.rescale_row(i, a)  Fungsi: Mengalikan baris ke- dengan skalar .   Contoh  A = matrix([[1, 2, 3], [4, 5, 6]]) A.rescale_row(1, 2) # Kalikan baris ke-1 dengan 2 # Hasil: A = [[1, 2, 3], [8, 10, 12]]   2. A.add_multiple_of_row(i, j, a)  Fungsi: Menambahkan (baris ke- ) ke baris ke- .  Rumus:    Contoh  A = matrix([[1, 2, 3], [4, 5, 6]]) A.add_multiple_of_row(1, 0, -4) # Tambahkan -4*(baris 0) ke baris 1 # Hasil: A = [[1, 2, 3], [0, -3, -6]]   3. A.swap_rows(i, j)  Fungsi: Menukar baris ke- dengan baris ke- .   Contoh  A = matrix([[1, 2, 3], [4, 5, 6]]) A.swap_rows(0, 1) # Tukar baris 0 dan 1 # Hasil: A = [[4, 5, 6], [1, 2, 3]]    Implementasi proses menggunakan Sage  matriks augmentasi  Sage memiliki metode matriks, .augment() , yang akan menggabungkan dua matriks, berdampingan asalkan keduanya memiliki jumlah baris yang sama. Metode yang sama akan memungkinkan Anda untuk mengaugmentasi matriks dengan vektor kolom, seperti yang dijelaskan dalam , asalkan jumlah entri dalam vektor sesuai dengan jumlah baris untuk matriks. Di sini kita mengulang konstruksi dalam . Kita sekarang akan memformat matriks kita sebagai input di beberapa baris, suatu praktik yang dapat Anda gunakan dalam lembar kerja Anda sendiri, atau tidak.    dan sebenarnya adalah teorema yang tersamar, dan kita meresmikannya dalam .   Eliminasi Gaussian  Pada sel Sage pertama di bawah ini, Anda menemukan implementasi rekursif eliminasi Gaussian di Sage yang mencakup komentar penjelasan. Evaluasi sel ini untuk memuat fungsi row_echelon_form . Sel kedua memungkinkan Anda menerapkan algoritma eliminasi Gaussian pada matriks pilihan Anda. Seperti yang dapat Anda lihat, fungsi show menyediakan versi latex yang bagus untuk keluaran.    Sage memiliki metode reduksi barisnya sendiri, rref , yang mengubah matriks menjadi bentuk eselon baris tereduksi . Mari kita bandingkan keluaran dari kedua algoritma ini.   Aktivitas berikut dapat berguna untuk mengimplementasikan eliminasi Gaussian dengan cara yang menampilkan semua langkah antara. Gunakan sel Sage kosong di bawah ini untuk bereksperimen.   Modifikasi kode row_echelon_form untuk membuat algoritma non-rekursif.    Tambahkan perintah show ke versi non-rekursif Anda dari row_echelon_form untuk menampilkan langkah-langkah dalam reduksi baris.        Bentuk matriks ekuivalen baris     Bentuk eselon baris ada  Sembarang matriks ekuivalen baris dengan matriks dalam bentuk eselon baris. Memang, eliminasi Gaussian mereduksi baris menjadi matriks dalam bentuk eselon baris.    Bentuk eselon baris tereduksi ada  Sembarang matriks ekuivalen baris dengan matriks dalam bentuk eselon baris tereduksi. Memang, eliminasi Gauss-Jordan mereduksi baris menjadi matriks dalam bentuk eselon baris tereduksi.    Bentuk eselon baris tereduksi adalah unik  Diberikan sembarang matriks , terdapat matriks yang unik dalam bentuk eselon baris tereduksi yang ekuivalen baris dengan .      Kita akan banyak menggunakan dua hasil pertama dari . Bukti pernyataan-pernyataan ini tidak sulit, tetapi tidak terlalu mencerahkan. Oleh karena itu kami menghilangkannya di sini, dan mengarahkan pembaca yang tertarik ke A First Course in Linear Algebra karya Robert Beezer ( Teorema REMEF ).  Pernyataan ketiga dari , bahwa setiap matriks ekuivalen baris dengan matriks dalam bentuk eselon baris tereduksi yang unik , memang memiliki bukti yang mencerahkan. Namun, kami akan menunda bukti ini hingga kami memiliki sedikit lebih banyak teori yang tersedia. (Lihat .) Sampai saat itu, kami akan dengan sadar tidak menggunakan hasil ini dalam mengembangkan teori lebih lanjut kami.   Bentuk eselon baris tidak unik   Tunjukkan bahwa matriks dapat ekuivalen baris dengan dua atau lebih matriks dalam bentuk eselon baris.    Ambil . Matriks ini direduksi menjadi menggunakan eliminasi Gaussian; dan direduksi lebih lanjut menjadi menggunakan eliminasi Gauss-Jordan. Dengan demikian kita melihat bahwa ekuivalen baris dengan dua matriks berbeda dalam bentuk eselon baris. (Menurut , matriks adalah satu-satunya matriks dalam bentuk eselon baris tereduksi yang ekuivalen baris dengan .)     "
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
  "body": " Bentuk eselon baris    Baris nol dari suatu matriks adalah baris yang semua entrinya sama dengan nol; baris tak-nol adalah baris yang memuat setidaknya satu entri tak-nol.  Suatu matriks berada dalam bentuk eselon baris jika kondisi-kondisi berikut terpenuhi.  (i)  Pada sembarang baris tak-nol, entri tak-nol pertama (yaitu, paling kiri) sama dengan satu. Satu utama dari suatu matriks adalah entri semacam itu: yaitu, entri dari suatu baris yang sama dengan satu, dan juga merupakan entri tak-nol pertama dari baris tersebut.   (ii)  Semua baris nol dikelompokkan bersama di bagian bawah matriks.   (iii)  Diberikan dua baris tak-nol sembarang dalam matriks, satu utama dari baris yang lebih bawah terletak secara ketat di sebelah kanan satu utama dari baris di atasnya.     Suatu matriks berada dalam bentuk eselon baris tereduksi jika selain memenuhi kondisi (i)-(iii) juga memenuhi kondisi berikut.   (iv) Setiap kolom matriks yang memuat satu utama dari matriks pada salah satu barisnya hanya memiliki entri tak-nol tersebut. Dengan kata lain, jika suatu kolom memuat satu utama, maka itu adalah satu-satunya entri tak-nol dari kolom tersebut.    Sistem linear berada dalam bentuk eselon baris (masing-masing bentuk eselon baris tereduksi ) jika matriks augmentasinya berada dalam bentuk eselon baris (masing-masing bentuk eselon baris tereduksi).   "
},
{
  "id": "ss_ge_row_echelon-5",
  "level": "2",
  "url": "s_systemsb.html#ss_ge_row_echelon-5",
  "type": "Example",
  "number": "1.3.4",
  "title": "Bentuk eselon baris versus bentuk eselon baris tereduksi.",
  "body": " Bentuk eselon baris versus bentuk eselon baris tereduksi   Untuk setiap matriks, tentukan (a) apakah matriks tersebut berada dalam bentuk eselon baris, dan (b) apakah matriks tersebut berada dalam bentuk eselon baris tereduksi.                  Di bawah ini Anda menemukan matriks dengan satu utama yang diberi kotak. Matriks ini gagal berada dalam bentuk eselon baris (dan karenanya juga bentuk eselon baris tereduksi) karena berbagai alasan: baris nol tidak semuanya dikelompokkan di bagian bawah; baris pertama tak-nol, tetapi tidak memiliki satu utama; satu utama dari baris keempat berada di sebelah kiri satu utama dari baris di atasnya.     Di bawah ini Anda menemukan matriks dengan satu utama yang diberi kotak. Matriks ini berada dalam bentuk eselon baris: baris nol (baris 4 dan 5) dikelompokkan di bagian bawah; setiap baris tak-nol memiliki satu utama (diberi kotak pada matriks di bawah); satu utama melangkah secara ketat ke kanan saat kita bergerak ke bawah baris. Matriks ini tidak berada dalam bentuk eselon baris tereduksi, karena kolom terakhir memuat satu utama pada baris ketiganya, dan entri tak-nol pada baris pertamanya.     "
},
{
  "id": "d_rowops",
  "level": "2",
  "url": "s_systemsb.html#d_rowops",
  "type": "Definition",
  "number": "1.3.5",
  "title": "Operasi baris elementer pada matriks.",
  "body": " Operasi baris elementer pada matriks  operasi baris elementer  operasi baris elementer perkalian skalar  operasi baris elementer pertukaran baris  operasi baris elementer penjumlahan baris  reduksi baris pada matriks  ekuivalensi baris pada matriks   Sebuah operasi baris elementer adalah salah satu dari tiga jenis operasi matriks berikut. Misalkan adalah matriks yang diberikan, dan nyatakan dengan baris ke- dari .    Perkalian skalar  Kalikan sebuah baris dengan bilangan tak-nol  : yaitu, ganti dengan , hasil perkalian semua entri baris dengan .    Pertukaran baris  Tukar dua baris dari .    Penjumlahan baris  Tambahkan kelipatan satu baris ke baris lain: yaitu, ganti dengan untuk suatu , , dan .    Tindakan mengubah matriks menggunakan operasi baris elementer disebut reduksi baris   Dua matriks ekuivalen baris jika yang satu dapat diperoleh dari yang lain dengan melakukan urutan hingga operasi baris elementer.   "
},
{
  "id": "s_ge_notation",
  "level": "2",
  "url": "s_systemsb.html#s_ge_notation",
  "type": "Remark",
  "number": "1.3.6",
  "title": "Notasi.",
  "body": " Notasi Notasi operasi elementer terdahulu kita dengan mudah ditransfer ke operasi baris pada matriks. Ekspresi masing-masing menyatakan operasi yang mengganti baris dalam dengan , menukar baris dan dalam , dan mengganti dalam dengan . "
},
{
  "id": "pr_GE-has-many-uses",
  "level": "2",
  "url": "s_systemsb.html#pr_GE-has-many-uses",
  "type": "Principle",
  "number": "1.3.7",
  "title": "Eliminasi Gaussian memiliki banyak kegunaan.",
  "body": " Eliminasi Gaussian memiliki banyak kegunaan   Anda harus memandang eliminasi Gaussian sebagai sesuatu yang memiliki kehidupan independen dari perannya dalam menyelesaikan sistem persamaan linear. Pada hakikatnya, ini hanyalah prosedur tertentu yang dilakukan pada matriks. Seperti yang akan Anda lihat, eliminasi Gaussian adalah kuda kerja sejati aljabar linear; menyederhanakan sistem linear hanyalah salah satu dari banyak aplikasi bergunanya.   "
},
{
  "id": "d_GE",
  "level": "2",
  "url": "s_systemsb.html#d_GE",
  "type": "Definition",
  "number": "1.3.8",
  "title": "Eliminasi Gaussian.",
  "body": " Eliminasi Gaussian  eliminasi Gaussian    Eliminasi Gaussian adalah algoritma yang dijelaskan di bawah. Algoritma ini menerima masukan matriks dan mengembalikan matriks yang ekuivalen baris dalam bentuk eselon baris.    Langkah 1  Temukan kolom tak-nol paling kiri dan lakukan pertukaran baris untuk memindahkan baris dengan entri tak-nol ini ke bagian atas matriks.    Langkah 2  Skala baris teratas yang baru untuk menghasilkan satu utama pada baris tersebut. Sebut baris baru ini .    Langkah 3  Untuk setiap baris di bawah , lakukan operasi baris berbentuk untuk mengganti semua entri di bawah satu utama dari dengan nol.    Langkah 4  Mulai lagi dengan Langkah 1 yang diterapkan pada matriks yang terdiri dari semua baris di bawah . Lanjutkan hingga matriks berada dalam bentuk eselon baris.     "
},
{
  "id": "d_GaussJordan",
  "level": "2",
  "url": "s_systemsb.html#d_GaussJordan",
  "type": "Definition",
  "number": "1.3.9",
  "title": "Eliminasi Gauss-Jordan.",
  "body": " Eliminasi Gauss-Jordan    Eliminasi Gauss-Jordan adalah algoritma yang dijelaskan di bawah. Algoritma ini menerima masukan matriks dan mengembalikan matriks yang ekuivalen baris dalam bentuk eselon baris tereduksi.    Langkah 1-4  Terapkan eliminasi Gaussian untuk mengubah menjadi matriks dalam bentuk eselon baris.    Langkah 5  Temukan kolom paling kanan dari matriks yang memuat satu utama. Misalkan adalah baris yang memuat satu utama ini. Untuk setiap baris di atas , lakukan operasi baris berbentuk untuk mengganti semua entri di atas satu utama dengan nol.    Langkah 6  Mulai lagi dengan Langkah 5 yang diterapkan pada kolom berikutnya di sebelah kiri yang memuat satu utama. Lanjutkan hingga matriks berada dalam bentuk eselon baris tereduksi.     "
},
{
  "id": "ss_gaussian_elimination-11-5",
  "level": "2",
  "url": "s_systemsb.html#ss_gaussian_elimination-11-5",
  "type": "Example",
  "number": "1.3.10",
  "title": "Contoh.",
  "body": " Contoh  A = matrix([[1, 2, 3], [4, 5, 6]]) A.rescale_row(1, 2) # Kalikan baris ke-1 dengan 2 # Hasil: A = [[1, 2, 3], [8, 10, 12]]  "
},
{
  "id": "ss_gaussian_elimination-11-8",
  "level": "2",
  "url": "s_systemsb.html#ss_gaussian_elimination-11-8",
  "type": "Example",
  "number": "1.3.11",
  "title": "Contoh.",
  "body": " Contoh  A = matrix([[1, 2, 3], [4, 5, 6]]) A.add_multiple_of_row(1, 0, -4) # Tambahkan -4*(baris 0) ke baris 1 # Hasil: A = [[1, 2, 3], [0, -3, -6]]  "
},
{
  "id": "ss_gaussian_elimination-11-10",
  "level": "2",
  "url": "s_systemsb.html#ss_gaussian_elimination-11-10",
  "type": "Example",
  "number": "1.3.12",
  "title": "Contoh.",
  "body": " Contoh  A = matrix([[1, 2, 3], [4, 5, 6]]) A.swap_rows(0, 1) # Tukar baris 0 dan 1 # Hasil: A = [[4, 5, 6], [1, 2, 3]]  "
},
{
  "id": "sage-GE",
  "level": "2",
  "url": "s_systemsb.html#sage-GE",
  "type": "Computation",
  "number": "1.3.13",
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
  "number": "1.3.14",
  "title": "Bentuk matriks ekuivalen baris.",
  "body": " Bentuk matriks ekuivalen baris     Bentuk eselon baris ada  Sembarang matriks ekuivalen baris dengan matriks dalam bentuk eselon baris. Memang, eliminasi Gaussian mereduksi baris menjadi matriks dalam bentuk eselon baris.    Bentuk eselon baris tereduksi ada  Sembarang matriks ekuivalen baris dengan matriks dalam bentuk eselon baris tereduksi. Memang, eliminasi Gauss-Jordan mereduksi baris menjadi matriks dalam bentuk eselon baris tereduksi.    Bentuk eselon baris tereduksi adalah unik  Diberikan sembarang matriks , terdapat matriks yang unik dalam bentuk eselon baris tereduksi yang ekuivalen baris dengan .     "
},
{
  "id": "s_ge_ex_REFnotunique",
  "level": "2",
  "url": "s_systemsb.html#s_ge_ex_REFnotunique",
  "type": "Example",
  "number": "1.3.15",
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
  "body": " Aritmetika Matriks   Matriks memainkan peran pendukung kecil dalam diskusi kita tentang sistem linear di . Dalam bab ini kita membawanya ke panggung utama dan memberikan treatment lengkap sebagai objek matematika independen tersendiri.  Seperti entitas matematika lainnya yang layak, matriks dapat digunakan dalam banyak sekali cara. Dengan demikian, penting untuk memungkinkan matriks melampaui awal yang sederhana dalam kursus ini sebagai sistem persamaan linear yang direbus. Kami mencatat observasi ini sebagai prinsip lain.   Mantra Matriks   Sebuah matriks adalah sebuah matriks adalah sebuah matriks.  Tidak setiap matriks harus dianggap sebagai matriks augmented yang terkait dengan sistem linear.      Dasar-dasar  Kita mulai dengan beberapa definisi elementer tentang matriks, kesamaan matriks, dan jenis-jenis khusus matriks. Seperti yang diperjelas oleh definisi berikutnya, matriks hanyalah urutan bilangan yang diatur dengan cara yang sangat khusus.   Matriks  matriks   Sebuah matriks (real) adalah array persegi panjang dari bilangan real . Bilangan yang terletak pada baris ke- dan kolom ke- dari disebut -entri (atau -entri ) dari .  Sebuah matriks dengan baris dan kolom dikatakan memiliki ukuran (atau dimensi ) .  Kami biasanya akan menggunakan huruf kapital dekat awal alfabet (  , ) untuk menunjukkan matriks.    Matriks yang ditampilkan dalam mahal baik dalam ruang yang dibutuhkan untuk menampilkannya, maupun waktu yang dibutuhkan untuk menulis atau mengetiknya. Oleh karena itu kami memperkenalkan dua bentuk notasi yang agak saling melengkapi untuk membantu mendeskripsikan matriks.   Notasi Matriks    Matriks yang entri -nya adalah     Entri ke- dari matriks       Notasi pembangun matriks  matriks notasi pembangun matriks  Notasi menunjukkan matriks yang entri -nya (baris ke- , kolom ke- ) adalah . Ketika tidak ada bahaya kebingungan, notasi ini sering disingkat menjadi .    Notasi entri matriks  matriks notasi entri matriks  Diberikan sebuah matriks , notasi menunjukkan entri ke- dari .   Jadi jika , maka untuk semua dan .     Notasi pembangun matriks sering digunakan hanya untuk memberikan nama pada entri-entri dari suatu matriks arbitrer. Namun, ini juga dapat digunakan untuk mendeskripsikan matriks yang entri -nya diberikan oleh aturan atau formula tertentu.  Sebagai contoh, misalkan , dimana . Ini adalah matriks yang entri -nya adalah . Jadi . Dalam contoh ini kita memiliki dan untuk .   Dalam bahasa sehari-hari, notions kesamaan dianggap jelas dengan sendirinya. Dua hal adalah sama jika mereka identik. Apa lagi yang perlu dikatakan? Dalam matematika, setiap kali kita memperkenalkan jenis objek matematika baru (mis. himpunan, fungsi, -tupel, dll.) kita perlu menjelaskan secara persis apa yang kita maksud agar dua hal dianggap sama. Kita lakukan sekarang dengan matriks.   Kesamaan Matriks   Misalkan dan adalah matriks dengan dimensi dan , masing-masing. Dua matriks tersebut sama jika    dan ;     untuk semua dan .     Dengan kata lain, kita memiliki jika dan hanya jika dan memiliki bentuk yang sama, dan setiap entri dari sama dengan entri yang bersesuaian dari .     Kesamaan Matriks   Matriks tidak sama satu sama lain, meskipun mereka memiliki entri yang sama yang muncul kira-kira dalam urutan yang sama. Dalam kasus ini kesamaan tidak berlaku karena dan memiliki bentuk yang berbeda: adalah , dan adalah .  Matriks dan memiliki dimensi yang sama, tetapi tidak sama karena .     Matriks persegi, vektor baris, vektor kolom, matriks nol  matriks persegi  matriks vektor baris  matriks vektor kolom  matriks diagonal dari matriks persegi  matriks matriks nol    matriks nol    Sebuah matriks adalah persegi jika dimensinya adalah . Diagonal dari sebuah matriks persegi terdiri dari entri-entri untuk .  Sebuah matriks  disebut vektor baris . Entri ke- dari sebuah vektor baris dilambangkan   Sebuah matriks  , disebut vektor kolom . Entri ke- dari sebuah vektor kolom dilambangkan .   matriks nol , dilambangkan , adalah matriks dengan dimensi tersebut, yang semua entrinya adalah nol: yaitu, untuk semua dan .  Ketika dimensi sebenarnya tidak signifikan, kita sering akan menghapus subskrip dan menulis cukup untuk sebuah matriks nol dengan dimensi yang sesuai.     Matriks sebagai kumpulan kolom\/baris  Misalkan adalah sebuah matriks . Kita akan sering memikirkan sebagai kumpulan kolom, dalam hal ini kita menulis , dimana adalah vektor kolom yang terdiri dari entri-entri dari kolom ke- dari : , . Demikian pula, ketika kita memikirkan sebagai kumpulan baris, kita menulis , dimana adalah vektor baris yang terdiri dari entri-entri dari baris ke- dari : , . Garis vertikal dan horizontal digunakan untuk menekankan bahwa adalah vektor kolom dan adalah vektor baris.    Entri, Baris, dan Kolom Matriks  Sintaks Sage untuk mengakses entri spesifik dari sebuah matriks mirip dalam semangat dengan notasi entri matriks kami. Namun, seperti semua hal Python, kita selalu menghitung dari 0. Jadi jika A ditugaskan ke sebuah matriks di Sage, A[i,j] adalah entri ke- -nya.   Subset entri matriks yang ditentukan diperoleh melalui metode slicing : misalnya, A[a:b, c:d] mengembalikan kumpulan entri dengan dan , disusun sebagai matriks.   Membiarkan sisi kiri atau kanan dari : kosong dalam notasi ini menghapus batas restriksi indeks yang bersesuaian (kiri atau kanan). Jadi A[2, :] mengembalikan baris ketiga dari , dan A[1:, 3] mengembalikan bagian dari kolom keempat dari dimulai dengan entri keduanya.   Sebagai alternatif, kita dapat memperoleh daftar semua baris atau kolom dari menggunakan metode rows() dan columns() .   Gunakan sel kosong di bawah ini untuk mencoba beberapa perintah ini.      Penjumlahan, pengurangan dan perkalian skalar  Kita sekarang menguraikan berbagai operasi aljabar yang akan kita gunakan untuk menggabungkan dan mengubah matriks; kita merujuk pada penggunaan operasi ini secara longgar sebagai aritmetika matriks . Beberapa operasi ini menyerupai operasi familiar dari aritmetika real dalam hal notasi dan definisi mereka. Jangan tertipu menjadi puas! Ini adalah operasi baru yang didefinisikan untuk kelas objek matematika baru, dan harus diperlakukan dengan hati-hati. Secara khusus, perhatikan dengan seksama (a) tepat jenis objek matematika apa yang berfungsi sebagai input untuk setiap operasi (bahan operasi), dan (b) jenis objek matematika apa yang dikeluarkan.   Penjumlahan dan pengurangan matriks  penjumlahan matriks  pengurangan matriks    Penjumlahan Matriks adalah operasi yang didefinisikan sebagai berikut: diberikan dua matriks  dan , kita mendefinisikan jumlah mereka menjadi matriks . Dengan kata lain adalah matriks yang memenuhi untuk semua dan .   Pengurangan Matriks adalah operasi yang didefinisikan sebagai berikut: diberikan dua matriks  dan , kita mendefinisikan selisih mereka menjadi matriks . Dengan kata lain adalah matriks yang memenuhi untuk semua dan .     Perhatikan bahwa penjumlahan\/pengurangan matriks tidak didefinisikan untuk sembarang pasangan matriks. Bahan dari penjumlahan matriks (atau pengurangan) adalah dua matriks dengan dimensi yang sama ; dan outputnya adalah matriks ketiga dengan dimensi umum ini.    Perkalian skalar matriks  perkalian skalar matriks   Diberikan sembarang matriks dan sembarang konstanta , kita mendefinisikan . Dengan kata lain, adalah matriks yang diperoleh dengan \"menskalakan\" setiap entri dari dengan konstanta .  Kita menyebut sebuah kelipatan skalar dari . Selanjutnya, untuk membantu membedakan antara matriks dan bilangan real, kita akan merujuk elemen-elemen dari sebagai skalar .     Sedangkan penjumlahan dan pengurangan matriks sangat menyerupai operasi yang bersesuaian yang melibatkan bilangan real, tidak ada analog aritmetika real yang jelas untuk perkalian skalar matriks. Secara khusus, perhatikan bagaimana perkalian skalar matriks adalah sejenis operasi hibrida yang menggabungkan objek matematika dari dua sifat yang sangat berbeda: sebuah bilangan real (atau skalar) di satu sisi, dan sebuah matriks di sisi lain.   Kita menyebut hasil dari penerapan urutan penjumlahan matriks dan perkalian skalar sebagai kombinasi linear dari matriks .   Kombinasi linear dari matriks  kombinasi linear dari matriks   Diberikan matriks dengan dimensi yang sama, dan skalar , ekspresi disebut kombinasi linear dari matriks . Skalar disebut koefisien dari kombinasi linear tersebut.     Kombinasi linear matriks   Misalkan dan . Hitung .     .     Menyatakan matriks sebagai kombinasi linear   Tunjukkan bahwa dapat dinyatakan sebagai kombinasi linear dari matriks .    Kita harus menyelesaikan persamaan matriks (atau vektor baris) untuk skalar . Menghitung kombinasi linear di sebelah kiri menghasilkan persamaan matriks . Menggunakan definisi kesamaan matriks ( ), kita mendapatkan sistem persamaan . Menggunakan eliminasi Gaussian kita menemukan bahwa ada solusi unik untuk sistem ini: yaitu, . Kita menyimpulkan bahwa .     Misalkan adalah matriks . Sebuah argumen induksi mudah pada menunjukkan bahwa untuk sembarang skalar kita memiliki untuk semua , . (Lihat . )     Perkalian matriks  Jadi bagaimana kita mendefinisikan produk dari dua matriks? Melihat operasi sebelumnya, Anda mungkin telah menebak bahwa kita harus mendefinisikan produk dari dua matriks dengan mengambil produk dari entri-entri yang bersesuaian. Tidak demikian!   Perkalian matriks  perkalian matriks    Perkalian Matriks adalah operasi yang didefinisikan sebagai berikut: diberikan sebuah matriks  dan sebuah matriks  , kita mendefinisikan produk mereka menjadi matriks  yang entri -nya diberikan oleh formula untuk semua dan .     Memvisualisasikan perkalian matriks  Dalam , entri -th dihitung dengan bergerak melintasi baris ke- dari dan menuruni kolom ke- dari .       Ukuran dan perkalian matriks  Perhatikan bagaimana, seperti penjumlahan, perkalian matriks tidak didefinisikan untuk sembarang pasangan matriks: harus ada kesepakatan tertentu dalam dimensi mereka.  Secara lebih rinci, agar produk dari dan terdefinisi, kita membutuhkan . Dengan kata lain kita membutuhkan dimensi \"dalam\" dari dan untuk menjadi sama: . Jika kondisi ini terpenuhi, dimensi dari matriks hasil ditentukan oleh dimensi \"luar\" dari dan . Secara skematis, Anda dapat memikirkan dimensi dalam sebagai \"dibatalkan\":     Perkalian matriks  Pertimbangkan matriks . Karena dimensi \"dalam\" dari dan setuju, kita dapat membentuk matriks produk , yang memiliki dimensi . Misalkan untuk semua . Menggunakan , kita hitung . Kita menyimpulkan bahwa .   Formula untuk entri -th dari sebuah produk matriks dapat dideskripsikan secara ringkas sebagai produk dot dari baris ke- dari dengan kolom ke- dari . Anda mungkin sudah bertemu produk dot dalam kasus khusus dari - dan -tupel; definisi tersebut menggeneralisasi dengan mudah ke -tupel untuk sembarang bilangan bulat positif . Kita akan memiliki banyak lagi untuk dikatakan tentang produk dot dan operasi terkait di . Untuk saat ini kita akan memberikan definisi resmi sehingga kita dapat mendeskripsikan perkalian matriks dengan nyaman dalam hal produk dot.   Produk Dot  produk dot    produk dot    Diberikan -tupel dan , produk dot mereka, dilambangkan , didefinisikan sebagai .     Produk dot dan perkalian matriks   Misalkan adalah sebuah matriks , dan misalkan adalah sebuah matriks . Untuk semua , misalkan adalah baris ke- dari ; dan untuk semua misalkan adalah kolom ke- dari . Untuk semua , kita memiliki , dimana dan diperlakukan sebagai -tupel. Dengan kata lain, entri -th dari adalah produk dot dari baris ke- dari dan kolom ke- dari .    Tetapkan sebuah pasangan dengan dan . Dipertimbangkan sebagai -tupel, baris ke- dari dan kolom ke- dari diberikan sebagai . Kita memiliki , seperti yang diklaim.     Perkalian matriks via produk dot  Pertimbangkan matriks . Dua baris dari (dalam bentuk tupel) adalah . Dua kolom dari (dalam bentuk tupel) adalah . Menggunakan deskripsi produk dot dari perkalian matriks, kita hitung .   Definisi dari sebuah produk matriks tidak diragukan lagi lebih rumit daripada yang Anda harapkan, dan tampaknya datang sepenuhnya tiba-tiba. Semua ini akan masuk akal sekali kita mulai memikirkan matriks sebagai mendefinisikan fungsi-fungsi tertentu . Formula kita untuk entri-entri dari dipilih secara presisi sehingga matriks baru ini bersesuaian dengan komposisi dari fungsi-fungsi dan : sehingga . (Lihat .) Di bawah interpretasi ini, restriksi berat pada dimensi matriks bahan memastikan bahwa dua fungsi dan dapat dikomposisikan.   Aritmetika Matriks  Kita menggunakan + dan * untuk penjumlahan dan perkalian matriks.   Sebagai bukti fleksibilitas Sage, simbol yang sama * juga digunakan untuk perkalian skalar.   Edit sel di bawah ini untuk melatih operasi ini.      Metode alternatif perkalian  Selain definisi perkalian matriks yang diberikan, kita akan membuat penggunaan berat dari dua cara further untuk menghitung produk matriks, disebut metode kolom dan baris dari perkalian matriks.   Metode kolom dari perkalian matriks  perkalian matriks metode kolom   Misalkan dan . Metode kolom dari perkalian matriks menghitung menggunakan dua langkah di bawah ini.   Langkah 1  Misalkan adalah kolom ke- dari , dianggap sebagai vektor kolom. Maka .    Langkah 2  Misalkan adalah kolom ke- dari , dianggap sebagai vektor kolom. Diberikan sembarang vektor kolom kita memiliki .       Kita membuktikan kesamaan di kedua langkah secara terpisah.   Bukti Langkah 1  Kita harus menunjukkan , dimana . Pertama kita menunjukkan dan memiliki ukuran yang sama. Berdasarkan definisi perkalian matriks, adalah . Berdasarkan konstruksi memiliki kolom dan kolom ke- -nya adalah . Karena dan memiliki ukuran dan , masing-masing, memiliki ukuran . Jadi setiap dari kolom dari adalah vektor kolom . Mengikuti bahwa adalah , seperti yang diinginkan.  Selanjutnya kita menunjukkan bahwa untuk semua , . Karena entri -th dari adalah entri ke- dari kolom ke- dari , kita memiliki .    Bukti Langkah 2  Kita harus menunjukkan bahwa , dimana . Argumen biasa menunjukkan bahwa kedua dan adalah vektor kolom . Tinggal hanya untuk menunjukkan bahwa entri ke-  dari kolom sama dengan entri ke-  dari untuk semua . Untuk sembarang demikian kita memiliki .       berjumlah pada proses dua langkah untuk menghitung sembarang produk matriks .  Pernyataan pertama (Langkah 1) memberitahu kita bahwa kolom ke- dari matriks dapat diperoleh dengan menghitung produk dari dengan kolom ke- dari .  Pernyataan kedua (Langkah 2) memberitahu kita bahwa setiap produk dapat sendiri dihitung sebagai kombinasi linear tertentu dari kolom-kolom dari dengan koefisien yang diambil dari .  Catatan serupa berlaku untuk menghitung produk matriks menggunakan metode baris, seperti yang dideskripsikan di bawah ini dalam .    Metode baris dari perkalian matriks  perkalian matriks metode baris   Misalkan dan . Metode baris dari perkalian matriks menghitung menggunakan dua langkah di bawah ini.   Langkah 1  Misalkan adalah baris ke- dari . Maka .    Langkah 2  Misalkan adalah baris ke- dari . Diberikan sembarang vektor baris kita memiliki .       Buktinya sangat mirip dengan itu dari dan dibiarkan kepada pembaca.     Metode kolom dan baris   Misalkan dan   Hitung menggunakan (a) definisi perkalian matriks, (b) metode kolom, (c) metode baris.       Menggunakan definisi, kita lihat dengan mudah bahwa     Misalkan adalah kolom-kolom dari , dan misalkan adalah kolom-kolom dari . Kita memiliki     Sekarang misalkan adalah baris-baris dari , dan misalkan adalah baris-baris dari . Kita memiliki         Metode kolom dan baris  Mari kita verifikasi validitas metode kolom dan baris menggunakan Sage dalam beberapa contoh spesifik. Di bawah ini kita menghasilkan matriks bilangan bulat acak dan dengan dimensi dan , masing-masing, dan menghitung produk mereka .   Mari kita periksa bahwa kolom ke- dari sama dengan produk dari dengan kolom ke- dari .   Sebagai alternatif, kita dapat mengonfirmasi kesamaan ini secara visual menggunakan tampilan dari di sel pertama di atas. Perhatikan bahwa hasil dari A*colsB[i] ditampilkan oleh Sage sebagai tupel, meskipun secara teknis bagi kita ini adalah vektor kolom.   Selanjutnya, mari kita verifikasi bahwa hasil dari mengalikan dan kolom ke- dari adalah kombinasi linear yang bersesuaian dari kolom-kolom dari yang diberikan oleh koefisien dari kolom ini.   Sekarang gunakan sel Sage di bawah ini untuk mendemonstrasikan validitas metode baris untuk produk . Cukup modifikasi kode dalam dua sel di atas untuk mencerminkan metode baris, sebagai lawan dari metode kolom.      Contoh Video perkalian matriks   Video: tiga metode perkalian matriks  Video: tiga metode perkalian matriks       Transpos dari sebuah matriks  Kita mengakhiri bagian ini dengan satu operasi terakhir, transposisi matriks . Kita tidak akan banyak menggunakan operasi ini sampai nanti, tetapi ini adalah tempat yang baik seperti halnya untuk memperkenalkannya.   Transposisi matriks  matrix transposition  transpose   Diberikan sebuah matriks  transposnya adalah matriks yang entri -nya adalah entri -th dari . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .     Diberikan sebuah matriks kita dapat memberikan deskripsi berbasis kolom- atau baris dari sebagai berikut:    adalah matriks yang baris ke- -nya adalah kolom ke- dari .     adalah matriks yang kolom ke- -nya adalah baris ke- dari .       Transpos   Misalkan ; maka .  Misalkan , maka .     Transposisi matriks  Transposisi matriks diimplementasikan dalam Sage sebagai metode transpose() . Dalam sel di bawah ini kita (a) memilih bilangan bulat acak , (b) memilih sebuah matriks acak  dengan entri bilangan bulat, dan (c) menghitung transpos dari .   Seperti biasa, bereksperimen dengan sel Sage di bawah ini.      "
},
{
  "id": "princ_matrix_mantra",
  "level": "2",
  "url": "s_matrix.html#princ_matrix_mantra",
  "type": "Principle",
  "number": "2.1.1",
  "title": "Mantra Matriks.",
  "body": " Mantra Matriks   Sebuah matriks adalah sebuah matriks adalah sebuah matriks.  Tidak setiap matriks harus dianggap sebagai matriks augmented yang terkait dengan sistem linear.   "
},
{
  "id": "d_matrix",
  "level": "2",
  "url": "s_matrix.html#d_matrix",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Matriks.",
  "body": " Matriks  matriks   Sebuah matriks (real) adalah array persegi panjang dari bilangan real . Bilangan yang terletak pada baris ke- dan kolom ke- dari disebut -entri (atau -entri ) dari .  Sebuah matriks dengan baris dan kolom dikatakan memiliki ukuran (atau dimensi ) .  Kami biasanya akan menggunakan huruf kapital dekat awal alfabet (  , ) untuk menunjukkan matriks.   "
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
  "body": " Notasi pembangun matriks sering digunakan hanya untuk memberikan nama pada entri-entri dari suatu matriks arbitrer. Namun, ini juga dapat digunakan untuk mendeskripsikan matriks yang entri -nya diberikan oleh aturan atau formula tertentu.  Sebagai contoh, misalkan , dimana . Ini adalah matriks yang entri -nya adalah . Jadi . Dalam contoh ini kita memiliki dan untuk .  "
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
  "body": " Matriks persegi, vektor baris, vektor kolom, matriks nol  matriks persegi  matriks vektor baris  matriks vektor kolom  matriks diagonal dari matriks persegi  matriks matriks nol    matriks nol    Sebuah matriks adalah persegi jika dimensinya adalah . Diagonal dari sebuah matriks persegi terdiri dari entri-entri untuk .  Sebuah matriks  disebut vektor baris . Entri ke- dari sebuah vektor baris dilambangkan   Sebuah matriks  , disebut vektor kolom . Entri ke- dari sebuah vektor kolom dilambangkan .   matriks nol , dilambangkan , adalah matriks dengan dimensi tersebut, yang semua entrinya adalah nol: yaitu, untuk semua dan .  Ketika dimensi sebenarnya tidak signifikan, kita sering akan menghapus subskrip dan menulis cukup untuk sebuah matriks nol dengan dimensi yang sesuai.   "
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
  "body": " Entri, Baris, dan Kolom Matriks  Sintaks Sage untuk mengakses entri spesifik dari sebuah matriks mirip dalam semangat dengan notasi entri matriks kami. Namun, seperti semua hal Python, kita selalu menghitung dari 0. Jadi jika A ditugaskan ke sebuah matriks di Sage, A[i,j] adalah entri ke- -nya.   Subset entri matriks yang ditentukan diperoleh melalui metode slicing : misalnya, A[a:b, c:d] mengembalikan kumpulan entri dengan dan , disusun sebagai matriks.   Membiarkan sisi kiri atau kanan dari : kosong dalam notasi ini menghapus batas restriksi indeks yang bersesuaian (kiri atau kanan). Jadi A[2, :] mengembalikan baris ketiga dari , dan A[1:, 3] mengembalikan bagian dari kolom keempat dari dimulai dengan entri keduanya.   Sebagai alternatif, kita dapat memperoleh daftar semua baris atau kolom dari menggunakan metode rows() dan columns() .   Gunakan sel kosong di bawah ini untuk mencoba beberapa perintah ini.   "
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
  "body": " Perhatikan bahwa penjumlahan\/pengurangan matriks tidak didefinisikan untuk sembarang pasangan matriks. Bahan dari penjumlahan matriks (atau pengurangan) adalah dua matriks dengan dimensi yang sama ; dan outputnya adalah matriks ketiga dengan dimensi umum ini.  "
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
  "id": "ss_matrix_arithmetic-6",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_arithmetic-6",
  "type": "Remark",
  "number": "2.1.12",
  "title": "",
  "body": " Sedangkan penjumlahan dan pengurangan matriks sangat menyerupai operasi yang bersesuaian yang melibatkan bilangan real, tidak ada analog aritmetika real yang jelas untuk perkalian skalar matriks. Secara khusus, perhatikan bagaimana perkalian skalar matriks adalah sejenis operasi hibrida yang menggabungkan objek matematika dari dua sifat yang sangat berbeda: sebuah bilangan real (atau skalar) di satu sisi, dan sebuah matriks di sisi lain.  "
},
{
  "id": "d_matrix_lin_comb",
  "level": "2",
  "url": "s_matrix.html#d_matrix_lin_comb",
  "type": "Definition",
  "number": "2.1.13",
  "title": "Kombinasi linear dari matriks.",
  "body": " Kombinasi linear dari matriks  kombinasi linear dari matriks   Diberikan matriks dengan dimensi yang sama, dan skalar , ekspresi disebut kombinasi linear dari matriks . Skalar disebut koefisien dari kombinasi linear tersebut.   "
},
{
  "id": "eg_matrix_lin_comb",
  "level": "2",
  "url": "s_matrix.html#eg_matrix_lin_comb",
  "type": "Example",
  "number": "2.1.14",
  "title": "Kombinasi linear matriks.",
  "body": " Kombinasi linear matriks   Misalkan dan . Hitung .     .   "
},
{
  "id": "eg_matrix_lin_comb_solve",
  "level": "2",
  "url": "s_matrix.html#eg_matrix_lin_comb_solve",
  "type": "Example",
  "number": "2.1.15",
  "title": "Menyatakan matriks sebagai kombinasi linear.",
  "body": " Menyatakan matriks sebagai kombinasi linear   Tunjukkan bahwa dapat dinyatakan sebagai kombinasi linear dari matriks .    Kita harus menyelesaikan persamaan matriks (atau vektor baris) untuk skalar . Menghitung kombinasi linear di sebelah kiri menghasilkan persamaan matriks . Menggunakan definisi kesamaan matriks ( ), kita mendapatkan sistem persamaan . Menggunakan eliminasi Gaussian kita menemukan bahwa ada solusi unik untuk sistem ini: yaitu, . Kita menyimpulkan bahwa .   "
},
{
  "id": "rm_entry_lin_comb",
  "level": "2",
  "url": "s_matrix.html#rm_entry_lin_comb",
  "type": "Remark",
  "number": "2.1.16",
  "title": "",
  "body": " Misalkan adalah matriks . Sebuah argumen induksi mudah pada menunjukkan bahwa untuk sembarang skalar kita memiliki untuk semua , . (Lihat . )  "
},
{
  "id": "d_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#d_matrix_mult",
  "type": "Definition",
  "number": "2.1.17",
  "title": "Perkalian matriks.",
  "body": " Perkalian matriks  perkalian matriks    Perkalian Matriks adalah operasi yang didefinisikan sebagai berikut: diberikan sebuah matriks  dan sebuah matriks  , kita mendefinisikan produk mereka menjadi matriks  yang entri -nya diberikan oleh formula untuk semua dan .   "
},
{
  "id": "fig_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#fig_matrix_mult",
  "type": "Figure",
  "number": "2.1.18",
  "title": "Memvisualisasikan perkalian matriks",
  "body": " Memvisualisasikan perkalian matriks  Dalam , entri -th dihitung dengan bergerak melintasi baris ke- dari dan menuruni kolom ke- dari .     "
},
{
  "id": "ss_matrix_mult-5",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-5",
  "type": "Remark",
  "number": "2.1.19",
  "title": "Ukuran dan perkalian matriks.",
  "body": " Ukuran dan perkalian matriks  Perhatikan bagaimana, seperti penjumlahan, perkalian matriks tidak didefinisikan untuk sembarang pasangan matriks: harus ada kesepakatan tertentu dalam dimensi mereka.  Secara lebih rinci, agar produk dari dan terdefinisi, kita membutuhkan . Dengan kata lain kita membutuhkan dimensi \"dalam\" dari dan untuk menjadi sama: . Jika kondisi ini terpenuhi, dimensi dari matriks hasil ditentukan oleh dimensi \"luar\" dari dan . Secara skematis, Anda dapat memikirkan dimensi dalam sebagai \"dibatalkan\":   "
},
{
  "id": "eg_matrix_mult",
  "level": "2",
  "url": "s_matrix.html#eg_matrix_mult",
  "type": "Example",
  "number": "2.1.20",
  "title": "Perkalian matriks.",
  "body": " Perkalian matriks  Pertimbangkan matriks . Karena dimensi \"dalam\" dari dan setuju, kita dapat membentuk matriks produk , yang memiliki dimensi . Misalkan untuk semua . Menggunakan , kita hitung . Kita menyimpulkan bahwa .  "
},
{
  "id": "d_dot_product",
  "level": "2",
  "url": "s_matrix.html#d_dot_product",
  "type": "Definition",
  "number": "2.1.21",
  "title": "Produk Dot.",
  "body": " Produk Dot  produk dot    produk dot    Diberikan -tupel dan , produk dot mereka, dilambangkan , didefinisikan sebagai .   "
},
{
  "id": "th_matrix_mult_dot_product",
  "level": "2",
  "url": "s_matrix.html#th_matrix_mult_dot_product",
  "type": "Theorem",
  "number": "2.1.22",
  "title": "Produk dot dan perkalian matriks.",
  "body": " Produk dot dan perkalian matriks   Misalkan adalah sebuah matriks , dan misalkan adalah sebuah matriks . Untuk semua , misalkan adalah baris ke- dari ; dan untuk semua misalkan adalah kolom ke- dari . Untuk semua , kita memiliki , dimana dan diperlakukan sebagai -tupel. Dengan kata lain, entri -th dari adalah produk dot dari baris ke- dari dan kolom ke- dari .    Tetapkan sebuah pasangan dengan dan . Dipertimbangkan sebagai -tupel, baris ke- dari dan kolom ke- dari diberikan sebagai . Kita memiliki , seperti yang diklaim.   "
},
{
  "id": "eg_matrix_mult_dot_prod",
  "level": "2",
  "url": "s_matrix.html#eg_matrix_mult_dot_prod",
  "type": "Example",
  "number": "2.1.23",
  "title": "Perkalian matriks via produk dot.",
  "body": " Perkalian matriks via produk dot  Pertimbangkan matriks . Dua baris dari (dalam bentuk tupel) adalah . Dua kolom dari (dalam bentuk tupel) adalah . Menggunakan deskripsi produk dot dari perkalian matriks, kita hitung .  "
},
{
  "id": "ss_matrix_mult-12",
  "level": "2",
  "url": "s_matrix.html#ss_matrix_mult-12",
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
  "number": "2.1.24",
  "title": "Metode kolom dari perkalian matriks.",
  "body": " Metode kolom dari perkalian matriks  perkalian matriks metode kolom   Misalkan dan . Metode kolom dari perkalian matriks menghitung menggunakan dua langkah di bawah ini.   Langkah 1  Misalkan adalah kolom ke- dari , dianggap sebagai vektor kolom. Maka .    Langkah 2  Misalkan adalah kolom ke- dari , dianggap sebagai vektor kolom. Diberikan sembarang vektor kolom kita memiliki .       Kita membuktikan kesamaan di kedua langkah secara terpisah.   Bukti Langkah 1  Kita harus menunjukkan , dimana . Pertama kita menunjukkan dan memiliki ukuran yang sama. Berdasarkan definisi perkalian matriks, adalah . Berdasarkan konstruksi memiliki kolom dan kolom ke- -nya adalah . Karena dan memiliki ukuran dan , masing-masing, memiliki ukuran . Jadi setiap dari kolom dari adalah vektor kolom . Mengikuti bahwa adalah , seperti yang diinginkan.  Selanjutnya kita menunjukkan bahwa untuk semua , . Karena entri -th dari adalah entri ke- dari kolom ke- dari , kita memiliki .    Bukti Langkah 2  Kita harus menunjukkan bahwa , dimana . Argumen biasa menunjukkan bahwa kedua dan adalah vektor kolom . Tinggal hanya untuk menunjukkan bahwa entri ke-  dari kolom sama dengan entri ke-  dari untuk semua . Untuk sembarang demikian kita memiliki .    "
},
{
  "id": "s_column_row_method-4",
  "level": "2",
  "url": "s_matrix.html#s_column_row_method-4",
  "type": "Remark",
  "number": "2.1.25",
  "title": "",
  "body": "  berjumlah pada proses dua langkah untuk menghitung sembarang produk matriks .  Pernyataan pertama (Langkah 1) memberitahu kita bahwa kolom ke- dari matriks dapat diperoleh dengan menghitung produk dari dengan kolom ke- dari .  Pernyataan kedua (Langkah 2) memberitahu kita bahwa setiap produk dapat sendiri dihitung sebagai kombinasi linear tertentu dari kolom-kolom dari dengan koefisien yang diambil dari .  Catatan serupa berlaku untuk menghitung produk matriks menggunakan metode baris, seperti yang dideskripsikan di bawah ini dalam .  "
},
{
  "id": "th_row_method",
  "level": "2",
  "url": "s_matrix.html#th_row_method",
  "type": "Theorem",
  "number": "2.1.26",
  "title": "Metode baris dari perkalian matriks.",
  "body": " Metode baris dari perkalian matriks  perkalian matriks metode baris   Misalkan dan . Metode baris dari perkalian matriks menghitung menggunakan dua langkah di bawah ini.   Langkah 1  Misalkan adalah baris ke- dari . Maka .    Langkah 2  Misalkan adalah baris ke- dari . Diberikan sembarang vektor baris kita memiliki .       Buktinya sangat mirip dengan itu dari dan dibiarkan kepada pembaca.   "
},
{
  "id": "s_matrix_ex_product",
  "level": "2",
  "url": "s_matrix.html#s_matrix_ex_product",
  "type": "Example",
  "number": "2.1.27",
  "title": "Metode kolom dan baris.",
  "body": " Metode kolom dan baris   Misalkan dan   Hitung menggunakan (a) definisi perkalian matriks, (b) metode kolom, (c) metode baris.       Menggunakan definisi, kita lihat dengan mudah bahwa     Misalkan adalah kolom-kolom dari , dan misalkan adalah kolom-kolom dari . Kita memiliki     Sekarang misalkan adalah baris-baris dari , dan misalkan adalah baris-baris dari . Kita memiliki       "
},
{
  "id": "s_column_row_method-7",
  "level": "2",
  "url": "s_matrix.html#s_column_row_method-7",
  "type": "Project",
  "number": "2.1.3",
  "title": "Metode kolom dan baris.",
  "body": " Metode kolom dan baris  Mari kita verifikasi validitas metode kolom dan baris menggunakan Sage dalam beberapa contoh spesifik. Di bawah ini kita menghasilkan matriks bilangan bulat acak dan dengan dimensi dan , masing-masing, dan menghitung produk mereka .   Mari kita periksa bahwa kolom ke- dari sama dengan produk dari dengan kolom ke- dari .   Sebagai alternatif, kita dapat mengonfirmasi kesamaan ini secara visual menggunakan tampilan dari di sel pertama di atas. Perhatikan bahwa hasil dari A*colsB[i] ditampilkan oleh Sage sebagai tupel, meskipun secara teknis bagi kita ini adalah vektor kolom.   Selanjutnya, mari kita verifikasi bahwa hasil dari mengalikan dan kolom ke- dari adalah kombinasi linear yang bersesuaian dari kolom-kolom dari yang diberikan oleh koefisien dari kolom ini.   Sekarang gunakan sel Sage di bawah ini untuk mendemonstrasikan validitas metode baris untuk produk . Cukup modifikasi kode dalam dua sel di atas untuk mencerminkan metode baris, sebagai lawan dari metode kolom.    "
},
{
  "id": "fig_vid_matrix_mult_methods",
  "level": "2",
  "url": "s_matrix.html#fig_vid_matrix_mult_methods",
  "type": "Figure",
  "number": "2.1.28",
  "title": "Video: tiga metode perkalian matriks",
  "body": " Video: tiga metode perkalian matriks  Video: tiga metode perkalian matriks   "
},
{
  "id": "d_transpose",
  "level": "2",
  "url": "s_matrix.html#d_transpose",
  "type": "Definition",
  "number": "2.1.29",
  "title": "Transposisi matriks.",
  "body": " Transposisi matriks  matrix transposition  transpose   Diberikan sebuah matriks  transposnya adalah matriks yang entri -nya adalah entri -th dari . Dengan kata lain, adalah matriks yang memenuhi untuk semua dan .   "
},
{
  "id": "s_matrix-7-4",
  "level": "2",
  "url": "s_matrix.html#s_matrix-7-4",
  "type": "Remark",
  "number": "2.1.30",
  "title": "",
  "body": " Diberikan sebuah matriks kita dapat memberikan deskripsi berbasis kolom- atau baris dari sebagai berikut:    adalah matriks yang baris ke- -nya adalah kolom ke- dari .     adalah matriks yang kolom ke- -nya adalah baris ke- dari .     "
},
{
  "id": "eg_transpose",
  "level": "2",
  "url": "s_matrix.html#eg_transpose",
  "type": "Example",
  "number": "2.1.31",
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
