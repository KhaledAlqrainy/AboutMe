alert ("Welcom To Brainstorming Questions")
var username = prompt ('whats your name')

function userage()
{
  var userold = prompt (' Please enter your age?')
  while (userold >=100 || userold <=10) {
  userold = prompt ('sorry you are underage to answer these questions')
}
return userold
}
userage()

let q1 = prompt ( 'how many hearts does the occtups have?');
let q2 = prompt ('the city which called (foggy city) is?');
let q3 = prompt ('how many playes are in the basketball game?');
let q4 = prompt ('what is the color of the sky?');
alert ('hey' + username + userold +"years old" + 'you are very smart my friend' )
