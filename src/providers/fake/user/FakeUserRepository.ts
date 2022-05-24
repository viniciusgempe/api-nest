import { Injectable } from '@nestjs/common';
import IUserRepository from '../../../domain/user/data/IUserRepository';
import UserEntity from '../../../domain/user/entities/UserEntity';

@Injectable()
export default class FakeUserRepository implements IUserRepository {
  private users: UserEntity[] = [];

  public async create(user: UserEntity): Promise<UserEntity> {
    const newUser: UserEntity = {
      ...user,
      id: 123,
    };
    this.users.push(newUser);

    return newUser;
  }
}
