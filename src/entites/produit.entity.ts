import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ArticlePanier } from './articlePanier.entity';

@Entity()
export class Produit {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column('float')
    prix: number;
    @Column()
    description: string;
    @OneToMany(type => ArticlePanier, article => article.produit)
    articles: ArticlePanier[];
}