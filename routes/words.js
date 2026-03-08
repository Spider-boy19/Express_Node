const express = requirw('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.send('Word Home Page');
});
router.get('/wotd', (req, res)=>{
    res.send('Word of the Day Page');
});

module.exports = router;