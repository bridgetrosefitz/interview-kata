export const getFinalLocations = args => {
  // TO DO boundary check

  const { grid, rovers, moves } = args;

  const currLocation = {
    X: rovers[0][0],
    Y: rovers[0][1],
  };

  let currDirection = rovers[0][2]; // "E"

  const moveMap = {
    E: ["X", 1],
    W: ["X", -1],
    N: ["Y", 1],
    S: ["Y", -1],
  };

  const changeDirectionMap = {
    L: {
      E: "N",
      N: "W",
      W: "S",
      S: "E",
    },
    R: {},
  };

  moves[0].forEach(move => {
    if (move === "M") {
      const change = moveMap[currDirection];
      const [direction, value] = change;
      currLocation[direction] += value;
    } else {
      // turn
      currDirection = changeDirectionMap[move][currDirection];
    }
  });

  return [`${currLocation["X"]} ${currLocation["Y"]} ${currDirection}`];
};
