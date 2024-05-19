import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const PORT = process.env.PORT || '5001';

const swaggerOptions = new DocumentBuilder()
  .setTitle(`Currency API docs`)
  .setDescription('Documentation')
  .setVersion('1.0.0')
  .build();

class Application {
  app: INestApplication;

  public async bootstrap(): Promise<void> {
    await this.setupNestApp();
    this.setupSwagger();
    await this.runHttpServer();
  }

  private async setupNestApp() {
    this.app = await NestFactory.create(AppModule);
    console.log('Nest aplication was created.');
  }

  private async runHttpServer(): Promise<void> {
    await this.app.listen(PORT, () =>
      console.log(`Server started on port = ${PORT}`),
    );
  }

  private setupSwagger(): void {
    const document = SwaggerModule.createDocument(this.app, swaggerOptions);
    SwaggerModule.setup('/api-docs', this.app, document);
  }
}

export const application = new Application();

application.bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});
