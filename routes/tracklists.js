'use strict';
const express = require('express');
const router = express.Router();
const spoty = require('../spotyCred');

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const tracklist = await spoty.getAlbumTracks(id);
    res.render('tracklist', { tracklist: tracklist.body.items });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
