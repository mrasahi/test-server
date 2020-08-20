const router = require('express').Router()
const path = require('path')


// goes to test.html page if /test if put in url
router.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'test.html'))
})


// Default url goes to index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})


module.exports = router