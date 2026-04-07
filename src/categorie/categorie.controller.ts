import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Categorie } from 'src/entites/categorie.entity';
import { CategorieService } from './categorie.service';
import { CategorieDto } from './categorie.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';

@Controller('categorie')
export class CategorieController {
    constructor(private readonly categorieService: CategorieService) { }
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    @Post()
    async addCategorie(@Body() categorie: CategorieDto) {
        return await this.categorieService.addCategorie(categorie);
    }

    @Get()
    async findAll() {
        return await this.categorieService.getCategories();
    }
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return await this.categorieService.getCategorieById(id);
    }
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() categorie: CategorieDto) {
        return await this.categorieService.updateCategorie(id, categorie);
    }
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.categorieService.deleteCategorie(id);
    }

}
