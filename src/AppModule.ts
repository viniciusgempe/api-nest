import { Module } from '@nestjs/common';
import { UserModule } from './infra/users/UserModule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), UserModule],
})
export class AppModule {}
