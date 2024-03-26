// Declare and initialize the variables for exercise 1 here:

// BEFORE running the code, predict what will be printed to the console by the following statements:


let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

if (crewStatus) {
   console.log("crew ready");
} else {
   console.log("crew not ready")
}

if (computerStatusCode === 200) {
   console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400) {
   console.log("Success! Computer online!");
} else {
   console.log("ALERT: Computer offline!");
}

if (shuttleSpeed > 17500) {
   console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
   console.log("ALERT: Cannot maintain orbit!");
} else {
   console.log("Stable speed");
}

if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}

if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}

let fuelLevel = 21000;
let engineTemperature = 1200;
engineIndicatorLight = "!red blinking";

 if (fuelLevel <1000 || engineTemperature >3500 || engineIndicatorLight === "red blinking") {
   console.log("Engine Failure Imminent!");
 } else if (fuelLevel < 5000 || engineTemperature > 2500) {
   console.log("Check fuel levels. Engines running hot");
 } else if (fuelLevel > 20000 && engineTemperature <= 2500) {
   console.log("Full Tank. Engines good.");
 } else if (fuelLevel > 10000 && engineTemperature <= 2500) {
   console.log("Fuels levels above 50%. Engines good.");
 } else if (fuelLevel > 5000 && engineTemperature <= 2500) {
   console.log("Fuel levels above 25%. Engines good.");
 } else {
   console.log("Fuel and enging status pending...");
 }

let commandOveride = true || false

 
 if (fuelLevel > 20000 && engineIndicatorLight === "!redblinking" || commandOveride === true) {
   console.log("Cleared to launch!");
 } else {
   console.log("Launch scrubbed!");
}

 