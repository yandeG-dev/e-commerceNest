import { Produit } from './produit.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Categorie {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nom: string;
    @OneToMany(type => Produit, (produit) => produit.categorie)
    produits: Produit[];


}

