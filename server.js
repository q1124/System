// 搭建端口
const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
// const bodyParser = require('body-parser')
const app = express()

// connect DB
const db = require('./config/keys').mongoURL
mongoose.connect(db, { useNewUrlParser: true })
.then(()=> console.log('MongoDB Connected'))
.catch((err)=> console.error(err))

// import users
const users = require('./routes/api/users')
// import profiles
const profiles = require('./routes/api/profiles')


// import bodyParser(post)
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// passport init
app.use(passport.initialize())
require('./config/passport')(passport)

// router
app.get('/', (req, res)=> {
    res.send("hello")
})

app.use('/api/users', users)
app.use('/api/profiles', profiles)


const port = process.env.PORT || 5000

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})