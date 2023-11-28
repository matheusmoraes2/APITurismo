import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserRequest {
    constructor() {

    }

    @ApiProperty()
    Email?: string

    @ApiProperty()
    Senha?: string

    @ApiProperty()
    Nome?: string

    @ApiProperty()
    DataNascimento?: Date

    @ApiProperty()
    Tag?: string

    @ApiProperty()
    NomeUsuario?: string
}
