import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.schema';
import { CreateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(body: CreateUserDto): Promise<User> {
    console.log(body, 'body');
    const user = await this.usersRepository.create(body);
    await console.log({ user });
    const savedUser = await this.usersRepository.save(user);

    return savedUser;
  }

  async findAll(): Promise<User[]> {
    console.log('find all method');
    const users = await this.usersRepository.find();
    console.log({ users });

    return users;
  }

  async findOne(id: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
