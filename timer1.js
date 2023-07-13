// timer.js

// Get command line arguments excluding the first two (node and script name)
const args = process.argv.slice(2);

// Convert the arguments to numbers and sort them in ascending order
const alarms = args.map(Number).sort((a, b) => a - b);

// Function to set an alarm for a specified time (in seconds)
function setAlarm(time) {
  setTimeout(() => {
    console.log(`Alarm! ${time} seconds have passed.`);
  }, time * 1000);
}

// Set alarms for each specified time
alarms.forEach((time) => {
  if (isNaN(time) || time <= 0) {
    console.log(`Invalid alarm time: ${time}`);
  } else {
    setAlarm(time);
    console.log(`Alarm set for ${time} seconds.`);
  }
});
