function getTotalPenjualan(dataPenjualan) {
  // Validasi parameter
  if (!Array.isArray(dataPenjualan)) {
    throw new Error('Parameter harus berupa array');
  }

  let totalPenjualan = 0;

  // Iterasi melalui setiap objek dalam array dan menambahkan totalTerjual
  for (let i = 0; i < dataPenjualan.length; i++) {
    const produk = dataPenjualan[i];
    if (typeof produk === 'object' && 'totalTerjual' in produk) {
      const totalTerjual = produk.totalTerjual;
      if (typeof totalTerjual === 'number') {
        totalPenjualan += totalTerjual;
      }
    }
  }

  return totalPenjualan;
}

// Data penjualan
const dataPenjualan = [
  { namaProduk: 'Sepatu A', totalTerjual: 10 },
  { namaProduk: 'Sepatu B', totalTerjual: 15 },
  { namaProduk: 'Sepatu C', totalTerjual: 20 },
];

const totalPenjualan = getTotalPenjualan(dataPenjualan);
console.log('Total Penjualan:', totalPenjualan);
