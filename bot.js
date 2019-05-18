$ message.mentions.users.first() || message.author;  // Me Codes
if (message.content.startsWith("$avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });

  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');  // Me Codes
if (message.content.startsWith('$adminbc')){
if(!message.author.id === '476185102922285066') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

  client.on('message', msg => {
    if(msg.content === '$help')
    msg.reply('Check Your DM :white_check_mark:')  // Me Codes
  
  
  client.on("message", message => {
    if (message.content === "$help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب
  
       $obc | لأرسال برود كاست للكل  // Alpha Codes Ghost

       $bc  |  لأرسال برود كاست للأونلاين

       $adminbc | برودكاست عادي

       ** `)
   message.author.sendEmbed(embed)
   
   }
   });

const developers = ["472413769700474901","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');  // Me Codes
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {  // Me Codes
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");  // Me Codes
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.login(process.env.TOKEN);
