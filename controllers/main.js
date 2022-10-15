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
    getAdd: async (req,res)=>{
        try {
            res.render('add.ejs')
        } catch (err) {
            console.log(err)
        }
    },
    getCollections: async (req,res)=>{
        try {
            let userItems = await User.find({user: req.user._id})
            res.render('collections.ejs', {user: userItems, userName: req.user.userName})
        } catch (err) {
            console.log(err)
        }
    },
    getMovies: async (req,res)=>{
        try {
            let userItems = await User.find({user: req.user._id})
            let movies = await Movie.find({user: req.user.id}).sort({rating: '-1'})
            res.render('movies.ejs', {user: userItems, userName: req.user.userName, movies: movies, user: req.user.id})
        } catch (err) {
            console.log(err)
        }
    },
    getCafes: async (req,res)=>{
        try {
            res.render('cafes.ejs')
        } catch (err) {
            console.log(err)
        }
    },
    getDiners: async (req,res)=>{
        try {
            res.render('diners.ejs')
        } catch (err) {
            console.log(err)
        }
    },
    deleteMovie: async (req,res) =>{
        try{
            //Find book by id
            await Movie.findOneAndDelete({_id:req.params.id})
            console.log('Deleted Movie')
            res.redirect('/movies')
        }catch(err){
            console.log(err)
        }
    },
    addRating: async (req,res) =>{
        try {
            await Movie.findOneAndUpdate({_id: req.params.id},
                {rating: req.body.rating})
            console.log('Added Rating')
            console.log(req.params.id)
            res.redirect('/movies')
        } catch (err) {
            console.log(err)
        }
    }
}