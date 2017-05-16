/* jshint esversion:6 */
const celebrityData=[
  {name:'Julio Iglesias',occupation:'Singer',catchPhrase:'ey, no puedo estar sin ti..'},
  {name:'Cristiano Ronaldo',occupation:'football player',catchPhrase:'Im Gold balloon'},
  {name:'Arnold Swartzeneger',occupation:'actor',catchPhrase:'Sayonara baby'}
];

// bin/seeds.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrities');
const Celebrity = require('../models/celebrity');

// bin/seeds.js
//from the nongoose API: Model.create(doc(s), [callback])
//Shortcut for saving one or more documents to the database.
Celebrity.create(celebrityData, (err, docs) => {
  if (err) { throw err; }
  docs.forEach( (docs) => {
    console.log(docs.name);
  });
  mongoose.connection.close();
});
