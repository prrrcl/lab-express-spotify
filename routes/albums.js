'use strict';
const express = require('express');
const router = express.Router();
const spoty = require('../spotyCred');

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const albums = await spoty.getArtistAlbums(id);
    res.render('albums', { albums: albums.body.items });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
