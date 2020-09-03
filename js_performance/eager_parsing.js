//函数饥饿解析例子
export default () => {
  const add = ((a, b) => a + b); //包一对括号告诉解析器，看到函数时即进行解析
  const num1 = 1;
  const num2 = 2;
  add(num1, num2)
}