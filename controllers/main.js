const User = require('../models/User')
const Movie = require('../models/Movie')
const Diner = require('../models/Diners')
const Cafe = require('../models/Cafes')


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
            res.render('index.ejs', {user: userItems, userName: req.user.userName, movieKing: movieKing, dinerKing: dinerKing, cafeKing: cafeKing})
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
            let movies = await Movie.find({user: req.user.id}).sort({rating: '-1'})
            let cafes = await Cafe.find({user: req.user.id}).sort({rating: '-1'})
            let diners = await Diner.find({user: req.user.id}).sort({rating: '-1'})
            let movieKing = movies[0]
            let dinerKing = diners[0]
            let cafeKing = cafes[0]
            res.render('collections.ejs', {user: userItems, userName: req.user.userName, movieKing: movieKing, dinerKing: dinerKing, cafeKing: cafeKing})
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
            let userItems = await User.find({user: req.user._id})
            let cafes = await Cafe.find({user: req.user.id}).sort({rating: '-1'})
            res.render('cafes.ejs', {user: userItems, userName: req.user.userName, cafes: cafes, user: req.user.id})
        } catch (err) {
            console.log(err)
        }
    },
    getDiners: async (req,res)=>{
        try {
            let userItems = await User.find({user: req.user._id})
            let diners = await Diner.find({user: req.user.id}).sort({rating: '-1'})
            res.render('diners.ejs', {user: userItems, userName: req.user.userName, diners: diners, user: req.user.id})
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
    deleteCafe: async (req,res) =>{
        try{
            //Find book by id
            await Cafe.findOneAndDelete({_id:req.params.id})
            console.log('Deleted Cafe')
            res.redirect('/cafes')
        }catch(err){
            console.log(err)
        }
    },
    deleteDiner: async (req,res) =>{
        try{
            //Find book by id
            await Diner.findOneAndDelete({_id:req.params.id})
            console.log('Deleted Diner')
            res.redirect('/diners')
        }catch(err){
            console.log(err)
        }
    },
    addMovieRating: async (req,res) =>{
        try {
            await Movie.findOneAndUpdate({_id: req.params.id},
                {rating: req.body.rating})
            console.log('Added Rating')
            console.log(req.params.id)
            res.redirect('/movies')
        } catch (err) {
            console.log(err)
        }
    },
    addMovie: async (req,res) =>{
        try {
            let userItems = await User.find({user: req.user._id})
            await Movie.create({title: req.body.title, year: req.body.year, rating: req.body.rating, user: req.user.id})
            let movies = await Movie.find({user: req.user.id}).sort({rating: '-1'})
            console.log('Added Movie')
            res.render('movies.ejs', {user: userItems, userName: req.user.userName, movies: movies, user: req.user.id})
        } catch (err) {
            console.log(err)
        }
    },
    addCafe: async (req,res) =>{
        try {
            let userItems = await User.find({user: req.user._id})
            await Cafe.create({name: req.body.name, location: req.body.address, rating: req.body.rating, user: req.user.id})
            let cafes = await Cafe.find({user: req.user.id}).sort({rating: '-1'})
            console.log('Added Cafe')
            res.render('cafes.ejs', {user: userItems, userName: req.user.userName, cafes: cafes, user: req.user.id})
        } catch (err) {
            console.log(err)
        }
    },
    addDiner: async (req,res) =>{
        try {
            let userItems = await User.find({user: req.user._id})
            await Diner.create({name: req.body.name, location: req.body.address, rating: req.body.rating, user: req.user.id})
            let diners = await Diner.find({user: req.user.id}).sort({rating: '-1'})
            console.log('Added Diner')
            res.render('diners.ejs', {user: userItems, userName: req.user.userName, diners: diners, user: req.user.id})
        } catch (err) {
            console.log(err)
        }
    },
}