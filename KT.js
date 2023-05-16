#!/usr/bin/env node
function Node(square, path) {
  if (square[0] < 0 || square[0] > 7 || square[1] < 0 || square[1] > 7) return;
  return { square, path };
}

function knightMoves([x, y], [a, b]) {
  // Initialize the queueu and variable for saving the path later
  const trampledPath = [];
  const queue = [Node([x, y], [[x, y]])];
  // Grab the first element from queue
  let currentNode = queue.shift();

  while (currentNode.square[0] !== a || currentNode.square[1] !== b) {
    // We loop until current coordinates match goal
    let legalMoves = [
      [currentNode.square[0] + 2, currentNode.square[1] - 1],
      [currentNode.square[0] + 2, currentNode.square[1] + 1],
      [currentNode.square[0] - 2, currentNode.square[1] - 1],
      [currentNode.square[0] - 2, currentNode.square[1] + 1],
      [currentNode.square[0] + 1, currentNode.square[1] - 2],
      [currentNode.square[0] + 1, currentNode.square[1] + 2],
      [currentNode.square[0] - 1, currentNode.square[1] - 2],
      [currentNode.square[0] - 1, currentNode.square[1] + 2],
    ];
    legalMoves.forEach((move) => {
      // We push possible next nodes to the queue
      const nextNode = Node(move, currentNode.path.concat([move]));
      if (nextNode) {
        queue.push(nextNode);
      }
    });
    // We make sure the while loop keeps going by taking the next node from the queue to process
    currentNode = queue.shift();
  }
  // Save the path
  currentNode.path.forEach((square) => {
    trampledPath.push(square);
  });

  // Output shenanigans
  console.log(`Our knight starts off from [${[x, y]}]`);
  console.log("---- CALCULATING ----");
  setTimeout(function () {
    console.log(
      `And here we are.. at [${[a, b]}] The knight made it in ${
        currentNode.path.length - 1
      } moves.`
    );
    console.log("The path taken was:");
    console.log(trampledPath);
  }, 1500);
}

knightMoves([0, 1], [5, 6]);
