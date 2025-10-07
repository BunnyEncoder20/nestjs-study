import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
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

  createUser(
    name: string,
    email: string,
    role: 'Admin' | 'Engineer' | 'Intern',
  ) {
    const newUser = {
      id: this.usersList.length + 1,
      name,
      email,
      role,
    };
    this.usersList.push(newUser);
    return newUser;
  }

  updateUser(
    id: number,
    updatedData: {
      name?: string;
      email?: string;
      role: 'Admin' | 'Engineer' | 'Intern',
    },
  ) {

  }
}
