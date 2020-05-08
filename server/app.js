require('dotenv').config()


// const Mail = require('./api/service/MailService');

// const UsersController = require('./api/controllers/UsersController');

// const mail = new Mail();

// async function main() {
//   // await mail.init();
//   // await mail.send(
//   //   '"Fred Foo 👻" <foo@example.com>',
//   //   'bar@example.com, baz@example.com',
//   //   'Hello ✔',
//   //   'Hello world?',
//   //   '<b>Hello world?</b>',
//   // ).catch(console.error);

//   UsersController.getUser();
// }

// main();

const express = require('express');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const app = express()
const PORT = 3000

const key = fs.readFileSync('./localhost-key.pem');
const cert = fs.readFileSync('./localhost.pem');

const routes = require('./routes');

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(cors({
  origin: '*'
}));

app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || 'Internal Server Error',
      },
    });
});

//  Connect all our routes to our application
app.use('/', routes);

https.createServer({ key, cert }, app).listen(PORT, () => {
    console.log(`Listening on https://localhost:${PORT}`);
});

// require('dotenv').config()

// async function main() {
//   const Auth = require('./api/utils/auth');

//   let auth = new Auth();

//   // let email = 'max.gong.developer@hotmail.com',
//   //   username='maxgong'
//   //   password = 'Postpak1266',
//   //   user_metadata = {
//   //     role: 'manager'
//   //   }

//   // let result = await auth.signUp(email, password, username, user_metadata)

//   // console.log(result)

//   let username ='maxgong', 
//       password ='Postpak1266'

//   let result = await auth.signIn(username, password)

//   console.log(result)

// }

// main()