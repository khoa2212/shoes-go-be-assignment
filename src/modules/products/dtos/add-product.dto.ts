import { IsNotEmpty, IsNumber} from 'class-validator';

export class AddProductDto {
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;
}
