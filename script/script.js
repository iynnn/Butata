const listQuotes = [
  {
    bahasa: "Indonesia",
    quote: "Hidup adalah seni menggambar tanpa penghapus.",
    author: "John W. Gardner",
  },
  {
    bahasa: "Indonesia",
    quote:
      "Sukses adalah kemampuan untuk melangkah dari satu kegagalan ke kegagalan berikutnya tanpa kehilangan antusiasme.",
    author: "Winston Churchill",
  },
  {
    bahasa: "Indonesia",
    quote:
      "Pendidikan adalah senjata paling ampuh yang bisa Anda gunakan untuk mengubah dunia.",
    author: "Nelson Mandela",
  },
  {
    bahasa: "Indonesia",
    quote:
      "Perubahan tidak akan datang jika kita menunggu orang lain atau waktu lain. Kitalah yang kita tunggu. Kitalah perubahan yang kita cari.",
    author: "Barack Obama",
  },
  {
    bahasa: "Indonesia",
    quote:
      "Bermimpilah setinggi langit. Jika kamu jatuh, kamu akan jatuh di antara bintang-bintang.",
    author: "Soekarno",
  },
  {
    bahasa: "Indonesia",
    quote:
      "Kesalahan adalah guru terbaik jika kamu bersedia untuk belajar darinya.",
    author: "Bill Gates",
  },
  {
    bahasa: "Indonesia",
    quote:
      "Keberanian bukanlah tidak adanya rasa takut, tetapi kemampuan untuk mengatasinya.",
    author: "Mark Twain",
  },
  {
    bahasa: "Indonesia",
    quote:
      "Kebahagiaan bukanlah sesuatu yang sudah jadi. Itu berasal dari tindakan Anda sendiri.",
    author: "Dalai Lama",
  },
  {
    bahasa: "Indonesia",
    quote:
      "Waktu Anda terbatas, jadi jangan sia-siakan dengan menjalani hidup orang lain.",
    author: "Steve Jobs",
  },
  {
    bahasa: "Indonesia",
    quote:
      "Hidup itu seperti naik sepeda. Untuk menjaga keseimbanganmu, kamu harus terus bergerak.",
    author: "Albert Einstein",
  },
  {
    bahasa: "Inggris",
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    bahasa: "Inggris",
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    bahasa: "Inggris",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    bahasa: "Inggris",
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    bahasa: "Inggris",
    quote:
      "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    bahasa: "Inggris",
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    bahasa: "Inggris",
    quote:
      "Do not wait to strike till the iron is hot, but make it hot by striking.",
    author: "William Butler Yeats",
  },
  {
    bahasa: "Inggris",
    quote: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    bahasa: "Inggris",
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    bahasa: "Inggris",
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
];

function changeQuote() {
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");

  const angkaRandom = Math.floor(Math.random() * listQuotes.length);

  // Tampilkan kutipan dan penulis
  quote.innerHTML = `<i>"${listQuotes[angkaRandom].quote}</i>"`;
  author.textContent = listQuotes[angkaRandom].author;
}

// Panggil Fungsi setiap  1 menit (60 detik atau 60000 ms)
setInterval(changeQuote, 60000);

// Panggil sekali di awal untuk menampilkan kutipan pertama
changeQuote();

// Add Calender Today

// Array for the Day
const namaHari = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];
const namaBulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

// Fungsi Menampilkan tanggal hari ini

function updateTanggalHariIni() {
  const today = new Date();
  const hari = namaHari[today.getDay()]; // mendapatkan nama hari
  const tanggal = today.getDate(); //mendapatkan tanggal
  const bulan = namaBulan[today.getMonth()]; // mendapatkan nama bulan ini
  const tahun = today.getFullYear();

  // Format hari dan tanggal
  const hasil = `${hari}, ${tanggal} ${bulan} ${tahun}`;

  // Masukkan ke dalam div nya
  const tanggalHariIniDiv = document.getElementById("tanggalHariIni");
  tanggalHariIniDiv.textContent = hasil;

  //Hitung waktu hingga jam 00.00 besok
  const now = new Date();
  const besok = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  besok.setHours(0, 0, 0, 0); // pastikan waktu diatur ke tengah malam

  // cek apakah objek besok valid?
  if (isNaN(besok)) {
    console.log("Tanggal besok tidak valid");
    return;
  }
  const waktuTersisa = besok - now;

  // Cek apakah waktu tersisa valid
  if (isNaN(waktuTersisa)) {
    console.error("Perhitungan waktu tersisa tidak valid");
    return;
  }

  //   console.log(`waktu tersisa ${waktuTersisa}`);

  // Jadwalkan pembaruan berikutnya
  setTimeout(updateTanggalHariIni, waktuTersisa);
}

//Panggil fungsi untuk menampilkan tanggal saat halaman dibuat
updateTanggalHariIni();
