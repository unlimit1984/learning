import { BadRequestException, Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ALREADY_REGISTERED_ERROR } from './auth.constants';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UsePipes(new ValidationPipe())
    @Post('register')
    async register(@Body() dto: AuthDto) {
        const oldUser = this.authService.findUser(dto.login);
        if (oldUser != null) {
            throw new BadRequestException(ALREADY_REGISTERED_ERROR);
        }
        return this.authService.createUser(dto);
    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: AuthDto) {}
}
