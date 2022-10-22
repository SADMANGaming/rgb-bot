const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
const { prefix, developerID, bot, support } = require("../../config.json")
const { tick } = require('../../JSON/emoji.json');


module.exports = {
  name: "help",
  description: "Info",

  run: async (client, message, args) => {


    const embed = new Discord.MessageEmbed()
    .setTitle(`${bot} Help`)
    .setDescription(`${tick} Hello **${message.author.username}**, \n *Choose an category below to see commands* \n\n :question: New to ${bot}? Check out server \n ${support} \n\n To find command aliases you have see usage after prefix. If there is no aliases of that command then there will be default command
    Made By - Sadman`)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setFooter(`Requested by: ${message.author.tag}`)

    const info = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Info`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Here are all the Info commands: \n\n \`help\`: **Usage** \`${prefix}\`help \n\n \`invite\`: **Usage** \`${prefix}\`inv \n\n \`calculator\`: **Usage** \`${prefix}\`math`)
    .setFooter(`Requested by: ${message.author.tag} - Bot by Sadman`)


    const fun = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Fun`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`Here are all the fun commands: \n\n \`snake\`: **Usage**: \`${prefix}\`snake \n\n \`fight\`: **Usage**: \`${prefix}\`fight @user \n\n \`rockpaperscissors\`: **Usage**: \`${prefix}\`rps @user \n\n \`quickclick\`: **Usage**: \`${prefix}\`qc \n\n \`wouldyourather\`: **Usage**: \`${prefix}\`wouldyourather \n\n \`willyoupressthebutton\`: **Usage**: \`${prefix}\`wypb \n\n \`trivia\`: **Usage**: \`${prefix}\`trivia \n\n \`purpose\`: **Usage**: \`${prefix}\`purpose @user <love line>  \n\n \`ShuffleGuess\`: **Usage**: \`${prefix}\`sg \n\n \`LieSwatter\`: **Usage**: \`${prefix}\`lsw \n\n \`NeverHaveIEver\`: **Usage**: \`${prefix}\`whie`)
    .setFooter(`Requested by: ${message.author.tag} - Bot by Sadman`)



    let button1 = new MessageButton()
    .setLabel(`Info`)
    .setID(`info`)
    .setStyle("green");

    let button2 = new MessageButton()
    .setLabel(`Fun`)
    .setID(`fun`)
    .setStyle("green");


    let row = new MessageActionRow()
    .addComponents(button1, button2);



    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 300000 });

    collector.on('collect', async (b) => {

        if(b.id == "anime") {

            MESSAGE.edit(anime, row);
            await b.reply.defer()
            
        }

         if(b.id == "fun") {

            MESSAGE.edit(fun, row);
            await b.reply.defer()
            
        }

        if(b.id == "info") {
            
            MESSAGE.edit(info, row);
            await b.reply.defer()

        }


        if(b.id == "mod") {
            
            MESSAGE.edit(mod, row);
            await b.reply.defer()

        }

        if(b.id == "eco") {
            
            MESSAGE.edit(eco, row);
            await b.reply.defer()

        }


    });


   
}};