import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
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
import { GeocodeDTO } from './geocode.dto';

export class HomeDTO {
	@ApiProperty()
	@IsNotEmpty()
	@IsUUID()
	readonly uuid: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	readonly name: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	// can add a custom validation pipe here to verify this is a valid address
	// this validation should also be done on the front end
	readonly address: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	readonly description: string;

	@ApiProperty()
	@IsNotEmpty()
	readonly type: HomeTypes;

	@ApiProperty()
	@IsNotEmpty()
	@IsNumber()
	@IsPositive()
	readonly bedrooms: number;

	@ApiProperty()
	@IsNotEmpty()
	@IsNumber()
	@IsPositive()
	readonly bathrooms: number;

	@ApiProperty()
	@IsNotEmpty()
	@IsNumber()
	@IsPositive()
	readonly size: number;

	@ApiProperty()
	@IsNotEmpty()
	readonly parking: Parking;

	@ApiProperty()
	@IsNotEmpty()
	@IsBoolean()
	readonly active: boolean;

	@ApiPropertyOptional()
	@IsOptional()
	geocode?: GeocodeDTO;

	// base64 images
	@ApiPropertyOptional()
	@IsOptional()
	@IsString({each: true})
	readonly pictures?: string[];

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	readonly listPrice?: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsNumber()
	readonly sellPrice?: number;

	@ApiPropertyOptional()
	@IsOptional()
	@IsDateString()
	readonly listingDate?: number;

	@ApiPropertyOptional()
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