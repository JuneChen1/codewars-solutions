function isInteresting(number, awesomePhrases) {
  if (isInterest(number, awesomePhrases)) {
    return 2;
  } else if (isInterest(number + 1, awesomePhrases) || isInterest(number + 2, awesomePhrases)) {
    return 1;
  } else {
    return 0;
  }
}
​
function isInterest(number, awesomePhrases) {
  if (number < 100) return false;
  if (awesomePhrases.includes(number)) return true;
  
  const str = number.toString();
  if (/^[1-9]0+$/.test(str)) return true;
  if (/^(\d)\1+$/.test(str)) return true;
  if ("1234567890".includes(str)) return true;
  if ("9876543210".includes(str)) return true;
  const reverse = str.split('').reverse().join('');
  if (str === reverse) return true;
}