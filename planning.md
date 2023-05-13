# Planning & pseudocode

Keep tabs of wha you are doing and what to do next here.

# High level steps

1. Start with creating a class for gameboard and knight
2. Create the knightMoves function that calls methods from these two to do the traversing and printing of each step

The board is 8x8.

## Map of movements from a single place (clockwise from top right)

1. two up + one right
2. two right + one up
3. two right + one down
4. two down + one right
5. two down + one left
6. two left + one down
7. two left + one up
8. two up + one right

Four moves with 2 up or down + 1 to right/left
and four moves with 2 moves right and left + 1 up / down

In the picture the knight is in d4, in pure coordinates that would be [4,4] - so a move to f5 would be an addition [+1, +2].
