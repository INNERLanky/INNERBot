const Discord = require('discord.js');

const forbiddenWords =["shit", "fuck", "bitch", "asshole", "dick", "damn"]
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
console.clear
console.log("INNERBot_Online");
//add !mute - muted !unmute
//embed help
//dm me 5+ warns

const bot = new Discord.Client();

bot.on('message', (message) => {
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
                  mention = '414826002280087552';
                  mention.send('Someone Has Sweared over 5 times!')
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
});
bot.login(process.env.token)