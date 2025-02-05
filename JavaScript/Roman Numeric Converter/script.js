function convertToRoman(numToConv) {
let nums=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
let romans=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
   let romRes="";
   while(numToConv > 0){ 
     for(let i=0; i<romans.length; i++){
         if(numToConv >= nums[i]){
numToConv=numToConv-nums[i];romRes=romRes+romans[i];
break;
}
  }
    }
return romRes;                         }                      
let convertBtn=document.getElementById("convert-btn");
let inputF=document.getElementById("number");
let outputF=document.getElementById("output");
convertBtn.addEventListener("click",()=>{
  if(inputF.value===""){
    outputF.textContent="Please enter a valid number"
  } else if(Number(inputF.value)<=0)
{
  outputF.textContent="Please enter a number greater than or equal to 1"
} else if(Number(inputF.value)>=4000){
  outputF.textContent= "Please enter a number less than or equal to 3999"
} else {
  outputF.textContent=convertToRoman(Number(inputF.value));
}
});
