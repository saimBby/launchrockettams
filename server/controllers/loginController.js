const { IgApiClient } = require("instagram-private-api")
const { get } = require("request-promise")


const login = async (req, res) => {
    const { username, password } = req.body
    try {
        const ig = new IgApiClient()
        ig.state.generateDevice(username)
        await ig.account.login(username, password)
        

        const user = {
            username: username,
            password: password
        }
        res.status(200).json(user)

    } catch (error) {
        res.status(400).json({error: error.message})
    }   
}

const tamslogin = async (req, res) => {

}

module.exports = { tamslogin, login }