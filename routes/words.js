const express = require('express');
const router = express.Router();
const {readFile, writeFile} = require('fs').promises;

router.get('/', (req, res)=>{
    res.send('Word Home Page');
});
router.get('/wotd', async (req, res)=>{
    let wordArray = await getWordFromDictinary();
    let [word, part, definition] = wordArray;
     res.render('wotd', {word:word, part:part, definition:definition});
     //Do something with that function up here
});

router.get('/allwords', async (req, res)=>{
    let allwords = await getEveryWordFromDictinary();

     res.render('allwords', {allwords});

});

let getWordFromDictinary = async ()=>{
    try{
        const data = await readFile('resorces/allwords.txt', 'utf8');
        let lines = data.split('\n');
        let randomNumber = parseInt(Math.random()*lines.length);
        let randomLine = lines[randomNumber];
        let wordArray = randomLine.split('\t');
        console.log(wordArray);
        return wordArray;
    }
    catch(err){
        console.log("there was an error reading the file", err);
    }
};

let getEveryWordFromDictinary = async()=>{
    try{
        const data = await readFile('resorces/allwords.txt', 'utf8');
        let lines = data.split('\n');
        let allwords = [];

        for(let i=0; i < lines.length; i++){
            let line = lines[i];

            if (line.trim() === "") continue;

            let[word, part, definition] = line.split('\t');

            allwords.push({
                word: word,
                part: part,
                definition: definition
            });
        }
        return allwords;
        }
    catch(err){
        console.log("there was an error reading the file", err);
    }
};


module.exports = router;