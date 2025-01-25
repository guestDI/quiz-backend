const jwt = require('jsonwebtoken');
const axios = require('axios');

const PROJECT_ID = 'quiz-app-d1911';
const ISSUER = `https://securetoken.google.com/${PROJECT_ID}`;
const PUBLIC_KEYS_URL = 'https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com';

let publicKeys;
let publicKeysExpiry;

async function getPublicKeys() {
  if (!publicKeys || Date.now() > publicKeysExpiry) {
    const response = await axios.get(PUBLIC_KEYS_URL);
    publicKeys = response.data;
    const cacheControl = response.headers['cache-control'];
    const maxAge = cacheControl.match(/max-age=(\d+)/)[1];
    publicKeysExpiry = Date.now() + maxAge * 1000;
  }
  return publicKeys;
}

async function verifyIdToken(idToken) {
  const decodedToken = jwt.decode(idToken, { complete: true });
  if (!decodedToken) {
    throw new Error('Invalid token');
  }

  const { kid } = decodedToken.header;
  const keys = await getPublicKeys();
  const publicKey = keys[kid];
  if (!publicKey) {
    throw new Error('Invalid token');
  }

  const options = {
    algorithms: ['RS256'],
    audience: PROJECT_ID,
    ignoreExpiration: true
  };

  try {
    return jwt.verify(idToken, publicKey, options);
  } catch (err) {
    console.log('Error verifying token:', err);
    if (err.name === 'TokenExpiredError') {
      console.log('Token is expired but valid:', err);
      // Handle the expired token case here
      throw new Error('Token is expired');
    } else {
      throw err;
    }
  }
}

module.exports = { verifyIdToken };