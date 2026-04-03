import { Controller, Get, Post, Delete, Param, ParseIntPipe, Body } from '@nestjs/common';
import { PanierService } from './panier.service';
import { AddPanierToDto } from './add-panier.dto';

@Controller('panier')
export class PanierController {
    constructor(private readonly panierService: PanierService) { }

    @Get()
    findAll() {
        return this.panierService.getAll();
    }

    @Get(':id')
    findPanier(@Param('id', ParseIntPipe) id: number) {
        return this.panierService.getPanier(id);
    }

    @Post()
    addPanier(@Body() article: AddPanierToDto) {
        return this.panierService.AddToPanier(article);
    }

    @Delete(':id')
    deletePanier(@Param('id', ParseIntPipe) id: number) {
        return this.panierService.deleteToPanier(id);
    }
}
