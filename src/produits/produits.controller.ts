import { Controller, Get, Param, Post, Put, Delete, Body, ParseIntPipe } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { CreateProduitDto } from './create-produit.dto';
@Controller('produits')
export class ProduitsController {
    constructor(private readonly produitsService: ProduitsService) { }

    @Get()
    async findAll() {
        return await this.produitsService.getProducts();
    }
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return await this.produitsService.getProductById(id);
    }
    @Post()
    async create(@Body() produit: CreateProduitDto) {
        return this.produitsService.addProduct(produit);
    }
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() produit: CreateProduitDto) {
        return await this.produitsService.updateProduct(id, produit);
    }
    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
        return this.produitsService.deleteProduct(id);
    }
}
