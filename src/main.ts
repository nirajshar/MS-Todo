import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as helmet from 'helmet';


async function bootstrap() {

  const port = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');
  // app.enableCors();
  app.use(helmet());  

  const config = new DocumentBuilder()
    .setTitle('Todo-Service')
    .setDescription('Todo Service : Stores & Handle User Todo\'s')
    .setVersion('1.0')    
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document,{
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });

  await app.listen(port);
  
  console.log(`App listening on http://localhost:${port}`);
}
bootstrap();
