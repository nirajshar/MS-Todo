import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@ApiTags('Todo')
@Controller('todo')
export class TodoController {
    constructor(
        private readonly todoService: TodoService,
    ) { }


    @ApiOperation({ summary: 'Find all todos' })
    @ApiResponse({ status: 200, description: 'Return all todos' })
    @ApiResponse({ status: 404, description: 'Todo not found' })
    @Get()
    async findAll() {
        return await this.todoService.findAll();
    }

    @ApiOperation({ summary: 'Get One todo' })
    @ApiResponse({ status: 200, description: 'Return all todos' })
    @ApiResponse({ status: 404, description: 'Todo not found' })
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.todoService.findOne(id);
    }

    @ApiOperation({ summary: 'Create One todo' })
    @ApiBody({ type: CreateTodoDto })
    @ApiResponse({ status: 200, description: 'Create one todo' })
    @ApiResponse({ status: 404, description: 'Todo not created' })
    @Post()
    async create(@Body() createTodoDto: CreateTodoDto) {
        return await this.todoService.create(createTodoDto);
    }

    @ApiOperation({ summary: 'Update One todo' })
    @ApiBody({ type: UpdateTodoDto })
    @ApiResponse({ status: 200, description: 'Update one todo' })
    @ApiResponse({ status: 404, description: 'Todo not updated' })
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
        return await this.todoService.update(id, updateTodoDto);
    }

    @ApiOperation({ summary: 'Delete One todo' })
    @ApiResponse({ status: 200, description: 'Delete one todo' })
    @ApiResponse({ status: 404, description: 'Todo not deleted' })
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.todoService.delete(id);
    }

}
