// ts 中的接口
// 接口可以在面向对象编程中表示行为的抽象，描述对象的形状和结构，为代码定义契约； (接口中不能含有具体的实现逻辑)
// interface 可以被类实现和继承，type不可以
// type是别名，可以使用联合类型，interface不可以

let school = {
  // 接口默认的功能是规范类型的，数据默认有反推功能
  name: 'zf',
  age: 12,
}
type schools = Array<typeof school>
let mySchools: schools = [{ name: '', age: 11 }]

// 1> 如何用接口描述对象类型，
interface IObj {
  name: string
  age: number
}
const getObj = (obj: IObj) => {}
getObj({ name: '', age: 1 })

// 2> 描述函数类型
interface ISum {
  (a: string, b: string): string
}
// type ISum = (a:string, b: string)=>string
const sum: ISum = (a, b) => {
  return a + b
}

// 3> 函数混合类型
interface ICounter {
  (): number // 限制函数类型
  count: number // 限制函数上的属性
}
const fn: ICounter = (() => {
  return ++fn.count
}) as ICounter // 有括号需要该断言
fn.count = 2

console.log(fn())
console.log(fn())

// 4> 对象接口：可以用来描述对象的形状结构
// 多个同名接口会自动合并
interface IVegetavles {
  readonly color: string // readonly标识的属性不可更改
  size: string
}
interface IVegetavles {
  taste: 'sour' | 'sweet'
  age?: number // ?标识的属性为可选属性，
}
const tomato: IVegetavles = {
  color: 'red',
  size: '11',
  taste: 'sweet',
}
const tomato1: IVegetavles = {
  color: 'red',
  size: '11',
  taste: 'sweet',
  age: 11,
  type: '蔬菜', // 多余的属性可以使用类型断言
} as IVegetavles
// 5> 任意属性，可索引接口
// 任意属性可以对某一部分必填属性做限制，其余的可以随意增减
interface IPerson {
  name: string
  [ksy: string]: any
}
let p: IPerson = {
  name: 'cq',
  a: 1,
}
interface IArr {
  [key: number]: any
}
let p1: IArr = { 0: 1, 1: 'aa' }
let arr: IArr = [1, 'a', 'c'] // 可索引接口可以用于标识数组

// 6> 类接口
