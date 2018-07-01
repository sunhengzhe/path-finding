const Graph = require('./graph-with-cost');
const Node = require('./node-with-cost');
const PriorityQueue = require('./priorityQueue');

const maze = `......
...WW.
...//.
.W.//.
/W///.
......`;

const start = new Node(2, 2, 0);
const end = new Node(1, 5);

const graph = new Graph(maze);

/** breadth first search */

// 节点队列
const frontier = new PriorityQueue([ start ]);
// {current -> from}
const comeFrom = {
    [start]: null
};
// cost map
const costSoFar = {
    [start]: 0
};

while (!frontier.isEmpty()) {
    const current = frontier.pop();
    // 提前退出
    if (current.toString === end.toString()) {
        break;
    }

    const neighbors = graph.getNeighbors(current);
    console.log(neighbors);
    for (const node of neighbors) {
        const cost = costSoFar[current] + node.priority;
        if (costSoFar[node] === undefined || cost < costSoFar[node]) {
            frontier.insert(node, cost);
            // 当前节点从哪个节点过来
            comeFrom[node] = current;
            costSoFar[node] = cost;
        }
    }
}

console.log(costSoFar);

/** find path */
const path = [ end ];
let prevNode = comeFrom[end];
while (prevNode) {
    path.push(prevNode);
    prevNode = comeFrom[prevNode];
}

console.log(path.reverse());
