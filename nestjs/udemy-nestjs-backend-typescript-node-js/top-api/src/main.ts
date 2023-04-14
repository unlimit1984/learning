import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  // app.useGlobalFilters()
  // app.useGlobalPipes()
  await app.listen(3000);
}
bootstrap();
