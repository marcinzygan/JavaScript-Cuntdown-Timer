const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector(".deadline");
const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");



let futureDate = new Date(2024 , 4 , 24 , 11,30,0)
let day = futureDate.getDay();
day = weekdays[day];
const date = futureDate.getDate();
let month = futureDate.getMonth();
month = months[month];
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
giveaway.textContent = `giveaway ends on ${day} ${date} ${month} ${year} ${hours}:${minutes}am`

//  future time in ms

const futureTime = futureDate.getTime();

function getRemaningTime () {
const today = new Date ().getTime(); 
const timeDiffrence = futureDate - today ;
console.log(timeDiffrence);

// 1s =1000ms
// 1min = 60 s
// 1hr = 60 min
// 1 day = 24h

// values in ms
const oneDay = 24*60*60*1000 ;
const oneHour = 60*60*1000 ;
const oneMin = 60*1000 ;

// calculate all values 

let days = timeDiffrence/oneDay ;
days = Math.floor(days);
let hours =  Math.floor((timeDiffrence % oneDay)/oneHour) ;

let mins = Math.floor((timeDiffrence% oneHour)/oneMin) ;
let seconds = Math.floor((timeDiffrence% oneMin)/1000) ;
//  set values array 

const values = [days , hours , mins , seconds ];
function format (item){
  if (item < 10 ){
    return item = `0${item}`
  }
  return item ;
}
items.forEach(function(item,index){
item.innerHTML = format(values[index])
})
if (timeDiffrence < 0){
  clearInterval(countdown)
  deadline.innerHTML = ` <h4 class="expired">Sorry this Giveaway has expired</h4>`
}
}

// countdown 
let countdown = setInterval(getRemaningTime,1000)



getRemaningTime ();