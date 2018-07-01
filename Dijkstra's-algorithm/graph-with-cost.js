const Node = require('./node-with-cost');

class Graph {
    constructor(mazeStr) {
        const rows = mazeStr.split('\n');
        this.rows = rows;
        this.width = rows[0].length;
        this.height = rows.length;
    }

    getCost(symbol) {
        return symbol === '.' ? 1 : 5;
    }

    getNeighbors(node) {
        const { x, y } = node;
        const neighbors = [];
        // 上
        if (y - 1 >= 0 && this.rows[y - 1][x] !== 'W') {
            neighbors.push(new Node(x, y - 1, this.getCost(this.rows[y - 1][x])));
        }
        // 右
        if (x + 1 < this.width && this.rows[y][x + 1] !== 'W') {
            neighbors.push(new Node(x + 1, y, this.getCost(this.rows[y][x + 1])));
        }
        // 下
        if (y + 1 < this.height && this.rows[y + 1][x] !== 'W') {
            neighbors.push(new Node(x, y + 1, this.getCost(this.rows[y + 1][x])));
        }
        // 左
        if (x - 1 >= 0 && this.rows[y][x - 1] !== 'W') {
            neighbors.push(new Node(x - 1, y, this.getCost(this.rows[y][x - 1])));
        }
        return neighbors;
    }
}

module.exports = Graph;
