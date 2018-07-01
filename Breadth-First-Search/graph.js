const Node = require('./node');

class Graph {
    constructor(mazeStr) {
        const rows = mazeStr.split('\n');
        this.rows = rows;
        this.width = rows[0].length;
        this.height = rows.length;
    }

    getNeighbors(node) {
        const { x, y } = node;
        const neighbors = [];
        // 上
        if (y - 1 >= 0 && this.rows[y - 1][x] === '.') {
            neighbors.push(new Node(x, y - 1));
        }
        // 右
        if (x + 1 < this.width && this.rows[y][x + 1] === '.') {
            neighbors.push(new Node(x + 1, y));
        }
        // 下
        if (y + 1 < this.height && this.rows[y + 1][x] === '.') {
            neighbors.push(new Node(x, y + 1));
        }
        // 左
        if (x - 1 >= 0 && this.rows[y][x - 1] === '.') {
            neighbors.push(new Node(x - 1, y));
        }
        return neighbors;
    }
}

module.exports = Graph;
