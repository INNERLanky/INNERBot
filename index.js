const Discord = require('discord.js');
var bot = new Discord.Client();
const client = new Discord.Client();
const HelpCommand = 'Use !color + [color name] to change the color of your name. \n<:red:731642274387198023> red \n<:orange:731642274340929608> orange \n<:yellow:731642273871298676> yellow \n<:green:731642274022293616> green \n<:darkgreen:731642272461881375> dark green \n<:teal:731642267101691984> teal \n<:lightblue:731642265054871594> light blue \n<:darkblue:731642264094244965> dark blue \n<:purple:731642261934178477> purple \n<:pink:731642260537475077> pink. \nFor music, use the commands, or what is in the () for short. \n!play = adds a song to the queue \n!pause = pauses the song \n!resume = resumes the song (r) \n!playlist (pl) = plays a playlist \n!loop (l) = loops the song you are listening to \n!np = shows what is now playing (p) \n!queue (q) = shows what is in the queue \n!shuffle = shuffles all songs in the queue \n!volume (v) = changes the volume by % \n!skip (s) = skips the song you are on \n!stop = bot leaves the channel \n \nYou can also use mute, kick, ban, and warn, if you have the permissions to.\n \nView my source code here: https://github.com/innerlanky/innerbot'

//let RED = message.guild.roles.cache.find(role => role.name === "RED");
//let ORANGE = message.guild.roles.cache.find(role => role.name === "ORANGE");
//let YELLOW = message.guild.roles.cache.find(role => role.name === "YELLOW");
//let GREEN = message.guild.roles.cache.find(role => role.name === "GREEN");
//let DARK_GREEN = message.guild.roles.cache.find(role => role.name === "DARKGREEN");
//let TEAL = message.guild.roles.cache.find(role => role.name === "TEAL");
//let LIGHT_BLUE = message.guild.roles.cache.find(role => role.name === "LIGHTBLUE");
//let DARK_BLUE = message.guild.roles.cache.find(role => role.name === "DARKBLUE");
//let PURPLE = message.guild.roles.cache.find(role => role.name === "PURPLE");
//let PINK = message.guild.roles.cache.find(role => role.name === "PINK");
//let warn_1 = message.guild.roles.cache.find(role => role.name === "warn_1");
//let warn_2 = message.guild.roles.cache.find(role => role.name === "warn_2");
//let warn_3 = message.guild.roles.cache.find(role => role.name === "warn_3");
//let warn_4 = message.guild.roles.cache.find(role => role.name === "warn_4");
//let warn_5 = message.guild.roles.cache.find(role => role.name === "warn_5");
//let muted = message.guild.roles.cache.find(role => role.name === "MUTED");

console.clear
console.log("INNERBot_Online");

//setup
client.on("guildCreate", guild => {
  console.log('guild joined')
    guild.roles.create({
        data: {
          name: 'warn_1',
          color: '#ff0000',
        },
        reason: 'setup',
      })
      guild.roles.create({
        data: {
          name: 'warn_2',
          color: '#ff0000',
        },
        reason: 'setup',
      })
      guild.roles.create({
        data: {
          name: 'warn_3',
          color: '#ff0000',
        },
        reason: 'setup',
      })
      guild.roles.create({
        data: {
          name: 'warn_4',
          color: '#ff0000',
        },
        reason: 'setup',
      })
      guild.roles.create({
        data: {
          name: 'warn_5',
          color: '#ff0000',
        },
        reason: 'setup',
      })
      guild.roles.create({
        data: {
          name: 'MUTED',
          color: '#ff0000',
        },
        reason: 'setup',
      })
        guild.roles.create({
          data: {
            name: 'RED',
            color: '#ff0000',
          },
          reason: 'setup',
        })
        guild.roles.create({
            data: {
              name: 'ORANGE',
              color: '#ff8000',
            },
            reason: 'setup',
          })
          guild.roles.create({
            data: {
              name: 'YELLOW',
              color: '#ffff00',
            },
            reason: 'setup',
          })
          guild.roles.create({
            data: {
              name: 'GREEN',
              color: '#00ff00',
            },
            reason: 'setup',
          })
          guild.roles.create({
            data: {
              name: 'DARKGREEN',
              color: '#009900',
            },
            reason: 'setup',
          })
          guild.roles.create({
            data: {
              name: 'TEAL',
              color: '#33ff99',
            },
            reason: 'setup',
          })
          guild.roles.create({
            data: {
              name: 'LIGHTBLUE',
              color: '#00ffff',
            },
            reason: 'setup',
          })
          guild.roles.create({
            data: {
              name: 'DARKBLUE',
              color: '#3a3aff',
            },
            reason: 'setup',
          })
          guild.roles.create({
            data: {
              name: 'PURPLE',
              color: '#a736ff',
            },
            reason: 'setup',
          })
          guild.roles.create({
            data: {
              name: 'PINK',
              color: '#ff33ff',
            },
            reason: 'setup',
          })
          .then(console.log)("setup complete")
          .catch(console.error);
})



//
//
//music commands start
//
//

  /**
 * Module Imports
 */
const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { PREFIX } = require("./config.json");

var bot = new Client({ disableMentions: "everyone" });

bot.commands = new Collection();
bot.prefix = PREFIX;
bot.queue = new Map();
const cooldowns = new Collection();

/**
 * Client Events
 */
bot.on('ready', () => {
  console.log('music ready!');
});
bot.on("warn", (info) => console.log(info));
bot.on("error", console.error);

/**
 * Import all commands
 */
const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  bot.commands.set(command.name, command);
}

bot.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  if (message.content.startsWith(PREFIX)) {
    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command =
      bot.commands.get(commandName) ||
      bot.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 1) * 1000;

    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        return message.reply(
          `please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`
        );
      }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
      command.execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply("There was an error executing that command.").catch(console.error);
    }
  }
});

//
//
//music commands end
//
//

//help 
bot.on('message', (message) => {
    if(message.content == '!help') {
        message.channel.send(HelpCommand)
    }
})

//auto give fan role
bot.on('guildMemberAdd', (guildMember) => {
    const fan = '717764459871076361';
    guildMember.roles.add(fan)
})

//auto not-see for muted
bot.on('channelCreate', (channel) => {
    channel.updateOverwrite(channel.guild.roles.cache.find(role => role.name === "MUTED"), { VIEW_CHANNEL: false });
})

//mod
bot.on('message', (message) => { 
let warn_1 = message.guild.roles.cache.find(role => role.name === "warn_1");
let warn_2 = message.guild.roles.cache.find(role => role.name === "warn_2");
let warn_3 = message.guild.roles.cache.find(role => role.name === "warn_3");
let warn_4 = message.guild.roles.cache.find(role => role.name === "warn_4");
let warn_5 = message.guild.roles.cache.find(role => role.name === "warn_5");
let muted = message.guild.roles.cache.find(role => role.name === "MUTED");
  const forbiddenWords =["fuck", "bitch", "asshole", "dick", "damn", "cunt", "pussy", "sperm"];
    if(message.content.includes('!mute')) {
        if(message.channel.type === 'DM') {
            //Fist check if message channel is not direct message, because you cant kick out of guide 
            message.channel.send('This command can use only in guide');
            return;
        };

        //Then check if user have permissions to do that
        if(message.member.hasPermission('MUTE_MEMBERS')) {

            //const a member, wich you need yo kick (its fist mention message member)
        let mentionMember = message.mentions.members.first();
        //If user dont mention a member, that show him this error msg
        if(!mentionMember) {
            message.channel.send('mention the member you would like to mute');
            return;
        }
        ;

        //If all steps are completed successfully try kick this user
        mentionMember.roles.add(muted)
        message.reply('user has been muted')
    }}

    if(message.content.includes('!unmute')) {
        if(message.channel.type === 'DM') {
            //Fist check if message channel is not direct message, because you cant kick out of guide 
            message.channel.send('This command can use only in guide');
            return;
        };

        //Then check if user have permissions to do that
        if(message.member.hasPermission('MUTE_MEMBERS')) {

            //const a member, wich you need yo kick (its fist mention message member)
        let mentionMember = message.mentions.members.first();
        //If user dont mention a member, that show him this error msg
        if(!mentionMember) {
            message.channel.send('mention the member you would like to warn');
            return;
        }
        ;
        if(mentionMember.roles.cache.has(muted)) {
        //If all steps are completed successfully try kick this user
        mentionMember.roles.remove(muted)
        message.reply('user has been unmuted')
        .catch(console.error);
        }
        else {message.reply('user is not muted')}
}}
    if(message.content.includes('!kick')) {
        if(message.channel.type === 'DM') {
            //Fist check if message channel is not direct message, because you cant kick out of guide 
            message.channel.send('This command can use only in guide');
            return;
        };

        //Then check if user have permissions to do that
        if(!message.member.hasPermission('KICK_MEMBERS')) {
            message.channel.send('You dont have permissions to do that');
            return;
        };

        //const a member, wich you need yo kick (its fist mention message member)
        let mentionMember = message.mentions.members.first();
        //If user dont mention a member, that show him this error msg
        if(!mentionMember) {
            message.channel.send('mention the member you woud like to kick');
            return;
        }

        //Check if your bot can`t kick this user, so that show this error msg 
        if(!mentionMember.kickable) {
            message.channel.send('I dont have permissions to kick this user');
            return
        };

        //If all steps are completed successfully try kick this user
        mentionMember.kick()
            message.reply('user has been kicked')
            .catch(console.error);
        };
        
    if(message.content.includes('!ban')) {
        if(message.channel.type === 'DM') {
            //Fist check if message channel is not direct message, because you cant kick out of guide 
            message.channel.send('This command can use only in guide');
            return;
        };

        //Then check if user have permissions to do that
        if(!message.member.hasPermission('BAN_MEMBERS')) {
            message.channel.send('You dont have permissions to do that');
            return;
        };

        //const a member, wich you need yo kick (its fist mention message member)
        let mentionMember = message.mentions.members.first();
        //If user dont mention a member, that show him this error msg
        if(!mentionMember) {
            message.channel.send('mention the member you would like to ban');
            return;
        }
        if(mentionMember.roles.cache.has.Moderator) {
          message.channel.send('You dont have permissions to ban this user');
          return;
        }
        
        //Check if your bot can`t kick this user, so that show this error msg 
        if(!mentionMember.bannable) {
            message.channel.send('I dont have permissions to ban this user');
            return
        };

        //If all steps are completed successfully try kick this user
        mentionMember.ban()
            message.reply('user has been banned')
            .catch(console.error);
        };
        
    if(message.content.includes('!warn')) {
        if(message.channel.type === 'DM') {
            //Fist check if message channel is not direct message, because you cant kick out of guide 
            message.channel.send('This command can use only in guide');
            return;
        };

        //Then check if user have permissions to do that
        if(message.member.hasPermission('MUTE_MEMBERS')) {

            //const a member, wich you need yo kick (its fist mention message member)
        let mentionMember = message.mentions.members.first();
        //If user dont mention a member, that show him this error msg
        if(!mentionMember) {
            message.channel.send('mention the member you would like to warn');
            return;
        }
        ;

        //If all steps are completed successfully try kick this user
        if(mentionMember.roles.cache.has(warn_1)) {
            //warn 1
            if(mentionMember.roles.cache.has(warn_2)) {
              //warn 2
              if(mentionMember.roles.cache.has(warn_3)) {
              //warn 3
                if(mentionMember.roles.cache.has(warn_4)) {
                //warn 4
                  if(mentionMember.roles.cache.has(warn_5)) {
                  //warn 5
                  message.reply('this person has over 5 warnings!')
          }//warn 5 brackets
        else {mentionMember.roles.add(warn_5)}
      }//warn 4 brackets
      else {mentionMember.roles.add(warn_4)}
    }//warn 3 brackets
    else {mentionMember.roles.add(warn_3)}
  }//warn 2 brackets
  else {mentionMember.roles.add(warn_2)}
}//warn 1 brackets
else{mentionMember.roles.add(warn_1)}
message.reply('user has been warned')
.catch(console.error);
}}

    var message_content = message.content.toLowerCase();
    for (var i = 0; i < forbiddenWords.length; i++) {
      if (message_content.includes(forbiddenWords[i])) {
         message.reply('you have been warned');
         message.delete({ timeout: 0});
          if(message.member.roles.cache.has(warn_1)) {
            //warn 1
            if(message.member.roles.cache.has(warn_2)) {
              //warn 2
              if(message.member.roles.cache.has(warn_3)) {
              //warn 3
                if(message.member.roles.cache.has(warn_4)) {
                //warn 4
                  if(message.member.roles.cache.has(warn_5)) {
                  //warn 5
                  message.reply('has over five warnings, <@414826002280087552>')
          }//warn 5 brackets
        else {message.member.roles.add(warn_5)}
      }//warn 4 brackets
      else {message.member.roles.add(warn_4)}
    }//warn 3 brackets
    else {message.member.roles.add(warn_3)}
  }//warn 2 brackets
  else {message.member.roles.add(warn_2)}
}//warn 1 brackets
else{message.member.roles.add(warn_1)}
      }}
})

//color stuff
  bot.on('message', (message) => {
let RED = message.guild.roles.cache.find(role => role.name === "RED");
let ORANGE = message.guild.roles.cache.find(role => role.name === "ORANGE");
let YELLOW = message.guild.roles.cache.find(role => role.name === "YELLOW");
let GREEN = message.guild.roles.cache.find(role => role.name === "GREEN");
let DARK_GREEN = message.guild.roles.cache.find(role => role.name === "DARKGREEN");
let TEAL = message.guild.roles.cache.find(role => role.name === "TEAL");
let LIGHT_BLUE = message.guild.roles.cache.find(role => role.name === "LIGHTBLUE");
let DARK_BLUE = message.guild.roles.cache.find(role => role.name === "DARKBLUE");
let PURPLE = message.guild.roles.cache.find(role => role.name === "PURPLE");
let PINK = message.guild.roles.cache.find(role => role.name === "PINK");
    var messagecontent = message.content.toLowerCase();
    if (messagecontent == '!color red') {
        message.member.roles.add(RED);
        message.member.roles.remove(ORANGE);
        message.member.roles.remove(YELLOW);
        message.member.roles.remove(GREEN);
        message.member.roles.remove(DARK_GREEN);
        message.member.roles.remove(TEAL);
        message.member.roles.remove(LIGHT_BLUE);
        message.member.roles.remove(DARK_BLUE);
        message.member.roles.remove(PURPLE);
        message.member.roles.remove(PINK);
        message.reply('Color Assigned');
        console.log('Color Assigned');
    }
    else if (messagecontent == '!color orange') {
        message.member.roles.add(ORANGE);
        message.member.roles.remove(RED);
        message.member.roles.remove(YELLOW);
        message.member.roles.remove(GREEN);
        message.member.roles.remove(DARK_GREEN);
        message.member.roles.remove(TEAL);
        message.member.roles.remove(LIGHT_BLUE);
        message.member.roles.remove(DARK_BLUE);
        message.member.roles.remove(PURPLE);
        message.member.roles.remove(PINK);
        message.reply('Color Assigned');
        console.log('Color Assigned');
    }
    else if (messagecontent == '!color yellow') {
        message.member.roles.add(YELLOW);
        message.member.roles.remove(RED);
        message.member.roles.remove(ORANGE);
        message.member.roles.remove(GREEN);
        message.member.roles.remove(DARK_GREEN);
        message.member.roles.remove(TEAL);
        message.member.roles.remove(LIGHT_BLUE);
        message.member.roles.remove(DARK_BLUE);
        message.member.roles.remove(PURPLE);
        message.member.roles.remove(PINK);
        message.reply('Color Assigned');
        console.log('Color Assigned');
    }
    else if (messagecontent == '!color green') {
        message.member.roles.add(GREEN);
        message.member.roles.remove(RED);
        message.member.roles.remove(ORANGE);
        message.member.roles.remove(YELLOW);
        message.member.roles.remove(DARK_GREEN);
        message.member.roles.remove(TEAL);
        message.member.roles.remove(LIGHT_BLUE);
        message.member.roles.remove(DARK_BLUE);
        message.member.roles.remove(PURPLE);
        message.member.roles.remove(PINK);
        message.reply('Color Assigned');
        console.log('Color Assigned');
    }
    else if (messagecontent == '!color dark green') {
        message.member.roles.add(DARK_GREEN);
        message.member.roles.remove(RED);
        message.member.roles.remove(ORANGE);
        message.member.roles.remove(YELLOW);
        message.member.roles.remove(GREEN);
        message.member.roles.remove(TEAL);
        message.member.roles.remove(LIGHT_BLUE);
        message.member.roles.remove(DARK_BLUE);
        message.member.roles.remove(PURPLE);
        message.member.roles.remove(PINK);
        message.reply('Color Assigned');
        console.log('Color Assigned');
    }
    else if (messagecontent == '!color teal') {
        message.member.roles.add(TEAL);
        message.member.roles.remove(RED);
        message.member.roles.remove(ORANGE);
        message.member.roles.remove(YELLOW);
        message.member.roles.remove(GREEN);
        message.member.roles.remove(DARK_GREEN);
        message.member.roles.remove(LIGHT_BLUE);
        message.member.roles.remove(DARK_BLUE);
        message.member.roles.remove(PURPLE);
        message.member.roles.remove(PINK);
        message.reply('Color Assigned');
        console.log('Color Assigned');
    }
    else if (messagecontent == '!color light blue') {
        message.member.roles.add(LIGHT_BLUE);
        message.member.roles.remove(RED);
        message.member.roles.remove(ORANGE);
        message.member.roles.remove(YELLOW);
        message.member.roles.remove(GREEN);
        message.member.roles.remove(DARK_GREEN);
        message.member.roles.remove(TEAL);
        message.member.roles.remove(DARK_BLUE);
        message.member.roles.remove(PURPLE);
        message.member.roles.remove(PINK);
        message.reply('Color Assigned');
        console.log('Color Assigned');
    }
    else if (messagecontent == '!color dark blue') {
        message.member.roles.add(DARK_BLUE);
        message.member.roles.remove(RED);
        message.member.roles.remove(ORANGE);
        message.member.roles.remove(YELLOW);
        message.member.roles.remove(GREEN);
        message.member.roles.remove(DARK_GREEN);
        message.member.roles.remove(TEAL);
        message.member.roles.remove(LIGHT_BLUE);
        message.member.roles.remove(PURPLE);
        message.member.roles.remove(PINK);
        message.reply('Color Assigned');
        console.log('Color Assigned');
    }
    else if (messagecontent == '!color purple') {
        message.member.roles.add(PURPLE);
        message.member.roles.remove(RED);
        message.member.roles.remove(ORANGE);
        message.member.roles.remove(YELLOW);
        message.member.roles.remove(GREEN);
        message.member.roles.remove(DARK_GREEN);
        message.member.roles.remove(TEAL);
        message.member.roles.remove(LIGHT_BLUE);
        message.member.roles.remove(DARK_BLUE);
        message.member.roles.remove(PINK);
        message.reply('Color Assigned');
        console.log('Color Assigned');
    }
    else if (messagecontent == '!color pink') {
        message.member.roles.add(PINK);
        message.member.roles.remove(RED);
        message.member.roles.remove(ORANGE);
        message.member.roles.remove(YELLOW);
        message.member.roles.remove(GREEN);
        message.member.roles.remove(DARK_GREEN);
        message.member.roles.remove(TEAL);
        message.member.roles.remove(LIGHT_BLUE);
        message.member.roles.remove(DARK_BLUE);
        message.member.roles.remove(PURPLE);
        message.reply('Color Assigned');
        console.log('Color Assigned');
    }
    else if (message.content == '!roles') {
        console.log(message.guild.roles);
    }
})
    
//!clear
//work in progress

bot.login(process.env.token)