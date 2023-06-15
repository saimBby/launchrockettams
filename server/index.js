require("dotenv").config();
const express = require('express');

const app = express();
const port = process.env.PORT

const cors = require("cors")

const bodyParser = require('body-parser');
const path = require('path');

const mongoose = require("mongoose")


const { createProxyMiddleware } = require('http-proxy-middleware')
const { Configuration, OpenAIApi } = require("openai");

require("./models/userDataMode")

const JWT_SECRET = 
  "6c&U5?nz#f!^bN8YQ+M@1*vX9dL$xH7a"

const mongoUrl = 
  "mongodb+srv://zdravko:Mosa%401879@atlascluster.tx2dar5.mongodb.net/Tams?retryWrites=true&w=majority"

const mongo = mongoose.model("userdata")
const launchkey = mongoose.model("launchKeys")
const userAccessKey = mongoose.model("userAccessKey")

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({extended:true,parameterLimit:100000,limit:"500mb"}))
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));

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
    res.send("APP")
  })

  app.post("/tamssignup", async (req, res) => {
    console.log("Getting data")
    const { firstname, lastname, username, email, password } = req.body 

    const requestBodySizeInBytes = Buffer.byteLength(JSON.stringify(req.body));
    const requestBodySizeInKB = requestBodySizeInBytes / 1024;
    const requestBodySizeInMB = requestBodySizeInKB / 1024;

    console.log(`Anfragegröße: ${requestBodySizeInKB} KB (${requestBodySizeInMB} MB)`);
    
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

app.post("/createPreLaunchKey", async (req, res) => {
    const { key } = req.body

    try {
      const validateKey = await launchkey.createKey(key)

      res.status(200).json(validateKey)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
})

app.post("/validateKey", async (req, res) => {
    const { key } = req.body
    console.log(key)

    try {
      const validateKey = await launchkey.validateKey(key)

      res.status(200).json(validateKey)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
})

app.post("/instagramLogin", async (req, res) => {
    const { username, password, email } = req.body

    try {
        const accessData = await userAccessKey.instaLogin(username, password, email)

        res.status(200).json({accessData})
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
    }
})