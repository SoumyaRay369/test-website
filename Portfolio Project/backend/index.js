const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())

const User = require('./db')

app.post('/connect', async (req, res) => {
    const {name, email, contact} = req.body
    const user = new User({
        username: name,
        email: email,
        contact: contact
    })
    await user.save()
    res.send({ message: "Details Added to the mailing list" })
})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})