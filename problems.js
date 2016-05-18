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

// Next
