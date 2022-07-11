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

// GET api/profiles
// 查詢所有 profile list
// @access Private
router.get('/',passport.authenticate('jwt', {session: false}), (req, res) => {
    Profile.find()
    .then(profile => {
        if(!profile) {
            return res.status(404).json('沒有任何內容')
        }
        res.json(profile)
    }).catch(err => res.status(404).json(err))
})

// GET api/profiles/:id
// 查詢特定 profile list
// @access Private
router.get('/:id',passport.authenticate('jwt', {session: false}), (req, res) => {
    // req.params.id / :id 前端發過來的id
    Profile.findOne({_id: req.params.id})
    .then(profile => {
        if(!profile) {
            return res.status(404).json('沒有任何內容')
        }
        res.json(profile)
    }).catch(err => res.status(404).json('內容不存在'))
})


// POST api/profiles/edit/:id
// @access Private
router.post('/edit/:id' , passport.authenticate('jwt' , {session: false}), (req, res) => {
    const profileFields = {}

    // edit fieldsTest
    if(req.body.type) profileFields.type = req.body.type
    if(req.body.describe) profileFields.describe = req.body.describe
    if(req.body.incode) profileFields.incode = req.body.incode
    if(req.body.expend) profileFields.expend = req.body.expend
    if(req.body.cash) profileFields.cash = req.body.cash
    if(req.body.remark) profileFields.remark = req.body.remark

    Profile.findOneAndUpdate(
        {_id: req.params.id},
        {$set: profileFields},
        {new: true}
    ).then(profile => res.json(profile))

})

// delete api/profiles/delete/:id
// @access Private
router.delete('/delete/:id', passport.authenticate('jwt' , {session: false}), (req, res)=> {
    Profile.findByIdAndRemove(
        {_id: req.params.id}
    ).then(profile => {
        // save then return
        profile.save().then(profile => res.json(profile))
    }).catch(err => res.status(404).json('刪除失敗'))
})



module.exports = router  