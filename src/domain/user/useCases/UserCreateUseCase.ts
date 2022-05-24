import { Inject, Injectable } from '@nestjs/common';
import IUseCase from '../../../core/IUseCase';
import IUserRepository from '../data/IUserRepository';

import { CreateUserDTO, ResponseCreateUserDTO } from '../data/UserDTO';

@Injectable()
export default class CreateUserUseCase
  implements IUseCase<CreateUserDTO, ResponseCreateUserDTO>
{
  constructor(
    @Inject('userRepository') private readonly userRepository: IUserRepository,
  ) {}

  public async execute({
    email,
    name,
  }: CreateUserDTO): Promise<ResponseCreateUserDTO> {
    const newUser = await this.userRepository.create({ email, name });

    return newUser;
  }
}
