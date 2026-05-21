function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  
  let countN = 0;
  let countS = 0;
  let countE = 0;
  let countW = 0;
  
  walk.forEach(item => {
    if (item === 'n') {
      countN += 1;
    } else if (item === 's') {
      countS += 1;
    } else if (item === 'e') {
      countE += 1;
    } else {
      countW += 1;
    }
  })
  
  return countN === countS && countE === countW
}