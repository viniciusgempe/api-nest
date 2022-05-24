import { Injectable } from '@nestjs/common';
import IUserRepository from '../../../domain/user/data/IUserRepository';
import { CreateUserDTO } from '../../../domain/user/data/UserDTO';
import UserEntity from '../../../domain/user/entities/UserEntity';

@Injectable()
export default class UserRepository implements IUserRepository {
  private users: UserEntity[] = [];

  public async create(user: CreateUserDTO): Promise<UserEntity> {
    const newUser: UserEntity = {
      ...user,
      id: 123,
    };
    this.users.push(newUser);

    return newUser;
  }
}
