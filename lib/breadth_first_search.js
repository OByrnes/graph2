function breadthFirstSearch(startingNode, targetVal) {
    let visited = new Set();
    let queue = [startingNode];
    while(queue.length){
        let current = queue.shift();
        if(current.val === targetVal) return current;
        if (!visited.has(current)){
            visited.add(current)
            queue.push(...current.neighbors)

        }
    }
    return null
}

module.exports = {
    breadthFirstSearch
};