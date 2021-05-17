import { Body, Controller, Delete, Get, HttpService, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(
        private readonly todoService: TodoService,
        private readonly httpService: HttpService
    ) { }

    // ## Todo-User

    @ApiTags('Todo-User')
    @ApiOperation({ summary: 'Find all todos by user' })
    @ApiResponse({ status: 200, description: 'Return all todos' })
    @ApiResponse({ status: 404, description: 'Todo not found' })
    @Get()
    async findAllByUser() {
        return await this.todoService.findAllByUser();
    }

    @ApiTags('Todo-User')
    @ApiOperation({ summary: 'Get One todo by user' })
    @ApiResponse({ status: 200, description: 'Return all todos' })
    @ApiResponse({ status: 404, description: 'Todo not found' })
    @Get(':id')
    async findOneByUser(@Param('id') id: string) {
        return await this.todoService.findOneByUser(id);
    }

    @ApiTags('Todo-User')
    @ApiOperation({ summary: 'Create One todo for user' })
    @ApiBody({ type: CreateTodoDto })
    @ApiResponse({ status: 200, description: 'Create one todo' })
    @ApiResponse({ status: 404, description: 'Todo not created' })
    @Post()
    async createForUser(@Body() createTodoDto: CreateTodoDto) {
        return await this.todoService.createForUser(createTodoDto);
    }

    @ApiTags('Todo-User')
    @ApiOperation({ summary: 'Update One todo of user' })
    @ApiBody({ type: UpdateTodoDto })
    @ApiResponse({ status: 200, description: 'Update one todo' })
    @ApiResponse({ status: 404, description: 'Todo not updated' })
    @Put(':id')
    async updateForUser(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
        return await this.todoService.updateForUser(id, updateTodoDto);
    }

    @ApiTags('Todo-User')
    @ApiOperation({ summary: 'Delete One todo of user' })
    @ApiResponse({ status: 200, description: 'Delete one todo' })
    @ApiResponse({ status: 404, description: 'Todo not deleted' })
    @Delete(':id')
    async deleteForUser(@Param('id') id: string) {
        return await this.todoService.deleteForUser(id);
    }

    // ## Todo-Admin

    @ApiTags('Todo-Admin')
    @ApiOperation({ summary: 'Show all todos' })
    @ApiResponse({ status: 200, description: 'Return all todos' })
    @ApiResponse({ status: 404, description: 'Todo not found' })
    @Get('admin/todo')
    async findAllTodoByAdmin() {
        console.log(await this._getUserDetails());
        return await this.todoService.findAll();
    }

    @ApiTags('Todo-Admin')
    @ApiOperation({ summary: 'Get One todo' })
    @ApiResponse({ status: 200, description: 'Return all todos' })
    @ApiResponse({ status: 404, description: 'Todo not found' })
    @Get('admin/todo/:id')
    async findOneTodoByAdmin(@Param('id') id: string) {
        return await this.todoService.findOne(id);
    }

    // ## Get User Details 
    private async _getUserDetails() {
        let response = await this.httpService.get('http://localhost:4000/');
        return response;
    }

}
