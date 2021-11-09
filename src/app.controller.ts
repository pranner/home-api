import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { HomeDTO } from './dto/home.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @HttpCode(HttpStatus.OK)
  @Get('homeById')
  public getHomeById(homeId: string): HomeDTO {
    return this.appService.getHomeById(homeId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('homeByLocation')
  public getHomesByLocation(): HomeDTO[] {
    return this.appService.getHomesByLocation();
  }

  @HttpCode(HttpStatus.OK)
  @Post('createNewHome')
  public createNewHome(@Body() request: HomeDTO): HomeDTO {
    return this.appService.createNewHome(request);
  }

  @HttpCode(HttpStatus.OK)
  @Post('pricePerSqFt')
  public getPricePerSqFt(@Body() request: HomeDTO): number {
    return this.appService.getPricePerSqFt();
  }
  
  @HttpCode(HttpStatus.OK)
  @Post('countPerArea')
  public countHomesPerArea(@Body() request: HomeDTO): number {
    return this.appService.countHomesPerArea();
  }
}
