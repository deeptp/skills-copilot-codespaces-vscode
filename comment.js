// Create web server
// 2019-12-26 11:50:00

const express = require('express');
const router = express.Router();
const commentService = require('../service/commentService');

// Get comments
router.get('/', (req, res) => {
  commentService.getComments(req.query.postId, (err, comments) => {
    if (err) {
      return res.status(500).send('Server error.');
    }
    res.status(200).send(comments);
  });
});

// Add a comment
router.post('/', (req, res) => {
  const comment = req.body;
  commentService.addComment(comment, (err, comment) => {
    if (err) {
      return res.status(500).send('Server error.');
    }
    res.status(200).send(comment);
  });
});

// Delete a comment
router.delete('/', (req, res) => {
  const comment = req.body;
  commentService.deleteComment(comment, (err, result) => {
    if (err) {
      return res.status(500).send('Server error.');
    }
    res.status(200).send(result);
  });
});

module.exports = router;