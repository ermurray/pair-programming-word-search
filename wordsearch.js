// pair programmed with Micheal Antone
const wordSearch = (letters, word) => {
  if (letters.length > 0 && word !== undefined) {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const trLetters = transpose(letters);
    const rotate45Letters = rotate45(letters);
    const diagonalJoin = rotate45Letters.map(dl => dl.join(''));
    const verticalJoin = trLetters.map(cl => cl.join(''));
    const reverseWord = word.split('').reverse().join('');
    let result = false;
    for (const l of horizontalJoin) {
      if (l.includes(word) || l.includes(reverseWord)) {
        result = true;
      }
    }
    for (const c of verticalJoin) {
      if (c.includes(word)|| c.includes(reverseWord)) {
        result = true;
      }
    }
    for (const d of diagonalJoin) {
      if (d.includes(word) || d.includes(reverseWord))
        result = true;
    }
  
    return result;
  } else {
    return false;
  }
};

const transpose = function(matrix) {
  let newMatrix = [];
  let subArray = [];
  let rows = matrix.length;
  let columns = matrix[0].length;
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      subArray.push(matrix[j][i]);
      if (j === rows - 1) {
        newMatrix.push(subArray);
        subArray = [];
      }
    }
  }
  return newMatrix;
};
const rotate45 = function(matrix) {
  let n = matrix.length; //hieght
  let m = matrix[0].length; //width
  let max = Math.max(n,m);
  let subArray;
  let rotatedArray = [];
  for (let i = 0; i < 2 * max - 1; i++) { // loop for enough times to get all acceptable index combos. trial and error with m and n and 2 times m or n
    subArray = [];
    for (let j = (n - 1); j >= 0; j--) {
      let x = i - j;                      // got logic from stack overflow to create conditional of which index combos worked (how to traverse array diagonally)
      
      if (x >= 0 && x < m) {
        subArray.push(matrix[j][x]);
      }
    }
    if (subArray.length > 0) {
      rotatedArray.push(subArray);
    }
  }
  return rotatedArray;
};
module.exports = wordSearch;