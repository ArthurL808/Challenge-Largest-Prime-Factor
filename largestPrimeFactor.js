exports.largestPrimeFactor = function(n) {
  let primeNumber = 0;
  for (let i = 2; i <= n/i; i++) {
    if (n % i == 0) {
      n = n / i
      primeNumber = n
    }
  }
  return primeNumber;
};
