# __Red River__
### by [James Benjamin Pawlik](jbpawlik.github.io/home)

### __Description__
Red Rover is a proof-of-concept website for an interactive interplanetary social media site. Users can vote on which one of the "Curiosity" Rover's cameras is giving the best pictures from that day. The top pick determines which way the rover will travel the next day.

### __Technologies Used__
 The service and UI logic for Red Rover is written in JavaScript with help from JQuery. The page is styled with HTML and CSS, using Bootstrap. API calls are made with the Fetch API, then parsed from JSON. API calls are made to [NASA's](https://api.nasa.gov/) Mars Rover Photos API. Postman was used to check API functioning.

### __Setup/Installation__
1. NASA's API requires a key to use. Follow the link above to register for an API key
2. Download or clone the [repository](http://github.com/jbpawlik/red-rover) to your local machine
3. Navigate to the top level of the directory
4. Create an empty file named .env inside the directory
5. Inside the .env file, write "API_Key=" (without quotes), paste in your key, and save.
6. Open the .gitinore file and add .env to the list of ignored files. This will prevent your .env file and API key from being uploaded to GitHub (to protect your key from unauthorized access)
7. Install Node Package Manager before proceeding with the rest of the instructions
8. Open a terminal in the top level of the directory and run "npm install"
9. Run "npm run build"
10. "npm run start" will open the website in your browser

### __Known Bugs / Future Goals__
No bugs have been found or reported. Please contact the authors if you experience poor performance.

Future goals for Spaceify:
1. Allow users to vote on whether they think Pluto is a planet (not related to Mars rovers, but controversy breeds interaction)
2. Add a crowd-fund button to tip NASA scientists for their hard work

### __License__
This software is licensed under the [BSD license](license.txt).

[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

Copyright (c) 2021 

### __Contact Information__
Contact the author: __[James Benjamin Pawlik](james.benjamin.pawlik@gmail.com)__
