import { IsInt, IsNotEmpty, Min } from "class-validator";

export class AddPanierToDto {
    @IsNotEmpty()
    @IsInt()
    IdProduit: number;
    @IsNotEmpty()
    @IsInt()
    @Min(1)
    quantite: number
}