// 方式一：递归普通版，数据大时
function fibonacciRecursion(num) {
  // num不是正整数
  if (num !== Math.ceil(Math.abs(num))) {
    throw new Error("传入的参数必须是正整数，当前实参值为：" + num);
  }

  // num 必须是大于2的正整数
  return num <= 2 ? num : fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
}

// 方式二：递归优化版，数据大时栈不溢出
function fibonacciRecursionOptimize(num, lastTowNum, lastNum) {
  // num不是正整数
  if (num !== Math.ceil(Math.abs(num))) {
    throw new Error("传入的参数必须是正整数，当前实参值为：" + num);
  }

  lastTowNum = lastTowNum || 1;
  lastNum = lastNum || 1;

  return num <= 1 ? lastNum : fibonacciRecursionOptimize(num - 1, lastNum, lastTowNum + lastNum);
}

// 方式三：循环版
function fibonacciLoop(num) {
  // num不是正整数
  if (num !== Math.ceil(Math.abs(num))) {
    throw new Error("传入的参数必须是正整数，当前实参值为：" + num);
  }

  if (num <= 2) { return num; }

  // num 必须是大于2的正整数
  var lastTowNum = 1,
    lastNum = 2,
    i = 3
    ;

  for (; i <= num; i++) {
    lastNum += lastTowNum;
    lastTowNum = lastNum - lastTowNum;
  }

  return lastNum;
}

// 方式四：记忆（闭包）版
function fibonacciMemory(num) {
  // num不是正整数
  if (num !== Math.ceil(Math.abs(num))) {
    throw new Error("传入的参数必须是正整数，当前实参值为：" + num);
  }

  if (num <= 2) { return num; }

  var meno = [1, 2],
    recur = function (num) {
      num -= 1;
      if (!meno[num]) {
        meno[num] = recur(num) + recur(num - 1);
      }

      return meno[num];
    }
    ;

  return recur(num);
}

// 方式五：ES6构造器版
function* fibonacci() {
  let [prev, curr] = [1, 2];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}
function fibonacciGenerator(num) {
  // num不是正整数
  if (num !== Math.ceil(Math.abs(num))) {
    throw new Error("传入的参数必须是正整数，当前实参值为：" + num);
  }

  if (num <= 2) { return num; }

  let ac = 0;
  const fibo = fibonacci();
  for (let i = 3; i <= num; i++) {
    ac = fibo.next();
  }

  return ac.value;
}