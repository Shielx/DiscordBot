exports.prune = function (bot, msg, arg) {
    if (msg.member.hasPermission('MANAGE_MESSAGES')) {
        msg.channel.bulkDelete(arg)
        .then(
            msg.channel.send({
                embed: {
                    color: 65280,
                    description: `${msg.author}, deleted ${arg} messages`
                }
            })
                .then(function (params) { params.delete(5000) })
        )
    } else {
        msg.reply("You need MANAGE_MESSAGES permission")
    }
}