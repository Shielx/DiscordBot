exports.command = function (bot, msg, arg) {
    const fs = require('fs');
    fs.readdirSync("./commands").forEach(dirs => { // Return folders from commands folder
        fs.readdirSync("./commands/" + dirs).forEach(commands => { // Return files from folders
            const command = commands.split('.')[0].toLowerCase(); // file without ".js"
            if (msg.content.toLowerCase() == command) {
                const test = require("./commands/" + dirs + "/" + command); // Require only file from author command
                // ------------------------ 
                // instead of "test.command(bot, msg, arg)" command can not be used here
                test[command](bot, msg, arg) // It's like a function
                // ------------------------
            }
        });
    });
}