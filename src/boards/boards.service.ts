import { Injectable } from '@nestjs/common';
import { Boards } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';


@Injectable()
export class BoardsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBoardDto: prisma.BoardsCreateInput) {
    return await this.prisma.boards.create({
      data: createBoardDto,
    });
  }

  async findAll(): Promise<Boards[]> {
    return await this.prisma.boards.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.boards.findUnique({
      where: {id: id},
    });
  }

  async update(id: number, updateBoardDto: prisma.BoardsUpdatInput)) {
    return await this.prisma.boards.update({
      where: {id},
      data: updateBoardDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.boards.delete({
      where: {id},
    });
  }
}
