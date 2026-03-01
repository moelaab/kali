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
  "id": "s_algebraic",
  "level": "1",
  "url": "s_algebraic.html",
  "type": "Section",
  "number": "2.2",
  "title": "Aljabar Matriks",
  "body": " Aljabar Matriks   Bagian terakhir ditujukan untuk apa yang dapat disebut aritmetika matriks. Kita mempelajari operasi dasar penjumlahan, perkalian, penskalaan, dan transposisi matriks. Dalam bagian ini kita membahas aljabar matriks. Kita akan menyelidiki sifat-sifat yang dimiliki (dan tidak dimiliki) oleh operasi matriks kita, dan akan menunjukkan bagaimana menggunakan operasi ini untuk menyelesaikan persamaan matriks.  Saat Anda mempelajari aljabar matriks, selalu ingat teman lama Anda, aljabar bilangan real. Sebagian besar kedua sistem aljabar ini sangat mirip satu sama lain, seperti yang diperjelas oleh di bawah ini. Namun, ada dua poin krusial di mana keduanya berbeda (lihat ): dua sifat penting aljabar bilangan real yang tidak berlaku untuk matriks. Konsekuensi dari dua penyimpangan sederhana ini sangat jauh jangkauannya dan memberikan kekayaan yang menarik pada aljabar matriks dibandingkan dengan aljabar bilangan real.    Sifat-sifat Aritmetika Matriks   Sifat-sifat berikut berlaku untuk semua matriks dan skalar yang membuat ekspresi yang diberikan masuk akal.   Hukum komutatif penjumlahan       Hukum asosiatif penjumlahan       Hukum asosiatif perkalian       Hukum distributif kiri       Hukum distributif kanan       Hukum distributif penskalaan       Hukum distributif penskalaan lainnya       Hukum asosiatif penskalaan       Hukum komutatif penskalaan   .       Bagaimana seseorang sebenarnya membuktikan salah satu sifat ini? Semua ini adalah kesamaan matriks berbentuk , sehingga menurut definisi kesamaan matriks kita harus menunjukkan (1) bahwa matriks dan memiliki dimensi yang sama, dan (2) bahwa untuk semua . Bukti di bawah ini mengilustrasikan teknik ini untuk hukum asosiatif perkalian dari .   Bukti (iii)  Kita hanya membuktikan hukum asosiatif perkalian . Misalkan , , . Untuk menunjukkan , kita harus menunjukkan (1) bahwa dan memiliki dimensi yang sama, dan (2) bahwa untuk semua yang mungkin.  (1) Pengamatan biasa tentang dimensi dalam dan luar menunjukkan bahwa baik maupun memiliki dimensi .  (2) Diberikan sembarang dengan dan , kita memiliki:   Ini membuktikan bahwa semua entri dari kedua matriks adalah sama, dan dengan demikian .   Seperti aljabar bilangan real, kita dapat mengidentifikasi beberapa matriks khusus yang bertindak sebagai identitas penjumlahan dan identitas perkalian ; dan setiap matriks memiliki invers penjumlahan . Apa yang kita maksud di sini diuraikan secara rinci dalam .   Invers Penjumlahan Matriks  invers penjumlahan dari matriks  matriks invers penjumlahan    Invers penjumlahan dari    Diberikan sebuah matriks  , invers penjumlahan -nya didefinisikan sebagai .     Matriks Identitas  matriks identitas  matriks matriks identitas    matriks invers     Matriks identitas adalah matriks persegi  dengan angka satu sepanjang diagonal dan nol di tempat lainnya. Dengan kata lain, untuk semua dan , kita memiliki . Ketika ukuran dari matriks identitas tidak penting, kita sering akan menotasikannya cukup sebagai .     Identitas Penjumlahan, Invers Penjumlahan, dan Identitas Perkalian     Identitas penjumlahan  Matriks nol  adalah identitas penjumlahan untuk matriks dalam pengertian berikut: untuk sembarang matriks  kita memiliki .    Invers penjumlahan  Untuk sembarang matriks  kita memiliki .    Identitas perkalian  Matriks identitas adalah identitas perkalian untuk matriks dalam pengertian berikut: untuk sembarang matriks  kita memiliki .       Dibiarkan sebagai latihan.    Pencoretan Aditif Matriks   Diberikan matriks  , dan , kita memiliki jika dan hanya jika . Menggunakan notasi logika:     Sesederhana klaim ini mungkin tampak, ingatlah bahwa kita berurusan dengan sistem aljabar yang sama sekali baru di sini. Kita akan membuktikan kedua implikasi dari pernyataan jika dan hanya jika secara terpisah.   Bukti:  Kita membuktikan ini melalui rantai implikasi: .    Bukti:  Arah ini jelas: jika dan adalah matriks yang sama, maka mereka tetap sama ketika kita menambahkan ke masing-masing.      Kepentingan aljabar dari adalah bahwa kita dapat melakukan pencoretan aditif dalam persamaan matriks sama seperti yang kita lakukan dalam aljabar bilangan real. Sebagai contoh, kita dapat menyelesaikan persamaan matriks untuk sebagai berikut:  .   Meskipun kita dapat melakukan pencoretan aditif dalam aljabar matriks, kita tidak selalu dapat melakukan pencoretan perkalian . Sebagai contoh, pertimbangkan matriks . Periksa sendiri bahwa , namun . Dengan kata lain, kita tidak selalu dapat mencoret  dari persamaan matriks .   Contoh dalam peringatan kita di atas hanyalah satu contoh dari kegagalan umum prinsip pencoretan perkalian dalam aljabar matriks. Ini pada gilirannya merupakan konsekuensi dari teorema berikut, yang mengidentifikasi dua tempat krusial di mana aljabar matriks berbeda secara signifikan dari aljabar bilangan real.   Penyimpangan Aljabar Matriks      Perkalian matriks tidak komutatif  Untuk dua matriks  dan , kita tidak selalu memiliki .    Produk matriks tak-nol dapat sama dengan nol  Jika produk dari dua matriks adalah matriks nol, kita tidak dapat menyimpulkan bahwa salah satu matriks adalah matriks nol. Dalam notasi logika: .       Ini adalah tempat yang baik untuk menunjukkan bahwa untuk membuktikan suatu identitas tidak berlaku, cukup memberikan satu contoh penyangkal untuk efek tersebut. Kita lakukan demikian untuk setiap identitas yang gagal dari secara bergantian. Tidak ada signifikansi pada contoh penyangkal tertentu yang dipilih di sini, dan memang ada tak terhingga banyaknya contoh penyangkal yang dapat dipilih dalam kedua kasus.   Kita memiliki dan dengan demikian .    Perhatikan bahwa . Ini adalah contoh dari dua matriks tak-nol yang produknya adalah matriks nol.     Konsekuensi penting dari penyimpangan adalah bahwa aljabar matriks tidak menikmati sifat pencoretan perkalian .   Kegagalan Pencoretan Perkalian     Misalkan matriks memenuhi dan . Kita tidak dapat menyimpulkan bahwa . Dalam notasi logika:     Misalkan matriks memenuhi dan . Kita tidak dapat menyimpulkan bahwa . Dalam notasi logika:        Sekali lagi, kita hanya perlu memberikan contoh penyangkal eksplisit untuk setiap pernyataan.    Misalkan , , . Verifikasi sendiri bahwa . Dengan demikian , tetapi jelas .    Misalkan , , . Kita memiliki . Dengan demikian , tetapi .      Perhatikan baik-baik penyimpangan penting aljabar matriks ini. Dihadapkan pada persamaan bilangan real berbentuk , kita memiliki dorongan yang tertanam kuat untuk menyatakan bahwa atau . (Jika kita ceroboh kita mungkin melupakan kemungkinan pertama itu.) Manuver yang sesuai untuk persamaan matriks sama sekali tidak tersedia bagi kita, kecuali kita mengetahui sesuatu lebih lanjut tentang .   Kita mengakhiri penjelajahan kita ke dalam aljabar matriks dengan beberapa sifat yang mengartikulasikan bagaimana transposisi matriks berinteraksi dengan penjumlahan matriks, perkalian, dan perkalian skalar.   Sifat-sifat Transposisi Matriks  Sifat-sifat berikut berlaku untuk semua matriks dan skalar yang membuat ekspresi yang diberikan masuk akal.                           Kita hanya membuktikan pernyataan pertama. Pertama perhatikan bahwa jika adalah , maka demikian pula dan . Maka adalah menurut . Demikian pula, kita melihat bahwa adalah .  Selanjutnya, diberikan sembarang dengan , , kita memiliki . Karena entri dari kedua matriks adalah sama untuk setiap , maka .     Contoh Video: Membuktikan Kesamaan Matriks   Video: perkalian matriks bersifat asosiatif  Video: perkalian matriks bersifat asosiatif     Video: sifat transpos  Video: sifat transpos       Latihan Tertulis    Dalam latihan ini Anda akan melengkapi pembuktian .    Buktikan .    Buktikan .    Buktikan .    Buktikan .    Buktikan .    Buktikan .    Buktikan .    Buktikan .         Kita membutuhkan dan keduanya berukuran agar ekspresi tersebut masuk akal. Mudah dilihat bahwa dan keduanya adalah matriks . Kita harus menunjukkan untuk semua , . Kita memiliki .         Buktikan ketiga pernyataan dari .      Dalam latihan ini Anda akan melengkapi pembuktian .    Buktikan .    Buktikan .    Buktikan .        Misalkan adalah matriks . Kita mendefinisikan kuadrat -nya sebagai .    Dalam aljabar bilangan real kita tahu bahwa . Sebaliknya, tunjukkan bahwa terdapat tak hingga banyaknya matriks  yang memenuhi .  Opsional: dapatkah Anda mendeskripsikan secara parametrik himpunan semua matriks yang memenuhi ?    Dalam aljabar bilangan real kita tahu bahwa . Sebaliknya, tunjukkan bahwa terdapat tak hingga banyaknya matriks  yang memenuhi .    Dalam aljabar bilangan real kita memiliki identitas . Tunjukkan bahwa dua matriks  , memenuhi jika dan hanya jika .      Untuk (a) misalkan , hitung , samakan matriks ini dengan , dan cobalah menemukan beberapa solusi dari sistem (nonlinear) empat persamaan yang bersesuaian dalam variabel tak diketahui .  Petunjuk serupa untuk (b), hanya sekarang samakan .      Pertimbangkan persamaan matriks .     Rantai implikasi berikut tidak valid. . Untuk setiap implikasi dalam rantai tersebut, jelaskan mengapa implikasi tersebut valid atau tidak valid.      Temukan semua yang memenuhi .    Tuliskan dan susun sistem persamaan linear dalam variabel tak diketahui .       "
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
  "body": " Bukti (iii)  Kita hanya membuktikan hukum asosiatif perkalian . Misalkan , , . Untuk menunjukkan , kita harus menunjukkan (1) bahwa dan memiliki dimensi yang sama, dan (2) bahwa untuk semua yang mungkin.  (1) Pengamatan biasa tentang dimensi dalam dan luar menunjukkan bahwa baik maupun memiliki dimensi .  (2) Diberikan sembarang dengan dan , kita memiliki:   Ini membuktikan bahwa semua entri dari kedua matriks adalah sama, dan dengan demikian .  "
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
  "body": " Penyimpangan Aljabar Matriks      Perkalian matriks tidak komutatif  Untuk dua matriks  dan , kita tidak selalu memiliki .    Produk matriks tak-nol dapat sama dengan nol  Jika produk dari dua matriks adalah matriks nol, kita tidak dapat menyimpulkan bahwa salah satu matriks adalah matriks nol. Dalam notasi logika: .      "
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
  "body": " Perhatikan baik-baik penyimpangan penting aljabar matriks ini. Dihadapkan pada persamaan bilangan real berbentuk , kita memiliki dorongan yang tertanam kuat untuk menyatakan bahwa atau . (Jika kita ceroboh kita mungkin melupakan kemungkinan pertama itu.) Manuver yang sesuai untuk persamaan matriks sama sekali tidak tersedia bagi kita, kecuali kita mengetahui sesuatu lebih lanjut tentang .  "
},
{
  "id": "th_trans_props",
  "level": "2",
  "url": "s_algebraic.html#th_trans_props",
  "type": "Theorem",
  "number": "2.2.11",
  "title": "Sifat-sifat Transposisi Matriks.",
  "body": " Sifat-sifat Transposisi Matriks  Sifat-sifat berikut berlaku untuk semua matriks dan skalar yang membuat ekspresi yang diberikan masuk akal.                           Kita hanya membuktikan pernyataan pertama. Pertama perhatikan bahwa jika adalah , maka demikian pula dan . Maka adalah menurut . Demikian pula, kita melihat bahwa adalah .  Selanjutnya, diberikan sembarang dengan , , kita memiliki . Karena entri dari kedua matriks adalah sama untuk setiap , maka .   "
},
{
  "id": "fig_proof_assoc",
  "level": "2",
  "url": "s_algebraic.html#fig_proof_assoc",
  "type": "Figure",
  "number": "2.2.12",
  "title": "Video: perkalian matriks bersifat asosiatif",
  "body": " Video: perkalian matriks bersifat asosiatif  Video: perkalian matriks bersifat asosiatif   "
},
{
  "id": "fig_proof_transp",
  "level": "2",
  "url": "s_algebraic.html#fig_proof_transp",
  "type": "Figure",
  "number": "2.2.13",
  "title": "Video: sifat transpos",
  "body": " Video: sifat transpos  Video: sifat transpos   "
},
{
  "id": "s_algebraic_ex-1-2",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-1-2",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": "  Dalam latihan ini Anda akan melengkapi pembuktian .    Buktikan .    Buktikan .    Buktikan .    Buktikan .    Buktikan .    Buktikan .    Buktikan .    Buktikan .         Kita membutuhkan dan keduanya berukuran agar ekspresi tersebut masuk akal. Mudah dilihat bahwa dan keduanya adalah matriks . Kita harus menunjukkan untuk semua , . Kita memiliki .      "
},
{
  "id": "s_algebraic_ex-1-3",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-1-3",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": "  Buktikan ketiga pernyataan dari .   "
},
{
  "id": "s_algebraic_ex-1-4",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-1-4",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": "  Dalam latihan ini Anda akan melengkapi pembuktian .    Buktikan .    Buktikan .    Buktikan .     "
},
{
  "id": "s_algebraic_ex-1-5",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-1-5",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": "  Misalkan adalah matriks . Kita mendefinisikan kuadrat -nya sebagai .    Dalam aljabar bilangan real kita tahu bahwa . Sebaliknya, tunjukkan bahwa terdapat tak hingga banyaknya matriks  yang memenuhi .  Opsional: dapatkah Anda mendeskripsikan secara parametrik himpunan semua matriks yang memenuhi ?    Dalam aljabar bilangan real kita tahu bahwa . Sebaliknya, tunjukkan bahwa terdapat tak hingga banyaknya matriks  yang memenuhi .    Dalam aljabar bilangan real kita memiliki identitas . Tunjukkan bahwa dua matriks  , memenuhi jika dan hanya jika .      Untuk (a) misalkan , hitung , samakan matriks ini dengan , dan cobalah menemukan beberapa solusi dari sistem (nonlinear) empat persamaan yang bersesuaian dalam variabel tak diketahui .  Petunjuk serupa untuk (b), hanya sekarang samakan .   "
},
{
  "id": "s_algebraic_ex-1-6",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic_ex-1-6",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "",
  "body": "  Pertimbangkan persamaan matriks .     Rantai implikasi berikut tidak valid. . Untuk setiap implikasi dalam rantai tersebut, jelaskan mengapa implikasi tersebut valid atau tidak valid.      Temukan semua yang memenuhi .    Tuliskan dan susun sistem persamaan linear dalam variabel tak diketahui .    "
},
{
  "id": "s_invertible_matrices",
  "level": "1",
  "url": "s_invertible_matrices.html",
  "type": "Section",
  "number": "2.3",
  "title": "Matriks Invertibel",
  "body": " Matriks Invertibel   Melanjutkan pembahasan dari , kita mengamati bahwa sifat pencoretan yang dinikmati dalam aljabar bilangan real adalah konsekuensi dari fakta bahwa setiap bilangan real tak-nol memiliki invers perkalian , dilambangkan atau , yang memenuhi . Memang, \"mencoret\" dalam persamaan (dengan asumsi ) sebenarnya adalah tindakan mengalikan kedua sisi persamaan ini dengan invers perkalian .  Selalu mencari koneksi antara aljabar bilangan real dan matriks, kita bertanya apakah terdapat analogi yang masuk akal dari invers perkalian untuk matriks. Kita telah melihat bahwa matriks identitas memainkan peran identitas perkalian untuk matriks , sama seperti bilangan untuk bilangan real. Ini menyarankan kita harus membatasi perhatian pada matriks . Definisi berikut kemudian adalah analogi yang diinginkan dari invers perkalian bilangan real tak-nol.    Matriks Invertibel   Matriks Invertibel  invertibel matriks  matriks invers    invers dari    Sebuah matriks  disebut invertibel (atau nonsingular ) jika terdapat matriks  yang memenuhi . Ketika hal ini terjadi, kita menyebut sebagai invers dari , dan kita mengatakan bahwa dan adalah invers satu sama lain.  Sebuah matriks yang memenuhi disebut invers dari , dilambangkan .  Sebuah matriks persegi yang tidak invertibel disebut singular .    Frasa \"sebuah invers\" dalam agak mengejutkan. Bukankah kita seharusnya berbicara tentang invers dari sebuah matriks? Tidak mengherankan, jika sebuah matriks invertibel, maka ia memiliki satu dan hanya satu invers. Sebagaimana intuitif fakta ini mungkin tampak, namun hal ini masih memerlukan pembuktian.   Invers Bersifat Tunggal   Jika adalah matriks invertibel, maka inversnya tunggal: yaitu, hanya ada satu matriks yang memenuhi .     Misalkan matriks dan keduanya memenuhi sifat invers perkalian: yaitu, . Maka . Dengan demikian kita melihat bahwa , menunjukkan bahwa invers dari , jika ada, adalah tunggal.   Teorema berikutnya memberitahu kita bahwa kita dapat melakukan pencoretan perkalian pada sebuah matriks jika matriks tersebut invertibel .   Pencoretan dengan Matriks Invertibel   Misalkan adalah matriks invertibel .   Pencoretan kiri  Diberikan matriks  dan , kita memiliki .    Pencoretan kanan  Diberikan matriks  dan , kita memiliki .          Kita membuktikan kedua implikasi dari secara terpisah. Implikasi sebaliknya ( ) jelas: . Untuk implikasi maju ( ), kita memiliki .    Argumen untuk pencoretan kanan persis serupa.       Korolari berikutnya menunjukkan bagaimana kita dapat menyelesaikan beberapa persamaan matriks secara tunggal menggunakan matriks invertibel.   Penyelesaian dengan Matriks Invertibel   Misalkan adalah matriks invertibel .   Jika dan adalah matriks , maka .    Jika dan adalah matriks , maka .          Kita memiliki .    Kita memiliki .       Tanpa teori tambahan yang tersedia, untuk menunjukkan matriks invertibel kita harus menampilkan sebuah invers. Beban ada pada kita untuk menemukan matriks yang memenuhi kedua dan . (Ingat: karena kita tidak dapat mengasumsikan , kita benar-benar perlu menunjukkan kedua persamaan tersebut berlaku.)  Dengan cara yang sama, untuk menunjukkan  tidak invertibel kita harus menunjukkan bahwa invers tidak ada: yaitu, kita harus membuktikan bahwa tidak ada yang memenuhi . Contoh berikut mengilustrasikan teknik ini untuk berbagai matriks.   Matriks Invertibel      Matriks identitas adalah invertibel, dan sebenarnya kita memiliki , sebagaimana disaksikan oleh fakta bahwa .    Matriks nol persegi tidak pernah invertibel, karena untuk sembarang matriks persegi dengan dimensi yang sama kita memiliki . Dengan demikian tidak ada matriks yang memenuhi sifat invers terhadap .    Invers dari matriks adalah . Memang, kita memiliki , sebagaimana dapat Anda verifikasi dengan mudah.    Matriks tidak invertibel. Memang, menggunakan metode baris perkalian matriks , kita melihat bahwa diberikan sembarang matriks , setiap baris dari diberikan oleh . Akibatnya semua baris dari identik, dan dengan demikian kita tidak dapat memiliki , karena baris-baris dari tidak identik.       Sebagaimana contoh sebelumnya mengilustrasikan, memutuskan apakah sebuah matriks invertibel tidak begitu sederhana, terutama jika matriks tersebut besar. Untuk kasus , namun, kita memiliki uji invertibilitas yang relatif sederhana. (Kita akan menggeneralisasi ini ke kasus dalam .)   Invers Matriks   Sebuah matriks invertibel jika dan hanya jika .  Ketika hal ini terjadi, kita memiliki .     Jika , matriks yang diusulkan memang merupakan invers dari , sebagaimana dapat diverifikasi dengan mudah.  Asumsikan . Jika , maka tidak invertibel, sebagaimana kita lihat dalam contoh di atas. Dengan demikian kita dapat mengasumsikan tak-nol, dalam hal ini juga tak-nol. Sebuah komputasi mudah menunjukkan Ini mengimplikasikan tidak invertibel. Memang jika demikian, maka invers akan ada, dan kita akan memiliki , yang merupakan kontradiksi. Kita telah membuktikan bahwa jika , maka tidak invertibel.    Matriks Invertibel  Sage memiliki sejumlah alat berguna terkait invertibilitas. Fungsi boolean is_invertible() menguji invertibilitas, dan metode inverse() menghitung invers dari matriks invertibel. Di bawah ini kita menghasilkan matriks acak dengan koefisien rasional, menguji apakah invertibel, dan menghitung inversnya jika invertibel. Pengaturan density=0.5 memastikan bahwa kira-kira setengah entri matriks adalah nol; dan ini pada gilirannya meningkatkan kemungkinan bahwa matriks tersebut singular, karena alasan yang akan menjadi agak lebih jelas nanti.   Evaluasi sel Sage di bawah ini beberapa kali.    Ketika matriks invertibel, verifikasi bahwa . Jika Anda suka, gunakan sel Sage kosong untuk menghitung dan .    Coba tingkatkan pengaturan density dalam random_element() ( , density=0.75 , density=.875 ) dan lihat apakah matriks lebih atau kurang mungkin invertibel.        Teorema berikutnya memberitahu kita bahwa invertibilitas dipertahankan oleh perkalian matriks: yaitu, jika dan adalah matriks invertibel , maka demikian pula .   Produk Matriks Invertibel   Misalkan adalah matriks . Jika dan keduanya invertibel, maka demikian pula produk mereka . Menggunakan notasi logika: . Bahkan ketika hal ini terjadi kita memiliki .     Asumsikan dan invertibel. Pernyataan teorema mengusulkan kandidat untuk invers dari : yaitu, . Kita hanya perlu menunjukkan bahwa memenuhi . Berikut buktinya: .    Produk Matriks Invertibel   Lebih umum, jika adalah matriks invertibel , maka produk mereka invertibel. Lebih lanjut, kita memiliki dalam kasus ini .     Kita membuktikan dengan induksi pada jumlah matriks, , bahwa jika invertibel, maka rumus invers yang diusulkan valid.  Langkah dasar:  Untuk , rumus invers berbunyi , yang jelas benar.    Langkah induksi  Untuk langkah induksi kita mengasumsikan bahwa rumus invers valid untuk sembarang koleksi matriks invertibel, dan kemudian menunjukkan valid untuk sembarang koleksi matriks invertibel. Misalkan adalah matriks invertibel . Definisikan . Maka .      Setiap kali dihadapkan pada implikasi logika berbentuk , dimana dan menyatakan proposisi arbitrer, Anda harus selalu bertanya apakah implikasi tersebut \"berjalan sebaliknya\". Dengan kata lain, apakah implikasi konvers juga berlaku?  Jawaban terkait implikasi adalah ya, meskipun pembuktiannya lebih sulit dari yang Anda kira. (Lihat .)  Argumen berikut adalah bukti tidak valid umum dari implikasi sebaliknya:   Asumsikan invertibel.    Maka memiliki matriks invers.    Maka invers dari adalah .    Maka dan ada. Dengan demikian dan invertibel.   Di mana letak kesalahan logika kita di sini? Pernyataan kedua hanya memungkinkan kita menyimpulkan bahwa terdapat matriks misterius yang memenuhi . Kita belum dapat mengatakan bahwa , karena rumus ini dari hanya berlaku ketika kita sudah tahu bahwa dan keduanya invertibel. Tetapi ini persis apa yang ingin kita buktikan! Dengan demikian kita bersalah di sini atas \"begging the question\", atau petitio principii dalam bahasa Latin.     Pangkat Matriks, Polinomial Matriks  Kita mengakhiri bagian ini dengan mengeksplorasi bagaimana operasi invers matriks masuk ke dalam aljabar matriks kita. Pertama, kita sekarang dapat menggunakan operasi invers untuk mendefinisikan pangkat matriks berbentuk , dimana adalah matriks persegi dan adalah bilangan bulat arbitrer.   Pangkat Matriks  pangkat matriks    pangkat matriks    Misalkan adalah matriks , dan misalkan adalah bilangan bulat. Kita mendefinisikan matriks pangkat sebagai berikut: .    Dilengkapi dengan notion pangkat matriks, kita dapat lebih lanjut mendefinisikan polinomial matriks untuk matriks persegi.   Polinomial Matriks  polinomial matriks    polinomial matriks    Misalkan adalah polinomial dengan koefisien real. Untuk sembarang matriks persegi berukuran , kita mendefinisikan matriks sebagai . Kita menyebut hasil dari evaluasi polinomial pada matriks .     Sangat mudah dan berbahaya untuk melupakan matriks identitas dalam suku yang muncul dalam . Berhati-hatilah untuk tidak membuat kesalahan ini; tanpa matriks identitas berukuran sesuai, ekspresi sama sekali tidak masuk akal.    Polinomial Matriks   Misalkan . Evaluasi pada matriks dan .    Kita memiliki dan .     Polinomial Matriks  Sebuah pangkat matriks bilangan bulat dihitung dalam Sage sebagai A^n .   Tentu saja matriks perlu invertibel agar pangkat negatif dapat dihitung. Sage akan melempar error dalam kasus ini jika matriks singular.   Ekspresi polinomial kemudian dapat dengan mudah dihitung secara manual dalam Sage. Sel berikutnya menghitung dan untuk .   Kita berhati-hati untuk heed peringatan dalam , memastikan untuk menyertakan untuk ( identity_matrix(3) ) dan untuk ( identity_matrix(2) ). Menariknya, Sage cukup pintar untuk memahami apa yang kita maksud meskipun kita ceroboh dalam hal ini.     Sifat-sifat Pangkat Matriks   Sifat-sifat berikut berlaku untuk semua matriks , semua skalar , dan semua bilangan bulat yang membuat ekspresi yang diberikan masuk akal.                        .       Pembuktian tiga pernyataan pertama adalah elementer, dan sangat menyerupai pembuktian hasil serupa dalam aljabar bilangan real. Kita biarkan ini sebagai latihan (tidak ditugaskan).  Agar pernyataan keempat masuk akal, kita harus mengasumsikan bahwa invertibel. Klaim di sini adalah bahwa invertibel, dan bahwa inversnya adalah itu sendiri. Untuk membuktikan ini kita hanya perlu menunjukkan , yang mengikuti dari definisi invers.  Pernyataan kelima juga secara diam-diam mengasumsikan invertibel. Untuk membuktikannya, kita pertimbangkan tiga kasus , dan .  Jika , maka menurut definisi .  Jika , maka menurut definisi .  Misalkan . Maka .     Invers dan Transpos   Misalkan invertibel. Kita memiliki , dalam hal ini .    Kita membuktikan kedua implikasi dari pernyataan jika dan hanya jika secara terpisah.  Misalkan invertibel dengan invers . Untuk melihat bahwa invertibel, dengan invers sebagaimana ditentukan dalam , kita hanya perlu menunjukkan bahwa . Kita verifikasi kedua kesamaan secara terpisah:  . Dalam kedua rantai kesamaan kita menggunakan klaim jelas .  Untuk arah sebaliknya, asumsikan invertibel. Menetapkan , kita melihat bahwa . Menurut implikasi pertama, kita tahu bahwa jika invertibel, maka demikian pula .       Latihan Tertulis    Untuk setiap matriks, berikan inversnya atau tunjukkan bahwa matriks tersebut tidak invertibel. Justifikasi jawaban Anda.               , dimana .        Setiap di bawah ini invertibel. Temukan dengan tebak dan periksa. Anda mungkin ingin menggunakan metode baris atau kolom perkalian matriks untuk membenarkan jawaban Anda.                       Misalkan adalah matriks invertibel. Buktikan: untuk sembarang  tak-nol , matriks invertibel.      Asumsikan adalah matriks persegi dengan .    Buktikan: jika memiliki dua kolom identik, maka tidak invertibel.    Buktikan: jika memiliki baris yang merupakan kelipatan skalar dari baris lain, maka tidak invertibel.      Gunakan metode kolom dan\/atau baris perkalian matriks untuk menunjukkan secara langsung bahwa tidak dapat memiliki matriks invers.      Temukan semua matriks invertibel  yang memenuhi persamaan yang diberikan, atau tunjukkan tidak ada demikian. Justifikasi jawaban Anda.     .     .                  Misalkan . Temukan rumus untuk , dimana adalah bilangan bulat. Justifikasi jawaban Anda menggunakan pembuktian dengan induksi.      Misalkan , matriks yang terdiri dari semua angka satu. Temukan rumus untuk , dimana adalah bilangan bulat. Justifikasi jawaban Anda menggunakan pembuktian dengan induksi.      Misalkan , dimana adalah skalar tetap tertentu. Misalkan adalah matriks yang memenuhi .    Buktikan: jika , maka invertibel.    Asumsikan lebih lanjut bahwa bukan kelipatan skalar dari .  Buktikan: jika , maka singular.       Ekspansi Produk Matriks  Tetapkan bilangan bulat positif . Diberikan kombinasi linear dari matriks  , buktikan dengan induksi pada bahwa . Perhatikan bahwa setiap langkah (dasar dan induksi) dari induksi Anda pada akan memerlukan argumen yang menggunakan induksi pada ! Ini kadang-kadang disebut induksi ganda . Sebagai contoh, dalam langkah dasar Anda harus menunjukkan bahwa untuk sembarang ; ini harus dibuktikan dengan induksi pada .    Ekspresi Polinomial dari Komutatif   Misalkan dan adalah polinomial dengan koefisien real. Untuk sembarang matriks persegi , tunjukkan bahwa matriks dan komutatif: yaitu, . Anda dapat menggunakan hasil dari .      Misalkan adalah matriks yang memenuhi untuk suatu .  Tunjukkan bahwa invertibel, dan bahwa sebenarnya . Anda dapat menggunakan hasil dari dan\/atau .      "
},
{
  "id": "d_invertible_matrix",
  "level": "2",
  "url": "s_invertible_matrices.html#d_invertible_matrix",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Matriks Invertibel.",
  "body": " Matriks Invertibel  invertibel matriks  matriks invers    invers dari    Sebuah matriks  disebut invertibel (atau nonsingular ) jika terdapat matriks  yang memenuhi . Ketika hal ini terjadi, kita menyebut sebagai invers dari , dan kita mengatakan bahwa dan adalah invers satu sama lain.  Sebuah matriks yang memenuhi disebut invers dari , dilambangkan .  Sebuah matriks persegi yang tidak invertibel disebut singular .   "
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
  "id": "subsec-invertible-5",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec-invertible-5",
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
  "title": "Matriks Invertibel.",
  "body": " Matriks Invertibel      Matriks identitas adalah invertibel, dan sebenarnya kita memiliki , sebagaimana disaksikan oleh fakta bahwa .    Matriks nol persegi tidak pernah invertibel, karena untuk sembarang matriks persegi dengan dimensi yang sama kita memiliki . Dengan demikian tidak ada matriks yang memenuhi sifat invers terhadap .    Invers dari matriks adalah . Memang, kita memiliki , sebagaimana dapat Anda verifikasi dengan mudah.    Matriks tidak invertibel. Memang, menggunakan metode baris perkalian matriks , kita melihat bahwa diberikan sembarang matriks , setiap baris dari diberikan oleh . Akibatnya semua baris dari identik, dan dengan demikian kita tidak dapat memiliki , karena baris-baris dari tidak identik.      "
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
  "id": "subsec-invertible-15",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec-invertible-15",
  "type": "Proof",
  "number": "2.3.1.2",
  "title": "",
  "body": " Jika , matriks yang diusulkan memang merupakan invers dari , sebagaimana dapat diverifikasi dengan mudah.  Asumsikan . Jika , maka tidak invertibel, sebagaimana kita lihat dalam contoh di atas. Dengan demikian kita dapat mengasumsikan tak-nol, dalam hal ini juga tak-nol. Sebuah komputasi mudah menunjukkan Ini mengimplikasikan tidak invertibel. Memang jika demikian, maka invers akan ada, dan kita akan memiliki , yang merupakan kontradiksi. Kita telah membuktikan bahwa jika , maka tidak invertibel.  "
},
{
  "id": "subsec-invertible-16",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec-invertible-16",
  "type": "Project",
  "number": "2.3.1",
  "title": "Matriks Invertibel.",
  "body": " Matriks Invertibel  Sage memiliki sejumlah alat berguna terkait invertibilitas. Fungsi boolean is_invertible() menguji invertibilitas, dan metode inverse() menghitung invers dari matriks invertibel. Di bawah ini kita menghasilkan matriks acak dengan koefisien rasional, menguji apakah invertibel, dan menghitung inversnya jika invertibel. Pengaturan density=0.5 memastikan bahwa kira-kira setengah entri matriks adalah nol; dan ini pada gilirannya meningkatkan kemungkinan bahwa matriks tersebut singular, karena alasan yang akan menjadi agak lebih jelas nanti.   Evaluasi sel Sage di bawah ini beberapa kali.    Ketika matriks invertibel, verifikasi bahwa . Jika Anda suka, gunakan sel Sage kosong untuk menghitung dan .    Coba tingkatkan pengaturan density dalam random_element() ( , density=0.75 , density=.875 ) dan lihat apakah matriks lebih atau kurang mungkin invertibel.       "
},
{
  "id": "th_invertible_prod",
  "level": "2",
  "url": "s_invertible_matrices.html#th_invertible_prod",
  "type": "Theorem",
  "number": "2.3.7",
  "title": "Produk Matriks Invertibel.",
  "body": " Produk Matriks Invertibel   Misalkan adalah matriks . Jika dan keduanya invertibel, maka demikian pula produk mereka . Menggunakan notasi logika: . Bahkan ketika hal ini terjadi kita memiliki .   "
},
{
  "id": "subsec-invertible-19",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec-invertible-19",
  "type": "Proof",
  "number": "2.3.1.3",
  "title": "",
  "body": " Asumsikan dan invertibel. Pernyataan teorema mengusulkan kandidat untuk invers dari : yaitu, . Kita hanya perlu menunjukkan bahwa memenuhi . Berikut buktinya: .  "
},
{
  "id": "c_invertible_prod",
  "level": "2",
  "url": "s_invertible_matrices.html#c_invertible_prod",
  "type": "Corollary",
  "number": "2.3.8",
  "title": "Produk Matriks Invertibel.",
  "body": " Produk Matriks Invertibel   Lebih umum, jika adalah matriks invertibel , maka produk mereka invertibel. Lebih lanjut, kita memiliki dalam kasus ini .   "
},
{
  "id": "subsec-invertible-21",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec-invertible-21",
  "type": "Proof",
  "number": "2.3.1.4",
  "title": "",
  "body": " Kita membuktikan dengan induksi pada jumlah matriks, , bahwa jika invertibel, maka rumus invers yang diusulkan valid.  Langkah dasar:  Untuk , rumus invers berbunyi , yang jelas benar.    Langkah induksi  Untuk langkah induksi kita mengasumsikan bahwa rumus invers valid untuk sembarang koleksi matriks invertibel, dan kemudian menunjukkan valid untuk sembarang koleksi matriks invertibel. Misalkan adalah matriks invertibel . Definisikan . Maka .    "
},
{
  "id": "subsec-invertible-22",
  "level": "2",
  "url": "s_invertible_matrices.html#subsec-invertible-22",
  "type": "Remark",
  "number": "2.3.9",
  "title": "",
  "body": " Setiap kali dihadapkan pada implikasi logika berbentuk , dimana dan menyatakan proposisi arbitrer, Anda harus selalu bertanya apakah implikasi tersebut \"berjalan sebaliknya\". Dengan kata lain, apakah implikasi konvers juga berlaku?  Jawaban terkait implikasi adalah ya, meskipun pembuktiannya lebih sulit dari yang Anda kira. (Lihat .)  Argumen berikut adalah bukti tidak valid umum dari implikasi sebaliknya:   Asumsikan invertibel.    Maka memiliki matriks invers.    Maka invers dari adalah .    Maka dan ada. Dengan demikian dan invertibel.   Di mana letak kesalahan logika kita di sini? Pernyataan kedua hanya memungkinkan kita menyimpulkan bahwa terdapat matriks misterius yang memenuhi . Kita belum dapat mengatakan bahwa , karena rumus ini dari hanya berlaku ketika kita sudah tahu bahwa dan keduanya invertibel. Tetapi ini persis apa yang ingin kita buktikan! Dengan demikian kita bersalah di sini atas \"begging the question\", atau petitio principii dalam bahasa Latin.  "
},
{
  "id": "d_matrix_powers",
  "level": "2",
  "url": "s_invertible_matrices.html#d_matrix_powers",
  "type": "Definition",
  "number": "2.3.10",
  "title": "Pangkat Matriks.",
  "body": " Pangkat Matriks  pangkat matriks    pangkat matriks    Misalkan adalah matriks , dan misalkan adalah bilangan bulat. Kita mendefinisikan matriks pangkat sebagai berikut: .   "
},
{
  "id": "d_matrix_polynomials",
  "level": "2",
  "url": "s_invertible_matrices.html#d_matrix_polynomials",
  "type": "Definition",
  "number": "2.3.11",
  "title": "Polinomial Matriks.",
  "body": " Polinomial Matriks  polinomial matriks    polinomial matriks    Misalkan adalah polinomial dengan koefisien real. Untuk sembarang matriks persegi berukuran , kita mendefinisikan matriks sebagai . Kita menyebut hasil dari evaluasi polinomial pada matriks .   "
},
{
  "id": "rem_matrix_polynomials",
  "level": "2",
  "url": "s_invertible_matrices.html#rem_matrix_polynomials",
  "type": "Remark",
  "number": "2.3.12",
  "title": "",
  "body": " Sangat mudah dan berbahaya untuk melupakan matriks identitas dalam suku yang muncul dalam . Berhati-hatilah untuk tidak membuat kesalahan ini; tanpa matriks identitas berukuran sesuai, ekspresi sama sekali tidak masuk akal.  "
},
{
  "id": "eg_matrix_polynomials",
  "level": "2",
  "url": "s_invertible_matrices.html#eg_matrix_polynomials",
  "type": "Example",
  "number": "2.3.13",
  "title": "Polinomial Matriks.",
  "body": " Polinomial Matriks   Misalkan . Evaluasi pada matriks dan .    Kita memiliki dan .   "
},
{
  "id": "s_invertible_matrices-4-8",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices-4-8",
  "type": "Project",
  "number": "2.3.2",
  "title": "Polinomial Matriks.",
  "body": " Polinomial Matriks  Sebuah pangkat matriks bilangan bulat dihitung dalam Sage sebagai A^n .   Tentu saja matriks perlu invertibel agar pangkat negatif dapat dihitung. Sage akan melempar error dalam kasus ini jika matriks singular.   Ekspresi polinomial kemudian dapat dengan mudah dihitung secara manual dalam Sage. Sel berikutnya menghitung dan untuk .   Kita berhati-hati untuk heed peringatan dalam , memastikan untuk menyertakan untuk ( identity_matrix(3) ) dan untuk ( identity_matrix(2) ). Menariknya, Sage cukup pintar untuk memahami apa yang kita maksud meskipun kita ceroboh dalam hal ini.   "
},
{
  "id": "th_power_rules",
  "level": "2",
  "url": "s_invertible_matrices.html#th_power_rules",
  "type": "Theorem",
  "number": "2.3.14",
  "title": "Sifat-sifat Pangkat Matriks.",
  "body": " Sifat-sifat Pangkat Matriks   Sifat-sifat berikut berlaku untuk semua matriks , semua skalar , dan semua bilangan bulat yang membuat ekspresi yang diberikan masuk akal.                        .       Pembuktian tiga pernyataan pertama adalah elementer, dan sangat menyerupai pembuktian hasil serupa dalam aljabar bilangan real. Kita biarkan ini sebagai latihan (tidak ditugaskan).  Agar pernyataan keempat masuk akal, kita harus mengasumsikan bahwa invertibel. Klaim di sini adalah bahwa invertibel, dan bahwa inversnya adalah itu sendiri. Untuk membuktikan ini kita hanya perlu menunjukkan , yang mengikuti dari definisi invers.  Pernyataan kelima juga secara diam-diam mengasumsikan invertibel. Untuk membuktikannya, kita pertimbangkan tiga kasus , dan .  Jika , maka menurut definisi .  Jika , maka menurut definisi .  Misalkan . Maka .   "
},
{
  "id": "th_inverse_trans",
  "level": "2",
  "url": "s_invertible_matrices.html#th_inverse_trans",
  "type": "Theorem",
  "number": "2.3.15",
  "title": "Invers dan Transpos.",
  "body": " Invers dan Transpos   Misalkan invertibel. Kita memiliki , dalam hal ini .    Kita membuktikan kedua implikasi dari pernyataan jika dan hanya jika secara terpisah.  Misalkan invertibel dengan invers . Untuk melihat bahwa invertibel, dengan invers sebagaimana ditentukan dalam , kita hanya perlu menunjukkan bahwa . Kita verifikasi kedua kesamaan secara terpisah:  . Dalam kedua rantai kesamaan kita menggunakan klaim jelas .  Untuk arah sebaliknya, asumsikan invertibel. Menetapkan , kita melihat bahwa . Menurut implikasi pertama, kita tahu bahwa jika invertibel, maka demikian pula .   "
},
{
  "id": "s_invertible_matrices_ex-1-2",
  "level": "2",
  "url": "s_invertible_matrices.html#s_invertible_matrices_ex-1-2",
  "type": "Exercise",
  "number": "2.3.3.1",
  "title": "",
  "body": "  Untuk setiap matriks, berikan inversnya atau tunjukkan bahwa matriks tersebut tidak invertibel. Justifikasi jawaban Anda.               , dimana .     "
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
  "id": "s_det",
  "level": "1",
  "url": "s_det.html",
  "type": "Section",
  "number": "2.4",
  "title": "Determinan",
  "body": " Determinan    Determinan adalah pemetaan yang menetapkan kepada sebuah matriks persegi sebuah skalar . Definisi determinan yang diberikan di bawah ini jauh dari intuitif, dan kita akan melakukan sedikit untuk memotivasinya di awal. Sebaliknya, kita membiarkan berbagai sifatnya berbicara sendiri melalui motivasi retrospektif. Secara khusus, kita akan melihat bahwa , menjadikan determinan alat penting untuk menyelidiki invertibilitas.    Definisi Determinan  Definisi determinan kita bersifat rekursif ; diberikan sebuah matriks  determinannya didefinisikan dalam terms determinan dari submatriks tertentu berdimensi . Ini memerlukan beberapa notasi untuk membantu diskusi kita.   Notasi Submatriks  submatriks    submatriks dari    Misalkan adalah matriks dengan . Diberikan , submatriks dari yang diperoleh dengan menghapus baris ke- dan kolom ke- dari dilambangkan .      Jangan menyamakan notasi submatriks dengan notasi entri matriks : yang pertama mengembalikan submatriks dari yang diperoleh dengan menghapus baris ke- dan kolom ke- ; yang terakhir mengembalikan entri ke- dari .     Determinan  determinan    determinan dari    Misalkan . Determinan didefinisikan sebagai berikut:   Kasus dasar:  Ketika kita memiliki dan kita mendefinisikan .    Kasus rekursif:  Ketika kita mendefinisikan .        Kasus Kecil   Mari kita lihat rumus determinan untuk kasus . Anda mungkin ingat rumus untuk matriks dari ; kita akan membuat koneksi lebih eksplisit dalam .  Diberikan , kita memiliki . Rumus untuk kasus cukup sederhana untuk berfungsi sebagai kasus dasar kedua , memungkinkan kita mengakhiri proses rekursif menghitung matriks umum sekali kita sampai pada ekspresi yang melibatkan matriks .  Diberikan , kita memiliki .    Sifat rekursif dari definisi determinan membuat argumen induksi sangat berguna ketika membuktikan sifat-sifat determinan, sebagaimana diilustrasikan oleh teorema berikutnya.   Determinan Matriks Segitiga   Misalkan segitiga (atas, bawah, atau diagonal). Maka . Dengan kata lain, determinan matriks segitiga adalah produk dari entri diagonalnya.    Kita hanya memberikan pembuktian untuk matriks segitiga bawah; pembuktian dalam kasus segitiga atas hampir identik.  Untuk sembarang misalkan menyatakan proposisi: Determinan dari sembarang matriks segitiga bawah adalah produk dari entri diagonalnya . Kita membuktikan dengan induksi bahwa benar untuk semua .   Langkah dasar: tunjukkan benar  Dalam kasus ini , dan memang merupakan produk dari entri diagonal .    Langkah induksi: tunjukkan untuk semua  Misalkan adalah matriks segitiga bawah. Maka untuk semua , dan dengan demikian determinan dari diberikan oleh . Klaim: segitiga bawah. Memang, pertama perhatikan bahwa kita memiliki untuk semua ; dengan menghapus baris pertama dan kolom pertama kita secara efektif menaikkan setiap indeks sebesar satu. Karena segitiga bawah kita memiliki untuk semua , dan dengan demikian juga untuk semua , membuktikan klaim.  Terakhir, dengan mengasumsikan benar (hipotesis induksi) kita memiliki , sebagaimana diinginkan.      Determinan Matriks Identitas   Misalkan adalah matriks identitas . Maka .    Ini mengikuti langsung dari karena entri diagonal dari semuanya satu.      Ekspansi Sepanjang Baris dan Kolom   Secara moral, kita seharusnya memberikan beberapa contoh determinan berdimensi lebih tinggi, tetapi pertama-tama kita memperkenalkan beberapa teori yang memberi kita keleluasaan lebih dalam komputasi kita.    Minor dan Ekspansi Sepanjang Baris\/Kolom  minor matriks  ekspansi sepanjang baris\/kolom    minor ke- dari sebuah matriks    Diberikan matriks  , untuk sembarang pasangan  minor ke- dari didefinisikan sebagai .  Untuk sembarang ekspresi disebut ekspansi sepanjang baris ke- dari .  Untuk sembarang , ekspresi disebut ekspansi sepanjang kolom ke- dari .     Ekspansi Sepanjang Baris   Misalkan . Untuk sembarang kita memiliki . Dengan kata lain, kita dapat menghitung dengan mengekspansi sepanjang sembarang baris dari .    Pembuktian dilakukan dengan induksi pada ukuran matriks.   Langkah dasar:  Untuk tidak ada yang perlu dibuktikan. Diberikan mengekspansi sepanjang sembarang baris menghasilkan , sebagaimana dapat diverifikasi dengan mudah.    Langkah induksi  Asumsikan klaim benar untuk sembarang matriks . Diberikan kita memiliki . Mengekspansi sepanjang baris ke- dari untuk sembarang , di sisi lain, kita mendapatkan . Untuk menunjukkan kedua ekspresi ini sama kita menggunakan hipotesis induksi untuk menghitung setiap dengan mengekspansi sepanjang baris ke- -nya: . Matriks adalah hasil dari pertama-tama menghapus baris 1 dan kolom dari , dan kemudian menghapus baris dan kolom dari matriks yang dihasilkan. Untuk menangani submatriks iteratif seperti ini, kita membuat beberapa observasi sederhana yang menghubungkan baris dan kolom dari dan dengan yang dari .   Baris ke- dari berkorespondensi dengan baris ke- dari , dan baris pertama dari berkorespondensi dengan baris pertama dari .    Jika , maka kolom ke- dari berkorespondensi dengan kolom ke- dari ; jika , maka kolom ke- dari berkorespondensi dengan kolom ke- dari .    Jika , maka kolom ke- dari berkorespondensi dengan kolom ke- dari ; jika , maka kolom ke- dari berkorespondensi dengan kolom ke- dari .   Dari observasi ini kita menurunkan tabel rumus berikut: . Kita sekarang mulai menguraikan : . Ini melengkapi langkah induksi, dan dengan demikian pembuktian selesai.     Secara mengejutkan, ternyata kita dapat menghitung determinan sebuah matriks dengan mengekspansi sepanjang sembarang kolom ( ). Ini adalah konsekuensi dari teorema berikut, yang berguna dengan sendirinya. Pembuktian di bawah ini diambil dari A First Course in Linear Algebra karya Robert Beezer . (Lihat Teorema DT .) Ini menggunakan induksi dan trik indah yang dimulai dari observasi bahwa untuk sembarang .   Determinan dan Transposisi   Misalkan adalah matriks . Maka .    Pembuktian dilakukan dengan induksi pada . Kasus dasar ( ) trivial karena untuk sembarang matriks  .  Untuk induksi kita mengasumsikan bahwa untuk semua kita memiliki untuk sembarang matriks . Misalkan adalah matriks . Kita memiliki . Ini melengkapi pembuktian dengan induksi. (Perhatikan bagaimana dalam kesamaan kedua dalam rantai di atas kita menghitung dalam suku ke- dari dengan mengekspansi sepanjang baris ke- dari . Observasi serupa berlaku untuk kesamaan terakhir.)     Ekspansi Sepanjang Kolom   Misalkan . Untuk sembarang kita memiliki . Dengan kata lain, kita dapat menghitung dengan mengekspansi sepanjang sembarang baris dari .    Untuk sembarang , kita memiliki .      Hitung untuk .    Pertama kita menghitung dengan mengekspansi sepanjang baris kedua. Satu-satunya suku tak-nol dari ekspansi ini adalah yang terakhir, menghasilkan . Kita memiliki . Untuk menghitung determinannya kita mengekspansi sepanjang kolom ketiganya: . Kita menyimpulkan bahwa .     Matriks Tanda   Ketika mengekspansi sepanjang baris atau kolom, mudah tersandung oleh tanda di depan koefisien ke- . Sebuah matriks tanda adalah semacam alat mnemonik untuk membantu Anda dalam hal ini. Ini mudah dihasilkan dengan mengamati bahwa tanda di depan entri ke- selalu (karena ), dan bahwa sembarang langkah horizontal atau vertikal dalam matriks disertai dengan perubahan tanda. Sebagai contoh, untuk kita memiliki matriks tanda berikut: .     Contoh Video: Determinan   Video: determinan  Video: determinan     Kebebasan menghitung determinan dengan mengekspansi sepanjang sembarang baris atau kolom memunculkan sifat intuitif berikut.   Baris\/Kolom Nol, Penukaran Baris\/Kolom, Baris\/Kolom Identik   Misalkan adalah matriks .   Jika memiliki baris nol atau kolom nol, maka     Asumsikan . Misalkan adalah matriks yang diperoleh dengan menukar dua baris (atau dua kolom) dari . Maka .    Asumsikan . Jika memiliki dua baris identik atau dua kolom identik, maka .       Pernyataan pertama jelas karena menurut dan kita dapat menghitung determinan dengan mengekspansi sepanjang baris nol atau kolom nol yang dimaksud.  Pernyataan ketiga mengikuti dari yang kedua. Memang, jika memiliki dua baris atau kolom identik, maka matriks yang diperoleh dari dengan menukar baris (atau kolom) yang dimaksud adalah itu sendiri. Dengan demikian menurut pernyataan kedua, dan kita menyimpulkan bahwa .  Tinggal hanya menunjukkan pernyataan kedua. Kita hanya membuktikan pernyataan mengenai penukaran baris; pernyataan yang sesuai tentang kolom mengikuti dari . Pembuktian dilakukan dengan induksi.   Langkah dasar:  Misalkan . Maka , dan .    Langkah induksi  Kita mengasumsikan dengan induksi bahwa hasil berlaku untuk sembarang matriks , , dan menunjukkan hal yang sama benar untuk sembarang matriks .  Misalkan adalah matriks , dan misalkan adalah hasil dari menukar baris ke- dan ke- dari . Kita menghitung determinan dari dan dengan mengekspansi sepanjang baris ke- , dimana dan . Ini dimungkinkan karena .  Bergerak sepanjang baris ke- , perhatikan bahwa setiap submatriks adalah hasil dari menukar dua baris dari yang semula berkorespondensi dengan baris ke- dan ke- dari . Karena submatriks ini berdimensi , kita memiliki menurut induksi. Terakhir, karena baris ke- dari dan sama kita memiliki .     Sebagai konsekuensi lebih lanjut dari dan , kita dapat menurunkan rumus matriks adjoin .   Matriks Adjoin  matriks adjoin    adjoin dari matriks persegi    Misalkan adalah matriks . Matriks adjoin dari , dilambangkan , adalah matriks yang entri ke- -nya didefinisikan sebagai berikut: .      Berhati-hatilah dengan pembalikan urutan dalam definisi ini. Entri ke- dari sama dengan plus atau minus minor ke- dari . Mari kita lihat ini dalam aksi untuk beberapa matriks kecil.  Untuk kita memiliki .  Untuk kita memiliki .     Rumus Matriks Adjoin   Diberikan matriks  , kita memiliki . Sebagai konsekuensi, jika , maka invertibel dan .    Pertama perhatikan bahwa pernyataan kedua mengenai invertibilitas mengikuti langsung dari , karena dalam kasus ini menetapkan kita memiliki .  Dengan demikian cukup membuktikan . Untuk melakukannya, kita harus menunjukkan bahwa .   Kasus:  Dalam kasus ini kita memiliki . Argumen serupa menunjukkan bahwa , meskipun dalam kasus ini kita menggunakan ekspansi sepanjang kolom.    Kasus:  Ketika kita memiliki , dimana adalah matriks yang diperoleh dengan mengganti baris ke- dari dengan salinan baris ke- -nya. Karena memiliki dua baris identik mengimplikasikan , sebagaimana diinginkan. Sekali lagi, argumen serupa menggunakan ekspansi sepanjang kolom menunjukkan bahwa .       Gunakan rumus matriks adjoin untuk menghitung , dimana .    Pertama hitung dengan mengekspansi sepanjang baris ketiga: . Selanjutnya, hitung . Maka kita memiliki .      Sebelum Anda terlalu bersemangat tentang rumus matriks adjoin, Anda harus tahu bahwa seiring bertambah, prosedur ini menjadi jauh lebih mahal dalam terms jumlah operasi aritmetika yang terlibat dibandingkan algoritma invers kita berdasarkan eliminasi Gauss-Jordan. Anda mendapatkan gambaran tentang ini sudah dari contoh sebelumnya. Secara umum, algoritma invers Gauss-Jordan adalah cara yang tepat.      Operasi Baris dan Determinan  Misalkan matriks persegi dapat direduksi baris menjadi melalui urutan operasi baris. Secara umum kita tidak memiliki , tetapi kita dapat menghitung dari dengan melacak operasi mana yang digunakan.   Operasi Baris dan Determinan   Misalkan adalah matriks . Menggunakan notasi dari kita memiliki:              .   Secara khusus, mengambil , kita memiliki .    Pernyataan pertama mengikuti dengan mudah dengan menghitung dengan mengekspansi sepanjang baris ke- . Pernyataan kedua sebenarnya adalah penyataan ulang dari pernyataan kedua . Tinggal membuktikan pernyataan ketiga.  Misalkan , dan tetapkan . Maka identik dengan dengan pengecualian baris ke- , yang entri ke- -nya adalah . Dengan demikian , dimana adalah matriks yang diperoleh dengan mengganti baris ke- dari dengan baris yang identik dengan baris ke- -nya. Menurut kita menyimpulkan , dan dengan demikian , sebagaimana diinginkan.      Dalam bahasa operasi baris, diterjemahkan sebagai berikut:   Menskalakan baris matriks dengan memiliki efek menskalakan determinan dengan .    Menukar dua baris matriks mengubah tanda determinan.    Melakukan operasi penjumlahan baris pada matriks tidak memiliki efek pada determinan.        Operasi Kolom dan Determinan   Sebagaimana ditunjukkan dalam determinan berperilaku dengan cara serupa terhadap operasi kolom elementer : , menskalakan kolom dengan konstanta tak-nol menskalakan determinan dengan , menukar kolom mengalikan determinan dengan , menambahkan kelipatan satu kolom ke kolom lain membiarkan determinan tidak berubah.     Determinan dan Produk Matriks Elementer   Misalkan adalah matriks , dan misalkan kita memiliki untuk sembarang koleksi matriks elementer . Maka .    Ini adalah pembuktian mudah dengan induksi pada jumlah matriks elementer yang terlibat, kasus dasar ( ) yang dibahas oleh .     memiliki aplikasi komputasional dan teoretis.  Di sisi komputasional, ini menyarankan metode alternatif menghitung : pertama reduksi baris menjadi matriks lebih sederhana , pastikan untuk melacak operasi yang Anda gunakan; susun persamaan seperti dalam yang merepresentasikan reduksi baris; kemudian selesaikan persamaan yang bersesuaian untuk dalam terms dan .   Determinan melalui Reduksi Baris   Misalkan matriks dapat direduksi baris menjadi dengan melakukan urutan operasi baris berikut:   Pertama tukar baris kedua dan ketiga.    Kemudian skalakan baris pertama dengan     Kemudian ganti baris kedua dengan baris kedua ditambah baris pertama.   Hitung .    Dalam terms matriks elementer kita memiliki , dan dengan demikian . Kita menyimpulkan bahwa .    Di sisi teoretis, mengimplikasikan baik maupun .   Determinan dan Invertibilitas   Misalkan adalah matriks . Maka invertibel jika dan hanya jika .    Implikasi dibuktikan dalam .  Untuk arah sebaliknya, asumsikan invertibel. Maka mengimplikasikan adalah produk dari matriks elementer: . Maka mengimplikasikan . Karena untuk semua ( ), kita menyimpulkan .     Determinan Bersifat Multiplikatif   Misalkan dan adalah matriks . Maka .    Kita pertimbangkan dua kasus berdasarkan invertibilitas dari dan\/atau .   atau tidak invertibel  Dalam kasus ini tidak invertibel ( ), dan dengan demikian menurut . Dengan penalaran yang sama kita harus memiliki atau . Dengan demikian dalam kasus ini.    dan keduanya invertibel  Dalam kasus ini kita dapat menulis untuk sembarang matriks elementer dan ( ). Maka .     Kita mengakhiri bagian ini (dan bab) dengan menambahkan hasil dari dan salah satu latihan tugas rumah kita ke teorema invertibilitas kita.   Teorema Invertibilitas (Edisi Diperluas)   Misalkan adalah matriks . Pernyataan-pernyataan berikut ekuivalen.     invertibel.    Persamaan matriks memiliki solusi tunggal untuk sembarang vektor kolom .    Persamaan matriks memiliki solusi untuk sembarang vektor kolom .    Persamaan matriks memiliki solusi tunggal : yaitu, .     ekuivalen baris dengan , matriks identitas .     adalah produk dari matriks elementer.     .         Latihan WeBWork      Use the appropriate property of determinants to find  Do not evaluate the determinants. Answer:                  Consider the following Gauss elimination:   What is the determinant of ?                   Find such that the following matrix is singular.                   If and are matrices, , , then   ,   ,   ,   ,   .                                   Latihan Tertulis    Misalkan    Hitung dengan mengekspansi sepanjang baris kedua.    Hitung dengan mengekspansi sepanjang kolom ketiga.        Ekspansi Baris\/Kolom   Hitung determinan dari matriks yang diberikan. Tunjukkan baris atau kolom mana yang Anda ekspansikan.                          Determinan dan Invertibilitas   Untuk setiap matriks, temukan semua nilai (jika ada) yang membuat matriks tersebut invertibel. Gunakan determinan.                                 Rumus Matriks Adjoin   Gunakan rumus matriks adjoin untuk menghitung invers dari setiap matriks.                    Misalkan . Tunjukkan tanpa menghitung determinan secara langsung. Dengan kata lain, gunakan teknik reduksi baris atau .      Misalkan adalah matriks , dan misalkan adalah skalar. Nyatakan dan buktikan rumus yang menghubungkan dengan .      Asumsikan adalah matriks yang memenuhi . Hitung determinan dari matriks yang diberikan.                            Misalkan dan adalah matriks , dan misalkan invertibel. Buktikan pernyataan berikut:     .     .        Asumsikan matriks persegi memenuhi . Tunjukkan bahwa .      Buktikan bahwa matriks persegi invertibel jika dan hanya jika invertibel.     Matriks Adjoin   Latihan-latihan berikut mengeksplorasi hubungan antara matriks persegi dan adjoinnya .     Berikan contoh eksplisit matriks persegi yang memenuhi dan .  Dengan kata lain, tunjukkan bahwa dimungkinkan bagi matriks tak-nol untuk memiliki matriks adjoin nol.      Misalkan adalah matriks . Buktikan: .      Buktikan: invertibel jika dan hanya jika invertibel.      Asumsikan invertibel. Buktikan: .       Dalam pembuktian pernyataan (2) dari kita hanya menunjukkan bahwa jika adalah matriks persegi dengan dua baris identik, maka . Dengan mengasumsikan ini, tunjukkan bahwa hal yang sama berlaku jika memiliki dua kolom identik.      Nyatakan dan buktikan analogi dari yang mendeskripsikan bagaimana operasi kolom yang bersesuaian (yaitu, skalakan kolom dengan , tukar dua kolom, penjumlahan kolom) memengaruhi determinan sebuah matriks. (Lihat ).    Nyatakan setiap jenis operasi kolom ini sebagai perkalian di kanan dengan matriks elementer.      Misalkan adalah matriks dengan sepanjang diagonal dan di tempat lainnya: yaitu, . Nyatakan dan buktikan rumus untuk . (Rumus Anda akan melibatkan , , dan .)  Lihat kasus dan terlebih dahulu. Untuk membuktikan rumus dalam kasus umum Anda mungkin ingin menggunakan reduksi baris dan .      Diberikan skalar matriks Vandermonde didefinisikan sebagai . Dengan kata lain, kita memiliki Buktikan: .      "
},
{
  "id": "d_minors",
  "level": "2",
  "url": "s_det.html#d_minors",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Notasi Submatriks.",
  "body": " Notasi Submatriks  submatriks    submatriks dari    Misalkan adalah matriks dengan . Diberikan , submatriks dari yang diperoleh dengan menghapus baris ke- dan kolom ke- dari dilambangkan .   "
},
{
  "id": "rm_minors",
  "level": "2",
  "url": "s_det.html#rm_minors",
  "type": "Warning",
  "number": "2.4.2",
  "title": "",
  "body": "  Jangan menyamakan notasi submatriks dengan notasi entri matriks : yang pertama mengembalikan submatriks dari yang diperoleh dengan menghapus baris ke- dan kolom ke- ; yang terakhir mengembalikan entri ke- dari .   "
},
{
  "id": "d_det",
  "level": "2",
  "url": "s_det.html#d_det",
  "type": "Definition",
  "number": "2.4.3",
  "title": "Determinan.",
  "body": " Determinan  determinan    determinan dari    Misalkan . Determinan didefinisikan sebagai berikut:   Kasus dasar:  Ketika kita memiliki dan kita mendefinisikan .    Kasus rekursif:  Ketika kita mendefinisikan .      "
},
{
  "id": "rm_det_small_cases",
  "level": "2",
  "url": "s_det.html#rm_det_small_cases",
  "type": "Remark",
  "number": "2.4.4",
  "title": "Kasus <span class=\"process-math\">\\(n\\)<\/span> Kecil.",
  "body": " Kasus Kecil   Mari kita lihat rumus determinan untuk kasus . Anda mungkin ingat rumus untuk matriks dari ; kita akan membuat koneksi lebih eksplisit dalam .  Diberikan , kita memiliki . Rumus untuk kasus cukup sederhana untuk berfungsi sebagai kasus dasar kedua , memungkinkan kita mengakhiri proses rekursif menghitung matriks umum sekali kita sampai pada ekspresi yang melibatkan matriks .  Diberikan , kita memiliki .   "
},
{
  "id": "th_det_triangular",
  "level": "2",
  "url": "s_det.html#th_det_triangular",
  "type": "Theorem",
  "number": "2.4.5",
  "title": "Determinan Matriks Segitiga.",
  "body": " Determinan Matriks Segitiga   Misalkan segitiga (atas, bawah, atau diagonal). Maka . Dengan kata lain, determinan matriks segitiga adalah produk dari entri diagonalnya.    Kita hanya memberikan pembuktian untuk matriks segitiga bawah; pembuktian dalam kasus segitiga atas hampir identik.  Untuk sembarang misalkan menyatakan proposisi: Determinan dari sembarang matriks segitiga bawah adalah produk dari entri diagonalnya . Kita membuktikan dengan induksi bahwa benar untuk semua .   Langkah dasar: tunjukkan benar  Dalam kasus ini , dan memang merupakan produk dari entri diagonal .    Langkah induksi: tunjukkan untuk semua  Misalkan adalah matriks segitiga bawah. Maka untuk semua , dan dengan demikian determinan dari diberikan oleh . Klaim: segitiga bawah. Memang, pertama perhatikan bahwa kita memiliki untuk semua ; dengan menghapus baris pertama dan kolom pertama kita secara efektif menaikkan setiap indeks sebesar satu. Karena segitiga bawah kita memiliki untuk semua , dan dengan demikian juga untuk semua , membuktikan klaim.  Terakhir, dengan mengasumsikan benar (hipotesis induksi) kita memiliki , sebagaimana diinginkan.    "
},
{
  "id": "cor_det_identity",
  "level": "2",
  "url": "s_det.html#cor_det_identity",
  "type": "Corollary",
  "number": "2.4.6",
  "title": "Determinan Matriks Identitas.",
  "body": " Determinan Matriks Identitas   Misalkan adalah matriks identitas . Maka .    Ini mengikuti langsung dari karena entri diagonal dari semuanya satu.   "
},
{
  "id": "d_minors_expansions",
  "level": "2",
  "url": "s_det.html#d_minors_expansions",
  "type": "Definition",
  "number": "2.4.7",
  "title": "Minor dan Ekspansi Sepanjang Baris\/Kolom.",
  "body": " Minor dan Ekspansi Sepanjang Baris\/Kolom  minor matriks  ekspansi sepanjang baris\/kolom    minor ke- dari sebuah matriks    Diberikan matriks  , untuk sembarang pasangan  minor ke- dari didefinisikan sebagai .  Untuk sembarang ekspresi disebut ekspansi sepanjang baris ke- dari .  Untuk sembarang , ekspresi disebut ekspansi sepanjang kolom ke- dari .   "
},
{
  "id": "th_expansion_row",
  "level": "2",
  "url": "s_det.html#th_expansion_row",
  "type": "Theorem",
  "number": "2.4.8",
  "title": "Ekspansi Sepanjang Baris.",
  "body": " Ekspansi Sepanjang Baris   Misalkan . Untuk sembarang kita memiliki . Dengan kata lain, kita dapat menghitung dengan mengekspansi sepanjang sembarang baris dari .    Pembuktian dilakukan dengan induksi pada ukuran matriks.   Langkah dasar:  Untuk tidak ada yang perlu dibuktikan. Diberikan mengekspansi sepanjang sembarang baris menghasilkan , sebagaimana dapat diverifikasi dengan mudah.    Langkah induksi  Asumsikan klaim benar untuk sembarang matriks . Diberikan kita memiliki . Mengekspansi sepanjang baris ke- dari untuk sembarang , di sisi lain, kita mendapatkan . Untuk menunjukkan kedua ekspresi ini sama kita menggunakan hipotesis induksi untuk menghitung setiap dengan mengekspansi sepanjang baris ke- -nya: . Matriks adalah hasil dari pertama-tama menghapus baris 1 dan kolom dari , dan kemudian menghapus baris dan kolom dari matriks yang dihasilkan. Untuk menangani submatriks iteratif seperti ini, kita membuat beberapa observasi sederhana yang menghubungkan baris dan kolom dari dan dengan yang dari .   Baris ke- dari berkorespondensi dengan baris ke- dari , dan baris pertama dari berkorespondensi dengan baris pertama dari .    Jika , maka kolom ke- dari berkorespondensi dengan kolom ke- dari ; jika , maka kolom ke- dari berkorespondensi dengan kolom ke- dari .    Jika , maka kolom ke- dari berkorespondensi dengan kolom ke- dari ; jika , maka kolom ke- dari berkorespondensi dengan kolom ke- dari .   Dari observasi ini kita menurunkan tabel rumus berikut: . Kita sekarang mulai menguraikan : . Ini melengkapi langkah induksi, dan dengan demikian pembuktian selesai.    "
},
{
  "id": "th_det_transpose",
  "level": "2",
  "url": "s_det.html#th_det_transpose",
  "type": "Theorem",
  "number": "2.4.9",
  "title": "Determinan dan Transposisi.",
  "body": " Determinan dan Transposisi   Misalkan adalah matriks . Maka .    Pembuktian dilakukan dengan induksi pada . Kasus dasar ( ) trivial karena untuk sembarang matriks  .  Untuk induksi kita mengasumsikan bahwa untuk semua kita memiliki untuk sembarang matriks . Misalkan adalah matriks . Kita memiliki . Ini melengkapi pembuktian dengan induksi. (Perhatikan bagaimana dalam kesamaan kedua dalam rantai di atas kita menghitung dalam suku ke- dari dengan mengekspansi sepanjang baris ke- dari . Observasi serupa berlaku untuk kesamaan terakhir.)   "
},
{
  "id": "cor_expansion_columns",
  "level": "2",
  "url": "s_det.html#cor_expansion_columns",
  "type": "Corollary",
  "number": "2.4.10",
  "title": "Ekspansi Sepanjang Kolom.",
  "body": " Ekspansi Sepanjang Kolom   Misalkan . Untuk sembarang kita memiliki . Dengan kata lain, kita dapat menghitung dengan mengekspansi sepanjang sembarang baris dari .    Untuk sembarang , kita memiliki .   "
},
{
  "id": "ss_expansion_rows_columns-8",
  "level": "2",
  "url": "s_det.html#ss_expansion_rows_columns-8",
  "type": "Example",
  "number": "2.4.11",
  "title": "",
  "body": "  Hitung untuk .    Pertama kita menghitung dengan mengekspansi sepanjang baris kedua. Satu-satunya suku tak-nol dari ekspansi ini adalah yang terakhir, menghasilkan . Kita memiliki . Untuk menghitung determinannya kita mengekspansi sepanjang kolom ketiganya: . Kita menyimpulkan bahwa .   "
},
{
  "id": "rm_sign_matrix",
  "level": "2",
  "url": "s_det.html#rm_sign_matrix",
  "type": "Remark",
  "number": "2.4.12",
  "title": "Matriks Tanda.",
  "body": " Matriks Tanda   Ketika mengekspansi sepanjang baris atau kolom, mudah tersandung oleh tanda di depan koefisien ke- . Sebuah matriks tanda adalah semacam alat mnemonik untuk membantu Anda dalam hal ini. Ini mudah dihasilkan dengan mengamati bahwa tanda di depan entri ke- selalu (karena ), dan bahwa sembarang langkah horizontal atau vertikal dalam matriks disertai dengan perubahan tanda. Sebagai contoh, untuk kita memiliki matriks tanda berikut: .   "
},
{
  "id": "fig_vid_det",
  "level": "2",
  "url": "s_det.html#fig_vid_det",
  "type": "Figure",
  "number": "2.4.13",
  "title": "Video: determinan",
  "body": " Video: determinan  Video: determinan   "
},
{
  "id": "th_det_zero_repeated_row",
  "level": "2",
  "url": "s_det.html#th_det_zero_repeated_row",
  "type": "Theorem",
  "number": "2.4.14",
  "title": "Baris\/Kolom Nol, Penukaran Baris\/Kolom, Baris\/Kolom Identik.",
  "body": " Baris\/Kolom Nol, Penukaran Baris\/Kolom, Baris\/Kolom Identik   Misalkan adalah matriks .   Jika memiliki baris nol atau kolom nol, maka     Asumsikan . Misalkan adalah matriks yang diperoleh dengan menukar dua baris (atau dua kolom) dari . Maka .    Asumsikan . Jika memiliki dua baris identik atau dua kolom identik, maka .       Pernyataan pertama jelas karena menurut dan kita dapat menghitung determinan dengan mengekspansi sepanjang baris nol atau kolom nol yang dimaksud.  Pernyataan ketiga mengikuti dari yang kedua. Memang, jika memiliki dua baris atau kolom identik, maka matriks yang diperoleh dari dengan menukar baris (atau kolom) yang dimaksud adalah itu sendiri. Dengan demikian menurut pernyataan kedua, dan kita menyimpulkan bahwa .  Tinggal hanya menunjukkan pernyataan kedua. Kita hanya membuktikan pernyataan mengenai penukaran baris; pernyataan yang sesuai tentang kolom mengikuti dari . Pembuktian dilakukan dengan induksi.   Langkah dasar:  Misalkan . Maka , dan .    Langkah induksi  Kita mengasumsikan dengan induksi bahwa hasil berlaku untuk sembarang matriks , , dan menunjukkan hal yang sama benar untuk sembarang matriks .  Misalkan adalah matriks , dan misalkan adalah hasil dari menukar baris ke- dan ke- dari . Kita menghitung determinan dari dan dengan mengekspansi sepanjang baris ke- , dimana dan . Ini dimungkinkan karena .  Bergerak sepanjang baris ke- , perhatikan bahwa setiap submatriks adalah hasil dari menukar dua baris dari yang semula berkorespondensi dengan baris ke- dan ke- dari . Karena submatriks ini berdimensi , kita memiliki menurut induksi. Terakhir, karena baris ke- dari dan sama kita memiliki .    "
},
{
  "id": "d_adjoint",
  "level": "2",
  "url": "s_det.html#d_adjoint",
  "type": "Definition",
  "number": "2.4.15",
  "title": "Matriks Adjoin.",
  "body": " Matriks Adjoin  matriks adjoin    adjoin dari matriks persegi    Misalkan adalah matriks . Matriks adjoin dari , dilambangkan , adalah matriks yang entri ke- -nya didefinisikan sebagai berikut: .   "
},
{
  "id": "rm_adjoint",
  "level": "2",
  "url": "s_det.html#rm_adjoint",
  "type": "Remark",
  "number": "2.4.16",
  "title": "",
  "body": "  Berhati-hatilah dengan pembalikan urutan dalam definisi ini. Entri ke- dari sama dengan plus atau minus minor ke- dari . Mari kita lihat ini dalam aksi untuk beberapa matriks kecil.  Untuk kita memiliki .  Untuk kita memiliki .   "
},
{
  "id": "th_adjoint",
  "level": "2",
  "url": "s_det.html#th_adjoint",
  "type": "Theorem",
  "number": "2.4.17",
  "title": "Rumus Matriks Adjoin.",
  "body": " Rumus Matriks Adjoin   Diberikan matriks  , kita memiliki . Sebagai konsekuensi, jika , maka invertibel dan .    Pertama perhatikan bahwa pernyataan kedua mengenai invertibilitas mengikuti langsung dari , karena dalam kasus ini menetapkan kita memiliki .  Dengan demikian cukup membuktikan . Untuk melakukannya, kita harus menunjukkan bahwa .   Kasus:  Dalam kasus ini kita memiliki . Argumen serupa menunjukkan bahwa , meskipun dalam kasus ini kita menggunakan ekspansi sepanjang kolom.    Kasus:  Ketika kita memiliki , dimana adalah matriks yang diperoleh dengan mengganti baris ke- dari dengan salinan baris ke- -nya. Karena memiliki dua baris identik mengimplikasikan , sebagaimana diinginkan. Sekali lagi, argumen serupa menggunakan ekspansi sepanjang kolom menunjukkan bahwa .    "
},
{
  "id": "ss_expansion_rows_columns-17",
  "level": "2",
  "url": "s_det.html#ss_expansion_rows_columns-17",
  "type": "Example",
  "number": "2.4.18",
  "title": "",
  "body": "  Gunakan rumus matriks adjoin untuk menghitung , dimana .    Pertama hitung dengan mengekspansi sepanjang baris ketiga: . Selanjutnya, hitung . Maka kita memiliki .   "
},
{
  "id": "rm_adjoint_form",
  "level": "2",
  "url": "s_det.html#rm_adjoint_form",
  "type": "Remark",
  "number": "2.4.19",
  "title": "",
  "body": "  Sebelum Anda terlalu bersemangat tentang rumus matriks adjoin, Anda harus tahu bahwa seiring bertambah, prosedur ini menjadi jauh lebih mahal dalam terms jumlah operasi aritmetika yang terlibat dibandingkan algoritma invers kita berdasarkan eliminasi Gauss-Jordan. Anda mendapatkan gambaran tentang ini sudah dari contoh sebelumnya. Secara umum, algoritma invers Gauss-Jordan adalah cara yang tepat.   "
},
{
  "id": "th_det_row_ops",
  "level": "2",
  "url": "s_det.html#th_det_row_ops",
  "type": "Theorem",
  "number": "2.4.20",
  "title": "Operasi Baris dan Determinan.",
  "body": " Operasi Baris dan Determinan   Misalkan adalah matriks . Menggunakan notasi dari kita memiliki:              .   Secara khusus, mengambil , kita memiliki .    Pernyataan pertama mengikuti dengan mudah dengan menghitung dengan mengekspansi sepanjang baris ke- . Pernyataan kedua sebenarnya adalah penyataan ulang dari pernyataan kedua . Tinggal membuktikan pernyataan ketiga.  Misalkan , dan tetapkan . Maka identik dengan dengan pengecualian baris ke- , yang entri ke- -nya adalah . Dengan demikian , dimana adalah matriks yang diperoleh dengan mengganti baris ke- dari dengan baris yang identik dengan baris ke- -nya. Menurut kita menyimpulkan , dan dengan demikian , sebagaimana diinginkan.   "
},
{
  "id": "rm_det_row_ops",
  "level": "2",
  "url": "s_det.html#rm_det_row_ops",
  "type": "Remark",
  "number": "2.4.21",
  "title": "",
  "body": "  Dalam bahasa operasi baris, diterjemahkan sebagai berikut:   Menskalakan baris matriks dengan memiliki efek menskalakan determinan dengan .    Menukar dua baris matriks mengubah tanda determinan.    Melakukan operasi penjumlahan baris pada matriks tidak memiliki efek pada determinan.      "
},
{
  "id": "rm_det_col_ops",
  "level": "2",
  "url": "s_det.html#rm_det_col_ops",
  "type": "Remark",
  "number": "2.4.22",
  "title": "Operasi Kolom dan Determinan.",
  "body": " Operasi Kolom dan Determinan   Sebagaimana ditunjukkan dalam determinan berperilaku dengan cara serupa terhadap operasi kolom elementer : , menskalakan kolom dengan konstanta tak-nol menskalakan determinan dengan , menukar kolom mengalikan determinan dengan , menambahkan kelipatan satu kolom ke kolom lain membiarkan determinan tidak berubah.   "
},
{
  "id": "cor_det_prod_elem",
  "level": "2",
  "url": "s_det.html#cor_det_prod_elem",
  "type": "Corollary",
  "number": "2.4.23",
  "title": "Determinan dan Produk Matriks Elementer.",
  "body": " Determinan dan Produk Matriks Elementer   Misalkan adalah matriks , dan misalkan kita memiliki untuk sembarang koleksi matriks elementer . Maka .    Ini adalah pembuktian mudah dengan induksi pada jumlah matriks elementer yang terlibat, kasus dasar ( ) yang dibahas oleh .   "
},
{
  "id": "ss_det_row_ops-9",
  "level": "2",
  "url": "s_det.html#ss_det_row_ops-9",
  "type": "Example",
  "number": "2.4.24",
  "title": "Determinan melalui Reduksi Baris.",
  "body": " Determinan melalui Reduksi Baris   Misalkan matriks dapat direduksi baris menjadi dengan melakukan urutan operasi baris berikut:   Pertama tukar baris kedua dan ketiga.    Kemudian skalakan baris pertama dengan     Kemudian ganti baris kedua dengan baris kedua ditambah baris pertama.   Hitung .    Dalam terms matriks elementer kita memiliki , dan dengan demikian . Kita menyimpulkan bahwa .   "
},
{
  "id": "th_inv_iff_det",
  "level": "2",
  "url": "s_det.html#th_inv_iff_det",
  "type": "Theorem",
  "number": "2.4.25",
  "title": "Determinan dan Invertibilitas.",
  "body": " Determinan dan Invertibilitas   Misalkan adalah matriks . Maka invertibel jika dan hanya jika .    Implikasi dibuktikan dalam .  Untuk arah sebaliknya, asumsikan invertibel. Maka mengimplikasikan adalah produk dari matriks elementer: . Maka mengimplikasikan . Karena untuk semua ( ), kita menyimpulkan .   "
},
{
  "id": "th_det_mult",
  "level": "2",
  "url": "s_det.html#th_det_mult",
  "type": "Theorem",
  "number": "2.4.26",
  "title": "Determinan Bersifat Multiplikatif.",
  "body": " Determinan Bersifat Multiplikatif   Misalkan dan adalah matriks . Maka .    Kita pertimbangkan dua kasus berdasarkan invertibilitas dari dan\/atau .   atau tidak invertibel  Dalam kasus ini tidak invertibel ( ), dan dengan demikian menurut . Dengan penalaran yang sama kita harus memiliki atau . Dengan demikian dalam kasus ini.    dan keduanya invertibel  Dalam kasus ini kita dapat menulis untuk sembarang matriks elementer dan ( ). Maka .    "
},
{
  "id": "th_invertibility_expanded",
  "level": "2",
  "url": "s_det.html#th_invertibility_expanded",
  "type": "Theorem",
  "number": "2.4.27",
  "title": "Teorema Invertibilitas (Edisi Diperluas).",
  "body": " Teorema Invertibilitas (Edisi Diperluas)   Misalkan adalah matriks . Pernyataan-pernyataan berikut ekuivalen.     invertibel.    Persamaan matriks memiliki solusi tunggal untuk sembarang vektor kolom .    Persamaan matriks memiliki solusi untuk sembarang vektor kolom .    Persamaan matriks memiliki solusi tunggal : yaitu, .     ekuivalen baris dengan , matriks identitas .     adalah produk dari matriks elementer.     .     "
},
{
  "id": "s_det_ex-1-2",
  "level": "2",
  "url": "s_det.html#s_det_ex-1-2",
  "type": "Exercise",
  "number": "2.4.4.1",
  "title": "",
  "body": "    Use the appropriate property of determinants to find  Do not evaluate the determinants. Answer:             "
},
{
  "id": "s_det_ex-1-3",
  "level": "2",
  "url": "s_det.html#s_det_ex-1-3",
  "type": "Exercise",
  "number": "2.4.4.2",
  "title": "",
  "body": "    Consider the following Gauss elimination:   What is the determinant of ?              "
},
{
  "id": "s_det_ex-1-4",
  "level": "2",
  "url": "s_det.html#s_det_ex-1-4",
  "type": "Exercise",
  "number": "2.4.4.3",
  "title": "",
  "body": "    Find such that the following matrix is singular.              "
},
{
  "id": "s_det_ex-1-5",
  "level": "2",
  "url": "s_det.html#s_det_ex-1-5",
  "type": "Exercise",
  "number": "2.4.4.4",
  "title": "",
  "body": "    If and are matrices, , , then   ,   ,   ,   ,   .                                "
},
{
  "id": "s_det_ex-2-2",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-2",
  "type": "Exercise",
  "number": "2.4.4.5",
  "title": "",
  "body": "  Misalkan    Hitung dengan mengekspansi sepanjang baris kedua.    Hitung dengan mengekspansi sepanjang kolom ketiga.      "
},
{
  "id": "s_det_ex-2-3-3",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-3-3",
  "type": "Exercise",
  "number": "2.4.4.6",
  "title": "",
  "body": "      "
},
{
  "id": "s_det_ex-2-3-4",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-3-4",
  "type": "Exercise",
  "number": "2.4.4.7",
  "title": "",
  "body": "      "
},
{
  "id": "s_det_ex-2-3-5",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-3-5",
  "type": "Exercise",
  "number": "2.4.4.8",
  "title": "",
  "body": "      "
},
{
  "id": "s_det_ex-2-4-3",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-4-3",
  "type": "Exercise",
  "number": "2.4.4.9",
  "title": "",
  "body": "      "
},
{
  "id": "s_det_ex-2-4-4",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-4-4",
  "type": "Exercise",
  "number": "2.4.4.10",
  "title": "",
  "body": "      "
},
{
  "id": "s_det_ex-2-4-5",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-4-5",
  "type": "Exercise",
  "number": "2.4.4.11",
  "title": "",
  "body": "      "
},
{
  "id": "s_det_ex-2-4-6",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-4-6",
  "type": "Exercise",
  "number": "2.4.4.12",
  "title": "",
  "body": "      "
},
{
  "id": "s_det_ex-2-5-3",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-5-3",
  "type": "Exercise",
  "number": "2.4.4.13",
  "title": "",
  "body": "      "
},
{
  "id": "s_det_ex-2-5-4",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-5-4",
  "type": "Exercise",
  "number": "2.4.4.14",
  "title": "",
  "body": "      "
},
{
  "id": "s_det_ex-2-6",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-6",
  "type": "Exercise",
  "number": "2.4.4.15",
  "title": "",
  "body": "  Misalkan . Tunjukkan tanpa menghitung determinan secara langsung. Dengan kata lain, gunakan teknik reduksi baris atau .   "
},
{
  "id": "s_det_ex-2-7",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-7",
  "type": "Exercise",
  "number": "2.4.4.16",
  "title": "",
  "body": "  Misalkan adalah matriks , dan misalkan adalah skalar. Nyatakan dan buktikan rumus yang menghubungkan dengan .   "
},
{
  "id": "s_det_ex-2-8",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-8",
  "type": "Exercise",
  "number": "2.4.4.17",
  "title": "",
  "body": "  Asumsikan adalah matriks yang memenuhi . Hitung determinan dari matriks yang diberikan.                         "
},
{
  "id": "s_det_ex-2-9",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-9",
  "type": "Exercise",
  "number": "2.4.4.18",
  "title": "",
  "body": "  Misalkan dan adalah matriks , dan misalkan invertibel. Buktikan pernyataan berikut:     .     .     "
},
{
  "id": "s_det_ex-2-10",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-10",
  "type": "Exercise",
  "number": "2.4.4.19",
  "title": "",
  "body": "  Asumsikan matriks persegi memenuhi . Tunjukkan bahwa .   "
},
{
  "id": "s_det_ex-2-11",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-11",
  "type": "Exercise",
  "number": "2.4.4.20",
  "title": "",
  "body": "  Buktikan bahwa matriks persegi invertibel jika dan hanya jika invertibel.   "
},
{
  "id": "s_det_ex-2-12-3",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-12-3",
  "type": "Exercise",
  "number": "2.4.4.21",
  "title": "",
  "body": "  Berikan contoh eksplisit matriks persegi yang memenuhi dan .  Dengan kata lain, tunjukkan bahwa dimungkinkan bagi matriks tak-nol untuk memiliki matriks adjoin nol.   "
},
{
  "id": "s_det_ex-2-12-4",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-12-4",
  "type": "Exercise",
  "number": "2.4.4.22",
  "title": "",
  "body": "  Misalkan adalah matriks . Buktikan: .   "
},
{
  "id": "s_det_ex-2-12-5",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-12-5",
  "type": "Exercise",
  "number": "2.4.4.23",
  "title": "",
  "body": "  Buktikan: invertibel jika dan hanya jika invertibel.   "
},
{
  "id": "s_det_ex-2-12-6",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-12-6",
  "type": "Exercise",
  "number": "2.4.4.24",
  "title": "",
  "body": "  Asumsikan invertibel. Buktikan: .   "
},
{
  "id": "s_det_ex-2-13",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-13",
  "type": "Exercise",
  "number": "2.4.4.25",
  "title": "",
  "body": "  Dalam pembuktian pernyataan (2) dari kita hanya menunjukkan bahwa jika adalah matriks persegi dengan dua baris identik, maka . Dengan mengasumsikan ini, tunjukkan bahwa hal yang sama berlaku jika memiliki dua kolom identik.   "
},
{
  "id": "ex_det_col_ops",
  "level": "2",
  "url": "s_det.html#ex_det_col_ops",
  "type": "Exercise",
  "number": "2.4.4.26",
  "title": "",
  "body": "  Nyatakan dan buktikan analogi dari yang mendeskripsikan bagaimana operasi kolom yang bersesuaian (yaitu, skalakan kolom dengan , tukar dua kolom, penjumlahan kolom) memengaruhi determinan sebuah matriks. (Lihat ).    Nyatakan setiap jenis operasi kolom ini sebagai perkalian di kanan dengan matriks elementer.   "
},
{
  "id": "s_det_ex-2-15",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-15",
  "type": "Exercise",
  "number": "2.4.4.27",
  "title": "",
  "body": "  Misalkan adalah matriks dengan sepanjang diagonal dan di tempat lainnya: yaitu, . Nyatakan dan buktikan rumus untuk . (Rumus Anda akan melibatkan , , dan .)  Lihat kasus dan terlebih dahulu. Untuk membuktikan rumus dalam kasus umum Anda mungkin ingin menggunakan reduksi baris dan .   "
},
{
  "id": "s_det_ex-2-16",
  "level": "2",
  "url": "s_det.html#s_det_ex-2-16",
  "type": "Exercise",
  "number": "2.4.4.28",
  "title": "",
  "body": "  Diberikan skalar matriks Vandermonde didefinisikan sebagai . Dengan kata lain, kita memiliki Buktikan: .   "
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
