import { ApiProperty } from "@nestjs/swagger"

export class Endereco {
    constructor() { }

    @ApiProperty()
    Pais: string

    @ApiProperty()
    Estado: string

    @ApiProperty()
    Cidade: string

    @ApiProperty()
    Bairro: string

    @ApiProperty()
    Cep: string

    @ApiProperty()
    Complemento: string

    @ApiProperty()
    Numero: string

    @ApiProperty()
    Rua: string
}