const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzA1Njg2ODczNTIzMDkzNTM1.XqvZ_A.PcgTlZbGtmVZXHqsBwafO9yVaDA';

const PREFIX = '/Cápa.';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content == "Easteregg"){
        message.channel.send('Cápus szereti az Easter Egg-eket')
    }
})

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
