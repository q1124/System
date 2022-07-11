// login & register

// 搭建端口
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const gravatar = require('gravatar')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const User = require('../../models/User')
const keys = require('../../config/keys')

// GET api
// @access public
// router.get('/test', (req, res) => {
//     res.json({msg: 'login'})
// })

// POST create api
// bcrypt password
router.post('/register', (req, res) => {
    // console.log(req.body)
    User.findOne({email:req.body.email})
    .then((user)=> {
        if(user) {
            return res.status(400).json('email已註冊')
        } else {
            // pg: picture
            const avatar = gravatar.url(req.body.email, {s: '200', r:'pg', d:'mm'})
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                avatar,
                password: req.body.password,
                identify: req.body.identify
            })

            // 加密password
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err

                    newUser.password = hash

                    newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err))
                })
            })
        }
    })
})

// POST login api
// token jwt passport
router.post('/login', (req,res)=> {
    const email = req.body.email
    const password = req.body.password
    // 查詢數據庫
    User.findOne({email})
    .then(user=> {
        if(!user) {
            return res.status(404).json('用戶不存在')
        }
        // 密碼匹配
        // password: front end 
        // user.password: DB
        bcrypt.compare(password, user.password)
        .then(isMatch=> {
            if(isMatch){
                // jwt.sign('規則', '加密名稱', '過期時間', 'function')
                const rule = {id: user.id, name: user.name, password: user.password,avatar: user.avatar, identify: user.identify}
                jwt.sign(rule, keys.secretOrKey, {expiresIn: 3600}, (err, token)=> {
                    if (err) throw err
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    })
                })
            } else{
                return res.status(400).json('密碼錯誤')
            }
        })
    })
})

// GET user current
// token Private
//Authenticate Requests
router.get('/current',passport.authenticate('jwt', {session: false}),(req,res)=> {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        identify: req.user.identify
    })
})

module.exports = router