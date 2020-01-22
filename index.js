const Discord = require("discord.js");
const bot = new Discord.Client();
const settings = require('./settings.json')

bot.on('ready', () => {
    
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