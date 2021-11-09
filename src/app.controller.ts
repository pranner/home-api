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
  @Post('homesByLocation')
  public getHomesByLocation(centerLocation: string, locationBoundary: string[]): HomeDTO[] {
    return this.appService.getHomesByLocation(centerLocation, locationBoundary);
  }

  @HttpCode(HttpStatus.OK)
  @Post('createNewHome')
  public async createNewHome(@Body() request: HomeDTO): Promise<HomeDTO> {
    return this.appService.createNewHome(request);
  }
  
  @HttpCode(HttpStatus.OK)
  @Post('homesCountPerArea')
  public homesCountPerArea(@Body() location: string): number {
    return this.appService.homesCountPerArea(location);
  }
}
