exports.play = function (bot, msg, arg) {
    const ytdl = require('ytdl-core');
    let voiceChannel;
    msg.delete(0); // Delete message for embed view
    if (!msg.member.voice.channel) return msg.reply("You are not in channel") // Check if it is in a channel, otherwise return that it is not there
    // ------------------------------------------------------------
    // We set the voiceChannel where the user is
    // To use voice channel when we want to stop the sound
    voiceChannel = msg.member.voice.channel;
    // ------------------------------------------------------------
    voiceChannel.join() // We join the voiceChannel
        .then(connection => {
            ytdl.getInfo(arg) // Retrieves the information from the url given by the user
                .then(function (infos) { // If he "promise" the content, then we continue
                    msg.channel.send({
                        embed: {
                            color: 16711711,
                            thumbnail: {
                                url: infos.thumbnail_url
                            },
                            fields: [{
                                name: "Title",
                                value: infos.title
                            },
                            {
                                name: "Author",
                                value: infos.author.name
                            },
                            {
                                name: "URL",
                                value: infos.video_url
                            },],
                            footer: {
                                icon_url: msg.author.avatarURL,
                                text: `Request by ${msg.author.username}`
                            }
                        }
                    })
                    const stream = ytdl(arg); // http://www.youtube.com/watch?v=A02s8omM_hI
                    connection.playStream(stream); // Stream music
                })
                .catch(function (error) { // If he not "promise", then we send to the user that we can not
                console.log(error);
                
                    msg.reply("Can't found youtube URL")
                })
        })
}