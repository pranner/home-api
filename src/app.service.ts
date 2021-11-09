import { Injectable } from '@nestjs/common';
import { homeMock, homeMock_condo, homesArray } from './test/mock-data';
import { HomeDTO } from './dto/home.dto';

@Injectable()
export class AppService {
  public getHomeById(id: string): HomeDTO {
    // this would normally be a db operation
    const selectedHome = homesArray.find(home => home.uuid === id);
    return selectedHome;
  }

  public getHomesByLocation(): HomeDTO[] {
    return [homeMock];
  }

  public createNewHome(params: HomeDTO): HomeDTO {
    homesArray.push(params);
    console.log(homesArray); // usually a db operation
    return params;
  }

  public getPricePerSqFt(): number {
    return 5;
  }

  public countHomesPerArea(): number {
    return 10;
  }
}
