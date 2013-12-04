/*
 * GET home page.
 */

exports.index = function(req, res){
  //res.render('index');
   res.render('index', { title: 'CMPE 272',user:req.user });
};