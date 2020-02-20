exports.disconnectAll = function (bot, msg, arg) {
    // const channel = msg.guild.channels.find(channel => channel.id === arg)
    // msg.member.voice.setChannel(null)

    if (arg) { // if channel specified
        const channel = msg.guild.channels.find(channel => channel.id === arg)
        if (channel.type === "voice") {
            const channelMembers = channel.members
            channelMembers.forEach(element => {
                element.voice.setChannel(null)
            });
        } else {
            msg.reply("Please, specify ID of voice channel")
        }
    } else if (msg.member.voice.channelID) { // if not channel specified
        const channelMembers = msg.member.voice.channel.members
        channelMembers.forEach(element => {
            element.voice.setChannel(null)
        });
    } else {
        msg.reply("You not connected or you don't specify channel ID")
    }

}