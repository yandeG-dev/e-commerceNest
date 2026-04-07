import { Controller, Get, Param, Post, Put, Delete, Body, ParseIntPipe } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { CreateProduitDto } from './create-produit.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';
import { UseGuards } from '@nestjs/common';

@Controller('produits')
export class ProduitsController {
    constructor(private readonly produitsService: ProduitsService) { }
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin', 'client')
    @Get()
    async findAll() {
        return await this.produitsService.getProducts();
    }
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin', 'client')
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return await this.produitsService.getProductById(id);
    }
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    @Post()
    async create(@Body() produit: CreateProduitDto) {
        return this.produitsService.addProduct(produit);
    }
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() produit: CreateProduitDto) {
        return await this.produitsService.updateProduct(id, produit);
    }
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
        return this.produitsService.deleteProduct(id);
    }
}
