## Getting Started:

npm start "node server"

npm run server - runs development server

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

### TODO:

- Update service dog profile post with update profile

- Set up seeder file
