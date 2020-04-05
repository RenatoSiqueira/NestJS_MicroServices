const axios = require('axios')
const express = require('express')
const app = express()

const getPop = async (uf) => {
    const result = await axios.get(`http://localhost:3002/populacao/${uf}`)
    return result.data.populacao
}

app.get('/estados/v1', async (req, res) => {
    const result = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    const estados = await result.data.map(item => ({ nome: item.nome, uf: item.sigla }))
    res.json({ estados })
})

app.get('/estados/v2', async (req, res) => {
    const result = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    const listEstados = await result.data.map(item => ({ nome: item.nome, uf: item.sigla }))
    const estados = await Promise.all(await listEstados.map(async item => {
        const populacao = await getPop(item.uf)
        return ({ nome: item.nome, uf: item.uf, populacao })
    }))
    res.json({ estados })
})

app.listen(3001, () => console.log(`Server Estados started on 3001`))

