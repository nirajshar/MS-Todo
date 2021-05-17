import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoDocument } from './schema/todo.schema';

@Injectable()
export class TodoService {

    constructor(
        @InjectModel(Todo.name) private readonly model: Model<TodoDocument>,
    ) { }

    async findAllByUser(): Promise<Todo[]> {

        try {
            let todos = await this.model.find().exec();

            if (!todos) {
                throw new NotFoundException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'No todo\'s found'
                });
            }
            return todos;
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: err.message,
            }, HttpStatus.BAD_REQUEST);
        }
    }

    async findOneByUser(id: string): Promise<Todo> {
       
        // let todo = await this.model.findById(id).exec();
        let todo = await this.model.findOne({ where: { id } });

        if (!todo) {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                error: 'Todo not found'
            });
        }
        return todo;
        
    }

    async createForUser(createTodoDto: CreateTodoDto): Promise<Todo> {
        try {
            let todo = await new this.model({
                ...createTodoDto,
                createdAt: new Date(),
            }).save();

            return todo;
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: err.message,
            }, HttpStatus.BAD_REQUEST);
        }

    }

    async updateForUser(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
        try {
            let todo = await this.model.findByIdAndUpdate(id, updateTodoDto).exec();

            if (!todo) {
                throw new NotFoundException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'Todo not found'
                });
            }
            return todo;
        } catch (err) {
            if (err.kind === "ObjectId") {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'Not found',
                }, HttpStatus.NOT_FOUND);
            } else {
                throw new HttpException({
                    status: HttpStatus.BAD_REQUEST,
                    error: err.message,
                }, HttpStatus.BAD_REQUEST);
            }
        }
    }

    async deleteForUser(id: string): Promise<Todo> {

        try {
            let todo = await this.model.findByIdAndDelete(id).exec();
            if (!todo) {
                throw new NotFoundException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'Todo not found'
                });
            }
            return todo;
        } catch (err) {
            if (err.kind === "ObjectId") {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'Not found',
                }, HttpStatus.NOT_FOUND);
            } else {
                throw new HttpException({
                    status: HttpStatus.BAD_REQUEST,
                    error: err.message,
                }, HttpStatus.BAD_REQUEST);
            }
        }
    }

    // ## Todo-Admin

    async findAll(): Promise<Todo[]> {

        try {
            let todos = await this.model.find().exec();

            if (!todos) {
                throw new NotFoundException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'No todo\'s found'
                });
            }
            return todos;
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: err.message,
            }, HttpStatus.BAD_REQUEST);
        }
    }

    async findOne(id: string): Promise<Todo> {
       
        // let todo = await this.model.findById(id).exec();
        let todo = await this.model.findOne({ where: { id } });

        if (!todo) {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                error: 'Todo not found'
            });
        }
        return todo;
        
    }

}
