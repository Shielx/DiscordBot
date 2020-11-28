exports.time = function (bot, msg, arg) {
    const date = new Date();
    msg.reply(`${date.getHours()}:${date.getMinutes()}`); // Reply hour and minute
}