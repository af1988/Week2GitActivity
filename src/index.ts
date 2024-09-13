import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
console.log(`result_add = ${result_add}`);

const result_subtract = calc.subtract(5, 4);
console.log(`result_subtract = ${result_subtract}`);

const result_multi = calc.multiply(5, 4);
console.log(`result_multi = ${result_multi}`);
