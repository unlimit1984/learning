import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
    @IsString()
    name: string;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsNumber()
    @Max(5)
    // @Min(1) // Standard output
    @Min(1, { message: 'Рейтинг не может быть меньше 1' }) // Customized output
    rating: number;

    @IsString()
    productId: string;
}
