// hashmap to store keys using either longUrl or shortUrl
let codeDB = new Map(),
  urlDB = new Map();
const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// generate a random 6-character string
const getCode = () => {
  let code = new Array(6)
    .fill()
    .map((_) => chars.charAt(~~(Math.random() * 62)));
  return 'http://tinyurl.com/' + code.join('');
};

const encode = (longUrl) => {
  // if already encoded & generated a shortUrl
  if (urlDB.has(longUrl)) return urlDB.get(longUrl);
  let code = getCode();
  // if code happens to be used, generate a new one
  while (codeDB.has(code)) code = getCode();
  codeDB.set(code, longUrl);
  urlDB.set(longUrl, code);
  return code;
};

const decode = (shortUrl) => codeDB.get(shortUrl);
