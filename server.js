const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const contactsRoutes = require('./routes/contacts');
const mongodb = require('./db/connect');

const app = express();

// app
//   .use(bodyParser.json())
//   .use((req, res, next) => {
//     res.setHeader(
//       'Access-Control-Allow-Origin',
//       'https://cse341-contacts-frontend.netlify.app/',
//     );
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Content-Type', 'application/json');
//     res.setHeader(
//       'Access-Control-Allow-Methods',
//       'GET, POST, PUT, DELETE, OPTIONS',
//     );
//     next();
//   })
//   .use('/', require('./routes'));

app.use('/', routes);

app.use(contactsRoutes);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
