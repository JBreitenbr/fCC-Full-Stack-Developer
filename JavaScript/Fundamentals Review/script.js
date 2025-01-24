let inventory=[];
const findProductIndex=(product)=>{
  let prod=product.toLowerCase();
  if(inventory.length==0){
    return -1;
  }
  else {
  for(let i=0;i<inventory.length;i++){
  let ind=inventory[i].name.toLowerCase().indexOf(prod);
    if(ind>-1){
      return i;
    }
  }
}
  return -1;
}

const addProduct=(prodObj)=>{
  let prod=prodObj.name.toLowerCase();
  let ind=findProductIndex(prod);
  if(ind==-1){
    inventory.push({name:prod,quantity:prodObj.quantity});   console.log(prod+" added to inventory");
  }
  else {
  inventory[ind].quantity+=prodObj.quantity;
  console.log(inventory[ind].name+" quantity updated");
  }
  return inventory;
}

const removeProduct=(name,quantity)=>{
  let ind=findProductIndex(name);
  if(ind>-1){
    if(inventory[ind].quantity>quantity){
    inventory[ind].quantity-=quantity;
    console.log("Remaining "+name.toLowerCase()+" pieces: "+inventory[ind].quantity);
  }
  else if(inventory[ind].quantity==quantity){
    inventory.splice(ind,1);
  }
  else {
   console.log("Not enough "+name.toLowerCase()+" available, remaining pieces: "+inventory[ind].quantity);
   }
  }
  else {console.log(name.toLowerCase()+" not found")}
  }

