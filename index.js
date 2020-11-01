require("dotenv").config();
const express = require("express");
const formidable = require("express-formidable");
//const cors = require("cors");
const app = express();
//app.use(cors());
app.use(formidable());

// /* MAILGUN CONFIGURATION */
// const api_key = process.env.MAILGUN_API_KEY; /* VOTRE CLÉ API */
// const domain = process.env.MAILGUN_DOMAIN; /* VOTRE DOMAINE SANDBOX */

// const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

app.get("/", (req, res) => {
  res.send("server is up");
});

// app.post("/", (req, res) => {
//   /* DESTRUCTURING */
//   const { name, email, password } = req.fields;
//   /* CREATION DE L'OBJET DATA */
//   const data = {
//     from: `${name} <${email}>`,
//     to: process.env.MY_EMAIL, /* EMAIL AVEC LAQUELLE VOUS VOUS ÊTES ENREGISTRÉS SUR MAILGUN */
//     subject: subject,
//     text: message,
//   };

//   /* ENVOI DE L'OBJET VIA MAILGUN */
//   mailgun.messages().send(data, (error, body) => {
//     if (!error) {
//       return res.json(body);
//     }
//     res.status(401).json(error);
//   });
// });

app.listen(process.env.PORT, () => {
  console.log("server is listening");
});
