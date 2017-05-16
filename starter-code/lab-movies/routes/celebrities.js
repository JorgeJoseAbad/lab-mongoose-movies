/* jshint esversion:6 */
const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

router.get('/',(req,res,next)=>{
  //res.send('Route of celebrities');
  Celebrity.find({},(error,celebs)=>{
    if (error) return next(error);
    res.render('celebrities/index',{celebs});
  });

});

router.get('/:id',(req,res,next)=>{
  const idC=req.params.id;
  console.log(idC);
  //res.send(idC);
  Celebrity.findById(idC,(error,celeb)=>{
    if (error) return next(error);
    res.render('celebrities/show',{celeb});
  });
});


module.exports = router;
