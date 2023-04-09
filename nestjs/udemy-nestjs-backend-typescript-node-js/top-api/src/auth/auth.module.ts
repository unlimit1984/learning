import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from '../users/models/user.model';
import { AuthModel } from './auth.model';

@Module({
    controllers: [AuthController],
    imports: [
        // Option 2
        TypegooseModule.forFeature([
            {
                typegooseClass: AuthModel,
                schemaOptions: { collection: 'Auth' },
            },
        ]),
    ],
})
export class AuthModule {}
