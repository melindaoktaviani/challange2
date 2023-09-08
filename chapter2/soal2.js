const checkTypeNumber = (givenNumber) => {
  // Validasi tipe data parameter
  if (typeof givenNumber !== 'number') {
    return 'Parameter harus berupa angka';
  }

  // Mengecek apakah angka genap atau ganjil
  if (givenNumber % 2 === 0) {
    return 'GENAP';
  } else {
    return 'GANJIL';
  }
};

// Menampilkan hasil genap ganjil
console.log(checkTypeNumber(2));
console.log(checkTypeNumber(1));

