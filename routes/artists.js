'use strict';
const express = require('express');
const router = express.Router();
const spoty = require('../spotyCred');

router.get('/', async (req, res, next) => {
  const { artist } = req.query;
  try {
    const artists = await spoty.searchArtists(artist);
    console.log(artists);
    res.render('artists', { artist: artists.body.artists.items });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
