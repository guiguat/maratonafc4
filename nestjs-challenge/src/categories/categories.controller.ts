import { Controller, Post, Body, Get } from '@nestjs/common';
import CategoriesDTO from './categoriesDTO';
import { CategoriesService } from './categories.service';
import Categories from './categories.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('categories')
export class CategoriesController {
  constructor(
    private categoriesService: CategoriesService,
    @InjectRepository(Categories)
    private categoriesRepo: Repository<Categories>,
  ) {}

  @Post()
  store(@Body() category: CategoriesDTO) {
    return this.categoriesService.createCategory(category);
  }

  @Get()
  index() {
    return this.categoriesRepo.find();
  }
}
