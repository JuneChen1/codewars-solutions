function firstNonRepeatingLetter(s) {
  const targerLetter = s.split('')
    .find(letter => {
      const sLowerCase = s.toLowerCase();
      letter = letter.toLowerCase();
      
      return sLowerCase.indexOf(letter) === sLowerCase.lastIndexOf(letter);
    });
  
  return targerLetter || ''
}