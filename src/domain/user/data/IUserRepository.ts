import UserEntity from '../entities/UserEntity';
import { CreateUserDTO } from './UserDTO';

export default interface IUserRepository {
  create(user: CreateUserDTO): Promise<UserEntity>;
}
