import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class LocationDTO {
     @ApiProperty()
     @IsNotEmpty()
     @IsString()
     readonly location: string;

     @ApiPropertyOptional()
     @IsOptional()
     @IsString()
     readonly locationBoundary?: string;
}