var express = require('express');
var router = express.Router();

var fs = require('fs');

const CLOTHES_FILE = './data/clothes.json';

/* GET clothes listing. */
router.get('/', function(req, res) {
    fs.readFile(CLOTHES_FILE, "utf-8", (err, data) => {
        if(err) {
            console.error(err)
            res.status(500).send('there was a problem.')
            return;
        }
        res.json(JSON.parse(data))
    })

//   res.send('Here is my closet');
});

module.exports = router;

// GET CLOTHING ID

router.get('/:id', (req, res) => {
    if(err) {
        console.error(err);
        res.status(500).send('There was a problem reading the file.')
        return;
    }
})
