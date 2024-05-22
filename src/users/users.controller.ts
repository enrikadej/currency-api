import { Body, Controller, Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.schema';
import { CreateUserDto } from './dto/users.dto';
import { ApiHeader, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FormDataRequest } from 'nestjs-form-data';

@ApiHeader({
  name: 'subscription',
  description: 'Робота з підпискою',
})
@Controller('/subscribe')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAllUser() {
    return this.usersService.findAll();
  }

  @ApiOperation({
    summary: 'Підписати емейл на отримання поточного курсу',
    description:
      'Запит має перевірити, чи немає данної електронної адреси в поточній базі даних і, в разі її відсутності, записувати її.',
    operationId: 'subscribe',
  })
  @ApiResponse({
    status: 200,
    type: Number,
    description: 'E-mail додано',
  })
  @ApiResponse({
    status: 409,
    description: 'Повертати, якщо e-mail вже є в базі даних',
  })
  @Post('/subscription')
  @FormDataRequest()
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({ status: 200, type: User })
  @Get('/:id')
  getUser(id: string): Promise<User> {
    return this.usersService.findOne(id);
  }
}
