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

module.exports = router;

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