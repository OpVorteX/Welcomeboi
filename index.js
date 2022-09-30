require("http").createServer((req, res) => res.end("BOT MADE BY VortX               ")).listen(process.env.PORT || 8080)
const Discord = require('discord.js')
const client = new Discord.Client()

client.on("ready", async () => {
  console.log(`Bot is has been deployed 🚀`)
  client.user
    .setActivity(`welcome! Made Vy VortX`, { type: "WATCHING" }) 
    .catch(error => console.log(error))
})

const canvacord = require("canvacord")

client.on("guildMemberAdd", async member => {
  if(member.guild.id !== "999337113986289784") return;
  const welcomeCard = new canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarURL({ format: "png" }))
  .setColor("title", "#0cc3f3") //white
  .setColor("username-box", "#0cc3f3") //white
  .setColor("discriminator-box", "#0cc3f3") //white
  .setColor("message-box", "#0cc3f3") //white
  .setColor("border", "#000000") //black
  .setColor("avatar", "#0cc3f3") //white
  .setBackground("https://media.discordapp.net/attachments/936956032213729340/936957093779505202/IMG_20220129_101957.png") //should be png format
  .setMemberCount(member.guild.memberCount)
  let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "welcome.png")
  member.guild.channels.cache.get("999337115181645919").send(member.user.toString(), attachment)
})


client.login(TOKEN)
