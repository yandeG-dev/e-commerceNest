import { IsNotEmpty, IsString } from "class-validator";

export class UserDto {
    @IsNotEmpty()
    @IsString()
    nom: string;
    @IsNotEmpty()
    @IsString()
    email: string;
    @IsNotEmpty()
    @IsString()
    password: string;
    @IsNotEmpty()
    @IsString()
    role: string;
}