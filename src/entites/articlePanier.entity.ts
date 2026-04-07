import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Produit } from './produit.entity';
import { User } from './user.entity';

@Entity()
export class ArticlePanier {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    quantite: number;
    @ManyToOne(type => Produit, (produit) => produit.articles)
    produit: Produit;

    @ManyToOne(() => User, (user) => user.panier)
    user: User;
}
