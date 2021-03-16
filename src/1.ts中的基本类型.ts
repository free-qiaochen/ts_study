// TS中冒号后面的都为类型标识，ts的核心：一切都已安全为准
// 1.基础类型
// 最基本的有: number string boolean
let num1: number = 1
let str: string = 'zf'
let bool: boolean = true

// number和 Number区别：number是ts类型，Number是js对象（Number包装类型，js特性装箱，）
let num2: Number = new Number(1)
let num3: Number = 1 // Number 用来描述实例的，注意它在ts中是用接口实现的

// 2. 数组类型：一类类型的集合
const arr1: number[] = []
const arr2: (number | string)[] = ['a', 1] // 并集的含义
// 如果数组里放的内容 就是无规律的, 有规律的数组
const arr3: any[] = ['', 1, {}]
const arr4: Array<boolean> = [true, false]

arr1.push(1)
// arr1.push('1') //error
console.log(num1, arr1) //1 [1]

// 3.元组 ts中自己实现的，内容固定，类型固定
let tuple: [string, number, boolean] = ['a', 1, false]
console.log(tuple[1]) // 1
tuple.push(1, '11', true) // 在放入的时候 可以放入元组中定义的类型
// tuple[2] = 1 // error 不能通过索引更改元组
console.log(tuple) // ["a", 1, false, "11"]

// 4.枚举:普通枚举，异构枚举，常量枚举，

enum ROLE {
  USER, // 普通枚举，默认从0开始，下方是编译后结果，可以反举
  ADMIN,
  MANAGER,
}

// var ROLE;
// (function (ROLE) {
//     ROLE[ROLE["USER"] = 0] = "USER";
//     ROLE[ROLE["ADMIN"] = 1] = "ADMIN";
//     ROLE[ROLE["MANAGER"] = 2] = "MANAGER";
// })(ROLE || (ROLE = {}));

// 异构枚举：（其中的值是索引的可以反举，）
enum ROLE1 {
  USER = 'user', // 不可反举
  ADMIN = 3, // 可反举
  MANAGER, // 可反举
}
console.log(ROLE1[3]) // ADMIN

// var ROLE1;
//   (function (ROLE1) {
//       ROLE1["USER"] = "user";
//       ROLE1[ROLE1["ADMIN"] = 3] = "ADMIN";
//       ROLE1[ROLE1["MANAGER"] = 4] = "MANAGER";
//   })(ROLE1 || (ROLE1 = {}));
//   console.log(ROLE1[3]);

// 常量枚举，(前边添加const,)
const enum ROLE2 {
  USER,
  ADMIN,
  MANAGER,
}
// console.log(ROLE2)  // error,不声明对象，
console.log(ROLE2.USER, ROLE2.ADMIN, ROLE2.MANAGER)
// 常量枚举编译后结果如下：
// console.log(0 /* USER */, 1 /* ADMIN */, 2 /* MANAGER */);

// 5. any 类型：不进行类型检测

// 6. null和undefined: 是任何类型的子类型,
// 如果strictNullChecks的值为true，则不能把null 和 undefined付给其他类型
let name1: number | boolean
name1 = null
name1 = undefined
let u: undefined = undefined
let n: null
u = null
n = undefined

// 7. void类型：只能接受null，undefined。一般用于函数的返回值
// 严格模式下不能将null赋予给void
let a: void
a = undefined
a = null

// 8. never 类型：是任何类型的子类型
// 出错，死循环，永远走不到的判断；代表不会出现的值，不能把其他类型的值赋给never

function error(): never {
  throw new Error()
}
function loop(): never {
  while (true) {}
}

// 9. Symbol 类型 js的类型
const s1: Symbol = Symbol('key')

// 10. BigInt类型 js的类型,number类型和bigint类型是不兼容的
let max = Number.MAX_SAFE_INTEGER
console.log(max)
let r1: bigint = BigInt(max) + BigInt(2)
console.log(r1)

// 11. object 类型：object表示非原始类型
function create(obj: object) {}
create({})
create([])
create(function () {})

export {} // 防止模块之间的数据共享

// 数字 字符串 布尔，数组 元组，枚举，any null undefined void never object
