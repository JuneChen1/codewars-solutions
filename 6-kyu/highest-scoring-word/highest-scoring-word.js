function high(x){
  const score = x.split(' ').map(word => {
    let total = 0;
    word.split('').forEach(letter => {
      total += letter.charCodeAt() - 96;
    })
    return total;
  })
  
  return x.split(' ')[score.indexOf(Math.max(...score))];
}