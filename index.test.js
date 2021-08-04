import { add } from "./index";
test('adds undefined + 2 to equal NaN', () => {
  expect(add(undefined, 2)).toBe(NaN);
});


// lesson 1
describe("addString", () => {
  it('addString a + b equal  "ab" ', () => {
    if (typeof a === "string" || typeof b === "string")
      expect(addString(a, b)).toBe('ab');
  });
  it('addString a +  b equal  a1', () => {
    if (typeof a === "string" && b === 1) {
      expect(addString(a, b)).toBe('a1');
    }
  });
  it('addString a + 1 b equal -1', () => {
    if (typeof a === 1 && b === 1) {
      expect(addString(a, b)).toBe(-1);
    }
  });
})

// lesson2
import { toNumber } from "./index";
  describe("toNumber",() => {
    it('toNumber 0.1 equal 0',() => {
      expect(toNumber(0.1)).toBe(0);
    });
      it('toNumber a equal NaN',() => {
    expect(toNumber('a')).toBe(NaN);
    });
    it('toNumber 1000a equal 1000',() => {
    expect(toNumber('1000a')).toBe(1000);
  });
  });


  // lesson3
import { filterOrange } from "./index"; 
const fruit = ["orange", "apple", "peach"];
test('filterOrange equal orange', () => {
  expect(filterOrange(fruit)).toContain('orange');
});
