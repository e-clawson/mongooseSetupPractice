# mongooseSetupPractice

# intro 
This project is a walk-through of how to set-up a local environment that utilizes mongoose to connect with a mongoDB database. 

In our bootcamp, we are moving quickly through a lot of information, and it can be hard to remember all the specific frameworks, environments, and dependencies that we are using, and how to properly install them all. This project and readme serve as a review of what these packages are, what they do, how to install them and set-up the environment, and how to start building routes. 

# important packages and notes

You do not need to read this in order to start the steps below (reading the notes would be helpful though) - it is listed as useful information to refer to in case you want to know what something is, or why it is being used. to learn more, follow the links to each item's documentation: 

Packages/technologies and their documentation:
- node.js - a javascript run-time environment that enables developers to use Javascript for the back-end/server-side development (https://nodejs.org/en) 
- npm - a package manager for node.js - node.js is the largest registry of JavaScript packages - npm helps us to install and utilize those packages in our projects (see documentation here: https://www.npmjs.com/about)
- express - a back-end web application framework for node.js. Helps manage servers and routes  - (https://expressjs.com/)
- mongoose - 
- dotenv -  (https://www.npmjs.com/package/dotenv)
- .gitignore - a file type used in a git repository - tells git which files NOT to commit - used for keeping things like passwords and other sensitive information from being shared in a place where the could be accessed unsecurely. (https://git-scm.com/docs/gitignore/en)
- ES6 - the 6th version of JavaScript - we use it in our project to allow us to use the import and export syntax between files 
- nodemon - is a utility designed to monitor any changes and automatically restart your server when changes occur. it is used in place of node  - https://nodemon.io/
- mongoDB - mongoDB is a document-based data system that uses documents instead of tables and rows to store and process data - you will need a mongoDB Atlas account in order to run this project - sign up for one here by clicking the "Try Atlas Free" button - https://www.mongodb.com/ 
(mongodb documentation here - https://www.mongodb.com/docs/)

------------------ 
notes: 
- please note - terminal commands are listed in single quotes 'like this' - do not include the single quotes when running the commend in the terminal 
- this project uses a sample data set from mongoDB - "sample_training" - within this set we are using "grades"
- port - I am using port 8080 in this project -it can be reached by going to http://localhost:8080/ in a web browser 
- nodemon - to run the server we are using nodemon - if you do not already have it installed locally, you will need to install it to run the server - use the command 'npm install -g nodemon' to install it globally on your device/computer

# steps 

environment set-up from terminal: 
1. 'npm init -y' (initiate your project using node package manager - this sets up the package.json file with dependencies -y tells it to skip environment questions/add default behavior)
2. 'touch index.js' (create an index.js file - touch is the teminal command to create a file.)
3. 'npm i express mongoose dotenv' (install other dependencies - express, mongoode, and dotenv - can do all in one line by adding a space between each package you would like to install. can also do each one seperately - ex: 'npm i express')
4. go to package.json - set "type": "module", underneath "main": "index.js" (this allows us to use es6 and use import/export)

environment setup and initial steps in index.js file: 
5. import express in index.js (see index.js - line 1)
6. create app - const app = express() (see index.js - line 2)
7. create port variable - const port = 8080 (see index.js - line 3) (you can use whatever port number you prefer - we used 8080 here, 3000 and 5000 are also popular)
8. create initial server route - 
9. setup server - add app.listen route to server
10. test that your server routes are working - run 'nodemon' in the terminal to open nodemon. if it hits the app.listen route you will see the terminal print "server is listening on port: 8080". Open your web browser and go to http://localhost:8080/ - you should see "hello" appear in the window 

make and set-up a db.js file
why? - 
11. in the terminal type 'touch db.js' to create a db.json file 
12. import mongoose from mongoose - see line 1 
13. connect to the mongoDB database using mongoose (db.js - line 3) (we wrap it in a function - so it's easier to control when it is triggered, and easier to debug - can console.log to find errors) - we also use a try/catch so that we can catch errors faster  - could also do this in a sinlge line with just "mongoose.connect(process.env.ATLAS_URI)"
14. export connectDb variable - (db.js line 12)

set-up dotenv file and git ignore file
15. in the terminal type 'touch .env' to create a .env file 
16. in the terminal type 'touch .gitignore' to create a .gitignore file  
17. add the following into the first line of the .gitignore file '.env'
18. go to your mongodb atlas account, under "Deployment" click on "Database" - click the "connect" button and a prompt window should pop up. click "drivers" and copy the URI under "3. Add your connection string into your application code"
19. in your .env file in this project, add ATLAS_URI = "" and insert your application code into the "" 
20. Replace <db_password> with the password for your database user
