exports.role = function (bot, msg, arg) {
    const role = msg.guild.roles.find(role => role.name === "test"); // Search the role
    msg.member.addRole(role, `Role "${role.name}" added from VoidBot`); // Addrole role
    msg.channel.send(`${msg.author} added to role ${role}`) // Send message to say it's added
}