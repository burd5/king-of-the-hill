const User = require('../models/User')
const Movie = require('../models/Movie')


// Methods - routed from main.js
module.exports = {
    // Renders login page
    getLogin: (req,res)=>{
        try {
            res.render('login')
        } catch (err) {
            console.log(err)
        }
    },
    getIndex: async (req,res)=>{
        try {
            let userItems = await User.find({user: req.user._id})
            res.render('index.ejs', {user: userItems, userName: req.user.userName})
        } catch (err) {
            console.log(err)
        }
    },
    getProfile: async (req,res)=>{
        try {
            let userItems = await User.find({user: req.user._id})
            let movies = await Movie.find({user: req.user.id}).sort({rating: '-1'})
            res.render('profile.ejs', {user: userItems, userName: req.user.userName, movies: movies, user: req.user.id})
        } catch (err) {
            console.log(err)
        }
    },
    deleteMovie: async (req,res) =>{
        try{
            //Find book by id
            await Movie.findOneAndDelete({_id:req.params.id})
            console.log('Deleted Movie')
            res.redirect('/profile')
        }catch(err){
            console.log(err)
        }
    },
    addRating: async (req,res) =>{
        try {
            await Movie.findOneAndUpdate({_id:req.params.id},
                {rating: req.body.rating})
            console.log('Added Rating')
            res.redirect('/profile')
        } catch (err) {
            console.log(err)
        }
    }
}