import { ApiProperty } from "@nestjs/swagger"

export class LoginRequest {
    constructor() { }

    @ApiProperty()
    Login: string

    @ApiProperty()
    Password: string
}