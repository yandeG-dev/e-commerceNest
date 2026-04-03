import { Module } from '@nestjs/common';
import { PanierService } from './panier.service';
import { PanierController } from './panier.controller';
import { ProduitsModule } from '../produits/produits.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlePanier } from '../entites/articlePanier.entity';

@Module({
  imports: [ProduitsModule, TypeOrmModule.forFeature([ArticlePanier])],
  providers: [PanierService],
  controllers: [PanierController],
})
export class PanierModule { }
