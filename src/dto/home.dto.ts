import {
	IsString,
	IsNotEmpty,
	IsNumber,
	IsPositive,
	IsOptional,
	IsBoolean,
	IsDateString,
	IsUUID,
} from 'class-validator';
import { HomeTypes, Parking } from '../enums/home.enum';
import { Geocode } from './geocode.dto';

export class HomeDTO {
	@IsNotEmpty()
	@IsUUID()
	readonly uuid: string;

	@IsNotEmpty()
	@IsString()
	readonly name: string;

	@IsNotEmpty()
	@IsString()
	// can add a custom validation pipe here to verify this is a valid address
	// this validation should also be done on the front end
	readonly address: string;

	@IsNotEmpty()
	@IsString()
	readonly description: string;

	@IsNotEmpty()
	readonly type: HomeTypes;

	@IsNotEmpty()
	@IsNumber()
	@IsPositive()
	readonly bedrooms: number;

	@IsNotEmpty()
	@IsNumber()
	@IsPositive()
	readonly bathrooms: number;

	@IsNotEmpty()
	@IsNumber()
	@IsPositive()
	readonly size: number;

	@IsNotEmpty()
	@IsNumber()
	readonly parking: Parking;

	@IsNotEmpty()
	@IsBoolean()
	readonly active: boolean;

	@IsOptional()
	geocode?: Geocode;

	// base64 images
	@IsNotEmpty()
	@IsString({each: true})
	readonly pictures?: string[];

	@IsOptional()
	@IsNumber()
	readonly listPrice?: number;

	@IsOptional()
	@IsNumber()
	readonly sellPrice?: number;

	@IsOptional()
	@IsDateString()
	readonly listingDate?: number;

	@IsOptional()
	@IsDateString()
	readonly closingDate?: number;

	@IsOptional()
	@IsDateString()
	readonly createdTs?: number;

	@IsOptional()
	@IsDateString()
	readonly updatedTs?: number;
}