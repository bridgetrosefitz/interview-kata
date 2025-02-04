// test("init", () => {
//   expect(getFinalLocations("5 5 1 2 N LMLMLMLMM")).toBe("1 3 N");
// });

import { getFinalLocations } from "./app.js";
test("init", () => {
  expect(
    getFinalLocations({
      grid: [6, 6],
      rovers: [[1, 2, "N"]],
      moves: [["L", "M", "L", "M", "L", "M", "L", "M", "M"]],
    })
  ).toStrictEqual(["1 3 N"]);
});

// Hard to write all up front; hard to know what we should do next
// Start with happy cases

// Edge cases
// out of bounds

/*

Inputs
- type, length, hostile
- string

Outputs
- type, length, modify
- string


Input / output parsing
- validate into JS object

LOGIC



// PARKING LOT
- change rover and moves input to have common ID



*/
