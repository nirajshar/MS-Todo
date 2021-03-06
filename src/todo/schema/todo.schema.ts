import * as mongoose from '@nestjs/mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
   
    @Prop({ required: true })
    title: string;

    @Prop()
    description?: string;

    @Prop()
    completedAt?: Date;

    @Prop({ required: true })
    createdAt: Date;

    @Prop()
    deletedAt?: Date;

    @Prop()
    user_id: string;
}


export const TodoSchema = SchemaFactory.createForClass(Todo);
