import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../AppModule';

describe('User - integration tests', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be able to create user', async () => {
    const { status } = await request(app.getHttpServer())
      .post('/users')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send({
        email: 'teste@email.com',
        name: 'User Teste',
      });

    expect(status).toBe(201);
  });
});
