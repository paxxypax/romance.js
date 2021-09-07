//first need to create a word corpus. i will do this using the project's example of the lyrics from Hotline Bling. 

//first function to break the words down from a pre-existing string into individual strings to use to write the poetry
//EDIT: 9.6.21 current test is to the lyrics from blonde redhead's "the dress"
function parseText(text){
    let words = text.toLowerCase().split(' ');
    return words;
}

let words = parseText("Tears you see on my face you do have something to do with Fear starts creeping up when you have so much to lose");


//create key/values of word pairs to string together words next to each other that sound natural together
//EDIT: 9.6.21 need to build an array of two words per key for more dynamic lines of poetry
function generateWordPairs(words){
    let wordPairs = {};
    for (let j = 0; j<words.length-1; j++){
        wordPairs[words[j]]=[];
    }
    for (let i = 0; i<words.length-1; i++){
        wordPairs[words[i]].push(words[i+1]);
        if(words[i+2]!== undefined){
            wordPairs[words[i]].push(words[i+2]);
        }
    }
return wordPairs;
}

let wordPairs = generateWordPairs(words);

let punctuation = [',', ';', '!', '?'] //punctuation reference

//next function will need a helper function
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
//use the object created to write a line of poetry
function writeLine(wordPairs,num){
    let line = "";
    let objectKeys = Object.keys(wordPairs); 
    let currentWord = objectKeys[getRandomInt(objectKeys.length)];
    for(let i = 0; i<num ; i++){
        line += currentWord;
        let currentList = wordPairs[currentWord];
        if(wordPairs[currentWord] === undefined){
            currentWord = objectKeys[getRandomInt(objectKeys.length)];
        }
        else {
            let testNum = currentList.length;
            let randomNumber = getRandomInt(testNum);
            currentWord = currentList[randomNumber];
        }
        if(Math.random()>.5){ //add random punctuation
            line += punctuation[getRandomInt(punctuation.length)]
        }
        line += ' ';
    }
    return line;
}

//write the whole poem
function generatePoem(numLine){
    let poem = ''; 
    for (let i = 0; i < numLine; i++){
        let line = writeLine(wordPairs, getRandomInt(15)); //call randomizer function for random amounts of words in code
        poem += line + '\n';
    }
    return poem;
}

generatePoem(6);
