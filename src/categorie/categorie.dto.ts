import { IsNotEmpty, IsString } from "class-validator";
export class CategorieDto {
    @IsNotEmpty()
    @IsString()
    nom: string;

}