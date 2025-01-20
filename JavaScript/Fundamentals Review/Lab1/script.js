const revStri=(stri)=>{
  return stri.split("").reverse().join("");
}

const pyramid=(sym,num,dir)=>{
  let arr=[];
  for(let i=1;i<2*num;i+=2){
    let stri=sym.repeat(i)+" ".repeat(num-Math.ceil(i/2))+"\n";
    arr.push(revStri(stri));
    }
    let res=dir?arr.reverse().join("")+"\n":arr.join("")+"\n";
    return res;
}

