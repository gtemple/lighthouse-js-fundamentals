const talkingCalendar = function(date) {
  let months = ["January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December" ];

  let year = date.slice(0, 4);
  let month = months[date.slice(5, 7) - 1];
  let day = Number(date.slice(8));

  if (day === 1 || day === 21 || day === 31) {
    day += 'st';
  } else if (day === 2 || day === 22) {
    day += 'nd';
  } else if (day === 3 || day === 23) {
    day += 'rd';
  } else {
    day += 'th';
  }
 
return `${month} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
