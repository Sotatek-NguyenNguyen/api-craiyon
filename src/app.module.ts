import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';
import { ApiService } from './api/api.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
// import { VerifyMiddleware } from './common/middleware/verify.middleware';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [AppController, ApiController],
  providers: [AppService, ApiService],
})
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(VerifyMiddleware)
//       .forRoutes('api');
//   }
// }

export class AppModule  {}