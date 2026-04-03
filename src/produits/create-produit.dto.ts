import { IsInt, IsNotEmpty, Min, IsString } from "class-validator";

export class CreateProduitDto {


    @IsNotEmpty()
    @IsString()
    nom: string;

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    prix: number;

    @IsNotEmpty()
    @IsString()
    description: string;
}