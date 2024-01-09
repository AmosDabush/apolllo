import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      allowedHeaders: ['content-type'],
      origin: 'http://localhost:3000',
      credentials: true,
    },
  });
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
