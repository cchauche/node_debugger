const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const resTemp = require('./responseTemp');
const GITHUB_TOKEN = require('./config');
const PORT = process.env.PORT || 3000;
const GITHUB_API_HOST = 'https://api.github.com';

const authHeaders = {
  Authorization: 'Bearer ' + GITHUB_TOKEN,
};
const rootUrl = 'http://localhost:' + PORT;

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
  // If username is provided fetch from /users/:username
  let username = req.query.githubHandle;
  console.log(username);
  if (req.query.githubHandle) {
    // Fetch from /user
    axios
      .get(GITHUB_API_HOST + `/users/${username}`, {
        headers: authHeaders,
      })
      .then((response) => {
        console.log(response);
        // TODO: Fill in the object with the github username and the number of public repos the user has
        res.send(
          resTemp.public({ username: 'FIX ME', public: 'FIX ME', url: rootUrl })
        );
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else {
    debugger;
    axios
      .get(GITHUB_API_HOST + '/user', { headers: authHeaders })
      .then((response) => {
        res.send(
          resTemp.private({
            username: 'FIX ME',
            public: 'FIX ME',
            private: 'FIX ME',
            url: rootUrl,
          })
        );
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
