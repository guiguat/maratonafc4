// tslint-ignore-this-file
import { IsNotEmpty } from 'class-validator';
export default class CategoriesDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;
}
