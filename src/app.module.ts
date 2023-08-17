import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SourceModule } from './source/source.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "user",
    "entities": [
      "dist/**/*.entity{.ts,.js}"
    ],
    "synchronize": true
  }), SourceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
