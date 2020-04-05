import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { populacaoData } from './populacaoDB';

@Controller()
export class AppController {
  @MessagePattern({ microservice: 'populacao' })
  processPopulacao(payload: any) {
    const populacao = payload.estados.map(item => {
      const uf = item.uf.toUpperCase()
      const populacao = populacaoData[0][uf].populacao
      return ({ nome: item.nome, uf: item.uf, populacao })
    })
    return populacao
  }
}