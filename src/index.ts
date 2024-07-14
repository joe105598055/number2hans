import { mergeAndTrimZeros, chunkArray } from "./utils";

const digits = ["零", "壹", "貳", "參", "肆", "伍", "陸", "柒", "捌", "玖"];
const units = ["仟", "佰", "拾", ""];
const largeUnits = ["", "萬", "億", "兆"];

export default function number2hans(num: number) {
  if (num == 0) return "零";
  const chars = num.toString().split("");
  const chunks = chunkArray(chars, 4);
  let result = "";
  chunks.forEach((chunk, chunkIdx) => {
    let str = chunk
      .map((e, idx) => e !== undefined ? (digits[e] === "零" ? "零" : digits[e] + units[idx]) : "")
      .join("");
  
    str = mergeAndTrimZeros(str);
    if (str) {
      result = str + largeUnits[chunkIdx] + result;
    }
  });
  return mergeAndTrimZeros(result);
}
