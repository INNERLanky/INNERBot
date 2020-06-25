const Discord = require('discord.js');
console.log("mod.js_Online");

//embed help
//@me 5+

bot.on('message', (message) => {
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
                  //dm me-('Someone Has Sweared over 5 times!')
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
                  //dm me-('Someone Has Sweared over 5 times!')
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
}}})
