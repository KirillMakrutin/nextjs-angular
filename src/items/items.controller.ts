import {
  Get,
  Post,
  Body,
  Controller,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.interface';
import { CreateItemDto } from './create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createItemDto: CreateItemDto) {
    this.itemsService.create(createItemDto);
  }
}
