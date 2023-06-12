require("dotenv").config();
const express = require('express');

const app = express();
const port = process.env.PORT
const multer = require("multer")

const cors = require("cors")
const fs = require('fs');
const sharp = require('sharp');

const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")


const loginRoutes = require("./routes/login")
const { createProxyMiddleware } = require('http-proxy-middleware')
const { Configuration, OpenAIApi } = require("openai");

require("./models/userDataMode")

const JWT_SECRET = 
  "6c&U5?nz#f!^bN8YQ+M@1*vX9dL$xH7a"

const mongoUrl = 
  "mongodb+srv://zdravko:Mosa%401879@atlascluster.tx2dar5.mongodb.net/Tams?retryWrites=true&w=majority"

const mongo = mongoose.model("userdata")

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({extended:true,parameterLimit:100000,limit:"500mb"}))
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));

const configuration = new Configuration({
    apiKey: process.env.APIKEY,
  });
const openai = new OpenAIApi(configuration);

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
  }).then(() => {
    console.log("mongoDB connected")
  }).catch((e) => {
    console.log((e))
  })

  const proxyOptions = {
    target: 'https://i.instagram.com',
    changeOrigin: true,
    proxyTimeout: 10000,
    // Weitere Proxy-Konfigurationen hier
  };
  app.use('/your-api-endpoint', createProxyMiddleware(proxyOptions));
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  app.get("/hello", (req, res) => {
    res.send("APP IS RUNNING")
  })

  app.post("/tamssignup", async (req, res) => {
    const { firstname, lastname, username, email, password } = req.body 
    
    try {
      const user = await mongo.signup(firstname, lastname, username, email, password)

      res.status(200).json({ firstname, lastname, username, email })
    } catch (error) {
      res.status(400).json({error: error.message})
    }
})

app.post("/loginUser", async (req, res) => {
    const { email, password } = req.body
    try {
      const user = await mongo.login(email, password)

      res.status(200).json(user)
    } catch (error) {
      console.log(error.message)
      res.status(400).json({error: error.message})
    }
})