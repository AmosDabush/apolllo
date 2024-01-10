import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      allowedHeaders: ['content-type', 'Accept', 'Authorization'],
      origin: 'http://localhost:3000',
      credentials: true,
      // preflightContinue: false,
    },
  });
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
