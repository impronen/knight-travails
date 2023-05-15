#!/usr/bin/env node
class Node {
  constructor(boardSquare) {
    this.square = boardSquare;
    this.parent = null;
    this.children = [];
  }
}

class knight {
  constructor(current, goal) {
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
    this.start = current;
    this.goal = goal;
    this.trampledPath = new Set();
  }

  possibleMoves(currrentSquare) {
    const legalMoves = [];
    this.moves.forEach((move) => {
      const x = move[0] + currrentSquare[0];
      const y = move[1] + currrentSquare[1];
      if (x < 0 || x > 7 || y < 0 || y > 7) return;
      legalMoves.push([x, y]);
    });
    return legalMoves;
  }

  pathfinder() {
    const travPath = [];
    // Start by placing the startSquare to the queue
    const queue = [];
    queue.push({ node: new Node(this.start) });
    console.log(queue);

    while (queue.length > 0) {
      // We keep emptying the queue
      const currentNode = queue.shift();

      if (
        currentNode.node.square[0] === this.goal[0] &&
        currentNode.node.square[1] === this.goal[1]
      ) {
        let tempN = currentNode;
        while (tempN) {
          travPath.unshift(tempN);
          tempN = tempN.parent;
        }
        return travPath;
      }

      const moves = this.possibleMoves(currentNode.node.square);
      console.log(moves);
    }
  }
}

function knightMoves(start, end) {
  const myKnight = new knight(start, end);
  const path = myKnight.pathfinder();
  console.log(knight);
  console.log(path);
  return myKnight;
}

knightMoves([1, 1], [5, 5]);
