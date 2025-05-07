import { Module, Controller } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
    Controller: [MoviesController],
    Provider: [MoviesService],
})
export class MoviesModule { }
