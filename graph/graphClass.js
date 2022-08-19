class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    /*
        #addVertex
        Accepts an argument vertex as a name of a vertex
        It adds a key to the adjacency list with the name of the vertex, 
        setting the key's value to an empty array.
    */
    addVertex = function(vertex) {
        let adjacencyListVertexExists = this.adjacencyList[vertex];
        if (!adjacencyListVertexExists) {
            this.adjacencyList[vertex] = [];
        }  
    } 

    /*
        #addEdge
        Accepts 2 vertices as arguments, vertex1 and vertex2
        Should find in the adjacencyList the key vertex1, and push vertex2 to the value array. 
        Should find the adjacencyList the key vertex2, and push vertex1 to the value array.
    */
    addEdge = function(vertex1, vertex2) {
        let adjacencyListVertex1Exists = this.adjacencyList[vertex1];
        let adjacencyListVertex2Exists = this.adjacencyList[vertex2];
        if (adjacencyListVertex1Exists) {
            this.adjacencyList[vertex1].push(vertex2)
        }
        if ( adjacencyListVertex2Exists) {
            this.adjacencyList[vertex2].push(vertex1)
        }  
    }

    /*
        #removeEdge
        Accepts 2 vertices as arguments, vertex1 and vertex2
        Should reassign the key of vertex1 to an array that DOES NOT contain vertex2
        Should reassign the key of vertex2 to an array that DOES NOT contain vertex1
    */
   removeEdge = function(vertex1, vertex2) {
        let adjacencyListVertex1Exists = this.adjacencyList[vertex1];
        let adjacencyListVertex2Exists = this.adjacencyList[vertex2];
        if(adjacencyListVertex1Exists) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
                                            .filter(vertex => vertex !== vertex2)
        }
        if(adjacencyListVertex2Exists) {
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
                                            .filter(vertex => vertex !== vertex1)
        }
   }

   /*
        #removeVertex
        Accepts a vertex to remove
        Loops as long as there are any other vertices in adjacencyList for that vertex
        Inside of the loop, call removeEdge with vertex we are removing and any values in adjacencyList for that vertex
        Delete the key in adjacencyList for that vertex
   */
   removeVertex = function(vertex) {
    while (this.adjacencyList[vertex.length]) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
   }

   depthFirstRecursive(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex){
        if(!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach(neighbor => {
            if(!visited[neighbor]){
                return dfs(neighbor)
            }
        });
    })(start);

    return result;
}

depthFirstIterative(start){
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while(stack.length){
        currentVertex = stack.pop();
        result.push(currentVertex);

        this.adjacencyList[currentVertex].forEach(neighbor => {
           if(!visited[neighbor]){
               visited[neighbor] = true;
               stack.push(neighbor)
           } 
        });
    }
    return result;
}

breadthFirst(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while(queue.length){
        currentVertex = queue.shift();
        result.push(currentVertex);
       

        this.adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }
    return result;
}
}