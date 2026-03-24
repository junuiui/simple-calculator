/**
 * math.calculation.ts
 * 
 * Calculating Logics
 *  1. Addition
 *  2. Substraction
 *  3. Division
 *  4. Multiplication
 *  5. Power (Exponent)
 */

export const add = (a: number, b: number): number => a + b;

export const subtract = (a: number, b: number): number => a - b;

export const multiply = (a: number, b: number): number => a * b;

export const divide = (a: number, b: number): number => {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
};

export const power = (a: number, b: number): number => Math.pow(a, b);