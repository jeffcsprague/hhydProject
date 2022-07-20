// include all of your models here using CommonJS requires
const User = require("./User.js")
const Day = require("./Day.js")
const Review = require("./Review.js")
const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

module.exports = {User, Day, Review, dayjs};
