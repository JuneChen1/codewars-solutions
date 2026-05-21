function inArray(array1,array2){
  array1 = array1.filter(str1 => array2.some(str2 => str2.includes(str1)));
  return array1.sort();
}