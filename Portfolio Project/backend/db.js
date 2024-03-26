require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://soumyaray2472:soumyaray2472@cluster0.otvx3fa.mongodb.net/portfolio_project?retryWrites=true&w=majority&appName=Cluster0")

const User = mongoose.model('newUsersTable', {
    username: String,
    email: String,
    contact: String
})

module.exports = User