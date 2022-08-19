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

}