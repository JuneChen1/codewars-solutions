const uniqueInOrder=function(iterable){
  const result = [];
  
  if (typeof iterable === 'string') {
    iterable = iterable.split('');
  }
  
  iterable.forEach(function(item, index, arr) {
    if (index === 0) {
      result.push(item);
    } else {
      if (item !== arr[index-1]) {
        result.push(item);
      }
    }
  })
  return result;
}