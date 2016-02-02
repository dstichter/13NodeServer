var http = require('http')

var PORT1 = 7000
var PORT2 = 7500

var server1 = http.createServer(function(req,res){
  var returnString = ranGood()
res.end(returnString)
})
var server2 = http.createServer(function(req,res){
  var returnString = ranBad()
res.end(returnString)
})
server1.listen(PORT1, function(){
  console.log("Server1 is listening at http://localhost:%s", PORT1);
});
server2.listen(PORT2, function(){
  console.log("Server2 is listening at http://localhost:%s", PORT2);
});
function ranGood(){
var response = ["Your smile is contagious",
"You look great today.",
"You're a smart cookie.",
"I bet you make babies smile.",
"You have impeccable manners.",
"I like your style.",
"You have the best laugh.",
"I appreciate you.",
"You are the most perfect you there is.",
"You are enough.",
"You're strong.",
"Your perspective is refreshing.",
"You're an awesome friend.",
"You light up the room.",
"You deserve a hug right now.",
"You should be proud of yourself.",
"You're more helpful than you realize.",
"You have a great sense of humor.",
"You've got all the right moves!",
'Is that your picture next to "charming" in the dictionary?',
"Your kindness is a balm to all who encounter it.",
"You're all that and a super-size bag of chips.",
"On a scale from 1 to 10, you're an 11.",
"You are brave.",
"You're even more beautiful on the inside than you are on the outside."]
var ran = Math.floor(Math.random() * 25)
return response[ran]
}
function ranBad(){
var ran = Math.floor(Math.random() * 10)
var response = ["Is your ass jealous of the amount of shit that just came out of your mouth?",
"Roses are red, violets are blue, I have 5 fingers, the 3rd ones for you.",
"Your birth certificate is an apology letter from the condom factory.",
"I'm not saying I hate you, but I would unplug your life support to charge my phone.",
"I bet your brain feels as good as new, seeing that you never use it.",
"If you are going to be two faced, at least make one of them pretty.",
"I wasn't born with enough middle fingers to let you know how I feel about you.",
"I’m jealous of all the people that haven't met you!",
"You bring everyone a lot of joy, when you leave the room.",
"Yo're so ugly, when your mom dropped you off at school she got a fine for littering."]
return response[ran]
}