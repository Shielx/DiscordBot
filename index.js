const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require('./settings.json')
const fs = require('fs');

client.on('ready', () => {

});

client.on('message', msg => {
    if (msg.author.bot) return; // If message is from a bot, do nothing
});

client.login(settings.bot_token); // Bot Token > settings.json