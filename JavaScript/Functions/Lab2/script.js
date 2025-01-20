let year=2000;
const isLeapYear=(year)=>{
  let cond1=year%4==0;
  let cond2=year%100==0;
  let cond3=year%400==0;
  let boolVar;
  if(!cond1) boolVar=false;
  else {
     boolVar=cond2?(cond3?true:false):true;
  }
  return boolVar?""+year+" is a leap year.":""+year+" is not a leap year.";
}
let result=isLeapYear(year);
console.log(result);
