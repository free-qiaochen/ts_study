// 类最早都是用构造函数来替代的，
// 1. ts 中定义类
class Pointer {
  x: number // 实例上的属性必须先声明再使用
  xx: number
  // 构造函数中的参数可以使用可选参数和剩余参数
  constructor(x: number, public y: number) {
    // 初始化操作
    this.x = x
    // this.y = y
  }
}

let pointer = new Pointer(100, 1)
console.log(pointer.x, pointer.y)

// 类的修饰符
// public ：是属性修饰符，谁都可以（自己，子类，实例）访问到，
// protected: 自己和子类可以访问到，
// private: 只有自己可以访问到，
// readonly: 仅读修饰符，
// protected和private可以用来修饰构造函数，
class Animal {
  public name: string // 不写public，默认也是公开的（public）
  public age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  static type = '哺乳动物' // 静态属性，es7语法
  static getName() {
    // 静态方法，挂在该类上
    return '动物'
  }
  get name1() {
    return '属性访问器' + this.name
  }
  say() {
    // 挂在原型上的方法
    console.log('父')
  }
}
const animal = new Animal('monkey', 11)
console.log(animal.name1)
// animal 实例可以访问 name age name1 say()方法

class Cat extends Animal {
  // super 默认在构造函数中和静态方法中都指向自己的父类, 在原型方法中super指向父类的原型
  constructor(name: string, age: number) {
    super(name, age)
    console.log(this.name, this.age) // 子类访问
  }
  static type='猫科动物';
  // 静态方法可以被继承，这里算是重写
  static getName(){// 静态方法中的super指代的是父类
    console.log(super.getName())
    return '猫'
  }
  say(){// 原型方法中的super指向的是父类的原型
    super.say()
  }
}
const cat = new Cat('cat',1)

console.log(cat)

// 类中的装饰器


export {}
