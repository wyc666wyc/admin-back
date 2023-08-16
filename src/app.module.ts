import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SourceModule } from './source/source.module';

@Module({
  imports: [TypeOrmModule.forRoot(), SourceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
