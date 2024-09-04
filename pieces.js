// Define all Tetris piece orientations
const pieceOrientations = [
    // Piece 0: Line
    [
      [[-2, 0], [-1, 0], [0, 0], [1, 0]], // Rotation 0
      [[0, -1], [0, 0], [0, 1], [0, 2]], // Rotation 1
      [[-2, 1], [-1, 1], [0, 1], [1, 1]], // Rotation 2
      [[-1, -1], [-1, 0], [-1, 1], [-1, 2]] // Rotation 3
    ],
    // Piece 1: L-shape
    [
      [[-2, -1], [-2, 0], [-1, 0], [0, 0]], // Rotation 0
      [[-1, -1], [-1, 0], [-1, 1], [0, -1]], // Rotation 1
      [[-2, 0], [-1, 0], [0, 0], [0, 1]], // Rotation 2
      [[-1, -1], [-1, 0], [-1, 1], [-2, 1]] // Rotation 3
    ],
    // Piece 2: Reverse L-shape
    [
      [[-2, 0], [-1, 0], [0, 0], [0, -1]], // Rotation 0
      [[-1, -1], [-1, 0], [-1, 1], [0, 1]], // Rotation 1
      [[-2, 0], [-2, 1], [-1, 0], [0, 0]], // Rotation 2
      [[-2, -1], [-1, -1], [-1, 0], [-1, 1]] // Rotation 3
    ],
    // Piece 3: Square (No rotation)
    [[
      [-1, -1], [0, -1], [-1, 0], [0, 0]
    ]],
    // Piece 4: S-shape
    [
      [[-1, -1], [-2, 0], [-1, 0], [0, -1]], // Rotation 0
      [[-1, -1], [-1, 0], [0, 0], [0, 1]], // Rotation 1
      [[-1, 0], [-2, 1], [-1, 1], [0, 0]], // Rotation 2
      [[-2, -1], [-2, 0], [-1, 0], [-1, 1]] // Rotation 3
    ],
    // Piece 5: T-shape
    [
      [[-1, 0], [0, 0], [1, 0], [0, -1]], // Rotation 0
      [[0, -1], [0, 0], [0, 1], [1, 0]], // Rotation 1
      [[-1, 0], [0, 0], [1, 0], [0, 1]], // Rotation 2
      [[0, -1], [0, 0], [0, 1], [-1, 0]] // Rotation 3
    ],
    // Piece 6: Z-shape
    [
      [[-2, -1], [-1, -1], [-1, 0], [0, 0]], // Rotation 0
      [[-1, 0], [-1, 1], [0, 0], [0, -1]], // Rotation 1
      [[-2, 0], [-1, 0], [-1, 1], [0, 1]], // Rotation 2
      [[-2, 0], [-2, 1], [-1, 0], [-1, -1]] // Rotation 3
    ]
  ];
  
  /**
   * Returns the oriented points of a Tetris piece given its type and rotation.
   * @param {number} pieceType - The type of the Tetris piece.
   * @param {number} rotation - The rotation index (0, 1, 2, 3).
   * @returns {Array} The oriented points of the piece.
   */
  function orientPoints(pieceType, rotation) {
    const piece = pieceOrientations[pieceType];
    return piece[rotation] || piece[0]; // Fallback to default rotation if out of range
  }
  