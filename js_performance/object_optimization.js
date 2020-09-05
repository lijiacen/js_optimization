/**
 *js对象优化 
 */

/**
 * 1.以相同顺序初始化对象成员，避免隐藏类的调整
 * 创建对象时，编辑器会去创建对应的hidden class，如果后面创建的对象按照相同的顺序，则可以直接复用之前的hidden class
 */
class ReacArea { //HC0 (hidden class)
  constructor(l, w) {
    this.l = l; //HC1 (hidden class)
    this.w = w; //HC2 (hidden class)
  }
}
const rect1 = new ReacArea(3, 4);
const rect1 = new ReacArea(3, 4);

//反例
const car1 = {
  color: 'red'
} //HC0
car1.seats = 4; //HC1

const car2 = {
  seats: 2
} //HC2
car2.color = 'blue'; //HC3
//car2 无法复用car1

/**
 * 2.实例化后避免添加新属性
 */
const car3 = {
  color: 'red'
} // in-object属性
car3.seats = 6; //Normal/Fast属性，存储在property store中，需要通过数组间接查找

/**
 * 3.使用Array代替 array-like对象
 */
Array.prototype.forEach.call(arrObj, (value, index) => {
  //不如在真实数组上效率高
  console.log(`${index}:${value}`)
})
//替代方案，转为数组后在遍历
const arr = Array.prototype.slice.call(arrObj, 0);
arr.forEach((value, index) => {
  console.log(`${index}:${value}`)
})

/**
 * 4.避免数组越界 越界的数组index，会导致往原型链上去查找，影响性能，造成额外的开销
 */

/**
 * 5.避免元素类型转换
 */