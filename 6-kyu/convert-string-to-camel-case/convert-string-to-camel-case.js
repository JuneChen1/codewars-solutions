function toCamelCase(str){
  const result = str.replace(/[_-]/g, ' ').split(' ').map((word, index) => {
    if (index === 0) {
      return word
    }
    return word.charAt(0).toUpperCase() + word.slice(1)
  });
​
  return result.join('');
}