DJ Booking App API
============

dj-booking-app is a simple example appointment scheduler REST API built with Node.js, Express 4 and Mongodb. A client that consumes this API can be found at https://fonyedjs.github.io soon...

Features
--------
- Create, view, update and delete appointments
- Token-based authentication with 3rd party providers (Facebook, Google, Github & Email)

Getting started
---------------
1. [Node.js](http://nodejs.org/) needs to be installed on your machine
2. Make sure you have access to a [MongoDB](http://www.mongodb.org/) instance, either on your local machine or somewhere in the cloud.
3. Clone the repository:

		git clone https://github.com/fonyedjs/dj-booking-app.git

4. Install packages:

		npm install

5. Create a config file for the development environment by changing the details in .env

6. Run the server (default on http://localhost:3000/):

		node index.js

Usage
-----
When the server is running locally, you can try the api with a browser, curl or an API testing tool like [Postman](http://www.getpostman.com/).
