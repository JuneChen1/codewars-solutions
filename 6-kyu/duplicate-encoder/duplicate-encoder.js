function duplicateEncode(word){
  word = word.toLowerCase();
  
  return word.split('')
    .map(w => word.indexOf(w) === word.lastIndexOf(w) ? '(' : ')')
    .join('');
}