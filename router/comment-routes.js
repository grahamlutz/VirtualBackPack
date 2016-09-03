var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

/*
 * Comment routes
 */

/* POST comment on single post */
router.post('/', auth, function(req, res, next) {
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

module.exports = router;
