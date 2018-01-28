const Discord = require('discord.js');
const bot = new Discord.Client();
new Discord.RichEmbed();
const newUsers = new Discord.Collection();
const config = require("./config.json")

bot.on('ready', () => {
  //bot.user.setActivity('my harem strip', {type: 'WATCHING'})
  bot.user.setGame('Flying Around!')
})

bot.on('ready', () => {
  console.log('Ready For Flight!');
});



bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);


  let args = message.content.split(" ").slice(1);

//  const ms = require("ms");
//let member = message.mentions.members.first();
//if(!member) return message.replu("You didnt mention anyone!")
//let muteRole = message.guild.roles("name", "muted");
//if(!muteRole) return message.reply("You dont have that role enabled!");
//let params = message.content.split(" ").slice(1);
//if(!time) return message.reply("Set a time!")

//member.addRole(mueRole.id);
//message.channel.send('You have been muted for $(ms(ms(time), {long: true})} $(member.user.tag)');

//setTimeout(function() {
//  member.removeRole(mute.id);
 // message.channel.send ("you are unmuted")
//}, ms(time));


//commands.



if (command === "ping") {
    message.channel.send("pong");
}

if (command === "js") {
  message.channel.send("Code resources coming soon!!");
}

if (command === "html") {
  message.channel.send("Code resources coming soon!");
}

if (command === "css") {
  message.channel.send("Code resources coming soon!");
}

if (command === "code") {
  message.channel.send(" +js , +html, +css")
}

if (command === "embed") {
    message.channel.send({embed: {
  color: 7506394,
  description: args.join(" ")
}});
}

if (command === "help") {
  message.channel.send("```Info: \n  Prefix= + \n \n Regular Commands: \n  ping = Pong \n code = learning resources to learn code \n embed = Embeds any text \n sorendev = The maker of Soren bot \n \n Admin Commands: \n kick = Kicks user \n ban = bans user \n \n Stuff Coming soon: Currency, ranks, and other fun stuff :)  ```")
}

if (command === "sorendev") {
    message.channel.send({embed: {
    color: 7506394,
    author: {
    name: "Bot Builders",
    icon_url: bot.user.avatarURL
},
 fields: [
      {
        name: "Bot Dev",
        value: " <@148953784280809474>",
      },

   //   {
   //     name: "other contributers",
   //     value: "",
       ],
    timestamp: new Date(),
    footer: {
      name: "",
      text: "",
    }
  }
});
}
//admin
if(command === "kick") {
    if(!message.member.roles.some(r=>["Administrator", "Head Admin", "Admin", "Owner"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please @ a member of the server!");
    if(!member.kickable)
      return message.reply("Unable to kick, Check Roles and Permissions");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please Give A Reason");

     member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }

if(command === "ban") {

    if(!message.member.roles.some(r=>["Administrator", "Moderator", "Mod", "Admin"].includes(r.name)) )
      return message.reply("Must have the role: Admin, Mod, Administrator, or Moderator");

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please @ a member of the server");
    if(!member.bannable)
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");

     member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }

if (command === "setgame") {
  bot.user.setGame(args.join(" "));
}






});

bot.login(config.token);
