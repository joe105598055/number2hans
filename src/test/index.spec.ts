import { describe, expect, test } from "vitest";
import number2hans from "../index";

describe("Number to Hans", () => {
  test("One digit.", () => {
    expect(number2hans(1)).toBe("壹");
    expect(number2hans(2)).toBe("貳");
    expect(number2hans(3)).toBe("參");
    expect(number2hans(4)).toBe("肆");
    expect(number2hans(5)).toBe("伍");
    expect(number2hans(6)).toBe("陸");
    expect(number2hans(7)).toBe("柒");
    expect(number2hans(8)).toBe("捌");
    expect(number2hans(9)).toBe("玖");
    expect(number2hans(0)).toBe("零");
  });

  test("Two digits.", () => {
    expect(number2hans(10)).toBe("壹拾");
    expect(number2hans(11)).toBe("壹拾壹");
    expect(number2hans(19)).toBe("壹拾玖");
    expect(number2hans(91)).toBe("玖拾壹");
  });

  test("Three digits.", () => {
    expect(number2hans(201)).toBe("貳佰零壹");
    expect(number2hans(222)).toBe("貳佰貳拾貳");
    expect(number2hans(220)).toBe("貳佰貳拾");
    expect(number2hans(901)).toBe("玖佰零壹");
  });

  test("issue #1", () => {
    expect(number2hans(709999)).toBe("柒拾萬玖仟玖佰玖拾玖");
    expect(number2hans(4010700999)).toBe("肆拾億壹仟零柒拾萬零玖佰玖拾玖");
    expect(number2hans(1000000000001)).toBe("壹兆零壹");
    expect(number2hans(100000)).toBe("壹拾萬");
  });
});
