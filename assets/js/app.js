// GLOBAL VARIABLES

// Array to hold the people in line. Initialized with 25 people.
var line = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// Tracks whether the roller coaster is running or not. Iniitalized to false. (User will click button to get it started.)
var active = false;

// MAIN PROCESSES

// Function to handle roller coaster operation:
var rollerCoaster = function() {
	// Remove the first ten people from the LINE array.

	// Start 10-second timer. (This is the length of the ride.)

	// Halfway through ride (when 5 seconds remain on countdown timer): If line.length < 11:
		// Add a random quantity of people (between x and y) to the end of the LINE array.
		// The numbers added should resume incrementing from the last number currently in the LINE array.

	// Wait until timer == 0.  Then:
		// If timer == 0 && active = true, call rollerCoaster() again.
		// (If active = false, do nothing. The ride stops.)
};

// Function to calculate wait times:
var waitTime = function( person ) {
	// If active = false, wait time is INFINITE.
	// Else if active = true:
		// Get the indexOf() the person clicked.
		// Divide it by 10, Math.floor it, add 1.
			// If it = 1:
				// Display timer countdown.
			// If it > 1:
				// Multiply it by 10 seconds + the timer countdown (in real time).
				// Display it.
};

// EVENT HANDLERS

// Button to start/stop the ride:
	// If active = false:
		// Button text = "Start Ride".
		// Button color is GREEN.
		// onClick:
			// Sets active = true.
			// Changes button text to "Stop Ride".
			// Sets button color to RED.
			// Calls rollerCoaster();
	// If active = true:
		// Button text = "Stop Ride"
		// Button color = RED
		// onClick:
			// Sets active = false. Now rollerCoaster() will NOT be called at the end of the current ride.
			// Changes button text to "Start Ride".
			// Sets button color to GREEN.

// Clicking any person in line:
	// Each index in the LINE array must be a button. (Do I need to make them objects so I can generate key value pairs such as images to be displayed, etc.?)
	// Calls waitTime() for that person.
