const sqlite3 = require('sqlite3')
const sleep = require('./sleep.js')
let db
let dbResult
dbInit()

class sql {
    constructor(){
        
    }
    dbOpen(){
        this.db = new sqlite3.Database('database.db', (err) => {
            if (err) {
                return console.error(err.message);
            }
        });
    }
    dbClose() {
        this.db.close((err) => {
            if (err) {
                return console.error(err.message);
            }
        });
    }

    dbRunInsert(params) {
        dbOpen()
        this.db.run(params)
        dbClose()
    }
}

module.exports.sql = sql

function dbOpen() {
    db = new sqlite3.Database('database.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
    });
}

function dbInit() {
    dbOpen()
    db.run('CREATE TABLE IF NOT EXISTS nasaURL(lastURL text)')
    dbClose()
}

function dbRunInsert(params) {
    dbOpen()
    db.run(params)
    dbClose()
}

function dbRunSelect(params, bot, result) {
    dbOpen()
    db.get(params, (err, row) => {
        if (err) {
            throw err;
        }
        callback(row, bot, result)
    });
    dbClose()
}

function callback(row, bot, result) {
    if (result != row.lastURL) {
        bot.users.fetch('246678645932818433')
            .then(function (user) { user.send(result) })
            .catch(console.error);
        dbRunInsert("INSERT INTO nasaURL (lastURL) VALUES ('" + result + "')")
    }
}

async function getNasaPotd(bot, result) {
    do {
        dbRunSelect('SELECT lastURL FROM nasaURL ORDER BY rowid DESC', bot, result)
        await sleep.sleep(600000) // 10 minutes
    } while (true);
}

function dbClose() {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        // console.log('Close the database connection.');
    });
}

module.exports.getNasaPotd = getNasaPotd