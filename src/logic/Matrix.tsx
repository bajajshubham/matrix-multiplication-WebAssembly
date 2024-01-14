type Matrix = number[][];

export const getMatrixColumnsLength = (mat: Matrix) => mat[0].length;
export const getMatrixRowsLength = (mat: Matrix) => mat.length;

export const areMatricesValidForMultiplication = (
    mat1: Matrix,
    mat2: Matrix
): Boolean => getMatrixColumnsLength(mat1) === getMatrixRowsLength(mat2);

export const temporaryMatrix = (rowLeangth: number, columnLength: number): Matrix =>
    [...Array(rowLeangth)].map(() => [...Array(columnLength)]);

export const multiplyMatrices = (mat1: Matrix, mat2: Matrix) => {
    if (areMatricesValidForMultiplication(mat1, mat2)) {
        const rows1: number = getMatrixRowsLength(mat1);
        const cols1: number = getMatrixColumnsLength(mat1);
        const cols2: number = getMatrixColumnsLength(mat2);
        let result: Matrix = temporaryMatrix(rows1, cols2);
        for (let i = 0; i < rows1; i++) {
            for (let j = 0; j < cols2; j++) {
                result[i][j] = 0;
                for (let k = 0; k < cols1; k++) result[i][j] += mat1[i][k] * mat2[k][j];
            }
        }
        return result;
    } else return "Multiplication not possible";
};