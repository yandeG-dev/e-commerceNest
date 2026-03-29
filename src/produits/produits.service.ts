export interface Produit {
    id: number;
    name: string;
    price: number;
}
import { Injectable } from '@nestjs/common';
@Injectable()
export class ProduitsService {
    products: Produit[] = [
        { id: 1, name: 'Produit 1', price: 100 },
        { id: 2, name: 'Produit 2', price: 200 },
        { id: 3, name: 'Produit 3', price: 300 },
    ];

    public addProduct(produit: Produit) {
        const exist = this.products.find(p => p.id === produit.id)
        if (exist) {
            throw new Error('Produit deja existant');
        }
        this.products.push(produit);
        return produit;

    }
    public getProducts(): Produit[] {
        return this.products;
    }
    public getProductById(id: number) {
        const product = this.products.find(p => p.id === id)
        if (!product) {
            throw new Error('Produit non existant');
        }
        return product;
    }
    public updateProduct(id: number, produit: Produit): void {
        const index = this.products.findIndex(p => p.id === id);
        if (index == -1) {
            throw new Error('Produit non existant');
        }
        this.products[index] = { ...this.products[index], ...produit };
    }
    public deleteProduct(id: number) {
        const index = this.products.findIndex(p => p.id === id);
        if (index == -1) {
            throw new Error('Produit non existant');
        }
        this.products.splice(index, 1);
        return "Produit supprimé avec succès";
    }
}
