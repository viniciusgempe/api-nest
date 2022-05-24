import { Module } from '@nestjs/common';
import CreateUserUseCase from '../../domain/user/useCases/UserCreateUseCase';
import UserRepository from '../../providers/database/mongoose/UserRepository';
import FakeUserRepository from '../../providers/fake/user/FakeUserRepository';

import { UserController } from './UserController';

const userFactory = {
  provide: 'userRepository',
  useFactory: () => {
    return process.env.NODE_ENV === 'development'
      ? new FakeUserRepository()
      : new UserRepository();
  },
};

@Module({
  controllers: [UserController],
  providers: [userFactory, CreateUserUseCase],
})
export class UserModule {}
