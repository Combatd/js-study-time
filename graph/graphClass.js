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
}