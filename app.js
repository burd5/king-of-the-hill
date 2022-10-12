const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require ('passport')
const session = require('express-session')
const MongoClient = require('mongodb').MongoClient;
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const methodOverride = require('method-override')
const mainRoutes = require('./routes/main')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.static('dist'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

// Sessions
app.use(
session({
    secret: 'earl grey',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
)

// Method Override
app.use(methodOverride("_method"));

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

//Routes
app.use('/', mainRoutes)

let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = 'test',
  collection;

// ====== MongoDB connection ====== //
MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then((client) => {
  console.log(`Connected to ${dbName} Database`);
  db = client.db(dbName);
  collection = db.collection('movies');
});

app.post('/addMovie', async (request, response) => {
  try {
    db.collection('movies')
      .insertOne({
        title: request.body.movieTitle,
        year: request.body.movieYear,
        imdb: request.body.imdb,
        rating: request.body.rating,
        user: request.user._id
      })
      .then(() => {
        console.log(`${request.body.movieTitle} - Added to Playlist`);
      });
  } catch (error) {
    console.error(error);
    return;
  }
});



app.listen(process.env.PORT, ()=>{
    console.log('Let\'s go to the show')
})

