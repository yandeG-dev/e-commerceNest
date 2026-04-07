import { Optional } from "@nestjs/common";
import { IsInt, IsNotEmpty, IsOptional, Min } from "class-validator";

export class AddPanierToDto {
    @IsNotEmpty()
    @IsInt()
    IdProduit: number;
    @IsNotEmpty()
    @IsInt()
    @Min(1)
    quantite: number
    @IsOptional()
    @IsInt()
    IdUser: number;
}