let fortune1="Your cat will look very cuddly today.";
let fortune2="The weather will be nice tomorrow";
let fortune3="Be cautious of your new neighbours.";
let fortune4="You will find a new hobby soon.";
let fortune5="It would be wise to avoid the colour red today.";
let randomNumber=Math.ceil(Math.random()*5);
let selectedFortune;
selectedFortune=[fortune1,fortune2,fortune3,fortune4,fortune5][randomNumber-1];
console.log(selectedFortune);

