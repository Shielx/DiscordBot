exports.command = function (bot, msg, arg, commandName) {
    const fs = require('fs');
    fs.readdirSync("./commands").forEach(directorys => { // Return folders from commands folder
        fs.readdirSync("./commands/" + directorys).forEach(commandsList => { // Return files from folders
            const command = commandsList.split('.')[0]; // file without ".js"
            if (commandName.toLowerCase() == command.toLowerCase()) {
                require("./commands/" + directorys + "/" + command)[command](bot, msg, arg); // Require only file from author command
                // instead of "test.command(bot, msg, arg)" 'command' can not be used here
            }
        });
    });
}