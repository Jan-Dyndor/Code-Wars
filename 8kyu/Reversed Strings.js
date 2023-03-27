// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//My solution
//str = h,e,l,l,o,  , w,o,r,l,d, to pobiera
function solution1(str) {
  const newStr = [...str]; // Spread operator - oddziela elementy tablicy przecinkami (11) ['h', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'] bierze nawet przerwe między nimi
  console.log(newStr);
  newStr.reverse(); // odwracamy tablice
  const arr = newStr.join(""); //łaczymy tablice w stringa, kady element jest łaczony z każdym. Nie potrzeba nam tu patrzeć i wgl myśleć o przerwach między stringiem bo metoda SPREAD pobiera ze stringa przerwe jako element wiec string jest łączony bez niczego i dostawiana jest po prostu przerwa
  return arr;
}

//Different solutions
function solution2(str) {
  return str.split("").reverse().join("");
}

//
function solution3(s) {
  var o = "";
  for (var i = s.length - 1; i >= 0; i--) o += s[i];
  return o;
}

solution1("hello World");
