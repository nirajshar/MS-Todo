import { ApiProperty } from "@nestjs/swagger"

export class BaseTodoDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description?: string
}