// Ask age and travel distance 
const age = parseInt(prompt(`Type your age`))
const distance = parseInt(prompt(`Choose distance in Km`))

console.log(age);
console.log(distance);

// this is the price in Euro per Km
const km = 0.21
console.log(km);


// amount per distance
const price = (km * distance);
console.log (price);

// discount criteria
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
console.log(total.toFixed(2));


