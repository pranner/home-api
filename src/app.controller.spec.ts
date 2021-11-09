import { HttpModule } from '@nestjs/axios';
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('home', () => {
    it('should return home object when getting home by Id', () => {
      const homeData = appController.getHomeById('c573b45f-4dea-4eb5-a2df-54e62414a31c');
      expect(homeData.name).toBe('Our Home');
    });

    it('should throw a NotFoundException when home not found', () => {
      expect.assertions(1);
      try {
        const missingHomeData = appController.getHomeById('abc_not_a_home');
      } catch (err) {
        expect(err).toBeInstanceOf(NotFoundException)
      }
    });
  });
});
