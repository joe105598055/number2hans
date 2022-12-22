const digits = ["零", "壹", "貳", "參", "肆", "伍", "陸", "柒", "捌", "玖"];
const units = ["", "拾", "佰", "仟", "萬", "拾", "佰", "仟", "億", "拾", "佰", "仟", "兆"];

function number2hans(num: number) {
  if (num === 0) {
    return "零";
  }
  const charArray = num.toString().split(""); // 1,1,0,0
  let isBetweenZero = false;
  let result = charArray.map((char, index) => {
    if (char !== "0") {
      if (isBetweenZero) {
        isBetweenZero = false;
        return `零${digits[Number(char)]}${units[charArray.length - 1 - index]}`;
      }
      if (!isBetweenZero) {
        return `${digits[Number(char)]}${units[charArray.length - 1 - index]}`;
      }
    }
    isBetweenZero = true;
    return "";
  });
  return result.join("");
}

export default number2hans;
