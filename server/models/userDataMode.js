const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const validator = require('validator')
const { IgApiClient } = require('instagram-private-api');

const userdataschema = new mongoose.Schema(
    {
        username: String,
        firstname: String,
        lastname: String,
        password: String,
        email: String,
    },
    {
        collection: "userdata",
    }
)

const userLaunchKeys = new mongoose.Schema(
  {
      key: String,
  },
  {
      collection: "launchKeys",
  }
)

const userAccessKey = new mongoose.Schema(
  {
      accessToken: String,
      username: String,
      password: String,
      email: String,
  },
  {
      collection: "userAccessKey",
  }
)



userAccessKey.statics.instaLogin = async function (username, password, email) {
    if (!username || !password || !email) {
      throw Error('All fields must be filled')
    } 

    try {
      const ig = new IgApiClient();
      await ig.state.generateDevice(username);
      await ig.account.login(username, password);
    } catch (error) {
      throw Error('Wrong Instagram Password/Username')
    }

    const exists = await this.findOne({ username })
    if (exists) {
      throw Error('Account already in use')
    }
    const salt = await bcrypt.genSalt(10)
    const accessToken = await bcrypt.hash(email, salt)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ accessToken, username, password: hash, email })

    return user
}

userdataschema.statics.login = async function (email, password) {
      if (!email || !password) {
        throw Error('All fields must be filled')
      }
    
      const user = await this.findOne({ email })

      if (!user) {
        throw Error("Email Not found")
      }

      const match = await bcrypt.compare(password, user.password)
      if (!match) {
        throw Error('Incorrect password')
      }

      return user
}

userdataschema.statics.signup = async function (firstname, lastname, username, email, password) {
    if (!email || !password) {
      throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
      throw Error('Email not valid')
    }
    const exists = await this.findOne({ email })
    if (exists) {
      throw Error('Email already in use')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ firstname, lastname, username, email, password: hash })

    return user
}

userLaunchKeys.statics.createKey = async function (key) {
    if (!key) {
        throw Error('All fields must be filled')
    }

    const newKey = await this.create({ key })
    
    return newKey
}

userLaunchKeys.statics.validateKey = async function (key) {
    if (!key) {
      throw Error('Launch Key field must be filled')
    }

    const exists = await this.findOne({ key })

    if (!exists) {
      throw Error('Key not found')
    }

    return exists
}

mongoose.model("userAccessKey", userAccessKey)
mongoose.model("userdata", userdataschema)
mongoose.model("launchKeys", userLaunchKeys)