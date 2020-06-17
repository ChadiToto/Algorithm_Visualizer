/**
 * Class representing graph edges
 */
class Edge {
  /**
   * Creates an Edge
   *
   * @param {*} src - Source of edge
   * @param {*} dest - Destination
   * @param {*} weight - Weight which will be represented by distance
   */
  constructor(src, dest, weight) {
    this.src = src;
    this.dest = dest;
    this.weight = weight;
  }
}

/**
 * Class representing Graph datastructure
 */
class Graph {
  /**
   * Intialize a Graph
   * @param {*} vertices - number of vertices
   */
  constructor(vertices) {
    this.vertices = vertices;
    this.adjacencylist = [];
    for (let i = 0; i < vertices; i++) {
      this.adjacencylist[i] = [];
    }
  }
  /**
   * This function adds an Edge to graph
   * @param {*} src
   * @param {*} dest
   * @param {*} weight
   */
  addEdge(src, dest, weight) {
    let edge = new Edge(src, dest, weight);
    this.adjacencylist[src].unshift(edge);
  }

  /**
   *Simply prints the graphs
   * @todo REMOVE THIS FUNCTION
   */
  printGraph() {
    for (let i = 0; i < this.vertices; i++) {
      let list = this.adjacencylist[i];
      for (let j = 0; j < list.length; j++) {
        console.log(
          "vertex-" +
            list[j].src +
            " is connected to " +
            list[j].destination +
            " with weight " +
            list[j].weight
        );
      }
    }
  }
}

export default Graph;
