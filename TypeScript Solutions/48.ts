/**
 Do not return anything, modify matrix in-place instead.
 */
// time: O(n^2)
// space: O(n^2)
function rotate(matrix: number[][]): void {
  const tempCols: number[][] = [];

  for (let j = 0; j < matrix.length; j++) {
    const tempCol: number[] = [];
    for (let i = matrix.length - 1; i >= 0; i--) {
      tempCol.push(matrix[i][j]);
    }
    tempCols.push(tempCol);
  }

  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][j] = tempCols[i][j];
    }
  }
}

// another way to do it
// transpose the matrix and then reverse each row
// time: O(n^2)
// space: O(1)
function rotate2(matrix: number[][]): void {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
}
