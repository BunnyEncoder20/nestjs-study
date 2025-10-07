import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';

class createUserDTO {
  name: string;
  email: string;
  role: 'Admin' | 'Engineer' | 'Intern';
}

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}
  // GET routes
  @Get()
  findUsers(@Query('role') role?: 'Intern' | 'Engineer' | 'Admin') {
    return this.userService.findall(role);
  }

  @Get(':id')
  findUserById(@Param('id') userId: string) {
    return this.userService.findOne(+userId); // That's a unary plus, quick way to convert a string into number (read mdn docs)
  }

  // POST routes
  @Post()
  makeUser(@Body() userData: createUserDTO) {
    return this.userService.createUser(userData);
  }

  // Patch routes
  @Patch(':id')
  updateUser(@Param('id') userId: string, @Body() updatedData: createUserDTO) {
    return this.userService.updateUser(+userId, updatedData);
  }

  // Delete routes
  @Delete(':id')
  deleteUser(@Param('id') userId: string) {
    return this.userService.deleteUser(+userId);
  }
}
