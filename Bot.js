const Discord = require("discord.js");
var client = new Discord.Client();
var Auth = require("./auth.json");

client.login(Auth, output);

function output (error, token) {
	if (error) {
		console.log("There was an error: " + error);
		return;
	} else
	console.log("logged In. Mr. Meeseeks");
}

client.on('message', message => {
 if (message.content === "ping"){
  message.reply("Pong!");
 }
});

client.on('message', message => {
 if (message.content === "Nick"){
  message.reply("GAS THAT STUPID JEW!");
 }
});

client.on('message', message => {
 if (message.content === "Help"){
  message.reply("Can do!");
 }
});

client.on('message', message => {
 if (message.content === "fuck you"){
  message.reply("Alright! I ain't no bitch tho so Nick best be on bottom.");
 }
});

client.on('message', message => {
 if (message.content === "I love you"){
  message.reply("Gabe is mine fuck off.");
 }
});

client.on('message', message => {
 if (message.content === "/changelog"){
  message.reply("Availible Commands: Gabe, Help, Nick, Fuck You, /changelog, Cory");
 }
});

client.on('message', message => {
 if (message.content === "Gabe"){
  message.reply("Daddy*");
 }
});

client.on('message', message => {
 if (message.content === "Cory"){
  message.reply("That kid is a fucking faggot. I heard he once shit himself at the mall.");
 }
});

client.on('message', message => {
 if (message.content === "suggestionpage"){
  message.reply("Hello! I am Mr. Meeseeks! If you want me to not be stupid tell Cory what you want me to do here! To see my changelog do /changelog in a message to me!");
 }
});
