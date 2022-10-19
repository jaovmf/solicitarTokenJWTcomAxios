//npm i axios
//npm i express

const axios = require("axios");
const express = require("express");
const app = express();

//get para pegar o token
app.get("/", async (req, res) => {
  var token;
  await axios
    .post("https://urlparasolicitartoken", {
      user: "usuario",
      password: "senha",
    })
    .then((response) => {
      token = response.data.token.split(" ")[1];
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
