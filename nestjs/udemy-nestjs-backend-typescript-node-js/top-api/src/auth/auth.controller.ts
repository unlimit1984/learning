import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpCode,
    Post,
    UseGuards,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import { ALREADY_REGISTERED_ERROR } from './auth.constants';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import {JwtAuthGuard} from "./guards/jwt.guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UsePipes(new ValidationPipe())
    @Post('register')
    async register(@Body() dto: AuthDto) {
        const oldUser = await this.authService.findUser(dto.login);
        if (oldUser) {
            throw new BadRequestException(ALREADY_REGISTERED_ERROR);
        }
        return this.authService.createUser(dto);
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post('login')
    // async login(@Body() dto: AuthDto) { //use it via destructuring below
    async login(@Body() { login, password }: AuthDto) {
        // const user = await this.authService.validateUser(login, password);
        const { email } = await this.authService.validateUser(login, password);
        return this.authService.login(email);
    }

    // @UseGuards(JwtAuthGuard)
    // @Get('users')
    // async getUsers() {
    //     return this.authService.findAllUser();
    // }
}
