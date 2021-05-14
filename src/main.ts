import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const port = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');
  // app.enableCors();
  await app.listen(port);
  
  console.log(`App listening on http://localhost:${port}`);
}
bootstrap();
