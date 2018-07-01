class Node {
    constructor(x, y, cost) {
        this.x = x;
        this.y = y;
        this.priority = cost;
    }

    toString() {
        return `${this.x}, ${this.y}`;
    }
}

module.exports = Node;