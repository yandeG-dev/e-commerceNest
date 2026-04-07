import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register')
    async register(@Body() userData: {
        email: string;
        pass: string;
        nom: string;
        role: string;
    }) {
        return await this.authService.register(userData.email, userData.pass, userData.nom, userData.role);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() userData: {
        email: string; pass: string

    }) {
        return await this.authService.login(userData.email, userData.pass);
    }
}
