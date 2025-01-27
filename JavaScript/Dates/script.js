const currentDate=new Date();
console.log(currentDate);
let monthObj={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"};
let currentDateFormat=`Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);
const formatDateMMDDYYYY=(date)=>{
  let day=date.getDate();
  let month=date.getMonth()+1;
  let year=date.getFullYear();
  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}
const formatDateLong=(date)=>{
  let day=date.getDate();
  let month=monthObj[date.getMonth()+1];
  let year=date.getFullYear();
  return `Formatted Date (Month Day, Year): ${month} ${day}, ${year}`;
}
console.log(formatDateLong(currentDate))
