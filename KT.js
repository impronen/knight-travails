class Node {
  constructor(boardSquare) {
    this.square = boardSquare;
  }
}

class knight {
  constructor(start = null, goal = null) {
    this.moves = [
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2],
      [-2, -1],
      [-2, 1],
      [-1, 2],
    ];
    this.start = start;
    this.goal = goal;
    this.path = new Set();
  }
}
