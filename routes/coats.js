var express = require('express');
var router = express.Router();
var fs = require('fs');

const COATS_FILE = './data/coats.json';

router.get('/', function (req, res) {
    fs.readFile(COATS_FILE, "utf-8", (err, data) => {
        if (err) {
            console.error(err)
            res.status(500).send('there was a problem.')
            return;
        }

        res.json(JSON.parse(data))
    })
})
/* GET clothes listing. */

module.exports = router;
