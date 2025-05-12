import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [HealthModule, MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
