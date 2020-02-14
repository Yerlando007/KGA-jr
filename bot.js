///
const Canvas = require('canvas');
const Discord = require('discord.js');
const RichEmbed = require('discord.js');
const Emoji = require('discord.js');
const MessageReaction = require('discord.js');
const CONFIG = require('./config');
const bot = new Discord.Client({ disableEveryone: true });
///

const token = "NDc0MzA1OTAzODEwODM4NTMw.XMR8lQ.fLF_LmPDOgkQ5SB45S6OfurgLUo";
const user = bot.users;

if (CONFIG.roles.length !== CONFIG.reactions.length)
    throw "Roles list and reactions list are not the same length! Please double check this in the config.js file";

//Random Iteger from 'low' to 'high'
function randomIntInc (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}
function randomIntInc2 (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}
function randomIntInc3 (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}
function randomIntInc4 (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}
function randomIntInc5 (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}
/////////////////////////
const rando_imgs = [
  'https://media.giphy.com/media/CZpro4AZHs436/giphy.gif',
  'https://media.giphy.com/media/CZpro4AZHs436/giphy2.gif',
  'https://media.giphy.com/media/CZpro4AZHs436/giphy3.gif',
  ]
  /////////////////////////


bot.on("ready", () => {
  console.log("I am ready!");
});

bot.login(token);

var res=0;
var res1=0;
var res2=0;
var result="";
var money=300;

bot.on('message', message => {
  /////////////////////////////////////////////
if(message.content==="slot"){
    res2 = randomIntInc3(1,9);
    res3 = randomIntInc4(1,9);
    res4 = randomIntInc5(1,9);     
    /*     
    if(res2==9 && res3==9 && res4==9)
    {
      message.author.send("Молодец!!! Ты выиграл нитро. Вот твой приз - https://discord.gift/Tk9pfmpRF7fQM975");
    }
    else
    {
      message.channel.send(`пробуй еще ${message.author}`);
    }*/
      if (money>0)
      {
        if (res2==res3 && res3==res4 && res4==res2)
        {        
        message.channel.send("" + res2 + res3 + res4);   
        message.channel.send("Ты выиграл!!!");
        money=money+100;
        message.channel.send("У тебя осталось:" + money);
        }
      else
        {
        message.channel.send("" + res2 + res3 + res4);   
        message.channel.send("you lose");
        money=money-100;
        message.channel.send("У тебя осталось:" + money);
        }        
      }
      else
      {
        message.channel.send("У вас осталось:" + money + "\nТы не можешь больше играть");
      }
    }
else if (message.content==="hesoyam")
{
  if (money>100)
  {
    message.author.send("Хрен тебе!!!");
    message.channel.send("Все еще можно играть");
  }
  else
  {
    money = money + 250;
    message.channel.send("У вас теперь:" + money);
    message.channel.send(`${message.author} читер`);   
  }
}
});


bot.on('message', message => {
  /////////////////////////////////////////////
  if(message.content==="F" || message.content==="f"){
    res1 = randomIntInc2(1,8);
    {
            if(res1===1){
        message.channel.send(`${message.author} обнят`, {files: ["https://media1.tenor.com/images/54137a5495d80bacbb82bf79968ebda0/tenor.gif"]});
      }else if(res1===2){
        message.channel.send(`убежал от ${message.author}`, {files: ["https://media1.tenor.com/images/235aafbb68bb5b0ad9f3c813610d0556/tenor.gif"]});
      }else if(res1===3){
        message.channel.send(`разозлился на ${message.author}`, {files: ["https://media1.tenor.com/images/70ba809b4b29346d54e9efd2bc2b6c77/tenor.gif"]});
      }else if(res1===4){
        message.channel.send(`заинтересован ${message.author}`, {files: ["https://media1.tenor.com/images/a7148c6b5ed86260577f7c40c41c9981/tenor.gif"]});
      }else if(res1===5){
        message.channel.send(`в ужасе от ${message.author}`, {files: ["https://media1.tenor.com/images/777723dd1032af07230507d59c487c49/tenor.gif"]});
      }else if(res1===6){
        message.channel.send(`в недоумение от ${message.author}`, {files: ["https://media1.tenor.com/images/f64a3313a40c4905ee7a5a1e98c28386/tenor.gif"]});
      }else if(res1===7){
        message.channel.send(`${message.author} очарован`, {files: ["https://media1.tenor.com/images/7cddc4e02afcbcca24967c3b7891a843/tenor.gif"]});
      }else if(res1===8){
        message.channel.send(message.author.username + " был выпнут из сервера", {files: ["https://media1.tenor.com/images/0d419dd40efe758cdfc56c8ef3ee4f9f/tenor.gif"]});
        message.member.kick('posting links');
        message.author.send("Ты был выпнут из сервера. Заходи обратно и попробуй снова!!! https://discord.gg/j7P8uZx", {files: ["https://media1.tenor.com/images/0d419dd40efe758cdfc56c8ef3ee4f9f/tenor.gif"]})
      }
      }}
  });
  ////////////////////////////
/*
bot.on('guildMemberAdd', member => { 
console.log('User' + member.user.username + ' has joined the server!')
console.log(member)
res = randomIntInc(1,3);
var role = member.guild.roles.find('name','User');

member.addRole(role)
if (res==1){
member.guild.channels.get('463808749841285131').send('**' + member.user.username + '**, has joined the server!https://pp.userapi.com/c540100/v540100566/4bfa3/CrH68MtUsTY.jpg');
}
else if (res===2){
  member.guild.channels.get('463808749841285131').send('**' + member.user.username + '**, has joined the server!https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2019/05/764/432/Sonic.jpg?ve=1&tl=1');
  }
  else if (res===3){
    member.guild.channels.get('463808749841285131').send('**' + member.user.username + '**, has joined the server!https://i.ytimg.com/vi/BUhuOwwD4n8/maxresdefault.jpg');
    }
});


bot.on('guildMemberRemove', member => { 
  
  member.guild.channels.get('463808749841285131').send('**' + member.user.username + '**, has left the server!');
  
  });
*/

bot.on('message', message => {
  /////////////////////////////////////////////
  if (message.author.equals(bot.user)) return;
  /////////////////////////////////////////////
  if(message.content==="начать игру"){
    res = randomIntInc(1,3);
    //ножницы 1
    //бумага 2
    //камень 3
    if(res===1){
      result="ножницы";
    }else if(res===2){
      result="бумага";
    }else if(res===3){
      result="камень";
    }
    message.channel.send("камень, бумага или ножницы?");
  }
    if(message.content==="камень"){
      if(res===2){
        //win
        message.channel.send("У меня "+ result);
        message.channel.send("Великий Бот выиграл");
      }else if(res===1){
        //lose
        message.channel.send("У меня "+ result);
        message.channel.send("Я все равно выиграл, т.к. на этом сервере я могу все побить");
      }else if(res===3){
        //draw
        message.channel.send("У меня "+ result);
        message.channel.send("Хоть ничья, но в мою пользу");
      }else{
        message.channel.send("Напиши 'начать игру', чтобы начать")
      }
    }else if(message.content==="бумага"){
      if(res===1){
        //win
        message.channel.send("У меня "+ result);
        message.channel.send("Великий Бот выиграл");
      }else if(res===3){
        message.channel.send("У меня "+ result);
        message.channel.send("Я все равно выиграл, т.к. на этом сервере я могу все побить");
      }else if(res===2){
        message.channel.send("У меня "+ result);
        message.channel.send("Хоть ничья, но в мою пользу");
      }
    }else if(message.content==="ножницы"){
      if(res===3){
        //win
        message.channel.send("У меня "+ result);
        message.channel.send("Великий Бот выиграл");
      }else if(res===2){
        message.channel.send("У меня "+ result);
        message.channel.send("Я все равно выиграл, т.к. на этом сервере я могу все побить");
      }else if(res===1){
        message.channel.send("У меня "+ result);
        message.channel.send("Хоть ничья, но в мою пользу");
      }
    }

    ////////////////////////////////////////////////////////////////////////////
    

    if (message.content == "Камень") {
        message.channel.send("Не тупи и пиши строчными 'камень'" );
    }
    else    if (message.content == "Бумага") {
        message.channel.send("Не тупи и пиши строчными 'бумага'");
    }
    else if (message.content == "ping") {
      message.reply("Pong!");
    }
    else    if (message.content == "Ножницы") {
        message.channel.send("Не тупи и пиши строчными 'ножницы'");
    }
    else    if (message.content == "НОЖНИЦЫ") {
      message.channel.send("Не беси меня и пиши строчными 'ножницы'");
    }
    else    if (message.content == "БУМАГА") {
    message.channel.send("Не беси меня и пиши строчными 'бумага'");
    }
    else    if (message.content == "КАМЕНЬ") {
        message.channel.send("Не тупи и пиши строчными 'камень'" );
    } 
    else    if (message.content == "scissors") {
      message.channel.send("Не беси меня, Трамп, и пиши на русском 'ножницы'");
    }
    else    if (message.content == "paper") {
    message.channel.send("Не беси меня, Трамп, и пиши на русском 'бумага'");
    }
    else    if (message.content == "rock") {
        message.channel.send("Не беси меня, Трамп, и пиши на русском 'камень'" );
    } 
    else    if (message.content == "Scissors") {
      message.channel.send("Не беси меня, Обама, и пиши строчными на русском 'ножницы'");
    }
    else    if (message.content == "Paper") {
    message.channel.send("Не беси меня, Обама, и пиши строчными на русском 'бумага'");
    }
    else    if (message.content == "Rock") {
        message.channel.send("Не беси меня, Обама, и пиши строчными на русском 'камень'" );
    } 
    else    if (message.content == "привет") {
      message.channel.send(" Привет, мой друг! Тебе ответил бот, т.к. царь сервера не любит это");
    }
    else    if (message.content == "как дела") {
      message.channel.send("Не тупи");
    }
    else    if (message.content == "видео") {
      message.channel.send("https://youtu.be/GV2bHugFUzU");
    }
    else    if (message.content == "пока") {
      message.channel.send("Удачи");
    }
    else    if (message.content == "Привет") {
      message.channel.send(" Привет, мой друг! Тебе ответил бот, т.к. царь сервера не любит это и пиши строчными");
    }
    else    if (message.content == "Как дела") {
      message.channel.send("Не тупи и пиши строчными");
    }
    else    if (message.content == "Видео") {
      message.channel.send("Не будет, если не будешь писать строчными");
    }
    else    if (message.content == "Пока") {
      message.channel.send("Удачи и пиши строчными");
    }
    else    if (message.content == "Hello") {
      message.channel.send("Обама, что ли? и пиши строчными");
    }
    else    if (message.content == "hello") {
      message.channel.send("я не понимаю буржуйский");
    }
    else    if (message.content == "Бот, хочешь быть ниже Team Sonic?") {
      message.channel.send("Нет, и удали тех кому не нравится. Особенно Vadim71Q");
    }
    else    if (message.content == "pls KGA") {
      message.channel.send("не используй на меня префикс. я не dank, чертов, memer");
    }
    else    if (message.content == "pls hentai") {
      message.channel.send("8========D~{(.)}");
    }
    else    if (message.content == "Начать игру") {
      message.channel.send(":middle_finger: с маленькой");
    }
    else    if (message.content == "Извини") {
      message.channel.send("your mom gay");
    }
    else    if (message.content == "извини") {
      message.channel.send("your father lesbian");
    }
    /////////////////////////////////////////////
    if (message.content == "Картинка!") {
      message.channel.send("good",{files: ["https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/11/SONIC_INTL_J_CARREY_FORWARD_RUN_DGTL_1_SHT_UK-920x584.jpg"]});
    }
    ///////////////////////////////////////////////

    if(message.content == "!sexWithDolphins")
{
    if (message.member.id  ==  "281477029780652033")
    {
        message.channel.send(`Пользователю ${message.author} было выдано разрешение на еблю дельфинов. Смело идите в зоопарк.`);      
    }
}

    /////////////////////////////////////////////
    if(message.content.includes("отправка"))
    {
        if(message.member.roles.find(r => r.name === "Царь сервера"))
        {
            var messaga = message.content.split("///"); 
            if(messaga.length != 3)
            {
                message.channel.send('Неверный синтаксис команды');
            }
            else
            {
                const kanal = message.guild.channels.find(channel => channel.name == messaga[1]);
                if(message.guild.channels.exists('name', messaga[1]))
                {
                    kanal.send(messaga[2]);
                }
                else { message.channel.send('Название канала введено неверно.'); }
            }
        }
    }
    ////////////////////////////////////////
    if(message.content.includes("картинка"))
    {
        var messaga = message.content.split(" "); 
        if(messaga.length != 2)
        {
            message.channel.send('Неверный синтаксис команды');
        }
        else
        {
            if(messaga[1].endsWith(".jpg") || messaga[1].endsWith(".png") || messaga[1].endsWith(".ico") || messaga[1].endsWith(".svg") || messaga[1].endsWith(".bmp") ||  messaga[1].endsWith(".raw") || messaga[1].endsWith(".tiff") || messaga[1].endsWith(".gif") || messaga[1].endsWith(".jpeg"))
            {
                message.channel.send(`${message.author}`, {files: [messaga[1]]});
                message.delete(1);
            }
            else
            {
                message.channel.send('Ссылка на картинку не правильная.');
            }
        }
    }

/////////////////////////////////////////
if(message.member.roles.find(r => r.name === "Царь сервера") || message.member.roles.find(r => r.name === "Скриптер")){
  if(message.content=="!createrolemessage"){
    if (message.guild && !message.channel.permissionsFor(message.guild.me).missing('SEND_MESSAGES')) return;
  
    if ((message.author.id !== CONFIG.yourID) && (message.content.toLowerCase() !== CONFIG.setupCMD)) return;
    
    if (CONFIG.deleteSetupCMD) {
        const missing = message.channel.permissionsFor(message.guild.me).missing('MANAGE_MESSAGES');
        // Here we check if the bot can actually delete messages in the channel the command is being ran in
        if (missing.includes('MANAGE_MESSAGES'))
            throw new Error("I need permission to delete your command message! Please assign the 'Manage Messages' permission to me in this channel!");
        message.delete().catch(O_o=>{});
    }
    
    const missing = message.channel.permissionsFor(message.guild.me).missing('MANAGE_MESSAGES');
    // Here we check if the bot can actually add recations in the channel the command is being ran in
    if (missing.includes('ADD_REACTIONS'))
        throw new Error("I need permission to add reactions to these messages! Please assign the 'Add Reactions' permission to me in this channel!");
    
    if (!CONFIG.embed) {
        if (!CONFIG.initialMessage || (CONFIG.initialMessage === '')) 
            throw "The 'initialMessage' property is not set in the config.js file. Please do this!";
    
        message.channel.send(CONFIG.initialMessage);
    
        const messages = generateMessages();
        for (const { role, message: msg, emoji } of messages) {
            if (!message.guild.roles.find(r => r.name === role))
                throw `The role '${role}' does not exist!`;
    
            message.channel.send(msg).then(async m => {
                const customCheck = message.guild.emojis.find(e => e.name === emoji);
                if (!customCheck) await m.react(emoji);
                else await m.react(customCheck.id);
            }).catch(console.error);
        }
    } else {
        if (!CONFIG.embedMessage || (CONFIG.embedMessage === ''))
            throw "The 'embedMessage' property is not set in the config.js file. Please do this!";
        if (!CONFIG.embedFooter || (CONFIG.embedMessage === ''))
            throw "The 'embedFooter' property is not set in the config.js file. Please do this!";
    
        const roleEmbed = new Discord.RichEmbed()
            .setDescription(CONFIG.embedMessage)
            .setFooter(CONFIG.embedFooter);
    
        if (CONFIG.embedColor) roleEmbed.setColor(CONFIG.embedColor);
    
        if (CONFIG.embedThumbnail && (CONFIG.embedThumbnailLink !== '')) 
            roleEmbed.setThumbnail(CONFIG.embedThumbnailLink);
        else if (CONFIG.embedThumbnail && message.guild.icon)
            roleEmbed.setThumbnail(message.guild.iconURL);
    
        const fields = generateEmbedFields();
        if (fields.length > 25) throw "That maximum roles that can be set for an embed is 25!";
    
        for (const { emoji, role } of fields) {
            if (!message.guild.roles.find(r => r.name === role))
                throw `The role '${role}' does not exist!`;
    
            const customEmote = bot.emojis.find(e => e.name === emoji);
            
            if (!customEmote) roleEmbed.addField(emoji, role, true);
            else roleEmbed.addField(customEmote, role, true);
        }
    
        message.channel.send(roleEmbed).then(async m => {
            for (const r of CONFIG.reactions) {
                const emoji = r;
                const customCheck = bot.emojis.find(e => e.name === emoji);
                
                if (!customCheck) await m.react(emoji);
                else await m.react(customCheck.id);
            }
        });
    }
  }
}
});
/////////////////////////////////////////

 

  bot.on('raw', async event => {
    if (!events.hasOwnProperty(event.t)) return;

    const { d: data } = event;
    const user = bot.users.get(data.user_id);
    const channel = bot.channels.get(data.channel_id);

    const message = await channel.fetchMessage(data.message_id);
    const member = message.guild.members.get(user.id);

    const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
    let reaction = message.reactions.get(emojiKey);

    if (!reaction) {
        // Create an object that can be passed through the event like normal
        const emoji = new Discord.Emoji(bot.guilds.get(data.guild_id), data.emoji);
        reaction = new MessageReaction(message, emoji, 1, data.user_id === bot.user.id);
    }

    let embedFooterText;
    if (message.embeds[0]) embedFooterText = message.embeds[0].footer.text;

    if (
        (message.author.id === bot.user.id) && (message.content !== CONFIG.initialMessage || 
        (message.embeds[0] && (embedFooterText !== CONFIG.embedFooter)))
    ) {

        if (!CONFIG.embed && (message.embeds.length < 1)) {
            const re = `\\*\\*"(.+)?(?="\\*\\*)`;
            const role = message.content.match(re)[1];

            if (member.id !== bot.user.id) {
                const guildRole = message.guild.roles.find(r => r.name === role);
                if (event.t === "MESSAGE_REACTION_ADD") member.addRole(guildRole.id);
                else if (event.t === "MESSAGE_REACTION_REMOVE") member.removeRole(guildRole.id);
            }
        } else if (CONFIG.embed && (message.embeds.length >= 1)) {
            const fields = message.embeds[0].fields;

            for (const { name, value } of fields) {
                if (member.id !== bot.user.id) {
                    const guildRole = message.guild.roles.find(r => r.name === value);
                    if ((name === reaction.emoji.name) || (name === reaction.emoji.toString())) {
                        if (event.t === "MESSAGE_REACTION_ADD") member.addRole(guildRole.id);
                        else if (event.t === "MESSAGE_REACTION_REMOVE") member.removeRole(guildRole.id);
                    }
                }
            }
        }
    }
});

const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

process.on('unhandledRejection', err => {
  const msg = err.stack.replace(new RegExp(`${__dirname}/`, 'g'), './');
console.error("Unhandled Rejection", msg);
});

function generateMessages() {
  return CONFIG.roles.map((r, e) => {
      return {
          role: r,
          message: `React below to get the **"${r}"** role!`, //DONT CHANGE THIS,
          emoji: CONFIG.reactions[e]
      };
  });
}

// Function to generate the embed fields, based on your settings and if you set "const embed = true;"
function generateEmbedFields() {
  return CONFIG.roles.map((r, e) => {
      return {
          emoji: CONFIG.reactions[e],
          role: r
      };
  });
}





bot.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === '💌добро-пожаловать💌');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('ss.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'ss.png');

	channel.send(`Welcome to the server, ${member}!`, attachment);
});

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};