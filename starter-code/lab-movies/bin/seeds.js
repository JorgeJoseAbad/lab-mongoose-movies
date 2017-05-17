/* jshint esversion:6 */
/*const celebrityData=[
  {name:'Julio Iglesias',occupation:'Singer',catchPhrase:'ey, no puedo estar sin ti..'},
  {name:'Cristiano Ronaldo',occupation:'football player',catchPhrase:'Im Gold balloon'},
  {name:'Arnold Swartzeneger',occupation:'actor',catchPhrase:'Sayonara baby'}
];*/

const movieData=[
{title:'A bridge to far', genre:'belic', plot:'historic about operation Market Garden'},
{title:'Ivanhoe', genre:'Historic', plot:'A hero in the two roses war'},
{title:'Yo hice a Roque III', genre:'comedia', plot:'un par de granujas imitan a Stallone'}

];

// bin/seeds.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrities');
const Movie = require('../models/movie');

// bin/seeds.js
//from the nongoose API: Model.create(doc(s), [callback])
//Shortcut for saving one or more documents to the database.
Movie.create(movieData, (err, docs) => {
  if (err) { throw err; }
  docs.forEach( (docs) => {
    console.log(docs.name);
  });
  mongoose.connection.close();
});
