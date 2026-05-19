function differentiate(equation, point){
  const equationArray = equation.split(/(?=[+-])/).filter(item => item.includes('x'))
    .map(item => {
      if (!item.includes('^')) {
        item = item.replace('x', '');
        
        if (!/\d/.test(item)) return Number(item += '1');
        
        return Number(item)
      } else {
        item = item.split('x^').map(item => {
          if (!/\d/.test(item)) return Number(item += '1');
          
          return Number(item);
        })
        return item[0] * item[1] * (point ** (item[1] - 1)); 
      }
    })
  return equationArray.reduce((acc, cur) => acc + cur, 0);
}