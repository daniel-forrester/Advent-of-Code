import { day1Data, day1Test } from "../db/day1.mjs";

const result = day1Test.reduce((acc, currentEl) => {
  let number = currentEl.split("").filter((char) => !isNaN(char));
  let x = number.length >= 1 ? number[0] : "";
  let y =
    number.length > 1 ? Number(number[number.length - 1]) : Number(number[0]);
  let total = Number(x + y);
  console.log(`Total: ${total}`);
  return (acc = acc + total);
}, 0);

console.log("result: ", result);
