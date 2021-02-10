Getting Started:

npm start "node server"

npm run server - runs development server

Troubleshooting:

You may get an error that says something about "MongoURI" is undefined if you cloned this project down and ran "npm run server". You should create a file in /config called default.json.

This file should look something like this:

{
    "mongoURI": "your mongodb connection details here"
}

TODO:

- Update service dog profile post with update profile

- Implement delete service dog profile functionality

- Set up local mongoDb

- Set up seeder file