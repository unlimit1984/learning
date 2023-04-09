import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProductModel } from './product.model';

@Module({
    controllers: [ProductController],
    imports: [
        // Option 2
        TypegooseModule.forFeature([
            {
                typegooseClass: ProductModel,
                schemaOptions: { collection: 'Product' },
            },
        ]),
    ],
})
export class ProductModule {}
