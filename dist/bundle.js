(function () {
	'use strict';

	// TS中冒号后面的都为类型标识
	// 1.基础类型
	// : number string boolean 
	var num1 = 1;
	// ??? Number
	var arr1 = [];
	arr1.push(1);
	// arr1.push('1') //error
	console.log(num1, arr1);
	// 元组
	var tuple = ['a', 1, false];
	console.log(tuple[1]);

}());
//# sourceMappingURL=bundle.js.map
