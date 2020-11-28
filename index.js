const Discord = require("discord.js");
const bot = new Discord.Client();
const settings = require('./settings.json')
const moduleParser = require('./modules/rssParser.js')
const moduleSqlite3 = require('./modules/sqlite3.js')
const moduleHttp = require('./modules/http.js')
const dofus = require('./modules/games/dofus.js')

bot.on('ready', () => {
    // moduleParser.rssParser()
    //     .then(function (rssResult) {
    //         moduleSqlite3.getNasaPotd(bot, rssResult)
    //     })
    // bob = new moduleParser.rssParser('https://apod.nasa.gov/apod.rss')
    // bob.parseItems().then(function (lol) {console.log(lol)})
    dofus.dofusChangelog(bot)
    // moduleHttp.httpNasaAPOD(bot)
});

bot.on('message', msg => {
    if (msg.author.bot) return; // If message is from a bot, do nothing
    if (msg.author.id != "246678645932818433") return;

    // --------------------------------------------------------
    // Pass arguments
    // ie: kick @bob
    const args = msg.content.slice().trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const arg = args.join(" ");
    // --------------------------------------------------------

    require('./commands.js').command(bot, msg, arg, command)

});

bot.login(settings.bot_token); // Bot Token > settings.json