class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue();
        for (let stone of stones){
            maxHeap.push(stone)
        }
        while(maxHeap.size() > 1){
            let x = maxHeap.pop();
            let y = maxHeap.pop();
            if(x === y){
                continue;
            }
            if(y < x){
                maxHeap.push(x-y)
            }
        }
        return maxHeap.size() === 0 ? 0 : maxHeap.pop()
    }
}
