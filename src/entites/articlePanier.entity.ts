import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Produit } from './produit.entity';

@Entity()
export class ArticlePanier {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    IdProduit: number;
    @Column()
    quantite: number;
    @ManyToOne(type => Produit, produit => produit.articles)
    @JoinColumn({ name: 'IdProduit' })
    produit: Produit;
}