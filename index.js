const Discord = require('discord.js');

const forbiddenWords =["shit", "fuck", "bitch", "asshole", "dick", "damn"];
const Admin = '603011023040938021'
const RED = '723664452003692604';
const ORANGE = '723664555905122374';
const YELLOW = '723664739263053885';
const GREEN = '723664835799416852';
const DARK_GREEN = '723664999398244432';
const TEAL = '723665088396918865';
const LIGHT_BLUE = '723665166608236554';
const DARK_BLUE = '723665317460574318';
const PURPLE = '723665385655894037';
const PINK = '723665474369617983';
const warn_1 = '725124364315394100';
const warn_2 = '725124418568716360';
const warn_3 = '725124483668639794';
const warn_4 = '725124499267387452';
const warn_5 = '725124515503538236';
const muted = '709822471880179773';
const fan = '717764459871076361';
const CLEAR_MESSAGES = '!clear';

console.clear
console.log("INNERBot_Online");
//music
//clear
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.content == '!help') {
        message.reply('Use !color red, orange, yellow, green, dark green, teal, light blue, dark blue, purple, and pink for different colors. \n You can also use !mute, !kick, !ban, and !warn, if you have the permissions to. \n <@&723664452003692604> <@&723664555905122374> <@&723664739263053885> \n <@&723664835799416852> <@&723664999398244432> <@&723665088396918865> \n <@&723665166608236554> <@&723665317460574318> \n <@&723665385655894037> <@&723665474369617983>')
    }
})
bot.on('guildMemberAdd', (guildMember) => {
    guildMember.roles.add(fan)
})

bot.on('message', (message) => {
    if(message.content.includes('!mute')) {
        if(message.channel.type === 'DM') {
            //Fist check if message channel is not direct message, because you cant kick out of guide 
            message.channel.send('This command can use only in guide');
            return;
        };

        //Then check if user have permissions to do that
        if(message.member.roles.cache.has(Admin)) {

            //const a member, wich you need yo kick (its fist mention message member)
        let mentionMember = message.mentions.members.first();
        //If user dont mention a member, that show him this error msg
        if(!mentionMember) {
            message.channel.send('mention the member you would like to warn');
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
        if(message.member.roles.cache.has(Admin)) {

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
            message.channel.send('mention the member you woud like to ban');
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
        if(message.member.roles.cache.has(Admin)) {

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

    if (message.content == '!color red') {
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
    else if (message.content == '!color orange') {
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
    else if (message.content == '!color yellow') {
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
    else if (message.content == '!color green') {
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
    else if (message.content == '!color dark green') {
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
    else if (message.content == '!color teal') {
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
    else if (message.content == '!color light blue') {
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
    else if (message.content == '!color dark blue') {
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
    else if (message.content == '!color purple') {
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
    else if (message.content == '!color pink') {
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
bot.on('message', message => {
    if (message.content == CLEAR_MESSAGES) {

      // Check the following permissions before deleting messages:
      //    1. Check if the user has enough permissions
      //    2. Check if I have the permission to execute the command

      if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        return;
      }

      // Only delete messages if the channel type is TextChannel
      // DO NOT delete messages in DM Channel or Group DM Channel
      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length; // number of messages deleted

            // Logging the number of messages deleted on both the channel and console.
            message.channel.sendMessage("Deletion of messages successful. Total messages deleted: "+messagesDeleted);
            console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted)
          })
          .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
          });
      }
    }
  });

bot.login(process.env.token)