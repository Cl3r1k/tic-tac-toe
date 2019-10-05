class TicTacToe {

    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

        this.currentPlayerSymbol = 'x'
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] !== null) {
            return;
        }

        if (this.currentPlayerSymbol === 'x') {
            this.field[rowIndex][columnIndex] = 'x';
            this.currentPlayerSymbol = 'o';
        } else {
            this.field[rowIndex][columnIndex] = 'o';
            this.currentPlayerSymbol = 'x';
        }
    }

    isFinished() {
        return this.noMoreTurns() || this.getWinner() !== null;
    }

    getWinner() {
        if ((this.field[0][0] === 'x' && this.field[0][1] === 'x' && this.field[0][2] === 'x') ||
            (this.field[1][0] === 'x' && this.field[1][1] === 'x' && this.field[1][2] === 'x') ||
            (this.field[2][0] === 'x' && this.field[2][1] === 'x' && this.field[2][2] === 'x') ||
            (this.field[0][0] === 'x' && this.field[1][0] === 'x' && this.field[2][0] === 'x') ||
            (this.field[0][1] === 'x' && this.field[1][1] === 'x' && this.field[2][1] === 'x') ||
            (this.field[0][2] === 'x' && this.field[1][2] === 'x' && this.field[2][2] === 'x') ||
            (this.field[0][0] === 'x' && this.field[1][1] === 'x' && this.field[2][2] === 'x') ||
            (this.field[2][0] === 'x' && this.field[1][1] === 'x' && this.field[0][2] === 'x')
        ) {
            return 'x';
        }

        if ((this.field[0][0] === 'o' && this.field[0][1] === 'o' && this.field[0][2] === 'o') ||
            (this.field[1][0] === 'o' && this.field[1][1] === 'o' && this.field[1][2] === 'o') ||
            (this.field[2][0] === 'o' && this.field[2][1] === 'o' && this.field[2][2] === 'o') ||
            (this.field[0][0] === 'o' && this.field[1][0] === 'o' && this.field[2][0] === 'o') ||
            (this.field[0][1] === 'o' && this.field[1][1] === 'o' && this.field[2][1] === 'o') ||
            (this.field[0][2] === 'o' && this.field[1][2] === 'o' && this.field[2][2] === 'o') ||
            (this.field[0][0] === 'o' && this.field[1][1] === 'o' && this.field[2][2] === 'o') ||
            (this.field[2][0] === 'o' && this.field[1][1] === 'o' && this.field[0][2] === 'o')
        ) {
            return 'o';
        }

        return null;
    }

    noMoreTurns() {

        let result = 0;
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                if (this.field[x][y] === null) {
                    result++;
                }
            }
        }

        return result > 0 ? false : true;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }

}

module.exports = TicTacToe;