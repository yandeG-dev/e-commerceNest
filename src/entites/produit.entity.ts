import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from 'typeorm';
import { ArticlePanier } from './articlePanier.entity';
import { Categorie } from './categorie.entity';

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
    @Column({ default: "https://fr.freepik.com/vecteurs-premium/vecteur-icone-image-par-defaut-page-image-manquante-pour-conception-site-web-application-mobile-aucune-photo-disponible_33011701.htm" })
    image: string;
    @Column({ default: 0 })
    stock: number;
    @Column()
    IdCategorie: number;

    @OneToMany(type => ArticlePanier, article => article.produit)
    articles: ArticlePanier[];
    @ManyToOne(type => Categorie, (categorie) => categorie.produits)
    @JoinColumn({ name: 'IdCategorie' })
    categorie: Categorie;
}