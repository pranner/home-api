import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return mock home object', () => {
      const homeData = appController.getHomeById('c573b45f-4dea-4eb5-a2df-54e62414a31c');
      expect(homeData.name).toBe('Our Home');
    });
  });
});
