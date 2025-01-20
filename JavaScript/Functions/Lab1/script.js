let email="apple.pie@example.com";

const maskEmail=(email)=>{
  let ind=email.indexOf("@");
  let masked=email[0]+"*".repeat(ind-2)+email[ind-1]+"@"+email.slice(ind+1,email.length);
  return masked;
}
console.log(maskEmail(email));
