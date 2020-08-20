//manual clean up
bot.on('message', (message) => {
    let messagecontent = message.content.toLowerCase
    if(messagecontent == '!reset')
    if(message.member.hasPermission('MANAGE_ROLES')) {
    let botCreatedRolesDelete = message.guild.roles.cache.find(role => role.name === 'RED');
    botCreatedRolesDelete.delete();
    message.channel.send('manual reset completed')
    console.log('manual reset completed')
    }
  })
  
  //auto clean up
  bot.on('guildDelete', (guild) => {
    let botCreatedRolesDelete = guild.roles.cache.find(role => role.name === botCreatedRoles);
    botCreatedRolesDelete.delete();
    console.log('auto reset completed')
  })

  //manual setup
console.log("Manual Setup Online");
bot.on('message', (message) => {
  let messagecontent = message.content.toLowerCase
  if(messagecontent == '!setup')
  if(message.author.id === '738037378509307995') {
    message.channel.send('manual setup completed')
    console.log('manual setup completed')
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
            console.log("setup complete")
            .catch(console.error);
          }
})

//auto setup
console.log("Auto Setup Online");
bot.on('guildCreate', (guild) => {
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
        console.log('auto setup completed')
        .catch(console.error);
})

//invite
console.log("invite command Online")
bot.on('message', (message) => {
if(message.content == '!invite') {
  message.channel.send('https://discord.com/oauth2/authorize?client_id=725140503846191114&permissions=8&scope=bot')
}
})