import data from "../data/point_data";
import coordinates from "../data/coordinates";
import PriorityQueue from "./PriorityQueue";

/**
 * @class - Representing a Weighted Graph Datastructure
 */

class WeightedGraph {
  /**
   * Graph Constructor
   */
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * This method adds a vertex to the graph
   * @param {string} name - is the name of the vertex to be added
   */
  addVertex(name) {
    if (!this.adjacencyList[name]) {
      this.adjacencyList[name] = {};
    }
  }

  /**
   * This method adds a edge to the graph
   * An Edge is the relation between two vertices
   * @param {string} vert1
   * @param {string} vert2
   * @param {number} weight
   */
  addEdge(vert1, vert2, weight) {
    this.adjacencyList[vert1][vert2] = weight;
    this.adjacencyList[vert2][vert1] = weight;
  }

  /**
   * This method removes an edge in the graph
   * @param {string} v1 - the name of the first vertex
   * @param {string} v2 - the name of the second vertex
   */
  removeEdge(v1, v2) {
    delete this.adjacencyList[v1][v2];
    delete this.adjacencyList[v2][v1];
  }

  /**
   * This method removes a vertex in the graph
   * @param {string} vert - the name of the vertex to be removed
   */
  removeVertex(vert) {
    for (let i in this.adjacencyList[vert]) {
      this.removeEdge(vert, i);
    }
    delete this.adjacencyList[vert];
  }

  /**
   * Applies Depth-First-Search to the Graph
   * @param {string} target - is the target vertex we're looking for
   * @return {object} containing The path to be displayed on the visualizer
   * and the cost of the algorithm
   */
  DFS(start, target) {
    const result = [];
    let distance = 0;
    const visited = {};
    const helper = (vert) => {
      if (!vert) return null;
      visited[vert] = true;
      result.push(vert);
      if (vert === target) return null;
      for (let neighbor in this.adjacencyList[vert]) {
        if (!visited[neighbor]) {
          distance += this.adjacencyList[vert][neighbor];
          return helper(neighbor);
        }
      }
    };
    helper(start);
    return [result, distance];
  }

  /**
   * Applies Breadth-First Search to the Graph
   * @param {string} start - is the starting vertex we're going from
   * @return {object} containing The path to be displayed on the visualizer
   * and the cost of the algorithm
   */
  BFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let distance = 0;
    while (queue.length) {
      let current = queue.shift();
      visited[current] = true;
      result.push(current);
      for (let neighbor in this.adjacencyList[current]) {
        if (!visited[neighbor]) {
          distance += this.adjacencyList[current][neighbor];
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
    return [result, distance];
  }

  /**
   * Applies Dijkstra Algorithm to the Graph
   * @param {string} start - Vertex we're going from
   * @param {string} finish - Vertex we're going to
   * @return {object} containing The path to be displayed on the visualizer
   * and the cost of the algorithm
   */
  Dijkstra(start, finish) {
    const costFromStartTo = {};
    const checkList = new PriorityQueue();
    const prev = {};
    let distance = 0;

    let current;
    let result = [];
    for (let vert in this.adjacencyList) {
      if (vert === start) {
        costFromStartTo[vert] = 0;
        checkList.enqueue(vert, 0);
      } else {
        costFromStartTo[vert] = Infinity;
      }
      prev[vert] = null;
    }

    while (checkList.values.length) {
      current = checkList.dequeue().val;
      if (current === finish) {
        while (prev[current]) {
          distance += this.adjacencyList[current][prev[current]];
          result.push(current);
          current = prev[current];
        }
        break;
      } else {
        for (let neighbor in this.adjacencyList[current]) {
          let costToNeighbor =
            costFromStartTo[current] + this.adjacencyList[current][neighbor];
          if (costToNeighbor < costFromStartTo[neighbor]) {
            costFromStartTo[neighbor] = costToNeighbor;
            prev[neighbor] = current;
            checkList.enqueue(neighbor, costToNeighbor);
          }
        }
      }
    }
    return [result.concat(current).reverse(), distance];
  }
}

/**
 * Get the distance between two cities using lat & long
 * Ressources : https://www.movable-type.co.uk/scripts/latlong.html
 * @param {array} city_1 - containing the lat in the 1st position & lon in the 2nd position
 * @param {array} city_2 - containing the lat in the 1st position & lon in the 2nd position
 * @return {number} the distance in KM
 */
function getDistance(coord_city1, coord_city2) {
  const lat1 = coord_city1[1];
  const lat2 = coord_city2[1];
  const lon1 = coord_city1[0];
  const lon2 = coord_city2[0];

  const R = 6371e3; // metres
  const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = Math.abs(((lat2 - lat1) * Math.PI) / 180);
  const Δλ = Math.abs(((lon2 - lon1) * Math.PI) / 180);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c * 0.001; // in km
}

/**
 * This function initalizes the graph we're going to work with
 */
function initGraph() {
  const graph = new WeightedGraph();

  for (let vert of data) {
    graph.addVertex(vert.name);
  }

  graph.addEdge(
    "Paris",
    "Tours",
    getDistance(coordinates.Paris, coordinates.Tours)
  );
  graph.addEdge(
    "Paris",
    "Dijon",
    getDistance(coordinates.Paris, coordinates.Dijon)
  );
  graph.addEdge(
    "Dijon",
    "Lyon",
    getDistance(coordinates.Dijon, coordinates.Lyon)
  );
  graph.addEdge(
    "Tours",
    "Limoges",
    getDistance(coordinates.Tours, coordinates.Limoges)
  );
  graph.addEdge(
    "Lyon",
    "Grenoble",
    getDistance(coordinates.Lyon, coordinates.Grenoble)
  );
  graph.addEdge(
    "Marseille",
    "Toulon",
    getDistance(coordinates.Marseille, coordinates.Toulon)
  );
  graph.addEdge(
    "Grenoble",
    "Marseille",
    getDistance(coordinates.Grenoble, coordinates.Marseille)
  );
  graph.addEdge(
    "Limoges",
    "Bordeaux",
    getDistance(coordinates.Limoges, coordinates.Bordeaux)
  );
  graph.addEdge(
    "Bordeaux",
    "Toulouse",
    getDistance(coordinates.Bordeaux, coordinates.Toulouse)
  );
  graph.addEdge(
    "Toulouse",
    "Montpellier",
    getDistance(coordinates.Toulouse, coordinates.Montpellier)
  );

  graph.addEdge(
    "Montpellier",
    "Marseille",
    getDistance(coordinates.Montpellier, coordinates.Marseille)
  );

  return graph;
}

const graph = initGraph();

export default graph;
