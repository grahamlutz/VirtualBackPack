var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

/*
 *  Gear routes
 */

 /* GET all gear */
 router.get('/', function(req, res, next) {
   Gear.find(function(err, gear) {
     if (err) return next(err);
     res.json(gear);
   })
 });

 /* preload gear item */
 router.param('item', function(req, res, next, id) {
   var query = Gear.findById(id);

   query.exec(function(err, item) {
     if(err) return next(err);
     if (!item) return next(new Error('can\'t find item'));

     req.item = item;
     return next();
   })
 });

 /* GET single gear item */
 router.get('/gear/:item', function(req, res, next) {
   req.item.populate('item', function(err, item) {
     if (err) { return next(err); }

     res.json(item);
   });
 });

 /* POST add new gear */
 router.post('/gear', auth, function(req, res, next) {
   var gear = new Gear(req.body);
   gear.owner = req.payload.username;

   gear.save(function(err, gear) {
     if (err) return next(err);
     res.json(gear);
   })
 });

 /* DELETE single gear item */
router.delete('/gear/:item/delete', auth, function(req, res, next) {
  var query = Gear.findById(req.item, function(err, item) {
    if (err) { return next(err) };
    item.remove();
  }).exec();

  return res.json();
});

module.exports = router;
