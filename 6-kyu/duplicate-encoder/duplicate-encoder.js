function duplicateEncode(word){
  const overlap = {};
  const words = word.toLowerCase().split('');
  
  words.forEach(w => {
    if (overlap[w] === undefined) {
      overlap[w] = false;
    } else {
      overlap[w] = true;
    }
  })
  
  return words.map(w => overlap[w] ? ')' : '(').join('');
}