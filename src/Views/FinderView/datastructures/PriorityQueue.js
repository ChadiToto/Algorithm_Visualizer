/**
 * @class - Representing a Priority Queue DataStructure
 */
export default class PriorityQueue {
  constructor() {
    this.values = [];
  }

  /**
   * This function adds an element to the queue
   * And Sorts the queue right after base on priorites
   * @param {*} val - Element to be Added
   * @param {*} priority  - Priority of the Element
   */
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  /**
   * Removes the first Element from the Queue
   */
  dequeue() {
    return this.values.shift();
  }

  /**
   * Sorts the Queue based on Priorities
   */
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
