const express = require('express')
const router = express.Router()
const passport = require('passport')

const Profile = require('../../models/Profile')

// GET api
// @access public
router.get('/test', (req, res) => {
    res.json({msg: 'profile work'})
})

// POST api/profiles/add
// @access Private
router.post('/add', passport.authenticate('jwt', {session: false}), (req, res) => {
    const profileFields = {}
    
    // add fieldsTest
    if(req.body.type) profileFields.type = req.body.type
    if(req.body.describe) profileFields.describe = req.body.describe
    if(req.body.incode) profileFields.incode = req.body.incode
    if(req.body.expend) profileFields.expend = req.body.expend
    if(req.body.cash) profileFields.cash = req.body.cash
    if(req.body.remark) profileFields.remark = req.body.remark

    new Profile(profileFields).save()
    .then(profile => {
        res.json(profile)
    })
    
})



module.exports = router  