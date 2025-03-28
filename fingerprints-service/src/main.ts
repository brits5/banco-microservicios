import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import 'reflect-metadata'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuración global de pipes para validación
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: false,
    transform: true,
    transformOptions: { enableImplicitConversion: true }
  }));

  await app.listen(3003); // Usa un puerto diferente a tus otros servicios
  console.log(`Fingerprint service is running on: ${await app.getUrl()}`);
}
bootstrap();
