const hour = Number(prompt("Plese enter hours."));
const SECONDS_IN_HOUR = 3600

if(!isNaN(hour)){
    alert(`${hour * SECONDS_IN_HOUR} seconds.`);
}

