import { ApiProperty } from '@nestjs/swagger';
import {BaseTodoDto} from './base-todo.dto';

export class UpdateTodoDto extends BaseTodoDto {
    @ApiProperty()
    completedAt?: Date
}