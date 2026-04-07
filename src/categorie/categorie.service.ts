import { Injectable } from '@nestjs/common';
import { CategorieDto } from './categorie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categorie } from 'src/entites/categorie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategorieService {
    constructor(
        @InjectRepository(Categorie)
        private readonly categorieRepository: Repository<Categorie>,
    ) { }


    public async addCategorie(categorie: CategorieDto) {
        return await this.categorieRepository.save(categorie);
    }

    public async getCategories(): Promise<Categorie[]> {
        return await this.categorieRepository.find();
    }

    public async getCategorieById(id: number) {
        return await this.categorieRepository.findOne({ where: { id } });
    }

    public async updateCategorie(id: number, categorie: CategorieDto) {
        return await this.categorieRepository.update(id, categorie);
    }

    public async deleteCategorie(id: number) {
        return await this.categorieRepository.delete(id);
    }

}
