import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddPanierToDto } from './add-panier.dto';
import { ProduitsService } from '../produits/produits.service';
import { ArticlePanier } from 'src/entites/articlePanier.entity';



@Injectable()
export class PanierService {


    constructor(private readonly produitsService: ProduitsService,
        @InjectRepository(ArticlePanier)
        private readonly articlePanierRepository: Repository<ArticlePanier>,
    ) { }

    public async AddToPanier(panier: AddPanierToDto) {

        await this.produitsService.getProductById(panier.IdProduit);
        const exist = await this.articlePanierRepository.findOne({ where: { IdProduit: panier.IdProduit, IdUser: panier.IdUser } });

        if (exist) {
            exist.quantite += panier.quantite ? panier.quantite : 1;
            return await this.articlePanierRepository.save(exist);
        } else {
            const nouvelArticle = this.articlePanierRepository.create(panier);
            return await this.articlePanierRepository.save(nouvelArticle);
        }


    }

    public async getPanier(idProduit: number): Promise<ArticlePanier> {
        const article = await this.articlePanierRepository.findOne({ where: { IdProduit: idProduit } });
        if (!article) {
            throw new NotFoundException('Article non trouvé dans le panier');
        }
        return article;
    }

    public async deleteToPanier(idProduit: number, IdUser: number) {
        const deleted = await this.articlePanierRepository.delete({ IdProduit: idProduit, IdUser: IdUser });
        if (deleted.affected === 0) {
            throw new NotFoundException("Article non trouvé dans le panier");
        }
        return "Produit supprimé du panier avec succès";
    }

    public async getAll(UserId: number) {
        return await this.articlePanierRepository.find({ where: { IdUser: UserId } });
    }
}
