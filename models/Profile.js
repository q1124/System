const mongoose = require('mongoose')
// Schema init
const Schema = mongoose.Schema

// Create Schema
const ProfileSchema = new Schema({
    type: {
        type: String
    },
    describe: {
        type: String
    },
    incode: {
        type: String,
        require: true
    },
    expend: {
        type: String,
        require: true
    },
    cash: {
        type: String,
        require: true
    },
    remark: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = Profile = mongoose.model('profiles', ProfileSchema)