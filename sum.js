let sum = 0;
let odd =  0;


for (let i = 1; i <= 10; i++) {
  sum += i;
  if (i % 2 !== 0) {
    odd += i;
  }
}
console.log(sum);
console.log(odd);