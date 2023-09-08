function changeWord(selectedText, changedText, text) {
  // Gunakan method replace() untuk mengganti kata yang sesuai dalam kalimat.
  // Method ini akan mengganti semua kemunculan kata yang sesuai.
  var newText = text.replace(selectedText, changedText);

  return newText;
}

// penggunaan function changeWord:
var text = "Saya suka kucing ini.";
var selectedText = "suka";
var changedText = "sayang";

var kalimatBaru = changeWord(selectedText, changedText, text);
console.log(kalimatBaru);
