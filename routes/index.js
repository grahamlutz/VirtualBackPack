var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var Gear = mongoose.model('Gear');
var passport = require('passport');
var jwt = require('express-jwt');

var User = mongoose.model('User');
var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
 * Posts routes
 */

/* GET all posts */
router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts) {
    if (err) return next(err);
    res.json(posts);
  })
});

/* POST add new post */
router.post('/posts', auth, function(req, res, next) {
  var post = new Post(req.body);
  post.author = req.payload.username;

  post.save(function(err, post) {
    if (err) return next(err);
    res.json(post);
  })
});

/* preload post */
router.param('post', function(req, res, next, id) {
  var query = Post.findById(id);

  query.exec(function(err, post) {
    if(err) return next(err);
    if (!post) return next(new Error('can\'t find post'));

    req.post = post;
    return next();
  })
});

/* GET single post */
router.get('/posts/:post', function(req, res, next) {
  req.post.populate('comments', function(err, post) {
    if (err) { return next(err); }

    res.json(post);
  });
});

/* PUT upvote a post */
router.put('/posts/:post/upvote', auth, function(req, res, next) {
  req.post.upvote(function(err, post) {
    if (err) return next(err);
    res.json(post);
  })
});

/* PUT downvote a post */
router.put('/posts/:post/downvote', auth, function(req, res, next) {
  req.post.downvote(function(err, post) {
    if (err) return next(err);
    res.json(post);
  })
});

/*
 * Comment routes
 */

/* POST comment on single post */
router.post('/posts/:post/comments', auth, function(req, res, next) {
  var comment = new Comment(req.body);
  comment.post = req.post;
  comment.author = req.payload.username;

  comment.save(function(err, comment){
    if(err){ return next(err); }

    req.post.comments.push(comment);
    req.post.save(function(err, post) {
      if(err){ return next(err); }

      res.json(comment);
    });
  });
});

/* preload comment */
router.param('comment', function(req, res, next, id) {
  var query = Comment.findById(id);

  query.exec(function(err, comment) {
    if(err) return next(err);
    if (!comment) return next(new Error('can\'t find comment'));

    req.comment = comment;
    return next();
  })
});

/* GET single comment */
router.get('/posts/:post/comments/:comment', function(req, res) {
  res.json(req.comment);
});

/* PUT upvote comment on a post */
router.put('/posts/:post/comments/:comment/upvote', auth, function(req, res, next) {
  req.comment.upvote(function(err, comment) {
    if (err) return next(err);
    res.json(comment);
  })
});

/* PUT downvote a comment on a post */
router.put('/posts/:post/comments/:comment/downvote', auth, function(req, res, next) {
  req.comment.downvote(function(err, comment) {
    if (err) return next(err);
    res.json(comment);
  })
});

/*
 * User routes
 */

/* POST Create User */
router.post('/register', function(req, res, next) {
  if(!req.body.username || !req.body.password) {
    return res.status(400).json({message: "Please fill out all fields"});
  }

  var user = new User();
  user.username = req.body.username;
  user.setPassword(req.body.password);

  user.save(function(err) {
    if (err) return next(err);

    return res.json({token: user.generateJWT()})
  });
});

/* POST login page */
router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }

  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err); }

    if(user){
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

/*
 *  Gear routes
 */

 /* GET all gear */
 router.get('/gear', function(req, res, next) {
   Gear.find(function(err, gear) {
     if (err) return next(err);
     res.json(gear);
   })
 });

 /* GET single gear item */
 router.get('/gear/:item', function(req, res, next) {
  //  req.item.populate('comments', function(err, post) {
  //    if (err) { return next(err); }
   //
  //    res.json(post);
  //  });
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

 /* preload gear item */
 router.param('item', function(req, res, next, id) {
   var query = Gear.findById(id);

   query.exec(function(err, post) {
     if(err) return next(err);
     if (!post) return next(new Error('can\'t find post'));

     req.item = item;
     return next();
   })
 });

 /* DELETE single gear item */
router.delete('/gear/:item/delete', auth, function(req, res, next) {

});

module.exports = router;
