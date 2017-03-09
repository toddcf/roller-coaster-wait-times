# Roller Coaster Wait Times
An algorithm to calculate how much longer any one person has to wait in line before they can ride the roller coaster.
## How It Functions
- Start with 25 people in line for the roller coaster. (Stored in an array.)
- When the "start" button is pressed, the ride begins.
- 10 people can board the roller coaster at a time. (They are removed from the front of the array when they do.)
- A countdown timer is started for 10 seconds (the length of time for the ride).
- At 5 seconds to go, the length of the line array is checked. If there are fewer than 11 people in line, a random quantity of people (between min and max) are added to the end of the line (array).
- The user can click on ANY individual in the line, and that person's remaining wait time (in real time) is displayed. This is calculated by an algorithm based on the indexOf that person's location, the time for each ride, and how many groups they have in front of them until it is their turn to board.
- When the "stop" button is pressed, the ride stops.
- Everyone's wait time jumps to infinity, since no countdowns are occurring.
- People begin to get out of line if the ride is stopped for too long.
- For every rider who gets out of line, subtract their ticket price from the gross income, as they will request a refund.

## Future Iterations

### Iteration 1: Pseudo Code
- Pseudo code all the basic logic for this app.
- Track the total number of riders who have gone through the line.
- Track the gross income ($5 per rider, or whatever).

### Iteration 2: Console Log Version
- Get the functionality of this project working in the console log.

### Iteration 3: Basic Graphics Version
- Once the app is fully functional in the console log, set up basic graphics on the UI so that the user doesn't have to look at the console.
- Each person in the line will simply be displayed as a different-colored button, along with their number value from the array.
- Clicking on a person/button will display their remaining wait time in real time in a basic div onscreen.

### Iteration 4: Upgraded Graphics Version
- Upgrade the people/buttons to actual graphics of people. Each will look unique. (There will be 25 - 50 different characters.)
- Clicking a person/button will display a modal-type window above them with the remaining wait time (instead of a standard div off to the side).