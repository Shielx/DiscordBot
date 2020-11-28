exports.move = function (bot, msg, arg) {
    if (arg[1] && arg[2]) {
        const actualChannel = msg.guild.channels.find(channel => actualChannel.id === arg[1])
        const destinationChannel = msg.guild.channels.find(channel => actualChannel.id === arg[2])
        if (actualChannel.type === "voice" && destinationChannel.type === "voice") {
            const channelMembers = actualChannel.members
            channelMembers.forEach(element => {
                element.voice.setChannel(destinationChannel)
            });
        }
    }
}