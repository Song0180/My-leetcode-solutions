/**
 * The plane has N rows of seats, numbered from 1 to N. there are ten seats in each row labelled from A to K
 * Write a function:
 *
 * function solution(N, S);
 *
 * that, given the number of rows N and a list of reserved seats as srting S,
 * returns the maximum number of four-person families that can be seated in the remaining unreserved seats.
 *
 * for instance, given N = 2 and S = "1A 2F 1C", the function should return 2.
 */
function solution(N, S) {
  // write your code in JavaScript (Node.js 8.9.4)

  const rows = {};
  seats = [];
  if (S.length > 0) {
    seats = S.split(' ');

    for (let i = 0; i < seats.length; i++) {
      const row = seats[i].slice(0, seats[i].length - 1);
      const col = seats[i].slice(seats[i].length - 1);
      if (rows[row]) {
        rows[row].push(col);
      } else {
        rows[row] = [col];
      }
    }
  }

  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (rows[i]) {
      const row = rows[i];
      if (
        !row.includes('A') &&
        !row.includes('B') &&
        !row.includes('C') &&
        !row.includes('D')
      ) {
        count++;
      }
      if (
        !row.includes('D') &&
        !row.includes('E') &&
        !row.includes('F') &&
        !row.includes('G')
      ) {
        count++;
      }
      if (
        !row.includes('G') &&
        !row.includes('H') &&
        !row.includes('J') &&
        !row.includes('K')
      ) {
        count++;
      }
    } else {
      count += 3;
    }
  }
  return count;
}
