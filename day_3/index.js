import { input } from "./input.js";

const sample = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

// Cada mochila tem dois compartimentos.
// Cada compartimento tem o mesmo número de itens que o outro.
// Itens minúsculos de a-z tem prioridades de 1 até 26
// Maiúsculos vão de 27 até 52.

const simplifyRucksacks = (input) => {
  const rucksacks = input.split("\n");
  const letters = rucksacks.reduce((arr, cur) => {
    const firstCompartment = cur.slice(0, cur.length / 2);
    const firstComSet = new Set();
    Array.from(firstCompartment).forEach((l) => firstComSet.add(l));

    const secondCompartment = cur.slice(cur.length / 2, cur.length);
    const secondComSet = new Set();
    Array.from(secondCompartment).forEach((l) => secondComSet.add(l));
    firstComSet.forEach((v) => {
      if (secondComSet.has(v)) {
        arr.push(v);
      }
    });
    return arr;
  }, []);
  return letters;
};

const letterValue = new Map();

for (let i = 0; i < 26; i++) {
  letterValue.set(String.fromCharCode(97 + i), i + 1);
  letterValue.set(String.fromCharCode(65 + i), i + 27);
}

const samplePriority = simplifyRucksacks(sample).reduce((arr, cur) => {
  return (arr += letterValue.get(cur));
}, 0);
const inputPriority = simplifyRucksacks(input).reduce((arr, cur) => {
  return (arr += letterValue.get(cur));
}, 0);

console.log("The total priority from the sample rucksacks is:");
console.log(samplePriority);

console.log("The total priority from the input rucksacks is:");
console.log(inputPriority);

// Part two:
const simplifyGroups = (input) => {
  const rucksacks = input.split("\n");
  const badges = [];
  for (let i = 0; i < rucksacks.length; i += 3) {
    const firstRucksackSet = new Set();
    Array.from(rucksacks[i]).forEach((l) => firstRucksackSet.add(l));

    const secondRucksackSet = new Set();
    Array.from(rucksacks[i + 1]).forEach((l) => secondRucksackSet.add(l));

    const thirdRucksackSet = new Set();
    Array.from(rucksacks[i + 2]).forEach((l) => thirdRucksackSet.add(l));
    Array.from(letterValue.keys()).forEach((letter) => {
      if (
        firstRucksackSet.has(letter) &&
        secondRucksackSet.has(letter) &&
        thirdRucksackSet.has(letter)
      ) {
        badges.push(letter);
      }
    });
  }
  return badges;
};

const totalPriority = simplifyGroups(input).reduce((arr, cur) => {
  return (arr += letterValue.get(cur));
}, 0);
console.log('The total priority of the badges is:')
console.log(totalPriority);
