import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { SubscriberModule } from './modules/subscriber/subscriber.module';
import { PublisherModule } from './modules/publisher/publisher.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrapModule(module, portConfig: string) {
  const fastifyAdapter = new FastifyAdapter();
  const app = await NestFactory.create<NestFastifyApplication>(module, fastifyAdapter);
  const configService = app.get(ConfigService);

  if (module === PublisherModule) {
    const config = new DocumentBuilder()
      .setTitle('HTTP Notification System')
      .setDescription('The HTTP notification system API description')
      .setVersion('1.0.0')
      .addTag('Subscribe', 'Subscribe Endpoint')
      .addTag('Publish', 'Publish Endpoint')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }

  app.enableCors();

  await app.listen(configService.get(portConfig), '0.0.0.0');
}

async function bootstrap() {
  await Promise.all([bootstrapModule(PublisherModule, 'publisher.PORT'), bootstrapModule(SubscriberModule, 'subscriber.PORT')]);
}
bootstrap();
