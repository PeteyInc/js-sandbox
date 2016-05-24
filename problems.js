// fizzBuzz
function fizzBuzz() {
var fizz = "Fizz";
var buzz = "Buzz";
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(fizz + buzz);
  } else if (i % 3 === 0) {
    console.log(fizz);
  } else if (i % 5 === 0) {
    console.log(buzz);
  } else { console.log(i);
  }
}
}

// longestWord

function longestWord(sentence){

	var words = sentence.split(" ");

	var longestWords = ["the"];
	var longestWordLength = 0;

	for(var i = 0; i < words.length; i++){
		var currentWord = words[i];

		if(currentWord.length > longestWordLength){
			longestWords = [];
			longestWords.push(currentWord);
			longestWordLength = currentWord.length;
		} else if(currentWord.length === longestWordLength){

			if(longestWords.indexOf(currentWord) === -1){
				longestWords.push(currentWord);
			}
		}
	}

	return longestWords;
}

console.log(longestWord("The bear beat battlestar galacticat , battlestar identity theft is hilarious Jim atenletter"))

/* Write a function that takes a string parameter and counts how many vowels the string has. Return the count value. */

function vowelCount(str1) {
	var vowels = 'aeiouAEIOU';
    var count = 0;

    for(var i = 0; i < str1.length ; i++) {
        for (var v in vowels) {
        	if (str1[i] === vowels.charAt(v)) {
        		count++;
        	}
        }
    }
    return count;
}

vowelCount("Jared Michael Peterson");

// makeTeam
function makeTeam(teamName){
	var players = [];
	return {
		addPlayer:function (playerName){
			players.push(playerName);
			console.log(teamName + ": ", players);
		},
		removePlayer:function(index){
			players.splice(index,1);
		},
		getTeamName: function() {
			return teamName;
		},
		getPlayers: function() {
			return players;
		}
	};
}
var sliderTeamObj = makeTeam("sliders");
var canadaTeamObj = makeTeam("Canada");

sliderTeamObj.addPlayer("Jonah"); //sliders: [Jonah]
sliderTeamObj.addPlayer("Chris"); //sliders: [Jonah, Chris]
sliderTeamObj.addPlayer("Laser");
canadaTeamObj.addPlayer("Bob");
canadaTeamObj.addPlayer("Snow Plow");
canadaTeamObj.addPlayer("Ice Pick");


function playGame(home, away) {
	console.log(home.getTeamName() + ": " + home.getPlayers() + " vs. " + away.getTeamName() + ": " + away.getPlayers());
}

playGame(canadaTeamObj, sliderTeamObj);

// rotCode
// Breiden
function rot13(str) {
  var strArr = str.split('');
  var encoded = [];
  for (var i = 0; i < strArr.length; i++) {
    var code = strArr[i].charCodeAt(0);
    var lowerMax = 'z'.charCodeAt(0) - 13;
    var upperMax = 'Z'.charCodeAt(0) - 13;
      if (/[a-z]/.test(strArr[i])) {
        if (code <=lowerMax) encoded.push(String.fromCharCode(code + 13));
        else encoded.push(String.fromCharCode(code - 13));
    } else if (/[A-Z]/.test(strArr[i])) {
        if (code <= upperMax) encoded.push(String.fromCharCode(code + 13));
        else encoded.push(String.fromCharCode(code - 13));
    } else {
      encoded.push(strArr[i]);
    }
  }
  return encoded.join('');
}
// Jared
function rot(string) {
  code = string.split('');
  for (var i = 0; i < array.length; i++) {
    console.log(code[i].charCodeAt);
  }
}

// addZero

function zero(string, num) {
  for (var i = 0; i < num; i++) {
    string = 0 + string;
  }
  return string;
}

// Sort and find misisng number

for (var i = 0; i < array.length; i++) {
  array[i]
}

function missNum(array) {
	array.sort(function (a,b) {
		return a - b;
	} );
	for (var i = 0; i < array.length; i++) {
	 if (array[i] - array[i + 1] != -1) return array[i] + 1;
	}
}

var nums = [4, 1, 8, 2, 3, 6, 7, 5, 10, 9, 12];

missNum(nums);

nums.sort();

// Truthy/Falsy Objective
function truthyObject(object){
for(var key in object){
    if(object.hasOwnProperty(key) && (!object[key])) delete object[key];
}
return object;
}
