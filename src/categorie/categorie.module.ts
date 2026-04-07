import { Module } from '@nestjs/common';
import { CategorieController } from './categorie.controller';
import { CategorieService } from './categorie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorie } from 'src/entites/categorie.entity';

@Module({
  controllers: [CategorieController],
  providers: [CategorieService],
  imports: [TypeOrmModule.forFeature([Categorie])]
})
export class CategorieModule { }
