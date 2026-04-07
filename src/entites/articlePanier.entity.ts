import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Produit } from './produit.entity';
import { User } from './user.entity';

@Entity()
export class ArticlePanier {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    quantite: number;
    @Column()
    IdProduit: number;
    @Column()
    IdUser: number;


    @ManyToOne(type => Produit, (produit) => produit.articles)
    @JoinColumn({ name: 'IdProduit' })
    produit: Produit;

    @ManyToOne(type => User, (user) => user.panier)
    @JoinColumn({ name: 'IdUser' })
    user: User;
}
