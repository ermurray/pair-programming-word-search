// pair programmed with Micheal Antone
const wordSearch = (letters, word) => {
  if (letters.length > 0 && word !== undefined) {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const trLetters = transpose(letters);
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
module.exports = wordSearch;