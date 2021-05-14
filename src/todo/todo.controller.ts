import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(
        private readonly todoService: TodoService,
    ) {}

    @Get()
    async findAll() {
        return await this.todoService.findAll();
    }

    @Get(':id') 
    async findOne(@Param('id') id: string) {
        return await this.todoService.findOne(id);
    }

    @Post()
    async create(@Body() createTodoDto: CreateTodoDto) {
        return await this.todoService.create(createTodoDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
        return await this.todoService.update(id, updateTodoDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.todoService.delete(id);
    }

}
