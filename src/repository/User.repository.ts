import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class UserRepository {
    constructor(
        private db: PrismaService
    ) { }

    async cadastrar(payload: Prisma.UserCreateInput): Promise<User> {
        return this.db.user.create({
            data: payload,
            include: {
                Endereco: true
            }
        })
    }

    async findEmail(email: string): Promise<User> {
        return this.db.user.findUnique({
            where: {
                Email: email
            },
            include: {
                Endereco: true
            }
        })
    }

    async findUuid(uuid: string): Promise<User> {
        return this.db.user.findUnique({
            where: {
                uuid: uuid
            },
            include: {
                Endereco: true
            }
        })
    }

    async findId(id: number): Promise<User> {
        return this.db.user.findUnique({
            where: {
                Id: id
            },
            include: {
                Endereco: true
            }
        })
    }

    async updateUser(uuid: string, payload: Prisma.UserUpdateInput): Promise<void> {
        await this.db.user.update({
            where: {
                uuid: uuid
            },
            data: payload
        })
    }

    async deleteUser(uuid: string): Promise<void> {
        await this.db.user.delete({
            where: {
                uuid: uuid
            }
        })
    }

}