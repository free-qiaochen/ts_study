(function () {
  'use strict';

  var fn = (function () {
      return ++fn.count;
  }); // 有括号需要该断言
  fn.count = 2;
  console.log(fn());
  console.log(fn());
  // 6> 类接口

}());
//# sourceMappingURL=bundle.js.map
