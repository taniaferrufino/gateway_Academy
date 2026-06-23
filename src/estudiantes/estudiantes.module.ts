import { Module } from '@nestjs/common';
import { EstudiantesController } from './estudiantes.controller';
import { ReferenciasController } from './referencias.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ESTUDIANTE_SERVICE } from 'src/config/service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ESTUDIANTE_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.MICROSERVICE_HOST,
          port: Number(process.env.MICROSERVICE_PORT),
        },
      },
    ]),
  ],
  controllers: [EstudiantesController, ReferenciasController],
  providers: [],
})
export class EstudiantesModule { }
