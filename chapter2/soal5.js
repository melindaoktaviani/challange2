function getInfoPenjualan(dataPenjualan) {
  // Validasi parameter
  if (!Array.isArray(dataPenjualan)) {
    return "Parameter harus berupa array";
  }

  if (dataPenjualan.length === 0) {
    return "Data penjualan kosong";
  }

  // Inisialisasi variabel untuk menyimpan informasi penjualan
  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkBukuTerlaris = "";
  let penulisTerlaris = "";
  let bukuTerlarisJumlah = 0;

  // Membuat objek untuk menghitung penjualan per penulis
  const penulisCount = {};

  // Iterasi melalui data penjualan
  dataPenjualan.forEach((penjualan) => {
    // Validasi tipe data objek dalam array
    if (typeof penjualan !== "object" || !penjualan.hasOwnProperty("judul") || !penjualan.hasOwnProperty("penulis") || !penjualan.hasOwnProperty("modal") || !penjualan.hasOwnProperty("harga")) {
      return "Data penjualan tidak valid";
    }

    const { judul, penulis, modal, harga } = penjualan;

    // Menghitung total modal dan total keuntungan
    totalModal += modal;
    totalKeuntungan += (harga - modal);

    // Menghitung penjualan per penulis
    if (penulisCount[penulis]) {
      penulisCount[penulis] += 1;
    } else {
      penulisCount[penulis] = 1;
    }

    // Memeriksa apakah buku ini lebih terlaris
    if (penulisCount[penulis] > bukuTerlarisJumlah) {
      bukuTerlarisJumlah = penulisCount[penulis];
      produkBukuTerlaris = judul;
      penulisTerlaris = penulis;
    }
  });

  // Menghitung persentase keuntungan
  const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  // Membuat objek dengan informasi yang dihasilkan
  const informasiPenjualan = {
    totalKeuntungan,
    totalModal,
    produkBukuTerlaris,
    penulisTerlaris,
    persentaseKeuntungan
  };

  return informasiPenjualan;
}

// Data penjualan
const dataPenjualan = [
  {
    judul: "Buku A",
    penulis: "Penulis X",
    modal: 50,
    harga: 100
  },
  {
    judul: "Buku B",
    penulis: "Penulis Y",
    modal: 40,
    harga: 120
  },
  {
    judul: "Buku C",
    penulis: "Penulis X",
    modal: 60,
    harga: 130
  }
];

const hasilInformasi = getInfoPenjualan(dataPenjualan);
console.log(hasilInformasi);
