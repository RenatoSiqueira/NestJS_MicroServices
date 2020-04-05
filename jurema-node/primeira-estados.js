const axios = require('axios')
const express = require('express')
const app = express()

const PORT = 3001

app.get('/estados', async (req, res) => {
    const result = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    const estados = result.data.map(item => {
        return ({ nome: item.nome, uf: item.sigla })
    })
    res.json({ estados })
})

app.listen(PORT, () => console.log(`Server Estados started on ${PORT}`))