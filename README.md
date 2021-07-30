# HTTP Notification System
This is a simple HTTP Notification System implementation

# Approach
To keep things simple, a data structure is used to keep track of topics and subscribers. Notification summary is printed to keep track of successful and failed notification.

# Installation
  * To run this application you must have node and npm installed, the minimum compatible node version is `12.9.0`
  * Clone the repo
  * Navigate to root of the project directory and install dependencies with `npm install`
  * Rename .env.example to .env in the root directory, the publisher and subscriber service ports are 8000 and 9000 respectively
  * Execute `start-server.sh` script at the project root.
  * Open `http://localhost:8000/docs` in your browser to see the docs
  * Enjoy

# Author
Sam Olabamiji

# License & Copyright
MIT (c) Sam Olabamiji
Licensed under the MIT License
