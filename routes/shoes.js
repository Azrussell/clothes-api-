var express = require('express');
var router = express.Router();
var fs = require('fs');

const SHOES_FILE ='./data/shoes.json';

router.get('/', function (req, res) {
    fs.readFile(SHOES_FILE, "utf-8", (err, data) => {
        if (err) {
            console.error(err)
            res.status(500).send('AINT NO SHOES HERE.')
            return;
        }

        res.json(JSON.parse(data))
    })
})

module.exports = router;
