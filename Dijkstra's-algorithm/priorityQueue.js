/**
 * 优先队列
 * 最小堆实现
 */
class PriorityQueue {
    constructor(nodes) {
        // 第一位留空，使得 i 元素的子节点正好为 i * 2 与 i * 2 + 1
        this.heap = [null];
        for (const node of nodes) {
            this.insert(node);
        }
    }

    isEmpty() {
        return this.heap.length === 1;
    }

    /**
     *插入元素
     */
    insert(node) {
        const heap = this.heap;
        let i = heap.length;
        heap.push(node);
        while (i > 1) {
            // 获取父节点位置
            const current = heap[i];
            const parentPos = Math.floor(i / 2);
            if (current.priority < heap[parentPos].priority) {
                // 比父元素优先级高，交换元素
                [heap[i], heap[parentPos]] = [heap[parentPos], heap[i]];
                i = parentPos;
            } else {
                break;
            }
        }
    }

    /**
     * 去除并返回优先级最高的元素（数字越低越高）
     */
    pop() {
        const heap = this.heap;

        if (heap.length === 2) {
            return heap.pop();
        }

        // 取出最后一个叶子节点
        const last = heap.pop();
        // 取出优先级最高的元素
        const min = heap[1];
        heap[1] = last;
        const size = heap.length;
        let i = 1;
        while (i * 2 <= size) {
            const leftPos = i * 2;
            const rightPos = i * 2 + 1;
            const left = heap[leftPos];
            const right = heap[rightPos];

            if (leftPos >= size) {
                // 没有左右节点
                return min;
            }

            if (leftPos === size - 1) {
                // 有左节点，没有右节点
                if (heap[leftPos].priority < heap[i].priority) {
                    [heap[i], heap[leftPos]] = [heap[leftPos], heap[i]];
                }
                return min;
            }

            // 两个节点都有
            if (left.priority < right.priority) {
                [heap[i], heap[leftPos]] = [heap[leftPos], heap[i]];
                i = leftPos;
            } else {
                [heap[i], heap[rightPos]] = [heap[rightPos], heap[i]];
                i = rightPos;
            }
        }
        return min;
    }
}

// const pq = new PriorityQueue([
//     { priority: 3 },
//     { priority: 4 },
//     { priority: 0 },
//     { priority: 7 },
//     { priority: 10 },
//     { priority: 2 },
//     { priority: 5 },
//     { priority: 9 },
// ]);

// console.log(pq.heap);

// console.log(pq.pop())

// console.log(pq.heap);

module.exports = PriorityQueue;
