const currentUser = 'Grace Hopper'; 
//set current user variable to 'Grace Hopper'
const welcomeMessage = `Welcome to Flatbook, + ${currentUser}!`;
//set a welcome message variable to concat a string to current user 
const excitedWelcomeMessage = welcomeMessage.toUpperCase(); 
//use the touppercase method on the welcome message to make cases uppercase
const shortGreeting = ` Welcome, ${currentUser.slice(0,1)}!`;
//concat a greeting using the slice method on the current user string from the 0th index to the 1st