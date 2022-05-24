import { ApiProperty } from '@nestjs/swagger';

class UserEntity {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly email: string;
}

export default UserEntity;
