const Discord = require ("discord.js");

const token = "NDMxOTAwODk3ODIwNDA5ODY2.DalekQ.h4_88jjTQNZfzhAr9YBE7ETH1iI";
const prefix = "))";

var fortunes = [
    "Yes",
	"No",
	"Maybe",
	"fucc u"
];

var bot = new Discord.Client();

bot.on("ready", function () {
	bot.user.setGame("))help | 1 server | 160 members | with Vlad07 *wink wink*");
	console.log("Ready");
});

bot.on("message", function(message) {
	if(message.author.equals(bot.user)) return;
	
	if(!message.content.startsWith(prefix)) return;
	
	var args = message.content.substring(prefix.length).split(" ");
	
	switch (args[0].toLowerCase()) {
	    case "ping":
		    message.channel.sendMessage("Pong!");
			break;
		case "invite":
		    message.author.sendMessage("If you want to add me in your server, you have here a link: https://discordapp.com/oauth2/authorize?client_id=431900897820409866&permissions=37011456&scope=bot")
			break;
		case "info":
		    message.channel.sendMessage("Hello! I'am MemeBot. Type `))help` if you want to know my commands. See you later! :smiley:");
			break;
		case "8ball":
		    if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
			else message.channel.sendMessage("I can't read that :neutral_face:");
			break;
		case "help":
		   var embed = new Discord.RichEmbed()
		       .setTitle("Welcome to the help page!")
		       .addField("Bot prefix", "`))`")
			   .addField("General Commands", "ping, info, invite,", true)
			   .addField("Fun Commands", "8ball", true)
			   .addField("Bot Version", "1.0.0", true)
			   .addField("READ ME", "Visit this nice and cool server here: https://discord.gg/pqtyJ4U")
			   .setThumbnail("http://i0.kym-cdn.com/entries/icons/original/000/025/054/SOMEBODY_TOUCHA_MY_SPAGHET.PNG")
			   .setColor(0xe91e63)
			   .setFooter("The last update: MemeBot is now here!")
		   message.author.sendEmbed(embed);
		   break;
		case "massdm":
		   var embed = new Discord.RichEmbed()
			   .setDescription("Missing Args :x:")
			   .setColor(0xe74c3c)
			   message.channel.sendEmbed(embed);
		   break;
        default:
		    message.channel.sendMessage("Invalid command");
	}
});

bot.login(token);
