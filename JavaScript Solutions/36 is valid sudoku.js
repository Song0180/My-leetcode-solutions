var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    // use set to check duplicates
    let row = new Set(),
      col = new Set(),
      box = new Set();

    for (let j = 0; j < 9; j++) {
      // checking row, col, and box in the same iteration
      let _row = board[i][j];
      let _col = board[j][i];
      // most tricky part
      // box[vertical][horizontal]
      // vertical: decided by i and j
      // (when i = 0,1,2:  3 boxes in the first 'row')
      // (when i = 3,4,5:  3 boxes in the second 'row')
      // (when i = 6,7,8:  3 boxes in the third 'row')
      // 3 * Math.floor(i / 3) + Math.floor(j / 3):
      // 3 * Math.floor(i / 3):   decides the vertical position of the starting point in the box
      // Math.floor(j / 3):       decides which row currently iterating in that box
      // horizontal will iterate each item horizontally in the box (i.e. first row in the box, second...third...)
      // 3 * (i % 3) + (j % 3);
      // 3 * (i % 3):             decides the horizontal shift of the starting point in the box
      // (j % 3):                 decides which col currently iterating in that box
      let _box =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (_row != '.') {
        // duplicates found
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col != '.') {
        if (col.has(_col)) return false;
        col.add(_col);
      }

      if (_box != '.') {
        if (box.has(_box)) return false;
        box.add(_box);
      }
    }
  }
  return true;
};
