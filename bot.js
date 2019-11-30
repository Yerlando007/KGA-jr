const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NDc0MzA1OTAzODEwODM4NTMw.XMR8lQ.fLF_LmPDOgkQ5SB45S6OfurgLUo";
const user = bot.users;
const newChannel = user.game;
const client = new Discord.Client();

//Random Iteger from 'low' to 'high'
function randomIntInc (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}



bot.on("ready", () => {
  console.log("I am ready!");
});

bot.login(token);

var res=0;
var result="";


bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


bot.on('guildMemberAdd', member => { 
console.log('User' + member.user.username + ' has joined the server!')
console.log(member)
res = randomIntInc(1,3);
var role = member.guild.roles.find('name','User');

member.addRole(role)
if (res===1){
member.guild.channels.get('463808749841285131').send('**' + member.user.username + '**, has joined the server!https://pp.userapi.com/c540100/v540100566/4bfa3/CrH68MtUsTY.jpg');
}
else if (res===2){
  member.guild.channels.get('463808749841285131').send('**' + member.user.username + '**, has joined the server!https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2019/05/764/432/Sonic.jpg?ve=1&tl=1');
  }
  else if (res===3){
    member.guild.channels.get('463808749841285131').send('**' + member.user.username + '**, has joined the server!https://i.ytimg.com/vi/BUhuOwwD4n8/maxresdefault.jpg');
    }
});

https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2019/05/764/432/Sonic.jpg?ve=1&tl=1

bot.on('guildMemberRemove', member => { 
  
  member.guild.channels.get('463808749841285131').send('**' + member.user.username + '**, has left the server!');
  
  });
