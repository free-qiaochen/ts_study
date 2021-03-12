// TS中冒号后面的都为类型标识
// 1.基础类型
// : number string boolean 
let num1: number = 1
let str: string = 'zf';
let bool: boolean = true;

// ??? Number

const arr1: number[] = []
const arr2: (number | string)[] = ['a', 1]; // 并集的含义
// 如果数组里放的内容 就是无规律的, 有规律的数组 
const arr3: any[] = ['', 1, {}];
const arr4: Array<boolean> = [true, false];

arr1.push(1)
// arr1.push('1') //error
console.log(num1, arr1)

// 元组
let tuple:[string,number,boolean] = ['a',1,false]
console.log(tuple[1])
tuple.push('w')
