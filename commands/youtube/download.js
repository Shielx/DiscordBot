exports.download = function (bot, msg, arg) {
    const fs = require('fs');
    const ytdl = require('ytdl-core');
    try {
        fs.mkdirSync('./downloads')
    } catch (error) {
        
    } finally {
        msg.delete(0);
        ytdl.getInfo(arg) // Retrieves the information from the url given by the user
            .then(function (infos) {
                msg.reply("Downloading...")
                    .then(function (msgDownloading) {
                        ytdl(arg, { filter: 'audioonly', quality: 'highestaudio' })
                            .pipe(fs.createWriteStream(`./downloads/${infos.title}.mp3`))
                            .addListener('finish', function () {
                                if (msgDownloading.deletable) {
                                    msgDownloading.delete(0);
                                }
                                msg.reply("Uploading...")
                                    .then(function (msgUploading) {
                                        msg.channel.send(`${infos.title}`, { files: [`./downloads/${infos.title}.mp3`] }).catch(function (error) {console.log(error)})
                                            .then(function () {
                                                if (msgUploading.deletable) {
                                                    msgUploading.delete(0);
                                                }
                                            })
                                            .then(function () {
                                                fs.unlinkSync(`./downloads/${infos.title}.mp3`)
                                            });
                                    })
                            })
                    })
            })
            .catch(function () { msg.reply("Can't found youtube URL") })
    }
}