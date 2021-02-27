## Getting Started:

npm run dev - starts backend and frontend

## Troubleshooting:

You may get an error that says something about "MongoURI" is undefined if you cloned this project down and ran "npm run server". You should create a file in /config called default.json.

This file should look something like this:

{
    "mongoURI": "your mongodb connection details here"
}

### TODO:

Backend:

DB:

* Implement seeder file for DB

Routes:

- Data validators

- Register user JWT (JSON Web Token)

Models:

- Addresses - Should be split into street, state, zip

