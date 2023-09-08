function getAngkaTerbesarKedua(dataNumbers) {
  // Validasi parameter
  if (!Array.isArray(dataNumbers) || dataNumbers.length < 2) {
    throw new Error('Parameter harus berupa array dengan minimal dua angka.');
  }

  // Menghapus angka terbesar pertama dari array
  const angkaTerbesarPertama = Math.max(...dataNumbers);
  const dataNumbersTanpaTerbesarPertama = dataNumbers.filter(num => num !== angkaTerbesarPertama);

  // Menggunakan Math.max untuk mendapatkan angka terbesar kedua
  const angkaTerbesarKedua = Math.max(...dataNumbersTanpaTerbesarPertama);

  return angkaTerbesarKedua;
}

const arrayAngka = [2, 3, 5, 6, 6, 4];
const angkaTerbesarKedua = getAngkaTerbesarKedua(arrayAngka);
console.log(angkaTerbesarKedua);
