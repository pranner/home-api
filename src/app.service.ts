import { Injectable, NotFoundException } from '@nestjs/common';
import { homeMock, homeMock_condo, homesArray } from './test/mock-data';
import { HomeDTO } from './dto/home.dto';
import { Geocode } from './dto/geocode.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  public getHomeById(id: string): HomeDTO {
    // this would normally be a db operation
    const selectedHome = homesArray.find(home => home.uuid === id);
    if(selectedHome){
      return selectedHome;
    } else {
      throw new NotFoundException('Home not found'); 
    }
  }

  public getHomesByLocation(
    centerLocation: string,
    locationBoundary: string[],
    ): HomeDTO[] {
      // STUB get the homes in a certain area by the starting location and view boundary
    return [homeMock, homeMock_condo];
  }

  public async createNewHome(params: HomeDTO): Promise<HomeDTO> {
    const geocode = this.getLatitudeLongitudeFromAddress(params.address);
    params.geocode = await geocode;
    homesArray.push(params);
    console.log(homesArray); // usually a db operation
    return params;
  }

  public homesCountPerArea(location: string): number {
    // Useful for showing total homes for sale on a map
    // Not efficient to load all homes at once so this is better
    // STUB
    return 10;
  }

  private async getLatitudeLongitudeFromAddress(address: string): Promise<Geocode> {
    // ideally here you would connect to the Google Geocoding API to get this info
    const sanitizedAddress = this.sanitizeAddressForGoogleApiURL(address);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?${sanitizedAddress}`;
    try{
      const googleMapsData = await this.httpService.get(url).toPromise();
      const geocodeData = {
        latitude: googleMapsData.data.geometry.latitude,
        longitude: googleMapsData.data.geometry.longitude,
        // return geocodeData; but this wont work since we dont have google api key to get values
      }
    } catch (err) {
      console.error(err);
    }
    return {
      latitude: 55.256,
      longitude: 66.253,
    }
  }

  private sanitizeAddressForGoogleApiURL(address: string): string {
    // Get address and convert it to the url-escaped format required by googlemaps api
    return '24%20Sussex%20Drive%20Ottawa%20ON+API_KEY'
  }
}
