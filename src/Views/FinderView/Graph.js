import data from "./data/point_data";
import coordinates from "./data/coordinates";

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
  constructor(src, src_coord, dest, dest_coord, weight) {
    this.src = src;
    this.src_coord = src.coord;
    this.dest = dest;
    this.dest_coord = dest.coord;
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
    for (let v of vertices) {
      this.adjacencylist[v] = [];
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

  BFS(src, dest) {
    let visited = [];
    let queue = [];
    let path = [];
    visited[src] = true;
    queue.push(src);
    while (queue.length !== 0) {
      src = queue.shift();
      path.push(src);
      for (let next of this.adjacencylist[src]) {
        let n = next.dest;
        if (!visited[n]) {
          visited[n] = true;
          queue.push(n);
        }
      }
    }
    return path;
  }
}

/**
 * Get the distance between two cities using lat & long
 * Ressources : https://www.movable-type.co.uk/scripts/latlong.html
 * @param {*} city_1
 * @param {*} city_2
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
  const list = [];
  for (let vertices of data) {
    list.push(vertices.name);
  }

  const graph = new Graph(list);

  graph.addEdge(
    "Paris",
    coordinates.Paris,
    "Dijon",
    coordinates.Dijon,
    getDistance(coordinates.Paris, coordinates.Dijon)
  );
  graph.addEdge(
    "Paris",
    coordinates.Paris,
    "Tours",
    coordinates.Tours,
    getDistance(coordinates.Paris, coordinates.Tours)
  );
  graph.addEdge(
    "Dijon",
    coordinates.Dijon,
    "Lyon",
    coordinates.Lyon,
    getDistance(coordinates.Dijon, coordinates.Lyon)
  );
  graph.addEdge(
    "Tours",
    coordinates.Tours,
    "Limoges",
    coordinates.Limoges,
    getDistance(coordinates.Tours, coordinates.Limoges)
  );
  graph.addEdge(
    "Lyon",
    coordinates.Lyon,
    "Grenoble",
    coordinates.Grenoble,
    getDistance(coordinates.Lyon, coordinates.Grenoble)
  );
  graph.addEdge(
    "Grenoble",
    coordinates.Grenoble,
    "Marseille",
    coordinates.Marseille,
    getDistance(coordinates.Grenoble, coordinates.Marseille)
  );
  graph.addEdge(
    "Limoges",
    coordinates.Limoges,
    "Bordeaux",
    coordinates.Bordeaux,
    getDistance(coordinates.Limoges, coordinates.Bordeaux)
  );
  graph.addEdge(
    "Bordeaux",
    coordinates.Bordeaux,
    "Toulouse",
    coordinates.Toulouse,
    getDistance(coordinates.Bordeaux, coordinates.Toulouse)
  );
  graph.addEdge(
    "Toulouse",
    coordinates.Toulouse,
    "Montpellier",
    coordinates.Montpellier,
    getDistance(coordinates.Toulouse, coordinates.Montpellier)
  );
  graph.addEdge(
    "Montpellier",
    coordinates.Montpellier,
    "Marseille",
    coordinates.Marseille,
    getDistance(coordinates.Montpellier, coordinates.Marseille)
  );
  graph.addEdge(
    "Marseille",
    coordinates.Marseille,
    "Toulon",
    coordinates.Toulon,
    getDistance(coordinates.Marseille, coordinates.Toulon)
  );

  return graph;
}

const graph = initGraph();
//console.log(graph.BFS("Paris", "Toulon"));

export default graph;
