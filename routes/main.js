const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')
const authController = require('../controllers/auth')  
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// Auth Controller
router.get('/signup', authController.getSignup)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.post('/signup', authController.postSignup)

// Main Controller
router.get('/', mainController.getLogin)
router.get('/add', mainController.getAdd)
router.get('/collections', mainController.getCollections)
router.get('/movies', mainController.getMovies)
router.get('/diners', mainController.getDiners)
router.get('/cafes', mainController.getCafes)
router.put('/addMovieRating/:id', mainController.addMovieRating)
router.post('/addMovieManual', mainController.addMovieManual)
router.post('/addCafe', mainController.addCafe)
router.post('/addDiner', mainController.addDiner)
router.delete('/deleteMovie/:id', mainController.deleteMovie)
router.delete('/deleteDiner/:id', mainController.deleteDiner)
router.delete('/deleteCafe/:id', mainController.deleteCafe)






module.exports = router

