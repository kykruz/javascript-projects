// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let shuttleName = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
let milesPerKm = 0.621;

console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKm);

let milesToMars = distanceToMars * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph; 
let daysToMars = hoursToMars / 24;

console.log(shuttleName , "will take" , daysToMars , "days to reach The Moon");

 
