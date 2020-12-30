function numRegions(graph) {
    //arr of keys
    //arr = []
    // set = [a, b ]
    // counter = 2
    // c
    //children - d , e
    // return counter
    let keysArr = Object.keys(graph)
    let queue = [keysArr.shift()]
    let counter = 1
    let visited = new Set()

    if(!graph) return 0

    while(keysArr.length){
        let current = queue.shift()
        if(!visited.has(current)){
            visited.add(current)
            queue.push(...graph[current])
            keysArr = keysArr.filter(el => el != current)
        }
        if(queue.length === 0){
            counter++
            if(keysArr.length){
            queue.push(keysArr.shift())
            }
        }
    }
    return counter
}



let graph1 = {
                'a': ['b'],
                'b': ['a'],
                'c': ['d'],
                'd': ['e', 'c'],
                'e': ['d'],
            }

console.log(numRegions(graph1))


module.exports = {
    numRegions
};