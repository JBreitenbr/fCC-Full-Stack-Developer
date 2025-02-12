let price = (Math.random()*100).toFixed(2);
price=19.5;
const pchBtn=document.getElementById("purchase-btn");
let cash=document.getElementById("cash");

let changeDue=document.getElementById("change-due");
let cid = [
  ['PENNY', 0.01],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 1],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
];

const cashCalc=()=>{
let coins=[100,20,10,5,1,0.25,0.1,0.05,0.01];
let cashCont=[];
let cashContCpy=[];
for(let i=cid.length-1;i>=0;i--){
  cashCont.push(cid[i][1]);
  cashContCpy.push(cid[i][1]);
}
let retAmount=cash.value-price;
let toGive=[];
while(cashCont.length>0){
    if(retAmount-cashCont[0]>=0){
    toGive.push(cashCont[0]);
    retAmount-=cashCont[0];
} else{
let hvar=(retAmount-((retAmount%coins[0]).toFixed(2)))/coins[0];
toGive.push(parseFloat((hvar*coins[0]).toFixed(2)));
retAmount-=hvar*coins[0];
} 
cashCont.shift(cashCont[0]);
coins.shift(coins[0]);
 }
console.log(toGive);
let sumCashCont=cashContCpy.reduce((a,b)=>a+b,0);
let sumToGive=toGive.reduce((a,b)=>a+b,0);
if(sumToGive < retAmount){
  return {status: "INSUFFICIENT_FUNDS",change: []}; }
else if(sumCashCont==retAmount){return {status:"CLOSED", change:cid};
       } else {
  let _cid=cid.reverse();
  for(let i=0;i<9;i++){
       _cid[i][1]=toGive[i];
  }
  let newCid=cid.filter((item)=>item[1]>0);
       return {status:"OPEN",change:newCid};
       }
}
const cashRegister = () => {
  if(Number(cash.value) < price) {
alert('Customer does not have enough money to purchase the item');
} else if(Number(cash.value) == price) {
changeDue.textContent = 'No change due - customer paid with exact cash';
  }
  else {
    let resObj=cashCalc();
    if(resObj.status=="INSUFFICIENT_FUNDS"){
changeDue.textContent="Status: INSUFFICIENT_FUNDS";
    }   
    else {
      let resStri="Status: "+resObj.status+" ";
    for(let i=0;i<resObj.change.length;i++){
      resStri+=resObj.change[i][0]+": $"+resObj.change[i][1]+" ";
    }
    changeDue.textContent=resStri;
  }
  }
}
pchBtn.addEventListener("click",cashRegister);
