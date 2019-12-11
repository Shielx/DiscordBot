exports.say = function (bot, msg, arg) {
    msg.delete(0); // Delete the message
    msg.channel.send(arg) // Send message after the 'say' command
    
}