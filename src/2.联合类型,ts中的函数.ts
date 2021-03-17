// 声明变量以及赋值会默认进行类型推导，（声明变量赋值时 以赋值类型为准）
// 1. 联合类型
let numOrStr: string | number
// 默认联合类型 在没有确定类型之前 只能调用两个类型共同的方法
// 在变量确定类型后 可以设置对应的方法
numOrStr = 1
numOrStr

// 2. 类型断言
// 1> ! 非空断言，表示这个东西一定有值，告诉ts按照我的想法来，
// 2> as 或者 <> ，直接强转某个类型，强制告诉人家，这个类型就是里面的某一个，强转要求必须联合类型中有才行
// 尽量使用第一种类型断言因为在react中第二种方式会被认为是jsx语法
let a: string | number

// a as string
// a as boolean // error

// 双重断言
let name: string | boolean
;(name! as any) as string
// 尽量不要使用双重断言，会破坏原有类型关系，断言为any是因为any类型可以被赋值给其他类型

// 3. 字面量类型
type Direction = 'Up' | 'Down' | 'left' | 'Right'
let direction: Direction = 'Up' // 只能赋值以上声明的值
// 可以用字面量当做类型，同时也表明只能采用这几个值（限定值）。类似枚举。

// 4. 函数类型
// 可以用来限制函数的参数和返回值类型
// 1> 通过函数关键字(可以重载)声明函数：
function sum(a: string, b: string): string {
  return a + b
}
sum('', 'not string will warn')
// 2> 通过表达式方式（类型确定）声明
type Sum = (a1: string, b1: string) => string
let sum1: Sum = (a, b) => {
  return a + b
}
// 函数关键字声明不能这样给定类型？？
// function sum2:Sum(a, b) {
//   return a + b
// }
// sum2()
sum1('', '')

// 可选参数：?
let sum3 = (a: string, b?: string): string => {
  return a + b
}
sum3('a') // 可选参数必须在其他参数的后面

// 默认参数：=
let sum4 = (a: string, b: string = 'bb'): string => {
  return a + b
}
sum4('a') // 默认参数必须在其他参数的后面
// 剩余参数
const sum5 = (a: string, ...args: string[]): string => {
  return args.reduce((memo, current) => memo + current, a)
}

console.log(sum5('a', 'b', 'c', 'dd'))
// 函数的重载
// 一个方法 根据参数的不同实现不同的功能 , ts目的就是根据不同的参数返回类型
function toArray(value: number): number[]
function toArray(value: string): string[]
function toArray(value: number | string) {
  // 重载方法在真实方法的上面
  if (typeof value == 'string') {
    return value.split('')
  } else {
    return value
      .toString()
      .split('')
      .map((item) => Number(item))
  }
}
console.log(toArray('123'))
console.log(toArray(123))

export {}
