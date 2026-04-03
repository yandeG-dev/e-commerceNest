import { Module } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { ProduitsController } from './produits.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produit } from '../entites/produit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produit])],
  providers: [ProduitsService],
  controllers: [ProduitsController],
  exports: [ProduitsService],
})
export class ProduitsModule { }
