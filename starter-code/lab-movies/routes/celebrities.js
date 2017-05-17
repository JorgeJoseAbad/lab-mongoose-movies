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



router.post('/:id/delete',(req,res,next)=>{
  console.log('delete route');
  const celebId=req.params.id;
  Celebrity.findByIdAndRemove(celebId,(err,celeb)=>{
    if (err) {return next(err);}
    return res.redirect('/');
  });

});

router.get('/new',(req,res,next)=>{
  console.log('in router get new');
  //res.send('intento añadir uno nuevo');
  res.render('celebrities/new');
});

router.post('/:id', (req,res,next)=>{
  const celebID=req.params.id;
  const updateCeleb={
    name:req.body.name,
    occupation:req.body.occupation,
    catchPhrase:req.body.catchPhrase
  };
  Celebrity.findByIdAndUpdate(celebID,updateCeleb,(err,celeb)=>{
    if (err) return next(err);
    res.redirect('/celebrities');
  });
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

router.get('/:id/edit',(req,res,next)=>{
  console.log('in edit');
  const celebId=req.params.id;
  Celebrity.findById(celebId,(err,celeb)=>{
    if (err) return next(error);
    console.log('intentando renderizar');
    res.render('celebrities/edit', { celeb: celeb });
  });

});

module.exports = router;
