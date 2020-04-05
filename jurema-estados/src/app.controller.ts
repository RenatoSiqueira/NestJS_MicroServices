import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/estados/v1')
  getEstadosV1() {
    return this.appService.getEstadosV1();
  }

  @Get('/estados/v2')
  getEstadosV2() {
    return this.appService.getEstadosV2();
  }

  @Get('/populacao/:uf')
  getPopulacao(@Param() params) {
    return this.appService.getPopulacao(params.uf);
  }

}