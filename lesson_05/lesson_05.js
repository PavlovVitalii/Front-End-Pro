const hour = Number(prompt("Plese enter hours."));
let seconds = 0;

if(!isNaN(hour)){
seconds = hour * 3600;
}

alert(`${seconds} seconds.`);