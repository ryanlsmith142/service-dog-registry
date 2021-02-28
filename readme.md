## Getting Started:

npm run dev - starts backend and frontend

## Troubleshooting:

You may get an error that says something about "MongoURI" is undefined if you cloned this project down and ran "npm run server". You should create a file in /config called default.json.

This file should look something like this:

{
    "mongoURI": "your mongodb connection details here"
}

### How To:

Access Local Mongo Shell: Open a terminal and run this command - mongo "mongodb://localhost:27017/servicedogregistry"

How to show all processes running: Open a terminal and run this command - ps aux | grep node

How to kill processes running: Open a terminal and run this command - kill -9 <Insert PID here>

MONGO COMMANDS:

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

