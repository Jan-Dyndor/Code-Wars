function contamination(text, char) {
  if ((text.length = 0)) {
    return text;
  } else {
    const array = [...text];
    for (let i = 0; i < array.length; i++) {
      array[i] = char;
    }
    return array.join("");
  }
}

//
function contamination(text, char) {
  return char.repeat(text.length);
}
//
function contamination(text, char) {
  return text.replace(/./g, char);
}
