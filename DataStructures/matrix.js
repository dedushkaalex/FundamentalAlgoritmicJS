// Matrix structure:
//
// #      0  1  2 столбцы
//
// 0   [ [1, 2, 3], строки
// 1     [4, 5, 6],
// 2     [7, 8, 9] ]
// 
function logEachMatrixItem(matrix) {
  console.log('\nLog each matrix item:');

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(`  item {${i}, ${j}} - ${matrix[i][j]}`);
    }
  }
}
function showMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(' '));
  }
}
function showSumByRow(matrix){
  // 1 способ
  let sumRow = [];
  for (let i = 0; i < matrix.length; i++) {
    let tempSumByRow = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      tempSumByRow += matrix[i][j];
    }
    sumRow.push(tempSumByRow);
  }
  console.log(sumRow);
  // 2 способ
  let sumRow2 = matrix.map(arr => {
    return arr.reduce((acc, i) => acc + i, 0)
  })
  console.log(sumRow2)
}

//найти номера столбцов, их индексы, где встречается 0
function findColumnsWithZero(matrix) {
  // consider that we have matrix with some data

  console.log('\nFind columns with 0:');

  let columnsWithZeroIdx = [];

  let columnCount = matrix[0].length;

  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        columnsWithZeroIdx.push(i);
        break;
      }
    }
  }

  console.log('  result indexes -', columnsWithZeroIdx);
}
function logMainDiag(matrix) {
  console.log('\nMain diag:');

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i][i]);
  }
}

function logSideDiag(matrix) {
  console.log('\nSide diag:');

  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    console.log(matrix[i][n - i - 1]);
  }
}

function showBottomMainTriangle(matrix) {
  console.log('\nBottom main triangle:');

  let row;

  for (let i = 0; i < matrix.length; i++) {
    row = [];

    for (let j = 0; j <= i; j++) {
      // action
      row.push(matrix[i][j]);
    }

    console.log(row.join(' '));
  }
}
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [0, 3, 6, 9],
  [6, 8, 0, 2],
];
// logEachMatrixItem(matrix);
// showMatrix(matrix)
// showSumByRow(matrix)
// findColumnsWithZero(matrix)

function snakeBypass(matrix) {
  // 1 способ. Но он не очень хороший, так как меняет исходный массив.
  // for (let i = 0; i < matrix.length; i++) {
  //   if (i !== matrix.length - 1 && i % 2 !== 0) {
  //     matrix[i].reverse();
  //   }
  //   for (let j = 0; j < matrix[i].length; j++) {
  //     console.log(`  item {${i}, ${j}} - ${matrix[i][j]}`);
  //   }
  //   matrix[i].reverse();
  // }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let columnIdx = i % 2 === 0
        ? j
        : (matrix[i].length - j - 1);
        // 0 1 2 - indexes
        // 1 2 3 - array
        // j = 0;
          // arr[j]
        // arr.length - 1 - 2

      console.log(matrix[i][columnIdx]);
    }
  }
}
let smallMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

showMatrix(smallMatrix)
snakeBypass(smallMatrix)