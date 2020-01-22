exports.prune = function (bot, msg, arg) {
    if (msg.member.hasPermission('MANAGE_MESSAGES')) {
        msg.channel.fetchMessages()
            .then(msg.channel.bulkDelete(arg)
                .then(
                    msg.channel.send({
                        embed: {
                            color: 65280,
                            description: `${msg.author}, deleted ${arg} messages`
                        }
                    })
                        .then(function (params) { params.delete(5000) })
                )
            ) // Fetch messages and delete from arg
    } else {
        msg.reply("You need MANAGE_MESSAGES permission")
    }
}