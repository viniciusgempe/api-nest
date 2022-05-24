import { CreateUserDTO } from '../../domain/user/data/UserDTO';
import FakeUserRepository from '../../providers/fake/user/FakeUserRepository';
import CreateUserUseCase from '../../domain/user/useCases/UserCreateUseCase';

const mock: CreateUserDTO = {
  email: 'teste@email.com',
  name: 'User Teste',
};

let userCreateUseCase: CreateUserUseCase;

describe('Create new User - Unit Test', () => {
  beforeAll(async () => {
    userCreateUseCase = new CreateUserUseCase(new FakeUserRepository());
  });

  it('should be able to create user', async () => {
    await expect(userCreateUseCase.execute(mock)).resolves.toBeDefined();
  });
});
