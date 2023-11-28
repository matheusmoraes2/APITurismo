import { ApiProperty } from "@nestjs/swagger"
import { User } from "@prisma/client"

export class CadastroResponse {
    constructor() {
        this.mensagem = undefined
    }

    @ApiProperty()
    mensagem: string

    @ApiProperty()
    user?: User
}