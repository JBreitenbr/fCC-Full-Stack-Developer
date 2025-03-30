let num=5;
const factorialCalculator=(num)=>{
  let fac=1;
  for(let i=1;i<=num;i++){
    fac*=i;
  }
  return fac;
}
let factorial=factorialCalculator(num);
let resultMsg="Factorial of " +num+" is "+factorial;
console.log(resultMsg);
