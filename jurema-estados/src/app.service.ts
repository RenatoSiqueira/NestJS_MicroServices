import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';
import { populacaoData } from './populacaoDB'
import axios from 'axios'

@Injectable()
export class AppService {
  constructor(
    @Inject('POPULACAO') private readonly populacao: ClientProxy) { }

  async getEstadosV1() {
    // Questão 1
    const result = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    const estados = await result.data.map(item => ({ nome: item.nome, uf: item.sigla }))
    return ({ estados })
  }

  async getEstadosV2() {
    // Questão 3
    const result = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    const estados = await result.data.map(item => ({ nome: item.nome, uf: item.sigla }))
    const pattern = { microservice: 'populacao' }
    const payload = { estados }
    return this.populacao.send(pattern, payload).pipe(map(estados => ({ estados })))
  }

  // Questão 2.
  async getPopulacao(uf): Promise<any> {
    const ufUpperCase = uf.toUpperCase()
    return populacaoData[0][ufUpperCase]
  }
}