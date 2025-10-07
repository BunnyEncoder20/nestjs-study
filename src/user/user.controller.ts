import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

class createUserDTO {
  name: string;
  email: string;
  role: string;
}

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}
  // GET routes
  @Get()
  findUsers() {
    return [];
  }

  @Get(':id')
  findUserById(@Param('id') userId: string) {
    return userId;
  }

  // POST routes
  @Post()
  makeUser(@Body() userData: createUserDTO) {
    return userData;
  }

  // Patch routes
  @Patch(':id')
  updateUser(@Param('id') userId: string, @Body() updatedData: createUserDTO) {
    return { userId, ...updatedData };
  }

  // Delete routes
  @Delete(':id')
  deleteUser(@Param('id') userId: string) {
    return { deleted: userId };
  }
}
