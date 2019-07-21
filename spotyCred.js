const SpotifyWebApi = require('spotify-web-api-node');

const clientId = '3fb91a0d335c4ba4a800aaefc27967cc';
const clientSecret = '7cb180e0cb7246f4976b1013574a288b';

const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});

spotifyApi.clientCredentialsGrant()
  .then(data => {
    spotifyApi.setAccessToken(data.body['access_token']);
  })
  .catch(error => {
    console.log('Something went wrong when retrieving an access token', error);
  });

module.exports = spotifyApi;
