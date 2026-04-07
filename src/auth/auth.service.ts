import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async register(email: string, pass: string) {
        const userExists = await this.usersService.findOneByEmail(email);
        if (userExists) {

            throw new ConflictException('Utilisateur déjà existant');
        }

        const hashedPassword = await bcrypt.hash(pass, 10);
        const user = await this.usersService.create({
            email,
            password: hashedPassword,
        });

        const { password, ...result } = user;
        return result;
    }

    async login(email: string, pass: string) {
        const user = await this.usersService.findOneByEmail(email);


        if (!user) {
            throw new UnauthorizedException('Identifiants invalides');
        }

        const isMatch = await bcrypt.compare(pass, user.password);


        if (!isMatch) {


            throw new UnauthorizedException('identifiants invalides');
        }

        const payload = { sub: user.id, email: user.email, role: user.role };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
