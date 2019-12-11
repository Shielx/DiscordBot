exports.randomWinner = function (bot, msg, arg) {
    const users = []; // Create array of users
    msg.guild.members.forEach(element => { // Browse users
        if (!element.user.bot) { // Check if it's not a bot
            // msg.channel.send(`User number ${users.length + 1} with name ${element} playing`); // Send the name of the user
            users.push(element) // Add the user to array
        }
    });
    const userWin = Math.floor(Math.random() * Math.floor(users.length)) // Random a number
    msg.channel.send(`User ${users[userWin]} win !!`) // take the user number of array length
}