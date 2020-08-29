import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Categories from './categories.entity';
import { Repository } from 'typeorm';
import CategoriesDTO from './categoriesDTO';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private categoriesRepo: Repository<Categories>,
  ) {}

  createCategory(categoryDTO: CategoriesDTO) {
    const category = this.categoriesRepo.create(categoryDTO);
    return this.categoriesRepo.save(category);
  }
}
