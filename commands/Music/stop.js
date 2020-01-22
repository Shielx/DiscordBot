exports.stop = function (bot, msg, arg) {
    msg.guild.me.voice.channel.leave(); // Check if the Bot is in a channel and can leave
}