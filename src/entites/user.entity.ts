import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ArticlePanier } from './articlePanier.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ unique: true })
    email: string;
    @Column()
    password: string;

    @Column({ default: 'client' })
    role: string;

    @OneToMany(type => ArticlePanier, (article) => article.user)
    panier: ArticlePanier[];
}
