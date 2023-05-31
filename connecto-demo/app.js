// const express = require('express');
const bodyParser = require('body-parser');

// const app = express();

// // Use body-parser middleware to parse incoming request bodies
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/signup', (req, res) => {
//   const username = req.body.username.trim();
//   const password = req.body.password.trim();

//   // TODO: Validate the username and password values and process the signup data

//   res.send('Signup successful');
// });



const express = require('express');
const app = express();

// Serve the static files in the 'public' directory
app.use(express.static('public'));

app.use('*/css', express.static('public/css'));
app.use('*/js', express.static('public/js'));
app.use('*/img', express.static('public/img'));
app.use('*/video', express.static('public/video'));
app.use('*/webfonts', express.static('public/webfonts'));

app.get('/', function (req, res) {
  res.render('login');
});

// // Set up a route to serve your signup.html file
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/signup.html');
// });


// Start the server
const port = 3000;

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
