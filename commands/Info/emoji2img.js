module.exports = {
  name: "Emoji2Img",
  aliases: ['e2i'],
  description: "Convert emoji to GIF and PNG",  
  run: async(client, message, args) => {
    const discord = require("discord.js");
    if (!args[0]) return message.reply({content: 'type the emoji', allowedMentions: { repliedUser: false } });
    const lro = discord.Util.parseEmoji(args[0]);
    if (!lro.name || !lro.id) return message.reply({content: "can't find this emoji"
});
const image = `${lro.name}: https://cdn.discordapp.com/emojis/${lro.id}.${lro.animated ? "gif" : "png"}`;
    message.reply(image);
  }
     }  