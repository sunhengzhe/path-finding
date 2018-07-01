const Graph = require('./graph');
const Node = require('./node');

const maze = `....W
.WWW.
.....
W..W.
W..W.
.W.W.`;

const start = new Node(2, 2);

const graph = new Graph(maze);

/** breadth first search */

// 节点队列
const frontier = [ start ];
// 已被探索过的节点字典
const visited = {
    [start]: true
};

while (frontier.length) {
    const current = frontier.shift();
    const neighbors = graph.getNeighbors(current);
    for (const node of neighbors) {
        if (!visited[node]) {
            frontier.push(node);
            visited[node] = true;
        }
    }
}

console.log(visited);
