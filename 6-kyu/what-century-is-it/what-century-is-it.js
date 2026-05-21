function whatCentury(year) {
  let century = Number(year.slice(0, 2));
  if (Number(year) % 100 !== 0) {
    century += 1;
  }
  
  if (century === 11 || century === 12 || century === 13) return `${century}th`;
  if (century % 10 === 1) return `${century}st`;
  if (century % 10 === 2) return `${century}nd`;
  if (century % 10 === 3) return `${century}rd`;
  
  return `${century}th`;
}