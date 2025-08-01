import {describe, test, it, expect} from "Vitest";
import { max } from "../max";
import { fizzBuzz } from "../max";
import { calculateAverage } from "../max";
import { factorial} from "../factorial";
describe('max', () => {
  it('should return the first argument if it is greater',() =>{
    // AAA
    // Arrange : Turn on the TV
    // Act : Press the power button
    // Assert: Verify TV is off
    // Arrange
    const a=2;
    const b=1;
    // first argument to be greater

    // Act
    const result = max(a,b);

    // Assert
    expect(result).toBe(2);


    // or
    expect(max(2, 1)).toBe(2);

  });
  it('should return second argument if it is greater', () =>{
    expect(max(1,2)).toBe(2);
  });
  it('should return the first argument if arguments are equal',()=>{
    expect(max(1,1)).toBe(1);
  })
})

describe('fizzBuzz', () =>{
  it('should return FizzBuzz if arg is divisible by 3 and 5',() => {
    expect(fizzBuzz(15)).tobe('FizzBuzz');
  });
  it('should return Fizz if arg is only divisible by 3 ', () =>{
    expect(fizzBuzz(9)).toBe('Fizz');
  });
  it('should return Buzz if arg is only divisible by 5 ', () =>{
    expect(fizzBuzz(10)).toBe('Buzz');
  });
  it('should return arg as a string if it is not divisible by 3 or 5', () =>[
    expect(fizzBuzz(1)).toBe('1')
  ])
})


describe('calculateAverage', ()=>{
  it('should return NaN if given an empty array',() =>{
    expect(calculateAverage([])).toBe(NaN);
  });
  it('should calculate the average of an array with a single element', () =>{
    expect(calculateAverage([1])).toBe(1);
    // first it fail due to insufficient code(only have return NaN)
    // so write just enough code to make the test
  });
  it('should Calculate the average of an array with 2 elements', () =>{
    expect(calculateAverage([1, 2])).toBe(1.5);
    // third
  });
  it('should Calculate the average of an array with 2 elements', () =>{
    expect(calculateAverage([1, 2, 3])).toBe(2);
    // third
  })
})

describe('factorial', () =>{
  it('should return 1 if given 0',()=>{
    expect(factorial(0)).toBe(1);
  });
  it('should return 1 if given 1', ()=>{
    expect(factorial(1)).toBe(1);
  });
  it('should return 2 if given 2',()=>{
    // here it fail
    expect(factorial(2)).toBe(2);
    // secondly
  });
  it('should return 6 if given 3', ()=>{
    expect(factorial(3)).toBe(6);
    // thirdly
  });
  it('should return 24 if given 4', ()=>{
    expect(factorial(4)).toBe(24);
  });
  it('should return undefined if given a negative number', ()=>{
    expect(factorial(-1)).toBe(undefined);
    // or
    expect(factorial(-1)).toBeUnfined();  //toBe, tobeUndefined => matcher function
    // 4th
  })
})