
const express = require('express')
const app = express()

const populacaoData = require('./populacaoDB.json')

app.get('/populacao/:uf', async (req, res) => {
    const uf = req.params.uf.toUpperCase()
    res.json(populacaoData[uf])
})

app.listen(3002, () => {
    console.log('Server População started on 3002')
})

