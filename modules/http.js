const https = require('https');
const sqlite = require('./sqlite3.js')
function httpNasaAPOD(bot) {
  https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      if (JSON.parse(data).hdurl) {
        // bot.users.get('246678645932818433').send(JSON.parse(data).hdurl)
        sqlite.getNasaPotd(bot, JSON.parse(data).hdurl)
      } else {
        // bot.users.get('246678645932818433').send(JSON.parse(data).url)
        sqlite.getNasaPotd(bot, JSON.parse(data).url)
      }
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}

module.exports.httpNasaAPOD = httpNasaAPOD