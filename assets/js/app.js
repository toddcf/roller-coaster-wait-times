// GLOBAL VARIABLES

// Array to hold the people in line. Initialized with 25 people.
var line = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// Tracks whether the roller coaster is running or not. Iniitalized to false. (User will click button to get it started.)
var active = false;

// MAIN PROCESSES

// Function to handle roller coaster operation:
var rollerCoaster = function() {

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