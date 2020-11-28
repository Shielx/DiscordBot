exports.embed = function (bot, msg, arg) {
    msg.channel.send({
        embed: {
            color: 3447003,
            description: "A very simple Embed!"
        }
    })
}