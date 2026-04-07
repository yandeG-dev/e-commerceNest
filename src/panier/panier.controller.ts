import { Controller, Get, Post, Delete, Param, ParseIntPipe, Body, Req, UseGuards } from '@nestjs/common';
import { PanierService } from './panier.service';
import { AddPanierToDto } from './add-panier.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/role.guard';

@Controller('panier')
export class PanierController {
    constructor(private readonly panierService: PanierService) { }
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('client')
    @Get()
    findAll(@Req() req) {
        return this.panierService.getAll(req.user.userId);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('client')
    @Get(':id')
    findPanier(@Param('id', ParseIntPipe) id: number) {
        return this.panierService.getPanier(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('client')
    @Post()
    addPanier(@Body() article: AddPanierToDto, @Req() req) {
        article.IdUser = req.user.userId;
        return this.panierService.AddToPanier(article);
    }
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('client')
    @Delete(':id')
    deletePanier(@Param('id', ParseIntPipe) id: number, @Req() req) {
        return this.panierService.deleteToPanier(id, req.user.userId);
    }
}
