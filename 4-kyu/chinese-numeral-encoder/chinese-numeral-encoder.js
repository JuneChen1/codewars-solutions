        return
      }
      
      result += numerals[n];
      
      if (n === 0) return
​
      if (digit === 4) {
        result += numerals[10000];
      } else if (digit === 3) {
        result += numerals[1000];
      } else if (digit === 2) {
        result += numerals[100];
      } else if (digit === 1) {
        result += numerals[10];
      }
    });
  }
  
  if (decimal) {
    result += numerals["."];
    decimal.split('').forEach(n => result += numerals[n]);
  }
  
  return result;
}