import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CadastroRequest } from 'src/models/User/CadastroRequest';
import { CadastroResponse } from 'src/models/User/CadastroResponse';
import { FindUserReponse } from 'src/models/User/FindUserReponse';
import { FindUserRequest } from 'src/models/User/FindUserRequest';
import { UpdateUserRequest } from 'src/models/User/UpdateUserRequest';
import { UserService } from 'src/service/User.service';

@Controller('User')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    @HttpCode(200)
    @ApiBody({ type: CadastroRequest })
    @ApiResponse({ status: 200, type: CadastroResponse })
    async cadastrar(@Body() request: CadastroRequest): Promise<CadastroResponse> {
        return this.userService.cadastrar(request);
    }

    @Get(':userId')
    @HttpCode(200)
    @ApiParam({ name: 'userId', description: 'identificador do usuário.' })
    async getUser(@Param() params: FindUserRequest): Promise<FindUserReponse> {
        return this.userService.findUser(params)
    }

    @Put(':userId')
    @HttpCode(201)
    @ApiParam({ name: 'userId', description: 'dentificador do usuário.' })
    async updateUser(@Param() params: FindUserRequest, @Body() request: UpdateUserRequest): Promise<any> {
        await this.userService.updateUser(params.userId, request)
    }

    @Delete(':userId')
    @HttpCode(201)
    @ApiParam({ name: 'userId', description: 'dentificador do usuário.' })
    async deleteUser(@Param() params: FindUserRequest): Promise<any> {
        await this.userService.deleteUser(params.userId)
    }
}
