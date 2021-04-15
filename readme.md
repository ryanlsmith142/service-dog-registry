## Getting Started:

npm run dev - starts backend and frontend

## Troubleshooting:

You may get an error that says something about "MongoURI" is undefined if you cloned this project down and ran "npm run server". You should create a file in /config called default.json.

This file should look something like this:

{
"mongoURI": "your mongodb connection details here"
}


## Getting started with SCSS

If you plan on making changes to the css, you will want to open a terminal within the public (react) folder and run the following command.

```
sass --watch src/scss/main.scss:src/scss/main.css
```

This will look for changes made within any .scss file and complie it into the main.css file.

If you run into this error

```
bash: run: command not found
```

You will need to install SASS globally on your machine. You can run the following command and that will fix the issue.

```
npm install sass -g
```
=======
### How To:

Access Local Mongo Shell: Open a terminal and run this command - mongo "mongodb://localhost:27017/servicedogregistry"

How to show all processes running: Open a terminal and run this command - sudo lsof -i :<Insert port number here>

How to kill processes running: Open a terminal and run this command - kill -9 <Insert PID here>

### MONGO COMMANDS:

Access Local Mongo Shell: Open a terminal and run this command - mongo "mongodb://localhost:27017/servicedogregistry"

Show all collections - db.getCollectionNames()



### TODO:

Backend:

DB:

* Implement seeder file for DB

Routes:

- Data validators

- Register user JWT (JSON Web Token)

Models:

- Addresses - Should be split into street, state, zip


