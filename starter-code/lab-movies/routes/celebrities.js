/* jshint esversion:6 */
const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.post('/',(req,res,next)=>{
  const dataCeleb=req.body;
  const newCeleb = new Celebrity(dataCeleb);
  console.log(newCeleb);
  newCeleb.save(function(err,doc){
    if (err) return next(err);
    res.redirect('/celebrities');
  });
});


router.get('/',(req,res,next)=>{
  //res.send('Route of celebrities');
  Celebrity.find({},(error,celebs)=>{
    if (error) return next(error);
    res.render('celebrities/index',{celebs});
  });

});




router.get('/new',(req,res,next)=>{
  console.log('in router get new');
  //res.send('intento añadir uno nuevo');
  res.render('celebrities/new');
});


router.get('/:id',(req,res,next)=>{
  const idC=req.params.id;
  console.log('we are in /celebrities/:id');
  console.log(idC);
  //res.send(idC);
  Celebrity.findById(idC,(error,celeb)=>{
    if (error) return next(error);
    res.render('celebrities/show',{celeb});
  });
});



module.exports = router;