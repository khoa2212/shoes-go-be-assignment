import { IsNotEmpty, IsNumber} from 'class-validator';

export class RemoveProductDto {
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;
}