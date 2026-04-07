import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateProduitDto } from './create-produit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produit } from 'src/entites/produit.entity';

@Injectable()
export class ProduitsService {
    constructor(
        @InjectRepository(Produit)
        private readonly produitRepository: Repository<Produit>,
    ) { }

    public async addProduct(produit: CreateProduitDto) {

        return await this.produitRepository.save(produit);

    }

    public async getProducts(): Promise<Produit[]> {
        return await this.produitRepository.find();
    }

    public async getProductById(id: number): Promise<Produit> {
        const product = await this.produitRepository.findOne({ where: { id } });
        if (!product) {
            throw new NotFoundException('Produit non existant');
        }
        return product;
    }

    public async updateProduct(id: number, produit: CreateProduitDto) {
        const result = await this.produitRepository.update(id, produit);
        if (result.affected === 0) {
            throw new NotFoundException('Produit non existant');
        }
        return this.getProductById(id);
    }

    public async deleteProduct(id: number) {
        const deletedProduit = await this.produitRepository.delete({ id });
        if (deletedProduit.affected === 0) {
            throw new NotFoundException('Produit non existant');
        }

        return "Produit supprimé avec succès";
    }
}
