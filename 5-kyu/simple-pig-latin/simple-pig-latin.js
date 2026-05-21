function pigIt(str){
  const result = str.split(' ').map(item => {
    if (/[^a-zA-Z]/g.test(item)) {
      return item;
    }
    return item.slice(1) + item[0] + 'ay';
  });
  
  return result.join(' ');
}