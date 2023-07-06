// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// function DNAtoRNA(dna) {
//   const arr = [...dna];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "T") {
//       arr[i] = "U";
//     }
//   }
//   arr.join("");
//   return arr;
// }

function DNAtoRNA(dna) {
  const arr = [...dna];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "T") {
      arr[i] = "U";
    }
  }

  const string = arr.join("");
  return string;
}

console.log(DNAtoRNA("ABTT"));
///
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}
