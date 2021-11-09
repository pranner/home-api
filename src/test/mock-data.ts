import { HomeDTO } from "../dto/home.dto";
import { HomeTypes, Parking } from '../enums/home.enum';

export const homeMock: HomeDTO = {
	uuid: 'c573b45f-4dea-4eb5-a2df-54e62414a31c',
	name: 'Our Home',
	address: '123 Home St, Toronto, ON M5T1G4',
	description: 'mock description',
	type: HomeTypes.DUPLEX,
	bedrooms: 3,
	bathrooms: 2.5,
	size: 800,
	parking: Parking.DOUBLE_GARAGE_ATTACHED,
	active: true,
}

export const homeMock_condo: HomeDTO = {
	uuid: 'a453b45f-4dea-4eb5-a2df-54e62414b41h',
	name: 'Our Condo',
	address: '456 Condo St, Toronto, ON M5T1G4',
	description: 'condo description',
	type: HomeTypes.CONDOS,
	bedrooms: 2,
	bathrooms: 1,
	size: 500,
	parking: Parking.UNDERGROUND,
	active: true,
}

export const homesArray = [homeMock, homeMock_condo];