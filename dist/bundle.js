(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    // 类最早都是用构造函数来替代的，
    // 1. ts 中定义类
    var Pointer = /** @class */ (function () {
        // 构造函数中的参数可以使用可选参数和剩余参数
        function Pointer(x, y) {
            this.y = y;
            // 初始化操作
            this.x = x;
            // this.y = y
        }
        return Pointer;
    }());
    var pointer = new Pointer(100, 1);
    console.log(pointer.x, pointer.y);
    // 类的修饰符
    // public ：是属性修饰符，谁都可以（自己，子类，实例）访问到，
    // protected: 自己和子类可以访问到，
    // private: 只有自己可以访问到，
    // readonly: 仅读修饰符，
    // protected和private可以用来修饰构造函数，
    var Animal = /** @class */ (function () {
        function Animal(name, age) {
            this.name = name;
            this.age = age;
        }
        Animal.getName = function () {
            // 静态方法，挂在该类上
            return '动物';
        };
        Object.defineProperty(Animal.prototype, "name1", {
            get: function () {
                return '属性访问器' + this.name;
            },
            enumerable: false,
            configurable: true
        });
        Animal.prototype.say = function () {
            // 挂在原型上的方法
            console.log('父');
        };
        Animal.type = '哺乳动物'; // 静态属性，es7语法
        return Animal;
    }());
    var animal = new Animal('monkey', 11);
    console.log(animal.name1);
    // animal 实例可以访问 name age name1 say()方法
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        // super 默认在构造函数中和静态方法中都指向自己的父类, 在原型方法中super指向父类的原型
        function Cat(name, age) {
            var _this = _super.call(this, name, age) || this;
            console.log(_this.name, _this.age); // 子类访问
            return _this;
        }
        // 静态方法可以被继承，这里算是重写
        Cat.getName = function () {
            console.log(_super.getName.call(this));
            return '猫';
        };
        Cat.prototype.say = function () {
            _super.prototype.say.call(this);
        };
        Cat.type = '猫科动物';
        return Cat;
    }(Animal));
    var cat = new Cat('cat', 1);
    console.log(cat);

}());
//# sourceMappingURL=bundle.js.map
