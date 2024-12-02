const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    res.render('pages/index')
})

router.get(('/download'), async(req, res) => {
    res.render('pages/download')
})