import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from '../../domain/user/data/UserDTO';
import UserEntity from '../../domain/user/entities/UserEntity';
import CreateUserUseCase from '../../domain/user/useCases/UserCreateUseCase';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiCreatedResponse({ type: UserEntity })
  create(
    @Body(new ValidationPipe()) createUserDTO: CreateUserDTO,
  ): Promise<UserEntity> {
    return this.createUserUseCase.execute(createUserDTO);
  }
}
