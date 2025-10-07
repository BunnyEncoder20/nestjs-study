import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {
  private usersList = [
    {
      "id": 1,
      "name": "Varun Verma",
      "email": "varun@email.com",
      "role": "Admin",
    },
    {
      "id": 2,
      "name": "Chatanya K",
      "email": "chatanya@email.com",
      "role": "Intern",
    },
    {
      "id": 3,
      "name": "Prathemess",
      "email": "prathemess@email.com",
      "role": "Engineer"
    },
    {
      "id": 4,
      "name": "Yash",
      "email": "yash@email.com",
      "role": "Engineer",
    },
    {
      "id": 5,
      "name": "Gautam",
      "email": "gautam@email.com",
      "role": "Engineer",
    },
  ];

  findall(role?: 'Intern' | 'Engineer' | 'Admin') {
    if (role) {
      return this.usersList.filter((user) => user.role === role);
    }
    return this.usersList;
  }

  findOne(id: number) {
    return this.usersList.find((user) => user.id === id);
  }

  createUser(userData: {
    name: string;
    email: string;
    role: 'Admin' | 'Engineer' | 'Intern';
  }) {
    const newUser = {
      id: this.usersList.length + 1,
      ...userData,
    };
    this.usersList.push(newUser);
    return newUser;
  }

  updateUser(
    id: number,
    updatedData: {
      name?: string;
      email?: string;
      role: 'Admin' | 'Engineer' | 'Intern';
    },
  ) {
    this.usersList = this.usersList.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedData };
      }
      return user;
    });
    return this.findOne(id);
  }

  deleteUser(id: number) {
    const removedUser = this.findOne(id);
    if (!removedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.usersList = this.usersList.filter(
      (user) => user.id !== removedUser.id,
    );
    return removedUser;
  }
}
