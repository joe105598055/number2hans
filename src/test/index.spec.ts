import { equal } from "assert";
import number2hans from "../index";

describe.only("Number to Hans", function () {
  it("One digit.", function () {
    equal(number2hans(1), "壹");
    equal(number2hans(2), "貳");
    equal(number2hans(3), "參");
    equal(number2hans(4), "肆");
    equal(number2hans(5), "伍");
    equal(number2hans(6), "陸");
    equal(number2hans(7), "柒");
    equal(number2hans(8), "捌");
    equal(number2hans(9), "玖");
    equal(number2hans(0), "零");
  });

  it("Two digits.", function () {
    equal(number2hans(10), "壹拾");
    equal(number2hans(11), "壹拾壹");
    equal(number2hans(19), "壹拾玖");
    equal(number2hans(91), "玖拾壹");
  });

  it("Three digits.", function () {
    equal(number2hans(201), "貳佰零壹");
    equal(number2hans(222), "貳佰貳拾貳");
    equal(number2hans(220), "貳佰貳拾");
    equal(number2hans(901), "玖佰零壹");
  });
});
