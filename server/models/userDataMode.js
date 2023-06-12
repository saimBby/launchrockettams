const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const validator = require('validator')

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

userdataschema.statics.signup = async function(firstname, lastname, username, email, password) {
    if (!email || !password || !username || !firstname || !lastname) {
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
    
      const user = await this.create({ email, password: hash, username, firstname, lastname })
    
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

mongoose.model("userdata", userdataschema)