let reg1=/^[0-9]{3,3}[\-][0-9]{3,3}[\-][0-9]{4,4}$/;
let reg2=/^[0-9]{1,1}[\s][0-9]{3,3}[\-][0-9]{3,3}[\-][0-9]{4,4}$/;
let reg3=/^[0-9][\s][0-9]{3,3}[\s][0-9]{3,3}[\s][0-9]{4,4}$/;
let reg4=/^[0-9]{10,10}$/;
let reg5=/^[1]{0,1}[\s]{0,1}[\(][0-9]{3,3}[\)][\s]{0,1}[0-9]{3,3}[\-][0-9]{4,4}$/;
function telephoneCheck(str) {
  let check=(reg1.test(str))||
    (reg2.test(str))||(reg3.test(str))||(reg4.test(str))||(reg5.test(str));
  return check;
        }
let userInput=document.getElementById("user-input");
let checkBtn=document.getElementById("check-btn");
let clearBtn=document.getElementById("clear-btn");
let resultsDiv=document.getElementById("results-div");
checkBtn.addEventListener("click",()=>{
  if(userInput.value===""){
      alert("Please provide a phone number") ; }
  else if(telephoneCheck(userInput.value)) {
   resultsDiv.textContent=`Valid US number: ${userInput.value}`;
  }  
else{
  resultsDiv.textContent=`Invalid US number: ${userInput.value}`;
}
      } );
clearBtn.addEventListener("click",()=>{
  resultsDiv.textContent="";
})
