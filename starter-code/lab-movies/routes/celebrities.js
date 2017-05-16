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


module.exports = router;
