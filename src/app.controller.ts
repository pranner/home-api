import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { HomeDTO } from './dto/home.dto';
import { LocationDTO } from './dto/location.dto';


@ApiTags()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({summary: 'Find a home by uuid'})
  @ApiResponse({
    status: 200,
    description: 'Get home by uuid v4',
  })
  @HttpCode(HttpStatus.OK)
  @Get('homeById/:uuid')
  public getHomeById(
    @Param('uuid', new ParseUUIDPipe({version: '4'})) homeId: string): HomeDTO {
    return this.appService.getHomeById(homeId);
  }

  @ApiOperation({summary: 'Create a home'})
  @ApiResponse({
    status: 201,
    description: 'Create a new home',
    type: HomeDTO,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post('createHome')
  public async createHome(@Body() request: HomeDTO): Promise<HomeDTO> {
    return this.appService.createHome(request);
  }

  @ApiOperation({summary: 'Get a list of homes by location'})
  @ApiResponse({
    status: 201,
    description: 'Get a list of homes withtin in a location boundary',
  })
  @HttpCode(HttpStatus.CREATED)
  @Post('homesByLocation')
  public getHomesByLocation(@Body() location: LocationDTO): HomeDTO[] {
    return this.appService.getHomesByLocation(location);
  }

  @ApiOperation({summary: 'Count the number of homes in an area'})
  @ApiResponse({
    status: 201,
    description: 'Get total number of homes in a specified area',
  })  
  @HttpCode(HttpStatus.CREATED)
  @Post('homesCountPerArea')
  public homesCountPerArea(@Body() location: LocationDTO): number {
    return this.appService.homesCountPerArea(location);
  }
}
