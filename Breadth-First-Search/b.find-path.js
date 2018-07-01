const Graph = require('./graph');
const Node = require('./node');

const maze = `....W
.WWW.
.....
W..W.
W..W.
.W.W.`;

const start = new Node(2, 2);
const end = new Node(4, 5);

const graph = new Graph(maze);

/** breadth first search */

// 节点队列
const frontier = [ start ];
// {current -> from}
const comeFrom = {
    [start]: null
};

while (frontier.length) {
    const current = frontier.shift();
    // 提前退出
    if (current.toString === end.toString()) {
        break;
    }

    const neighbors = graph.getNeighbors(current);
    for (const node of neighbors) {
        if (comeFrom[node] === undefined) {
            frontier.push(node);
            // 当前节点从哪个节点过来
            comeFrom[node] = current;
        }
    }
}

/** find path */
const path = [ end ];
let prevNode = comeFrom[end];
while (prevNode) {
    path.push(prevNode);
    prevNode = comeFrom[prevNode];
}

console.log(path.reverse());
