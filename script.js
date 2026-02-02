// Ask age and travel distance 
const age = parseInt(prompt(`Type an age`))
const distance = parseInt(prompt(`Choose distance in Km`))

console.log(age);
console.log(distance);

// Km/euro
const km = 0.21
console.log(km);


// amount per distance
const price = (km * distance);
console.log (price);

// discount
if(age < 18){


message = `Get 20% off`
total = price - (price * 0.2) 
} else if (age > 64){


message = `Get 40% off`
total = price - (price * 0.4)
} else {

message = `You don't have any discount`
total = price
}

console.log(message);
console.log(total);


