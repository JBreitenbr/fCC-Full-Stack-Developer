const regexPattern=document.getElementById("pattern");
const stringToTest=document.getElementById("test-string");
const testButton=document.getElementById("test-btn");
const testResult=document.getElementById("result");
let caseInsensitiveFlag = document.getElementById("i");
let globalFlag=document.getElementById("g");

function getFlags() {
  if(caseInsensitiveFlag.checked && !globalFlag.checked){return "i";}
        else if(!caseInsensitiveFlag.checked && globalFlag.checked){
                          return "g";}
                          else if(caseInsensitiveFlag.checked && globalFlag.checked) {  return "ig";}
                          else { return "";}
                          } function checkEx(){
                            let regex=new RegExp(regexPattern.value,getFlags());
                            let testStri=stringToTest.innerText;
                            let m=testStri.match(regex);
                            let test=regex.test(testStri);
                            if(!test){testResult.innerText="no match";}
                            else { 
                              if(!getFlags() || getFlags()==="i"){
                                  stringToTest.innerHTML=testStri.replace(m[0],`<span class="highlight">${m[0]}</span>`);
                                       testResult.innerText=m[0];}    
else if(getFlags()==="g" || getFlags()==="ig")    {
  let indi=[];
  let ind=testStri.indexOf(m[0]);
  indi.push(ind);
  let tr=[];
  let subs=[];
  let l=[];
  let hlp=[];
  let erg=[];
  for(let i=0;i<m.length;i++){l.push(m[i].length);}
  tr.push(`<span class="highlight">${m[0]}</span>`);
  let ma=[...testStri.matchAll(regex)];
  for(let i=0;i<ma.length;i++){indi.push(ma[i].index);}
  for(let i=1;i<m.length;i++){
tr.push(`<span class="highlight">${m[i]}</span>`);}
for(let j=0;j<indi.length-1;j++){
          hlp.push(testStri.slice(indi[j],indi[j+1]));
                    }
hlp.push(testStri.slice(indi[indi.length-1],testStri.length));
for(let j=0;j<hlp.length;j++){erg.push(hlp[j].replace(m[j],tr[j]));}
    if(indi[0]!==0){
          erg.unshift(testStri.slice(0,indi[0]));
              }
                  stringToTest.innerHTML=erg.join("");
                    testResult.innerText=m.join(", ");         
}
}           }                              
                              testButton.addEventListener("click",checkEx);                
