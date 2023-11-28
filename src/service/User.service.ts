import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CadastroRequest } from 'src/models/User/CadastroRequest';
import { CadastroResponse } from 'src/models/User/CadastroResponse';
import { UserRepository } from 'src/repository/User.repository';
import { Prisma, User } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';
import { FindUserReponse } from 'src/models/User/FindUserReponse';
import { FindUserRequest } from 'src/models/User/FindUserRequest';
import { UpdateUserRequest } from 'src/models/User/UpdateUserRequest';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository
  ) { }

  async cadastrar(request: CadastroRequest): Promise<CadastroResponse> {
    const response = new CadastroResponse()
    try {
      const Endereco: Prisma.EnderecoCreateNestedOneWithoutUserInput = {
        create: {
          Pais: request.Endereço.Pais,
          Estado: request.Endereço.Estado,
          Cidade: request.Endereço.Cidade,
          Bairro: request.Endereço.Bairro,
          Cep: request.Endereço.Cep,
          Complemento: request.Endereço.Complemento,
          Numero: request.Endereço.Numero,
          Rua: request.Endereço.Rua
        }
      }
      const User: Prisma.UserCreateInput = {
        Nome: request.Nome,
        uuid: uuidv4(),
        Email: request.Email,
        Senha: request.Senha,
        DataNascimento: request.DataNascimento,
        Tag: request.Tag,
        NomeUsuario: request.NomeUsuario,
        Endereco: Endereco
      }
      const repositoryResponse = await this.userRepository.cadastrar(User)
      repositoryResponse.Senha = repositoryResponse.Senha.replace(/./g, '*')

      response.mensagem = 'Usuário criado com sucesso'
      response.user = repositoryResponse

      return response
    } catch (err) {
      throw new Error(err)
    }
  }

  async findUser(request: FindUserRequest): Promise<FindUserReponse> {
    const response = new FindUserReponse()
    const user = await this.userRepository.findUuid(request.userId)

    if (user) {
      user.Senha = user.Senha.replace(/./g, '*')
      response.mensagem = 'Usuário encontrado.'
      response.user = user
    } else {
      throw new HttpException('Usuário não encontrado.', HttpStatus.NOT_FOUND)
    }

    return response
  }

  async updateUser(uuid: string, request: UpdateUserRequest): Promise<void> {
    const userUpdate: Prisma.UserUpdateInput = {
      ...request
    }

    await this.userRepository.updateUser(uuid, userUpdate).catch((err) => {
      if (err.code == 'P2025') throw new HttpException('Usuário não encontrado.', HttpStatus.NOT_FOUND)
      throw new InternalServerErrorException()
    })
  }

  async deleteUser(uuid: string): Promise<void> {
    await this.userRepository.deleteUser(uuid).catch((err) => {
      if (err.code == 'P2025') throw new HttpException('Usuário não encontrado.', HttpStatus.NOT_FOUND)
      throw new InternalServerErrorException()
    })
  }
}
