const lexi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
const generatePassword = (num)=>{
  let wrd="";
  for(let i=0;i<num;i++){
    let rnd=Math.floor(Math.random()*lexi.length);
    wrd+=lexi[rnd];
  }
  return wrd;
}
let password=generatePassword(5);
console.log("Generated password: " +password);
