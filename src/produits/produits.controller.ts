import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import type { Produit } from './produits.service';
@Controller('produits')
export class ProduitsController {
    constructor(private readonly produitsService: ProduitsService) { }

    @Get()
    findAll() {
        return this.produitsService.getProducts();
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.produitsService.getProductById(+id);
    }
    @Post()
    create(@Body() produit: Produit) {
        return this.produitsService.addProduct(produit);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() produit: Produit) {
        return this.produitsService.updateProduct(+id, produit);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.produitsService.deleteProduct(+id);
    }
}
