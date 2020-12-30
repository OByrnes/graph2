function maxValue(node, visited=new Set(), max= 0) {
    if (visited.has(node.val)){
        return max
    }
    visited.add(node.val)
    if(node.val > max) {
        max= node.val
    }
    node.neighbors.forEach(neighbor => { 
        max = maxValue(neighbor, visited, max)})


return max
}


module.exports = {
    maxValue
};

// node.neighbors.filter(neighbor => !visited.has(neighbor))
// !node.neighbors || visited.has(node.neighbors)