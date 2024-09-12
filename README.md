# mongooseSetupPractice

# intro 
This project is a walk-through of how to set-up a local environment that utilizes mongoose to connect with a mongoDB database. 

In our bootcamp, we are moving quickly through a lot of information, and it can be hard to remember all the specific frameworks, environments, and dependencies that we are using, and how to properly install them all. This project and readme serve as a review of what these packages are, what they do, how to install them and set-up the environment, and how to start building routes. 

# important packages and notes

Packages/technologies and their documentation:
- node.js - a javascript run-time environment that enables developers to use Javascript for the back-end/server-side development (https://nodejs.org/en) 
- npm - a package manager for node.js - node.js is the largest registry of JavaScript packages - npm helps us to install and utilize those packages in our projects (see documentation here: https://www.npmjs.com/about)
- express - a back-end web application framework for node.js. Helps manage servers and routes  - (https://expressjs.com/)
- mongoose - 
- dotenv - 
- .gitignore - a file type used in a git repository - tells git which files NOT to commit - used for keeping things like passwords and other sensitive information from being shared in a place where the could be accessed unsecurely. (https://git-scm.com/docs/gitignore/en)
- ES6 - the 6th version of JavaScript - we use it in our project to allow us to use the import and export syntax between files 

notes: 
- please note - terminal commands are listed in single quotes 'like this' - do not include the single quotes when running the commend in the terminal 
- this project uses a sample data set from mongoDB - "sample_training" - within this set we are using "grades"

# steps 

environment set-up from terminal: 
1. 'npm init -y' (initiate your project using node package manager - this sets up the package.json file with dependencies -y tells it to skip environment questions/add default behavior)
2. 'touch index.js' (create an index.js file - touch is the teminal command to create a file.)
3. 'npm i express mongoose dotenv' (install other dependencies - express, mongoode, and dotenv - can do all in one line by adding a space between each package you would like to install. can also do each one seperately - ex: 'npm i express')
4. go to package.json - set "type": "module", underneath "main": "index.js" (this allows us to use es6 and use import/export)

environment setup and initial steps in index.js file: 
5. import express in index.js (see index.js - line 1)
- create app - const app = express()
- create port variable - const port = 8080
- create route - 
  app.get('/', req, res )
- add app.listen route to server 