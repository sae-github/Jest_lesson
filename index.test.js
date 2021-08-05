import { add , addString , toNumber, filterOrange } from "./index";

test('Input undefined + 2 in add return NaN', () => {
  expect(add(undefined, 2)).toBe(NaN);
});


// lesson 1
describe("addString", () => {
  it('Input "a" + "b" in addString return "ab"', () => {
    expect(addString('a', 'b')).toBe('ab');
  });
  it('Input "a" + 1 in addString return "a1"', () => {
    expect(addString('a', 1)).toBe('a1');
  });
  it('Input 1 + 1 in addString return -1', () => {
    expect(addString(1, 1)).toBe(-1);
  });
})

// lesson2
describe("toNumber", () => {
  it('Input 0.1 in toNumber return 0', () => {
    expect(toNumber(0.1)).toBe(0);
  });
  it('Input "a" in toNumber return NaN', () => {
    expect(toNumber('a')).toBe(NaN);
  });
  it('Input "1000a" in toNumber return 1000.', () => {
    expect(toNumber('1000a')).toBe(1000);
  });
});

// lesson3
const fruit = ["orange", "apple", "peach"];
describe("filterOrange", () => {
  it('Input contain array contain orange, array contain orange is return.', () => {
    expect(filterOrange(fruit)).toContain('orange');
  });
  it('Input does not contain orange, return an error', () => {
    expect(() => {
      filterOrange(false);
    }).toThrow();
  });
});



