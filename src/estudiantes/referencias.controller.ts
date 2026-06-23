import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ESTUDIANTE_SERVICE } from 'src/config/service';

@Controller()
export class ReferenciasController {
  constructor(
    @Inject(ESTUDIANTE_SERVICE) private readonly client: ClientProxy,
  ) {}

  @Get('sexos')
  getAllSexos() {
    return this.client.send({ cmd: 'get_all_sexos' }, {});
  }

  @Get('sexos/:id')
  getOneSexo(@Param('id') id: number) {
    return this.client.send({ cmd: 'get_one_sexo' }, id);
  }

  @Get('etnias')
  getAllEtnias() {
    return this.client.send({ cmd: 'get_all_etnias' }, {});
  }

  @Get('etnias/:id')
  getOneEtnia(@Param('id') id: number) {
    return this.client.send({ cmd: 'get_one_etnia' }, id);
  }
}
