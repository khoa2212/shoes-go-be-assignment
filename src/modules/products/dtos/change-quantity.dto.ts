import { IsNotEmpty, IsNumber } from 'class-validator';

export class ChangeQuanityDto {
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;

  @IsNotEmpty()
  readonly option: boolean;
}
