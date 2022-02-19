// 實作 Fibonacci number (費式數列)
// 建立函式 fibonacci 代入參數 position，position 表示的是想要得到 fibonacci sequence 中的第幾個數字的值。
// fibonacci(0) // 0
// fibonacci(1) // 1
// fibonacci(2) // 1
// fibonacci(3) // 2
// fibonacci(4) // 3

//fib-for loop
function fib(n){
  const result=[0,1]
  for(let i=2; i<=n; i+=1){
      result.push(result[i-1]+result[i-2])
  }
  return result[n]
}

//fib-recursive
function fibRecursive(n){
  if(n<=1) return 1
  return fib(n-1) + fib(n-2)
}

//fib-recursive with cache
function fibRecursiveCached(n, memo){
  memo = memo || {};
  if(memo[n]) return memo[n]
  if(n<=1) return 1
  
  return memo[n] = fib(n-1,memo)+fib(n-2,memo)
}

//fib-while loop with cache
function fibWhileCached(n){
  let next = 1 
  let target = 0
  let cache = 0
  while(n>=0){
      cache = next
      next = next+target
      target = cache
      n -= 1
  }
  return target
}