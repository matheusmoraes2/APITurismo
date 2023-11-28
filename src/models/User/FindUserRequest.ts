import { ApiProperty } from "@nestjs/swagger"

export class FindUserRequest {
    constructor() {
        this.userId = undefined
    }

    @ApiProperty()
    userId: string
}