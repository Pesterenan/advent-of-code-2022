import { input } from "./input.js";
const sample = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const pairs = input
  .split("\n")
  .map((line) => line.split(","))
  .map((range) => {
    return range.map((r) => {
      return {
        min: Number(r.split("-")[0]),
        max: Number(r.split("-")[1]),
      };
    });
  });

const compareMinMax = (array) => {
  let containedPairs = 0;
  array.forEach((pair) => {
    const [firstElf, secondElf] = pair;
    if (firstElf.max < secondElf.min || secondElf.max < firstElf.min) {
      return;
    }
    if (
      (firstElf.min >= secondElf.min && firstElf.max <= secondElf.max) ||
      (secondElf.min >= firstElf.min && secondElf.max <= firstElf.max)
    ) {
      containedPairs++;
      return;
    }
    if (
      (firstElf.min === firstElf.max &&
      (firstElf.min >= secondElf.min &&
        firstElf.min <= secondElf.max)) ||
      (secondElf.min === secondElf.max &&
        (secondElf.min >= firstElf.min &&
        secondElf.min <= firstElf.max))
    ) {
      containedPairs++;
      return;
    }
  });
  return containedPairs;
};

console.log(`There are ${compareMinMax(pairs)} pairs overlapping each other`);
