# mongooseSetupPractice
- please note - terminal commands are listed in single quotes 'like this' - do not include the single quotes when running the commend in the terminal 
- npm - a package manager for node.js - the largest registry of JavaScript packages - npm helps us to install and utilize those packages (see documentation here: https://www.npmjs.com/about)



# from terminal: 
1. 'npm init -y' (initiate your project using node package manager - this sets up the package.json file with dependencies -y tells it to skip environment questions/add default behavior)
2. 'touch index.js' (create an index.js file - touch is the teminal command to create a file.)
3. 'npm i express mongoose dotenv' (install other dependencies - express, mongoode, and dotenv - can do all in one line)
- go to package.json - set "type": "module", underneath "main": "index.js", - this allows us to use es6 and use import/export 
- import express in index.js 
- create app - const app = express()
- create port variable - const port = 8080
- create route - 
  app.get('/', req, res )
- add app.listen route to server 