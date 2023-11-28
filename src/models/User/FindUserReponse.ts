import { ApiProperty } from "@nestjs/swagger"
import { User } from "@prisma/client"

export class FindUserReponse {
    constructor() {
        this.mensagem = undefined
    }

    @ApiProperty()
    mensagem: string

    @ApiProperty()
    user?: User
}