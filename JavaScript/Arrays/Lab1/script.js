let lunches=[];
function addLunchToEnd(arr,stri){
  console.log(""+stri+" added to the end of the lunch menu.");
  arr.push(stri);
  return arr;
}

function addLunchToStart(arr,stri){
  console.log(""+stri+" added to the start of the lunch menu.");
  arr.unshift(stri);
  return arr;
}

function removeLastLunch(arr){
  if(arr.length==0){
    console.log("No lunches to remove.");
  } else {
    console.log(""+arr.pop()+ " removed from the end of the lunch menu."); }
    return arr;
}

function removeFirstLunch(arr){
  if(arr.length==0){
    console.log("No lunches to remove.");
  } else {
    console.log(""+arr.shift()+" removed from the start of the lunch menu.");
  }
  return arr;
}

function getRandomLunch(arr){
  if(arr.length==0){
    console.log("No lunches available.");
  }
  else {
    let rnd=Math.floor(Math.random()*arr.length);
    console.log("Randomly selected lunch: "+arr[rnd]+"");
  }
}

function showLunchMenu(arr){
  if(arr.length==0){
    console.log("The menu is empty.");
  }
  else {
    let stri="";
    for(let i=0;i<arr.length;i++){ 
      stri+=""+arr[i]+", ";
    }
    console.log("Menu items: "+stri.slice(0,stri.length-2)+"");
  }
  return "";
}
console.log(showLunchMenu(["Beans","Corn","Potato"]))
