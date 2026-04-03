import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduitsModule } from './produits/produits.module';
import { PanierModule } from './panier/panier.module';
import { ArticlePanier } from './entites/articlePanier.entity';
import { Produit } from './entites/produit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'passer',
      database: 'ecommerce',
      entities: [Produit, ArticlePanier],
      synchronize: true,
    }),
    ProduitsModule,
    PanierModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
