const {
  performance,
  PerformanceObserver
} = require('perf_hooks') //nodejs监控

const add = (a, b) => a + b;

const num1 = 1;
const num2 = 2;

performance.mark('start'); //开始标记

for (let i = 0; i < 10000000; i++) {
  add(num1, num2);
}
add(num1, 's'); //去掉这刚比较结果
for (let i = 0; i < 10000000; i++) {
  add(num1, num2);
}
performance.mark('end'); //结束标记

const observer = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0])
})
observer.observe({
  entryTypes: ['measure']
})

performance.measure('测量1', 'start', 'end');