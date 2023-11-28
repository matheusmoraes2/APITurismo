import { ApiProperty } from "@nestjs/swagger";
import { Endereco } from "../Endereco";
import { Type } from "class-transformer";

export class CadastroRequest {
    constructor() {

    }

    @ApiProperty()
    Email: string

    @ApiProperty()
    Senha: string

    @ApiProperty()
    Nome: string

    @ApiProperty()
    DataNascimento: Date

    @ApiProperty()
    Tag: string

    @ApiProperty()
    NomeUsuario: string

    @ApiProperty()
    @Type(() => Endereco)
    Endereço: Endereco

}
