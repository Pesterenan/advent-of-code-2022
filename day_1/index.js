/*
--- Day 1: Calorie Counting ---
Santa's reindeer typically eat regular reindeer food, but they need a lot of magical energy to deliver presents on Christmas. For that, their favorite snack is a special type of star fruit that only grows deep in the jungle. The Elves have brought you on their annual expedition to the grove where the fruit grows.

To supply enough magical energy, the expedition needs to retrieve a minimum of fifty stars by December 25th. Although the Elves assure you that the grove has plenty of fruit, you decide to grab any fruit you see along the way, just in case.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

The jungle must be too overgrown and difficult to navigate in vehicles or access from the air; the Elves' expedition traditionally goes on foot. As your boats approach land, the Elves begin taking inventory of their supplies. One important consideration is food - in particular, the number of Calories each Elf is carrying (your puzzle input).

The Elves take turns writing down the number of Calories contained by the various meals, snacks, rations, etc. that they've brought with them, one item per line. Each Elf separates their own inventory from the previous Elf's inventory (if any) by a blank line.

For example, suppose the Elves finish writing their items' Calories and end up with the following list:

*/
import input from "./input.js";

const sampleCalorieList = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

// Using the sample provided in the site:
const sampleElvesInventory = sampleCalorieList.split("\n\n").map((line) => {
  const calories = line.split("\n");
  return calories.reduce((acc, value) => {
    return acc + Number(value);
  }, 0);
});
console.log("Max Calories from Sample: ", Math.max(...sampleElvesInventory));

// Using the input provided in the site:
const inputElvesInventory = input.split("\n\n").map((line) => {
  const calories = line.split("\n");
  return calories.reduce((acc, value) => {
    return acc + Number(value);
  }, 0);
});
console.log("Max Calories from Input: ", Math.max(...inputElvesInventory));

console.log("Part two:");

const sumOfTopThreeElves = (array) => {
  const arraySorted = array.sort((a, b) => b - a).slice(0, 3);
  return arraySorted.reduce((acc, item) => acc + item, 0);
};
console.log(
  "The Calorie count from the top three elves on the sample: ",
  sumOfTopThreeElves(sampleElvesInventory)
);
console.log(
  "The Calorie count from the top three elves on the input: ",
  sumOfTopThreeElves(inputElvesInventory)
);
