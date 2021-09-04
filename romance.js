//first need to create a word corpus. i will do this using the project's example of the lyrics from Hotline Bling. 

//first function to break the words down from a pre-existing string into individual strings to use to write the poetry
function parseText(text){
let words = text.toLowerCase().split(' ');
return words;
}

let words = parseText("Ever since I left the city you you you You and me we just don't get along");


//create key/values of word pairs to string together words next to each other that sound natural together
function generateWordPairs(words){
let wordPairs = {};
for (let j = 0; j<words.length-1; j++){
    wordPairs[words[j]]=[];
}
for (let i = 0; i<words.length-1; i++){
    wordPairs[words[i]].push(words[i+1]); 
    }
    return wordPairs;
}
let wordPairs = generateWordPairs(words);
console.log(wordPairs);

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
        line += currentWord + ' ';
        let currentList = wordPairs[currentWord];
        if(wordPairs[currentWord] === undefined){
            currentWord = "just";
        }
        else {
            let testNum = currentList.length;
            let randomNumber = getRandomInt(testNum);
            currentWord = currentList[randomNumber];
        }
    }
    return line;
}
let line = writeLine(wordPairs,8); 

//write the whole poem
function generatePoem(line, numLine){
    let poem = ''; 
    for (let i = 0; i < numLine; i++){
            poem += line + "\n";
    }
    return poem;
}

generatePoem(line, 6);
